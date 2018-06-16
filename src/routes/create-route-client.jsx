/* eslint no-shadow: 0 */

/**
 * 我觉得主要有几点哈，服务端打包出来的这些分块必须是客服端能够
 * 感知得到的，这是关键，你可以说是他们的键相同
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null,
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    const self = this;
    const chunkPromise = props.load();

    this.setState({
      mod: null,
    });

    // dynamic加载split出去的组件之前，会先检测是否本地存在，如存在，直接取之
    // 这也算是ssr是前端react hydrate的关键一部分
    if (!chunkPromise.then) {
      self.setState({
        mod: __webpack_require__(chunkPromise).default,
      });
      return;
    }

    chunkPromise.then((mod) => {
      self.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

Bundle.propTypes = {
  children: PropTypes.func.isRequired,
  load: PropTypes.func,
};

// 高阶动态dynamic加载组件包裹
export const Achieve = props => (
  <Bundle load={() => {
    if (__webpack_modules__[require.resolveWeak('../components/Achieve')]) {
      // do something when mod1 is available
      return require.resolveWeak('../components/Achieve');
    }
    return import(/* webpackChunkName: "Achieve" */ '../components/Achieve');
  }}
  >
    {Achieve => <Achieve {...props} />}
  </Bundle>
);

export const Tag = props => (
  <Bundle load={() => {
    if (__webpack_modules__[require.resolveWeak('../components/Tags')]) {
      // do something when mod1 is available
      return require.resolveWeak('../components/Tags');
    }
    return import(/* webpackChunkName: "Tag" */ '../components/Tags');
  }}
  >
    {Tag => <Tag {...props} />}
  </Bundle>
);

export const Page = props => (
  <Bundle load={() => {
    if (__webpack_modules__[require.resolveWeak('../components/Page')]) {
      // do something when mod1 is available
      return require.resolveWeak('../components/Page');
    }
    return import(/* webpackChunkName: "Page" */ '../components/Page');
  }}
  >
    {Page => <Page {...props} />}
  </Bundle>
);

export const ItemListContainer = props => (
  <Bundle load={() => {
    if (__webpack_modules__[require.resolveWeak('../components/ItemListContainer')]) {
      // do something when mod1 is available
      return require.resolveWeak('../components/ItemListContainer');
    }
    return import(/* webpackChunkName: "ItemListContainer" */ '../components/ItemListContainer');
  }}
  >
    {ItemListContainer => <ItemListContainer {...props} />}
  </Bundle>
);

export const HeaderItemListContainer = props => (
  <Bundle load={() => {
    if (__webpack_modules__[require.resolveWeak('../components/HeaderItemListContainer')]) {
      // do something when mod1 is available
      return require.resolveWeak('../components/HeaderItemListContainer');
    }
    return import(/* webpackChunkName: "HeaderItemListContainer" */ '../components/HeaderItemListContainer');
  }}
  >
    {HeaderItemListContainer => <HeaderItemListContainer {...props} />}
  </Bundle>
);

export default BrowserRouter;
