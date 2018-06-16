/**
 * HTTP 操作相关工具
 */

const httpUtils = {};

/**
 * http请求url参数combine
 * @param {*} paramsObj 参数对象，键为参数名
 */
export const requestParams = paramsObj => Object.keys(paramsObj).reduce((col, cur) => `${col}${col && '&'}${cur}=${paramsObj[cur]}`, '');
httpUtils.requestParams = requestParams;

/**
 * 提交到ga公共方法，将会提交基础参数
 * @param {*} othersParams 其他参数
 */
export const submitToGa = (othersParams) => {
  const img = new window.Image();
  const baseParams = {
    dr: document.referrer,
    sr: `${window.screen.width}x${window.screen.height}`,
    vp: `${window.innerWidth}x${window.innerHeight}`,
    ul: window.navigator.language,
    dp: window.location.pathname,
    dt: window.document.title,
  };
  const gaParams = Object.assign({}, baseParams, othersParams);
  img.src = `/ga?${requestParams(gaParams)}`;
};
httpUtils.submitToGa = submitToGa;

export default httpUtils;
