/* eslint react/no-did-mount-set-state: 0 */
/**
 * 脚步区域显示，版权等
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Style from './index.scss';

class Footer extends React.Component {
  static propTypes = {
    options: PropTypes.shape({
      title: PropTypes.string
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      currentYear: 2017,
    };
  }

  componentDidMount() {
    this.setState({
      currentYear: (new Date()).getFullYear(),
    });
  }

  render() {
    const { title } = this.props.options;
    const { currentYear } = this.state;
    return (
      <div className={Style.footer_copyright}>
        <p>
          © {currentYear}&nbsp;&nbsp;-&nbsp;&nbsp;{title}&nbsp;&nbsp;-&nbsp;&nbsp;<a href="https://github.com/lancelou-new/Blog" target="__blank">博客源码</a>
        </p>
        <p>
          Powered by  <a href="https://github.com/facebook/react/releases" target="__blank">React16(SSR)</a>  &  <a href="https://github.com/koajs/koa" target="__blank">Koa2</a>
        </p>
      </div>
    );
  }
}

const mapStateToFooterProps = state => ({
  options: state.options,
});

const FooterWithRedux = connect(mapStateToFooterProps)(Footer);

export default FooterWithRedux;
