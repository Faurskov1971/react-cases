"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cases/quizIntro",{

/***/ "./components/quiz/Game.tsx":
/*!**********************************!*\
  !*** ./components/quiz/Game.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"./components/quiz/Category.tsx\");\n/* harmony import */ var _public_data_quizData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/data/quizData */ \"./public/data/quizData.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/faurskov/Documents/projekter/faurskov.com_2021/components/quiz/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar jeopardyData = _public_data_quizData__WEBPACK_IMPORTED_MODULE_3__.data;\nfunction Game() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      gamePoint = _useState[0],\n      setGamePoint = _useState[1];\n\n  var gamePointF = function gamePointF(point) {\n    setGamePoint(gamePoint + point);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"QUIZ | GAME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      children: [\"Point: \", gamePoint]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), jeopardyData.map(function (game, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {\n        category: game.category,\n        question_array: game.question_array,\n        gamePointF: gamePointF\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true);\n}\n\n_s(Game, \"13bHA2U6O7+37LLRGFmrCqhGyY4=\");\n\n_c = Game;\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1aXovR2FtZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlLLFlBQVksR0FBR0QsdURBQW5CO0FBRWUsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUU3QixrQkFBa0NILCtDQUFRLENBQVMsQ0FBVCxDQUExQztBQUFBLE1BQU9JLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0MsS0FBRCxFQUFnQjtBQUMvQkYsSUFBQUEsWUFBWSxDQUFDRCxTQUFTLEdBQUNHLEtBQVgsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDQSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBSUU7QUFBQSw0QkFBV0gsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQU1FRixZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQXdCO0FBQ3ZDLDBCQUNBLDhEQUFDLDhDQUFEO0FBRUUsZ0JBQVEsRUFBV0QsSUFBSSxDQUFDRSxRQUYxQjtBQUdFLHNCQUFjLEVBQUtGLElBQUksQ0FBQ0csY0FIMUI7QUFJRSxrQkFBVSxFQUFTTjtBQUpyQixTQUNxQkksS0FEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBO0FBUUQsS0FURCxDQU5GO0FBQUEsa0JBREY7QUFvQkQ7O0dBM0J1QlA7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcXVpei9HYW1lLnRzeD8zYmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL0NhdGVnb3J5JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uLy4uL3B1YmxpYy9kYXRhL3F1aXpEYXRhJztcbmxldCBqZW9wYXJkeURhdGEgPSBkYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICBcbiAgY29uc3QgW2dhbWVQb2ludCwgc2V0R2FtZVBvaW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7ICBcbiAgY29uc3QgZ2FtZVBvaW50Rj0ocG9pbnQ6bnVtYmVyKT0+e1xuICAgIHNldEdhbWVQb2ludChnYW1lUG9pbnQrcG9pbnQpO1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UVVJWiB8IEdBTUU8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICAgIDxwPlBvaW50OiB7Z2FtZVBvaW50fTwvcD5cbiAgICAgIHtcbiAgICAgIGplb3BhcmR5RGF0YS5tYXAoKGdhbWUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxDYXRlZ29yeSBcbiAgICAgICAgICBrZXkgICAgICAgICAgICAgPSB7aW5kZXh9XG4gICAgICAgICAgY2F0ZWdvcnkgICAgICAgID0ge2dhbWUuY2F0ZWdvcnl9XG4gICAgICAgICAgcXVlc3Rpb25fYXJyYXkgID0ge2dhbWUucXVlc3Rpb25fYXJyYXl9XG4gICAgICAgICAgZ2FtZVBvaW50RiAgICAgID0ge2dhbWVQb2ludEZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSAgXG4gICAgICB9XG4gICAgKX1cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJDYXRlZ29yeSIsInVzZVN0YXRlIiwiZGF0YSIsImplb3BhcmR5RGF0YSIsIkdhbWUiLCJnYW1lUG9pbnQiLCJzZXRHYW1lUG9pbnQiLCJnYW1lUG9pbnRGIiwicG9pbnQiLCJtYXAiLCJnYW1lIiwiaW5kZXgiLCJjYXRlZ29yeSIsInF1ZXN0aW9uX2FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/quiz/Game.tsx\n");

/***/ })

});