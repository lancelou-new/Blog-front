/* eslint react/prop-types: 0 */
/**
 * PreLoadLinkWithRouteConf
 * 预加载组件: 结合路由配置对象，动态生成 数据&组件 预加载promise
 *
 * 1. 根据url和router config去除匹配的项
 * 2. 生成match对象，使用match来进行 "dispatch的包装"
 */
import React from 'react';
import { matchPath } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PreloadLink from './index';
import generateParams from '../../action/requestParamsFactory';
import { routerConfig } from '../../routes';

const PreLoadLinkWithRouteConf = (props) => {
  const preloadFuncs = [];
  const {
    children, dispatch, isNeedPreComponent, replace, to
  } = props;

  routerConfig.some((config) => {
    const match = matchPath(to, config);
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

  return (
    <PreloadLink onPreload={dataLoader} to={to} replace={replace}>
      {children}
    </PreloadLink>
  );
};

PreLoadLinkWithRouteConf.propTypes = {
  to: PropTypes.string,
  replace: PropTypes.bool,
  isNeedPreComponent: PropTypes.bool,
  dispatch: PropTypes.func,
};

const PreLoadLinkWithRouteConfWithRedux = connect()(PreLoadLinkWithRouteConf);

export default PreLoadLinkWithRouteConfWithRedux;
