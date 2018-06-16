import { combineReducers } from 'redux';

/**
 * selector 就无需了，介于整个project简单，我们直接访问第一层的数据即可
 */

const reducerMap = {};

/**
  const StateStructure = {
    page: '博文之外的展示页面内容， 和博文展示类似',
    blog: '博文内容',
    siteInfo: '全局性的相关站点内容, 也即我们的配置信息',

    theme: '主题相关',
    items: '首页列表内容',
    achieves: '归档页内容',

    pagination: {
      cur: '当前页',
      totalPage: '数据数，页数，首页时用',
      pageSize: '每页大小，首页时用',
    },

    userAgent: {
      supportWebp: '',
    },

    options: {
      '服务端相关动态配置 如: analyzeCode(GA), commentType, commentName etc'
    }

    next: 'next blog',
    prev: 'prev blog',
  };
 */

const StateStructureArr = [
  'page', 'blog', 'siteInfo', 'theme', 'items', 'achieves',
  'pagination', 'userAgent', 'next', 'options', 'prev', 'tags'
];

const generateReducerByStateKey = stateKey => (state = null, action) => {
  switch (action.type) {
    case `${stateKey.toUpperCase()}_GET_SUCCESS`:
      return action.data || action.value;
    default:
      return state;
  }
};

const generateReducer = () => {
  StateStructureArr.forEach((stateKey) => {
    reducerMap[stateKey] = generateReducerByStateKey(stateKey);
  });
};

generateReducer();

reducerMap.loading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return true;
    case 'LOADING_STOP':
      return false;
    default:
      return state;
  }
};

export default combineReducers(reducerMap);
