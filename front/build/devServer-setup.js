/**
 * 开发环境下express服务器 webpack 打包辅助配置文件:
 *  主要做webpack的打包构建以及与express进行配合来HMR
 *
 * 此处其实我们需要启动两个打包服务，一个是服务端打包，一个是客服端打包
 *
 *
 * 现在，我们来回答为毛我们需要有服务端工程化 以及 客服端工程化两个入口文件:
 *  其实总的来说，我们需要两份运行时上下文，服务端用于渲染输出，客服端则如我们本身的spa一样
 *  基本看法: 对于客服端应用程序和服务器应用程序，我们都要使用webpack打包，服务器需要[服务器bundle]然后用于服务器端渲染(SSR)，
 * 而(客服端bundle)会发送给浏览器，用于混合静态标记。
 *
 * 以及还有一点: 我们会发现，所有和服务端相关的，或者和SSR相关的，其实都是路由，路由，在强调一篇，就是路由
 * 路由改变，服务端渲染(或本地ajax)，首屏，路由，
 * --> 同一个store，是可以 "前后端共用滴呀"，我们渲染的时候，
 *      自然回去操作store，最终，服务端取全局的store即可，然后作为INIT-STATE返回，浏览器端渲染，over
 */

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MemoryFS = require('memory-fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const clientWebpackConfig = require('./webpack.client.config');
const serverWebpackConfig = require('./webpack.server.config');
const proxy = require('http-proxy-middleware');
const config = require('../config');


// multi-compiler mode(同一个webpack下有不同的打包上下文)
// set name parameters to make sure bundles don't process each other's updates
clientWebpackConfig.entry = ['react-hot-loader/patch', 'webpack-hot-middleware/client?name=app', clientWebpackConfig.entry.app];

// clientWebpackConfig.output.filename = '[name].js'; // 删除文件不加hash，确定文件名

clientWebpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

const getChunkObjFromMfs = (MFs) => {
  const chunkObj = {};
  const assetsRoot = config.dev.assetsRoot;
  if (!fs.existsSync(assetsRoot)) {
    return chunkObj;
  }
  const fileArr = MFs.readdirSync(assetsRoot);
  for (let i = 0, len = fileArr.length; i < len; i += 1) {
    const fileName = fileArr[i];
    const arr = fileName.split('.');
    if (arr.length === 3 && arr[0] !== 'app') {
      const input = MFs.readFileSync(path.join(assetsRoot, `${fileName}`), 'utf-8');
      chunkObj[fileName] = input;
    }
  }
  return chunkObj;
};

module.exports = function devWebpackMiddleware(app, options) {
  /**
   * 客服端打包服务主要有如下事项需要做:
   *   -> 打包完成更新html模板，因为我们SSR会默认去读与改这个模板的打包产物
   *   -> 将对应消息通知上层服务器，进行更新
   */
  const clientCompiler = webpack(clientWebpackConfig);

  const devMiddlewareInstance = webpackDevMiddleware(clientCompiler, {
    publicPath: clientWebpackConfig.output.publicPath,
  });
  app.use(devMiddlewareInstance);
  clientCompiler.plugin('done', () => {
    // Hack to add a mock HMR json file to the in-memory filesystem.
    // 参照https://github.com/webpack/webpack-dev-middleware/blob/master/test/Server.test.js line40
    const wfs = devMiddlewareInstance.fileSystem;
    const filepath = path.join(config.dev.assetsRoot, 'index.html');
    let chunkObj = null;

    if (wfs.existsSync(filepath)) {
      const html = wfs.readFileSync(filepath, 'utf-8');
      options.indexHtmlUpdate(html);
    }
    chunkObj = getChunkObjFromMfs(wfs);
    options.chunkObjUpdate(chunkObj);
  });
  app.use(webpackHotMiddleware(clientCompiler));

  const proxyTable = config.dev.proxyTable;
  proxyTable && Object.keys(proxyTable).forEach((proxyStr) => {
    const option = typeof proxyTable[proxyStr] === 'string' ? { target: proxyTable[proxyStr] } : proxyTable[proxyStr];
    app.use('/api', proxy(option));
  });

  /**
   * 服务端的编译，这边我们固然要监控文件(source file)的改变，但我觉得更多的是重置(reset)渲染上下文罢了，和客户端通信无关，故无需上面的，啦。
   * 主要是在我们的入口server中保存了渲染相关上下文，我们需要将文件的改变和重编译与server关联
   */
  const serverCompiler = webpack(serverWebpackConfig);
  const MFs = new MemoryFS();
  const sercerOptPath = path.join(
    config.dev.assetsRoot,
    serverWebpackConfig.output.filename
  );
  serverCompiler.outputFileSystem = MFs;

  // https://webpack.github.io/docs/node.js-api.html
  serverCompiler.watch({}, (err, stats) => {
    const statsJson = stats.toJson();
    if (err) throw err;

    // 打包的一些信息输出(error and warning)
    statsJson.errors.length && statsJson.errors.forEach(error => console.log(error));
    statsJson.warnings.length && statsJson.warnings.forEach(warning => console.log(warning));

    // 通知上游express，渲染环境可以更新了
    // 我们这么说吧，客服端那套变了，服务端必须要跟着变，此二者有许多的共有的东西，同时，我们需要保证两端渲染一致

    // ****************************** core ******************************
    // https://stackoverflow.com/questions/26633901/reload-module-at-runtime
    // https://stackoverflow.com/questions/17581830/load-node-js-module-from-string-in-memory

    options.serverBundleUpdate(MFs.readFileSync(sercerOptPath, 'utf-8'), sercerOptPath);
  });
};
