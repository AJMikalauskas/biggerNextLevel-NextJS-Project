webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId]\\index.js";
// This is the meetup detail page -> localhost:3000/anything
// This is except for specified things such as the localhost:3000/new-meetup
// see how this route is got to by MeetupItem.js
// Default Data for now, will be fetched from backend in the future
// Store in MeetupDetail.js and add styles via MeetupDetail.module.css
// Don't create JSX in this page, outsource to components
// change everything to props to make it dynamic, dispkays what is sent in from here,
// could be helpful for fetching data from backend too???




function MeetupDetails(props) {
  return (
    /*#__PURE__*/
    // These dynamic props are from the getStaticProps function return from below
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: props.meetupData.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__["default"], {
        image: props.meetupData.image,
        title: props.meetupData.title,
        address: props.meetupData.address,
        description: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)
  );
} // since it's mainly based on the concept of pre-render process, dynamic routes 
// need to be regenerated on new dynamic routes that are created or written by the user


_c = MeetupDetails;
;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDSTtBQUNJO0FBQ1I7QUFDSTtBQUNJO0FBQ0k7QUFDQTtBQUVaO0FBRUE7QUFDQTs7QUFDQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUUxQjtBQUFBO0FBQ0k7QUFDQSx5RUFBQyw4Q0FBRDtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0k7QUFBQSxvQkFBUUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUEscUVBQUMsd0VBQUQ7QUFBZ0IsYUFBSyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFLEtBQXhDO0FBQ0EsYUFBSyxFQUFFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBRHhCO0FBQytCLGVBQU8sRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCRyxPQUR6RDtBQUNrRSxtQkFBVyxFQUFFSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJJO0FBRGhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVVILEMsQ0FFRDtBQUNJOzs7S0FmS04sYTtBQThGUjs7QUFFY0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS45NzNmNWUyODQ2NDI5MGE1N2U5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB0aGUgbWVldHVwIGRldGFpbCBwYWdlIC0+IGxvY2FsaG9zdDozMDAwL2FueXRoaW5nXHJcbiAgICAvLyBUaGlzIGlzIGV4Y2VwdCBmb3Igc3BlY2lmaWVkIHRoaW5ncyBzdWNoIGFzIHRoZSBsb2NhbGhvc3Q6MzAwMC9uZXctbWVldHVwXHJcbiAgICAgICAgLy8gc2VlIGhvdyB0aGlzIHJvdXRlIGlzIGdvdCB0byBieSBNZWV0dXBJdGVtLmpzXHJcbi8vIERlZmF1bHQgRGF0YSBmb3Igbm93LCB3aWxsIGJlIGZldGNoZWQgZnJvbSBiYWNrZW5kIGluIHRoZSBmdXR1cmVcclxuICAgIC8vIFN0b3JlIGluIE1lZXR1cERldGFpbC5qcyBhbmQgYWRkIHN0eWxlcyB2aWEgTWVldHVwRGV0YWlsLm1vZHVsZS5jc3NcclxuICAgICAgICAvLyBEb24ndCBjcmVhdGUgSlNYIGluIHRoaXMgcGFnZSwgb3V0c291cmNlIHRvIGNvbXBvbmVudHNcclxuICAgICAgICAgICAgLy8gY2hhbmdlIGV2ZXJ5dGhpbmcgdG8gcHJvcHMgdG8gbWFrZSBpdCBkeW5hbWljLCBkaXNwa2F5cyB3aGF0IGlzIHNlbnQgaW4gZnJvbSBoZXJlLFxyXG4gICAgICAgICAgICAvLyBjb3VsZCBiZSBoZWxwZnVsIGZvciBmZXRjaGluZyBkYXRhIGZyb20gYmFja2VuZCB0b28/Pz9cclxuXHJcbmltcG9ydCAgTWVldHVwRGV0YWlsICBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsJ1xyXG5pbXBvcnQgIHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gVGhlc2UgZHluYW1pYyBwcm9wcyBhcmUgZnJvbSB0aGUgZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb24gcmV0dXJuIGZyb20gYmVsb3dcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TWVldHVwRGV0YWlsICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9IGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc30gZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIHNpbmNlIGl0J3MgbWFpbmx5IGJhc2VkIG9uIHRoZSBjb25jZXB0IG9mIHByZS1yZW5kZXIgcHJvY2VzcywgZHluYW1pYyByb3V0ZXMgXHJcbiAgICAvLyBuZWVkIHRvIGJlIHJlZ2VuZXJhdGVkIG9uIG5ldyBkeW5hbWljIHJvdXRlcyB0aGF0IGFyZSBjcmVhdGVkIG9yIHdyaXR0ZW4gYnkgdGhlIHVzZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vWGFuZGVyX01pazpJc2FpYWg1NUBjbHVzdGVyMC5oanV1bi5tb25nb2RiLm5ldC90ZXN0RGI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpO1xyXG4gICAgLy8gZ2V0IGhvbGQgb2YgZGF0YWJhc2UgYnk6XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIC8vIGdldCBhY2Nlc3MgdG8gbWVldHVwcyBjb2xsZWN0aW9uIHdoaWNoIGlzIGluIHRoZSBEQiAtPiBOb1NRTCBEQiBjb2xsZWN0aW9ucyBmdWxsIG9mIGRvY3VtZW50cyBpbiBNb25nb0RCXHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgICAvLyBXb3JrIG9uIHRoZSAuZmluZCgpIHRvIGdldCBhbGwgX2lkIGZpZWxkIHZhbHVlcyBmcm9tIHRoZSBNb25nb0RCXHJcbiAgICAgICAgLy8gMXN0IHBhcmFtIGlzIHRvIGZpbHRlciBvdXQgc3BlY2lmaWMgZG9jdW1lbnRzXHJcbiAgICAgICAgLy8gMm5kIHBhcmFtIGlzIHRvIGZpbHRlciBvdXQgZmllbGRzIGluIHRoZSBkb2N1bWVudHNcclxuICAgICAgICAgICAgLy8gYnkgdHlwaW5nIGluIF9pZDoxLCByZXR1cm5zIG9ubHkgMSBmaWVsZCB3aGljaCBpcyB0aGUgX2lkIGZpZWxkIGZvciBhbGwgZG9jdW1lbnQgc2luY2Ugbm8gZmlsdGVyIG9uIGRvY3VtZW50c1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRvIEFycmF5LCBhbmQgbm93IHBvcHVsYXRlIHBhdGhzIG9iamVjdCBiZWxvdyB3aXRoIHRoZXNlIGJ5IC5tYXAoKS5cclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7X2lkOjF9KS50b0FycmF5KCk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gLm1hcCgpIHRvIGFuIG9iamVjdCB3aXRoIGEga2V5IG9mIHBhcmFtcyBzZXQgZXF1YWwgdG8gXHJcbiAgICAgICAgICAgIC8vLyB0aGUgdmFsdWUgb2YgYW4gb2JqZWN0IHdoaWNoIGNvbnRhaW5zIG1lZXR1cElkIGFzIGEga2V5IGFuZCBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgYXMgYSB2YWx1ZSB0byBpdFxyXG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGFkZCBjb21tYSBjb3JyZWN0bHkgYWZ0ZXIgcGFyYW1zIHZhbHVlIG9iamVjdFxyXG4gICAgICAgIC8vIHJlcGxpY2F0ZSB0aGUgaGFyZGNvZGVkIHZhbHVlcyBiZWxvdy5cclxuICAgICAgICBwYXRoczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7IHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXHJcbiAgICB9KSkgLFxyXG4gICAgICAgIC8qW1xyXG4gICAgICAgICAgICBUaGVzZSBhcmUgZnJvbSB0aGUgaWQncyBpbiB0aGUgZHVtbXkgZGF0YSBpbiBpbmRleC5qcyBpbiBwYWdlcyBmb2xkZXIoU3RhcnQgUGFnZSlcclxuICAgICAgICAgICAgVGhlc2UgcGFyYW1zIGFyZSBhbnkgcG9zc2libGUgcm91dGVzIHRoYXQgY291bGQgYmUgZHluYW1pY1xyXG4gICAgICAgICAgICBUaGlzIHdpbGwgYmUgZ2VuZXJhdGVkIGxhdGVyIGluIHRoZSBiYWNrZW5kXHJcbiAgICAgICAgICAgICAgICBSZW1vdmVkIFRoZXNlIEhhcmRjb2RlZCB2YWx1ZXM6XHJcbiAgICAgICAgICAgICAgICB7IHBhcmFtczoge21lZXR1cElkOiAnbTEnLH0sfSxcclxuICAgICAgICAgICAgICAgIHtwYXJhbXM6IHttZWV0dXBJZDogJ20yJyx9LH0sXHJcbiAgICAgICAgXSwqL1xyXG4gICAgICAgIC8vIGlmIGZhbGxiYWNrIGlzIHNldCB0byBmYWxzZSwgYW55IHBhZ2UgdGhhdCBkb2Vzbid0IG1hdGNoIHRoZSBpZHMgc3VjaCBhcyBcIi9tM1wiLCB3b3VsZCByZXR1cm4gNDA0XHJcbiAgICAgICAgICAgIC8vIFwiL20xXCIgb3IgXCIvbTJcIiB3b3VsZCByZXR1cm4gcmVzcGVjdGFibGUgcGFnZXNcclxuICAgICAgICAvLyBpZiBmYWxsYmFjayBpcyBzZXQgdG8gdHJ1ZSBhbmQgdGhlIHVzZXIgZ29lcyB0byBcIi9tM1wiLCBuZXh0SnMgd2lsbCB0cnkgdG8gZ2VuZXJhdGUgYSByZWxhdGl2ZSBwYWdlIGZvciBpdFxyXG4gICAgICAgICAgICAvLyB3b3VsZG4ndCByZXR1cm4gNDA0IG9uIHVua25vd24gcm91dGUgYnV0IHJhdGhlciBuZXh0SnMgZ2VuZXJhdGVkIHBhZ2Ugb24gdGhlIGZseVxyXG4gICAgICAgICAgICAgICAgLy8gTm90IGhlbHBmdWwgaGVyZSBiZWNhdXNlIGlmIHRoZSBtZWV0dXAgZG9lc24ndCBleGlzdCBuZXh0SnMgZ2VuZXJhdGluZyB0aGUgcGFnZSB3b3VsZCBiZSBidWdneSBhbmQgdW5uZWNjZXNzYXJ5IFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpXHJcbntcclxuICAgIC8vIGZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxyXG4gICAgICAgIC8vIG1ha2UgcHJvcHMgYXMgYSBtZWV0dXBEYXRhIGZvciBwcm9wcywgd2hpY2ggaXMgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gbWFrZSBkeW5hbWljIGZvciBzcGVjaWZpYyBtZWV0dXBQYWdlcywgY2FuJ3QganVzdCBwdXQgaW4gZGF0YSBsaWtlIGR1bW15IGRhdGFcclxuICAgIC8vIFRoYXQncyB3aHkgY29udGV4dCBpcyB1c2VkIGluIHRoZSBwYXJhbSBvZiBnZXRTdGF0aWNQcm9wcygpIFxyXG4gICAgICAgIC8vIGl0IGhhcyBhIHBhcmFtcyBrZXkgLT4gcHVsbHMgZHluYW1pYyBuYW1lIGZyb20gW10gd2hpY2ggaW4gdGhpcyBjYXNlIGlzIGNhbGxlZCBcclxuICAgICAgICAgICAgLy8gYnkgW21lZXR1cElkXVxyXG4gICAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuICAgIFxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vWGFuZGVyX01pazpJc2FpYWg1NUBjbHVzdGVyMC5oanV1bi5tb25nb2RiLm5ldC90ZXN0RGI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpO1xyXG4gICAgLy8gZ2V0IGhvbGQgb2YgZGF0YWJhc2UgYnk6XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIC8vIGdldCBhY2Nlc3MgdG8gbWVldHVwcyBjb2xsZWN0aW9uIHdoaWNoIGlzIGluIHRoZSBEQiAtPiBOb1NRTCBEQiBjb2xsZWN0aW9ucyBmdWxsIG9mIGRvY3VtZW50cyBpbiBNb25nb0RCXHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgICAvLyBuZWVkIHRvIHNlbmQgdXAgcHJvcHMgdGhhdCBhcmUgZHluYW1pYyBhbmQgbm90IGhhcmRjb2RlZFxyXG4gICAgICAgIC8vIHNlbmQgdXAgYnkgZmluZGluZyBhbmQgZGlzcGxheWluZyBkYXRhIGZyb20gdGhlIHNwZWNpZmljIGlkIHBhc3NlZCBpbnRvIGhlcmUgb3IgdGhlIC5maW5kT25lKCkgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIGZpbmRzIHRoZSBkb2N1bWVudCB3aXRoIHRoZSBfaWQgd2hpY2ggaXMgaW4gdGhlIHVybCAtPiBuZWVkIHRvIGNvbnZlcnQgdG8gT2JqZWN0SWQgYXMgaXQgaXMgc2VlbiBpbiBNb25nb0RiIHRvIGZpbmQgY29ycmVjdGx5XHJcbiAgICAgICAgICAgICAgICAvLyBpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWR9IGZyb20gJ21vbmdvZGInO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtfaWQ6IE9iamVjdElkKG1lZXR1cElkKX0pO1xyXG5cclxuICAgIC8vIGNsb3NlIGNsaWVudC9EQiBhZnRlciBkb25lIHVzaW5nLlxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICAvLyBuZWVkIHRvIGNvbnZlcnQgd2VpcmQgT2JqZWN0SWQgb2YgdGhlIGRvY3VtZW50IHRvIGEgc3RyaW5nIGFnYWluIGJ5IC50b1N0cmluZygpLCBjYW4ndCBqdXN0IHNlbmQgaW4gc2VsZWN0ZWRNZWV0dXBcclxuICAgICAgICAvLyBjaGFuZ2UgaW4gdGhlIGFib3ZlIGNvbXBvbmVudCBmdW5jdGlvbiBpbiB0aGUgPE1lZXR1cERldGFpbC8+IGltcG9ydFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIGltYWdlOnNlbGVjdGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6c2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246c2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzOyJdLCJzb3VyY2VSb290IjoiIn0=