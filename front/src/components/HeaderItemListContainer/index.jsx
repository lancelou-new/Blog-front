/**
 * 标签内容页，itemList容器组件，包含header头部结构
 */

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import ItemListContainer from '../ItemListContainer';

const HeaderItemListContainer = props => (
  <section>
    <h1 className="intro">
      标签
      <a href="javascriot: void(0)">{props.match.params.tagName}</a>
      下的文章
    </h1>
    <ItemListContainer withoutPagination />
    <Helmet>
      <title>{props.match.params.tagName} - {props.siteTitle}</title>
    </Helmet>
  </section>
);

HeaderItemListContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tagName: PropTypes.string
    })
  }),
  siteTitle: PropTypes.string,
};

const mapStateToHeaderItemListContainerProps = state => ({
  siteTitle: state.options.title,
});

const HeaderItemListContainerWithRedux =
  connect(mapStateToHeaderItemListContainerProps)(HeaderItemListContainer);

const HeaderItemListContainerWithRouter = withRouter(HeaderItemListContainerWithRedux);

export default HeaderItemListContainerWithRouter;
