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
    this.setState({
      mod: null,
    });
    props.load().then((mod) => {
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
  <Bundle load={() => import(/* webpackChunkName: "Achieve" */ '../components/Achieve')} >
    {Achieve => <Achieve {...props} />}
  </Bundle>
);

export const Tag = props => (
  <Bundle load={() => import(/* webpackChunkName: "Tag" */ '../components/Tags')}>
    {Tag => <Tag {...props} />}
  </Bundle>
);

export const Page = props => (
  <Bundle load={() => import(/* webpackChunkName: "Page" */ '../components/Page')}>
    {Page => <Page {...props} />}
  </Bundle>
);

export const ItemListContainer = props => (
  <Bundle load={() => import(/* webpackChunkName: "ItemListContainer" */ '../components/ItemListContainer')}>
    {ItemListContainer => <ItemListContainer {...props} />}
  </Bundle>
);

export const HeaderItemListContainer = props => (
  <Bundle load={() => import(/* webpackChunkName: "HeaderItemListContainer" */ '../components/HeaderItemListContainer')}>
    {HeaderItemListContainer => <HeaderItemListContainer {...props} />}
  </Bundle>
);

export default BrowserRouter;
