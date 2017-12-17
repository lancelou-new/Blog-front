/**
 * Top导航栏。触发主题
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Style from './index.scss';

import PreLoadLinkWithRouteConf from '../../PreloadLink/preLoadLinkWithRouteConf';

const TopNav = (props) => {
  const { title, logoUrl } = props.options;

  const handleClick = () => {
    props.mobileSlideCallback();
  };

  return (
    <div className={Style.leftNav_container}>
      <div className={Style.leftNav_btnBar} onClick={handleClick} role="button" tabIndex="-1" onKeyUp={handleClick} >
        <i />
      </div>
      <h1>
        <a href="/">{title}</a>
      </h1>
      <PreLoadLinkWithRouteConf to="/about">
        <img src={logoUrl} alt="logo" />
      </PreLoadLinkWithRouteConf>
    </div>
  );
};

TopNav.propTypes = {
  options: PropTypes.shape({}),
  mobileSlideCallback: PropTypes.func,
};

const mapStateToTopNavProps = state => ({
  options: state.options,
});

const TopNavWithRedux = connect(mapStateToTopNavProps)(TopNav);

export default TopNavWithRedux;
