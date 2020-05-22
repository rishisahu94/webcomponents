module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/rishi.sahu/Desktop/Project/with-stencil-app/packages/web-app/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction Home() {\n  const array = [{\n    label: 'Rishi',\n    description: 'Lorem ipsum',\n    color: '#439ECA',\n    width: '300px'\n  }, {\n    label: 'Accordion 2',\n    description: 'Lorem ipsum',\n    color: '#7EC74A',\n    width: '300px'\n  }, {\n    label: 'Accordion 3',\n    description: 'Lorem ipsum',\n    color: '#F8CD41',\n    width: '300px'\n  }];\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, array.map(array => {\n    return __jsx(\"my-accordion\", {\n      label: array.label,\n      description: array.description,\n      color: array.color,\n      width: array.width,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }\n    });\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJhcnJheSIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjb2xvciIsIndpZHRoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxTQUFLLEVBQUUsT0FEVDtBQUVFQyxlQUFXLEVBQUUsYUFGZjtBQUdFQyxTQUFLLEVBQUUsU0FIVDtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQURZLEVBT1o7QUFDRUgsU0FBSyxFQUFFLGFBRFQ7QUFFRUMsZUFBVyxFQUFFLGFBRmY7QUFHRUMsU0FBSyxFQUFFLFNBSFQ7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FQWSxFQWFaO0FBQ0VILFNBQUssRUFBRSxhQURUO0FBRUVDLGVBQVcsRUFBRSxhQUZmO0FBR0VDLFNBQUssRUFBRSxTQUhUO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBYlksQ0FBZDtBQW9CQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSUosS0FBSyxDQUFDSyxHQUFOLENBQVdMLEtBQUQsSUFBVztBQUNuQixXQUNFO0FBQ0EsV0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBRGI7QUFFQSxpQkFBVyxFQUFFRCxLQUFLLENBQUNFLFdBRm5CO0FBR0EsV0FBSyxFQUFFRixLQUFLLENBQUNHLEtBSGI7QUFJQSxXQUFLLEVBQUVILEtBQUssQ0FBQ0ksS0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFPRSxHQVJKLENBSEosQ0FERjtBQWdCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdSaXNoaScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtJyxcbiAgICAgIGNvbG9yOiAnIzQzOUVDQScsXG4gICAgICB3aWR0aDogJzMwMHB4J1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdBY2NvcmRpb24gMicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtJyxcbiAgICAgIGNvbG9yOiAnIzdFQzc0QScsXG4gICAgICB3aWR0aDogJzMwMHB4J1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdBY2NvcmRpb24gMycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtJyxcbiAgICAgIGNvbG9yOiAnI0Y4Q0Q0MScsXG4gICAgICB3aWR0aDogJzMwMHB4J1xuICAgIH1cbiAgXVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogPG15LWNvbXBvbmVudCBmaXJzdD1cIk5leHQuanNcIiBsYXN0PVwiVGhlIFJlYWN0IEZyYW1ld29ya1wiPjwvbXktY29tcG9uZW50PiAqL31cbiAgICAgIHtcbiAgICAgICAgYXJyYXkubWFwKChhcnJheSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bXktYWNjb3JkaW9uIFxuICAgICAgICAgICAgbGFiZWw9e2FycmF5LmxhYmVsfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2FycmF5LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgY29sb3I9e2FycmF5LmNvbG9yfVxuICAgICAgICAgICAgd2lkdGg9e2FycmF5LndpZHRofT5cbiAgICAgICAgICAgIDwvbXktYWNjb3JkaW9uPlxuICAgICAgICAgICl9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rishi.sahu/Desktop/Project/with-stencil-app/packages/web-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });