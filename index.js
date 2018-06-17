process.env.NODE_ENV = 'production';

const log4js = require('log4js');
const fs = require('fs');

try {
  fs.mkdirSync('./log');
} catch (e) {
  if (e.code !== 'EEXIST') {
    console.error('Could not set up log directory, error was: ', e);
    process.exit(1);
  }
}

/**
 * Initialise log4js first, so we don't miss any log messages
 */
log4js.configure('./server/config/log4js.config.json');

// 正式开启服务
require('./server.js');
