(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_email_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-email-editor */ "react-email-editor");
/* harmony import */ var react_email_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_email_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Tenzin Sherap\\Desktop\\suscin-proj\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Index extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "exportHtml", () => {
      this.editor.exportHtml(data => {
        const {
          design,
          html
        } = data;
      });
    });

    _defineProperty(this, "saveDesign", () => {
      const url = process.env.SHOPIFY_APP_URL;
      this.exportHtml();
      this.editor.saveDesign(design => {
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

    this.saveDesign = this.saveDesign.bind(this);
    this.exportHtml = this.exportHtml.bind(this);
  }

  render() {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_email_editor__WEBPACK_IMPORTED_MODULE_1___default()), {
        ref: editor => this.editor = editor
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

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-email-editor":
/*!*************************************!*\
  !*** external "react-email-editor" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-email-editor");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXNjaW4tcHJvai8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3N1c2Npbi1wcm9qL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdXNjaW4tcHJvai9leHRlcm5hbCBcInJlYWN0LWVtYWlsLWVkaXRvclwiIiwid2VicGFjazovL3N1c2Npbi1wcm9qL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlZGl0b3IiLCJleHBvcnRIdG1sIiwiZGF0YSIsImRlc2lnbiIsImh0bWwiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiU0hPUElGWV9BUFBfVVJMIiwic2F2ZURlc2lnbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FBTixTQUFvQkMsd0RBQXBCLENBQW9DO0FBRWxDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQix3Q0FPTixNQUFNO0FBQ2pCLFdBQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1QkMsSUFBSSxJQUFJO0FBQzdCLGNBQU07QUFBRUMsZ0JBQUY7QUFBVUM7QUFBVixZQUFtQkYsSUFBekI7QUFDRCxPQUZEO0FBR0QsS0FYa0I7O0FBQUEsd0NBWU4sTUFBTTtBQUNqQixZQUFNRyxHQUFHLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUF2QjtBQUNBLFdBQUtQLFVBQUw7QUFDQSxXQUFLRCxNQUFMLENBQVlTLFVBQVosQ0FBdUJOLE1BQU0sSUFBSTtBQUMvQk8sYUFBSyxDQUFDLG9DQUFELEVBQXVDO0FBQzFDQyxnQkFBTSxFQUFFLE1BRGtDO0FBRTFDQyxpQkFBTyxFQUFFO0FBQ1AsNEJBQWdCO0FBRFQsV0FGaUM7QUFLMUNDLGNBQUksRUFBRVY7QUFMb0MsU0FBdkMsQ0FBTDtBQU9FVyxlQUFPLENBQUNDLEdBQVIsQ0FBWVosTUFBWjtBQUNELE9BVEg7QUFVQyxLQXpCZ0I7O0FBR2pCLFNBQUtNLFVBQUwsR0FBZ0IsS0FBS0EsVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUIsSUFBckIsQ0FBaEI7QUFDQSxTQUFLZixVQUFMLEdBQWdCLEtBQUtBLFVBQUwsQ0FBZ0JlLElBQWhCLENBQXFCLElBQXJCLENBQWhCO0FBQ0Q7O0FBd0JIQyxRQUFNLEdBQ047QUFDRSx3QkFDQztBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0E7QUFBUSxlQUFPLEVBQUUsS0FBS1IsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQUlBLDhEQUFDLDJEQUFEO0FBQ0EsV0FBRyxFQUFFVCxNQUFNLElBQUksS0FBS0EsTUFBTCxHQUFjQTtBQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFVRDs7QUEzQ21DOztBQStDcEMsK0RBQWVKLEtBQWYsRTs7Ozs7Ozs7Ozs7QUNqREEsbUM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1haWxFZGl0b3IgZnJvbSAncmVhY3QtZW1haWwtZWRpdG9yJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gXHJcbiAgICB0aGlzLnNhdmVEZXNpZ249dGhpcy5zYXZlRGVzaWduLmJpbmQodGhpcykgIFxyXG4gICAgdGhpcy5leHBvcnRIdG1sPXRoaXMuZXhwb3J0SHRtbC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBleHBvcnRIdG1sID0gKCkgPT4ge1xyXG4gICAgdGhpcy5lZGl0b3IuZXhwb3J0SHRtbChkYXRhID0+IHtcclxuICAgICAgY29uc3QgeyBkZXNpZ24sIGh0bWwgfSA9IGRhdGFcclxuICAgIH0pXHJcbiAgfVxyXG4gIHNhdmVEZXNpZ24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmw9IHByb2Nlc3MuZW52LlNIT1BJRllfQVBQX1VSTDtcclxuICAgIHRoaXMuZXhwb3J0SHRtbCgpO1xyXG4gICAgdGhpcy5lZGl0b3Iuc2F2ZURlc2lnbihkZXNpZ24gPT4ge1xyXG4gICAgICBmZXRjaCgnLz9zaG9wPWtoYW1wYTU5Lm15c2hvcGlmeS5jb20vc2F2ZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBkZXNpZ25cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlc2lnbilcclxuICAgICAgfSlcclxuICAgIH1cclxuICBcclxuICBcclxuICBcclxucmVuZGVyKClcclxue1xyXG4gIHJldHVybihcclxuICAgPGRpdj5cclxuICAgPGJ1dHRvbiA+Q3JlYXRlPC9idXR0b24+XHJcbiAgIDxidXR0b24gPkVkaXQ8L2J1dHRvbj5cclxuICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNhdmVEZXNpZ259PlNhdmU8L2J1dHRvbj5cclxuICAgPEVtYWlsRWRpdG9yXHJcbiAgIHJlZj17ZWRpdG9yID0+IHRoaXMuZWRpdG9yID0gZWRpdG9yfVxyXG4gICAvPlxyXG4gICA8L2Rpdj5cclxuICApXHJcbn1cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVtYWlsLWVkaXRvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9