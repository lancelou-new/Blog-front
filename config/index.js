/**
 * fron端的一些共用配置文件，提供工程化webpack和中间层server使用
 */
const path = require('path');
const envConfig = require('./dev.env');
const prodConfig = require('./prod.env');

module.exports = {
  build: {
    env: envConfig,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/dist/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  },
  dev: {
    env: prodConfig,
    port: 8899,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/dist/',
    assetsRoot: path.resolve(__dirname, '../dist'),
    proxyTable: {
      '/proxyPrefix': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/proxyPrefix': '',
        },
      },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
};