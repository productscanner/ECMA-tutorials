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

function haveFun() {
	var activityName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Jogging";
	var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

	console.log("today I will go for " + activityName + " for " + time + " minutes");
};

haveFun();
haveFun("hiking", 120);

console.log("---------------------------------------------------------");
var chapter = "object literals";
console.log("chapter -  Learning " + chapter);

var cat = {
	meow: function meow(times) {
		console.log("meow".repeat(times));
	},
	purr: function purr(times) {
		console.log("purr".repeat(times));
	},
	snore: function snore(times) {
		console.log("snore".repeat(times));
	}
};

cat.meow(3);
cat.purr(5);
cat.snore(4);

console.log("---------------------------------------------------------");
console.log("---------------------------------------------------------");
chapter = "Arrow functions";
console.log("chapter -  Learning " + chapter);
console.log("Normal function implementation");
var studentsList = function studentsList(students) {
	console.log(students);
};

studentsList(["Joe", "Cindy", "Jeanne"]);
console.log("*************************************");
console.log("Arrow function implementation");

var studentsListArrow = function studentsListArrow(studentList) {
	return console.log(studentList);
};

studentsListArrow(["Joe", "Cindy", "Jeanne"]);

console.log("---------------------------------------------------------");
console.log("---------------------------------------------------------");

chapter = "Arrow functions and the 'this' scope";
console.log("chapter -  Learning " + chapter);
console.log("Normal function implementation");
var person = {
	name: "Doug",
	actions: ['Bike', 'Hike', 'Ski', 'Surf'],
	printActions: function printActions() {

		this.actions.forEach(function (action) {
			var str = this.name + " likes " + action;
			console.log(str);
		}.bind(this));
	}
};
person.printActions();

console.log("*************************************");
console.log("Arrow function implementation");

var personArrow = {
	name: "Doug",
	actions: ['Bike', 'Hike', 'Ski', 'Surf'],
	printActions: function printActions() {
		var _this = this;

		this.actions.forEach(function (action) {
			var str = _this.name + " likes " + action;
			console.log(str);
		});
	}
};

personArrow.printActions();

console.log("---------------------------------------------------------");
console.log("---------------------------------------------------------");

chapter = "Destructuring assignments";
console.log("chapter -  Learning " + chapter);

var cities = ['Spokane', 'Boston', 'Los Angeles', 'Seattle', 'Portland'];

console.log(cities[0]);
console.log(cities[3]);

console.log("destructuring array elements");
var _ref = ['Spokane', 'Boston', 'Los Angeles', 'Seattle', 'Portland'],
    first = _ref[0],
    fourth = _ref[3];


console.log(first);
console.log(fourth);

console.log("normal destructuring of objects");
var sandwich = {
	title: "Reuben",
	price: 7,
	description: "Cleveland's favorite sandwich",
	ingredients: ['bread', 'corned beef', 'dressing', 'saurekruft', 'cheese']
};

console.log(sandwich.title);

console.log("ES6 destructuring of objects");
var _title$price$descript = {
	title: "Reuben",
	price: 7,
	description: "Cleveland's favorite sandwich",
	ingredients: ['bread', 'corned beef', 'dressing', 'saurekruft', 'cheese']
},
    title = _title$price$descript.title,
    description = _title$price$descript.description;


console.log(title, description);

var vacation = {
	destination: "chile",
	travelers: 2,
	activity: "skiing",
	cost: 4000
};

function vacationMarketing(_ref2) {
	var destination = _ref2.destination,
	    activity = _ref2.activity;

	return "come to " + destination + " and do some " + activity;
}

console.log(vacationMarketing(vacation));

/***/ })
/******/ ]);