/**
 * 服务端渲染: 服务端代码打包配置文件@webpack
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // Extract text from bundle into a file: 进行代码分离
const { baseConfig, baseCssExtConf } = require('./webpack.base.config');
const packageJson = require('../package.json');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  new ExtractTextPlugin({ filename: 'nerver-out.css' }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.BROWSER': false,
    window: false,
  }),
];

// 服务端打包loader配置
const rulesConf = baseConfig.module.rules.map(loader => loader);


// 非生产环境下: 也要引入extract-text-plugin，
// 从而解决style-loader的css-dom问题
Array.prototype.push.apply(rulesConf, baseCssExtConf(false, !isProd && '[path][name]__[local]'));

module.exports = Object.assign({}, baseConfig, {
  target: 'node',
  devtool: '#source-map',
  entry: './src/server-entry.js',
  output: Object.assign({}, baseConfig.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2',
  }),
  resolve: {
    alias: Object.assign({}, baseConfig.resolve.alias, {
      'create-api': './create-api-server',
      'create-route': './create-route-server',
    }),
    extensions: baseConfig.resolve.extensions,
  },
  module: Object.assign({}, baseConfig.module, {
    rules: rulesConf,
  }),
  externals: Object.keys(packageJson.dependencies),
  plugins,
});

