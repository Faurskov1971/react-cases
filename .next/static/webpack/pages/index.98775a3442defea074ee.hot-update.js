"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/basivModal.js":
/*!**********************************!*\
  !*** ./components/basivModal.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicModal; }\n/* harmony export */ });\n/* harmony import */ var _Users_faurskov_Documents_projekter_faurskov_com_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Modal */ \"./node_modules/@mui/material/Modal/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/faurskov/Documents/projekter/faurskov.com_2021/components/basivModal.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4\n};\nvar green = {\n  color: \"green\"\n};\nfunction BasicModal(_ref) {\n  _s();\n\n  var teaser = _ref.teaser,\n      head = _ref.head,\n      content = _ref.content;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),\n      _React$useState2 = (0,_Users_faurskov_Documents_projekter_faurskov_com_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleOpen = function handleOpen() {\n    return setOpen(true);\n  };\n\n  var handleClose = function handleClose() {\n    return setOpen(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      style: {\n        color: \"red\"\n      },\n      children: teaser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n      onClick: handleOpen,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaInfoCircle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 37\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {\n      open: open,\n      onClose: handleClose,\n      \"aria-labelledby\": \"modal-modal-title\",\n      \"aria-describedby\": \"modal-modal-description\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n        sx: style,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {\n          id: \"modal-modal-title\",\n          variant: \"h6\",\n          component: \"h2\",\n          children: head\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {\n          id: \"modal-modal-description\",\n          sx: {\n            mt: 2\n          },\n          children: content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_s(BasicModal, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n\n_c = BasicModal;\n\nvar _c;\n\n$RefreshReg$(_c, \"BasicModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhc2l2TW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sS0FBSyxHQUFHO0FBQ1pDLEVBQUFBLFFBQVEsRUFBRSxVQURFO0FBRVpDLEVBQUFBLEdBQUcsRUFBRSxLQUZPO0FBR1pDLEVBQUFBLElBQUksRUFBRSxLQUhNO0FBSVpDLEVBQUFBLFNBQVMsRUFBRSx1QkFKQztBQUtaQyxFQUFBQSxLQUFLLEVBQUUsR0FMSztBQU1aQyxFQUFBQSxPQUFPLEVBQUUsa0JBTkc7QUFPWkMsRUFBQUEsTUFBTSxFQUFFLGdCQVBJO0FBUVpDLEVBQUFBLFNBQVMsRUFBRSxFQVJDO0FBU1pDLEVBQUFBLENBQUMsRUFBRTtBQVRTLENBQWQ7QUFXQSxJQUFNQyxLQUFLLEdBQUc7QUFDWkMsRUFBQUEsS0FBSyxFQUFDO0FBRE0sQ0FBZDtBQUllLFNBQVNDLFVBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVOztBQUN4RCx3QkFBd0JyQiwyQ0FBQSxDQUFlLEtBQWYsQ0FBeEI7QUFBQTtBQUFBLE1BQU91QixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ELE9BQU8sQ0FBQyxJQUFELENBQWI7QUFBQSxHQUFuQjs7QUFDQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1GLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxHQUFwQjs7QUFFQSxzQkFDRTtBQUFBLDRCQUNBO0FBQU0sV0FBSyxFQUFFO0FBQUNQLFFBQUFBLEtBQUssRUFBRTtBQUFSLE9BQWI7QUFBQSxnQkFBOEJFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVFLDhEQUFDLHlEQUFEO0FBQVMsYUFBTyxFQUFFTSxVQUFsQjtBQUFBLDZCQUE4Qiw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLHdEQUFEO0FBQ0UsVUFBSSxFQUFFRixJQURSO0FBRUUsYUFBTyxFQUFFRyxXQUZYO0FBR0UseUJBQWdCLG1CQUhsQjtBQUlFLDBCQUFpQix5QkFKbkI7QUFBQSw2QkFNRSw4REFBQyxzREFBRDtBQUFLLFVBQUUsRUFBRXBCLEtBQVQ7QUFBQSxnQ0FDRSw4REFBQyw2REFBRDtBQUFZLFlBQUUsRUFBQyxtQkFBZjtBQUFtQyxpQkFBTyxFQUFDLElBQTNDO0FBQWdELG1CQUFTLEVBQUMsSUFBMUQ7QUFBQSxvQkFDR2M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUsOERBQUMsNkRBQUQ7QUFBWSxZQUFFLEVBQUMseUJBQWY7QUFBeUMsWUFBRSxFQUFFO0FBQUVPLFlBQUFBLEVBQUUsRUFBRTtBQUFOLFdBQTdDO0FBQUEsb0JBQ0dOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBMUJ1Qkg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmFzaXZNb2RhbC5qcz82MmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTW9kYWwnO1xuaW1wb3J0IHsgRmFJbmZvQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzUwJScsXG4gIGxlZnQ6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICB3aWR0aDogNDAwLFxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXG4gIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcbiAgYm94U2hhZG93OiAyNCxcbiAgcDogNCxcbn07XG5jb25zdCBncmVlbiA9IHtcbiAgY29sb3I6XCJncmVlblwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY01vZGFsKHt0ZWFzZXIsaGVhZCxjb250ZW50fSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e3RlYXNlcn08L3NwYW4+XG4gICAgICA8QnV0dG9uICBvbkNsaWNrPXtoYW5kbGVPcGVufT48RmFJbmZvQ2lyY2xlLz48L0J1dHRvbj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxuICAgICAgPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgICB7aGVhZH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiIHN4PXt7IG10OiAyIH19PlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJGYUluZm9DaXJjbGUiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsInAiLCJncmVlbiIsImNvbG9yIiwiQmFzaWNNb2RhbCIsInRlYXNlciIsImhlYWQiLCJjb250ZW50IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/basivModal.js\n");

/***/ })

});