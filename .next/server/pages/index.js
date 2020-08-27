module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ "./src/components/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Arthur\\Desktop\\oldFiles\\programing\\next_react\\src\\components\\Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Button() {
  return __jsx("div", {
    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Click"));
}

/***/ }),

/***/ "./src/components/Button.module.css":
/*!******************************************!*\
  !*** ./src/components/Button.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"buttonContainer": "Button_buttonContainer__2kNyP"
};


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
var _jsxFileName = "C:\\Users\\Arthur\\Desktop\\oldFiles\\programing\\next_react\\src\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



async function getStaticProps() {
  //Executado antes da pagina ser entregue ao cliente
  return {
    props: {
      posts: {
        hi: "hello"
      }
    }
  };
}

function Home({
  posts
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("div", {
    id: "login-page",
    className: "jsx-3315822425" + " " + "login-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, JSON.stringify(posts)), __jsx("h1", {
    onClick: () => router.push("/help", "teste"),
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "router"), __jsx("div", {
    className: "jsx-3315822425" + " " + "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://suap.ifrn.edu.br/static/comum/img/logo-login.png",
    className: "jsx-3315822425" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3315822425" + " " + "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("h4", {
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Login")), __jsx("form", {
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3315822425" + " " + "input-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "login",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Usu\xE1rio"), __jsx("input", {
    name: "login",
    type: "text",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3315822425" + " " + "input-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "login",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Usu\xE1rio"), __jsx("input", {
    name: "login",
    type: "text",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Acessar")), __jsx("div", {
    className: "jsx-3315822425" + " " + "help",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Esqueceu ou deseja alterar sua senha?"))), __jsx("aside", {
    className: "jsx-3315822425" + " " + "aside-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("footer", {
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3315822425",
    __self: this
  }, "#login-page.jsx-3315822425{width:100%;height:100%;background-color:var(--background-dark);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form.jsx-3315822425{background-color:var(--background-light);width:90%;max-width:600px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto 0;padding:45px 0;border-radius:var(--border-sm);}.form.jsx-3315822425 .logo.jsx-3315822425{padding:10px;display:block;margin:0 auto;}.form.jsx-3315822425 .form-label.jsx-3315822425{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:auto 20px;border-bottom:1px solid #eee;padding-bottom:0.5rem;}.form.jsx-3315822425 .form-label.jsx-3315822425 h4.jsx-3315822425{font-weight:300;font-size:1.2rem;color:#999;}.form.jsx-3315822425 form.jsx-3315822425{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto 20px;margin-top:1.5rem;}.form.jsx-3315822425 .input-block.jsx-3315822425{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form.jsx-3315822425 .input-block.jsx-3315822425 label.jsx-3315822425{font-size:0.8rem;color:var(--text-in-light);margin-bottom:0.3rem;}.form.jsx-3315822425 .input-block.jsx-3315822425 input.jsx-3315822425{height:2.8rem;border:2px solid var(--text-in-label);border-radius:var(--border-sm);padding:0 0.8rem;}.form.jsx-3315822425 .input-block.jsx-3315822425 input.jsx-3315822425:focus{border:2px solid var(--primary);outline:0;}.form.jsx-3315822425 .input-block.jsx-3315822425+.input-block.jsx-3315822425{margin-top:1rem;}.form.jsx-3315822425 form.jsx-3315822425 button.jsx-3315822425{margin-top:1rem;border-radius:2rem;height:2.8rem;background-color:var(--primary);color:#fff;font-size:1rem;font-weight:300;cursor:pointer;}.form.jsx-3315822425 form.jsx-3315822425 button.jsx-3315822425:hover{background-color:var(--primary-hover);}.form.jsx-3315822425 .help.jsx-3315822425{margin-top:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.form.jsx-3315822425 a.jsx-3315822425{font-size:0.8rem;color:var(--primary);margin:auto 20px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJ0aHVyXFxEZXNrdG9wXFxvbGRGaWxlc1xccHJvZ3JhbWluZ1xcbmV4dF9yZWFjdFxcc3JjXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUdzQixBQVE4QixBQVM1QixBQUtBLEFBT0csQUFNSCxBQU9BLEFBS0ksQUFLSCxBQU1rQixBQUloQixBQUlBLEFBVXNCLEFBR3RCLEFBS0MsV0FuRkwsRUFpQkUsQ0FtQ3dCLEVBdkJyQixBQWlDbkIsQUFJcUIsQUFhTixDQWhDYyxBQXFDTixNQWxGbUIsSUFnQjFCLEtBd0NKLENBNUJDLEVBcUNHLEdBU2hCLEFBU21CLEdBN0VQLEFBV1osQ0F3Q0EsRUE1QkEsQUFpQnVCLEtBb0JXLEVBM0RoQixDQTRDZSxHQWlDWCxRQW5GUCxFQThDZixFQXZDb0IsT0FZQyxBQWFHLEFBT0EsT0EyQlgsRUFmTSxPQTBCUSxFQVZWLFFBZmpCLE9BZ0JrQixnQkFDRCxJQWVqQixVQW5Gd0IsQ0FPUixBQThEaEIsS0FsRG1CLFNBWEYsQUF3QkUsQUFPbkIsUUFuQitCLE9BWEUsRUF3QmIsa0JBQ3BCLEFBMkNBLEVBeER3QixTQVh4QixhQVlBLElBckJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQXJ0aHVyXFxEZXNrdG9wXFxvbGRGaWxlc1xccHJvZ3JhbWluZ1xcbmV4dF9yZWFjdFxcc3JjXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy9FeGVjdXRhZG8gYW50ZXMgZGEgcGFnaW5hIHNlciBlbnRyZWd1ZSBhbyBjbGllbnRlXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzOiB7IGhpOiBcImhlbGxvXCIgfSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lKHsgcG9zdHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibG9naW4tcGFnZVwiIGNsYXNzTmFtZT1cImxvZ2luLXBhZ2VcIj5cclxuICAgICAgPGgxPntKU09OLnN0cmluZ2lmeShwb3N0cyl9PC9oMT5cclxuICAgICAgPGgxIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2hlbHBcIiwgXCJ0ZXN0ZVwiKX0+cm91dGVyPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdWFwLmlmcm4uZWR1LmJyL3N0YXRpYy9jb211bS9pbWcvbG9nby1sb2dpbi5wbmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgLz5cclxuICAgICAgICAgIDxoND5Mb2dpbjwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9naW5cIj5Vc3XDoXJpbzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibG9naW5cIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYmxvY2tcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2dpblwiPlVzdcOhcmlvPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJsb2dpblwiIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWNlc3NhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RXNxdWVjZXUgb3UgZGVzZWphIGFsdGVyYXIgc3VhIHNlbmhhPzwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJhc2lkZS1tZW51XCI+PC9hc2lkZT5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uIC8+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNsb2dpbi1wYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgICAgcGFkZGluZzogNDVweCAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXNtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmxvZ28ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5mb3JtLWxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5mb3JtLWxhYmVsIGg0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0gZm9ybSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0gLmlucHV0LWJsb2NrIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0gLmlucHV0LWJsb2NrIGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtaW4tbGlnaHQpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuaW5wdXQtYmxvY2sgaW5wdXQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWluLWxhYmVsKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1zbSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmlucHV0LWJsb2NrIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmlucHV0LWJsb2NrICsgLmlucHV0LWJsb2NrIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybSBmb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIGZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktaG92ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuaGVscCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIGEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMjBweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Arthur\\\\Desktop\\\\oldFiles\\\\programing\\\\next_react\\\\src\\\\pages\\\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlcyIsImJ1dHRvbkNvbnRhaW5lciIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiLCJwb3N0cyIsImhpIiwiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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RixDQXBCRixDQUhGLEVBMkJFO0FBQUEsd0NBQWlCLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E1QkY7QUFBQTtBQUFBO0FBQUEsd25TQURGO0FBK0hEOztBQUVjTCxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xKQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuICAgICAgPGgxPkNsaWNrPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25Db250YWluZXJcIjogXCJCdXR0b25fYnV0dG9uQ29udGFpbmVyX18ya055UFwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vRXhlY3V0YWRvIGFudGVzIGRhIHBhZ2luYSBzZXIgZW50cmVndWUgYW8gY2xpZW50ZVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0czogeyBoaTogXCJoZWxsb1wiIH0sXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImxvZ2luLXBhZ2VcIiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlXCI+XHJcbiAgICAgIDxoMT57SlNPTi5zdHJpbmdpZnkocG9zdHMpfTwvaDE+XHJcbiAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9oZWxwXCIsIFwidGVzdGVcIil9PnJvdXRlcjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3VhcC5pZnJuLmVkdS5ici9zdGF0aWMvY29tdW0vaW1nL2xvZ28tbG9naW4ucG5nXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XHJcbiAgICAgICAgICA8aDQ+TG9naW48L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvZ2luXCI+VXN1w6FyaW88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImxvZ2luXCIgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9naW5cIj5Vc3XDoXJpbzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibG9naW5cIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFjZXNzYXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkVzcXVlY2V1IG91IGRlc2VqYSBhbHRlcmFyIHN1YSBzZW5oYT88L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYXNpZGUtbWVudVwiPjwvYXNpZGU+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjbG9naW4tcGFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1zbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5sb2dvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuZm9ybS1sYWJlbCBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtIGZvcm0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWluLWxpZ2h0KTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmlucHV0LWJsb2NrIGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1pbi1sYWJlbCk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItc20pO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayArIC5pbnB1dC1ibG9jayB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0gZm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSBmb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmhlbHAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSBhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDIwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=