/* eslint consistent-return: 0 */
const fs = require('fs');
const serveFavicon = require('serve-favicon');
const log = require('log4js').getLogger('favicon');
const path = require('path');

module.exports = (faviconPath, options) => {
  let _middleware;
  return (req, res, next) => {
    if (_middleware) return _middleware(req, res, next);
    const target = path.join(__dirname, `../${faviconPath}`);
    fs.readFile(target, (err, buf) => {
      if (err) {
        log.error(err);
        return res.status(404).end();
      }
      _middleware = serveFavicon(buf, options);
      return _middleware(req, res, next);
    });
  };
};
