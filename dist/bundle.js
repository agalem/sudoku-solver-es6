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

eval("/* WEBPACK VAR INJECTION */(function(global) {var emptySudokuGrid = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];\nwindow.errorFields = [];\nvar sudokuGrid = emptySudokuGrid.slice(0);\n\nfor (var i = 0, len = emptySudokuGrid.length; i < len; i++) {\n  sudokuGrid[i] = emptySudokuGrid[i].slice();\n}\n\nwindow.isInputBoardVisible = true;\n\nglobal.handleChange = function () {\n  var value = Number(event.target.value);\n  var id = Number(event.target.id);\n  var column = id % 10;\n  var row = (id - column) / 10;\n  var startingBoxRow = 3 * Math.floor(row / 3);\n  var startingBoxCol = 3 * Math.floor(column / 3);\n  var checkingCell = [row, column, startingBoxRow, startingBoxCol];\n  removeWarningBg(row, column);\n\n  if (value === 0) {\n    updateGrid(sudokuGrid, row, column, 0);\n    document.getElementById(id).value = '';\n  } else {\n    if (isInRange(value, 1, 9) && canBeInsert(sudokuGrid, checkingCell, value)) {\n      for (var _i = 0; _i < window.errorFields.length; _i++) {\n        if (errorFields[_i] === id) {\n          window.errorFields.splice(_i, 1);\n        }\n      }\n\n      addSuccessBg(row, column);\n      updateGrid(sudokuGrid, row, column, value);\n    } else {\n      errorFields.push(id);\n      addWarningBg(row, column);\n      updateGrid(sudokuGrid, row, column, 0);\n    }\n  }\n};\n\nglobal.handleClear = function () {\n  event.preventDefault();\n\n  for (var _i2 = 0, _len = emptySudokuGrid.length; _i2 < _len; _i2++) {\n    sudokuGrid[_i2] = emptySudokuGrid[_i2].slice();\n\n    for (var j = 0; j < emptySudokuGrid[_i2].length; j++) {\n      removeWarningBg(_i2, j);\n    }\n  }\n\n  replaceBoard(window.isInputBoardVisible);\n  clearInputs();\n};\n\nvar clearInputs = function clearInputs() {\n  var inputs = document.getElementsByTagName(\"input\");\n\n  for (var _i3 = 0; _i3 < inputs.length; _i3++) {\n    inputs[_i3].value = \"\";\n  }\n};\n\nvar removeWarningBg = function removeWarningBg(row, column) {\n  var id = \"\".concat(row).concat(column);\n  var element = document.getElementById(id).parentElement;\n  var sElement = document.getElementById(\"s\" + id).parentElement;\n\n  if (element.classList.contains(\"input--err\")) {\n    element.classList.remove(\"input--err\");\n  }\n\n  if (element.classList.contains(\"input--succ\")) {\n    element.classList.remove(\"input--succ\");\n  }\n\n  if (sElement.classList.contains(\"input--given\")) {\n    sElement.classList.remove(\"input--given\");\n  }\n};\n\nvar addSuccessBg = function addSuccessBg(row, column) {\n  var id = \"\".concat(row).concat(column);\n  var sID = \"s\" + id;\n  document.getElementById(id).parentElement.classList.add(\"input--succ\");\n  document.getElementById(sID).parentElement.classList.add(\"input--given\");\n};\n\nvar addWarningBg = function addWarningBg(row, column) {\n  var id = \"\".concat(row).concat(column);\n  document.getElementById(id).parentElement.classList.add(\"input--err\");\n};\n\nglobal.handleClick = function () {\n  event.preventDefault();\n  var alert = document.getElementById(\"alert\");\n\n  if (errorFields.length === 0) {\n    replaceBoard(isInputBoardVisible);\n    putElementsOnBoard(solve(sudokuGrid));\n\n    if (!alert.classList.contains(\"hidden\")) {\n      alert.classList.add(\"hidden\");\n    }\n  } else {\n    if (alert.classList.contains(\"hidden\")) {\n      alert.classList.remove(\"hidden\");\n      alert.innerText = \"You gave invalid values. Fix values in red fields.\";\n    }\n  }\n};\n\nvar putElementsOnBoard = function putElementsOnBoard(grid) {\n  for (var row = 0; row < grid.length; row++) {\n    for (var col = 0; col < grid[row].length; col++) {\n      var id = \"s\".concat(row).concat(col);\n      document.getElementById(id).innerText = grid[row][col];\n    }\n  }\n};\n\nvar replaceBoard = function replaceBoard(isInputBoardVisible) {\n  var inputBoardId = \"container\";\n  var solvedBoardId = \"container-solved\";\n  var inputBoard = document.getElementById(inputBoardId);\n  var solvedBoard = document.getElementById(solvedBoardId);\n\n  if (isInputBoardVisible) {\n    inputBoard.classList.add(\"hidden\");\n    solvedBoard.classList.remove(\"hidden\");\n  } else {\n    inputBoard.classList.remove(\"hidden\");\n    solvedBoard.classList.add(\"hidden\");\n  }\n\n  window.isInputBoardVisible = !isInputBoardVisible;\n};\n\nvar updateGrid = function updateGrid(grid, row, col, num) {\n  return grid[row][col] = num;\n};\n\nvar isInRange = function isInRange(num, minNum, maxNum) {\n  return num >= minNum && num <= maxNum;\n};\n\nvar getEmptyLocations = function getEmptyLocations(grid) {\n  var emptyLocations = [];\n\n  for (var row = 0; row < grid.length; row++) {\n    for (var col = 0; col < grid.length; col++) {\n      if (grid[row][col] === 0) {\n        var startingBoxRow = 3 * Math.floor(row / 3);\n        var startingBoxCol = 3 * Math.floor(col / 3);\n        emptyLocations.push([row, col, startingBoxRow, startingBoxCol]);\n      }\n    }\n  }\n\n  return emptyLocations;\n};\n\nvar presentInRow = function presentInRow(grid, emptyCell, value) {\n  var row = emptyCell[0];\n\n  for (var col = 0; col < 9; col++) {\n    if (grid[row][col] === value) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar presentInCol = function presentInCol(grid, emptyCell, value) {\n  var col = emptyCell[1];\n\n  for (var row = 0; row < 9; row++) {\n    if (grid[row][col] === value) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar presentInBox = function presentInBox(grid, emptyCell, value) {\n  var startingBoxRow = emptyCell[2];\n  var startingBoxCol = emptyCell[3];\n\n  for (var _i4 = 0; _i4 < 3; _i4++) {\n    var gridRow = grid[startingBoxRow + _i4];\n\n    for (var j = 0; j < 3; j++) {\n      if (gridRow[startingBoxCol + j] === value) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar canBeInsert = function canBeInsert(grid, emptyCell, value) {\n  return !presentInBox(grid, emptyCell, value) && !presentInRow(grid, emptyCell, value) && !presentInCol(grid, emptyCell, value);\n};\n\nvar solve = function solve(grid) {\n  var emptyLocations = getEmptyLocations(grid);\n\n  nextEmptyCell: for (var _i5 = 0; _i5 < emptyLocations.length;) {\n    var allCellData = emptyLocations[_i5];\n    var row = allCellData[0];\n    var col = allCellData[1];\n    var inputValue = grid[row][col] + 1;\n\n    while (inputValue <= 9) {\n      if (canBeInsert(grid, allCellData, inputValue)) {\n        grid[row][col] = inputValue;\n        _i5++;\n        continue nextEmptyCell;\n      }\n\n      inputValue++;\n    }\n\n    grid[row][col] = 0;\n\n    if (_i5 === 0) {\n      var alert = document.getElementById(\"alert\");\n\n      if (alert.classList.contains(\"hidden\")) {\n        alert.classList.remove(\"hidden\");\n        alert.innerText = \"Sudoku cannot be solved\";\n      }\n    }\n\n    _i5--;\n  }\n\n  return grid;\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });