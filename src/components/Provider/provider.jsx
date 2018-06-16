/* eslint react/prop-types: 0 */

import PropTypes from 'prop-types';
import React from 'react';

const warnAboutReceivingStore = () =>
  console.error('<Provider> does not support changing `store` on the fly.');

class Provider extends React.Component {
  static childContextTypes = {}

  constructor(props, context) {
    super(props, context);
    this.store = {};
    Object.keys(props).forEach((propKey) => {
      if (propKey === 'children') return;
      Provider.childContextTypes[propKey] = PropTypes.any;
    });
    this.store.byPass = Object.assign({}, props);
    this.store.byPass.children && delete this.store.byPass.children;
  }

  getChildContext() {
    const byPass = this.store.byPass;
    return { ...byPass };
  }

  componentWillReceiveProps(nextProps) {
    const { byPass } = this.store;
    Object.keys(byPass).every((propName) => {
      if (nextProps[propName] !== byPass[propName]) {
        warnAboutReceivingStore();
        return false;
      }
      return true;
    });
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

export default Provider;
