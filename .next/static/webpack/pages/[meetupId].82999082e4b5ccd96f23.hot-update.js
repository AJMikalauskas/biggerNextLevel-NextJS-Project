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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
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
        lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJtZWV0dXBEYXRhIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDSTtBQUNJO0FBQ1I7QUFDSTtBQUNJO0FBQ0k7QUFDQTtBQUVaO0FBRUE7QUFDQTs7QUFDQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUUxQjtBQUFBO0FBQ0k7QUFDQSx5RUFBQyw4Q0FBRDtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVBLHFFQUFDLHdFQUFEO0FBQWdCLGFBQUssRUFBRUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxLQUF4QztBQUNBLGFBQUssRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCRSxLQUR4QjtBQUMrQixlQUFPLEVBQUVILEtBQUssQ0FBQ0MsVUFBTixDQUFpQkcsT0FEekQ7QUFDa0UsbUJBQVcsRUFBRUosS0FBSyxDQUFDQyxVQUFOLENBQWlCSTtBQURoRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFRSCxDLENBRUQ7QUFDSTs7O0tBYktOLGE7QUE0RlI7O0FBRWNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uODI5OTkwODJlNGI1Y2NkOTZmMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgdGhlIG1lZXR1cCBkZXRhaWwgcGFnZSAtPiBsb2NhbGhvc3Q6MzAwMC9hbnl0aGluZ1xyXG4gICAgLy8gVGhpcyBpcyBleGNlcHQgZm9yIHNwZWNpZmllZCB0aGluZ3Mgc3VjaCBhcyB0aGUgbG9jYWxob3N0OjMwMDAvbmV3LW1lZXR1cFxyXG4gICAgICAgIC8vIHNlZSBob3cgdGhpcyByb3V0ZSBpcyBnb3QgdG8gYnkgTWVldHVwSXRlbS5qc1xyXG4vLyBEZWZhdWx0IERhdGEgZm9yIG5vdywgd2lsbCBiZSBmZXRjaGVkIGZyb20gYmFja2VuZCBpbiB0aGUgZnV0dXJlXHJcbiAgICAvLyBTdG9yZSBpbiBNZWV0dXBEZXRhaWwuanMgYW5kIGFkZCBzdHlsZXMgdmlhIE1lZXR1cERldGFpbC5tb2R1bGUuY3NzXHJcbiAgICAgICAgLy8gRG9uJ3QgY3JlYXRlIEpTWCBpbiB0aGlzIHBhZ2UsIG91dHNvdXJjZSB0byBjb21wb25lbnRzXHJcbiAgICAgICAgICAgIC8vIGNoYW5nZSBldmVyeXRoaW5nIHRvIHByb3BzIHRvIG1ha2UgaXQgZHluYW1pYywgZGlzcGtheXMgd2hhdCBpcyBzZW50IGluIGZyb20gaGVyZSxcclxuICAgICAgICAgICAgLy8gY291bGQgYmUgaGVscGZ1bCBmb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIGJhY2tlbmQgdG9vPz8/XHJcblxyXG5pbXBvcnQgIE1lZXR1cERldGFpbCAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbCdcclxuaW1wb3J0ICB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIFRoZXNlIGR5bmFtaWMgcHJvcHMgYXJlIGZyb20gdGhlIGdldFN0YXRpY1Byb3BzIGZ1bmN0aW9uIHJldHVybiBmcm9tIGJlbG93XHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XHJcbiAgICAgICAgPE1lZXR1cERldGFpbCAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfSBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9IGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBzaW5jZSBpdCdzIG1haW5seSBiYXNlZCBvbiB0aGUgY29uY2VwdCBvZiBwcmUtcmVuZGVyIHByb2Nlc3MsIGR5bmFtaWMgcm91dGVzIFxyXG4gICAgLy8gbmVlZCB0byBiZSByZWdlbmVyYXRlZCBvbiBuZXcgZHluYW1pYyByb3V0ZXMgdGhhdCBhcmUgY3JlYXRlZCBvciB3cml0dGVuIGJ5IHRoZSB1c2VyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL1hhbmRlcl9NaWs6SXNhaWFoNTVAY2x1c3RlcjAuaGp1dW4ubW9uZ29kYi5uZXQvdGVzdERiP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiKTtcclxuICAgIC8vIGdldCBob2xkIG9mIGRhdGFiYXNlIGJ5OlxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAvLyBnZXQgYWNjZXNzIHRvIG1lZXR1cHMgY29sbGVjdGlvbiB3aGljaCBpcyBpbiB0aGUgREIgLT4gTm9TUUwgREIgY29sbGVjdGlvbnMgZnVsbCBvZiBkb2N1bWVudHMgaW4gTW9uZ29EQlxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgLy8gV29yayBvbiB0aGUgLmZpbmQoKSB0byBnZXQgYWxsIF9pZCBmaWVsZCB2YWx1ZXMgZnJvbSB0aGUgTW9uZ29EQlxyXG4gICAgICAgIC8vIDFzdCBwYXJhbSBpcyB0byBmaWx0ZXIgb3V0IHNwZWNpZmljIGRvY3VtZW50c1xyXG4gICAgICAgIC8vIDJuZCBwYXJhbSBpcyB0byBmaWx0ZXIgb3V0IGZpZWxkcyBpbiB0aGUgZG9jdW1lbnRzXHJcbiAgICAgICAgICAgIC8vIGJ5IHR5cGluZyBpbiBfaWQ6MSwgcmV0dXJucyBvbmx5IDEgZmllbGQgd2hpY2ggaXMgdGhlIF9pZCBmaWVsZCBmb3IgYWxsIGRvY3VtZW50IHNpbmNlIG5vIGZpbHRlciBvbiBkb2N1bWVudHNcclxuICAgICAgICAgICAgLy8gQ29udmVydCB0byBBcnJheSwgYW5kIG5vdyBwb3B1bGF0ZSBwYXRocyBvYmplY3QgYmVsb3cgd2l0aCB0aGVzZSBieSAubWFwKCkuXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwge19pZDoxfSkudG9BcnJheSgpO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIC5tYXAoKSB0byBhbiBvYmplY3Qgd2l0aCBhIGtleSBvZiBwYXJhbXMgc2V0IGVxdWFsIHRvIFxyXG4gICAgICAgICAgICAvLy8gdGhlIHZhbHVlIG9mIGFuIG9iamVjdCB3aGljaCBjb250YWlucyBtZWV0dXBJZCBhcyBhIGtleSBhbmQgbWVldHVwLl9pZC50b1N0cmluZygpIGFzIGEgdmFsdWUgdG8gaXRcclxuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBhZGQgY29tbWEgY29ycmVjdGx5IGFmdGVyIHBhcmFtcyB2YWx1ZSBvYmplY3RcclxuICAgICAgICAvLyByZXBsaWNhdGUgdGhlIGhhcmRjb2RlZCB2YWx1ZXMgYmVsb3cuXHJcbiAgICAgICAgcGF0aHM6IG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoeyBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpICxcclxuICAgICAgICAvKltcclxuICAgICAgICAgICAgVGhlc2UgYXJlIGZyb20gdGhlIGlkJ3MgaW4gdGhlIGR1bW15IGRhdGEgaW4gaW5kZXguanMgaW4gcGFnZXMgZm9sZGVyKFN0YXJ0IFBhZ2UpXHJcbiAgICAgICAgICAgIFRoZXNlIHBhcmFtcyBhcmUgYW55IHBvc3NpYmxlIHJvdXRlcyB0aGF0IGNvdWxkIGJlIGR5bmFtaWNcclxuICAgICAgICAgICAgVGhpcyB3aWxsIGJlIGdlbmVyYXRlZCBsYXRlciBpbiB0aGUgYmFja2VuZFxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlZCBUaGVzZSBIYXJkY29kZWQgdmFsdWVzOlxyXG4gICAgICAgICAgICAgICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ20xJyx9LH0sXHJcbiAgICAgICAgICAgICAgICB7cGFyYW1zOiB7bWVldHVwSWQ6ICdtMicsfSx9LFxyXG4gICAgICAgIF0sKi9cclxuICAgICAgICAvLyBpZiBmYWxsYmFjayBpcyBzZXQgdG8gZmFsc2UsIGFueSBwYWdlIHRoYXQgZG9lc24ndCBtYXRjaCB0aGUgaWRzIHN1Y2ggYXMgXCIvbTNcIiwgd291bGQgcmV0dXJuIDQwNFxyXG4gICAgICAgICAgICAvLyBcIi9tMVwiIG9yIFwiL20yXCIgd291bGQgcmV0dXJuIHJlc3BlY3RhYmxlIHBhZ2VzXHJcbiAgICAgICAgLy8gaWYgZmFsbGJhY2sgaXMgc2V0IHRvIHRydWUgYW5kIHRoZSB1c2VyIGdvZXMgdG8gXCIvbTNcIiwgbmV4dEpzIHdpbGwgdHJ5IHRvIGdlbmVyYXRlIGEgcmVsYXRpdmUgcGFnZSBmb3IgaXRcclxuICAgICAgICAgICAgLy8gd291bGRuJ3QgcmV0dXJuIDQwNCBvbiB1bmtub3duIHJvdXRlIGJ1dCByYXRoZXIgbmV4dEpzIGdlbmVyYXRlZCBwYWdlIG9uIHRoZSBmbHlcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBoZWxwZnVsIGhlcmUgYmVjYXVzZSBpZiB0aGUgbWVldHVwIGRvZXNuJ3QgZXhpc3QgbmV4dEpzIGdlbmVyYXRpbmcgdGhlIHBhZ2Ugd291bGQgYmUgYnVnZ3kgYW5kIHVubmVjY2Vzc2FyeSBcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KVxyXG57XHJcbiAgICAvLyBmZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcclxuICAgICAgICAvLyBtYWtlIHByb3BzIGFzIGEgbWVldHVwRGF0YSBmb3IgcHJvcHMsIHdoaWNoIGlzIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAvLyBuZWVkIHRvIG1ha2UgZHluYW1pYyBmb3Igc3BlY2lmaWMgbWVldHVwUGFnZXMsIGNhbid0IGp1c3QgcHV0IGluIGRhdGEgbGlrZSBkdW1teSBkYXRhXHJcbiAgICAvLyBUaGF0J3Mgd2h5IGNvbnRleHQgaXMgdXNlZCBpbiB0aGUgcGFyYW0gb2YgZ2V0U3RhdGljUHJvcHMoKSBcclxuICAgICAgICAvLyBpdCBoYXMgYSBwYXJhbXMga2V5IC0+IHB1bGxzIGR5bmFtaWMgbmFtZSBmcm9tIFtdIHdoaWNoIGluIHRoaXMgY2FzZSBpcyBjYWxsZWQgXHJcbiAgICAgICAgICAgIC8vIGJ5IFttZWV0dXBJZF1cclxuICAgIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL1hhbmRlcl9NaWs6SXNhaWFoNTVAY2x1c3RlcjAuaGp1dW4ubW9uZ29kYi5uZXQvdGVzdERiP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiKTtcclxuICAgIC8vIGdldCBob2xkIG9mIGRhdGFiYXNlIGJ5OlxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAvLyBnZXQgYWNjZXNzIHRvIG1lZXR1cHMgY29sbGVjdGlvbiB3aGljaCBpcyBpbiB0aGUgREIgLT4gTm9TUUwgREIgY29sbGVjdGlvbnMgZnVsbCBvZiBkb2N1bWVudHMgaW4gTW9uZ29EQlxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgLy8gbmVlZCB0byBzZW5kIHVwIHByb3BzIHRoYXQgYXJlIGR5bmFtaWMgYW5kIG5vdCBoYXJkY29kZWRcclxuICAgICAgICAvLyBzZW5kIHVwIGJ5IGZpbmRpbmcgYW5kIGRpc3BsYXlpbmcgZGF0YSBmcm9tIHRoZSBzcGVjaWZpYyBpZCBwYXNzZWQgaW50byBoZXJlIG9yIHRoZSAuZmluZE9uZSgpIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyBmaW5kcyB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgX2lkIHdoaWNoIGlzIGluIHRoZSB1cmwgLT4gbmVlZCB0byBjb252ZXJ0IHRvIE9iamVjdElkIGFzIGl0IGlzIHNlZW4gaW4gTW9uZ29EYiB0byBmaW5kIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAgICAgLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkfSBmcm9tICdtb25nb2RiJztcclxuICAgIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7X2lkOiBPYmplY3RJZChtZWV0dXBJZCl9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBjbGllbnQvREIgYWZ0ZXIgZG9uZSB1c2luZy5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgLy8gbmVlZCB0byBjb252ZXJ0IHdlaXJkIE9iamVjdElkIG9mIHRoZSBkb2N1bWVudCB0byBhIHN0cmluZyBhZ2FpbiBieSAudG9TdHJpbmcoKSwgY2FuJ3QganVzdCBzZW5kIGluIHNlbGVjdGVkTWVldHVwXHJcbiAgICAgICAgLy8gY2hhbmdlIGluIHRoZSBhYm92ZSBjb21wb25lbnQgZnVuY3Rpb24gaW4gdGhlIDxNZWV0dXBEZXRhaWwvPiBpbXBvcnRcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBpbWFnZTpzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOnNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOnNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9