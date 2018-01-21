/**
 * Google analytics HOC 上报组件
 *
 * 提交GA的时机是个问题：
 *  现在有两个需要提交GA的场景:
 *    1. 页面初始，记录ssr时间
 *    2. 页面跳转，记录留存率
 *  结论: 统一放到这里(还是使用window.onload，这里占用window.onload
 *    后续可使用 window.addEventListener)
 */

import React, { Component } from 'react';
import EventEmit from '../../utils/eventCenter';
import { submitToGa } from '../../utils/http';

let routeFrom = null;

EventEmit.on('reactRouter-routeChange', (from) => {
  routeFrom = from;
});

const submitGaTimming = () => {
  let timingParams = {};
  if (window.performance) {
    const timing = window.performance.timing;
    const ssrPageTiming = window.performance.getEntries()[0];
    timingParams = {
      utc: 'Page',
      utv: 'load',
      utt: timing.loadEventStart - timing.navigationStart,
      pdt: ssrPageTiming.responseEnd - ssrPageTiming.responseStart,
      clt: ssrPageTiming.loadEventStart,
      dit: ssrPageTiming.domInteractive,
      srt: ssrPageTiming.responseStart - ssrPageTiming.connectEnd,
      tcp: ssrPageTiming.connectEnd - ssrPageTiming.connectStart,
    };
    submitToGa(timingParams);
  }
};

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName ||
  WrappedComponent.name ||
  'Component';

const GaSubmit = WrappedComponent =>
  class GaSubmitC extends Component {
    static displayName = getDisplayName(WrappedComponent)
    componentDidMount() {
      if (routeFrom) {
        setTimeout(() => {
          submitToGa({
            dr: routeFrom.href,
          });
        }, 0);
      } else {
        window.addEventListener('load', submitGaTimming);
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default GaSubmit;

/**
 * // 内容下载时间(网页下载时间) pdt
 * timing.responseEnd - timing.responseStart
 *
 * // 内容加载时间(loaded 事件触发) clt
 * timing.loadEventEnd
 *
 * // DOM 互动时间 dit
 * timing.domInteractive
 *
 * // TTFB时间(服务器响应时间) srt
 * timing.responseStart - timing.connectEnd
 *
 * // TCP 连接时间 tcp
 * timing.connectEnd - timing.connectStart
 *
 */
