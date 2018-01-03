/**
 * 左导航栏，导航主题
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { matchPath } from 'react-router';
import { Helmet } from 'react-helmet';
import { routerConfig } from '../../../routes';
import MenuList from './menuList';
import MediaList from './mediaList';
import Style from './index.scss';

const LeftNav = (props) => {
  const { options, theme } = props;
  const menuConfList = theme.option.menu.map((menuConf) => {
    let matchDataLoader = null;
    let componentPromise = null;
    routerConfig.some((config) => {
      const match = matchPath(menuConf.url, config);
      if (match) {
        matchDataLoader = config.loadData;
        componentPromise = config.componentPromise;
        return true;
      }
      return false;
    });
    return {
      ...menuConf,
      dataLoader: matchDataLoader,
      componentPromise
    };
  });
  return (
    <nav className={Style.left_navContainer}>
      <Helmet>
        <meta name="charset" content="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="keywords" content={options.keywords} />
        <meta name="description" content="Front-End/Node.js developer, lifer, maker" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      </Helmet>
      <div className={Style.left_icon}>
        <a href="/" >
          <img src={options.logoUrl} alt={options.title} />
        </a>
      </div>
      <h2>{options.title}</h2>
      <MenuList config={menuConfList} />
      <MediaList config={options} />
    </nav>
  );
};

LeftNav.propTypes = {
  theme: PropTypes.shape({
    option: PropTypes.object
  }),
  options: PropTypes.shape({
    logoUrl: PropTypes.string,
    title: PropTypes.string
  })
};

const mapStateToLeftNavProps = state => ({
  options: state.options,
  theme: state.theme,
});

const LeftNavWithRedux = connect(
  mapStateToLeftNavProps,
  null,
)(LeftNav);

export default LeftNavWithRedux;
