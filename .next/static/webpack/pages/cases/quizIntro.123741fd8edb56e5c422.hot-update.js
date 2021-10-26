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

/***/ "./components/quiz/Question.tsx":
/*!**************************************!*\
  !*** ./components/quiz/Question.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Question; }\n/* harmony export */ });\n/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer */ \"./components/quiz/Answer.tsx\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/faurskov/Documents/projekter/faurskov.com_2021/components/quiz/Question.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Question(data) {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      result = _useState2[0],\n      setResult = _useState2[1]; // Question is responsible for the test of true answer\n  // I pass answerF down to the answers, which calls this function\n  // to test rigth or wrong\n  // Then I reset the gamePoint (Game-state)\n\n\n  var answerF = function answerF(answer) {\n    // The right answer is allways the first answer in the JSON-file (before random order)\n    if (answer === data.answer_array[0]) {\n      data.gamePointF(data.point);\n      setResult(\"right\");\n    } else {\n      data.gamePointF(-data.point);\n      setResult(\"wrong\");\n    }\n\n    setActive(3);\n    data.activeCategoryF();\n  }; // call the function with an array and it returns the array in a random order\n\n\n  var randomF = function randomF(answers) {\n    var count = answers.length;\n    var startArray = [];\n    var slutArray = [];\n\n    for (var i = 0; i < count; i++) {\n      startArray[i] = i;\n    }\n\n    while (startArray.length > 0) {\n      var tmpTal = Math.random() * startArray.length;\n      tmpTal = Math.floor(tmpTal);\n      slutArray.push(answers[startArray[tmpTal]]);\n      startArray.splice(tmpTal, 1);\n    }\n\n    return slutArray;\n  }; // The order off answers is shufled\n\n\n  var tmpAnswersArray = randomF(data.answer_array);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: result !== \"\" ? result === \"right\" ? (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().right) : (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().inactive) : \"\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        className: active === 3 && result === \"wrong\" ? (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().button) + \" \" : (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().button) // The question is activated and show answers\n        ,\n        onClick: function onClick() {\n          active === 1 ? setActive(2) : \"\";\n        },\n        children: [data.point, result === \"right\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineCheck, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 31\n        }, this) : \"\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: active != 2 ? (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().hideQuestion) : \"\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default().questionText),\n        children: data.text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, this), tmpAnswersArray.map(function (a, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Answer__WEBPACK_IMPORTED_MODULE_0__.default, {\n          text: a,\n          answerF: answerF\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 15\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Question, \"PR9UbMmqkXUuMl0uQhTmFFFO62g=\");\n\n_c = Question;\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW5CLEdBQXFDLEVBTHhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQVdFO0FBQUssZUFBUyxFQUFHRixNQUFNLElBQUUsQ0FBVCxHQUFZTCw4RUFBWixHQUFvQyxFQUFwRDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsOEVBQWhCO0FBQUEsa0JBQTBDSSxJQUFJLENBQUM4QjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHR04sZUFBZSxDQUFDTyxHQUFoQixDQUFvQixVQUFDQyxDQUFELEVBQUdDLEtBQUgsRUFBVztBQUM5Qiw0QkFDRSw4REFBQyw0Q0FBRDtBQUVFLGNBQUksRUFBRUQsQ0FGUjtBQUdFLGlCQUFPLEVBQUUzQjtBQUhYLFdBQ080QixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFNRCxPQVBBLENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQSxrQkFESjtBQTBCRDs7R0EvRHVCbEM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcXVpei9RdWVzdGlvbi50c3g/Zjk4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5zd2VyIGZyb20gJy4vQW5zd2VyJztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFpT3V0bGluZUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cbmludGVyZmFjZSBJUXVlc3Rpb24ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGluZm86c3RyaW5nO1xuICBhbnN3ZXJfYXJyYXk6c3RyaW5nW107XG4gIGdhbWVQb2ludEY6RnVuY3Rpb247XG4gIGFjdGl2ZUNhdGVnb3J5RjpGdW5jdGlvbjtcbiAgcG9pbnQ6bnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVzdGlvbihkYXRhOklRdWVzdGlvbikge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdPXVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtyZXN1bHQsc2V0UmVzdWx0XT11c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAvLyBRdWVzdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHRlc3Qgb2YgdHJ1ZSBhbnN3ZXJcbiAgLy8gSSBwYXNzIGFuc3dlckYgZG93biB0byB0aGUgYW5zd2Vycywgd2hpY2ggY2FsbHMgdGhpcyBmdW5jdGlvblxuICAvLyB0byB0ZXN0IHJpZ3RoIG9yIHdyb25nXG4gIC8vIFRoZW4gSSByZXNldCB0aGUgZ2FtZVBvaW50IChHYW1lLXN0YXRlKVxuICBjb25zdCBhbnN3ZXJGPShhbnN3ZXI6c3RyaW5nKT0+e1xuICAgIC8vIFRoZSByaWdodCBhbnN3ZXIgaXMgYWxsd2F5cyB0aGUgZmlyc3QgYW5zd2VyIGluIHRoZSBKU09OLWZpbGUgKGJlZm9yZSByYW5kb20gb3JkZXIpXG4gICAgaWYoYW5zd2VyPT09ZGF0YS5hbnN3ZXJfYXJyYXlbMF0pe1xuICAgICAgZGF0YS5nYW1lUG9pbnRGKGRhdGEucG9pbnQpO1xuICAgICAgc2V0UmVzdWx0KFwicmlnaHRcIik7XG4gICAgfWVsc2V7XG4gICAgICBkYXRhLmdhbWVQb2ludEYoLWRhdGEucG9pbnQpO1xuICAgICAgc2V0UmVzdWx0KFwid3JvbmdcIik7XG4gICAgfVxuICAgIHNldEFjdGl2ZSgzKTtcbiAgICBkYXRhLmFjdGl2ZUNhdGVnb3J5RigpO1xuICB9XG4gIC8vIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggYW4gYXJyYXkgYW5kIGl0IHJldHVybnMgdGhlIGFycmF5IGluIGEgcmFuZG9tIG9yZGVyXG4gIGNvbnN0IHJhbmRvbUY9KGFuc3dlcnM6c3RyaW5nW10pPT4ge1xuICAgIGNvbnN0IGNvdW50Om51bWJlciA9IGFuc3dlcnMubGVuZ3RoO1xuICAgIGNvbnN0IHN0YXJ0QXJyYXkgPSBbXTtcbiAgICBjb25zdCBzbHV0QXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIHN0YXJ0QXJyYXlbaV0gPSBpO1xuICAgIH1cbiAgICB3aGlsZSAoc3RhcnRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdG1wVGFsID0gTWF0aC5yYW5kb20oKSAqIHN0YXJ0QXJyYXkubGVuZ3RoO1xuICAgICAgdG1wVGFsID0gTWF0aC5mbG9vcih0bXBUYWwpO1xuICAgICAgc2x1dEFycmF5LnB1c2goYW5zd2Vyc1tzdGFydEFycmF5W3RtcFRhbF1dKTtcbiAgICAgIHN0YXJ0QXJyYXkuc3BsaWNlKHRtcFRhbCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBzbHV0QXJyYXk7XG4gIH1cbiAgLy8gVGhlIG9yZGVyIG9mZiBhbnN3ZXJzIGlzIHNodWZsZWRcbiAgY29uc3QgdG1wQW5zd2Vyc0FycmF5PXJhbmRvbUYoZGF0YS5hbnN3ZXJfYXJyYXkpO1xuICByZXR1cm4oXG4gICAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyhyZXN1bHQhPT1cIlwiKT8ocmVzdWx0PT09XCJyaWdodFwiKT91dGlsU3R5bGVzLnJpZ2h0OnV0aWxTdHlsZXMuaW5hY3RpdmU6XCJcIn0+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPXsoYWN0aXZlPT09MyAmJiByZXN1bHQ9PT1cIndyb25nXCIpP3V0aWxTdHlsZXMuYnV0dG9uK1wiIFwiOnV0aWxTdHlsZXMuYnV0dG9ufSBcbiAgICAgICAgICAvLyBUaGUgcXVlc3Rpb24gaXMgYWN0aXZhdGVkIGFuZCBzaG93IGFuc3dlcnNcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+eyhhY3RpdmU9PT0xKT9zZXRBY3RpdmUoMik6XCJcIn19PlxuICAgICAgICAgIHtkYXRhLnBvaW50fVxuICAgICAgICAgIHsocmVzdWx0PT09XCJyaWdodFwiKT88QWlPdXRsaW5lQ2hlY2svPjpcIlwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyhhY3RpdmUhPTIpP3V0aWxTdHlsZXMuaGlkZVF1ZXN0aW9uOlwiXCJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnF1ZXN0aW9uVGV4dH0+e2RhdGEudGV4dH08L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAge3RtcEFuc3dlcnNBcnJheS5tYXAoKGEsaW5kZXgpPT57XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxBbnN3ZXJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRleHQ9e2F9XG4gICAgICAgICAgICAgICAgYW5zd2VyRj17YW5zd2VyRn1cbiAgICAgICAgICAgICAgLz4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgICAgICkgIFxufVxuIl0sIm5hbWVzIjpbIkFuc3dlciIsInV0aWxTdHlsZXMiLCJ1c2VTdGF0ZSIsIkFpT3V0bGluZUNoZWNrIiwiUXVlc3Rpb24iLCJkYXRhIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiYW5zd2VyRiIsImFuc3dlciIsImFuc3dlcl9hcnJheSIsImdhbWVQb2ludEYiLCJwb2ludCIsImFjdGl2ZUNhdGVnb3J5RiIsInJhbmRvbUYiLCJhbnN3ZXJzIiwiY291bnQiLCJsZW5ndGgiLCJzdGFydEFycmF5Iiwic2x1dEFycmF5IiwiaSIsInRtcFRhbCIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInB1c2giLCJzcGxpY2UiLCJ0bXBBbnN3ZXJzQXJyYXkiLCJyaWdodCIsImluYWN0aXZlIiwiYnV0dG9uIiwiaGlkZVF1ZXN0aW9uIiwicXVlc3Rpb25UZXh0IiwidGV4dCIsIm1hcCIsImEiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/quiz/Question.tsx\n");

/***/ })

});