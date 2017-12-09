/**
 * 页面组件,专门用来显示后端返回
 * 如: 关于页，友链页，博文页
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import EventEmit from '../../utils/eventCenter';
import Page404 from './page404';
import Pagination from './pagination';
import PreLoadLinkWithRouteConf from '../PreloadLink/preLoadLinkWithRouteConf';

class Page extends React.Component {
  static propTypes = {
    blog: PropTypes.shape({}),
    page: PropTypes.shape({}),
    next: PropTypes.shape({}),
    prev: PropTypes.shape({}),
    match: PropTypes.shape({}),
    siteTitle: PropTypes.string
  }

  componentDidMount() {
    EventEmit.emit('backToTop');
  }

  render() {
    const {
      blog, page, next, prev, match, siteTitle
    } = this.props;
    const content = match.path === '/post/:postName' ? blog : page;
    const is404 = Object.keys(content).length === 0;
    return is404 ? <Page404 /> :
    <div>
      <Helmet>
        <title>{content.title} - {siteTitle}</title>
      </Helmet>
      <PageArticle content={content} />
      {content.type !== 'page' && <Pagination next={next} prev={prev} />}
    </div>;
  }
}

const PageArticle = (props) => {
  const { content } = props;
  return (
    <article className="post detail">
      <div className="meta">
        <div className="date">{content.createdAt}</div>
      </div>
      <h1 className="title">
        {content.title}
      </h1>
      <div className="entry-content">
        { content.toc &&
          <div id="toc" className="toc">
            <p><strong>文章目录</strong></p>
            <div dangerouslySetInnerHTML={(() => ({ __html: content.toc }))()} />
          </div>
        }
        <div dangerouslySetInnerHTML={(() => ({ __html: content.content }))()} />
        <p>-- EOF --</p>
        <p>
          发表于 {content.createdAt} ，
          { content.category && <span>添加在分类「 <code className="notebook">{content.category}</code> 」下 ，</span> }
          { content.tags &&
            <span>并被添加
              {content.tags.map(tag => (
                <PreLoadLinkWithRouteConf to={`/tag/${tag}`} key={tag}>「 {tag} 」</PreLoadLinkWithRouteConf>
              ))}
              标签 ,
            </span>}
          最后修改于 {content.updatedAt}
        </p>
      </div>
    </article>);
};

PageArticle.propTypes = {
  content: PropTypes.shape({})
};

const mapStateToPageProps = state => ({
  blog: state.blog,
  page: state.page,
  next: state.next,
  prev: state.prev,
  siteTitle: state.options.title
});
const PageWithRedux = connect(mapStateToPageProps)(Page);
const PageWithReduxWithRoute = withRouter(PageWithRedux);

export default PageWithReduxWithRoute;
