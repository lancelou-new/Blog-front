module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mustSSRLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_route__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action__ = __webpack_require__(41);



var config = [{
  path: '/',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["c" /* ItemListContainer */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchItems
}, {
  path: '/achieve',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["a" /* Achieve */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchAchieve,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10));
  }
}, {
  path: '/tag',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["e" /* Tag */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchTags,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11));
  }
}, {
  path: '/tag/:tagName/page=:page(\\d+)',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["b" /* HeaderItemListContainer */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchTagPager,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16));
  }
}, {
  path: '/post/:postName',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["d" /* Page */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchBlogs,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5));
  }
}, {
  path: '/page=:page(\\d+)',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["c" /* ItemListContainer */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchItems,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12));
  }
}, {
  path: /^\/(?!(?:tag|achieve|page=[\d]+)\/?$)(.+)\/?$/,
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["d" /* Page */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchPage,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5));
  }
}];

// action.fetchOptions
var mustSSRLoad = [__WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchTheme, __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchOptions];
var routerConfig = config;
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_create_route__["f" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * 页面组件,专门用来显示后端返回
 * 如: 关于页，友链页，博文页
 */


var Page = function Page() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    '\u9875\u9762\u7EC4\u4EF6,\u4E13\u95E8\u7528\u6765\u663E\u793A\u540E\u7AEF\u8FD4\u56DE'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"left_navContainer":"l03db946dbc676b74c66d_left_navContainer","left_icon":"l03db946dbc676b74c66d_left_icon","left_menuItem":"l03db946dbc676b74c66d_left_menuItem","left_mediaMenu":"l03db946dbc676b74c66d_left_mediaMenu"};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * 归档组件，内嵌于pageContainer
 */
var Achieve = function Achieve() {
  var title = '归档专用啦';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h3',
    null,
    title
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Achieve);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * 标签组件，可内嵌如pageContainer组件中
*/



var Tag = function Tag() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    '\u6807\u7B7E\u7EC4\u4EF6\uFF0C\u663E\u793A\u6240\u6709\u6807\u7B7E'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Item__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination__ = __webpack_require__(39);
/**
 * 主页的ItemList Container，不包含主标题
*/







var ItemListContainer = function ItemListContainer(props) {
  var itemList = props.itemList,
      pagination = props.pagination;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    null,
    itemList.map(function (itemVo) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Item__["a" /* default */], { vo: itemVo, key: itemVo.createdAt });
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__pagination__["a" /* default */], { pagination: pagination })
  );
};

ItemListContainer.propTypes = {
  itemList: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    createdAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    summary: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })),
  pagination: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    totalPage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  })
};

var mapStateToItemListProps = function mapStateToItemListProps(state) {
  return {
    itemList: state.items,
    pagination: state.pagination
  };
};

var ItemListContainerWithRedux = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToItemListProps, null)(ItemListContainer);

/* harmony default export */ __webpack_exports__["default"] = (ItemListContainerWithRedux);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint jsx-a11y/anchor-is-valid: 0, react/prop-types: 0 */

/**
 * 自定义链接，HOC，跳转前数据获取
 */





var PreloaderLink = function (_Component) {
  _inherits(PreloaderLink, _Component);

  function PreloaderLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PreloaderLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreloaderLink.__proto__ || Object.getPrototypeOf(PreloaderLink)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (evt) {
      evt.preventDefault();
      _this.props.onPreload().then(function () {
        var _this$props = _this.props,
            replace = _this$props.replace,
            to = _this$props.to;

        if (replace) {
          _this.context.router.history.replace(to);
        } else {
          _this.context.router.history.push(to);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PreloaderLink, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
        { onClick: this.handleClick, to: this.props.to },
        this.props.children
      );
    }
  }]);

  return PreloaderLink;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PreloaderLink.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  })
};
PreloaderLink.propTypes = {
  onPreload: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};


/* harmony default export */ __webpack_exports__["a"] = (PreloaderLink);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__action_requestParamsFactory__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(2);
/* eslint react/prop-types: 0 */
/**
 * PreLoadLinkWithRouteConf
 * 预加载组件: 结合路由配置对象，动态生成 数据&组件 预加载promise
 *
 * 1. 根据url和router config去除匹配的项
 * 2. 生成match对象，使用match来进行 "dispatch的包装"
 */








var PreLoadLinkWithRouteConf = function PreLoadLinkWithRouteConf(props) {
  var preloadFuncs = [];
  var children = props.children,
      dispatch = props.dispatch,
      isNeedPreComponent = props.isNeedPreComponent,
      replace = props.replace,
      to = props.to;


  __WEBPACK_IMPORTED_MODULE_6__routes__["c" /* routerConfig */].some(function (config) {
    var match = Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["matchPath"])(to, config);
    if (match) {
      match.path = match.path.toString();
      config.loadData && preloadFuncs.push(config.loadData(Object(__WEBPACK_IMPORTED_MODULE_5__action_requestParamsFactory__["a" /* default */])(match)));
      config.componentPromise && isNeedPreComponent && preloadFuncs.push(config.componentPromise);
      return true;
    }
    return false;
  });
  var dataLoader = function dataLoader() {
    if (preloadFuncs.length) {
      return Promise.all(preloadFuncs.map(function (func, index) {
        return index === 0 ? dispatch(func) : func();
      }));
    }
    return Promise.resolve();
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */],
    { onPreload: dataLoader, to: to, replace: replace },
    children
  );
};

PreLoadLinkWithRouteConf.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  isNeedPreComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  dispatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
};

var PreLoadLinkWithRouteConfWithRedux = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(PreLoadLinkWithRouteConf);

/* harmony default export */ __webpack_exports__["a"] = (PreLoadLinkWithRouteConfWithRedux);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var generateFetchPageParams = function generateFetchPageParams(_ref) {
  var params = _ref.params;
  return {
    model: 'post',
    query: {
      conditions: { pathName: params.pageName, isPublic: true, type: 'page' },
      select: {
        title: 1, createdAt: 1, content: 1, toc: 1, updatedAt: 1, pathName: 1, allowComment: 1
      }
    }
  };
};

var generateFetchItemsParams = function generateFetchItemsParams(_ref2) {
  var params = _ref2.params;

  var itemLenPerPage = 10;
  var curPage = params && params.page || 1;
  return {
    model: 'post',
    query: {
      conditions: { type: 'post', isPublic: true },
      select: {
        _id: 0, title: 1, summary: 1, createdAt: 1, updatedAt: 1, pathName: 1
      },
      limit: itemLenPerPage,
      skip: (curPage - 1) * itemLenPerPage,
      sort: { createdAt: -1 }
    }
  };
};

var generateFetchTagsParams = function generateFetchTagsParams() {
  return {
    model: 'post',
    query: {
      conditions: {
        type: 'post',
        isPublic: true
      },
      select: {
        _id: 0,
        tags: 1
      }
    }
  };
};

var generateFetchTagPageParams = function generateFetchTagPageParams(_ref3) {
  var params = _ref3.params;

  var itemLenPerPage = 20;
  var curPage = params && params.page || 1;
  return {
    model: 'post',
    query: {
      conditions: {
        tags: params.tagName,
        type: 'post',
        isPublic: true
      },
      select: {
        _id: 0, tags: 1, title: 1, summary: 1, createdAt: 1, updatedAt: 1, pathName: 1
      },
      limit: itemLenPerPage,
      skip: (curPage - 1) * itemLenPerPage,
      sort: { updatedAt: -1 }
    }
  };
};

var generateFetchBlogsParams = function generateFetchBlogsParams(_ref4) {
  var params = _ref4.params;
  return {
    model: 'post',
    query: {
      conditions: { pathName: params.postName, isPublic: true, type: 'post' },
      select: {
        title: 1,
        createdAt: 1,
        content: 1,
        toc: 1,
        updatedAt: 1,
        pathName: 1,
        allowComment: 1,
        tags: 1,
        category: 1
      }
    }
  };
};

var generateFetchAchieveParams = function generateFetchAchieveParams() {
  return {
    model: 'post',
    query: {
      conditions: { type: 'post', isPublic: true },
      select: {
        _id: 0, title: 1, createdAt: 1, pathName: 1
      },
      sort: { createdAt: -1 }
    }
  };
};

var PathToParamsGeneratorMap = {
  '/': generateFetchItemsParams,
  '/achieve': generateFetchAchieveParams,
  '/tag': generateFetchTagsParams,
  '/tag/:tagName': generateFetchTagPageParams,
  '/post/:postName': generateFetchBlogsParams,
  '/page=:page(\\d+)': generateFetchItemsParams,
  '/^\\/(?!(?:tag|achieve|page=[\\d]+)\\/?$)(.+)\\/?$/': generateFetchPageParams
};

var generateParams = function generateParams(match) {
  return PathToParamsGeneratorMap[match.path] ? PathToParamsGeneratorMap[match.path](match) : null;
};

/* harmony default export */ __webpack_exports__["a"] = (generateParams);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * 标签内容页，itemList容器组件，包含header头部结构
 */



var HeaderItemListContainer = function HeaderItemListContainer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    '\u8FD9\u662F\u5E26\u5934\u90E8\u7684itemList\u5C55\u793A\u5BB9\u5668\u7EC4\u4EF6'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderItemListContainer);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__action_requestParamsFactory__ = __webpack_require__(15);
/* eslint react/jsx-filename-extension: 0 */
/**
 * 服务端渲染入口文件:
 * 仿照Vue ssr: 我们将会在这个文件中导出最终需要打包输出的文件
 *
 * 基于一点: 这里的代码其实都是在外部server调用时进行运行的  打包并不会对业务逻辑有影响
 * 也即，
 *
 * 原则上来说，我觉得我们将服务端入口，我们将其写成一个express的中
 * 间件模式即可
 *
 * 我们更希望的是将这个文件当成一个中间件creator，传入特定的参数(配置)
 *
 * 职责分明(这边可以干啥 && 应该干啥)
 *  构造整个首屏的基础html结构
 *  样式解析插入
 *  webpackJsonp模块化chunk按需加载
 *  meta，搜索引擎相关(header处理)
 *
 * 目前需要解决的问题: 打包输出的是啥 -> 执行上下文会对打包输出做啥
 *  -> 我们又是如何和执行上下文合作来响应请求
 *
 *
 * Dynamically load modules: import()
 *  动态模块加载，前后端的配合问题，后端将模块代码进行类(lazy load)先行注入
 * (当然这只是按需注入啦)
 *
 */









// const titleReg = /<.*?>(.+?)<.*?>/;

var createStoreAndLoadData = function createStoreAndLoadData(req, store) {
  var needLoads = [];
  var preLoadComponent = null;
  Object.assign(needLoads, __WEBPACK_IMPORTED_MODULE_6__routes_index__["b" /* mustSSRLoad */]);
  needLoads = needLoads.map(function (fetchSome) {
    return fetchSome();
  });

  __WEBPACK_IMPORTED_MODULE_6__routes_index__["c" /* routerConfig */].some(function (route) {
    // use `matchPath` here
    var match = Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["matchPath"])(req.url, route);
    if (match) {
      needLoads.push(route.loadData(Object(__WEBPACK_IMPORTED_MODULE_7__action_requestParamsFactory__["a" /* default */])(match)));
      preLoadComponent = route.component;
    }
    return match;
  });

  return Promise.all(needLoads.map(function (load) {
    return load(store.dispatch, store.getState);
  })).then(function () {
    return preLoadComponent;
  });
};

/**
 * 服务端入口工厂 -> 传入运行时配置参数，生成这个渲染中间件
 * @param {*} options 配置对象
 *
 */

var serverEntryMiddlewareCreator = function serverEntryMiddlewareCreator(_ref) {
  var html = _ref.html,
      log = _ref.log,
      supportWebp = _ref.supportWebp,
      isProd = _ref.isProd,
      chunkObj = _ref.chunkObj;
  return function (req, res, next) {
    var store = Object(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */])();
    var s = Date.now();
    createStoreAndLoadData(req, store).then(function (preLoadComponent) {
      log.debug('lancelog-> Server Data Fetch: ' + (Date.now() - s) + 'ms');

      var ssrStartS = Date.now();
      var renderStream = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToNodeStream"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__main__["a" /* default */], { store: store }));
      var helmet = __WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a.renderStatic();

      // FB data Trigger
      renderStream.once('data', function () {
        log.debug('lancelog-> SSR to First Byte: ' + (Date.now() - ssrStartS) + 'ms');
        var title = helmet.title,
            link = helmet.link,
            meta = helmet.meta;

        var titleText = title.toString();
        var metaData = '' + titleText + meta.toString() + link.toString();
        // const matched = titleText.match(titleReg);

        var chunk = html.head.replace('<title></title>', metaData);
        res.write(chunk);
        log.debug('lancelog-> First byte get');
      });

      // stream data come
      renderStream.on('data', function (chunk) {
        res.write(chunk);
      });

      // stream end
      renderStream.on('end', function () {
        var state = store.getState();
        res.write('<script>window.__INITIAL_STATE__=' + JSON.stringify(state) + '</script>');
        var tail = html.tail;
        if (isProd && preLoadComponent) {
          for (var key in chunkObj) {
            if (key.split('.')[0] === preLoadComponent.chunkName) {
              var chunk = '<script type="text/javascript" charset="utf-8">' + chunkObj[key] + '</script></body>';
              tail = tail.replace('</body>', chunk);
              break;
            }
          }
        }
        res.end(tail);
        log.debug('whole request: ' + (Date.now() - s) + 'ms');
      });

      renderStream.on('error', function (err) {
        res.end(html.origin);
        log.error(err);
      });
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (serverEntryMiddlewareCreator);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(22);
} else {
  module.exports = require('./cjs/react-dom-server.node.development.js');
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.0
 react-dom-server.node.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var k=__webpack_require__(23);__webpack_require__(24);var m=__webpack_require__(0),p=__webpack_require__(25),aa=__webpack_require__(26),ba=__webpack_require__(28),ca=__webpack_require__(29);
function w(a){for(var b=arguments.length-1,g="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)g+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
function x(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var y={Namespaces:{html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},getIntrinsicNamespace:x,getChildNamespace:function(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?x(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}},da={children:!0,dangerouslySetInnerHTML:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,style:!0};
function z(a,b){return(a&b)===b}
var C={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=C,g=a.Properties||{},c=a.DOMAttributeNamespaces||{},h=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in g){D.properties.hasOwnProperty(f)?w("48",f):void 0;var e=f.toLowerCase(),d=g[f];e={attributeName:e,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:z(d,b.MUST_USE_PROPERTY),
hasBooleanValue:z(d,b.HAS_BOOLEAN_VALUE),hasNumericValue:z(d,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:z(d,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:z(d,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:z(d,b.HAS_STRING_BOOLEAN_VALUE)};1>=e.hasBooleanValue+e.hasNumericValue+e.hasOverloadedBooleanValue?void 0:w("50",f);h.hasOwnProperty(f)&&(e.attributeName=h[f]);c.hasOwnProperty(f)&&(e.attributeNamespace=c[f]);a.hasOwnProperty(f)&&(e.mutationMethod=a[f]);D.properties[f]=e}}},D=
{ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ATTRIBUTE_NAME_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
properties:{},shouldSetAttribute:function(a,b){if(D.isReservedProp(a)||!("o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return D.shouldAttributeAcceptBooleanValue(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}},getPropertyInfo:function(a){return D.properties.hasOwnProperty(a)?D.properties[a]:null},shouldAttributeAcceptBooleanValue:function(a){if(D.isReservedProp(a))return!0;var b=D.getPropertyInfo(a);
if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a},isReservedProp:function(a){return da.hasOwnProperty(a)},injection:C},E=D,ea=/["'&<>]/;
function F(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ea.exec(a);if(b){var g="",c,h=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="\x26quot;";break;case 38:b="\x26amp;";break;case 39:b="\x26#x27;";break;case 60:b="\x26lt;";break;case 62:b="\x26gt;";break;default:continue}h!==c&&(g+=a.substring(h,c));h=c+1;g+=b}a=h!==c?g+a.substring(h,c):g}return a}var fa=new RegExp("^["+E.ATTRIBUTE_NAME_START_CHAR+"]["+E.ATTRIBUTE_NAME_CHAR+"]*$"),G={},H={};
function ha(a){if(H.hasOwnProperty(a))return!0;if(G.hasOwnProperty(a))return!1;if(fa.test(a))return H[a]=!0;G[a]=!0;return!1}
var I={createMarkupForID:function(a){return E.ID_ATTRIBUTE_NAME+"\x3d"+('"'+F(a)+'"')},createMarkupForRoot:function(){return E.ROOT_ATTRIBUTE_NAME+'\x3d""'},createMarkupForProperty:function(a,b){var g=E.getPropertyInfo(a);if(g){if(null==b||g.hasBooleanValue&&!b||g.hasNumericValue&&isNaN(b)||g.hasPositiveNumericValue&&1>b||g.hasOverloadedBooleanValue&&!1===b)return"";var c=g.attributeName;if(g.hasBooleanValue||g.hasOverloadedBooleanValue&&!0===b)return c+'\x3d""';if("boolean"!==typeof b||E.shouldAttributeAcceptBooleanValue(a))return c+
"\x3d"+('"'+F(b)+'"')}else if(E.shouldSetAttribute(a,b))return null==b?"":a+"\x3d"+('"'+F(b)+'"');return null},createMarkupForCustomAttribute:function(a,b){return ha(a)&&null!=b?a+"\x3d"+('"'+F(b)+'"'):""}},J={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ia=k({menuitem:!0},J),K={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,
columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ja=["Webkit","ms","Moz","O"];
Object.keys(K).forEach(function(a){ja.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);K[b]=K[a]})});var L=y.Namespaces,ka=y.getIntrinsicNamespace,la=y.getChildNamespace,M=m.Children.toArray,ma={listing:!0,pre:!0,textarea:!0};function N(a){return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}var na=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,O={},oa=ba(function(a){return aa(a)});
function pa(a){var b="";m.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function qa(a,b){if(a=a.contextTypes){var g={},c;for(c in a)g[c]=b[c];b=g}else b=p;return b}var ra={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null};function P(a,b){void 0===a&&w("152",N(b)||"Component")}
function sa(a,b){for(;m.isValidElement(a);){var g=a.type;if("function"!==typeof g)break;var c=qa(g,b),h=[],f=!1,e={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===h)return null},enqueueReplaceState:function(a,b){f=!0;h=[b]},enqueueSetState:function(a,b){if(null===h)return null;h.push(b)}};if(g.prototype&&g.prototype.isReactComponent)var d=new g(a.props,c,e);else if(d=g(a.props,c,e),null==d||null==d.render){a=d;P(a,g);continue}d.props=a.props;d.context=c;d.updater=e;e=d.state;
void 0===e&&(d.state=e=null);if(d.componentWillMount)if(d.componentWillMount(),h.length){e=h;var q=f;h=null;f=!1;if(q&&1===e.length)d.state=e[0];else{var r=q?e[0]:d.state,l=!0;for(q=q?1:0;q<e.length;q++){var n=e[q];if(n="function"===typeof n?n.call(d,r,a.props,c):n)l?(l=!1,r=k({},r,n)):k(r,n)}d.state=r}}else h=null;a=d.render();P(a,g);if("function"===typeof d.getChildContext){c=g.childContextTypes;"object"!==typeof c?w("107",N(g)||"Unknown"):void 0;var B=d.getChildContext();for(var A in B)A in c?
void 0:w("108",N(g)||"Unknown",A)}B&&(b=k({},b,B))}return{child:a,context:b}}
var Q=function(){function a(b,g){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");b=m.isValidElement(b)?[b]:M(b);this.stack=[{domNamespace:L.html,children:b,childIndex:0,context:p,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=g}a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=!0;break}var c=this.stack[this.stack.length-1];if(c.childIndex>=
c.children.length)b+=c.footer,this.previousWasTextNode=!1,this.stack.pop(),"select"===c.tag&&(this.currentSelectValue=null);else{var h=c.children[c.childIndex++];b+=this.render(h,c.context,c.domNamespace)}}return b};a.prototype.render=function(a,g,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return F(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+F(c);this.previousWasTextNode=!0;return F(c)}g=sa(a,g);a=g.child;g=g.context;if(null===a||!1===
a)return"";if(m.isValidElement(a))return this.renderDOM(a,g,c);a=M(a);this.stack.push({domNamespace:c,children:a,childIndex:0,context:g,footer:""});return""};a.prototype.renderDOM=function(a,g,c){var b=a.type.toLowerCase();c===L.html&&ka(b);O.hasOwnProperty(b)||(na.test(b)?void 0:w("65",b),O[b]=!0);var f=a.props;if("input"===b)f=k({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===
b){var e=f.value;if(null==e){e=f.defaultValue;var d=f.children;null!=d&&(null!=e?w("92"):void 0,Array.isArray(d)&&(1>=d.length?void 0:w("93"),d=d[0]),e=""+d);null==e&&(e="")}f=k({},f,{value:void 0,children:""+e})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=k({},f,{value:void 0});else if("option"===b){d=this.currentSelectValue;var q=pa(f.children);if(null!=d){var r=null!=f.value?f.value+"":q;e=!1;if(Array.isArray(d))for(var l=0;l<d.length;l++){if(""+d[l]===r){e=
!0;break}}else e=""+d===r;f=k({selected:void 0,children:void 0},f,{selected:e,children:q})}}if(e=f)ia[b]&&(null!=e.children||null!=e.dangerouslySetInnerHTML?w("137",b,""):void 0),null!=e.dangerouslySetInnerHTML&&(null!=e.children?w("60"):void 0,"object"===typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML?void 0:w("61")),null!=e.style&&"object"!==typeof e.style?w("62",""):void 0;e=f;d=this.makeStaticMarkup;q=1===this.stack.length;r="\x3c"+a.type;for(t in e)if(e.hasOwnProperty(t)){var n=
e[t];if(null!=n){if("style"===t){l=void 0;var B="",A="";for(l in n)if(n.hasOwnProperty(l)){var u=0===l.indexOf("--"),v=n[l];null!=v&&(B+=A+oa(l)+":",A=l,u=null==v||"boolean"===typeof v||""===v?"":u||"number"!==typeof v||0===v||K.hasOwnProperty(A)&&K[A]?(""+v).trim():v+"px",B+=u,A=";")}n=B||null}l=null;b:if(u=b,v=e,-1===u.indexOf("-"))u="string"===typeof v.is;else switch(u){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":u=
!1;break b;default:u=!0}u?ra.hasOwnProperty(t)||(l=I.createMarkupForCustomAttribute(t,n)):l=I.createMarkupForProperty(t,n);l&&(r+=" "+l)}}d||q&&(r+=" "+I.createMarkupForRoot());var t=r;e="";J.hasOwnProperty(b)?t+="/\x3e":(t+="\x3e",e="\x3c/"+a.type+"\x3e");a:{d=f.dangerouslySetInnerHTML;if(null!=d){if(null!=d.__html){d=d.__html;break a}}else if(d=f.children,"string"===typeof d||"number"===typeof d){d=F(d);break a}d=null}null!=d?(f=[],ma[b]&&"\n"===d.charAt(0)&&(t+="\n"),t+=d):f=M(f.children);a={domNamespace:la(c,
a.type),tag:b,children:f,childIndex:0,context:g,footer:e};this.stack.push(a);return t};return a}(),R={renderToString:function(a){return(new Q(a,!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new Q(a,!0)).read(Infinity)}};
function ta(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
var S=function(a){function b(g,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var h=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");h=!h||"object"!==typeof h&&"function"!==typeof h?this:h;h.partialRenderer=new Q(g,c);return h}ta(b,a);b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.emit("error",c)}};return b}(ca.Readable),ua={renderToNodeStream:function(a){return new S(a,
!1)},renderToStaticNodeStream:function(a){return new S(a,!0)}},T=E.injection.MUST_USE_PROPERTY,U=E.injection.HAS_BOOLEAN_VALUE,va=E.injection.HAS_NUMERIC_VALUE,V=E.injection.HAS_POSITIVE_NUMERIC_VALUE,W=E.injection.HAS_STRING_BOOLEAN_VALUE,wa={Properties:{allowFullScreen:U,allowTransparency:W,async:U,autoPlay:U,capture:U,checked:T|U,cols:V,contentEditable:W,controls:U,"default":U,defer:U,disabled:U,download:E.injection.HAS_OVERLOADED_BOOLEAN_VALUE,draggable:W,formNoValidate:U,hidden:U,loop:U,multiple:T|
U,muted:T|U,noValidate:U,open:U,playsInline:U,readOnly:U,required:U,reversed:U,rows:V,rowSpan:va,scoped:U,seamless:U,selected:T|U,size:V,start:va,span:V,spellCheck:W,style:0,itemScope:U,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:W},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",
""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+b)}}},X=E.injection.HAS_STRING_BOOLEAN_VALUE,Y={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Z={Properties:{autoReverse:X,externalResourcesRequired:X,preserveAlpha:X},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:Y.xlink,xlinkArcrole:Y.xlink,xlinkHref:Y.xlink,
xlinkRole:Y.xlink,xlinkShow:Y.xlink,xlinkTitle:Y.xlink,xlinkType:Y.xlink,xmlBase:Y.xml,xmlLang:Y.xml,xmlSpace:Y.xml}},xa=/[\-\:]([a-z])/g;function ya(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(xa,
ya);Z.Properties[b]=0;Z.DOMAttributeNames[b]=a});E.injection.injectDOMPropertyConfig(wa);E.injection.injectDOMPropertyConfig(Z);module.exports={renderToString:R.renderToString,renderToStaticMarkup:R.renderToStaticMarkup,renderToNodeStream:ua.renderToNodeStream,renderToStaticNodeStream:ua.renderToStaticNodeStream,version:"16.0.0"};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(27);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app__ = __webpack_require__(31);
/* eslint react/prop-types: 0 */
/**
 * 整个react项目的入口文件App: 上下文无关性，通用性入口
 *  由client-entry 和 server-entry调用
 */





var Root = function Root(_ref) {
  var store = _ref.store;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_app__["a" /* default */], null)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Nav_LeftNav__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_global_scss__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_global_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 应用性入口文件，完全业务性，包含路由
 *
 * 此时发现了抽取预加载链接(路由入口)组件(高阶)的必要性了
 * 此组件主要负责: 接收一个to(url)，此url已在route config中
 * 进行了配置，从而生成数据，组件预加载链接！
 *
 * 现在我们的问题是: 这需要是个高阶组件还是仅仅是个组件即可
 * 如果感觉不到基础组件的痛苦，那我们就用基础组件试试
 */








var RouteWithSubRoutes = function RouteWithSubRoutes(route) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], {
    exact: route.exact,
    strict: route.strict,
    path: route.path,
    render: function render(props) {
      return (
        // pass the sub-routes down to keep nesting
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(route.component, _extends({}, props, { routes: route.routes }))
      );
    }
  });
};

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__routes_index__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__index_scss___default.a.main_container },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__index_scss___default.a.main_left },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Nav_LeftNav__["a" /* default */], null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__index_scss___default.a.main_right },
        __WEBPACK_IMPORTED_MODULE_2__routes_index__["c" /* routerConfig */].map(function (route) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RouteWithSubRoutes, _extends({ key: route.path }, route));
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], null)
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Achieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ItemListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeaderItemListContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Achieve__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tags__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ItemListContainer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_HeaderItemListContainer__ = __webpack_require__(16);








/**
 * chunkName 声明挂载: 方便服务端按需推入客服端
 */
__WEBPACK_IMPORTED_MODULE_1__components_Achieve__["default"].chunkName = 'Achieve';
__WEBPACK_IMPORTED_MODULE_2__components_Tags__["default"].chunkName = 'Tag';
__WEBPACK_IMPORTED_MODULE_3__components_Page__["default"].chunkName = 'Page';
__WEBPACK_IMPORTED_MODULE_4__components_ItemListContainer__["default"].chunkName = 'ItemListContainer';
__WEBPACK_IMPORTED_MODULE_5__components_HeaderItemListContainer__["default"].chunkName = 'HeaderItemListContainer';

var Achieve = __WEBPACK_IMPORTED_MODULE_1__components_Achieve__["default"];
var Tag = __WEBPACK_IMPORTED_MODULE_2__components_Tags__["default"];
var Page = __WEBPACK_IMPORTED_MODULE_3__components_Page__["default"];
var ItemListContainer = __WEBPACK_IMPORTED_MODULE_4__components_ItemListContainer__["default"];
var HeaderItemListContainer = __WEBPACK_IMPORTED_MODULE_5__components_HeaderItemListContainer__["default"];

/* harmony default export */ __webpack_exports__["f"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter___default.a);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StaticRouter = __webpack_require__(34);

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(8);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PathUtils = __webpack_require__(35);

var _Router = __webpack_require__(36);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = (0, _PathUtils.addLeadingSlash)(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.propTypes = {
  basename: _propTypes2.default.string,
  context: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = StaticRouter;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(8);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for putting history on context.
 */
var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Router;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreloadLink__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(2);
/**
 * itemList的单个item组件
*/







var Item = function Item(props) {
  var vo = props.vo;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'article',
    { className: 'post' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'meta' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'date' },
        vo.createdAt
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'title' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'https://sss' },
        vo.title
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entry-content', dangerouslySetInnerHTML: function () {
        return { __html: vo.summary };
      }() })
  );
};

Item.propTypes = {
  vo: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    createdAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    pathName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    summary: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    updatedAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })
};

/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(14);
/**
 * list组件下属分页组件
 * 基于单一职责原则: 分页组件只是负责展示及分页导向，
 * 当然我们也可以去显示其子内容
 *
 * 接收基本数据/参数:
 *  url: 基础url，后面缺失/page=~
 *  pagination: 路由对象
 *  withRoute下？ 接收当前分页参数
 */







var Pagination = function Pagination(props) {
  var match = props.match,
      pagination = props.pagination;

  var curPage = match.params.page || 1;
  var url = match.url;
  var withPrev = false;
  var withNext = false;

  curPage -= 0;
  withPrev = curPage > 1;
  withNext = Math.ceil(pagination.totals / pagination.pageSize) > curPage;
  url = url.indexOf('page') < 0 ? url + 'page=1' : url;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { className: __WEBPACK_IMPORTED_MODULE_3__index_scss___default.a.itemL_pagination },
    withPrev && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
      { to: url.replace(/(.*page=)\d+/, '$1' + (curPage - 1)) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        '\xAB \u4E0A\u4E00\u9875'
      )
    ),
    withNext && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
      { to: url.replace(/(.*page=)\d+/, '$1' + (curPage + 1)) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        '\u4E0B\u4E00\u9875 \xBB'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
        { to: '/achieve' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '\u535A\u5BA2\u5F52\u6863'
        )
      )
    )
  );
};

Pagination.propTypes = {
  match: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape(),
  pagination: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    totals: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    pageSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
  })
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["withRouter"])(Pagination));

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(42);
/* eslint no-underscore-dangle: 0 */



/**
 * 需要success和failure吗？
 * 我们分析一下调用action的场景:
 *  (server end)路由match时，触发action，请求数据(触发action)
 *  (client end)路由切换时(link) 点击时，请求数据(触发action)
 *
 * 我们提一点: 即使全局性的触发失败，你也木有必要去dispatch，因为我个人觉得像SPA，异常(http)的处理应该是一个局部性的，
 * 我们倒是可以全局toast，但绝对没有必要去全局(通知/共用)某一个操作的状态(State)   =>   delete it
 */

var Action = {
  fetchPage: function fetchPage(_ref) {
    var model = _ref.model,
        query = _ref.query;
    return function (dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch(model, query).then(function (result) {
        dispatch({
          type: 'PAGE_GET_SUCCESS',
          data: result
        });
      });
    };
  },

  fetchItems: function fetchItems(_ref2) {
    var model = _ref2.model,
        query = _ref2.query;
    return function (dispatch, getState) {
      return Promise.all([__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch(model, query).then(function (items) {
        // 获取items，一般是文章列表
        dispatch({
          type: 'ITEMS_GET_SUCCESS',
          data: items
        });

        /**
         * cur page 存储在store中是否有用？
         * 我觉地没有多大作用:
         *  1. cur page完全可以表现在url中
         *  2. 我们无需对page cur进行共享
         */
        return items;
      }), function () {
        var state = getState();

        if (!state.pagination || state.pagination.totalPage === -1) {
          return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch(model, {
            conditions: {
              type: 'post',
              isPublic: true
            },
            count: 1
          }).then(function (totals) {
            var pageSize = state.pagination && state.pagination.cur || 10;
            dispatch({
              type: 'PAGINATION_GET_SUCCESS',
              data: {
                pageSize: pageSize,
                totals: totals
              }
            });
          });
        }
        return Promise.resolve();
      }()]);
    };
  },

  fetchTags: function fetchTags(_ref3) {
    var model = _ref3.model,
        query = _ref3.query;
    return function (dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch(model, query).then(function (result) {
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
        var tags = result.reduce(function (colTags, post) {
          var ltags = colTags;
          post.tags.forEach(function (tagName) {
            !ltags[tagName] && (ltags[tagName] = 0);
            ltags[tagName] += 1;
          });
          return ltags;
        }, {});

        dispatch({
          type: 'TAGS_GET_SUCCESS',
          data: tags
        });
        return tags;
      });
    };
  },
  fetchTagPager: function fetchTagPager(_ref4) {
    var model = _ref4.model,
        query = _ref4.query;
    return function (dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch(model, query).then(function (items) {
        dispatch({
          type: 'ITEMS_GET_SUCCESS',
          data: items
        });
        return items;
      });
    };
  },

  fetchBlogs: function fetchBlogs(_ref5) {
    var model = _ref5.model,
        query = _ref5.query;
    return function (dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch(model, query).then(function (result) {
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
        var blog = result[0];

        if (!blog) {
          return Promise.reject(new Error('blog fetch: 404'));
        }

        var first = __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch('post', {
          conditions: {
            _id: { $lt: blog._id },
            type: 'post',
            isPublic: true
          },
          select: {
            _id: 0,
            title: 1,
            pathName: 1,
            type: 1
          },
          sort: {
            createdAt: -1
          },
          limit: 1
        });

        var second = __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch('post', {
          conditions: {
            _id: { $gt: blog._id },
            type: 'post',
            isPublic: true
          },
          select: {
            _id: 0,
            title: 1,
            pathName: 1,
            type: 1
          },
          limit: 1
        });

        return Promise.all([first, second]).then(function (npResult) {
          var prevBlog = npResult[0][0];
          if (prevBlog && prevBlog.type === 'post') {
            dispatch({
              type: 'PREV_GET_SUCCESS',
              data: prevBlog
            });
          } else {
            dispatch({
              type: 'PREV_GET_SUCCESS',
              data: {}
            });
          }

          var nextBlog = npResult[1][0];
          if (nextBlog && nextBlog.type === 'post') {
            dispatch({
              type: 'NEXT_GET_SUCCESS',
              data: nextBlog
            });
          } else {
            dispatch({
              type: 'NEXT_GET_SUCCESS',
              data: {}
            });
          }
        });
      });
    };
  },

  fetchAchieve: function fetchAchieve(_ref6) {
    var model = _ref6.model,
        query = _ref6.query;
    return function (dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch(model, query).then(function (result) {
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
        var curAchieveName = '';
        var YMRegexp = /^([\d]{4})-([\d]{2})-([\d]{2}).*$/;

        var sortedItems = result.reduce(function (itemCol, curPost) {
          var itemColP = itemCol;
          curAchieveName = curPost.createdAt.replace(YMRegexp, '$1年$2月');
          !itemColP[curAchieveName] && (itemColP[curAchieveName] = []);
          itemColP[curAchieveName] = curPost;
          return itemColP;
        }, {});
        dispatch({
          type: 'ACHIEVE_GET_SUCCESS',
          data: sortedItems
        });
        return sortedItems;
      });
    };
  },

  fetchTheme: function fetchTheme() {
    return function (dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch('theme', {
        conditions: { name: 'firekylin' },
        select: { _id: 0 }
      }).then(function (result) {
        if (result[0]) {
          dispatch({
            type: 'THEME_GET_SUCCESS',
            data: result[0]
          });
        }
        return result[0];
      });
    };
  },

  fetchOptions: function fetchOptions() {
    return function (dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].fetch('option', {
        select: { _id: 0, key: 1, value: 1 }
      }).then(function (options) {
        var optionsMap = options.reduce(function (optionsCol, curOption) {
          var optionsP = optionsCol;
          optionsP[curOption.key] = curOption.value;
          return optionsP;
        }, {});
        dispatch({
          type: 'OPTIONS_GET_SUCCESS',
          data: optionsMap
        });
        return optionsMap;
      });
    };
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Action);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_api__ = __webpack_require__(43);


var api = {};
var prefix = __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].host + '/api';

api.fetch = function (model, query) {
  var target = prefix + '/' + model;
  return __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].axios.get(target, { params: query }).then(function (response) {
    var result = response.data;
    return result;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint no-underscore-dangle: 0 */
var isProd = "production" === 'production';

/* harmony default export */ __webpack_exports__["a"] = ({
  host: isProd ? 'http://localhost:3000' : 'http://localhost:8080/proxyPrefix',
  axios: process.__API__
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menuList__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mediaList__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 左导航栏，导航主题
 */










var LeftNav = function LeftNav(props) {
  var options = props.options,
      theme = props.theme;

  var menuConfList = theme.option.menu.map(function (menuConf) {
    var matchDataLoader = null;
    var componentPromise = null;
    __WEBPACK_IMPORTED_MODULE_4__routes__["c" /* routerConfig */].some(function (config) {
      var match = Object(__WEBPACK_IMPORTED_MODULE_3_react_router__["matchPath"])(menuConf.url, config);
      if (match) {
        matchDataLoader = config.loadData;
        componentPromise = config.componentPromise;
        return true;
      }
      return false;
    });
    return _extends({}, menuConf, {
      dataLoader: matchDataLoader,
      componentPromise: componentPromise
    });
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { className: __WEBPACK_IMPORTED_MODULE_7__index_scss___default.a.left_navContainer },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_7__index_scss___default.a.left_icon },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: '/' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: options.logoUrl, alt: options.title })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      options.title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__menuList__["a" /* default */], { config: menuConfList }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__mediaList__["a" /* default */], { config: options })
  );
};

LeftNav.propTypes = {
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    option: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }),
  options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    logoUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })
};

var mapStateToLeftNavProps = function mapStateToLeftNavProps(state) {
  return {
    options: state.options,
    theme: state.theme
  };
};

var LeftNavWithRedux = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToLeftNavProps, null)(LeftNav);

/* harmony default export */ __webpack_exports__["a"] = (LeftNavWithRedux);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_scss__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var MenuList = function MenuList(props) {
  var config = props.config;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    null,
    config.map(function (menuConf) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, { config: menuConf, key: menuConf.url });
    })
  );
};

MenuList.propTypes = {
  config: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape())
};

var Menu = function Menu(props) {
  var config = props.config;

  var classname = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(_defineProperty({ iconfont: true }, config.icon, true));

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: __WEBPACK_IMPORTED_MODULE_4__index_scss___default.a.left_menuItem },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
      { to: config.url, isNeedPreComponent: true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: classname }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        config.label
      )
    )
  );
};

Menu.propTypes = {
  config: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape()
};

/* harmony default export */ __webpack_exports__["a"] = (MenuList);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);





/**
 * 相关媒体列表组件，eg: github，weibo，ssr，搜索
 */

var MediaList = function MediaList(props) {
  var _props$config = props.config,
      weiboUrl = _props$config.weiboUrl,
      githubUrl = _props$config.githubUrl;

  var mediaConfList = [{
    icon: 'icon-rss-v',
    title: 'RSS',
    isBlank: true,
    href: '/rss.xml'
  }, {
    icon: 'icon-search',
    title: 'Search',
    isBlank: true,
    href: 'https://www.google.com/webhp#newwindow=1&safe=strict&q=site:https://blog.lancelou.me'
  }];
  weiboUrl && mediaConfList.unshift({
    icon: 'icon-twitter-v',
    title: 'Twitter',
    isBlank: true,
    href: weiboUrl
  });
  githubUrl && mediaConfList.unshift({
    icon: 'icon-github-v',
    title: 'GitHub',
    isBlank: true,
    href: 'https://github.com/' + githubUrl
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_3__index_scss___default.a.left_mediaMenu },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_3__index_scss___default.a.left_menuItem },
      mediaConfList.map(function (conf) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: conf.href, title: conf.title, key: conf.href },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('iconfont', conf.icon) })
        );
      })
    )
  );
};

MediaList.propTypes = {
  config: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    logoUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })
};

/* harmony default export */ __webpack_exports__["a"] = (MediaList);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/**
 * 脚步区域显示，版权等
 */



var currentYear = new Date().getFullYear();

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__index_scss___default.a.footer_copyright },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      '\xA9 ',
      currentYear,
      '\xA0\xA0-\xA0\xA0LanceLou\u7684\u5C0F\u5C0F\u7AD9\xA0\xA0-\xA0\xA0',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'https://github.com/lancelou-new/Blog', target: '__blank' },
        '\u535A\u5BA2\u6E90\u7801'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Powered by  ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'https://github.com/facebook/react/releases', target: '__blank' },
        'React16(SSR)'
      ),
      '  &  ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'https://github.com/koajs/koa', target: '__blank' },
        'Koa2'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer_copyright":"l9fca69cec149061ff3b7_footer_copyright"};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main_container":"lea0490c880a7f284821b_main_container","main_left":"lea0490c880a7f284821b_main_left","main_right":"lea0490c880a7f284821b_main_right"};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(54);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






var configureStore = function configureStore(preloadedState) {
  var loggerMiddleware = Object(__WEBPACK_IMPORTED_MODULE_2_redux_logger__["createLogger"])();
  var middlewares = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];
  var createStoreParams = null;

  if (false) {
    // middlewares.push(loggerMiddleware);
  }

  if (preloadedState) {
    createStoreParams = [__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], preloadedState, __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middlewares)];
  } else {
    createStoreParams = [__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middlewares)];
  }
  var store = __WEBPACK_IMPORTED_MODULE_0_redux__["createStore"].apply(undefined, _toConsumableArray(createStoreParams));
  return store;
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);


/**
 * selector 就无需了，介于整个project简单，我们直接访问第一层的数据即可
 */

var reducerMap = {};

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

var StateStructureArr = ['page', 'blog', 'siteInfo', 'theme', 'items', 'achieves', 'pagination', 'userAgent', 'next', 'options', 'prev', 'tags'];

var generateReducerByStateKey = function generateReducerByStateKey(stateKey) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
      case stateKey.toUpperCase() + '_GET_SUCCESS':
        return action.data || action.value;
      default:
        return state;
    }
  };
};

var generateReducer = function generateReducer() {
  StateStructureArr.forEach(function (stateKey) {
    reducerMap[stateKey] = generateReducerByStateKey(stateKey);
  });
};

generateReducer();

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(reducerMap));

/***/ })
/******/ ]);
//# sourceMappingURL=server-bundle.js.map