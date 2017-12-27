// 一些配置项，储存于MongoDB。也即本文件的几乎所有的配置项，此函数被用来对这些配置项进行更新

const isProd = process.env.NODE_ENV === 'production';
const request = require('./server-axios');
const {
  ssrPort,
  serverPort,
  // enableServerSideGA
} = require('./db.config');

let siteUrl = 'www.blog.lancelou.com';
let title = 'Blog';
let description = '';
let favicon = isProd ? './dist' : '.';

// 评论相关
let commentType = 'disqus';
let commentName = '';

// Temp 待添加入库
const commentDisqusApiKey = 'E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F';
const commentDisqusApiSecret = 'GdgD8RDkR3QZWaXSNl5f7XmGrAVweJ6Dl9F7oSwbqsInv65mkMojT0l3mOp5Ikzc';
const commentDisqusAccessToken = 'a7905d2ef4ad4ff5908d101d517f6b08';
const cookieSecret = 'blog.lc.planX.com.topSecret65?';

// 一些配置项，储存于MongoDB。也即本文件的几乎所有的配置项，此函数被用来对这些配置项进行更新
function flushOption() {
  return request.get('http://localhost:3000/api/option').then((res) => {
    const options = res.data.reduce((prev, curr) => {
      prev[curr.key] = curr.value;
      return prev;
    }, {});
    siteUrl = options.siteUrl;
    title = options.title;
    description = options.description;
    // googleTrackID = options.analyzeCode;
    favicon += options.faviconUrl;

    commentType = options.commentType;
    commentName = options.commentName;
  });
}

exports.ssrPort = ssrPort;
exports.serverPort = serverPort;
// exports.enableServerSideGA = enableServerSideGA;

// 定义外部接口来修改我们的模块类目变量，
// 不然外部无法修改我们内部(private)的属性，类似于bean吧。
Object.defineProperty(exports, 'title', {
  enumerable: true,
  get() {
    return title;
  },
  set(value) {
    title = value;
  },
});
Object.defineProperty(exports, 'siteUrl', {
  enumerable: true,
  get() {
    return siteUrl;
  },
  set(value) {
    siteUrl = value;
  },
});
Object.defineProperty(exports, 'description', {
  enumerable: true,
  get() {
    return description;
  },
  set(value) {
    description = value;
  },
});
// Object.defineProperty(exports, 'googleTrackID', {
//   enumerable: true,
//   get() {
//     return googleTrackID;
//   },
//   set(value) {
//     googleTrackID = value;
//   },
// });
Object.defineProperty(exports, 'favicon', {
  enumerable: true,
  get() {
    return favicon;
  },
  set(value) {
    favicon = value;
  },
});
Object.defineProperty(exports, 'flushOption', {
  enumerable: true,
  get() {
    return flushOption;
  },
});
// Object.defineProperty(exports, 'ga', {
//   enumerable: true,
//   get() {
//     return ga;
//   },
// });
Object.defineProperty(exports, 'commentType', {
  enumerable: true,
  get() {
    return commentType;
  }
});

Object.defineProperty(exports, 'commentName', {
  enumerable: true,
  get() {
    return commentName;
  }
});

Object.defineProperty(exports, 'commentApiKey', {
  enumerable: true,
  get() {
    return commentDisqusApiKey;
  }
});

Object.defineProperty(exports, 'cookieSecret', {
  enumerable: true,
  get() {
    return cookieSecret;
  }
});

Object.defineProperty(exports, 'commentSecret', {
  enumerable: true,
  get() {
    return commentDisqusApiSecret;
  }
});

Object.defineProperty(exports, 'commentAccessToken', {
  enumerable: true,
  get() {
    return commentDisqusAccessToken;
  }
});
