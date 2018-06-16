/**
 * itemList的单个item组件
*/

import React from 'react';
import PropTypes from 'prop-types';
import PreLoadLinkWithRouteConf from '../PreloadLink/preLoadLinkWithRouteConf';

const Item = (props) => {
  const { vo } = props;
  return (
    <article className="post">
      <div className="meta">
        <div className="date">{vo.createdAt}</div>
      </div>
      <h1 className="title">
        <PreLoadLinkWithRouteConf to={`/post/${vo.pathName}`}>{vo.title}</PreLoadLinkWithRouteConf>
      </h1>
      <div className="entry-content" dangerouslySetInnerHTML={(() => ({ __html: vo.summary }))()} />
      <PreLoadLinkWithRouteConf to={`/post/${vo.pathName}`}>
        阅读更多 »
      </PreLoadLinkWithRouteConf>
    </article>
  );
};

Item.propTypes = {
  vo: PropTypes.shape({
    createdAt: PropTypes.string,
    pathName: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string,
    updatedAt: PropTypes.string,
  })
};

export default Item;
