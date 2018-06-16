/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const connect = (propsFromContext) => {
  const neededProps = propsFromContext.reduce ?
    propsFromContext : Object.keys(propsFromContext);
  const contextTypes = {};

  neededProps.forEach((propsKey) => {
    contextTypes[propsKey] = PropTypes.any;
  });

  return WrappedComponent => class Connect extends React.Component {
    static contextTypes = contextTypes
    constructor(props, context) {
      super(props, context);
      const state = {};

      neededProps.forEach((propsKey) => {
        state[propsKey] = context[propsKey];
      });

      this.state = state;
      this.updateState(props);
    }

    shouldComponentUpdate(nextProps) {
      if (this.checkPropsChanged(nextProps)) {
        return true;
      }
      return false;
    }
    componentWillUpdate(nextProps) {
      this.updateState(nextProps);
    }
    checkPropsChanged = (nextProps) => {
      const keys = Object.keys(nextProps);
      const oldProps = this.props;
      if (keys.length !== Object.keys(oldProps).length) {
        return false;
      }
      const isSame = keys.every(propKey => nextProps[propKey] === oldProps[propKey]);

      return !isSame;
    }
    updateState = (props) => {
      this.nextState = Object.assign({}, this.state, props);
    }
    render() {
      return (
        <WrappedComponent {...this.nextState} />
      );
    }
  };
};
export default connect;
