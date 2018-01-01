/* eslint react/no-did-mount-set-state: 0 */
/**
 * -> 能够break the wall，我们就让你可以评论
 * -> 否则，我给其进行展示，后端转发进行disqus的匿名评论
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomComment from './CustomeComment';

class Comment extends React.Component {
  static propTypes = {
    commentName: PropTypes.string,
  };

  constructor(props) {
    super(props);

    // 客服端标记初始化为false
    this.state = {
      isClient: false,
      isSupportDisqus: true,
    };
  }

  componentDidMount() {
    const d = document;
    const scriptTag = d.createElement('script');
    const image = new window.Image();
    let timer = null;
    scriptTag.defer = 'defer';

    if (this.state.isClient || window.disqus_config) {
      return;
    }

    window.disqus_config = () => {
      this.page.url = window.location.href;
      this.page.identifier = window.location.href;
    };

    scriptTag.src = 'https://lanceloublog.disqus.com/embed.js';
    scriptTag.async = 'async';

    image.onload = () => {
      if (!timer) { return; }

      clearTimeout(timer);
      timer = null;

      this.setState({
        isClient: true,
        isSupportDisqus: true,
      });
      d.body.appendChild(scriptTag);
    };
    image.onerror = () => {
      if (!timer) { return; }

      clearTimeout(timer);
      timer = null;

      this.setState({
        isClient: true,
        isSupportDisqus: false,
      });
    };

    // 超时时间定义
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      this.setState({
        isClient: true,
        isSupportDisqus: false,
      });
      image.src = '/';
    }, 3000);

    image.src = `https://disqus.com/favicon.ico?${new Date().getTime()}`;
  }

  render() {
    return (
      <div id="disqus_thread">
        <CustomComment
          isSupportDisqus={this.state.isSupportDisqus}
          commentName={this.props.commentName}
        />
      </div>
    );
  }
}

const mapStateToCommentProps = state => ({
  commentName: state.options.commentName,
});

const CommentWithRedux = connect(
  mapStateToCommentProps,
  null,
)(Comment);

export default CommentWithRedux;
