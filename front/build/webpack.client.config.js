/**
 * 服务端渲染: 客服端代码打包配置文件@webpack
 */


const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // Extract text from bundle into a file: 进行代码分离
const path = require('path');

const { baseConfig, baseCssExtConf } = require('./webpack.base.config');
const HTMLPlugin = require('html-webpack-plugin'); // 自动创建html文件并将对应打包好的js引入此html

// const isProd = process.env.NODE_ENV === 'production';

let config = Object.assign({}, baseConfig, {
  resolve: {
    alias: Object.assign({}, baseConfig.resolve.alias, {
      'create-api': './create-api-client',
      'create-route': './create-route-client',
    }),
    extensions: baseConfig.resolve.extensions,
  },
  plugins: (baseConfig.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.BROWSER': true,
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'src/index.template.html',
    }),
  ]),
});

if (process.env.NODE_ENV === 'production') {
  config.profile = true;
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM'
  };
  Array.prototype.push.apply(config.module.rules, baseCssExtConf(true));

  config.plugins.push(new ExtractTextPlugin({
    filename: 'styles.[contenthash].css',
    allChunks: true,
  }));

  // async chunk common extract
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'app',
    async: 'async-common',
    minChunks: 3,
  }));

  // minify JS
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  }));
  // 后期待添加: service-work插件支持哈
} else {
  const rulesConf = baseConfig.module.rules.map(loader => loader);
  Array.prototype.push.apply(rulesConf, [{
    test: /\.scss$/,
    exclude: path.resolve(__dirname, '../src/styles'),
    loader: 'style-loader!css-loader?modules=true&localIdentName=[path][name]__[local]!postcss-loader?sourceMap=true!sass-loader?sourceMap=true',
  }, {
    test: /\.scss$/,
    include: path.resolve(__dirname, '../src/styles'),
    loader: 'style-loader!css-loader!postcss-loader?sourceMap=true!sass-loader?sourceMap=true',
  }]);
  config = Object.assign({}, config, {
    module: Object.assign({}, config.module, {
      rules: rulesConf,
    }),
    devtool: '#source-map',
  });
}

module.exports = config;
