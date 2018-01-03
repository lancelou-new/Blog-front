/**
 * 客服端代码打包上下文, REPL客服端代码打包启动
 */

// https://github.com/shelljs/shelljs
// 客服端打包构建
require('shelljs/global');
env.NODE_ENV = 'production';

const path = require('path');
const fs = require('fs');
const config = require('../config');
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('./webpack.client.config');

const spinner = ora('building for production...');
spinner.start();

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
const dist = path.join(__dirname, '../dist');

const statsPath = path.resolve(__dirname, '../dist/stats.json');

rm('-rf', dist);
mkdir('-p', dist);
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'static/*', assetsPath);
webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n`);
  fs.writeFileSync(statsPath, JSON.stringify(stats.toJson()));
});
