/**
 * 工程打包基础配置文件@webpack
 * 注意: 应防止文件内容没修改，而hash，或者打包输出文件名却不相同
 * https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/348
 *
 * 开始css minimize模式时font-face被移除
 *  https://github.com/ben-eb/cssnano/issues/145
 */

const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // Extract text from bundle into a file: 进行代码分离
const path = require('path');
const crypto = require('crypto');

const isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
  entry: {
    app: './src/client-entry.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: isProd ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: isProd ? '[name].[chunkhash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[chunkhash].js' : '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss', '.css'],
    alias: {
      Static: path.resolve(__dirname, '../static'),
    },
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/[name].[hash].[ext]',
      },
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/fonts/[name].[hash].[ext]',
      },
    }],
  },
  performance: {
    hints: isProd ? 'warning' : false,
  },
  plugins: [],
};

const generateCssLoaderUse = (isGlobal, localIdentName) => {
  const options = {};
  if (!isGlobal) {
    options.module = true;
    if (localIdentName) {
      options.localIdentName = localIdentName;
    } else {
      options.getLocalIdent = (context, ilocalIdentName, localName) => {
        const hash = crypto.createHash('sha256');
        hash.update(context._module.resource);
        const chunkHash = hash.digest('hex');
        return `l${chunkHash.substr(0, 20)}_${localName}`;
      };
    }
  }
  return [
    {
      loader: 'css-loader',
      options,
    },
    'postcss-loader?sourceMap=true',
    'sass-loader?sourceMap=true',
  ];
};

const baseCssExtConf = (isBrowser, localIdentName) => {
  // ExtractTextPlugin.extract下useloader数组
  const useArr = generateCssLoaderUse(false, localIdentName);
  const globalUseArr = generateCssLoaderUse(true);

  // 服务端环境下css需抽掉
  if (!isBrowser) {
    useArr.unshift({
      loader: path.resolve(__dirname, 'clearExtCssOutput-loader.js'),
    });
    globalUseArr.unshift({
      loader: path.resolve(__dirname, 'clearExtCssOutput-loader.js'),
    });
  }

  return [
    {
      test: /\.scss$/,
      exclude: path.resolve(__dirname, '../src/styles'),
      use: ExtractTextPlugin.extract({
        use: useArr,
      }),
    }, {
      test: /\.scss$/,
      include: path.resolve(__dirname, '../src/styles'),
      use: ExtractTextPlugin.extract({
        use: globalUseArr,
      }),
    },
  ];
};

module.exports = { baseCssExtConf, baseConfig };
