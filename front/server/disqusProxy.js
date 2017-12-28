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

const proxyRequest = require('request');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const config = require('./config');

const disqusProyMiddleware = {};
const commentExtractRegexp =
/[\W\w]*<script type="text\/json" id="disqus-threadData">([\w\W]*?)<\/script>([\W\w])*/;

const mockDir = '../test/mock';
const mockFromLocal = (req, res) => {
  const targetPath = path.resolve(__dirname, `${mockDir}${req.path}`);
  let body = '';
  let status = 404;
  fs.exists(targetPath, (exists) => {
    if (exists) {
      body = fs.readFileSync(targetPath, 'utf8');
      status = 200;
    } else {
      body = 'api handler no find';
    }
    res.writeHead(status, {
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.status(status).end(body);
  });
};

const setCsrfCookie = (req, res, uniq, num) =>
  res.cookie('comment_csrf', `${Math.round(Math.random() * 10000)}${uniq}${req.ip}-${num}`, { signed: true });

const verifyCommentCsrfCookie = (req, res, reqBody) => {
  const cookies = cookieParser(req.signedCookies, config.cookieSecret);
  const commentCsrf = cookies.comment_csrf;

  if (!commentCsrf || commentCsrf !== reqBody.commentCsrf || commentCsrf.slice(commentCsrf.lastIndexOf('-')) > 50) {
    return false;
  }
  return commentCsrf;
};

const approvePost = postId => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    uri: 'https://disqus.com/api/3.0/posts/approve.json',
    qs: {
      post: postId,
      api_secret: config.commentSecret,
      access_token: config.commentAccessToken,
    },
    json: true
  };
  proxyRequest(options, (error, response, body) => {
    if (error) {
      reject(error);
    }
    resolve(body);
  });
});

disqusProyMiddleware.comments = (req, res) => {
  // 获取对应文章所有的comments
  const queryParams = req.query;

  console.log({
    base: 'default',
    s_o: 's_o',
    f: config.commentName,
    t_u: queryParams.postUrl,
    t_d: queryParams.title,
    t_t: queryParams.title,
  });

  const options = {
    uri: 'https://disqus.com/embed/comments/',
    qs: {
      base: 'default',
      s_o: 's_o',
      f: config.commentName,
      t_u: queryParams.postUrl,
      t_d: queryParams.title,
      t_t: queryParams.title,
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
  };

  setCsrfCookie(req, res, queryParams.title, 0);
  // mockFromLocal(req, res);

  proxyRequest(options, (error, response, html) => {
    res.type('json');
    let resText = '';
    if (error) {
      res.status(500).json({ code: -1 }).end();
      return;
    }
    if (commentExtractRegexp.test(html)) {
      resText = html.replace(commentExtractRegexp, '$1');
    } else {
      resText = JSON.stringify({ code: -1 });
    }
    setCsrfCookie(req, res, queryParams.title, 0);
    res.end(resText);
  });
};

/**
 * 参数传递:
 * {
 *   thread: '页面评论唯一标识id',
 *   message: '',
 *   author_name: '',
 *   author_email: '',
 *   parent: '父级评论ID(3281560419)',
 * }
 *
 * 是否需要做: 安全校验，防止接口的DDOS攻击，要Token吗？
 * 带Token: 消息头消耗请求头体积
 * 不带: 安全性如何做，别人随便都可以提交
 *
 * 当然，上满逻辑只能防CSRF，如果是站点内重复提交，
 * 随机 + thread + ip + 提交次数 -> 维度的重复限制
 */
disqusProyMiddleware.post = (req, res) => {
  const body = req.body;
  const title = body.title;
  let postNum = 0;

  delete body.title;

  const commentCsrf = verifyCommentCsrfCookie(req, res, body);

  if (!commentCsrf) {
    res.end(JSON.stringify({ code: '-1' }));
    return;
  }

  postNum = commentCsrf.slice(commentCsrf.lastIndexOf('-')) - 0;
  setCsrfCookie(req, res, title, postNum + 1);

  const postToDisqus = Object.assign({}, body, {
    api_key: config.commentApiKey,
  });

  const options = {
    method: 'POST',
    uri: 'https://disqus.com/api/3.0/posts/create.json',
    qs: postToDisqus,
    json: true,
  };

  // mockFromLocal(req, res);

  proxyRequest(options, (error, response, bodyPost) => {
    res.type('json');
    if (error) {
      setCsrfCookie(req, res, title, postNum - 1);
      res.status(500).end(error);
      return;
    }

    const postId = bodyPost.response.id;
    // 创建匿名post成功，进行approve
    approvePost(postId).then((data) => {
      res.json(data).end();
    }).catch((err) => {
      res.status(500).end(err);
    });
  });
};

module.exports = disqusProyMiddleware;
