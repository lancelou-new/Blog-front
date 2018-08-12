// 路由对应的数据获取
import { routerConfig } from '../routes';
import generateParams from '../action/requestParamsFactory';
import { matchPath } from 'react-router';

const fetchDateByTargetUrl = (url, dispatch, isNeedPreComponent) => {
  const preloadFuncs = [];
  routerConfig.some((config) => {
    const match = matchPath(url, config);
    if (match) {
      match.path = match.path.toString();
      config.loadData && (preloadFuncs.push(config.loadData(generateParams(match))));
      config.componentPromise && isNeedPreComponent && (preloadFuncs.push(config.componentPromise));
      return true;
    }
    return false;
  });
  const dataLoader = () => {
    if (preloadFuncs.length) {
      return Promise.all(preloadFuncs.map((func, index) =>
        (index === 0 ? dispatch(func) : func())));
    }
    return Promise.resolve();
  };
  return dataLoader;
};

export {
  fetchDateByTargetUrl,
};

