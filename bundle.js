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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nameBuilder = function nameBuilder() {
	var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Henry";
	var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Doe";

	console.log(firstName + " " + lastName);
};
nameBuilder();

window.onload = function () {
	func1();
};
var func1 = function func1() {
	var _loop = function _loop(i) {
		div = document.createElement('div');

		div.onclick = function () {
			alert("You clicked on the div #" + i);
		};
		document.getElementsByTagName('section')[0].appendChild(div);
	};

	for (var i = 0; i < 45; i++) {
		var div;

		_loop(i);
	}
};

function createEmail(firstName, purchasePrice) {
	var shipping = 5.95;
	console.log("\n\t\t\t\tHi " + firstName + ", thanks for buying from us\n\t\t\t\tTotal : $" + purchasePrice + "\n\t\t\t\tshipping price is $" + shipping + "\n\t\t\t\tGrand Total : $" + (purchasePrice + shipping) + ";\n\t\t\t");
}
createEmail("Ravikiran", 34);

var cats = ["cat0", "cat1", "cat2", "cat3", "cat4"];
var dogs = ["dog0", "dog1", "dog2", "dog3", "dog4"];

var animals = ["whales", "elephants"].concat(cats, dogs);

console.log(animals);

/***/ })
/******/ ]);