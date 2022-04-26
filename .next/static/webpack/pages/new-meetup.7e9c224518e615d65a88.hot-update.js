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

            case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUR1QixDQUV2QjtBQUNFO0FBQ0k7O0FBSmlCLFdBS1JDLGdCQUxRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFrQkFLdkIsaUJBQWdDQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsaUJBQVosRUFERixDQUVJO0FBQ0U7O0FBSE47QUFBQSxxQkFJeUJHLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUM5Q0Msc0JBQU0sRUFBRSxNQURzQztBQUU5QztBQUNFO0FBQ0ZDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxpQkFBZixDQUp3QztBQUs5Q1EsdUJBQU8sRUFDUDtBQUNFLGtDQUFnQjtBQURsQjtBQU44QyxlQUFwQixDQUo5Qjs7QUFBQTtBQUlRQyxzQkFKUjtBQUFBO0FBQUEscUJBZ0JxQkEsUUFBUSxDQUFDQyxJQUFULEVBaEJyQjs7QUFBQTtBQWdCUUMsa0JBaEJSO0FBaUJFVixxQkFBTyxDQUFDQyxHQUFSLENBQVlTLElBQVosRUFqQkYsQ0FrQkU7QUFDRTs7QUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMdUI7QUFBQTtBQUFBOztBQTBCdEIsR0ExQnNCLENBMkJ2QjtBQUNFO0FBQ0k7QUFDQTtBQUNJOztBQUNWO0FBQUE7QUFDRTtBQUNFLHlFQUFDLHlFQUFEO0FBQWUsaUJBQVcsRUFBRVo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGOztBQUhGO0FBS0Q7O0dBckNRSCxhO1VBQ1FFLHFEOzs7S0FEUkYsYTtBQXVDTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC43ZTljMjI0NTE4ZTYxNWQ2NWE4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9jYWxob3N0OjMwMDAvbmV3LW1lZXR1cCAtPiBUaGlzIGlzIHRoZSByb3V0ZSBmb3IgdGhpcyBwYWdlXHJcbi8vIHVzZSBOZXdNZWV0dXBGb3JtIGltcG9ydCBmcm9tIGNvbXBvbmVudHMvbWVldHVwcyAtPiBpdCBleHBlY3RzIHByb3BzIG9mIGEgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBkYXRhIHBhc3NlZCBpblxyXG4vL2ltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBOZXdNZWV0dXBQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgLy8gTW9yZSB3aWxsIGhhcHBlbiB3aXRoIHRoaXMgZnVuY3Rpb24gaW5jbHVkaW5nIHNlbmRpbmcgdGhpcyBkYXRhIHRvIHRoZSBiYWNrZW5kIEFQSVxyXG4gICAgLy8gYW5kIHJlZGlyZWN0aW5nIHRvIHRoZSBob21lIHBhZ2Ugb3IgaW5kZXguanMgaW4gcGFnZXMgZm9sZGVyLlxyXG4gICAgICAgIC8vIGFuZCBmb3IgcmlnaHQgbm93LCBuZWVkIExpbmsgbm90IG1hbnVhbCB0eXBlIGluIFVSTFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZE1lZXR1cEhhbmRsZXIoZW50ZXJlZE1lZXR1cERhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGVudGVyZWRNZWV0dXBEYXRhKTtcclxuICAgICAgLy8gSG93IGRvIHlvdSBjYWxsIGludGVybmFsIEFQSSBpbiBhcGkgZm9sZGVyPyBmZXRjaCBsaW5rXHJcbiAgICAgICAgLy8gQ2FsbCBieSBcIi9hcGkvbmV3LW1lZXR1cFwiIC0+IGNhbGwgYXMgZm9sZGVyIGxldmVsLCB2ZXJ5IGVhc3kgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1tZWV0dXAnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyB1c2UgSlNPTi5zdHJpbmdpZnkgdG8gY29udmVydCB0aGUgb2JqZWN0IHRvIEpTT04gZm9ybWF0IC0+IG1ha2Ugc3VyZSBwYXNzZWQgaW4gb2JqZWN0IGNvbnRhaW5zIGFsbCBuZWVkZWQgZmllbGRzIGluY2x1ZGluZzpcclxuICAgICAgICAvLyBhZGRyZXNzLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGFuZCB0aXRsZVxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRlcmVkTWVldHVwRGF0YSksXHJcbiAgICAgIGhlYWRlcnM6XHJcbiAgICAgIHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGdldCBkYXRhIGZyb20gdGhlIHJlc3BvbnNlXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyBnb3QgYSBtaW5vciBlcnJvciBiZWNhdXNlIEkgZGlkbid0IHNldCBjb25zdCBjbGllbnQgdG8gTW9uZ29DbGllbnQgaW4gYXBpIGZvbGRlciwgbmV3LW1lZXR1cC5qc1xyXG4gICAgICAvLyBzdWNjZXNzIG9uY2UgdGhlIGNsaWVudCBpcyBkZWZpbmVkLCByZWRpcmVjdCB0byBzdGFydCBwYWdlIHdoaWNoIHNob3dzIGFsbCB0aGUgbWVldHVwcyAtPiB1c2UgdXNlUm91dGVyIGhvb2sgdG8gZG8gc29cclxuICAgIFxyXG4gIH07XHJcbiAgLy8gQWxzbyB3cmFwIHRoaXMgaW4gPExheW91dD4gdGFnc1xyXG4gICAgLy8gTm90IGdyZWF0IHRvIGRvIGlmIGxvdHMgb2YgcGFnZXMsIGRvbid0IHdhbnQgdG8gd3JhcCBhbGwgdGhlIHBhZ2VzIHdpdGggPExheW91dD4gdGFnc1xyXG4gICAgICAgIC8vIHVubmVjZXNzYXJ5IGFuZCB0ZWRpb3VzIC0+IHVzZSBfYXBwLmpzIC0+IGp1c3Qgd3JhcCBfYXBwLmpzIENvbXBvbmVudCB3aXRoIDxMYXlvdXQ+IHRhZ3MuXHJcbiAgICAgICAgLy8gVGhlIHBhZ2UgY29tcG9uZW50cyBhcmUgd2hhdCBpcyBzaG93biBpbiB0aGUgQ29tcG9uZW50IHRhZ3MgaW4gX2FwcC5qcywgd3JhcCBpbiBMYXlvdXQgdG8gc2hvdyBoZWFkZXJcclxuICAgICAgICAgICAgLy8gb3IgbmF2IG9yIGZvb3RlciBvbiBldmVyeSBwYWdlLlxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8TGF5b3V0PlxyXG4gICAgICA8TmV3TWVldHVwRm9ybSBvbkFkZE1lZXR1cD17YWRkTWVldHVwSGFuZGxlcn0gLz5cclxuICAgIC8qIDwvTGF5b3V0PiAqL1xyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=