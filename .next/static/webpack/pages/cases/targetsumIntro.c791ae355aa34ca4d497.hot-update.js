"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cases/targetsumIntro",{

/***/ "./components/basicModal.js":
/*!**********************************!*\
  !*** ./components/basicModal.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicModal; }\n/* harmony export */ });\n/* harmony import */ var _Users_faurskov_Documents_projekter_faurskov_com_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Modal */ \"./node_modules/@mui/material/Modal/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/faurskov/Documents/projekter/faurskov.com_2021/components/basicModal.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4\n};\nvar buttonStyle = {\n  color: \"#b4bf5e\",\n  width: \"40px\",\n  height: \"40px\",\n  fontSize: \"24px\"\n};\nfunction BasicModal(_ref) {\n  _s();\n\n  var _this = this;\n\n  var teaser = _ref.teaser,\n      head = _ref.head,\n      why = _ref.why,\n      how = _ref.how,\n      features = _ref.features;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),\n      _React$useState2 = (0,_Users_faurskov_Documents_projekter_faurskov_com_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleOpen = function handleOpen() {\n    return setOpen(true);\n  };\n\n  var handleClose = function handleClose() {\n    return setOpen(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      style: {\n        color: \"#b4bf5e\",\n        fontSize: \"20px\"\n      },\n      children: teaser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n      onClick: handleOpen,\n      style: buttonStyle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaInfoCircle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {\n      open: open,\n      onClose: handleClose,\n      \"aria-labelledby\": \"modal-modal-title\",\n      \"aria-describedby\": \"modal-modal-description\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n        sx: style,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {\n          id: \"modal-modal-title\",\n          variant: \"h6\",\n          component: \"h2\",\n          children: head\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {\n          id: \"modal-modal-description\",\n          sx: {\n            mt: 2\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"strong\", {\n            children: \"WHY\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), why, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"strong\", {\n            children: \"HOW\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this), how, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"strong\", {\n            children: \"Features\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n            children: features.map(function (feature) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n                children: feature\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 26\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(BasicModal, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n\n_c = BasicModal;\n\nvar _c;\n\n$RefreshReg$(_c, \"BasicModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBLGtCQVRGLEVBVUdDLEdBVkgsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLGVBY0U7QUFBQSxzQkFFSUMsUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQUMsT0FBTyxFQUFFO0FBQ3BCLGtDQUFPO0FBQUEsMEJBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUNELGFBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQSxrQkFERjtBQStDRDs7R0FwRHVCYjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNpY01vZGFsLmpzP2QyNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Nb2RhbCc7XG5pbXBvcnQgeyBGYUluZm9DaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnNTAlJyxcbiAgbGVmdDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gIHdpZHRoOiA0MDAsXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcbiAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxuICBib3hTaGFkb3c6IDI0LFxuICBwOiA0LFxufTtcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICBjb2xvcjogXCIjYjRiZjVlXCIsXG4gIHdpZHRoOlwiNDBweFwiLFxuICBoZWlnaHQ6XCI0MHB4XCIsXG4gIGZvbnRTaXplOlwiMjRweFwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY01vZGFsKHt0ZWFzZXIsaGVhZCx3aHksaG93LGZlYXR1cmVzfSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aHIgLz5cbiAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiNiNGJmNWVcIixmb250U2l6ZTpcIjIwcHhcIn19Pnt0ZWFzZXJ9PC9zcGFuPlxuICAgICAgPEJ1dHRvbiAgXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW59XG4gICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cbiAgICAgICAgPjxGYUluZm9DaXJjbGUvPjwvQnV0dG9uPlxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgIGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiBcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiIFxuICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgIHtoZWFkfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBcbiAgICAgICAgICAgIGlkPVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgIHN4PXt7IG10OiAyIH19PlxuICAgICAgICAgICAgPHN0cm9uZz5XSFk8L3N0cm9uZz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICB7d2h5fVxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8c3Ryb25nPkhPVzwvc3Ryb25nPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIHtob3d9XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxzdHJvbmc+RmVhdHVyZXM8L3N0cm9uZz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVzLm1hcChmZWF0dXJlPT57XG4gICAgICAgICAgICAgICAgICByZXR1cm4oPGxpPntmZWF0dXJlfTwvbGk+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkZhSW5mb0NpcmNsZSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwicCIsImJ1dHRvblN0eWxlIiwiY29sb3IiLCJoZWlnaHQiLCJmb250U2l6ZSIsIkJhc2ljTW9kYWwiLCJ0ZWFzZXIiLCJoZWFkIiwid2h5IiwiaG93IiwiZmVhdHVyZXMiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwibXQiLCJtYXAiLCJmZWF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/basicModal.js\n");

/***/ }),

/***/ "./pages/cases/targetsumIntro.tsx":
/*!****************************************!*\
  !*** ./pages/cases/targetsumIntro.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TargetsumIntro; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_targetsum_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/targetsum/index */ \"./components/targetsum/index.tsx\");\n/* harmony import */ var _components_basicModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/basicModal */ \"./components/basicModal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/faurskov/Documents/projekter/faurskov.com_2021/pages/cases/targetsumIntro.tsx\";\n\n\n\n\n\n\nfunction TargetsumIntro() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n          children: \"Case med Target Sum\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_targetsum_index__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_basicModal__WEBPACK_IMPORTED_MODULE_3__.default, {\n        teaser: \"Why and how:\",\n        head: \"The Target Sum\",\n        why: \"\",\n        how: \"\",\n        features: [\"\", \"\", \"\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }, this)\n  }, void 0, false);\n}\n_c = TargetsumIntro;\n\nvar _c;\n\n$RefreshReg$(_c, \"TargetsumIntro\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXNlcy90YXJnZXRzdW1JbnRyby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxjQUFULEdBQTBCO0FBQ3ZDLHNCQUNFO0FBQUEsMkJBQ0EsOERBQUMsdURBQUQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0UsOERBQUMsMkRBQUQ7QUFDRSxjQUFNLEVBQUMsY0FEVDtBQUVFLFlBQUksRUFBQyxnQkFGUDtBQUdFLFdBQUcsRUFBQyxFQUhOO0FBSUUsV0FBRyxFQUFDLEVBSk47QUFLRSxnQkFBUSxFQUFFLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxFQUFQO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURGO0FBaUJEO0tBbEJ1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzZXMvdGFyZ2V0c3VtSW50cm8udHN4P2I4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEdhbWVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YXJnZXRzdW0vaW5kZXgnO1xuaW1wb3J0IEJhc2ljTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXNpY01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFyZ2V0c3VtSW50cm8oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYXNlIG1lZCBUYXJnZXQgU3VtPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHYW1lQ29udGFpbmVyLz5cbiAgICAgIDxCYXNpY01vZGFsXG4gICAgICAgIHRlYXNlcj1cIldoeSBhbmQgaG93OlwiXG4gICAgICAgIGhlYWQ9XCJUaGUgVGFyZ2V0IFN1bVwiXG4gICAgICAgIHdoeT1cIlwiXG4gICAgICAgIGhvdz1cIlwiXG4gICAgICAgIGZlYXR1cmVzPXtbXCJcIixcIlwiLFwiXCJdfVxuICAgICAgICAvPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJMYXlvdXQiLCJHYW1lQ29udGFpbmVyIiwiQmFzaWNNb2RhbCIsIlRhcmdldHN1bUludHJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cases/targetsumIntro.tsx\n");

/***/ })

});