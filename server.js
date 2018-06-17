/* eslint global-require: 0, consistent-return: 0 */

const isProd = process.env.NODE_ENV === 'production';
const config = require('./server/configVo');
const log4js = require('log4js');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const proxyRequest = require('request');
const request = require('./server/server-axios');
const schedule = require('node-schedule');

const faviconMiddleware = require('./middleware/favicon');
const devWebpackMiddleware = require('./build/devServer-setup');
const disqusProyMiddleware = require('./server/disqusProxy');
const gaMiddleware = require('./server/gaProxy');

// seo with robots and sitemap
const getRobotsFromConfig = require('./server/robots.js');
const { api: sitemapApi, params: sitemapParams, getSitemapFromBody } =
require('./server/sitemap.js');
const { api: rssApi, params: rssParams, getRssBodyFromBody } = require('./server/rss.js');

const resolve = file => path.resolve(__dirname, file);

let log = null;

// dist中的打包输出文件使用内存缓存
let chunkObj = {};
if (isProd) {
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

function flushHtml(template) {
  // 生产环境下，内部样式直接注入
  return {
    head: template.match(/([\w\W]*<div id="root">)[\w\W]*/)[1],
    tail: template.match(/[\w\W]*<div id="root">([\w\W]*)/)[1],
    root: '<div id="root">此处做root的划分吧，不然所有添加的都会被react Dom清掉</div>',
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
      chunkObjUpdate: (newChunkObj) => {
        // Object.assign(chunkObj, newChunkObj); memory leak
        chunkObj = newChunkObj;
      }
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
  app.get('/ga', (req, res) => gaMiddleware(req, res));

  const staticServe = (reqPath, cache) => express.static(resolve(reqPath), {
    maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0,
    fallthrough: false,
  });

  // app.use('/service-worker.js', staticServe('./dist/service-worker.js'));
  app.use('/dist', staticServe('./dist', true));
  app.use('/static', staticServe('./dist/static', true));
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
      html, log, isProd, chunkObj
    })(req, res, next);
  });

  const port = config.ssrPort;
  app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
}).catch((err) => {
  log.error(err);
});

