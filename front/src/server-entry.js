/* eslint react/jsx-filename-extension: 0 */
/**
 * 服务端渲染入口文件:
 * 仿照Vue ssr: 我们将会在这个文件中导出最终需要打包输出的文件
 *
 * 基于一点: 这里的代码其实都是在外部server调用时进行运行的  打包并不会对业务逻辑有影响
 * 也即，
 *
 * 原则上来说，我觉得我们将服务端入口，我们将其写成一个express的中
 * 间件模式即可
 *
 * 我们更希望的是将这个文件当成一个中间件creator，传入特定的参数(配置)
 *
 * 职责分明(这边可以干啥 && 应该干啥)
 *  构造整个首屏的基础html结构
 *  样式解析插入
 *  webpackJsonp模块化chunk按需加载
 *  meta，搜索引擎相关(header处理)
 *
 * 目前需要解决的问题: 打包输出的是啥 -> 执行上下文会对打包输出做啥
 *  -> 我们又是如何和执行上下文合作来响应请求
 *
 *
 * Dynamically load modules: import()
 *  动态模块加载，前后端的配合问题，后端将模块代码进行类(lazy load)先行注入
 * (当然这只是按需注入啦)
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import { renderToNodeStream } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import App from './components/app';
import configureStore from './store';
import { mustSSRLoad, routerConfig } from './routes/index';
import generateParams from './action/requestParamsFactory';

// const titleReg = /<.*?>(.+?)<.*?>/;

const createStoreAndLoadData = (req, store) => {
  let needLoads = [];
  let preLoadComponent = null;
  Object.assign(needLoads, mustSSRLoad);
  needLoads = needLoads.map(fetchSome => fetchSome());

  routerConfig.some((route) => {
    // use `matchPath` here
    const match = matchPath(req.url, route);
    if (match) {
      needLoads.push(route.loadData(generateParams(match)));
      preLoadComponent = route.component;
    }
    return match;
  });

  return Promise.all(needLoads.map(load =>
    load(store.dispatch, store.getState))).then(() => preLoadComponent);
};

/**
 * 服务端入口工厂 -> 传入运行时配置参数，生成这个渲染中间件
 * @param {*} options 配置对象
 *
 */

const serverEntryMiddlewareCreator = ({
  html, log, isProd, chunkObj,
}) => (req, res, next) => {
  const store = configureStore();
  const s = Date.now();
  createStoreAndLoadData(req, store).then((preLoadComponent) => {
    log.debug(`lancelog-> Server Data Fetch: ${Date.now() - s}ms`);

    const ssrStartS = Date.now();
    const serverRouteConf = {
      url: req.url
    };
    const renderStream =
      renderToNodeStream(<App store={store} serverRouteConf={serverRouteConf} />);
    const helmet = Helmet.renderStatic();

    // FB data Trigger
    renderStream.once('data', () => {
      log.debug(`lancelog-> SSR to First Byte: ${Date.now() - ssrStartS}ms`);
      const { title, link, meta } = helmet;
      const titleText = title.toString();
      const metaData = `${titleText}${meta.toString()}${link.toString()}`;
      // const matched = titleText.match(titleReg);

      const chunk = html.head.replace('<title></title>', metaData);
      res.write(chunk);
      log.debug('lancelog-> First byte get');
    });

    // stream data come
    renderStream.on('data', (chunk) => {
      res.write(chunk);
    });

    // stream end
    renderStream.on('end', () => {
      const state = store.getState();
      res.write(`<script>window.__INITIAL_STATE__=${
        JSON.stringify(state)
      }</script>`);
      let tail = html.tail;
      if (isProd && preLoadComponent) {
        for (const key in chunkObj) {
          if (key.split('.')[0] === preLoadComponent.chunkName) {
            const chunk = `<script type="text/javascript" charset="utf-8">${chunkObj[key]}</script></body>`;
            tail = tail.replace('</body>', chunk);
            break;
          }
        }
      }
      res.end(tail);
      log.debug(`whole request: ${Date.now() - s}ms`);
    });

    renderStream.on('error', (err) => {
      res.end(html.origin);
      log.error(err);
    });
  }).catch((err) => {
    log.error(err);
    res.end(html.origin);
  });
};

export default serverEntryMiddlewareCreator;
