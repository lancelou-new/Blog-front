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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__action_requestParamsFactory__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(7);
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

var _default = PreLoadLinkWithRouteConfWithRedux;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreLoadLinkWithRouteConf, 'PreLoadLinkWithRouteConf', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/PreloadLink/preLoadLinkWithRouteConf.jsx');

  __REACT_HOT_LOADER__.register(PreLoadLinkWithRouteConfWithRedux, 'PreLoadLinkWithRouteConfWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/PreloadLink/preLoadLinkWithRouteConf.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/PreloadLink/preLoadLinkWithRouteConf.jsx');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_eventemitter2__);
// https://github.com/asyncly/EventEmitter2


var EventEmitter2 = __WEBPACK_IMPORTED_MODULE_0_eventemitter2___default.a.EventEmitter2;

var server = new EventEmitter2({});

var _default = server;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EventEmitter2, 'EventEmitter2', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/utils/eventCenter.js');

  __REACT_HOT_LOADER__.register(server, 'server', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/utils/eventCenter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/utils/eventCenter.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mustSSRLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_route__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action__ = __webpack_require__(50);



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
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17));
  }
}, {
  path: '/tag',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["e" /* Tag */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchTags,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19));
  }
}, {
  path: '/tag/:tagName/:page(\\d+)?',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["b" /* HeaderItemListContainer */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchTagPager,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20));
  }
}, {
  path: '/post/:postName',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["d" /* Page */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchBlogs,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9));
  }
}, {
  path: '/page=:page(\\d+)',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["c" /* ItemListContainer */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchItems,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10));
  }
}, {
  path: /^\/(?!(?:tag|achieve|page=[\d]+)\/?$)([\w\d-]+)\/?$/,
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0_create_route__["d" /* Page */],
  loadData: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchPage,
  componentPromise: function componentPromise() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9));
  }
}];

// action.fetchOptions
var mustSSRLoad = [__WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchTheme, __WEBPACK_IMPORTED_MODULE_1__action__["a" /* default */].fetchOptions];
var routerConfig = config;
var _default = __WEBPACK_IMPORTED_MODULE_0_create_route__["f" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/index.jsx');

  __REACT_HOT_LOADER__.register(mustSSRLoad, 'mustSSRLoad', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/index.jsx');

  __REACT_HOT_LOADER__.register(routerConfig, 'routerConfig', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/index.jsx');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_eventCenter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page404__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 页面组件,专门用来显示后端返回
 * 如: 关于页，友链页，博文页
 */










var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_5__utils_eventCenter__["a" /* default */].emit('backToTop');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          blog = _props.blog,
          page = _props.page,
          next = _props.next,
          prev = _props.prev,
          match = _props.match,
          siteTitle = _props.siteTitle;

      var content = match.path === '/post/:postName' ? blog : page;
      var is404 = Object.keys(content).length === 0;
      return is404 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__page404__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_helmet__["Helmet"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            null,
            content.title,
            ' - ',
            siteTitle
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PageArticle, { content: content }),
        content.type !== 'page' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__pagination__["a" /* default */], { next: next, prev: prev })
      );
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Page.propTypes = {
  blog: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({}),
  page: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({}),
  next: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({}),
  prev: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({}),
  match: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({}),
  siteTitle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};


var PageArticle = function PageArticle(props) {
  var content = props.content;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'article',
    { className: 'post detail' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'meta' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'date' },
        content.createdAt
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'title' },
      content.title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'entry-content' },
      content.toc && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'toc', className: 'toc' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            '\u6587\u7AE0\u76EE\u5F55'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: function () {
            return { __html: content.toc };
          }() })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: function () {
          return { __html: content.content };
        }() }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        '-- EOF --'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        '\u53D1\u8868\u4E8E ',
        content.createdAt,
        ' \uFF0C',
        content.category && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '\u6DFB\u52A0\u5728\u5206\u7C7B\u300C ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'code',
            { className: 'notebook' },
            content.category
          ),
          ' \u300D\u4E0B \uFF0C'
        ),
        content.tags && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '\u5E76\u88AB\u6DFB\u52A0',
          content.tags.map(function (tag) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
              { to: '/tag/' + tag, key: tag },
              '\u300C ',
              tag,
              ' \u300D'
            );
          }),
          '\u6807\u7B7E ,'
        ),
        '\u6700\u540E\u4FEE\u6539\u4E8E ',
        content.updatedAt
      )
    )
  );
};

PageArticle.propTypes = {
  content: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({})
};

var mapStateToPageProps = function mapStateToPageProps(state) {
  return {
    blog: state.blog,
    page: state.page,
    next: state.next,
    prev: state.prev,
    siteTitle: state.options.title
  };
};
var PageWithRedux = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToPageProps)(Page);
var PageWithReduxWithRoute = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(PageWithRedux);

var _default = PageWithReduxWithRoute;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Page, 'Page', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/index.jsx');

  __REACT_HOT_LOADER__.register(PageArticle, 'PageArticle', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToPageProps, 'mapStateToPageProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/index.jsx');

  __REACT_HOT_LOADER__.register(PageWithRedux, 'PageWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/index.jsx');

  __REACT_HOT_LOADER__.register(PageWithReduxWithRoute, 'PageWithReduxWithRoute', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/index.jsx');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_eventCenter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Item__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination__ = __webpack_require__(49);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 主页的ItemList Container，不包含主标题
*/









var ItemListContainer = function (_React$Component) {
  _inherits(ItemListContainer, _React$Component);

  function ItemListContainer() {
    _classCallCheck(this, ItemListContainer);

    return _possibleConstructorReturn(this, (ItemListContainer.__proto__ || Object.getPrototypeOf(ItemListContainer)).apply(this, arguments));
  }

  _createClass(ItemListContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_4__utils_eventCenter__["a" /* default */].emit('backToTop');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          itemList = _props.itemList,
          pagination = _props.pagination,
          withoutPagination = _props.withoutPagination,
          siteTitle = _props.siteTitle;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            null,
            '\u9996\u9875 - ',
            siteTitle
          )
        ),
        itemList.map(function (itemVo) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Item__["a" /* default */], { vo: itemVo, key: itemVo.createdAt });
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__pagination__["a" /* default */], { pagination: withoutPagination ? {} : pagination })
      );
    }
  }]);

  return ItemListContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ItemListContainer.propTypes = {
  itemList: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    createdAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    summary: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })),
  pagination: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    totalPage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),
  withoutPagination: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};


ItemListContainer.propTypes = {
  itemList: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    createdAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    summary: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })),
  pagination: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    totalPage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),
  withoutPagination: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  siteTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var mapStateToItemListProps = function mapStateToItemListProps(state) {
  return {
    itemList: state.items,
    pagination: state.pagination,
    siteTitle: state.options.title
  };
};

var ItemListContainerWithRedux = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToItemListProps, null)(ItemListContainer);

var _default = ItemListContainerWithRedux;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ItemListContainer, 'ItemListContainer', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/ItemListContainer/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToItemListProps, 'mapStateToItemListProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/ItemListContainer/index.jsx');

  __REACT_HOT_LOADER__.register(ItemListContainerWithRedux, 'ItemListContainerWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/ItemListContainer/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/ItemListContainer/index.jsx');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"left_navContainer":"src-components-Nav-LeftNav-index__left_navContainer","left_icon":"src-components-Nav-LeftNav-index__left_icon","left_menuItem":"src-components-Nav-LeftNav-index__left_menuItem","left_mediaMenu":"src-components-Nav-LeftNav-index__left_mediaMenu"};

/***/ }),
/* 12 */
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

if (true) {
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(14);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 15 */
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

var __DEV__ = "development" !== 'production';

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
/* 16 */
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

var NODE_ENV = "development";

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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_eventCenter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_scss__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 归档组件，内嵌于pageContainer
 */










var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_6__index_scss___default.a);

var Achieve = function (_React$Component) {
  _inherits(Achieve, _React$Component);

  function Achieve() {
    _classCallCheck(this, Achieve);

    return _possibleConstructorReturn(this, (Achieve.__proto__ || Object.getPrototypeOf(Achieve)).apply(this, arguments));
  }

  _createClass(Achieve, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_5__utils_eventCenter__["a" /* default */].emit('backToTop');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          achieves = _props.achieves,
          siteTitle = _props.siteTitle;

      var achievesArr = Object.keys(achieves).sort(function (dateStr1, dateStr2) {
        return dateStr2.localeCompare(dateStr1);
      }).map(function (achieveName) {
        return {
          name: achieveName,
          list: achieves[achieveName]
        };
      });
      var className = cx({
        post: true,
        achieve: true,
        achieve_con: true
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'article',
        { className: className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_helmet__["Helmet"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            null,
            '\u5F52\u6863 - ',
            siteTitle
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'title' },
          '\u5F52\u6863'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'entry-content' },
          achievesArr.map(function (achieve) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AchieveItem, { achieve: achieve, key: achieve.name });
          })
        )
      );
    }
  }]);

  return Achieve;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Achieve.propTypes = {
  achieves: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}),
  siteTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};


Achieve.propTypes = {
  achieves: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}),
  siteTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var AchieveItem = function AchieveItem(props) {
  var achieve = props.achieve;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'entry-content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      null,
      achieve.name
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      achieve.list.map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: post.pathName },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
            { to: '/post/' + post.pathName },
            post.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'date' },
            post.createdAt.slice(0, post.createdAt.lastIndexOf(' '))
          )
        );
      })
    )
  );
};

AchieveItem.propTypes = {
  achieve: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })
};

var mapStateToAchieveProps = function mapStateToAchieveProps(state) {
  return {
    achieves: state.achieves,
    siteTitle: state.options.title
  };
};

var AchieveWithRedux = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToAchieveProps, null)(Achieve);

var _default = AchieveWithRedux;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(cx, 'cx', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Achieve/index.jsx');

  __REACT_HOT_LOADER__.register(Achieve, 'Achieve', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Achieve/index.jsx');

  __REACT_HOT_LOADER__.register(AchieveItem, 'AchieveItem', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Achieve/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToAchieveProps, 'mapStateToAchieveProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Achieve/index.jsx');

  __REACT_HOT_LOADER__.register(AchieveWithRedux, 'AchieveWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Achieve/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Achieve/index.jsx');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var generateFetchPageParams = function generateFetchPageParams(_ref) {
  var params = _ref.params;
  return {
    model: 'post',
    query: {
      conditions: { pathName: params[0], isPublic: true, type: 'page' },
      select: {
        title: 1,
        createdAt: 1,
        content: 1,
        toc: 1,
        updatedAt: 1,
        pathName: 1,
        allowComment: 1,
        type: 1
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
  '/tag/:tagName/:page(\\d+)?': generateFetchTagPageParams,
  '/post/:postName': generateFetchBlogsParams,
  '/page=:page(\\d+)': generateFetchItemsParams,
  '/^\\/(?!(?:tag|achieve|page=[\\d]+)\\/?$)([\\w\\d-]+)\\/?$/': generateFetchPageParams
};

var generateParams = function generateParams(match) {
  return PathToParamsGeneratorMap[match.path] ? PathToParamsGeneratorMap[match.path](match) : null;
};

var _default = generateParams;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(generateFetchPageParams, 'generateFetchPageParams', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(generateFetchItemsParams, 'generateFetchItemsParams', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(generateFetchTagsParams, 'generateFetchTagsParams', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(generateFetchTagPageParams, 'generateFetchTagPageParams', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(generateFetchBlogsParams, 'generateFetchBlogsParams', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(generateFetchAchieveParams, 'generateFetchAchieveParams', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(PathToParamsGeneratorMap, 'PathToParamsGeneratorMap', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(generateParams, 'generateParams', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/requestParamsFactory.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);
/**
 * 标签组件，可内嵌如pageContainer组件中
*/







var Tag = function Tag(props) {
  var tags = props.tags,
      siteTitle = props.siteTitle;

  var baseUrl = '/tag/';
  var anchors = Object.keys(tags).map(function (tagName) {
    return { name: tagName, num: tags[tagName], to: '' + baseUrl + tagName };
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'article',
    { className: 'post tags' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        '\u6807\u7B7E - ',
        siteTitle
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'title' },
      '\u6807\u7B7E'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'entry-content' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        null,
        anchors.map(function (anchor) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
            { to: anchor.to, key: anchor.to },
            anchor.name,
            '(',
            anchor.num,
            ')'
          );
        })
      )
    )
  );
};

Tag.propTypes = {
  tags: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}),
  siteTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var mapStateToTagProps = function mapStateToTagProps(state) {
  return {
    tags: state.tags,
    siteTitle: state.options.title
  };
};

var TagWithRedux = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToTagProps, null)(Tag);

var _default = TagWithRedux;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tag, 'Tag', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Tags/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToTagProps, 'mapStateToTagProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Tags/index.jsx');

  __REACT_HOT_LOADER__.register(TagWithRedux, 'TagWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Tags/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Tags/index.jsx');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ItemListContainer__ = __webpack_require__(10);
/**
 * 标签内容页，itemList容器组件，包含header头部结构
 */








var HeaderItemListContainer = function HeaderItemListContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'intro' },
      '\u6807\u7B7E',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'javascriot: void(0)' },
        props.match.params.tagName
      ),
      '\u4E0B\u7684\u6587\u7AE0'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ItemListContainer__["default"], { withoutPagination: true }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        props.match.params.tagName,
        ' - ',
        props.siteTitle
      )
    )
  );
};

HeaderItemListContainer.propTypes = {
  match: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      tagName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
    })
  }),
  siteTitle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

var mapStateToHeaderItemListContainerProps = function mapStateToHeaderItemListContainerProps(state) {
  return {
    siteTitle: state.options.title
  };
};

var HeaderItemListContainerWithRedux = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToHeaderItemListContainerProps)(HeaderItemListContainer);

var HeaderItemListContainerWithRouter = Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["withRouter"])(HeaderItemListContainerWithRedux);

var _default = HeaderItemListContainerWithRouter;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HeaderItemListContainer, 'HeaderItemListContainer', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/HeaderItemListContainer/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToHeaderItemListContainerProps, 'mapStateToHeaderItemListContainerProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/HeaderItemListContainer/index.jsx');

  __REACT_HOT_LOADER__.register(HeaderItemListContainerWithRedux, 'HeaderItemListContainerWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/HeaderItemListContainer/index.jsx');

  __REACT_HOT_LOADER__.register(HeaderItemListContainerWithRouter, 'HeaderItemListContainerWithRouter', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/HeaderItemListContainer/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/HeaderItemListContainer/index.jsx');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__action_requestParamsFactory__ = __webpack_require__(18);
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
      var serverRouteConf = {
        url: req.url
      };
      var renderStream = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToNodeStream"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_app__["a" /* default */], { store: store, serverRouteConf: serverRouteConf }));
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
    }).catch(function (err) {
      log.error(err);
      res.end(html.origin);
    });
  };
};

var _default = serverEntryMiddlewareCreator;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createStoreAndLoadData, 'createStoreAndLoadData', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/server-entry.js');

  __REACT_HOT_LOADER__.register(serverEntryMiddlewareCreator, 'serverEntryMiddlewareCreator', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/server-entry.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/server-entry.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-dom-server.node.production.min.js');
} else {
  module.exports = __webpack_require__(25);
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.0.0
 * react-dom-server.node.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
(function() {

'use strict';

var objectAssign$1 = __webpack_require__(26);
var invariant = __webpack_require__(12);
var require$$0 = __webpack_require__(13);
var react = __webpack_require__(0);
var emptyFunction = __webpack_require__(14);
var propTypes = __webpack_require__(1);
var emptyObject = __webpack_require__(27);
var hyphenateStyleName = __webpack_require__(28);
var memoizeStringOnly = __webpack_require__(30);
var checkPropTypes = __webpack_require__(31);
var camelizeStyleName = __webpack_require__(33);
var stream = __webpack_require__(35);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule reactProdInvariant
 * 
 */

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule DOMNamespaces
 */

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces$1 = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace$1(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace$1(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace$1(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var Namespaces_1 = Namespaces$1;
var getIntrinsicNamespace_1 = getIntrinsicNamespace$1;
var getChildNamespace_1 = getChildNamespace$1;

var DOMNamespaces = {
	Namespaces: Namespaces_1,
	getIntrinsicNamespace: getIntrinsicNamespace_1,
	getChildNamespace: getChildNamespace_1
};

// These attributes should be all lowercase to allow for
// case insensitive checks
var RESERVED_PROPS$1 = {
  children: true,
  dangerouslySetInnerHTML: true,
  autoFocus: true,
  defaultValue: true,
  defaultChecked: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  style: true
};

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
  HAS_STRING_BOOLEAN_VALUE: 0x40,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE),
        hasStringBooleanValue: checkMask(propConfig, Injection.HAS_STRING_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : void 0;

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];

        propertyInfo.attributeName = attributeName;
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      // Downcase references to whitelist properties to check for membership
      // without case-sensitivity. This allows the whitelist to pick up
      // `allowfullscreen`, which should be written using the property configuration
      // for `allowFullscreen`
      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Checks whether a property name is a writeable attribute.
   * @method
   */
  shouldSetAttribute: function (name, value) {
    if (DOMProperty.isReservedProp(name)) {
      return false;
    }
    if ((name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
      return false;
    }
    if (value === null) {
      return true;
    }
    switch (typeof value) {
      case 'boolean':
        return DOMProperty.shouldAttributeAcceptBooleanValue(name);
      case 'undefined':
      case 'number':
      case 'string':
      case 'object':
        return true;
      default:
        // function, symbol
        return false;
    }
  },

  getPropertyInfo: function (name) {
    return DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
  },
  shouldAttributeAcceptBooleanValue: function (name) {
    if (DOMProperty.isReservedProp(name)) {
      return true;
    }
    var propertyInfo = DOMProperty.getPropertyInfo(name);
    if (propertyInfo) {
      return propertyInfo.hasBooleanValue || propertyInfo.hasStringBooleanValue || propertyInfo.hasOverloadedBooleanValue;
    }
    var prefix = name.toLowerCase().slice(0, 5);
    return prefix === 'data-' || prefix === 'aria-';
  },


  /**
   * Checks to see if a property name is within the list of properties
   * reserved for internal React operations. These properties should
   * not be set on an HTML element.
   *
   * @private
   * @param {string} name
   * @return {boolean} If the name is within reserved props
   */
  isReservedProp: function (name) {
    return RESERVED_PROPS$1.hasOwnProperty(name);
  },


  injection: DOMPropertyInjection
};

var DOMProperty_1 = DOMProperty;

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on the escape-html library, which is used under the MIT License below:
 *
 * Copyright (c) 2012-2013 TJ Holowaychuk
 * Copyright (c) 2015 Andreas Lubbe
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule escapeTextContentForBrowser
 */

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

var escapeTextContentForBrowser_1 = escapeTextContentForBrowser;

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextContentForBrowser_1(value) + '"';
}

var quoteAttributeValueForBrowser_1 = quoteAttributeValueForBrowser;

{
  var warning$1 = require$$0;
}

// isAttributeNameSafe() is currently duplicated in DOMPropertyOperations.
// TODO: Find a better place for this.
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty_1.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

// shouldIgnoreValue() is currently duplicated in DOMPropertyOperations.
// TODO: Find a better place for this.
function shouldIgnoreValue(propertyInfo, value) {
  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
}

/**
 * Operations for dealing with DOM properties.
 */
var DOMMarkupOperations = {
  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function (id) {
    return DOMProperty_1.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser_1(id);
  },

  createMarkupForRoot: function () {
    return DOMProperty_1.ROOT_ATTRIBUTE_NAME + '=""';
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function (name, value) {
    var propertyInfo = DOMProperty_1.getPropertyInfo(name);
    if (propertyInfo) {
      if (shouldIgnoreValue(propertyInfo, value)) {
        return '';
      }
      var attributeName = propertyInfo.attributeName;
      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
        return attributeName + '=""';
      } else if (typeof value !== 'boolean' || DOMProperty_1.shouldAttributeAcceptBooleanValue(name)) {
        return attributeName + '=' + quoteAttributeValueForBrowser_1(value);
      }
    } else if (DOMProperty_1.shouldSetAttribute(name, value)) {
      if (value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser_1(value);
    }
    return null;
  },

  /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */
  createMarkupForCustomAttribute: function (name, value) {
    if (!isAttributeNameSafe(name) || value == null) {
      return '';
    }
    return name + '=' + quoteAttributeValueForBrowser_1(value);
  }
};

var DOMMarkupOperations_1 = DOMMarkupOperations;

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  var warning$2 = require$$0;
  var emptyFunction$1 = emptyFunction;
  var PropTypes = propTypes;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  ReactControlledValuePropTypes.checkPropTypes = emptyFunction$1;
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes$1 = {
    value: function (props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    onChange: PropTypes.func
  };

  var loggedTypeFailures = {};

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
    for (var propName in propTypes$1) {
      if (propTypes$1.hasOwnProperty(propName)) {
        var error = propTypes$1[propName](props, propName, tagName, 'prop', null, ReactPropTypesSecret);
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        warning$2(false, 'Failed form propType: %s%s', error.message, getStack());
      }
    }
  };
}

var ReactControlledValuePropTypes_1 = ReactControlledValuePropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule omittedCloseTags
 */

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var omittedCloseTags_1 = omittedCloseTags;

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = objectAssign$1({
  menuitem: true
}, omittedCloseTags_1);

var voidElementTags_1 = voidElementTags;

{
  var warning$3 = require$$0;
}

var HTML = '__html';

function getDeclarationErrorAddendum(getCurrentOwnerName) {
  {
    var ownerName = getCurrentOwnerName();
    if (ownerName) {
      // TODO: also report the stack.
      return '\n\nThis DOM node was rendered by `' + ownerName + '`.';
    }
  }
  return '';
}

function assertValidProps(tag, props, getCurrentOwnerName) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags_1[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getDeclarationErrorAddendum(getCurrentOwnerName)) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    warning$3(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getDeclarationErrorAddendum(getCurrentOwnerName)) : void 0;
}

var assertValidProps_1 = assertValidProps;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber$1 = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber$1).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber$1[prefixKey(prefix, prop)] = isUnitlessNumber$1[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber$1,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

var CSSProperty_1 = CSSProperty;

var isUnitlessNumber = CSSProperty_1.isUnitlessNumber;

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var dangerousStyleValue_1 = dangerousStyleValue;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule isCustomComponent
 * 
 */

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var isCustomComponent_1 = isCustomComponent;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule getComponentName
 * 
 */

function getComponentName$2(instanceOrFiber) {
  if (typeof instanceOrFiber.getName === 'function') {
    // Stack reconciler
    var instance = instanceOrFiber;
    return instance.getName();
  }
  if (typeof instanceOrFiber.tag === 'number') {
    // Fiber reconciler
    var fiber = instanceOrFiber;
    var type = fiber.type;

    if (typeof type === 'string') {
      return type;
    }
    if (typeof type === 'function') {
      return type.displayName || type.name;
    }
  }
  return null;
}

var getComponentName_1 = getComponentName$2;

var ReactInternals = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ReactGlobalSharedState = {
  ReactCurrentOwner: ReactInternals.ReactCurrentOwner
};

{
  objectAssign$1(ReactGlobalSharedState, {
    ReactComponentTreeHook: ReactInternals.ReactComponentTreeHook,
    ReactDebugCurrentFrame: ReactInternals.ReactDebugCurrentFrame
  });
}

var ReactGlobalSharedState_1 = ReactGlobalSharedState;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactTypeOfWork
 * 
 */

var ReactTypeOfWork = {
  IndeterminateComponent: 0, // Before we know whether it is functional or class
  FunctionalComponent: 1,
  ClassComponent: 2,
  HostRoot: 3, // Root of a host tree. Could be nested inside another node.
  HostPortal: 4, // A subtree. Could be an entry point to a different renderer.
  HostComponent: 5,
  HostText: 6,
  CoroutineComponent: 7,
  CoroutineHandlerPhase: 8,
  YieldComponent: 9,
  Fragment: 10
};

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @providesModule describeComponentFrame
 */

var describeComponentFrame$1 = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

var IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent;
var FunctionalComponent = ReactTypeOfWork.FunctionalComponent;
var ClassComponent = ReactTypeOfWork.ClassComponent;
var HostComponent = ReactTypeOfWork.HostComponent;




function describeFiber(fiber) {
  switch (fiber.tag) {
    case IndeterminateComponent:
    case FunctionalComponent:
    case ClassComponent:
    case HostComponent:
      var owner = fiber._debugOwner;
      var source = fiber._debugSource;
      var name = getComponentName_1(fiber);
      var ownerName = null;
      if (owner) {
        ownerName = getComponentName_1(owner);
      }
      return describeComponentFrame$1(name, source, ownerName);
    default:
      return '';
  }
}

// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function getStackAddendumByWorkInProgressFiber$1(workInProgress) {
  var info = '';
  var node = workInProgress;
  do {
    info += describeFiber(node);
    // Otherwise this return pointer might point to the wrong tree:
    node = node['return'];
  } while (node);
  return info;
}

var ReactFiberComponentTreeHook = {
  getStackAddendumByWorkInProgressFiber: getStackAddendumByWorkInProgressFiber$1
};

var ReactDebugCurrentFrame$1 = ReactGlobalSharedState_1.ReactDebugCurrentFrame;

{
  var getComponentName$3 = getComponentName_1;

  var _require2$1 = ReactFiberComponentTreeHook,
      getStackAddendumByWorkInProgressFiber = _require2$1.getStackAddendumByWorkInProgressFiber;
}

function getCurrentFiberOwnerName$1() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    if (fiber._debugOwner != null) {
      return getComponentName$3(fiber._debugOwner);
    }
  }
  return null;
}

function getCurrentFiberStackAddendum() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    // Safe because if current fiber exists, we are reconciling,
    // and it is guaranteed to be the work-in-progress version.
    return getStackAddendumByWorkInProgressFiber(fiber);
  }
  return null;
}

function resetCurrentFiber() {
  ReactDebugCurrentFrame$1.getCurrentStack = null;
  ReactDebugCurrentFiber.current = null;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentFiber(fiber, phase) {
  ReactDebugCurrentFrame$1.getCurrentStack = getCurrentFiberStackAddendum;
  ReactDebugCurrentFiber.current = fiber;
  ReactDebugCurrentFiber.phase = phase;
}

var ReactDebugCurrentFiber = {
  current: null,
  phase: null,
  resetCurrentFiber: resetCurrentFiber,
  setCurrentFiber: setCurrentFiber,
  getCurrentFiberOwnerName: getCurrentFiberOwnerName$1,
  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum
};

var ReactDebugCurrentFiber_1 = ReactDebugCurrentFiber;

var warnValidStyle$1 = emptyFunction;

{
  var camelizeStyleName$1 = camelizeStyleName;
  var getComponentName$1 = getComponentName_1;
  var warning$4 = require$$0;

  var _require = ReactDebugCurrentFiber_1,
      getCurrentFiberOwnerName = _require.getCurrentFiberOwnerName;

  // 'msTransform' is correct, but the other prefixes should be capitalized


  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$4(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName$1(name), checkRenderMessage(owner));
  };

  var warnBadVendoredStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$4(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner));
  };

  var warnStyleValueWithSemicolon = function (name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$4(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$4(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var warnStyleValueIsInfinity = function (name, value, owner) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$4(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var checkRenderMessage = function (owner) {
    var ownerName;
    if (owner != null) {
      // Stack passes the owner manually all the way to CSSPropertyOperations.
      ownerName = getComponentName$1(owner);
    } else {
      // Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
      // It is only enabled in development and tracks host components too.
      ownerName = getCurrentFiberOwnerName();
      // TODO: also report the stack.
    }
    if (ownerName) {
      return '\n\nCheck the render method of `' + ownerName + '`.';
    }
    return '';
  };

  warnValidStyle$1 = function (name, value, component) {
    var owner;
    if (component) {
      // TODO: this only works with Stack. Seems like we need to add unit tests?
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, owner);
      }
    }
  };
}

var warnValidStyle_1 = warnValidStyle$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule validAriaProperties
 */

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var validAriaProperties$1 = ariaProperties;

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty = Object.prototype.hasOwnProperty;

{
  var warning$5 = require$$0;

  var _require$1 = ReactGlobalSharedState_1,
      ReactComponentTreeHook = _require$1.ReactComponentTreeHook,
      ReactDebugCurrentFrame$2 = _require$1.ReactDebugCurrentFrame;

  var getStackAddendumByID = ReactComponentTreeHook.getStackAddendumByID;


  var validAriaProperties = validAriaProperties$1;
}

function getStackAddendum$1(debugID) {
  if (debugID != null) {
    // This can only happen on Stack
    return getStackAddendumByID(debugID);
  } else {
    // This can only happen on Fiber / Server
    var stack = ReactDebugCurrentFrame$2.getStackAddendum();
    return stack != null ? stack : '';
  }
}

function validateProperty(tagName, name, debugID) {
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = validAriaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning$5(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum$1(debugID));
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning$5(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum$1(debugID));
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = validAriaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning$5(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$1(debugID));
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props, debugID) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key, debugID);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$5(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1(debugID));
  } else if (invalidProps.length > 1) {
    warning$5(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1(debugID));
  }
}

function validateProperties(type, props, debugID /* Stack only */) {
  if (isCustomComponent_1(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props, debugID);
}

var ReactDOMInvalidARIAHook = {
  // Fiber
  validateProperties: validateProperties,
  // Stack
  onBeforeMountComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties(element.type, element.props, debugID);
    }
  },
  onBeforeUpdateComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties(element.type, element.props, debugID);
    }
  }
};

var ReactDOMInvalidARIAHook_1 = ReactDOMInvalidARIAHook;

{
  var warning$6 = require$$0;

  var _require$2 = ReactGlobalSharedState_1,
      ReactComponentTreeHook$1 = _require$2.ReactComponentTreeHook,
      ReactDebugCurrentFrame$3 = _require$2.ReactDebugCurrentFrame;

  var getStackAddendumByID$1 = ReactComponentTreeHook$1.getStackAddendumByID;
}

var didWarnValueNull = false;

function getStackAddendum$2(debugID) {
  if (debugID != null) {
    // This can only happen on Stack
    return getStackAddendumByID$1(debugID);
  } else {
    // This can only happen on Fiber / Server
    var stack = ReactDebugCurrentFrame$3.getStackAddendum();
    return stack != null ? stack : '';
  }
}

function validateProperties$1(type, props, debugID /* Stack only */) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }
  if (props != null && props.value === null && !didWarnValueNull) {
    warning$6(false, '`value` prop on `%s` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$2(debugID));

    didWarnValueNull = true;
  }
}

var ReactDOMNullInputValuePropHook = {
  // Fiber
  validateProperties: validateProperties$1,
  // Stack
  onBeforeMountComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$1(element.type, element.props, debugID);
    }
  },
  onBeforeUpdateComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$1(element.type, element.props, debugID);
    }
  }
};

var ReactDOMNullInputValuePropHook_1 = ReactDOMNullInputValuePropHook;

/**
 * Injectable ordering of event plugins.
 */
var eventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!eventPluginOrder) {
    // Wait until an `eventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var pluginModule = namesToPlugins[pluginName];
    var pluginIndex = eventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : void 0;
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !pluginModule.extractEvents ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : void 0;
    EventPluginRegistry.plugins[pluginIndex] = pluginModule;
    var publishedEvents = pluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : void 0;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : void 0;
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, pluginModule, eventName) {
  !!EventPluginRegistry.registrationNameModules[registrationName] ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : void 0;
  EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

  {
    var lowerCasedName = registrationName.toLowerCase();
    EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {
  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in true.
   * @type {Object}
   */
  possibleRegistrationNames: {},
  // Trust the developer to only use possibleRegistrationNames in true

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (injectedEventPluginOrder) {
    !!eventPluginOrder ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : void 0;
    // Clone the ordering so it cannot be dynamically mutated.
    eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var pluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
        !!namesToPlugins[pluginName] ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : void 0;
        namesToPlugins[pluginName] = pluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  }
};

var EventPluginRegistry_1 = EventPluginRegistry;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule possibleStandardNames
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames$1 = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  allowtransparency: 'allowTransparency',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  'class': 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  'default': 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  'for': 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  'in': 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  'typeof': 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var possibleStandardNames_1 = possibleStandardNames$1;

{
  var warning$7 = require$$0;

  var _require$3 = ReactGlobalSharedState_1,
      ReactComponentTreeHook$2 = _require$3.ReactComponentTreeHook,
      ReactDebugCurrentFrame$4 = _require$3.ReactDebugCurrentFrame;

  var getStackAddendumByID$2 = ReactComponentTreeHook$2.getStackAddendumByID;
}

function getStackAddendum$3(debugID) {
  if (debugID != null) {
    // This can only happen on Stack
    return getStackAddendumByID$2(debugID);
  } else {
    // This can only happen on Fiber / Server
    var stack = ReactDebugCurrentFrame$4.getStackAddendum();
    return stack != null ? stack : '';
  }
}

{
  var warnedProperties$1 = {};
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on[A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
  var possibleStandardNames = possibleStandardNames_1;

  var validateProperty$1 = function (tagName, name, value, debugID) {
    if (hasOwnProperty$1.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    if (EventPluginRegistry_1.registrationNameModules.hasOwnProperty(name)) {
      return true;
    }

    if (EventPluginRegistry_1.plugins.length === 0 && EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we might be in a server environment.
      // Don't check events in this case.
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    var registrationName = EventPluginRegistry_1.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry_1.possibleRegistrationNames[lowerCasedName] : null;

    if (registrationName != null) {
      warning$7(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName.indexOf('on') === 0) {
      warning$7(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$7(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$7(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$7(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$7(false, 'Received a `%s` for string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$7(false, 'Received NaN for numeric attribute `%s`. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    var isReserved = DOMProperty_1.isReservedProp(name);

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning$7(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$3(debugID));
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$7(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean') {
      warning$7(DOMProperty_1.shouldAttributeAcceptBooleanValue(name), 'Received `%s` for non-boolean attribute `%s`. If this is expected, cast ' + 'the value to a string.%s', value, name, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (!DOMProperty_1.shouldSetAttribute(name, value)) {
      warnedProperties$1[name] = true;
      return false;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, debugID) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], debugID);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning$7(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3(debugID));
  } else if (unknownProps.length > 1) {
    warning$7(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3(debugID));
  }
};

function validateProperties$2(type, props, debugID /* Stack only */) {
  if (isCustomComponent_1(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, debugID);
}

var ReactDOMUnknownPropertyHook = {
  // Fiber
  validateProperties: validateProperties$2,
  // Stack
  onBeforeMountComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$2(element.type, element.props, debugID);
    }
  },
  onBeforeUpdateComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$2(element.type, element.props, debugID);
    }
  }
};

var ReactDOMUnknownPropertyHook_1 = ReactDOMUnknownPropertyHook;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Namespaces = DOMNamespaces.Namespaces;
var getIntrinsicNamespace = DOMNamespaces.getIntrinsicNamespace;
var getChildNamespace = DOMNamespaces.getChildNamespace;















var toArray = react.Children.toArray;

{
  var warning = require$$0;
  var checkPropTypes$1 = checkPropTypes;
  var warnValidStyle = warnValidStyle_1;

  var _require2 = ReactDOMInvalidARIAHook_1,
      validateARIAProperties = _require2.validateProperties;

  var _require3 = ReactDOMNullInputValuePropHook_1,
      validateInputProperties = _require3.validateProperties;

  var _require4 = ReactDOMUnknownPropertyHook_1,
      validateUnknownProperties = _require4.validateProperties;

  var validatePropertiesInDevelopment = function (type, props) {
    validateARIAProperties(type, props);
    validateInputProperties(type, props);
    validateUnknownProperties(type, props);
  };

  var describeComponentFrame = describeComponentFrame$1;
  var describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  var _require5 = ReactGlobalSharedState_1,
      ReactDebugCurrentFrame = _require5.ReactDebugCurrentFrame;

  var currentDebugStack = null;
  var currentDebugElementStack = null;
  var setCurrentDebugStack = function (stack) {
    currentDebugElementStack = stack[stack.length - 1].debugElementStack;
    // We are about to enter a new composite stack, reset the array.
    currentDebugElementStack.length = 0;
    currentDebugStack = stack;
    ReactDebugCurrentFrame.getCurrentStack = getStackAddendum;
  };
  var pushElementToDebugStack = function (element) {
    if (currentDebugElementStack !== null) {
      currentDebugElementStack.push(element);
    }
  };
  var resetCurrentDebugStack = function () {
    currentDebugElementStack = null;
    currentDebugStack = null;
    ReactDebugCurrentFrame.getCurrentStack = null;
  };
  var getStackAddendum = function () {
    if (currentDebugStack === null) {
      return null;
    }
    var stack = '';
    var debugStack = currentDebugStack;
    for (var i = debugStack.length - 1; i >= 0; i--) {
      var debugElementStack = debugStack[i].debugElementStack;
      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

function getComponentName(type) {
  return typeof type === 'string' ? type : typeof type === 'function' ? type.displayName || type.name : null;
}

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

var processStyleName = memoizeStringOnly(function (styleName) {
  return hyphenateStyleName(styleName);
});

function createMarkupForStyles(styles, component) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle(styleName, styleValue, component);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += dangerousStyleValue_1(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && getComponentName(constructor) || 'ReactClass');
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextContentForBrowser_1(content);
    }
  }
  return null;
}

function flattenOptionChildren(children) {
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  react.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    } else {
      {
        if (!didWarnInvalidOptionChildren) {
          didWarnInvalidOptionChildren = true;
          warning(false, 'Only strings and numbers are supported as <option> children.');
        }
      }
    }
  });
  return content;
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes$1(typeSpecs, values, location, 'Component', getStackAddendum);
  }
}

function processContext(type, context) {
  var maskedContext = maskContext(type, context);
  {
    if (type.contextTypes) {
      checkContextTypes(type.contextTypes, maskedContext, 'context');
    }
  }
  return maskedContext;
}

var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement, instForDebug) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!props.hasOwnProperty(propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue, instForDebug);
    }
    var markup = null;
    if (isCustomComponent_1(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = DOMMarkupOperations_1.createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = DOMMarkupOperations_1.createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + DOMMarkupOperations_1.createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context) {
  while (react.isValidElement(child)) {
    {
      pushElementToDebugStack(child);
    }
    var Component = child.type;
    if (typeof Component !== 'function') {
      break;
    }
    var publicContext = processContext(Component, context);
    var inst;
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, partialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(partialState);
      }
    };

    if (shouldConstruct(Component)) {
      inst = new Component(child.props, publicContext, updater);
    } else {
      inst = Component(child.props, publicContext, updater);
      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        continue;
      }
    }

    inst.props = child.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (inst.componentWillMount) {
      inst.componentWillMount();
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var partialState = typeof partial === 'function' ? partial.call(inst, nextState, child.props, publicContext) : partial;
            if (partialState) {
              if (dontMutate) {
                dontMutate = false;
                nextState = objectAssign$1({}, nextState, partialState);
              } else {
                objectAssign$1(nextState, partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      !(typeof childContextTypes === 'object') ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', getComponentName(Component) || 'Unknown') : void 0;
      childContext = inst.getChildContext();
      for (var contextKey in childContext) {
        !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
      }
    }
    if (childContext) {
      context = objectAssign$1({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  function ReactDOMServerRenderer(element, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var children = react.isValidElement(element) ? [element] : toArray(element);
    var topFrame = {
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: children,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
  }

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var out = '';
    while (out.length < bytes) {
      if (this.stack.length === 0) {
        this.exhausted = true;
        break;
      }
      var frame = this.stack[this.stack.length - 1];
      if (frame.childIndex >= frame.children.length) {
        out += frame.footer;
        this.previousWasTextNode = false;
        this.stack.pop();
        if (frame.tag === 'select') {
          this.currentSelectValue = null;
        }
        continue;
      }
      var child = frame.children[frame.childIndex++];
      {
        setCurrentDebugStack(this.stack);
      }
      out += this.render(child, frame.context, frame.domNamespace);
      {
        // TODO: Handle reentrant server render calls. This doesn't.
        resetCurrentDebugStack();
      }
    }
    return out;
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextContentForBrowser_1(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextContentForBrowser_1(text);
      }
      this.previousWasTextNode = true;
      return escapeTextContentForBrowser_1(text);
    } else {
      var _resolve = resolve(child, context);

      child = _resolve.child;
      context = _resolve.context;

      if (child === null || child === false) {
        return '';
      } else {
        if (react.isValidElement(child)) {
          return this.renderDOM(child, context, parentNamespace);
        } else {
          var children = toArray(child);
          var frame = {
            domNamespace: parentNamespace,
            children: children,
            childIndex: 0,
            context: context,
            footer: ''
          };
          {
            frame.debugElementStack = [];
          }
          this.stack.push(frame);
          return '';
        }
      }
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        warning(tag === element.type, '<%s /> is using uppercase HTML. Always use lowercase HTML tags ' + 'in React.', element.type);
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes_1.checkPropTypes('input', props, function () {
          return '';
        });

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = objectAssign$1({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes_1.checkPropTypes('textarea', props, function () {
          return '';
        });
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
          if (Array.isArray(textareaChildren)) {
            !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = objectAssign$1({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes_1.checkPropTypes('select', props, function () {
          return '';
        });

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, '');
          } else if (!props.multiple && isArray) {
            warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, '');
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = objectAssign$1({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = objectAssign$1({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps_1(tag, props);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1, null);
    var footer = '';
    if (omittedCloseTags_1.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      tag: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    return out;
  };

  return ReactDOMServerRenderer;
}();

var ReactPartialRenderer = ReactDOMServerRenderer;

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactPartialRenderer(element, false);
  var markup = renderer.read(Infinity);
  return markup;
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactPartialRenderer(element, true);
  var markup = renderer.read(Infinity);
  return markup;
}

var ReactDOMStringRenderer = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Readable = stream.Readable;

// This is a Readable Node.js stream which wraps the ReactDOMPartialRenderer.

var ReactMarkupReadableStream = function (_Readable) {
  _inherits(ReactMarkupReadableStream, _Readable);

  function ReactMarkupReadableStream(element, makeStaticMarkup) {
    _classCallCheck$1(this, ReactMarkupReadableStream);

    var _this = _possibleConstructorReturn(this, _Readable.call(this, {}));
    // Calls the stream.Readable(options) constructor. Consider exposing built-in
    // features like highWaterMark in the future.


    _this.partialRenderer = new ReactPartialRenderer(element, makeStaticMarkup);
    return _this;
  }

  ReactMarkupReadableStream.prototype._read = function _read(size) {
    try {
      this.push(this.partialRenderer.read(size));
    } catch (err) {
      this.emit('error', err);
    }
  };

  return ReactMarkupReadableStream;
}(Readable);
/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/react-dom-stream.html#rendertonodestream
 */


function renderToNodeStream(element) {
  return new ReactMarkupReadableStream(element, false);
}

/**
 * Similar to renderToNodeStream, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/react-dom-stream.html#rendertostaticnodestream
 */
function renderToStaticNodeStream(element) {
  return new ReactMarkupReadableStream(element, true);
}

var ReactDOMNodeStreamRenderer = {
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactVersion
 */

var ReactVersion = '16.0.0';

var MUST_USE_PROPERTY = DOMProperty_1.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = DOMProperty_1.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty_1.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
var HAS_STRING_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_STRING_BOOLEAN_VALUE;

var HTMLDOMPropertyConfig = {
  // When adding attributes to this list, be sure to also add them to
  // the `possibleStandardNames` module to ensure casing and incorrect
  // name warnings.
  Properties: {
    allowFullScreen: HAS_BOOLEAN_VALUE,
    // IE only true/false iFrame attribute
    // https://msdn.microsoft.com/en-us/library/ms533072(v=vs.85).aspx
    allowTransparency: HAS_STRING_BOOLEAN_VALUE,
    // specifies target context for links with `preload` type
    async: HAS_BOOLEAN_VALUE,
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    capture: HAS_BOOLEAN_VALUE,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    cols: HAS_POSITIVE_NUMERIC_VALUE,
    contentEditable: HAS_STRING_BOOLEAN_VALUE,
    controls: HAS_BOOLEAN_VALUE,
    'default': HAS_BOOLEAN_VALUE,
    defer: HAS_BOOLEAN_VALUE,
    disabled: HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: HAS_STRING_BOOLEAN_VALUE,
    formNoValidate: HAS_BOOLEAN_VALUE,
    hidden: HAS_BOOLEAN_VALUE,
    loop: HAS_BOOLEAN_VALUE,
    // Caution; `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`.
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    noValidate: HAS_BOOLEAN_VALUE,
    open: HAS_BOOLEAN_VALUE,
    playsInline: HAS_BOOLEAN_VALUE,
    readOnly: HAS_BOOLEAN_VALUE,
    required: HAS_BOOLEAN_VALUE,
    reversed: HAS_BOOLEAN_VALUE,
    rows: HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: HAS_NUMERIC_VALUE,
    scoped: HAS_BOOLEAN_VALUE,
    seamless: HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    size: HAS_POSITIVE_NUMERIC_VALUE,
    start: HAS_NUMERIC_VALUE,
    // support for projecting regular DOM Elements via V1 named slots ( shadow dom )
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: HAS_STRING_BOOLEAN_VALUE,
    // Style must be explicitly set in the attribute list. React components
    // expect a style object
    style: 0,
    // itemScope is for for Microdata support.
    // See http://schema.org/docs/gs.html
    itemScope: HAS_BOOLEAN_VALUE,
    // These attributes must stay in the white-list because they have
    // different attribute names (see DOMAttributeNames below)
    acceptCharset: 0,
    className: 0,
    htmlFor: 0,
    httpEquiv: 0,
    // Attributes with mutation methods must be specified in the whitelist
    // Set the string boolean flag to allow the behavior
    value: HAS_STRING_BOOLEAN_VALUE
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMMutationMethods: {
    value: function (node, value) {
      if (value == null) {
        return node.removeAttribute('value');
      }

      // Number inputs get special treatment due to some edge cases in
      // Chrome. Let everything else assign the value attribute as normal.
      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
      if (node.type !== 'number' || node.hasAttribute('value') === false) {
        node.setAttribute('value', '' + value);
      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
        // Don't assign an attribute if validation reports bad
        // input. Chrome will clear the value. Additionally, don't
        // operate on inputs that have focus, otherwise Chrome might
        // strip off trailing decimal places and cause the user's
        // cursor position to jump to the beginning of the input.
        //
        // In ReactDOMInput, we have an onBlur event that will trigger
        // this function again when focus is lost.
        node.setAttribute('value', '' + value);
      }
    }
  }
};

var HTMLDOMPropertyConfig_1 = HTMLDOMPropertyConfig;

var HAS_STRING_BOOLEAN_VALUE$1 = DOMProperty_1.injection.HAS_STRING_BOOLEAN_VALUE;


var NS = {
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};

/**
 * This is a list of all SVG attributes that need special casing,
 * namespacing, or boolean value assignment.
 *
 * When adding attributes to this list, be sure to also add them to
 * the `possibleStandardNames` module to ensure casing and incorrect
 * name warnings.
 *
 * SVG Attributes List:
 * https://www.w3.org/TR/SVG/attindex.html
 * SMIL Spec:
 * https://www.w3.org/TR/smil
 */
var ATTRS = ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'x-height', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xmlns:xlink', 'xml:lang', 'xml:space'];

var SVGDOMPropertyConfig = {
  Properties: {
    autoReverse: HAS_STRING_BOOLEAN_VALUE$1,
    externalResourcesRequired: HAS_STRING_BOOLEAN_VALUE$1,
    preserveAlpha: HAS_STRING_BOOLEAN_VALUE$1
  },
  DOMAttributeNames: {
    autoReverse: 'autoReverse',
    externalResourcesRequired: 'externalResourcesRequired',
    preserveAlpha: 'preserveAlpha'
  },
  DOMAttributeNamespaces: {
    xlinkActuate: NS.xlink,
    xlinkArcrole: NS.xlink,
    xlinkHref: NS.xlink,
    xlinkRole: NS.xlink,
    xlinkShow: NS.xlink,
    xlinkTitle: NS.xlink,
    xlinkType: NS.xlink,
    xmlBase: NS.xml,
    xmlLang: NS.xml,
    xmlSpace: NS.xml
  }
};

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

ATTRS.forEach(function (original) {
  var reactName = original.replace(CAMELIZE, capitalize);

  SVGDOMPropertyConfig.Properties[reactName] = 0;
  SVGDOMPropertyConfig.DOMAttributeNames[reactName] = original;
});

var SVGDOMPropertyConfig_1 = SVGDOMPropertyConfig;

DOMProperty_1.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig_1);
DOMProperty_1.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig_1);

var ReactDOMServerNodeEntry = {
  renderToString: ReactDOMStringRenderer.renderToString,
  renderToStaticMarkup: ReactDOMStringRenderer.renderToStaticMarkup,
  renderToNodeStream: ReactDOMNodeStreamRenderer.renderToNodeStream,
  renderToStaticNodeStream: ReactDOMNodeStreamRenderer.renderToStaticNodeStream,
  version: ReactVersion
};

module.exports = ReactDOMServerNodeEntry;

})();
}


/***/ }),
/* 26 */
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
/* 27 */
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

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

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
 * @typechecks
 */



var hyphenate = __webpack_require__(29);

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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(12);
  var warning = __webpack_require__(13);
  var ReactPropTypesSecret = __webpack_require__(32);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 33 */
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



var camelize = __webpack_require__(34);

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),
/* 34 */
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

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Nav_LeftNav__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Nav_TopNav__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_eventCenter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_global_scss__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_global_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_highlight_scss__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_highlight_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_highlight_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint react/prop-types: 0 */

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

var App = function App(_ref) {
  var store = _ref.store,
      serverRouteConf = _ref.serverRouteConf;

  var mainContainer = null;

  var emitMobileSlide = function emitMobileSlide() {
    __WEBPACK_IMPORTED_MODULE_8__utils_eventCenter__["a" /* default */].emit('mobileSlide');
  };

  // 组件重渲染，回到顶部事件
  __WEBPACK_IMPORTED_MODULE_8__utils_eventCenter__["a" /* default */].on('backToTop', function () {
    if (!mainContainer) {
      return;
    }
    mainContainer.scrollTo(0, 0);
  });

  // 移动端slide时间触发，双向
  __WEBPACK_IMPORTED_MODULE_8__utils_eventCenter__["a" /* default */].on('mobileSlide', function () {
    var body = document.body;
    var bodyClassName = body.className;
    console.log(bodyClassName);
    if (bodyClassName.indexOf('side') >= 0) {
      bodyClassName = bodyClassName.replace(/(\s)?side(\s)?/, function (arg1, arg2, arg3) {
        return arg2 && arg3 ? ' ' : '';
      });
    } else {
      bodyClassName += ' side';
      __WEBPACK_IMPORTED_MODULE_8__utils_eventCenter__["a" /* default */].emit('backToTop');
    }
    console.log(bodyClassName);
    body.className = bodyClassName;
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__routes_index__["a" /* default */],
      { location: serverRouteConf && serverRouteConf.url },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__index_scss___default.a.main_container },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__index_scss___default.a.main_left },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Nav_LeftNav__["a" /* default */], null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__index_scss___default.a.main_right, ref: function ref(ele) {
              mainContainer = ele;
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Nav_TopNav__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_3__routes_index__["c" /* routerConfig */].map(function (route) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RouteWithSubRoutes, _extends({ key: route.path }, route));
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_7__index_scss___default.a.sliceMask, onClick: emitMobileSlide, role: 'Button', tabIndex: '-1', onKeyDown: emitMobileSlide })
        )
      )
    )
  );
};

var _default = App;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RouteWithSubRoutes, 'RouteWithSubRoutes', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/app/index.jsx');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/app/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/app/index.jsx');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Achieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ItemListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeaderItemListContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Achieve__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tags__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ItemListContainer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_HeaderItemListContainer__ = __webpack_require__(20);








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

var _default = __WEBPACK_IMPORTED_MODULE_0_react_router_dom_StaticRouter___default.a;
/* harmony default export */ __webpack_exports__["f"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Achieve, 'Achieve', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/create-route-server.jsx');

  __REACT_HOT_LOADER__.register(Tag, 'Tag', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/create-route-server.jsx');

  __REACT_HOT_LOADER__.register(Page, 'Page', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/create-route-server.jsx');

  __REACT_HOT_LOADER__.register(ItemListContainer, 'ItemListContainer', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/create-route-server.jsx');

  __REACT_HOT_LOADER__.register(HeaderItemListContainer, 'HeaderItemListContainer', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/create-route-server.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/routes/create-route-server.jsx');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StaticRouter = __webpack_require__(39);

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(15);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(16);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PathUtils = __webpack_require__(40);

var _Router = __webpack_require__(41);

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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(15);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(16);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("eventemitter2");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"achieve_con":"src-components-Achieve-index__achieve_con"};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(8);
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreloaderLink.__proto__ || Object.getPrototypeOf(PreloaderLink)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      var _this2;

      return (_this2 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PreloaderLink, [{
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__() {
      return this.__handleClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(evt) {
      var _this3 = this;

      evt.preventDefault();
      var _props = this.props,
          replace = _props.replace,
          to = _props.to;

      this.props.onPreload().then(function () {
        if (replace) {
          _this3.context.router.history.replace(to);
        } else {
          _this3.context.router.history.push(to);
        }
      });
    }
  }, {
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
var _default = PreloaderLink;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreloaderLink, 'PreloaderLink', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/PreloadLink/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/PreloadLink/index.jsx');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);


/**
 * 404 page内容页
 */

var Page404 = function Page404() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'article',
    { className: 'post' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'title' },
      '404 - \u4EC0\u4E48\u4E5F\u6CA1\u6709'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      '\u60A8\u8981\u627E\u7684\u4E1C\u897F\u4E0D\u5B58\u5728\u54E6\uFF01'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      '\u8BF7\u68C0\u67E5URL\u62FC\u5199\u662F\u5426\u6709\u8BEF\uFF0C\u6216',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
        { to: '/' },
        '\u70B9\u51FB'
      ),
      '\u67E5\u770B\u6240\u6709\u6587\u7AE0'
    )
  );
};

var _default = Page404;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Page404, 'Page404', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/page404.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/page404.jsx');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);




var Pagination = function Pagination(props) {
  var prev = props.prev,
      next = props.next;

  var withoutIt = (!prev || !prev.pathName) && (!next || !next.pathName);
  return withoutIt ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      { className: 'page_pagination' },
      next.pathName && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'page_paginationPrev' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
          { to: '/post/' + next.pathName },
          '\xAB ',
          next.title
        )
      ),
      prev.pathName && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'page_paginationNext' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
          { to: '/post/' + prev.pathName },
          prev.title,
          ' \xBB'
        )
      )
    )
  );
};

Pagination.propTypes = {
  prev: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({}),
  next: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({})
};

var _default = Pagination;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Pagination, 'Pagination', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/pagination.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Page/pagination.jsx');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);
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
        __WEBPACK_IMPORTED_MODULE_2__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
        { to: '/post/' + vo.pathName },
        vo.title
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entry-content', dangerouslySetInnerHTML: function () {
        return { __html: vo.summary };
      }() }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
      { to: '/post/' + vo.pathName },
      '\u9605\u8BFB\u66F4\u591A \xBB'
    )
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

var _default = Item;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Item/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Item/index.jsx');
}();

;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);
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
    { className: 'page_pagination' },
    withPrev && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'page_paginationPrev' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
        { to: url.replace(/(.*page=)\d+/, '$1' + (curPage - 1)) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '\xAB \u4E0A\u4E00\u9875'
        )
      )
    ),
    withNext && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'page_paginationNext' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
        { to: url.replace(/(.*page=)\d+/, '$1' + (curPage + 1)) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '\u4E0B\u4E00\u9875 \xBB'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["withRouter"])(Pagination);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Pagination, 'Pagination', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/ItemListContainer/pagination.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/ItemListContainer/pagination.jsx');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(51);
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
          data: result[0] || {}
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
          dispatch({
            type: 'BLOG_GET_SUCCESS',
            data: {}
          });
          return Promise.resolve();
        }

        dispatch({
          type: 'BLOG_GET_SUCCESS',
          data: blog
        });

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
          itemColP[curAchieveName].push(curPost);
          return itemColP;
        }, {});
        dispatch({
          type: 'ACHIEVES_GET_SUCCESS',
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

var _default = Action;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Action, 'Action', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/action/index.js');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_api__ = __webpack_require__(52);


var api = {};
var prefix = __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].host + '/api';

api.fetch = function (model, query) {
  var target = prefix + '/' + model;
  return __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].axios.get(target, { params: query }).then(function (response) {
    var result = response.data;
    return result;
  });
};

var _default = api;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(api, 'api', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/api/index.js');

  __REACT_HOT_LOADER__.register(prefix, 'prefix', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/api/index.js');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint no-underscore-dangle: 0 */
var isProd = "development" === 'production';

var _default = {
  host: isProd ? 'http://localhost:3000' : 'http://localhost:8080/proxyPrefix',
  axios: process.__API__
};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isProd, 'isProd', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/api/create-api-server.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/api/create-api-server.js');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menuList__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mediaList__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__index_scss__);
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
    __WEBPACK_IMPORTED_MODULE_5__routes__["c" /* routerConfig */].some(function (config) {
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
    { className: __WEBPACK_IMPORTED_MODULE_8__index_scss___default.a.left_navContainer },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_helmet__["Helmet"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'charset', content: 'UTF-8' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'keywords', content: options.keywords }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'Front-End/Node.js developer, lifer, maker' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_8__index_scss___default.a.left_icon },
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
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__menuList__["a" /* default */], { config: menuConfList }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__mediaList__["a" /* default */], { config: options })
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

var _default = LeftNavWithRedux;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToLeftNavProps, 'mapStateToLeftNavProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/index.jsx');

  __REACT_HOT_LOADER__.register(LeftNavWithRedux, 'LeftNavWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/index.jsx');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss__ = __webpack_require__(11);
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

var _default = MenuList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MenuList, 'MenuList', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/menuList.jsx');

  __REACT_HOT_LOADER__.register(Menu, 'Menu', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/menuList.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/menuList.jsx');
}();

;

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(11);
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

var _default = MediaList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MediaList, 'MediaList', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/mediaList.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/LeftNav/mediaList.jsx');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_eventCenter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PreloadLink_preLoadLinkWithRouteConf__ = __webpack_require__(3);
/**
 * Top导航栏。触发主题
 */









var TopNav = function TopNav(props) {
  var _props$options = props.options,
      title = _props$options.title,
      logoUrl = _props$options.logoUrl;


  var handleClick = function handleClick() {
    __WEBPACK_IMPORTED_MODULE_4__utils_eventCenter__["a" /* default */].emit('mobileSlide');
    console.log('mobileSlide');
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__index_scss___default.a.leftNav_container },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__index_scss___default.a.leftNav_btnBar, onClick: handleClick, role: 'button', tabIndex: '-1', onKeyUp: handleClick },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: '/' },
        title
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5__PreloadLink_preLoadLinkWithRouteConf__["a" /* default */],
      { to: '/about' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: logoUrl, alt: 'logo' })
    )
  );
};

TopNav.propTypes = {
  options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({})
};

var mapStateToTopNavProps = function mapStateToTopNavProps(state) {
  return {
    options: state.options
  };
};

var TopNavWithRedux = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToTopNavProps)(TopNav);

var _default = TopNavWithRedux;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopNav, 'TopNav', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/TopNav/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToTopNavProps, 'mapStateToTopNavProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/TopNav/index.jsx');

  __REACT_HOT_LOADER__.register(TopNavWithRedux, 'TopNavWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/TopNav/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Nav/TopNav/index.jsx');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"leftNav_container":"src-components-Nav-TopNav-index__leftNav_container","leftNav_btnBar":"src-components-Nav-TopNav-index__leftNav_btnBar"};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);
/**
 * 脚步区域显示，版权等
 */





var currentYear = new Date().getFullYear();

var Footer = function Footer(props) {
  var title = props.options.title;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__index_scss___default.a.footer_copyright },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      '\xA9 ',
      currentYear,
      '\xA0\xA0-\xA0\xA0',
      title,
      '\xA0\xA0-\xA0\xA0',
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

Footer.propTypes = {
  options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })
};

var mapStateToFooterProps = function mapStateToFooterProps(state) {
  return {
    options: state.options
  };
};

var FooterWithRedux = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToFooterProps)(Footer);

var _default = FooterWithRedux;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(currentYear, 'currentYear', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Footer/index.jsx');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Footer/index.jsx');

  __REACT_HOT_LOADER__.register(mapStateToFooterProps, 'mapStateToFooterProps', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Footer/index.jsx');

  __REACT_HOT_LOADER__.register(FooterWithRedux, 'FooterWithRedux', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Footer/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/components/Footer/index.jsx');
}();

;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer_copyright":"src-components-Footer-index__footer_copyright"};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main_container":"src-components-app-index__main_container","main_left":"src-components-app-index__main_left","main_right":"src-components-app-index__main_right","sliceMask":"src-components-app-index__sliceMask"};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(66);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






var configureStore = function configureStore(preloadedState) {
  var loggerMiddleware = Object(__WEBPACK_IMPORTED_MODULE_2_redux_logger__["createLogger"])();
  var middlewares = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];
  var createStoreParams = null;

  if (true) {
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

var _default = configureStore;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/store/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/store/index.js');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(22);
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(reducerMap);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducerMap, 'reducerMap', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/reducers/index.js');

  __REACT_HOT_LOADER__.register(StateStructureArr, 'StateStructureArr', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/reducers/index.js');

  __REACT_HOT_LOADER__.register(generateReducerByStateKey, 'generateReducerByStateKey', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/reducers/index.js');

  __REACT_HOT_LOADER__.register(generateReducer, 'generateReducer', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/reducers/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/lance/Desktop/Dev_FED/Personal_works/lancelou-new/Blog/front/src/reducers/index.js');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=server-bundle.js.map