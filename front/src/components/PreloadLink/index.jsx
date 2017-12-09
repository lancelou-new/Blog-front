/* eslint jsx-a11y/anchor-is-valid: 0, react/prop-types: 0 */

/**
 * 自定义链接，HOC，跳转前数据获取
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

class PreloaderLink extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      replace: PropTypes.func,
      push: PropTypes.func,
    }),
  }

  static propTypes = {
    onPreload: PropTypes.func,
    replace: PropTypes.bool,
    to: PropTypes.string,
  }

  handleClick = (evt) => {
    evt.preventDefault();
    const { replace, to } = this.props;
    this.props.onPreload().then(() => {
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

export default PreloaderLink;
