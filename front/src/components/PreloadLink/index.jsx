/* eslint jsx-a11y/anchor-is-valid: 0, react/prop-types: 0 */

/**
 * 自定义链接，HOC，跳转前数据获取
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import EventEmit from '../../utils/eventCenter';
import Action from '../../action';

class PreloaderLink extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      replace: PropTypes.func,
      push: PropTypes.func,
    }),
  }

  static propTypes = {
    startLoading: PropTypes.func,
    stopLoading: PropTypes.func,
    onPreload: PropTypes.func,
    replace: PropTypes.bool,
    to: PropTypes.string,
  }

  handleClick = (evt) => {
    evt.preventDefault();
    const {
      replace, to, startLoading, stopLoading
    } = this.props;
    startLoading();
    this.props.onPreload().then(() => {
      const from = {
        title: window.document.title,
        path: window.location.pathname,
        href: window.location.href
      };
      stopLoading();
      EventEmit.emit('reactRouter-routeChange', from);
      if (replace) {
        this.context.router.history.replace(to);
      } else {
        this.context.router.history.push(to);
      }
    });
  };

  render() {
    return (
      <Link onClick={this.handleClick} to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }
}

const PreloaderLinkWithRedux = connect(null, {
  startLoading: Action.startLoading,
  stopLoading: Action.stopLoading,
})(PreloaderLink);

export default PreloaderLinkWithRedux;
