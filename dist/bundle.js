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

eval("/* WEBPACK VAR INJECTION */(function(global) {var sudokuGrid = [[8, 9, 5, 7, 4, 0, 1, 3, 6], [2, 0, 1, 9, 6, 0, 4, 8, 5], [4, 0, 3, 5, 8, 0, 7, 9, 2], [9, 0, 4, 6, 1, 0, 2, 0, 8], [5, 0, 7, 0, 3, 0, 9, 0, 4], [6, 8, 2, 0, 5, 9, 3, 0, 1], [1, 5, 9, 0, 7, 4, 6, 0, 3], [7, 4, 6, 0, 2, 5, 8, 0, 9], [3, 2, 8, 1, 9, 6, 5, 0, 7]];\n/*\n    [8,9,5,7,4,2,1,3,6],\n    [2,7,1,9,6,3,4,8,5],\n    [4,6,3,5,8,1,7,9,2],\n    [9,3,4,6,1,7,2,5,8],\n    [5,1,7,2,3,8,9,6,4],\n    [6,8,2,4,5,9,3,7,1],\n    [1,5,9,8,7,4,6,2,3],\n    [7,4,6,3,2,5,8,1,9],\n    [3,2,8,1,9,6,5,4,7]\n */\n\nglobal.handleChange = function () {\n  var value = Number(event.target.value);\n\n  if (isInRange(value, 1, 9)) {\n    var id = Number(event.target.id);\n    var column = id % 10;\n    var row = (id - column) / 10;\n    updateGrid(sudokuGrid, row, column, value);\n  } else {\n    console.log('Value out of range');\n  }\n};\n\nglobal.handleClick = function () {\n  event.preventDefault();\n  console.log(solve(sudokuGrid));\n};\n\nvar updateGrid = function updateGrid(grid, row, col, num) {\n  return grid[row][col] = num;\n};\n\nvar isInRange = function isInRange(num, minNum, maxNum) {\n  return num >= minNum && num <= maxNum;\n};\n\nvar presentInRow = function presentInRow(grid, row, num) {\n  for (var col = 0; col < grid.length; col++) {\n    if (grid[row][col] === num) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar presentInCol = function presentInCol(grid, col, num) {\n  for (var row = 0; row < grid.length; row++) {\n    if (grid[row][col] === num) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar presentInBox = function presentInBox(grid, boxStartRow, boxStartCol, num) {\n  var minCol, maxCol, minRow, maxRow;\n\n  if (boxStartCol >= 0 && boxStartCol <= 2) {\n    minCol = 0;\n    maxCol = 2;\n  } else if (boxStartCol >= 3 && boxStartCol <= 5) {\n    minCol = 3;\n    maxCol = 5;\n  } else if (boxStartCol >= 6 && boxStartCol <= 8) {\n    minCol = 6;\n    maxCol = 8;\n  }\n\n  if (boxStartRow >= 0 && boxStartRow <= 2) {\n    minRow = 0;\n    maxRow = 2;\n  } else if (boxStartRow >= 3 && boxStartRow <= 5) {\n    minRow = 3;\n    maxRow = 5;\n  } else if (boxStartRow >= 6 && boxStartRow <= 8) {\n    minRow = 6;\n    maxRow = 8;\n  }\n\n  for (var row = minRow; row <= maxRow; row++) {\n    for (var col = minCol; col <= maxCol; col++) {\n      if (grid[row][col] === num) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar canBeInsert = function canBeInsert(grid, row, col, num) {\n  return !presentInCol(grid, col, num) && !presentInRow(grid, row, num) && !presentInBox(grid, row, col, num);\n};\n\nvar getEmptyLocations = function getEmptyLocations(grid) {\n  var emptyLocations = [];\n\n  for (var row = 0; row < grid.length; row++) {\n    for (var col = 0; col < grid.length; col++) {\n      if (grid[row][col] === 0) {\n        //return ((row + 1)*10) + (col + 1);\n        emptyLocations.push([row, col]);\n      }\n    }\n  }\n\n  return emptyLocations;\n};\n\nvar testValues = function testValues(grid, index) {\n  if (index >= grid.length) {\n    return true;\n  } else if (grid[index] !== 0) {\n    return testValues(grid, index + 1);\n  }\n\n  for (var i = 1; i <= 9; i++) {\n    if (canBeInsert(grid, Math.floor(index / 9), index % 9, i)) {\n      grid[index] = i;\n\n      if (testValues(grid, index + 1)) {\n        return true;\n      }\n    }\n  }\n\n  grid[index] = 0;\n  return false;\n};\n\nvar findPossibleValues = function findPossibleValues(grid, emptyLocations) {\n  var possibleValues = [];\n\n  for (var i = 0; i < emptyLocations.length; i++) {\n    var temp = [];\n    var row = emptyLocations[i][0];\n    var col = emptyLocations[i][1];\n\n    for (var val = 1; val <= 9; val++) {\n      if (canBeInsert(grid, row, col, val)) {\n        temp.push(val);\n      }\n    }\n\n    possibleValues.push(temp);\n  }\n\n  return possibleValues;\n};\n\nvar solve = function solve(grid) {\n  var emptyLocations = getEmptyLocations(grid);\n  var possibleValues = findPossibleValues(grid, emptyLocations);\n\n  for (var i = 0; i < emptyLocations.length; i++) {\n    var row = emptyLocations[i][0];\n    var col = emptyLocations[i][1];\n\n    if (possibleValues[i].length === 1) {\n      grid[row][col] = possibleValues[i][0];\n      return solve(grid);\n    }\n  }\n\n  if (possibleValues.map(function (elem) {\n    return elem.length !== 1;\n  })) {\n    for (var _i = 0; _i < emptyLocations.length; _i++) {\n      var _row = emptyLocations[_i][0];\n      var _col = emptyLocations[_i][1];\n\n      for (var j = 0; j < possibleValues[_i].length; j++) {\n        updateGrid(grid, _row, _col, possibleValues[_i][j]);\n        return solve(grid);\n      }\n    }\n  }\n\n  return grid;\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });