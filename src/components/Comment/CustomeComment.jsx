/* eslint no-plusplus: 0, no-loop-func: 0, react/no-unused-prop-types: 0 */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Style from './index.scss';
import PostList, { UserInAreaWithContextLike as UserInArea } from './postList';
import Provider from '../Provider/provider';
import device from '../../utils/device';

let isMobile = null; // 移动端需动态修改
let MAX_COMMENT_DEPTH = 4;

class CustomComment extends React.Component {
  static propTypes = {
    isSupportDisqus: PropTypes.bool,
    url: PropTypes.string,
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.originalPost = null;
    this.state = {
      posts: [],
      thread: null,
      total: 0,
    };

    // init
    isMobile = device.mobile;
    isMobile && (MAX_COMMENT_DEPTH = 2);
  }

  componentDidMount() {
    // request proxy comment when needed
    if (!this.props.isSupportDisqus) {
      this.fetchAllComment(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.fetchAllComment(nextProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // check disqus support result
    if (this.props.isSupportDisqus === nextProps.isSupportDisqus &&
      this.state.posts &&
      this.state.posts === nextState.posts) {
      return false;
    }
    return true;
  }

  onInitDataReady = (res) => {
    const { thread, posts } = res.data.response;
    const { total } = res.data.cursor;
    const flatedPosts = this.flatePosts(posts);

    this.originalPost = posts;

    this.setState({
      posts: flatedPosts,
      thread,
      total,
    });
  }

  fetchAllComment = (props) => {
    const params = {
      postUrl: props.url,
      title: props.title,
    };
    // const params = {
    //   postUrl: 'https://www.lancelou.com/2017/04/25/react-redux-lession-series/',
    //   title: '"跟着Dan Abramov一起学Redux系列 - 娄聪的博客 | Lance Blog"',
    // };
    axios.get('/disqus/commentList.json', { params }).then(this.onInitDataReady).catch((err) => {
      console.error(err);
    });
  }

  handlerSubmitPost = (data) => {
    const postBody = Object.assign({}, {
      thread: this.state.thread.id,
    }, data);
    return axios.post('/disqus/comment.json', postBody).then((res) => {
      const postRes = res.data;
      const posts = this.state.posts;
      const originalPost = this.originalPost;

      let response = null;
      let newPosts = null;

      if (postRes.code !== 0) {
        // 提交出错
        return Promise.reject();
      }

      response = postRes.response;

      if (response && !response[0].parent) {
        newPosts = [...posts];
        originalPost.unshift(response[0]);
        newPosts.unshift(response[0]);
      } else {
        // 带父节点的评论提交(直接保存一个原始的posts，后续增删基于此originalPost)
        let parentIndex = null;
        originalPost.every((post, index) => {
          if (post.id == response[0].parent) {
            parentIndex = index;
            response[0].depth = post.depth + 1;
            return false;
          }
          return true;
        });
        if (parentIndex) {
          originalPost.splice(parentIndex + 1, 0, response[0]);
          newPosts = this.flatePosts(originalPost);
        }
      }
      this.setState({
        posts: newPosts
      });
      return Promise.resolve();
    });
  };

  // 结构化后端传回的posts
  flatePosts = (posts) => {
    const newPosts = [];
    let prev = null;
    for (let i = 0; i < posts.length; i++) {
      const cur = Object.assign({}, posts[i]);
      if (prev && cur.depth > prev.depth && cur.depth <= MAX_COMMENT_DEPTH) {
        const newChildren = [];
        posts.slice(i).every((post) => {
          if (post.depth === prev.depth) {
            return false;
          }
          newChildren.push(post);
          return true;
        });
        prev.children = this.flatePosts(newChildren);
        i += newChildren.length;
        i -= 1;
      } else {
        newPosts.push(cur);
      }
      prev = cur;
    }

    return newPosts;
  }

  render() {
    const { isSupportDisqus } = this.props;
    const { posts, total } = this.state;

    return isSupportDisqus ? null : (
      <Provider handlerSubmitPost={this.handlerSubmitPost}>
        <div className={Style.cusDisqus_container}>
          <h3>Comments: <i>(检测到您的网络暂不支持Disqus，系统贴心的为您加载了屌丝版的Disqus!)</i></h3>
          <p>{total}&nbsp;Comments</p>
          <div className="hr">
            <span />
          </div>
          <UserInArea show />
          <PostList posts={posts} />
        </div>
      </Provider>
    );
  }
}

export default CustomComment;
