/* eslint no-underscore-dangle: 0 */

import API from '../api/index';

/**
 * 需要success和failure吗？
 * 我们分析一下调用action的场景:
 *  (server end)路由match时，触发action，请求数据(触发action)
 *  (client end)路由切换时(link) 点击时，请求数据(触发action)
 *
 * 我们提一点: 即使全局性的触发失败，你也木有必要去dispatch，因为我个人觉得像SPA，异常(http)的处理应该是一个局部性的，
 * 我们倒是可以全局toast，但绝对没有必要去全局(通知/共用)某一个操作的状态(State)   =>   delete it
 */

const Action = {
  fetchPage: ({ model, query }) => dispatch =>
    API.fetch(model, query).then((result) => {
      dispatch({
        type: 'PAGE_GET_SUCCESS',
        data: result[0] || {},
      });
    }),

  fetchItems: ({ model, query }) => (dispatch, getState) =>
    Promise.all([
      API.fetch(model, query).then((items) => {
        // 获取items，一般是文章列表
        dispatch({
          type: 'ITEMS_GET_SUCCESS',
          data: items,
        });

        /**
         * cur page 存储在store中是否有用？
         * 我觉地没有多大作用:
         *  1. cur page完全可以表现在url中
         *  2. 我们无需对page cur进行共享
         */
        return items;
      }),
      (() => {
        const state = getState();

        if (!state.pagination || state.pagination.totalPage === -1) {
          return API.fetch(model, {
            conditions: {
              type: 'post',
              isPublic: true,
            },
            count: 1,
          }).then((totals) => {
            const pageSize = (state.pagination && state.pagination.cur) || 10;
            dispatch({
              type: 'PAGINATION_GET_SUCCESS',
              data: {
                pageSize,
                totals,
              },
            });
          });
        }
        return Promise.resolve();
      })()
    ]),

  fetchTags: ({ model, query }) => dispatch =>
    API.fetch(model, query).then((result) => {
      /**
       * 目前数据库的关于tags的查询是基于post这张表的：
       * 从而使得我们的服务端API的返回格式类似如下: eg
       * [
       *   {
       *      "tags": ['AE', '静止系'],
       *   },
       *   {
       *      "tags": ['Javascript', 'AE']
       *   }
       * ]
       * 可以看出，数组的每一个item就是我们从一个post中select出来的tags
       * 原则上来说，我们最终需要什么样子的输出呢？
       * 我觉得可以是这样：
       *
       * {
       *  'tagName': 'post num in this tag',
       *  etc
       * }
       */
      const tags = result.reduce((colTags, post) => {
        const ltags = colTags;
        post.tags.forEach((tagName) => {
          !ltags[tagName] && (ltags[tagName] = 0);
          ltags[tagName] += 1;
        });
        return ltags;
      }, {});

      dispatch({
        type: 'TAGS_GET_SUCCESS',
        data: tags,
      });
      return tags;
    }),
  fetchTagPager: ({ model, query }) => dispatch =>
    API.fetch(model, query).then((items) => {
      dispatch({
        type: 'ITEMS_GET_SUCCESS',
        data: items,
      });
      return items;
    }),

  fetchBlogs: ({ model, query }) => dispatch =>
    API.fetch(model, query).then((result) => {
      /**
       * 问题comes:
       *  在服务端渲染的过程中，如果我们的blog不存在，此时如何办：
       *    1. 也即我们如何告知对应组件(我们的内容显示组件)，404了
       *
       * 404有很两种情况:
       *     本身路由就不存在
       *     路由存在，但是内容是动态请求的，然后请求的内容不存在
       *
       * 我信任，当前的store是绝对正确的，如果没有对应项，那么，它就是404
       */
      const blog = result[0];
      if (!blog) {
        dispatch({
          type: 'BLOG_GET_SUCCESS',
          data: {},
        });
        return Promise.resolve();
      }

      dispatch({
        type: 'BLOG_GET_SUCCESS',
        data: blog,
      });

      const first = API.fetch('post', {
        conditions: {
          _id: { $lt: blog._id },
          type: 'post',
          isPublic: true,
        },
        select: {
          _id: 0,
          title: 1,
          pathName: 1,
          type: 1,
        },
        sort: {
          createdAt: -1,
        },
        limit: 1,
      });

      const second = API.fetch('post', {
        conditions: {
          _id: { $gt: blog._id },
          type: 'post',
          isPublic: true,
        },
        select: {
          _id: 0,
          title: 1,
          pathName: 1,
          type: 1,
        },
        limit: 1,
      });

      return Promise.all([first, second]).then((npResult) => {
        const prevBlog = npResult[0][0];
        if (prevBlog && prevBlog.type === 'post') {
          dispatch({
            type: 'PREV_GET_SUCCESS',
            data: prevBlog,
          });
        } else {
          dispatch({
            type: 'PREV_GET_SUCCESS',
            data: {},
          });
        }

        const nextBlog = npResult[1][0];
        if (nextBlog && nextBlog.type === 'post') {
          dispatch({
            type: 'NEXT_GET_SUCCESS',
            data: nextBlog,
          });
        } else {
          dispatch({
            type: 'NEXT_GET_SUCCESS',
            data: {},
          });
        }
      });
    }),

  fetchAchieve: ({ model, query }) => dispatch =>
    API.fetch(model, query).then((result) => {
      /**
       * [
       *  {title: '', createdAt: '', pathName: '2017-09-19 23:28:57'},
       *  {title: '', createdAt: '', pathName: '2017-09-21 23:28:57'}
       * ]
       *
       * output:
       *  {
       *    '2017年05月': [],
       *    '2017年06月': [],
       *  }
      */
      // return API.fetch()
      // 有一点
      let curAchieveName = '';
      const YMRegexp = /^([\d]{4})-([\d]{2})-([\d]{2}).*$/;

      const sortedItems = result.reduce((itemCol, curPost) => {
        const itemColP = itemCol;
        curAchieveName = curPost.createdAt.replace(YMRegexp, '$1年$2月');
        !itemColP[curAchieveName] && (itemColP[curAchieveName] = []);
        itemColP[curAchieveName].push(curPost);
        return itemColP;
      }, {});
      dispatch({
        type: 'ACHIEVES_GET_SUCCESS',
        data: sortedItems,
      });
      return sortedItems;
    }),

  fetchTheme: () => dispatch =>
    API.fetch('theme', {
      conditions: { name: 'firekylin' },
      select: { _id: 0 },
    }).then((result) => {
      if (result[0]) {
        dispatch({
          type: 'THEME_GET_SUCCESS',
          data: result[0],
        });
      }
      return result[0];
    }),

  fetchOptions: () => dispatch =>
    API.fetch('option', {
      select: { _id: 0, key: 1, value: 1 },
    }).then((options) => {
      const optionsMap = options.reduce((optionsCol, curOption) => {
        const optionsP = optionsCol;
        optionsP[curOption.key] = curOption.value;
        return optionsP;
      }, {});
      dispatch({
        type: 'OPTIONS_GET_SUCCESS',
        data: optionsMap,
      });
      return optionsMap;
    }),

  startLoading: () => ({
    type: 'LOADING_START'
  }),

  stopLoading: () => ({
    type: 'LOADING_STOP'
  })
};

export default Action;
