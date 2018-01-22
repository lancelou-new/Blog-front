/**
 * Google Analytics代理
 *
 * 暂定代理数据:
 *  bed:
 *    跟踪ID: 见config tid
 *    协议版本: v: 1
 *    客户ID: cid
 *    ip替换: uip
 *
 *  fed:
 *    文档引荐来源网址: dr
 *    屏幕分辨率: sr
 *    视口大小: vp
 *    用户语言: ul
 *    文档路径: dp
 *    文档标题: dt
 *
 *  计划需要:
 *    服务器响应时间: srt 从服务器收到请求到TTFB ssr计算好回传
 *      window.performance.timing.responseStart - window.performance.timing.connectStart
 *    DOM 互动时间: dit 基准值: 从请求发出之后
 *
 *    内容加载时间: clt 基准值: 从请求发出之后
 *
 *    TCP 连接时间: tcp 基准值: 浏览器开始建立连接
 *    重定向响应时间: rrt 基准值: 开始重定向
 *    网页下载时间: pdt 基准值: ttfb
 *    DNS 时间: dns 基准值: domainLookupStart
 *
 *  后期添加:
 *    结合Google Analytics的前端异常监控
 */

const proxyRequest = require('request');
const log4js = require('log4js');
const uuidv4 = require('uuid/v4');
const { gaTrackId } = require('./configVo');


const cookieMaxAge = 1000 * 60 * 60 * 24 * 365 * 2;
const log = log4js.getLogger('ssrServer');
const isProd = process.env.NODE_ENV === 'production';

/**
 * 通知Google Analytics
 */
const sendToGA = (req, cId) => {
  const queryParams = req.query;
  const clientIp = req.ip;
  const userAgent = req.get('user-agent');
  const body = {
    tid: gaTrackId,
    v: 1,
    cid: cId,
    uip: clientIp
  };
  const options = {
    method: 'POST',
    uri: 'https://www.google-analytics.com/collect',
    qs: Object.assign({}, queryParams, body),
    headers: {
      'User-Agent': userAgent,
    },
    json: true
  };
  if (isProd) {
    proxyRequest(options, (error) => {
      log.error('Google Analytics proxy error: ', error);
    });
  } else {
    log.info('Proxy to GA trigger ......');
  }
};

const gaProxyMiddleWare = (req, res) => {
  const signedCookies = req.signedCookies;
  const clientIp = req.ip;
  let gaCId = signedCookies && signedCookies._gaProxy_c;

  if (!gaCId) {
    gaCId = uuidv4();
    res.cookie('_gaProxy_c', gaCId, {
      httpOnly: true, maxAge: cookieMaxAge, signed: true
    });
  }

  console.log(clientIp);

  sendToGA(req, gaCId);

  res.status(204).end();
};

module.exports = gaProxyMiddleWare;
