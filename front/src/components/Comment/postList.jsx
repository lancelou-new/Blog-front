import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Style from './index.scss';
import connect from '../Provider/connect';
import dateUtils from '../../utils/dateUtils';
import device from '../../utils/device';
/**
 * 单个Post组件，需状态化
 * 组件中两个回调: 两个都会setState，此时
 * 我们先后触发这两个回调函数，会重渲染几次？
 */

let curReferTime = new Date(); // 当前参考时间
let isMobile = null; // 移动端需动态修改

const EmailReg = /^\w+@([\w]+\.)+(com|cn|net)$/;
const cx = classNames.bind(Style);


class Post extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string,
      parent: PropTypes.number,
      message: PropTypes.string,
      author: PropTypes.shape({}),
      createdAt: PropTypes.string,
      children: PropTypes.array
    }),
  }
  constructor(props) {
    super(props);
    this.state = {
      isShowIn: false,
      isWithIn: false,
      post: props.post,
    };
  }
  handlerReply = () => {
    const { isShowIn } = this.state;
    this.setState({
      isWithIn: true,
      isShowIn: !isShowIn,
    });
  }
  hiddenReply = () => {
    if (!this.state.isShowIn) return;
    this.setState({
      isShowIn: false,
    });
  }
  handlerReplySuccess = (response) => {
    // 发表成功处理回调函数，插入response体
    const { post } = this.store;
    post.children = post.children || [];
    post.children.unshift(response[0]);
    this.setState({
      post
    });
  }
  render() {
    const {
      message, author, createdAt, children, id
    } = this.state.post;
    const { isShowIn, isWithIn } = this.state;
    const authorAvator = isMobile ? author.avatar.small.cache
      : author.avatar.large.cache;

    return (
      <li className={Style.cusDisqus_post}>
        <div className={Style.cusDisqus_postContent}>
          <div className={Style.cusDisqus_post_colContent}>
            <div className="g_wid_100per">
              <a href={author.profileUrl} style={{ fontWeight: 500 }}>
                {author.name}
              </a>
              &nbsp;•&nbsp;
              <span>{dateUtils.howLongBefore(new Date(createdAt), curReferTime)}</span>
              &nbsp;•&nbsp;
              <button className="anchorLike" onClick={this.handlerReply}>回复</button>
            </div>
            <div className="g_wid_100per" dangerouslySetInnerHTML={(() => ({ __html: message }))()} />
            <div className="g_wid_100per" />
          </div>
          <div className={Style.cusDisqus_post_colIcon}>
            {
              author.isAnonymous ?
                <img src={authorAvator} alt="头像" /> :
                <a href={author.profileUrl}>
                  <img src={authorAvator} alt="头像" />
                </a>
            }
          </div>
        </div>
        { isWithIn &&
          <UserInAreaWithContextLike
            show={isShowIn}
            parent={id}
            hiddenMe={this.hiddenReply}
            handlerReplySuccess={this.handlerReplySuccess}
          />
        }
        { children && <PostList posts={children} />}
      </li>
    );
  }
}

/**
 * 用户输入区域无状态组件
 * 建议UserInArea接入redux(当然，这也只在客服端干啦)
 * 这边描述下存在的问题:
 *  目前我们有一个CustomComment组件，我们可以认为在其下面又有
 * 许多的组件，各种嵌套，子组件，父组件etc。在这些组件中，就有一
 * 个UserInArea，这是一个评论发布组件，这个组件要做的当然是接收
 * 用户输入，然后就是"提交，提交之后刷新评论列表"，但是我觉得每一
 * UserInArea组件中都写一套评论提交逻辑吗，明显冗余，将UserInArea
 * 组件dump化是比较可行的，当然他会保证数据有效性，而将业务逻辑(数据
 * 提交)独立进CustomComment或"其他"。
 *
 * 此时我们就会有个问题，如何实现这个业务逻辑的剥离。其实就是CustomComment
 * 组件把回调传给UserInArea同时中间组件不用去特意传递就万事大吉。
 *
 * 这是我们考虑redux: 全局性保存回调函数，这是状态吗？即使OK，其实也只有
 * CustomComment下面的子子孙孙组件会使用到这个，全局性挂载，不适宜，此时
 * 我们可能会想到，换种打法，全局性post，dispatch 创建 comment的action，
 * 个人觉得不和是，非组件，或跨组件间的共享或通知。注意，父子。
 *
 * 这是我觉得可以用context，自己实现provider与connect，当然，也要考虑
 * context被拦截的问题(shouldComponentUpdate)
 * @param {*} props
 */
const UserInArea = (props) => {
  const userInRefs = {};
  const containerClass = cx('cusDisqus_input', { cusDisqus_input_hidden: !props.show });
  const hidden = () => {
    props.hiddenMe && props.hiddenMe();
  };
  const handlerPost = (event) => {
    event.preventDefault();
    const data = {};
    const verifyOk = Object.keys(userInRefs).every((ref) => {
      const value = userInRefs[ref].value;
      if (!value || !value.trim()) {
        return false;
      }
      data[ref] = value;
      return true;
    });
    if (!verifyOk || !EmailReg.test(userInRefs.author_email.value)) {
      return;
    }
    props.parent && (data.parent = props.parent);

    curReferTime = new Date();
    props.handlerSubmitPost(data).then((postRes) => {
      Object.keys(userInRefs).forEach((ref) => {
        userInRefs[ref].value = '';
      });
      if (postRes.code === 0) {
        props.handlerReplySuccess &&
          props.handlerReplySuccess(postRes.response);
      }
      hidden();
    }).catch(() => {
      console.log('anonymous post error');
    });
  };

  return (
    <div className={containerClass}>
      <div className={Style.cusDisqus_col_Icon} />
      <form className={Style.cusDisqus_col_In} onSubmit={handlerPost} >
        <div style={{ padding: '0 20px' }}>
          <textarea ref={(ref) => { userInRefs.message = ref; }} required />
          <div className={Style.cusDisqus_author}>
            <span>请输入您的昵称与邮箱地址(将转发至Disqus.com)</span><br />
            <input type="text" ref={(ref) => { userInRefs.author_name = ref; }} name="author_name" placeholder="昵称(必填)" required /><br />
            <input type="email" ref={(ref) => { userInRefs.author_email = ref; }} name="author_email" placeholder="邮箱(必填)" required /><br />
          </div>
          <button type="submit">发表</button>
        </div>
      </form>
    </div>
  );
};

UserInArea.propTypes = {
  handlerSubmitPost: PropTypes.func,
  show: PropTypes.bool,
  parent: PropTypes.string,
  hiddenMe: PropTypes.func,
};

const UserInAreaWithContextLike = connect(['handlerSubmitPost'])(UserInArea);

const PostList = (props) => {
  curReferTime = new Date();
  isMobile = device.mobile();
  const { posts } = props;
  return (
    <ul className={Style.cusDisqus_postListContainer}>
      {
        posts.map(post => (
          <Post post={post} key={post.id} />
        ))
      }
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    parent: PropTypes.number,
    message: PropTypes.string,
  })),
};

export { Post, UserInAreaWithContextLike };
export default PostList;
