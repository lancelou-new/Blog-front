/* eslint global-require: 0, consistent-return: 0 */
/**
 * SSR server. express
 * 整个中间层node服务的入口
 *
 * -> 相关的SEO，sitemap，robots
 * -> 模板相关处理: 字符串替换(处理行内样式，性能提升) -> ReactDOMServer(renderToString)
 * -> 静态文件服务    我们在这里使用rendToString来对renct的打包文件进行处理
 *
 * 客服端 & 服务端协商问题:
 * ------------------- above: 基础功能实现
 *
 * -> GoogleAnalytic服务端转发
 *
 * 客服端路由的话: 所有展示出来的链接我们认为都是可达的，即如果是客服端路由，通过router配置，我们可以直接跳到index页面，
 * 从而404的逻辑，我们放在服务端来进行触发
 * -> 有路由逻辑时，我们总路由逻辑的404
 * -> 基于路由逻辑下的诸如post的 option 的状态，我们同样进行404的组件挂载
 *
 * 前端接口错误导向统一的500组件。和404组件生成于同一个generator
 *
 * 转发与跨域问题:
 *  这也是nginx的配置文件所正要做的:
 *    基于location长匹配优先原则: 对于API接口前缀，导入接口服务器
 *    对于静态资源请求，进行缓存服务
 *    对于其他，接入SSR
 *
 * 明确几点，使用http thunked技术
 *
 * 当前这个文件是否需要打包？不打包如何将express与react连接起来
 * https://smallpath.me/post/vue2-ssr-on-demand-code-splitting-opti
 */

const isProd = process.env.NODE_ENV === 'production';
const config = require('./server/config');
const log4js = require('log4js');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const proxyRequest = require('request');
const request = require('./server/server-axios');
const schedule = require('node-schedule');
// const { renderToString }

const faviconMiddleware = require('./middleware/favicon');
const devWebpackMiddleware = require('./build/devServer-setup');
const disqusProyMiddleware = require('./server/disqusProxy');

// seo with robots and sitemap
const getRobotsFromConfig = require('./server/robots.js');
const { api: sitemapApi, params: sitemapParams, getSitemapFromBody } =
require('./server/sitemap.js');
const { api: rssApi, params: rssParams, getRssBodyFromBody } = require('./server/rss.js');

const resolve = file => path.resolve(__dirname, file);

// inline css cache in memory
const inline = isProd ? fs.readFileSync(resolve('./dist/styles.css'), 'utf-8') : '';

let log = null;

// dist中的打包输出文件使用内存缓存
const chunkObj = {};
if (isProd) {
  log4js.configure({
    appenders: {
      errLog: { type: 'file', filename: 'ssr.error.log' },
      infoLog: { type: 'file', filename: 'ssr.info.log' },
    },
    categories: {
      default: { appenders: ['errLog'], level: 'error' },
      performanceTrace: { appenders: ['infoLog'], level: 'info' },
    }
  });
  log = log4js.getLogger('ssrServer');
  const fileArr = fs.readdirSync(resolve('./dist'));
  for (let i = 0, len = fileArr.length; i < len; i += 1) {
    const fileName = fileArr[i];
    const arr = fileName.split('.');
    if (arr.length === 3 && arr[0] !== 'app') {
      const input = fs.readFileSync(resolve(`./dist/${fileName}`), 'utf-8');
      chunkObj[fileName] = input;
    }
  }
} else {
  log = log4js.getLogger('ssrServer');
  log.level = 'debug';
}


/**
 * 区分开发和生产环境的主要目的在于:
 *  开发环境下需要连接webpack打包服务(文件改变进行刷新)，无需行内样式，无需内存存储资源，
 *  而对于生产环境，对比如上所述，我们无需进行相关处理
 */

function flushHtml(template) {
  // 生产环境下，内部样式直接注入
  const style = isProd ? `<style type="text/css">${inline}</style>` : '';
  return {
    head: template.match(/([\w\W]*<div id="root">)[\w\W]*/)[1].replace('<link href="/dist/styles.css" rel="stylesheet">', style),
    tail: template.match(/[\w\W]*<div id="root">([\w\W]*)/)[1],
    root: '<div id="root">此处做root的划分吧，不然所有添加的都会被react Dom清掉</root>',
    origin: template,
  };
}

let sitemap = null;
let rss = null;
let robots = null;

const flushSitemap = () => request.get(sitemapApi, sitemapParams).then((result) => {
  sitemap = getSitemapFromBody(result, config);
});

const flushRss = () => request.get(rssApi, rssParams).then((result) => {
  rss = getRssBodyFromBody(result, config);
});

const requireFromFileString = (modelStr, filename) => {
  const Module = module.constructor;
  const paths = Module._nodeModulePaths(path.dirname(filename));
  const m = new Module();
  m.filename = filename;
  m.paths = paths;
  m._compile(modelStr, filename);
  return m.exports;
};

config.flushOption().then(() => {
  /**
   * 设置为trust proxy意味着我们的app运行于一个"前端"代理后面，同时使用X-Forwarded-*(client to proxy or loader balancer,
   * not proxy or loader banancer to server) http头部来判断连接，
   * 以及客服端的IP地址。 NOTE: X-Forwarded-* 是非常容易被用来欺骗的，被检测的IP也是不可靠
   */
  const app = express();
  app.enable('trust proxy');

  let ssrRenderMiddleware = null;
  let html = null;

  robots = getRobotsFromConfig(config);
  flushRss();
  flushSitemap();
  schedule.scheduleJob('30 3 * * * ', () => {
    flushRss();
    flushSitemap();
  });

  if (isProd) {
    // 生产环境下服务端
    ssrRenderMiddleware = (require('./dist/server-bundle.js')).default;
    html = flushHtml(fs.readFileSync(resolve('./dist/index.html'), 'utf-8'));
  } else {
    // 开发环境下服务端
    // 开发环境下需要连接webpack打包服务(文件改变进行刷新)，无需行内样式，无需内存存储资源，
    devWebpackMiddleware(app, {
      indexHtmlUpdate: (htmlFile) => {
        html = flushHtml(htmlFile);
      },
      serverBundleUpdate: (serverBundleStr, outputPath) => {
        ssrRenderMiddleware = (requireFromFileString(serverBundleStr, outputPath)).default;
      },
    }); // 连接上webpack Hot Middleware， 进行打包及相关的热更新服务
  }

  app.use(require('cookie-parser')(config.cookieSecret));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  const prefix = '/proxyPrefix/';

  app.use((req, res, next) => {
    const url = decodeURIComponent(req.url);
    log.debug(`${req.method} ${url}`);
    if (!isProd) return next();
    // proxy with node in production
    if (url.startsWith(prefix)) {
      const rewriteUrl = encodeURI(`http://localhost:${config.serverPort}/${url.replace(prefix, '')}`);
      proxyRequest.get(rewriteUrl).on('error', (err) => {
        res.status(500).json(err).end();
        log.error(err);
      }).pipe(res);
    } else {
      return next();
    }
  });

  app.get('/disqus/comments.json', disqusProyMiddleware.comments);
  app.post('/disqus/post.json', disqusProyMiddleware.post);

  const staticServe = (reqPath, cache) => express.static(resolve(reqPath), {
    maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0,
    fallthrough: false,
  });

  // app.use('/service-worker.js', staticServe('./dist/service-worker.js'));
  app.use('/dist', staticServe('./dist'));
  app.use('/static', staticServe('./dist/static'));
  app.get('/favicon.ico', faviconMiddleware(config.favicon));

  // seo match
  app.get('/robots.txt', (req, res) => res.end(robots));
  app.get('/rss.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    return res.end(rss);
  });
  app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    return res.end(sitemap);
  });

  app.get('*', (req, res, next) => {
    if (!ssrRenderMiddleware) {
      return res.end('waiting for compilation... refresh in a moment.');
    }

    // const supportWebp = req.header('accept').includes('image/webp');
    res.header('Content-Type', 'text/html; charset=utf-8');

    // 调用SSR相关中间件
    ssrRenderMiddleware({
      html, log, isProd, chunkObj, log4js
    })(req, res, next);
  });

  const port = config.ssrPort;
  app.listen(port, () => {
    log.debug(`server started at localhost:${port}`);
  });
}).catch((err) => {
  log.error(err);
});

