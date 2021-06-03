self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_email_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-email-editor */ "./node_modules/react-email-editor/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");








var _jsxFileName = "C:\\Users\\Tenzin Sherap\\Desktop\\suscin-proj\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Index = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Index);

    _this = _super.call(this, props);

    (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "exportHtml", function () {
      _this.editor.exportHtml(function (data) {
        var design = data.design,
            html = data.html;
      });
    });

    (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "saveDesign", function () {
      var url = process.env.SHOPIFY_APP_URL;

      _this.exportHtml();

      _this.editor.saveDesign(function (design) {
        fetch('/?shop=khampa59.myshopify.com/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: design
        });
        console.log(design);
      });
    });

    _this.saveDesign = _this.saveDesign.bind((0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.exportHtml = _this.exportHtml.bind((0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    return _this;
  }

  (0,C_Users_Tenzin_Sherap_Desktop_suscin_proj_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "Create"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: this.saveDesign,
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_email_editor__WEBPACK_IMPORTED_MODULE_8__.default, {
          ref: function ref(editor) {
            return _this2.editor = editor;
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 4
      }, this);
    }
  }]);

  return Index;
}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImVkaXRvciIsImV4cG9ydEh0bWwiLCJkYXRhIiwiZGVzaWduIiwiaHRtbCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJTSE9QSUZZX0FQUF9VUkwiLCJzYXZlRGVzaWduIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFDTUEsSzs7Ozs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsbVRBT04sWUFBTTtBQUNqQixZQUFLQyxNQUFMLENBQVlDLFVBQVosQ0FBdUIsVUFBQUMsSUFBSSxFQUFJO0FBQUEsWUFDckJDLE1BRHFCLEdBQ0pELElBREksQ0FDckJDLE1BRHFCO0FBQUEsWUFDYkMsSUFEYSxHQUNKRixJQURJLENBQ2JFLElBRGE7QUFFOUIsT0FGRDtBQUdELEtBWGtCOztBQUFBLG1UQVlOLFlBQU07QUFDakIsVUFBTUMsR0FBRyxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBdkI7O0FBQ0EsWUFBS1AsVUFBTDs7QUFDQSxZQUFLRCxNQUFMLENBQVlTLFVBQVosQ0FBdUIsVUFBQU4sTUFBTSxFQUFJO0FBQy9CTyxhQUFLLENBQUMsb0NBQUQsRUFBdUM7QUFDMUNDLGdCQUFNLEVBQUUsTUFEa0M7QUFFMUNDLGlCQUFPLEVBQUU7QUFDUCw0QkFBZ0I7QUFEVCxXQUZpQztBQUsxQ0MsY0FBSSxFQUFFVjtBQUxvQyxTQUF2QyxDQUFMO0FBT0VXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWixNQUFaO0FBQ0QsT0FUSDtBQVVDLEtBekJnQjs7QUFHakIsVUFBS00sVUFBTCxHQUFnQixNQUFLQSxVQUFMLENBQWdCTyxJQUFoQix3SkFBaEI7QUFDQSxVQUFLZixVQUFMLEdBQWdCLE1BQUtBLFVBQUwsQ0FBZ0JlLElBQWhCLHdKQUFoQjtBQUppQjtBQUtsQjs7Ozs2QkF5Qkg7QUFBQTs7QUFDRSwwQkFDQztBQUFBLGdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFHQTtBQUFRLGlCQUFPLEVBQUUsS0FBS1AsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEEsZUFJQSw4REFBQyx1REFBRDtBQUNBLGFBQUcsRUFBRSxhQUFBVCxNQUFNO0FBQUEsbUJBQUksTUFBSSxDQUFDQSxNQUFMLEdBQWNBLE1BQWxCO0FBQUE7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBVUQ7Ozs7RUEzQ21CaUIsd0Q7O0FBK0NwQiwrREFBZW5CLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjIzNDhlOWM5ODUwZmU2YWJmNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbWFpbEVkaXRvciBmcm9tICdyZWFjdC1lbWFpbC1lZGl0b3InXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiBcclxuICAgIHRoaXMuc2F2ZURlc2lnbj10aGlzLnNhdmVEZXNpZ24uYmluZCh0aGlzKSAgXHJcbiAgICB0aGlzLmV4cG9ydEh0bWw9dGhpcy5leHBvcnRIdG1sLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGV4cG9ydEh0bWwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmVkaXRvci5leHBvcnRIdG1sKGRhdGEgPT4ge1xyXG4gICAgICBjb25zdCB7IGRlc2lnbiwgaHRtbCB9ID0gZGF0YVxyXG4gICAgfSlcclxuICB9XHJcbiAgc2F2ZURlc2lnbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVybD0gcHJvY2Vzcy5lbnYuU0hPUElGWV9BUFBfVVJMO1xyXG4gICAgdGhpcy5leHBvcnRIdG1sKCk7XHJcbiAgICB0aGlzLmVkaXRvci5zYXZlRGVzaWduKGRlc2lnbiA9PiB7XHJcbiAgICAgIGZldGNoKCcvP3Nob3A9a2hhbXBhNTkubXlzaG9waWZ5LmNvbS9zYXZlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGRlc2lnblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coZGVzaWduKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG5yZW5kZXIoKVxyXG57XHJcbiAgcmV0dXJuKFxyXG4gICA8ZGl2PlxyXG4gICA8YnV0dG9uID5DcmVhdGU8L2J1dHRvbj5cclxuICAgPGJ1dHRvbiA+RWRpdDwvYnV0dG9uPlxyXG4gICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZURlc2lnbn0+U2F2ZTwvYnV0dG9uPlxyXG4gICA8RW1haWxFZGl0b3JcclxuICAgcmVmPXtlZGl0b3IgPT4gdGhpcy5lZGl0b3IgPSBlZGl0b3J9XHJcbiAgIC8+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9