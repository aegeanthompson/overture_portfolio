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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/app/javascript/packs/application.js: Unexpected token (6:9)\n\n  4 | \n  5 | document.addEventListener('DOMContentLoaded', () => {\n> 6 |   render(<App />, document.querySelector('#root'));\n    |          ^\n  7 | });\n  8 | \n    at Parser.raise (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:6387:17)\n    at Parser.unexpected (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:7704:16)\n    at Parser.parseExprAtom (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8912:20)\n    at Parser.parseExprSubscripts (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8483:23)\n    at Parser.parseMaybeUnary (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Parser.parseExprOps (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Parser.parseMaybeConditional (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Parser.parseMaybeAssign (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Parser.parseExprListItem (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:9562:18)\n    at Parser.parseCallExpressionArguments (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8692:22)\n    at Parser.parseSubscript (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8585:29)\n    at Parser.parseSubscripts (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8504:19)\n    at Parser.parseExprSubscripts (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8493:17)\n    at Parser.parseMaybeUnary (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Parser.parseExprOps (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Parser.parseMaybeConditional (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Parser.parseMaybeAssign (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Parser.parseExpression (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8197:23)\n    at Parser.parseStatementContent (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:10029:23)\n    at Parser.parseStatement (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:10476:25)\n    at Parser.parseBlockBody (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:10463:10)\n    at Parser.parseBlock (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:10447:10)\n    at Parser.parseFunctionBody (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:9495:24)\n    at Parser.parseArrowExpression (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:9436:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:9073:12)\n    at Parser.parseExprAtom (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8833:21)\n    at Parser.parseExprSubscripts (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8483:23)\n    at Parser.parseMaybeUnary (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Parser.parseExprOps (/Users/masongriffin/Desktop/unit_4_project/overture_portfolios/overture_portfolios/node_modules/@babel/parser/lib/index.js:8329:23)");

/***/ })

/******/ });
//# sourceMappingURL=application-1cbf7b01ebed34e9c8ee.js.map