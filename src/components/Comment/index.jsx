/* eslint react/no-did-mount-set-state: 0 */
/**
 * -> 能够break the wall，我们就让你可以评论
 * -> 否则，我给其进行展示，后端转发进行disqus的匿名评论
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomComment from './CustomeComment';

let IsClient = false;
let IsSupportDisqus = true;

class Comment extends React.Component {
  static propTypes = {
    commentName: PropTypes.string,
    url: PropTypes.string,
    identifier: PropTypes.string,
    title: PropTypes.string
  };

  constructor(props) {
    super(props);

    // isClient: init with server
    this.state = {
      isSupportDisqus: IsSupportDisqus,
      isClient: IsClient,
    };
  }

  componentDidMount() {
    const d = document;
    const scriptTag = d.createElement('script');
    let timer = null;
    scriptTag.src = `https://lanceloublog.disqus.com/embed.js?t=${new Date().getTime()}`;
    scriptTag.async = 'async';
    if (IsClient || window.disqus_config) {
      // route change trigger(component unmount mount)
      this.state.isSupportDisqus && this.resetDisqus();
      return;
    }

    // client
    IsClient = true;
    this.setState({
      isClient: true,
    });

    window.disqus_config = function() {
      this.page = this.page || {};
      this.page.url = `${window.location.origin}${window.location.pathname}`;
      this.page.identifier = window.location.href;
    }

    scriptTag.onload = () => {
      if (!timer) { return; }

      clearTimeout(timer);
      timer = null;
    };
    scriptTag.onerror = () => {
      if (!timer) { return; }

      clearTimeout(timer);
      timer = null;

      this.setState({
        isSupportDisqus: false,
      });
      IsSupportDisqus = false;
    };

    // timeout set
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      this.setState({
        isSupportDisqus: false,
      });
      IsSupportDisqus = false;
    }, 3000);

    d.body.appendChild(scriptTag);
  }

  componentDidUpdate(prevProps) {
    // route change but component not change and props change(need to reset)
    const curProps = this.props;
    if (!prevProps || !curProps || prevProps.url === curProps.url) {
      return;
    }
    this.state.isSupportDisqus && this.resetDisqus();
  }

  resetDisqus = () => {
    const { identifier, url } = this.props;
    if (window.DISQUS) {
      DISQUS.reset({
        reload: true,
        config() {
          this.page.url = url;
          this.page.identifier = identifier;
        }
      });
    }
  }

  render() {
    const { url, title } = this.props;
    const { isClient } = this.state;
    return isClient ? (
      <div id="disqus_thread">
        <CustomComment
          isSupportDisqus={this.state.isSupportDisqus}
          commentName={this.props.commentName}
          url={url}
          title={title}
        />
      </div>
    ) : null;
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
