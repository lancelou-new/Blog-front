/* eslint react/jsx-filename-extension: 0, no-underscore-dangle: 0 */
/**
 * 客户端 entry 只需创建应用程序，并且将其挂载到 DOM 中：
 * --->>> 这是最终要下载到browser中执行的bundle的source code
 */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './components/app';

// const isProd = process.env.NODE_ENV === 'production';
const callback = setTimeout;

const preloadedState = window.__INITIAL_STATE__; // 服务端回传的init state -> store
const store = configureStore(preloadedState);
const rootEle = document.getElementById('root');

// 推迟到下一个loop执行，留给惰性加载(模块延迟加载)
// 情况下server发过来的片段注册的机会
const render = (AppComponent) => {
  callback(() => ReactDOM.hydrate(
    <AppComponent store={store} />,
    rootEle,
  ));
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => {
    ReactDOM.unmountComponentAtNode(rootEle);
    render(App);
  });
}
