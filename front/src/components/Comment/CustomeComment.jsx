/* eslint no-plusplus: 0 */
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
    isSupportDisqus: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      thread: null,
      total: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isSupportDisqus !==
        nextProps.isSupportDisqus && nextProps.isSupportDisqus === false) {
      isMobile = device.mobile;
      isMobile && (MAX_COMMENT_DEPTH = 2);
      // 此处能保证代码只会在客服端执行
      this.fetchAllComment();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.posts && this.state.posts === nextState.posts) {
      return false;
    }
    return true;
  }

  onInitDataReady = (res) => {
    const { thread, posts } = res.data.response;
    const { total } = res.data.cursor;
    const flatedPosts = this.flatePosts(posts);

    this.setState({
      posts: flatedPosts,
      thread,
      total,
    });
  }

  fetchAllComment = () => {
    // const params = {
    //   postUrl: window.location.href,
    //   title: window.document.title,
    // };
    const params = {
      postUrl: 'https://www.lancelou.com/2017/04/25/react-redux-lession-series/',
      title: '"跟着Dan Abramov一起学Redux系列 - 娄聪的博客 | Lance Blog"',
    };
    axios.get('/disqus/comments.json', { params }).then(this.onInitDataReady).catch((err) => {
      console.log(err);
    });
  }

  handlerSubmitPost = (data) => {
    const postBody = Object.assign({}, {
      thread: this.state.thread.id,
    }, data);
    return axios.post('/disqus/post.json', postBody).then((postRes) => {
      const posts = this.state.posts;
      if (postRes.code === 0 && !postRes.parent) {
        posts.unshift(postRes.response[0]);
        this.setState({
          posts
        });
      }
      return postRes;
    });
  };

  flatePosts = (posts) => {
    const newPosts = [];

    for (let i = 0; i < posts.length; i++) {
      const prev = posts[i - 1];
      const cur = posts[i];
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

// /**
//  * 用户输入区域无状态组件
//  * @param {*} props
//  */
// const UserInArea = (props) => {
//   const userInRefs = {};
//   const handlerPost = () => {
//     const data = {};
//     const verifyOk = Object.keys(userInRefs).every((ref) => {
//       const value = userInRefs[ref].value;
//       if (!value || !value.trim()) {
//         return false;
//       }
//       data[ref] = value;
//       return true;
//     });
//     if (!verifyOk || !EmailReg.test(userInRefs.author_email.value)) {
//       return;
//     }

//     props.handlerSubmitPost(data);
//   };

//   return (
//     <div className={Style.cusDisqus_input}>
//       <div className={Style.cusDisqus_col_Icon} />
//       <form className={Style.cusDisqus_col_In}>
//         <div style={{ padding: '0 20px' }}>
//           <textarea ref={(ref) => { userInRefs.message = ref; }} required />
//           <div className={Style.cusDisqus_author}>
//             <span>请输入您的昵称与邮箱地址(将转发至Disqus.com)</span><br />
//             <input type="text" ref={(ref) => { userInRefs.author_name = ref; }} name="author_name" placeholder="昵称(必填)" required /><br />
//             <input type="email" ref={(ref) => { userInRefs.author_email = ref; }} name="author_email" placeholder="邮箱(必填)" required /><br />
//           </div>
//           <button type="submit" onClick={handlerPost}>发表</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// UserInArea.propTypes = {
//   handlerSubmitPost: PropTypes.func
// };

// const PostList = (props) => {
//   const { posts } = props;
//   return (
//     <ul className={Style.cusDisqus_postListContainer}>
//       {
//         posts.map(post => (
//           <Post post={post} key={post.id} />
//         ))
//       }
//     </ul>
//   );
// };

// PostList.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     parent: PropTypes.number,
//     message: PropTypes.string,
//   })),
// };

// const Post = (props) => {
//   const {
//     message, author, createdAt, isDeleted, children
//   } = props.post;
//   const authorAvator = isMobile ? author.avatar.small.cache
//     : author.avatar.large.cache;

//   return (
//     <li className={Style.cusDisqus_post}>
//       <div className={Style.cusDisqus_postContent}>
//         <div className={Style.cusDisqus_post_colContent}>
//           <div className="g_wid_100per">
//             <a href={author.profileUrl} style={{ fontWeight: 500 }}>{author.name}</a> &nbsp;•&nbsp;
//             <span>{dateUtils.howLongBefore(new Date(createdAt), curReferTime)}</span>
//           </div>
//           <div className="g_wid_100per" dangerouslySetInnerHTML={(() => ({ __html: message }))()} />
//           <div className="g_wid_100per" />
//         </div>
//         <div className={Style.cusDisqus_post_colIcon}>
//           {
//             author.isAnonymous ?
//               <img src={authorAvator} alt="头像" /> :
//               <a href={author.profileUrl}>
//                 <img src={authorAvator} alt="头像" />
//               </a>
//           }
//         </div>
//       </div>
//       { children && <PostList posts={children} />}
//     </li>
//   );
// };

// Post.propTypes = {
//   post: PropTypes.shape({
//     parent: PropTypes.number,
//     message: PropTypes.string,
//   }),
// };

export default CustomComment;
