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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
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
/*export async function getServerSideProps() {
  return {
    props: {
      posts: { say: "hello" },
    }, // will be passed to the page component as props
  }
}*/

async function getData() {
  const req = await fetch("http://127.0.0.1:5000/").then(res => res.json());
  return req;
}

function useData() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`http://127.0.0.1:5000/`, getData());
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  };
}

function Home({
  posts
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    user,
    isLoading,
    isError
  } = useData();
  console.log([user, isLoading, isError]);
  return __jsx("div", {
    id: "login-page",
    className: "jsx-3315822425" + " " + "login-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("h1", {
    onClick: () => console.log([user, isLoading, isError]),
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, JSON.stringify(posts)), __jsx("h1", {
    onClick: () => router.push("/help", "teste"),
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "router"), __jsx("div", {
    className: "jsx-3315822425" + " " + "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://suap.ifrn.edu.br/static/comum/img/logo-login.png",
    className: "jsx-3315822425" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3315822425" + " " + "form-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx("h4", {
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Login")), __jsx("form", {
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3315822425" + " " + "input-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "login",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Usu\xE1rio"), __jsx("input", {
    name: "login",
    type: "text",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3315822425" + " " + "input-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "login",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Usu\xE1rio"), __jsx("input", {
    name: "login",
    type: "text",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "Acessar")), __jsx("div", {
    className: "jsx-3315822425" + " " + "help",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Esqueceu ou deseja alterar sua senha?"))), __jsx("aside", {
    className: "jsx-3315822425" + " " + "aside-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx("footer", {
    className: "jsx-3315822425",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3315822425",
    __self: this
  }, "#login-page.jsx-3315822425{width:100%;height:100%;background-color:var(--background-dark);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form.jsx-3315822425{background-color:var(--background-light);width:90%;max-width:600px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto 0;padding:45px 0;border-radius:var(--border-sm);}.form.jsx-3315822425 .logo.jsx-3315822425{padding:10px;display:block;margin:0 auto;}.form.jsx-3315822425 .form-label.jsx-3315822425{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:auto 20px;border-bottom:1px solid #eee;padding-bottom:0.5rem;}.form.jsx-3315822425 .form-label.jsx-3315822425 h4.jsx-3315822425{font-weight:300;font-size:1.2rem;color:#999;}.form.jsx-3315822425 form.jsx-3315822425{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto 20px;margin-top:1.5rem;}.form.jsx-3315822425 .input-block.jsx-3315822425{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form.jsx-3315822425 .input-block.jsx-3315822425 label.jsx-3315822425{font-size:0.8rem;color:var(--text-in-light);margin-bottom:0.3rem;}.form.jsx-3315822425 .input-block.jsx-3315822425 input.jsx-3315822425{height:2.8rem;border:2px solid var(--text-in-label);border-radius:var(--border-sm);padding:0 0.8rem;}.form.jsx-3315822425 .input-block.jsx-3315822425 input.jsx-3315822425:focus{border:2px solid var(--primary);outline:0;}.form.jsx-3315822425 .input-block.jsx-3315822425+.input-block.jsx-3315822425{margin-top:1rem;}.form.jsx-3315822425 form.jsx-3315822425 button.jsx-3315822425{margin-top:1rem;border-radius:2rem;height:2.8rem;background-color:var(--primary);color:#fff;font-size:1rem;font-weight:300;cursor:pointer;}.form.jsx-3315822425 form.jsx-3315822425 button.jsx-3315822425:hover{background-color:var(--primary-hover);}.form.jsx-3315822425 .help.jsx-3315822425{margin-top:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.form.jsx-3315822425 a.jsx-3315822425{font-size:0.8rem;color:var(--primary);margin:auto 20px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJ0aHVyXFxEZXNrdG9wXFxvbGRGaWxlc1xccHJvZ3JhbWluZ1xcbmV4dF9yZWFjdFxcc3JjXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVrQixBQUdzQixBQVE4QixBQVM1QixBQUtBLEFBT0csQUFNSCxBQU9BLEFBS0ksQUFLSCxBQU1rQixBQUloQixBQUlBLEFBVXNCLEFBR3RCLEFBS0MsV0FuRkwsRUFpQkUsQ0FtQ3dCLEVBdkJyQixBQWlDbkIsQUFJcUIsQUFhTixDQWhDYyxBQXFDTixNQWxGbUIsSUFnQjFCLEtBd0NKLENBNUJDLEVBcUNHLEdBU2hCLEFBU21CLEdBN0VQLEFBV1osQ0F3Q0EsRUE1QkEsQUFpQnVCLEtBb0JXLEVBM0RoQixDQTRDZSxHQWlDWCxRQW5GUCxFQThDZixFQXZDb0IsT0FZQyxBQWFHLEFBT0EsT0EyQlgsRUFmTSxPQTBCUSxFQVZWLFFBZmpCLE9BZ0JrQixnQkFDRCxJQWVqQixVQW5Gd0IsQ0FPUixBQThEaEIsS0FsRG1CLFNBWEYsQUF3QkUsQUFPbkIsUUFuQitCLE9BWEUsRUF3QmIsa0JBQ3BCLEFBMkNBLEVBeER3QixTQVh4QixhQVlBLElBckJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQXJ0aHVyXFxEZXNrdG9wXFxvbGRGaWxlc1xccHJvZ3JhbWluZ1xcbmV4dF9yZWFjdFxcc3JjXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vRXhlY3V0YWRvIGFudGVzIGRhIHBhZ2luYSBzZXIgZW50cmVndWUgYW8gY2xpZW50ZVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0czogeyBoaTogXCJoZWxsb1wiIH0sXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0czogeyBzYXk6IFwiaGVsbG9cIiB9LFxyXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59Ki9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgcmV0dXJuIHJlcVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VEYXRhKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2AsIGdldERhdGEoKSlcclxuICByZXR1cm4ge1xyXG4gICAgdXNlcjogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lKHsgcG9zdHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IHsgdXNlciwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VEYXRhKClcclxuICBjb25zb2xlLmxvZyhbdXNlciwgaXNMb2FkaW5nLCBpc0Vycm9yXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJsb2dpbi1wYWdlXCIgY2xhc3NOYW1lPVwibG9naW4tcGFnZVwiPlxyXG4gICAgICA8aDEgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coW3VzZXIsIGlzTG9hZGluZywgaXNFcnJvcl0pfT5cclxuICAgICAgICB7SlNPTi5zdHJpbmdpZnkocG9zdHMpfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvaGVscFwiLCBcInRlc3RlXCIpfT5yb3V0ZXI8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3N1YXAuaWZybi5lZHUuYnIvc3RhdGljL2NvbXVtL2ltZy9sb2dvLWxvZ2luLnBuZ1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJcIiAvPlxyXG4gICAgICAgICAgPGg0PkxvZ2luPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYmxvY2tcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2dpblwiPlVzdcOhcmlvPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJsb2dpblwiIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvZ2luXCI+VXN1w6FyaW88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImxvZ2luXCIgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BY2Vzc2FyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5Fc3F1ZWNldSBvdSBkZXNlamEgYWx0ZXJhciBzdWEgc2VuaGE/PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImFzaWRlLW1lbnVcIj48L2FzaWRlPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b24gLz5cclxuICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI2xvZ2luLXBhZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0NXB4IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItc20pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAubG9nbyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmZvcm0tbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMjBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmZvcm0tbGFiZWwgaDQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybSBmb3JtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybSAuaW5wdXQtYmxvY2sge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybSAuaW5wdXQtYmxvY2sgbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1pbi1saWdodCk7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayBpbnB1dCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtaW4tbGFiZWwpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXNtKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuaW5wdXQtYmxvY2sgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuaW5wdXQtYmxvY2sgKyAuaW5wdXQtYmxvY2sge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtIGZvcm0gYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gZm9ybSBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5oZWxwIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gYSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Arthur\\\\Desktop\\\\oldFiles\\\\programing\\\\next_react\\\\src\\\\pages\\\\index.js */"));
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

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlcyIsImJ1dHRvbkNvbnRhaW5lciIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiLCJwb3N0cyIsImhpIiwiZ2V0RGF0YSIsInJlcSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ1c2VEYXRhIiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwidXNlciIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBOUJGO0FBQUE7QUFBQTtBQUFBLGdpVUFERjtBQWlJRDs7QUFFY1AsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUM3S0Esd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMT5DbGljazwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uQ29udGFpbmVyXCI6IFwiQnV0dG9uX2J1dHRvbkNvbnRhaW5lcl9fMmtOeVBcIlxufTtcbiIsImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy9FeGVjdXRhZG8gYW50ZXMgZGEgcGFnaW5hIHNlciBlbnRyZWd1ZSBhbyBjbGllbnRlXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzOiB7IGhpOiBcImhlbGxvXCIgfSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG4vKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzOiB7IHNheTogXCJoZWxsb1wiIH0sXHJcbiAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn0qL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9cIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICByZXR1cm4gcmVxXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZURhdGEoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvYCwgZ2V0RGF0YSgpKVxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgeyB1c2VyLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IHVzZURhdGEoKVxyXG4gIGNvbnNvbGUubG9nKFt1c2VyLCBpc0xvYWRpbmcsIGlzRXJyb3JdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImxvZ2luLXBhZ2VcIiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlXCI+XHJcbiAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhbdXNlciwgaXNMb2FkaW5nLCBpc0Vycm9yXSl9PlxyXG4gICAgICAgIHtKU09OLnN0cmluZ2lmeShwb3N0cyl9XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9oZWxwXCIsIFwidGVzdGVcIil9PnJvdXRlcjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3VhcC5pZnJuLmVkdS5ici9zdGF0aWMvY29tdW0vaW1nL2xvZ28tbG9naW4ucG5nXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XHJcbiAgICAgICAgICA8aDQ+TG9naW48L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvZ2luXCI+VXN1w6FyaW88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImxvZ2luXCIgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9naW5cIj5Vc3XDoXJpbzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibG9naW5cIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFjZXNzYXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkVzcXVlY2V1IG91IGRlc2VqYSBhbHRlcmFyIHN1YSBzZW5oYT88L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYXNpZGUtbWVudVwiPjwvYXNpZGU+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjbG9naW4tcGFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1zbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5sb2dvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSAuZm9ybS1sYWJlbCBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtIGZvcm0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWluLWxpZ2h0KTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmlucHV0LWJsb2NrIGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1pbi1sYWJlbCk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItc20pO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIC5pbnB1dC1ibG9jayArIC5pbnB1dC1ibG9jayB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0gZm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSBmb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0gLmhlbHAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSBhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDIwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9