webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ajmik_OneDrive_Desktop_Xander_s_Small_Coding_Projects_2022_ReactJS_Beginner_s_Course_Section_23_Next_Level_NextJS_Project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ajmik_OneDrive_Desktop_Xander_s_Small_Coding_Projects_2022_ReactJS_Beginner_s_Course_Section_23_Next_Level_NextJS_Project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ajmik_OneDrive_Desktop_Xander_s_Small_Coding_Projects_2022_ReactJS_Beginner_s_Course_Section_23_Next_Level_NextJS_Project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ajmik_OneDrive_Desktop_Xander_s_Small_Coding_Projects_2022_ReactJS_Beginner_s_Course_Section_23_Next_Level_NextJS_Project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");




var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\pages\\new-meetup\\index.js",
    _s = $RefreshSig$();

// localhost:3000/new-meetup -> This is the route for this page
// use NewMeetupForm import from components/meetups -> it expects props of a function to handle the data passed in
//import Layout from "../../components/layout/Layout";



function NewMeetupPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(); // More will happen with this function including sending this data to the backend API
  // and redirecting to the home page or index.js in pages folder.
  // and for right now, need Link not manual type in URL

  function addMeetupHandler(_x) {
    return _addMeetupHandler.apply(this, arguments);
  }

  function _addMeetupHandler() {
    _addMeetupHandler = Object(C_Users_ajmik_OneDrive_Desktop_Xander_s_Small_Coding_Projects_2022_ReactJS_Beginner_s_Course_Section_23_Next_Level_NextJS_Project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ajmik_OneDrive_Desktop_Xander_s_Small_Coding_Projects_2022_ReactJS_Beginner_s_Course_Section_23_Next_Level_NextJS_Project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredMeetupData) {
      var response, data;
      return C_Users_ajmik_OneDrive_Desktop_Xander_s_Small_Coding_Projects_2022_ReactJS_Beginner_s_Course_Section_23_Next_Level_NextJS_Project_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(enteredMeetupData); // How do you call internal API in api folder? fetch link
              // Call by "/api/new-meetup" -> call as folder level, very easy 

              _context.next = 3;
              return fetch('/api/new-meetup', {
                method: 'POST',
                // use JSON.stringify to convert the object to JSON format -> make sure passed in object contains all needed fields including:
                // address, description, image, and title
                body: JSON.stringify(enteredMeetupData),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              console.log(data); // got a minor error because I didn't set const client to MongoClient in api folder, new-meetup.js
              // success once the client is defined, redirect to start page which shows all the meetups -> use useRouter hook to do so

              router.push;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _addMeetupHandler.apply(this, arguments);
  }

  ; // Also wrap this in <Layout> tags
  // Not great to do if lots of pages, don't want to wrap all the pages with <Layout> tags
  // unnecessary and tedious -> use _app.js -> just wrap _app.js Component with <Layout> tags.
  // The page components are what is shown in the Component tags in _app.js, wrap in Layout to show header
  // or nav or footer on every page.

  return (
    /*#__PURE__*/
    // <Layout>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onAddMeetup: addMeetupHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
    /* </Layout> */

  );
}

_s(NewMeetupPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = NewMeetupPage;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

var _c;

$RefreshReg$(_c, "NewMeetupPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FEdUIsQ0FFdkI7QUFDRTtBQUNJOztBQUppQixXQUtSQyxnQkFMUTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxa0JBS3ZCLGlCQUFnQ0MsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLGlCQUFaLEVBREYsQ0FFSTtBQUNFOztBQUhOO0FBQUEscUJBSXlCRyxLQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDOUNDLHNCQUFNLEVBQUUsTUFEc0M7QUFFOUM7QUFDRTtBQUNGQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsaUJBQWYsQ0FKd0M7QUFLOUNRLHVCQUFPLEVBQ1A7QUFDRSxrQ0FBZ0I7QUFEbEI7QUFOOEMsZUFBcEIsQ0FKOUI7O0FBQUE7QUFJUUMsc0JBSlI7QUFBQTtBQUFBLHFCQWdCcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQWhCckI7O0FBQUE7QUFnQlFDLGtCQWhCUjtBQWlCRVYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZUyxJQUFaLEVBakJGLENBa0JFO0FBQ0U7O0FBQ0ZkLG9CQUFNLENBQUNlLElBQVA7O0FBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTHVCO0FBQUE7QUFBQTs7QUEwQnRCLEdBMUJzQixDQTJCdkI7QUFDRTtBQUNJO0FBQ0E7QUFDSTs7QUFDVjtBQUFBO0FBQ0U7QUFDRSx5RUFBQyx5RUFBRDtBQUFlLGlCQUFXLEVBQUViO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRjs7QUFIRjtBQUtEOztHQXJDUUgsYTtVQUNRRSxxRDs7O0tBRFJGLGE7QUF1Q01BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuOWNjZDYyYTE1M2RiNDgzOThhNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvY2FsaG9zdDozMDAwL25ldy1tZWV0dXAgLT4gVGhpcyBpcyB0aGUgcm91dGUgZm9yIHRoaXMgcGFnZVxyXG4vLyB1c2UgTmV3TWVldHVwRm9ybSBpbXBvcnQgZnJvbSBjb21wb25lbnRzL21lZXR1cHMgLT4gaXQgZXhwZWN0cyBwcm9wcyBvZiBhIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgZGF0YSBwYXNzZWQgaW5cclxuLy9pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gTmV3TWVldHVwUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBNb3JlIHdpbGwgaGFwcGVuIHdpdGggdGhpcyBmdW5jdGlvbiBpbmNsdWRpbmcgc2VuZGluZyB0aGlzIGRhdGEgdG8gdGhlIGJhY2tlbmQgQVBJXHJcbiAgICAvLyBhbmQgcmVkaXJlY3RpbmcgdG8gdGhlIGhvbWUgcGFnZSBvciBpbmRleC5qcyBpbiBwYWdlcyBmb2xkZXIuXHJcbiAgICAgICAgLy8gYW5kIGZvciByaWdodCBub3csIG5lZWQgTGluayBub3QgbWFudWFsIHR5cGUgaW4gVVJMXHJcbiAgYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihlbnRlcmVkTWVldHVwRGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZW50ZXJlZE1lZXR1cERhdGEpO1xyXG4gICAgICAvLyBIb3cgZG8geW91IGNhbGwgaW50ZXJuYWwgQVBJIGluIGFwaSBmb2xkZXI/IGZldGNoIGxpbmtcclxuICAgICAgICAvLyBDYWxsIGJ5IFwiL2FwaS9uZXctbWVldHVwXCIgLT4gY2FsbCBhcyBmb2xkZXIgbGV2ZWwsIHZlcnkgZWFzeSBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbmV3LW1lZXR1cCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIHVzZSBKU09OLnN0cmluZ2lmeSB0byBjb252ZXJ0IHRoZSBvYmplY3QgdG8gSlNPTiBmb3JtYXQgLT4gbWFrZSBzdXJlIHBhc3NlZCBpbiBvYmplY3QgY29udGFpbnMgYWxsIG5lZWRlZCBmaWVsZHMgaW5jbHVkaW5nOlxyXG4gICAgICAgIC8vIGFkZHJlc3MsIGRlc2NyaXB0aW9uLCBpbWFnZSwgYW5kIHRpdGxlXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuICAgICAgaGVhZGVyczpcclxuICAgICAge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZ2V0IGRhdGEgZnJvbSB0aGUgcmVzcG9uc2VcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIGdvdCBhIG1pbm9yIGVycm9yIGJlY2F1c2UgSSBkaWRuJ3Qgc2V0IGNvbnN0IGNsaWVudCB0byBNb25nb0NsaWVudCBpbiBhcGkgZm9sZGVyLCBuZXctbWVldHVwLmpzXHJcbiAgICAgIC8vIHN1Y2Nlc3Mgb25jZSB0aGUgY2xpZW50IGlzIGRlZmluZWQsIHJlZGlyZWN0IHRvIHN0YXJ0IHBhZ2Ugd2hpY2ggc2hvd3MgYWxsIHRoZSBtZWV0dXBzIC0+IHVzZSB1c2VSb3V0ZXIgaG9vayB0byBkbyBzb1xyXG4gICAgcm91dGVyLnB1c2hcclxuICB9O1xyXG4gIC8vIEFsc28gd3JhcCB0aGlzIGluIDxMYXlvdXQ+IHRhZ3NcclxuICAgIC8vIE5vdCBncmVhdCB0byBkbyBpZiBsb3RzIG9mIHBhZ2VzLCBkb24ndCB3YW50IHRvIHdyYXAgYWxsIHRoZSBwYWdlcyB3aXRoIDxMYXlvdXQ+IHRhZ3NcclxuICAgICAgICAvLyB1bm5lY2Vzc2FyeSBhbmQgdGVkaW91cyAtPiB1c2UgX2FwcC5qcyAtPiBqdXN0IHdyYXAgX2FwcC5qcyBDb21wb25lbnQgd2l0aCA8TGF5b3V0PiB0YWdzLlxyXG4gICAgICAgIC8vIFRoZSBwYWdlIGNvbXBvbmVudHMgYXJlIHdoYXQgaXMgc2hvd24gaW4gdGhlIENvbXBvbmVudCB0YWdzIGluIF9hcHAuanMsIHdyYXAgaW4gTGF5b3V0IHRvIHNob3cgaGVhZGVyXHJcbiAgICAgICAgICAgIC8vIG9yIG5hdiBvciBmb290ZXIgb24gZXZlcnkgcGFnZS5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPExheW91dD5cclxuICAgICAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+XHJcbiAgICAvKiA8L0xheW91dD4gKi9cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9