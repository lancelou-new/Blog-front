/* eslint react/prop-types: 0 */
/**
 * PreLoadLinkWithRouteConf
 * 预加载组件: 结合路由配置对象，动态生成 数据&组件 预加载promise
 *
 * 1. 根据url和router config去除匹配的项
 * 2. 生成match对象，使用match来进行 "dispatch的包装"
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PreloadLink from './index';
import { fetchDateByTargetUrl } from '../../utils/routeDateFetch';

const PreLoadLinkWithRouteConf = (props) => {
  const preloadFuncs = [];
  const {
    children, dispatch, isNeedPreComponent, replace, to
  } = props;

  const dataLoader = fetchDateByTargetUrl(to, dispatch, isNeedPreComponent);

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
