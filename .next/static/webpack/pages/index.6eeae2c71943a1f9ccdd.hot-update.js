webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";
// This is the startup page, or localhost:3000/
// show MeetupList.js here -> send up dummy data/meetups data via props of meetups -> make sure to import
// plug in dummy data to props of MeetupList import -> will eventually change to fetch in backend API
// You can add metadata to the head tags in the html. Some may include to add a description while searching or a page title shown in the tab
// Add by using the Head import from 'next/head'. Add in JSX of the below HomePage(props);
 //import { useEffect, useState } from 'react';
//import Layout from "../components/layout/Layout";



// const DUMMY_MEETUPS = [
//     {  
//         id: 'm1',
//         title: 'A First Meetup',
//         image: "https://thumbor.thedailymeal.com/OaCGsIE1iH7uob0N5wZYP56pvlk=/1560x390/filters:focal(805x899:806x900):format(webp)/https://www.theactivetimes.com/sites/default/files/2020/05/13/Nature_Photos_Getty_hero.jpg",
//         address: "Some Address 1, 12345 Clown City",
//         description: "This is a first meetup!"
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: "https://www.planetware.com/wpimages/2020/01/pennsylvania-in-pictures-beaufiful-places-to-photograph-delaware-water-gap.jpg",
//         address: "Some Address 2, 678910 Gotham City",
//         description: "This is a Second Meetup!"
//     }
// ]
// Get setup for calling to backend at start of page by useEffect, useState imports
function HomePage(props) {
  /* SEO becomes messed up this way, uses first HTML load/render, list items aren't shown in the view source right click
       This helps to show that call to backend wouldn't show, a minor flaw in NextJS, but there is a solution...
     This state will store the meetups data, as of start, set to empty array
   const [loadedMeetups, setLoadedMeetups] = useState([]);
   useEffect() on start of page to retrieve data from backend -> no backend yet, but just retrieve dummy data
        empty dependency array, send loadedMeetups which is changed by state in useEffect()
            set props of meetups to loadedMeetups
   useEffect(() =>{
       setLoadedMeetups(DUMMY_MEETUPS);
   }, []); */
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Fragment, {
    children: ["// use ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 16
    }, this), " tags in this // Layout uses MainNavigation.js // make sure to import Link from 'next/link' // in MainNavigation.js or else an error will show. // not react router either so change to property to href property // no need for Layout wrapper here, only in _app.js // ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
      children: "// make sure to change this to props.meetups which is called from props in function below //"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
} // re-runs on every request which may seem positive, but could be negative by:
// needing to wait for page to be generated by every incoming request
// If page changes multiple times every seconds or need access to request/response, then using this is better
//, else use getStaticProps()
// export async function getServerSideProps(context) {
//     // access to incoming requests and response via the context keyword by req and res property
//     const req= context.req;
//     const res = context.res;
//     // can still fetch data from an API, also runs on server like below function    
//         // no need for revalidate, since it re renders on every request.
//     return {
//         props: {DUMMY_MEETUPS}
//     }
// }
// This is the function to data fetch for static pages, can be asynchronous
// This code won't ever execute on the client side -> never executes on page os user's pages.


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNJO0FBQ0k7QUFFUjtBQUNJO0NBRUo7QUFDQTs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDckI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHSSxzQkFDSSxxRUFBQyxRQUFEO0FBQUEsdUNBQ08scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURQLDRSQU9HLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSCxlQVVBLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNILEMsQ0FFRDtBQUNJO0FBQ0k7QUFDSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSTs7O0tBOUNLRixROztBQThGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmVlYWUyYzcxOTQzYTFmOWNjZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgdGhlIHN0YXJ0dXAgcGFnZSwgb3IgbG9jYWxob3N0OjMwMDAvXHJcbiAgICAvLyBzaG93IE1lZXR1cExpc3QuanMgaGVyZSAtPiBzZW5kIHVwIGR1bW15IGRhdGEvbWVldHVwcyBkYXRhIHZpYSBwcm9wcyBvZiBtZWV0dXBzIC0+IG1ha2Ugc3VyZSB0byBpbXBvcnRcclxuICAgICAgICAvLyBwbHVnIGluIGR1bW15IGRhdGEgdG8gcHJvcHMgb2YgTWVldHVwTGlzdCBpbXBvcnQgLT4gd2lsbCBldmVudHVhbGx5IGNoYW5nZSB0byBmZXRjaCBpbiBiYWNrZW5kIEFQSVxyXG5cclxuLy8gWW91IGNhbiBhZGQgbWV0YWRhdGEgdG8gdGhlIGhlYWQgdGFncyBpbiB0aGUgaHRtbC4gU29tZSBtYXkgaW5jbHVkZSB0byBhZGQgYSBkZXNjcmlwdGlvbiB3aGlsZSBzZWFyY2hpbmcgb3IgYSBwYWdlIHRpdGxlIHNob3duIGluIHRoZSB0YWJcclxuICAgIC8vIEFkZCBieSB1c2luZyB0aGUgSGVhZCBpbXBvcnQgZnJvbSAnbmV4dC9oZWFkJy4gQWRkIGluIEpTWCBvZiB0aGUgYmVsb3cgSG9tZVBhZ2UocHJvcHMpO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4vL2ltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCIgO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuLy8gICAgIHsgIFxyXG4vLyAgICAgICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxyXG4vLyAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vdGh1bWJvci50aGVkYWlseW1lYWwuY29tL09hQ0dzSUUxaUg3dW9iME41d1pZUDU2cHZsaz0vMTU2MHgzOTAvZmlsdGVyczpmb2NhbCg4MDV4ODk5OjgwNng5MDApOmZvcm1hdCh3ZWJwKS9odHRwczovL3d3dy50aGVhY3RpdmV0aW1lcy5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy8yMDIwLzA1LzEzL05hdHVyZV9QaG90b3NfR2V0dHlfaGVyby5qcGdcIixcclxuLy8gICAgICAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzcyAxLCAxMjM0NSBDbG93biBDaXR5XCIsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogJ20yJyxcclxuLy8gICAgICAgICB0aXRsZTogJ0EgU2Vjb25kIE1lZXR1cCcsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cucGxhbmV0d2FyZS5jb20vd3BpbWFnZXMvMjAyMC8wMS9wZW5uc3lsdmFuaWEtaW4tcGljdHVyZXMtYmVhdWZpZnVsLXBsYWNlcy10by1waG90b2dyYXBoLWRlbGF3YXJlLXdhdGVyLWdhcC5qcGdcIixcclxuLy8gICAgICAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzcyAyLCA2Nzg5MTAgR290aGFtIENpdHlcIixcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgU2Vjb25kIE1lZXR1cCFcIlxyXG4vLyAgICAgfVxyXG4vLyBdXHJcblxyXG4vLyBHZXQgc2V0dXAgZm9yIGNhbGxpbmcgdG8gYmFja2VuZCBhdCBzdGFydCBvZiBwYWdlIGJ5IHVzZUVmZmVjdCwgdXNlU3RhdGUgaW1wb3J0c1xyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gICAgLyogU0VPIGJlY29tZXMgbWVzc2VkIHVwIHRoaXMgd2F5LCB1c2VzIGZpcnN0IEhUTUwgbG9hZC9yZW5kZXIsIGxpc3QgaXRlbXMgYXJlbid0IHNob3duIGluIHRoZSB2aWV3IHNvdXJjZSByaWdodCBjbGlja1xyXG4gICAgICAgICBUaGlzIGhlbHBzIHRvIHNob3cgdGhhdCBjYWxsIHRvIGJhY2tlbmQgd291bGRuJ3Qgc2hvdywgYSBtaW5vciBmbGF3IGluIE5leHRKUywgYnV0IHRoZXJlIGlzIGEgc29sdXRpb24uLi5cclxuXHJcbiAgICAgVGhpcyBzdGF0ZSB3aWxsIHN0b3JlIHRoZSBtZWV0dXBzIGRhdGEsIGFzIG9mIHN0YXJ0LCBzZXQgdG8gZW1wdHkgYXJyYXlcclxuICAgICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAgdXNlRWZmZWN0KCkgb24gc3RhcnQgb2YgcGFnZSB0byByZXRyaWV2ZSBkYXRhIGZyb20gYmFja2VuZCAtPiBubyBiYWNrZW5kIHlldCwgYnV0IGp1c3QgcmV0cmlldmUgZHVtbXkgZGF0YVxyXG4gICAgICAgICAgZW1wdHkgZGVwZW5kZW5jeSBhcnJheSwgc2VuZCBsb2FkZWRNZWV0dXBzIHdoaWNoIGlzIGNoYW5nZWQgYnkgc3RhdGUgaW4gdXNlRWZmZWN0KClcclxuICAgICAgICAgICAgICBzZXQgcHJvcHMgb2YgbWVldHVwcyB0byBsb2FkZWRNZWV0dXBzXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gICAgIH0sIFtdKTsgKi9cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIC8vIHVzZSA8SGVhZD48L0hlYWQ+IHRhZ3MgaW4gdGhpc1xyXG4gICAgICAgIC8vIExheW91dCB1c2VzIE1haW5OYXZpZ2F0aW9uLmpzXHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbiAgICAgICAgICAgIC8vIGluIE1haW5OYXZpZ2F0aW9uLmpzIG9yIGVsc2UgYW4gZXJyb3Igd2lsbCBzaG93LlxyXG4gICAgICAgICAgICAvLyBub3QgcmVhY3Qgcm91dGVyIGVpdGhlciBzbyBjaGFuZ2UgdG8gcHJvcGVydHkgdG8gaHJlZiBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAvLyBubyBuZWVkIGZvciBMYXlvdXQgd3JhcHBlciBoZXJlLCBvbmx5IGluIF9hcHAuanNcclxuICAgICAgICAvLyA8TGF5b3V0PlxyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gY2hhbmdlIHRoaXMgdG8gcHJvcHMubWVldHVwcyB3aGljaCBpcyBjYWxsZWQgZnJvbSBwcm9wcyBpbiBmdW5jdGlvbiBiZWxvd1xyXG4gICAgICAgIC8vPC9MYXlvdXQ+XHJcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyByZS1ydW5zIG9uIGV2ZXJ5IHJlcXVlc3Qgd2hpY2ggbWF5IHNlZW0gcG9zaXRpdmUsIGJ1dCBjb3VsZCBiZSBuZWdhdGl2ZSBieTpcclxuICAgIC8vIG5lZWRpbmcgdG8gd2FpdCBmb3IgcGFnZSB0byBiZSBnZW5lcmF0ZWQgYnkgZXZlcnkgaW5jb21pbmcgcmVxdWVzdFxyXG4gICAgICAgIC8vIElmIHBhZ2UgY2hhbmdlcyBtdWx0aXBsZSB0aW1lcyBldmVyeSBzZWNvbmRzIG9yIG5lZWQgYWNjZXNzIHRvIHJlcXVlc3QvcmVzcG9uc2UsIHRoZW4gdXNpbmcgdGhpcyBpcyBiZXR0ZXJcclxuICAgICAgICAgICAgLy8sIGVsc2UgdXNlIGdldFN0YXRpY1Byb3BzKClcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgICAvLyBhY2Nlc3MgdG8gaW5jb21pbmcgcmVxdWVzdHMgYW5kIHJlc3BvbnNlIHZpYSB0aGUgY29udGV4dCBrZXl3b3JkIGJ5IHJlcSBhbmQgcmVzIHByb3BlcnR5XHJcbi8vICAgICBjb25zdCByZXE9IGNvbnRleHQucmVxO1xyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgICAgLy8gY2FuIHN0aWxsIGZldGNoIGRhdGEgZnJvbSBhbiBBUEksIGFsc28gcnVucyBvbiBzZXJ2ZXIgbGlrZSBiZWxvdyBmdW5jdGlvbiAgICBcclxuLy8gICAgICAgICAvLyBubyBuZWVkIGZvciByZXZhbGlkYXRlLCBzaW5jZSBpdCByZSByZW5kZXJzIG9uIGV2ZXJ5IHJlcXVlc3QuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7RFVNTVlfTUVFVFVQU31cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdG8gZGF0YSBmZXRjaCBmb3Igc3RhdGljIHBhZ2VzLCBjYW4gYmUgYXN5bmNocm9ub3VzXHJcbiAgICAvLyBUaGlzIGNvZGUgd29uJ3QgZXZlciBleGVjdXRlIG9uIHRoZSBjbGllbnQgc2lkZSAtPiBuZXZlciBleGVjdXRlcyBvbiBwYWdlIG9zIHVzZXIncyBwYWdlcy5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSSwgYWx3YXlzIHJldHVybiBhbiBvYmplY3QgaW4gaGVyZVxyXG4gICAgICAgIC8vIHRoZSBwcm9wcyBwcm9wZXJ0eSBvZiB0aGUgcmV0dXJuIG9iamVjdCBpcyBhbiBvYmplY3QgaXRzZWxmIGFuZCBpcyB0aGUgcHJvcHMgc2VudCB1cCB0byBIb21lUGFnZShwcm9wcykgYWJvdmVcclxuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBuZWVkIGZvciB1c2VTdGF0ZSBhbmQgdXNlRWZmZWN0IGluIHRoZSBIb21lUGFnZSgpIEZuIGFib3ZlLlxyXG4gICAgICAgICAgICAgICAgLy8gV2hhdCB3b3VsZCBub3JtYWxseSByZXByZXNlbnQgZ2V0dGluZyBkYXRhIGZyb20gYSBiYWNrZW5kIGlzIG5vIGxvbmdlciBuZWVkZWQgYmVjYXVzZSB0aGUgcHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZW50IHVwIHByb3BzIHRvIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gYWJvdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FuIGJlIGZldGNoZWQgaW4gdGhpcyBmdW5jdGlvbiBhbmQgc2VudCBpbiwgd2hpY2ggaW4gdGhlIGVuZCBoYXBwZW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgcHJlLXJlbmRlciBwcm9jZXNzKFNlcnZlciBTaWRlKSByYXRoZXIgdGhhbiBvbiB0aGUgY2xpZW50IHNpZGUgbGlrZSBhYm92ZSBkb2VzXHJcbiAgICAgICAgXHJcbiAgICAvLyBObyBuZWVkIHRvIGNhbGwgYW5kIGNyZWF0ZSBhbm90aGVyIEFQSSByb3V0ZSB0byBmZXRjaCBmcm9tLCBjYW4ganVzdCBkbyBBUEkgcm91dGUgY3JlYXRpb24gYW5kIGNhbGwgaW4gaGVyZT9cclxuICAgICAgICAvLyBTaW1pbGFyIHRvIGNhbGwgaW4gbmV3LW1lZXR1cC5qc1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vWGFuZGVyX01pazpJc2FpYWg1NUBjbHVzdGVyMC5oanV1bi5tb25nb2RiLm5ldC90ZXN0RGI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpXHJcbiAgICAgICAgLy8gZ2V0IGhvbGQgb2YgZGF0YWJhc2UgYnk6XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIC8vIGdldCBhY2Nlc3MgdG8gbWVldHVwcyBjb2xsZWN0aW9uIHdoaWNoIGlzIGluIHRoZSBEQiAtPiBOb1NRTCBEQiBjb2xsZWN0aW9ucyBmdWxsIG9mIGRvY3VtZW50cyBpbiBNb25nb0RCXHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG5cclxuICAgIC8vIGFuIGFzeW5jIHRhc2sgdGhhdCByZXR1cm5zIGEgcHJvbWlzZSwgcmV0dXJucyBhbGwgZG9jdW1lbnRzIGluIGNvbGxlY3Rpb24gYnkgZGVmYXVsdCAtPiBjaGFuZ2UgdG8gYXJyYXkgb2YgZG9jcy9vYmplY3RzXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgICAvLyBjbG9zZSBjb25uZWN0aW9uIHRvIERCIG9uY2UgZG9uZVxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC8vIG1hcCB0aGlzIHRvIG5ldyBhcnJheSBiZWN1YXNlIGlkIGZpZWxkIGlzIHdlaXJkIGluIE1vbmdvRGIgYW5kIGlzIF9pZCBmaXJzdCBhbmQgc2Vjb25kcyBpdCdzIHZhbHVlIGlzIE9iamVjdCB3cmFwcGVkIGFyb3VuZCBzb21ldGhpbmdcclxuICAgICAgICAgICAgLy9tYXAgdG8gYSBuZXcgYXJyYXkgIHdpdGggX2lkLnRvU3RyaW5nKCksIGFsc28gd2Ugb25seSBuZWVkIGltYWdlLCB0aXRsZSwgYW5kIGFkZHJlc3MsIG5vIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gd3JhcCBvYmplY3QgaW4gKCkgb3IgZWxzZSB0aGUgcHByb3BlcnRpZXMgd2lsbCByZXR1cm4gcmFuZG9tIHVua25vd24gZXJyb3JzXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIFByb2JsZW0gd2l0aCB0aGlzLCBpdCBvbmx5IGNhbGxzIG9uIHRoZSBiZWdpbm5pbmcsIGRhdGEgY2FuIGJlIG91dGRhdGVkIGlmIG5vIGNsaWVudC1zaWRlIHVwZGF0aW5nXHJcbiAgICAgICAgICAgIC8vIHNvIGlmIGEgbmV3IG1lZXR1cCB3YXMgYWRkZWQgdG8gdGhlIGJhY2tlbmQsIGl0IHdvdWxkbid0IHNob3cgb24gdGhlIHBhZ2UgYmVjYXVzZSBwcmUtcmVuZGVyXHJcbiAgICAgICAgICAgICAgICAvLyAgb25seSBzaG93cyB3aGF0cyBpbml0aWFsbHkgY2FsbGVkIG5vdCB3aGF0J3MgYWRkZWRcclxuICAgICAgICAvLyBUaGlzIHJldmFsaWRhdGUgcHJvcGVydHkgZml4ZXMgdGhhdCBieSByZXZhbGlkYXRpbmcgdGhlIHBhZ2UgZXZlcnkgIyBvZiBzZWNvbmRzLFxyXG4gICAgICAgICAgICAvLyBzbyBpZiBuZXcgZGF0YSBpcyBhZGRlZCB0byB0aGUgYmFja2VuZCwgd2lsbCBzaG93IG9uIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaG93bi5cclxuICAgICAgICAvLyBJZiB5b3Ugd2FudCB0byByZWJ1aWxkIG9uIGV2ZXJ5IHJlcXVlc3QsIHVzZSBhIGRpZmZlcmVudCBmdW5jdGlvbiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgYnkoZ2V0U2VydmVyU2lkZVByb3BzKCkpXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==