module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupItem.js";




function MeetupItem(props) {
  // Function to navigate us away to single [meetupId] page through this component
  // Same rules of hooks apply to NextJS as React, can't be inside another function???
  // router.push() works the same as history.push
  // Allows dynamic ability by using props.id which is from the dummy data in the start page
  // index.js in the Pages folder -> this will send to localhost:3000/props.id which goes to
  // the [meetupId] page, currently no data, probably would have to get from backend
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupList.js";



function MeetupList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.meetups.map(meetup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupList);

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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


async function getStaticProps() {
  // fetch data from an API, always return an object in here
  // the props property of the return object is an object itself and is the props sent up to HomePage(props) above
  // This function removes the need for useState and useEffect in the HomePage() Fn above.
  // What would normally represent getting data from a backend is no longer needed because the props
  // sent up props to the component function above
  // can be fetched in this function and sent in, which in the end happens
  // in the pre-render process(Server Side) rather than on the client side like above does
  // No need to call and create another API route to fetch from, can just do API route creation and call in here?
  // Similar to call in new-meetup.js
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__["MongoClient"].connect("mongodb+srv://Xander_Mik:Isaiah55@cluster0.hjuun.mongodb.net/testDb?retryWrites=true&w=majority"); // get hold of database by:

  const db = client.db(); // get access to meetups collection which is in the DB -> NoSQL DB collections full of documents in MongoDB

  const meetupsCollection = db.collection('meetups'); // an async task that returns a promise, returns all documents in collection by default -> change to array of docs/objects

  const meetups = await meetupsCollection.find().toArray(); // close connection to DB once done

  client.close();
  return {
    // map this to new array becuase id field is weird in MongoDb and is _id first and seconds it's value is Object wrapped around something
    //map to a new array  with _id.toString(), also we only need image, title, and address, no description
    // make sure to wrap object in () or else the pproperties will return random unknown errors
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    // Problem with this, it only calls on the beginning, data can be outdated if no client-side updating
    // so if a new meetup was added to the backend, it wouldn't show on the page because pre-render
    //  only shows whats initially called not what's added
    // This revalidate property fixes that by revalidating the page every # of seconds,
    // so if new data is added to the backend, will show on the number of seconds shown.
    // If you want to rebuild on every request, use a different function server side rendering by(getServerSideProps())
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsImNsYXNzZXMiLCJpdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJhZGRyZXNzIiwiYWN0aW9ucyIsIk1lZXR1cExpc3QiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsIkNhcmQiLCJjYXJkIiwiY2hpbGRyZW4iLCJIb21lUGFnZSIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImNs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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBJdGVtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBJdGVtKHByb3BzKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIG5hdmlnYXRlIHVzIGF3YXkgdG8gc2luZ2xlIFttZWV0dXBJZF0gcGFnZSB0aHJvdWdoIHRoaXMgY29tcG9uZW50XG4gICAgLy8gU2FtZSBydWxlcyBvZiBob29rcyBhcHBseSB0byBOZXh0SlMgYXMgUmVhY3QsIGNhbid0IGJlIGluc2lkZSBhbm90aGVyIGZ1bmN0aW9uPz8/XG4gICAgICAvLyByb3V0ZXIucHVzaCgpIHdvcmtzIHRoZSBzYW1lIGFzIGhpc3RvcnkucHVzaFxuICAgICAgICAvLyBBbGxvd3MgZHluYW1pYyBhYmlsaXR5IGJ5IHVzaW5nIHByb3BzLmlkIHdoaWNoIGlzIGZyb20gdGhlIGR1bW15IGRhdGEgaW4gdGhlIHN0YXJ0IHBhZ2VcbiAgICAgICAgICAvLyBpbmRleC5qcyBpbiB0aGUgUGFnZXMgZm9sZGVyIC0+IHRoaXMgd2lsbCBzZW5kIHRvIGxvY2FsaG9zdDozMDAwL3Byb3BzLmlkIHdoaWNoIGdvZXMgdG9cbiAgICAgICAgICAgIC8vIHRoZSBbbWVldHVwSWRdIHBhZ2UsIGN1cnJlbnRseSBubyBkYXRhLCBwcm9iYWJseSB3b3VsZCBoYXZlIHRvIGdldCBmcm9tIGJhY2tlbmRcbiAgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIHNob3dEZXRhaWxzSGFuZGxlciAgKClcbiAge1xuICAgIHJvdXRlci5wdXNoKFwiL1wiICsgcHJvcHMuaWQpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbHNIYW5kbGVyfT5TaG93IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJNZWV0dXBJdGVtX2l0ZW1fXzNzaU1VXCIsXG5cdFwiaW1hZ2VcIjogXCJNZWV0dXBJdGVtX2ltYWdlX18xM3JBUFwiLFxuXHRcImNvbnRlbnRcIjogXCJNZWV0dXBJdGVtX2NvbnRlbnRfXzN1RWtUXCIsXG5cdFwiYWN0aW9uc1wiOiBcIk1lZXR1cEl0ZW1fYWN0aW9uc19fTHZUOUJcIlxufTtcbiIsImltcG9ydCBNZWV0dXBJdGVtIGZyb20gJy4vTWVldHVwSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cExpc3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE1lZXR1cExpc3QocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAge3Byb3BzLm1lZXR1cHMubWFwKChtZWV0dXApID0+IChcbiAgICAgICAgPE1lZXR1cEl0ZW1cbiAgICAgICAgICBrZXk9e21lZXR1cC5pZH1cbiAgICAgICAgICBpZD17bWVldHVwLmlkfVxuICAgICAgICAgIGltYWdlPXttZWV0dXAuaW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e21lZXR1cC50aXRsZX1cbiAgICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cExpc3Q7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiTWVldHVwTGlzdF9saXN0X18xaWFmblwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM0tTTE9cIlxufTtcbiIsIi8vIFRoaXMgaXMgdGhlIHN0YXJ0dXAgcGFnZSwgb3IgbG9jYWxob3N0OjMwMDAvXHJcbiAgICAvLyBzaG93IE1lZXR1cExpc3QuanMgaGVyZSAtPiBzZW5kIHVwIGR1bW15IGRhdGEvbWVldHVwcyBkYXRhIHZpYSBwcm9wcyBvZiBtZWV0dXBzIC0+IG1ha2Ugc3VyZSB0byBpbXBvcnRcclxuICAgICAgICAvLyBwbHVnIGluIGR1bW15IGRhdGEgdG8gcHJvcHMgb2YgTWVldHVwTGlzdCBpbXBvcnQgLT4gd2lsbCBldmVudHVhbGx5IGNoYW5nZSB0byBmZXRjaCBpbiBiYWNrZW5kIEFQSVxyXG5cclxuLy8gWW91IGNhbiBhZGQgbWV0YWRhdGEgdG8gdGhlIGhlYWQgdGFncyBpbiB0aGUgaHRtbC4gU29tZSBtYXkgaW5jbHVkZSB0byBhZGQgYSBkZXNjcmlwdGlvbiB3aGlsZSBzZWFyY2hpbmcgb3IgYSBwYWdlIHRpdGxlIHNob3duIGluIHRoZSB0YWJcclxuICAgIC8vIEFkZCBieSB1c2luZyB0aGUgSGVhZCBpbXBvcnQgZnJvbSAnbmV4dC9oZWFkJy4gQWRkIGluIEpTWCBvZiB0aGUgYmVsb3cgSG9tZVBhZ2UocHJvcHMpO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4vL2ltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiIDtcclxuXHJcbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbi8vICAgICB7ICBcclxuLy8gICAgICAgICBpZDogJ20xJyxcclxuLy8gICAgICAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcclxuLy8gICAgICAgICBpbWFnZTogXCJodHRwczovL3RodW1ib3IudGhlZGFpbHltZWFsLmNvbS9PYUNHc0lFMWlIN3VvYjBONXdaWVA1NnB2bGs9LzE1NjB4MzkwL2ZpbHRlcnM6Zm9jYWwoODA1eDg5OTo4MDZ4OTAwKTpmb3JtYXQod2VicCkvaHR0cHM6Ly93d3cudGhlYWN0aXZldGltZXMuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvMjAyMC8wNS8xMy9OYXR1cmVfUGhvdG9zX0dldHR5X2hlcm8uanBnXCIsXHJcbi8vICAgICAgICAgYWRkcmVzczogXCJTb21lIEFkZHJlc3MgMSwgMTIzNDUgQ2xvd24gQ2l0eVwiLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICdtMicsXHJcbi8vICAgICAgICAgdGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxyXG4vLyAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LnBsYW5ldHdhcmUuY29tL3dwaW1hZ2VzLzIwMjAvMDEvcGVubnN5bHZhbmlhLWluLXBpY3R1cmVzLWJlYXVmaWZ1bC1wbGFjZXMtdG8tcGhvdG9ncmFwaC1kZWxhd2FyZS13YXRlci1nYXAuanBnXCIsXHJcbi8vICAgICAgICAgYWRkcmVzczogXCJTb21lIEFkZHJlc3MgMiwgNjc4OTEwIEdvdGhhbSBDaXR5XCIsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIFNlY29uZCBNZWV0dXAhXCJcclxuLy8gICAgIH1cclxuLy8gXVxyXG5cclxuLy8gR2V0IHNldHVwIGZvciBjYWxsaW5nIHRvIGJhY2tlbmQgYXQgc3RhcnQgb2YgcGFnZSBieSB1c2VFZmZlY3QsIHVzZVN0YXRlIGltcG9ydHNcclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAgIC8qIFNFTyBiZWNvbWVzIG1lc3NlZCB1cCB0aGlzIHdheSwgdXNlcyBmaXJzdCBIVE1MIGxvYWQvcmVuZGVyLCBsaXN0IGl0ZW1zIGFyZW4ndCBzaG93biBpbiB0aGUgdmlldyBzb3VyY2UgcmlnaHQgY2xpY2tcclxuICAgICAgICAgVGhpcyBoZWxwcyB0byBzaG93IHRoYXQgY2FsbCB0byBiYWNrZW5kIHdvdWxkbid0IHNob3csIGEgbWlub3IgZmxhdyBpbiBOZXh0SlMsIGJ1dCB0aGVyZSBpcyBhIHNvbHV0aW9uLi4uXHJcblxyXG4gICAgIFRoaXMgc3RhdGUgd2lsbCBzdG9yZSB0aGUgbWVldHVwcyBkYXRhLCBhcyBvZiBzdGFydCwgc2V0IHRvIGVtcHR5IGFycmF5XHJcbiAgICAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgIHVzZUVmZmVjdCgpIG9uIHN0YXJ0IG9mIHBhZ2UgdG8gcmV0cmlldmUgZGF0YSBmcm9tIGJhY2tlbmQgLT4gbm8gYmFja2VuZCB5ZXQsIGJ1dCBqdXN0IHJldHJpZXZlIGR1bW15IGRhdGFcclxuICAgICAgICAgIGVtcHR5IGRlcGVuZGVuY3kgYXJyYXksIHNlbmQgbG9hZGVkTWVldHVwcyB3aGljaCBpcyBjaGFuZ2VkIGJ5IHN0YXRlIGluIHVzZUVmZmVjdCgpXHJcbiAgICAgICAgICAgICAgc2V0IHByb3BzIG9mIG1lZXR1cHMgdG8gbG9hZGVkTWVldHVwc1xyXG4gICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcclxuICAgICB9LCBbXSk7ICovXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgey8qICB1c2UgPEhlYWQ+PC9IZWFkPiB0YWdzIGluIHRoaXNcclxuICAgICAgICAgTGF5b3V0IHVzZXMgTWFpbk5hdmlnYXRpb24uanNcclxuICAgICAgICAgICAgIG1ha2Ugc3VyZSB0byBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbiAgICAgICAgICAgICBpbiBNYWluTmF2aWdhdGlvbi5qcyBvciBlbHNlIGFuIGVycm9yIHdpbGwgc2hvdy5cclxuICAgICAgICAgICAgIG5vdCByZWFjdCByb3V0ZXIgZWl0aGVyIHNvIGNoYW5nZSB0byBwcm9wZXJ0eSB0byBocmVmIHByb3BlcnR5XHJcbiAgICAgICAgICAgICBubyBuZWVkIGZvciBMYXlvdXQgd3JhcHBlciBoZXJlLCBvbmx5IGluIF9hcHAuanNcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICBtYWtlIHN1cmUgdG8gY2hhbmdlIHRoaXMgdG8gcHJvcHMubWVldHVwcyB3aGljaCBpcyBjYWxsZWQgZnJvbSBwcm9wcyBpbiBmdW5jdGlvbiBiZWxvd1xyXG4gICAgICAgIDwvTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICB7LyogVGl0bGUgb2YgUGFnZSBpbiBNZXRhRGF0YSBpcyBSZWFjdCBNZWV0dXBzLCBub3QgbG9jYWxob3N0OjMwMDAgYW55bW9yZSAtPiBjYW4gYWxzbyBzZWUgaW4gZGV2dG9vbHMgYW5kIHZpZXcgc291cmNlIG9mIHBhZ2UgKi99XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwcyE8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgey8qIFRoaXMgaXMgdGhlIG1ldGEgZGVzY3JpcHRpb24sIEdvb2dsZSdzIGlzIFwiU2VhcmNoIHRoZSB3b3JsZCdzIGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgd2VicGFnZXMsIGltYWdlcywgdmlkZW9zIGFuZCBtb3JlLiBcclxuICAgICAgICAgICAgICAgIEdvb2dsZSBoYXMgbWFueSBzcGVjaWFsIGZlYXR1cmVzIHRvIGhlbHAgeW91IGZpbmQgZXhhY3RseSB3aGF0IHlvdSdyZSBsb29raW5nIC4uLlwiICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD0nQnJvd3NlIGEgaHVnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgUmVhY3QgbWVldHVwcyEnIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfS8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIHJlLXJ1bnMgb24gZXZlcnkgcmVxdWVzdCB3aGljaCBtYXkgc2VlbSBwb3NpdGl2ZSwgYnV0IGNvdWxkIGJlIG5lZ2F0aXZlIGJ5OlxyXG4gICAgLy8gbmVlZGluZyB0byB3YWl0IGZvciBwYWdlIHRvIGJlIGdlbmVyYXRlZCBieSBldmVyeSBpbmNvbWluZyByZXF1ZXN0XHJcbiAgICAgICAgLy8gSWYgcGFnZSBjaGFuZ2VzIG11bHRpcGxlIHRpbWVzIGV2ZXJ5IHNlY29uZHMgb3IgbmVlZCBhY2Nlc3MgdG8gcmVxdWVzdC9yZXNwb25zZSwgdGhlbiB1c2luZyB0aGlzIGlzIGJldHRlclxyXG4gICAgICAgICAgICAvLywgZWxzZSB1c2UgZ2V0U3RhdGljUHJvcHMoKVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICAgIC8vIGFjY2VzcyB0byBpbmNvbWluZyByZXF1ZXN0cyBhbmQgcmVzcG9uc2UgdmlhIHRoZSBjb250ZXh0IGtleXdvcmQgYnkgcmVxIGFuZCByZXMgcHJvcGVydHlcclxuLy8gICAgIGNvbnN0IHJlcT0gY29udGV4dC5yZXE7XHJcbi8vICAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbi8vICAgICAvLyBjYW4gc3RpbGwgZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSSwgYWxzbyBydW5zIG9uIHNlcnZlciBsaWtlIGJlbG93IGZ1bmN0aW9uICAgIFxyXG4vLyAgICAgICAgIC8vIG5vIG5lZWQgZm9yIHJldmFsaWRhdGUsIHNpbmNlIGl0IHJlIHJlbmRlcnMgb24gZXZlcnkgcmVxdWVzdC5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtEVU1NWV9NRUVUVVBTfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0byBkYXRhIGZldGNoIGZvciBzdGF0aWMgcGFnZXMsIGNhbiBiZSBhc3luY2hyb25vdXNcclxuICAgIC8vIFRoaXMgY29kZSB3b24ndCBldmVyIGV4ZWN1dGUgb24gdGhlIGNsaWVudCBzaWRlIC0+IG5ldmVyIGV4ZWN1dGVzIG9uIHBhZ2Ugb3MgdXNlcidzIHBhZ2VzLlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJLCBhbHdheXMgcmV0dXJuIGFuIG9iamVjdCBpbiBoZXJlXHJcbiAgICAgICAgLy8gdGhlIHByb3BzIHByb3BlcnR5IG9mIHRoZSByZXR1cm4gb2JqZWN0IGlzIGFuIG9iamVjdCBpdHNlbGYgYW5kIGlzIHRoZSBwcm9wcyBzZW50IHVwIHRvIEhvbWVQYWdlKHByb3BzKSBhYm92ZVxyXG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIG5lZWQgZm9yIHVzZVN0YXRlIGFuZCB1c2VFZmZlY3QgaW4gdGhlIEhvbWVQYWdlKCkgRm4gYWJvdmUuXHJcbiAgICAgICAgICAgICAgICAvLyBXaGF0IHdvdWxkIG5vcm1hbGx5IHJlcHJlc2VudCBnZXR0aW5nIGRhdGEgZnJvbSBhIGJhY2tlbmQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBiZWNhdXNlIHRoZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbnQgdXAgcHJvcHMgdG8gdGhlIGNvbXBvbmVudCBmdW5jdGlvbiBhYm92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYW4gYmUgZmV0Y2hlZCBpbiB0aGlzIGZ1bmN0aW9uIGFuZCBzZW50IGluLCB3aGljaCBpbiB0aGUgZW5kIGhhcHBlbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBwcmUtcmVuZGVyIHByb2Nlc3MoU2VydmVyIFNpZGUpIHJhdGhlciB0aGFuIG9uIHRoZSBjbGllbnQgc2lkZSBsaWtlIGFib3ZlIGRvZXNcclxuICAgICAgICBcclxuICAgIC8vIE5vIG5lZWQgdG8gY2FsbCBhbmQgY3JlYXRlIGFub3RoZXIgQVBJIHJvdXRlIHRvIGZldGNoIGZyb20sIGNhbiBqdXN0IGRvIEFQSSByb3V0ZSBjcmVhdGlvbiBhbmQgY2FsbCBpbiBoZXJlP1xyXG4gICAgICAgIC8vIFNpbWlsYXIgdG8gY2FsbCBpbiBuZXctbWVldHVwLmpzXHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9YYW5kZXJfTWlrOklzYWlhaDU1QGNsdXN0ZXIwLmhqdXVuLm1vbmdvZGIubmV0L3Rlc3REYj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIilcclxuICAgICAgICAvLyBnZXQgaG9sZCBvZiBkYXRhYmFzZSBieTpcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgLy8gZ2V0IGFjY2VzcyB0byBtZWV0dXBzIGNvbGxlY3Rpb24gd2hpY2ggaXMgaW4gdGhlIERCIC0+IE5vU1FMIERCIGNvbGxlY3Rpb25zIGZ1bGwgb2YgZG9jdW1lbnRzIGluIE1vbmdvREJcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcblxyXG4gICAgLy8gYW4gYXN5bmMgdGFzayB0aGF0IHJldHVybnMgYSBwcm9taXNlLCByZXR1cm5zIGFsbCBkb2N1bWVudHMgaW4gY29sbGVjdGlvbiBieSBkZWZhdWx0IC0+IGNoYW5nZSB0byBhcnJheSBvZiBkb2NzL29iamVjdHNcclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICAgIC8vIGNsb3NlIGNvbm5lY3Rpb24gdG8gREIgb25jZSBkb25lXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLy8gbWFwIHRoaXMgdG8gbmV3IGFycmF5IGJlY3Vhc2UgaWQgZmllbGQgaXMgd2VpcmQgaW4gTW9uZ29EYiBhbmQgaXMgX2lkIGZpcnN0IGFuZCBzZWNvbmRzIGl0J3MgdmFsdWUgaXMgT2JqZWN0IHdyYXBwZWQgYXJvdW5kIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICAvL21hcCB0byBhIG5ldyBhcnJheSAgd2l0aCBfaWQudG9TdHJpbmcoKSwgYWxzbyB3ZSBvbmx5IG5lZWQgaW1hZ2UsIHRpdGxlLCBhbmQgYWRkcmVzcywgbm8gZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byB3cmFwIG9iamVjdCBpbiAoKSBvciBlbHNlIHRoZSBwcHJvcGVydGllcyB3aWxsIHJldHVybiByYW5kb20gdW5rbm93biBlcnJvcnNcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gUHJvYmxlbSB3aXRoIHRoaXMsIGl0IG9ubHkgY2FsbHMgb24gdGhlIGJlZ2lubmluZywgZGF0YSBjYW4gYmUgb3V0ZGF0ZWQgaWYgbm8gY2xpZW50LXNpZGUgdXBkYXRpbmdcclxuICAgICAgICAgICAgLy8gc28gaWYgYSBuZXcgbWVldHVwIHdhcyBhZGRlZCB0byB0aGUgYmFja2VuZCwgaXQgd291bGRuJ3Qgc2hvdyBvbiB0aGUgcGFnZSBiZWNhdXNlIHByZS1yZW5kZXJcclxuICAgICAgICAgICAgICAgIC8vICBvbmx5IHNob3dzIHdoYXRzIGluaXRpYWxseSBjYWxsZWQgbm90IHdoYXQncyBhZGRlZFxyXG4gICAgICAgIC8vIFRoaXMgcmV2YWxpZGF0ZSBwcm9wZXJ0eSBmaXhlcyB0aGF0IGJ5IHJldmFsaWRhdGluZyB0aGUgcGFnZSBldmVyeSAjIG9mIHNlY29uZHMsXHJcbiAgICAgICAgICAgIC8vIHNvIGlmIG5ldyBkYXRhIGlzIGFkZGVkIHRvIHRoZSBiYWNrZW5kLCB3aWxsIHNob3cgb24gdGhlIG51bWJlciBvZiBzZWNvbmRzIHNob3duLlxyXG4gICAgICAgIC8vIElmIHlvdSB3YW50IHRvIHJlYnVpbGQgb24gZXZlcnkgcmVxdWVzdCwgdXNlIGEgZGlmZmVyZW50IGZ1bmN0aW9uIHNlcnZlciBzaWRlIHJlbmRlcmluZyBieShnZXRTZXJ2ZXJTaWRlUHJvcHMoKSlcclxuICAgICAgICByZXZhbGlkYXRlOiAxXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==