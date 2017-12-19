/**
 * disqus 请求转发中间件
 *  现在有两种解决方案待评估
 *    1: 独立的一个评论系统，整个逻辑不在主站这边
 *
 *    2: 主站这边全包(get 先这边全包吧，后期可进行拆分)
 *
 *  实现:
 *    请求时抓取，解析，响应(评论的实时性，或者说及时性要求比较高)
 *
 *    直接转发吧
 *
 *  关于Disqus的guest内容发布，这边只能采取手动approve的方式了
 *
 *  /disqus/comments
 *  /disqus/post
 */

const rp = require('request-promise');
const config = require('./config');

const disqusProyMiddleware = {};
const commentExtractRegexp =
/[\w\w]*<script type="text\/json" id="disqus-threadData">([\w\W]*)<\/script>[\w\w]*/;

disqusProyMiddleware.comments = (req, res) => {
  // 获取对应文章所有的comments
  const queryParams = req.query;

  const options = {
    uri: 'https://disqus.com/embed/comments/',
    qs: {
      base: 'default',
      s_o: 's_o',
      f: config.commentName,
      t_u: queryParams.postUrl,
      t_d: queryParams.title,
      t_t: queryParams.title
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
  };
  console.log(options);
  rp(options).then((html) => {
    console.log('html.replace......');
    console.log(html.replace(commentExtractRegexp, '$1'));
    res.end(html.replace(commentExtractRegexp, '$1'));
  }).catch((err) => {
    res.end(err);
  });
};

disqusProyMiddleware.post = (req, res, next) => {

};

module.exports = disqusProyMiddleware;
