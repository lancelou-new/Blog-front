/**
 * 标签组件，可内嵌如pageContainer组件中
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PreLoadLinkWithRouteConf from '../PreloadLink/preLoadLinkWithRouteConf';

const Tag = (props) => {
  const { tags, siteTitle } = props;
  const baseUrl = '/tag/';
  const anchors = Object.keys(tags).map(tagName => ({ name: tagName, num: tags[tagName], to: `${baseUrl}${tagName}` }));
  return (
    <article className="post tags">
      <Helmet>
        <title>标签 - {siteTitle}</title>
      </Helmet>
      <h1 className="title">标签</h1>
      <div className="entry-content">
        <section>
          {anchors.map(anchor =>
            (<PreLoadLinkWithRouteConf to={anchor.to} key={anchor.to}>
              {anchor.name}({anchor.num})
             </PreLoadLinkWithRouteConf>))
          }
        </section>
      </div>
    </article>
  );
};

Tag.propTypes = {
  tags: PropTypes.shape({}),
  siteTitle: PropTypes.string,
};

const mapStateToTagProps = state => ({
  tags: state.tags,
  siteTitle: state.options.title
});

const TagWithRedux = connect(
  mapStateToTagProps,
  null
)(Tag);

export default TagWithRedux;
