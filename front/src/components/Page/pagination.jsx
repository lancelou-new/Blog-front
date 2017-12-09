import React from 'react';
import PropTypes from 'prop-types';
import PreLoadLinkWithRouteConf from '../PreloadLink/preLoadLinkWithRouteConf';

const Pagination = (props) => {
  const { prev, next } = props;
  const withoutIt = (!prev || !prev.pathName) && (!next || !next.pathName);
  return withoutIt ? null :
  <nav>
    <nav className="page_pagination">
      {
        next.pathName &&
        <span className="page_paginationPrev"><PreLoadLinkWithRouteConf to={`/post/${next.pathName}`}>« {next.title}</PreLoadLinkWithRouteConf></span>
      }
      {
        prev.pathName &&
        <span className="page_paginationNext"><PreLoadLinkWithRouteConf to={`/post/${prev.pathName}`}>{prev.title} »</PreLoadLinkWithRouteConf></span>
      }
    </nav>
  </nav>;
};

Pagination.propTypes = {
  prev: PropTypes.shape({}),
  next: PropTypes.shape({})
};

export default Pagination;
