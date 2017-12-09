/**
 * 脚步区域显示，版权等
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Style from './index.scss';

const currentYear = (new Date()).getFullYear();

const Footer = (props) => {
  const { title } = props.options;
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
};

Footer.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string
  })
};

const mapStateToFooterProps = state => ({
  options: state.options,
});

const FooterWithRedux = connect(mapStateToFooterProps)(Footer);

export default FooterWithRedux;
