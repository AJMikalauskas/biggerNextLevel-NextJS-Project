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
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");



var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\pages\\new-meetup\\index.js";
// localhost:3000/new-meetup -> This is the route for this page
// use NewMeetupForm import from components/meetups -> it expects props of a function to handle the data passed in
//import Layout from "../../components/layout/Layout";


function NewMeetupPage() {
  // More will happen with this function including sending this data to the backend API
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
              // success once the client is defined, 

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
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddMeetup: addMeetupHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
    /* </Layout> */

  );
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QjtBQUNFO0FBQ0k7QUFIaUIsV0FJUkMsZ0JBSlE7QUFBQTtBQUFBOztBQUFBO0FBQUEscWtCQUl2QixpQkFBZ0NDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixpQkFBWixFQURGLENBRUk7QUFDRTs7QUFITjtBQUFBLHFCQUl5QkcsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQzlDQyxzQkFBTSxFQUFFLE1BRHNDO0FBRTlDO0FBQ0U7QUFDRkMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLGlCQUFmLENBSndDO0FBSzlDUSx1QkFBTyxFQUNQO0FBQ0Usa0NBQWdCO0FBRGxCO0FBTjhDLGVBQXBCLENBSjlCOztBQUFBO0FBSVFDLHNCQUpSO0FBQUE7QUFBQSxxQkFnQnFCQSxRQUFRLENBQUNDLElBQVQsRUFoQnJCOztBQUFBO0FBZ0JRQyxrQkFoQlI7QUFpQkVWLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVMsSUFBWixFQWpCRixDQWtCRTtBQUNFOztBQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUp1QjtBQUFBO0FBQUE7O0FBd0J0QixHQXhCc0IsQ0F5QnZCO0FBQ0U7QUFDSTtBQUNBO0FBQ0k7O0FBQ1Y7QUFBQTtBQUNFO0FBQ0UseUVBQUMseUVBQUQ7QUFBZSxpQkFBVyxFQUFFWjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Y7O0FBSEY7QUFLRDs7S0FuQ1FELGE7QUFxQ01BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuZDA3YmQyZTc1ZThhMjU5YTI3ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvY2FsaG9zdDozMDAwL25ldy1tZWV0dXAgLT4gVGhpcyBpcyB0aGUgcm91dGUgZm9yIHRoaXMgcGFnZVxyXG4vLyB1c2UgTmV3TWVldHVwRm9ybSBpbXBvcnQgZnJvbSBjb21wb25lbnRzL21lZXR1cHMgLT4gaXQgZXhwZWN0cyBwcm9wcyBvZiBhIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgZGF0YSBwYXNzZWQgaW5cclxuLy9pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBOZXdNZWV0dXBQYWdlKCkge1xyXG4gIC8vIE1vcmUgd2lsbCBoYXBwZW4gd2l0aCB0aGlzIGZ1bmN0aW9uIGluY2x1ZGluZyBzZW5kaW5nIHRoaXMgZGF0YSB0byB0aGUgYmFja2VuZCBBUElcclxuICAgIC8vIGFuZCByZWRpcmVjdGluZyB0byB0aGUgaG9tZSBwYWdlIG9yIGluZGV4LmpzIGluIHBhZ2VzIGZvbGRlci5cclxuICAgICAgICAvLyBhbmQgZm9yIHJpZ2h0IG5vdywgbmVlZCBMaW5rIG5vdCBtYW51YWwgdHlwZSBpbiBVUkxcclxuICBhc3luYyBmdW5jdGlvbiBhZGRNZWV0dXBIYW5kbGVyKGVudGVyZWRNZWV0dXBEYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbnRlcmVkTWVldHVwRGF0YSk7XHJcbiAgICAgIC8vIEhvdyBkbyB5b3UgY2FsbCBpbnRlcm5hbCBBUEkgaW4gYXBpIGZvbGRlcj8gZmV0Y2ggbGlua1xyXG4gICAgICAgIC8vIENhbGwgYnkgXCIvYXBpL25ldy1tZWV0dXBcIiAtPiBjYWxsIGFzIGZvbGRlciBsZXZlbCwgdmVyeSBlYXN5IFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9uZXctbWVldHVwJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gdXNlIEpTT04uc3RyaW5naWZ5IHRvIGNvbnZlcnQgdGhlIG9iamVjdCB0byBKU09OIGZvcm1hdCAtPiBtYWtlIHN1cmUgcGFzc2VkIGluIG9iamVjdCBjb250YWlucyBhbGwgbmVlZGVkIGZpZWxkcyBpbmNsdWRpbmc6XHJcbiAgICAgICAgLy8gYWRkcmVzcywgZGVzY3JpcHRpb24sIGltYWdlLCBhbmQgdGl0bGVcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxyXG4gICAgICBoZWFkZXJzOlxyXG4gICAgICB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBnZXQgZGF0YSBmcm9tIHRoZSByZXNwb25zZVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gZ290IGEgbWlub3IgZXJyb3IgYmVjYXVzZSBJIGRpZG4ndCBzZXQgY29uc3QgY2xpZW50IHRvIE1vbmdvQ2xpZW50IGluIGFwaSBmb2xkZXIsIG5ldy1tZWV0dXAuanNcclxuICAgICAgLy8gc3VjY2VzcyBvbmNlIHRoZSBjbGllbnQgaXMgZGVmaW5lZCwgXHJcbiAgfTtcclxuICAvLyBBbHNvIHdyYXAgdGhpcyBpbiA8TGF5b3V0PiB0YWdzXHJcbiAgICAvLyBOb3QgZ3JlYXQgdG8gZG8gaWYgbG90cyBvZiBwYWdlcywgZG9uJ3Qgd2FudCB0byB3cmFwIGFsbCB0aGUgcGFnZXMgd2l0aCA8TGF5b3V0PiB0YWdzXHJcbiAgICAgICAgLy8gdW5uZWNlc3NhcnkgYW5kIHRlZGlvdXMgLT4gdXNlIF9hcHAuanMgLT4ganVzdCB3cmFwIF9hcHAuanMgQ29tcG9uZW50IHdpdGggPExheW91dD4gdGFncy5cclxuICAgICAgICAvLyBUaGUgcGFnZSBjb21wb25lbnRzIGFyZSB3aGF0IGlzIHNob3duIGluIHRoZSBDb21wb25lbnQgdGFncyBpbiBfYXBwLmpzLCB3cmFwIGluIExheW91dCB0byBzaG93IGhlYWRlclxyXG4gICAgICAgICAgICAvLyBvciBuYXYgb3IgZm9vdGVyIG9uIGV2ZXJ5IHBhZ2UuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxMYXlvdXQ+XHJcbiAgICAgIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfSAvPlxyXG4gICAgLyogPC9MYXlvdXQ+ICovXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==