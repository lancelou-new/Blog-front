/**
 * list组件下属分页组件
 * 基于单一职责原则: 分页组件只是负责展示及分页导向，
 * 当然我们也可以去显示其子内容
 *
 * 接收基本数据/参数:
 *  url: 基础url，后面缺失/page=~
 *  pagination: 路由对象
 *  withRoute下？ 接收当前分页参数
 */

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import PreLoadLinkWithRouteConf from '../PreloadLink/preLoadLinkWithRouteConf';

const Pagination = (props) => {
  const { match, pagination } = props;
  let curPage = match.params.page || 1;
  let url = match.url;
  let withPrev = false;
  let withNext = false;

  curPage -= 0;
  withPrev = curPage > 1;
  withNext = Math.ceil(pagination.totals / pagination.pageSize) > curPage;
  url = url.indexOf('page') < 0 ? (`${url}page=1`) : url;
  return (
    <nav className="page_pagination">
      {withPrev && <span className="page_paginationPrev"><PreLoadLinkWithRouteConf to={url.replace(/(.*page=)\d+/, `$1${curPage - 1}`)}><span>« 上一页</span></PreLoadLinkWithRouteConf></span>}
      {withNext && <span className="page_paginationNext"><PreLoadLinkWithRouteConf to={url.replace(/(.*page=)\d+/, `$1${curPage + 1}`)}><span>下一页 »</span></PreLoadLinkWithRouteConf></span>}
      <div className="center">
        <PreLoadLinkWithRouteConf to="/achieve"><span>博客归档</span></PreLoadLinkWithRouteConf>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  match: PropTypes.shape(),
  pagination: PropTypes.shape({
    totals: PropTypes.number,
    pageSize: PropTypes.number
  })
};

export default withRouter(Pagination);
