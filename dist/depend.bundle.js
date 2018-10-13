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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./learnVue/depend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./learnVue/depend.js":
/*!****************************!*\
  !*** ./learnVue/depend.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/**\n * 依赖收集\n */\nfunction observer(value, cb) {\n  Object.keys(value).forEach(function (key) {\n    return defineReactive(value, key, value[key], cb);\n  });\n}\n\nvar Dep =\n/*#__PURE__*/\nfunction () {\n  function Dep() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dep);\n\n    this.subs = [];\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dep, [{\n    key: \"addSub\",\n    value: function addSub() {\n      var sub = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Watcher;\n      this.subs.push(sub);\n    }\n  }, {\n    key: \"removeSub\",\n    value: function removeSub() {\n      var sub = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Watcher;\n      remove(this.subs, sub);\n    }\n  }, {\n    key: \"notify\",\n    value: function notify() {\n      var subs = this.subs.slice();\n\n      for (var i = 0; i < subs.length; i++) {\n        subs[i].update();\n      }\n    }\n  }]);\n\n  return Dep;\n}();\n\nfunction remove(arr, item) {\n  if (arr.length) {\n    var index = arr.indexOf(item);\n\n    if (index > -1) {\n      return arr.splice(index, 1);\n    }\n  }\n}\n\nvar Watcher =\n/*#__PURE__*/\nfunction () {\n  function Watcher(vm, expOrFun, cb, options) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Watcher);\n\n    this.cb = cb;\n    this.vm = vm;\n    Dep.target = this;\n    this.cb.call(this.vm);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Watcher, [{\n    key: \"update\",\n    value: function update() {\n      this.cb.call(this.vm);\n    }\n  }]);\n\n  return Watcher;\n}();\n\nvar Vue = function Vue(options) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vue);\n\n  this._data = options.data;\n  observer(this._data, options.render);\n  var watcher = new Watcher(this);\n};\n\nfunction defineReactive(obj, key, val, cb) {\n  /*在闭包内存储一个Dep对象*/\n  var dep = new Dep();\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function get() {\n      if (Dep.target) {\n        /*Watcher对象存在全局的Dep.target中*/\n        dep.addSub(Dep.target);\n      }\n    },\n    set: function set(newVal) {\n      /*只有之前addSub中的函数才会触发*/\n      dep.notify();\n    }\n  });\n}\n\nDep.target = null;\nnew Vue({\n  template: \"<div>\\n            <span>text1:</span> {{text1}}\\n            <span>text2:</span> {{text2}}\\n        <div>\",\n  data: {\n    text1: 'text1',\n    text2: 'text2',\n    text3: 'text3'\n  }\n});\n\n//# sourceURL=webpack:///./learnVue/depend.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ })

/******/ });