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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var sudokuGrid = [[0, 0, 0, 6, 0, 7, 0, 8, 5], [0, 0, 0, 0, 0, 0, 6, 0, 0], [0, 0, 7, 0, 0, 0, 0, 0, 0], [0, 5, 0, 0, 0, 3, 0, 0, 4], [3, 7, 0, 0, 0, 8, 0, 0, 0], [6, 0, 0, 2, 0, 0, 0, 0, 0], [8, 0, 0, 0, 0, 0, 3, 1, 0], [0, 3, 1, 0, 4, 9, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 9]];\n\nglobal.handleChange = function () {\n  var value = Number(event.target.value);\n\n  if (isInRange(value, 1, 9)) {\n    var id = Number(event.target.id);\n    var column = id % 10;\n    var row = (id - column) / 10;\n    updateGrid(sudokuGrid, row, column, value);\n  } else {\n    console.log('Value out of range');\n  }\n};\n\nglobal.handleClick = function () {\n  event.preventDefault();\n  console.log(solve(sudokuGrid));\n};\n\nvar updateGrid = function updateGrid(grid, row, col, num) {\n  return grid[row][col] = num;\n};\n\nvar isInRange = function isInRange(num, minNum, maxNum) {\n  return num >= minNum && num <= maxNum;\n};\n\nvar getEmptyLocations = function getEmptyLocations(grid) {\n  var emptyLocations = [];\n\n  for (var row = 0; row < grid.length; row++) {\n    for (var col = 0; col < grid.length; col++) {\n      if (grid[row][col] === 0) {\n        var startingBoxRow = 3 * Math.floor(row / 3);\n        var startingBoxCol = 3 * Math.floor(col / 3);\n        emptyLocations.push([row, col, startingBoxRow, startingBoxCol]);\n      }\n    }\n  }\n\n  return emptyLocations;\n};\n\nvar presentInRow = function presentInRow(grid, emptyCell, value) {\n  var row = emptyCell[0];\n\n  for (var col = 0; col < 9; col++) {\n    if (grid[row][col] === value) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar presentInCol = function presentInCol(grid, emptyCell, value) {\n  var col = emptyCell[1];\n\n  for (var row = 0; row < 9; row++) {\n    if (grid[row][col] === value) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar presentInBox = function presentInBox(grid, emptyCell, value) {\n  var startingBoxRow = emptyCell[2];\n  var startingBoxCol = emptyCell[3];\n\n  for (var i = 0; i < 3; i++) {\n    var gridRow = grid[startingBoxRow + i];\n\n    for (var j = 0; j < 3; j++) {\n      if (gridRow[startingBoxCol + j] === value) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar canBeInsert = function canBeInsert(grid, emptyCell, value) {\n  return !presentInBox(grid, emptyCell, value) && !presentInRow(grid, emptyCell, value) && !presentInCol(grid, emptyCell, value);\n};\n\nvar solve = function solve(grid) {\n  var emptyLocations = getEmptyLocations(grid);\n\n  nextEmptyCell: for (var i = 0; i < emptyLocations.length;) {\n    var allCellData = emptyLocations[i];\n    var row = allCellData[0];\n    var col = allCellData[1];\n    var inputValue = grid[row][col] + 1;\n\n    while (inputValue <= 9) {\n      if (canBeInsert(grid, allCellData, inputValue)) {\n        grid[row][col] = inputValue;\n        i++;\n        continue nextEmptyCell;\n      }\n\n      inputValue++;\n    }\n\n    grid[row][col] = 0;\n\n    if (i === 0) {\n      console.log(\"Sudoku cannot be solved\");\n    }\n\n    i--;\n  }\n\n  return grid;\n}; // var t0 = Date.now();\n// solve(board);\n// var t1 = Date.now();\n// console.log( \" in \" + (t1-t0) + \"ms\");\n// console.log( board.map( row=> row.join(',')).join('\\n'));\n// console.log( \"\\n solved in \" + (t1-t0) + \"ms\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });