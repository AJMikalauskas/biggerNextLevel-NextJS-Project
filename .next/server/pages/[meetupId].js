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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\ReactJS Beginner's Course\\Section 23 - Next Level NextJS Project\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupDetail.js";
// Dynamic ability by using props here, called and set in [meetupId] index.js MeetupDetails function



function MeetupDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetail);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);

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
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: props.meetupData.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: props.meetupData.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__["default"], {
        image: props.meetupData.image,
        title: props.meetupData.title,
        address: props.meetupData.address,
        description: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
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


async function getStaticPaths() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect("mongodb+srv://Xander_Mik:Isaiah55@cluster0.hjuun.mongodb.net/testDb?retryWrites=true&w=majority"); // get hold of database by:

  const db = client.db(); // get access to meetups collection which is in the DB -> NoSQL DB collections full of documents in MongoDB

  const meetupsCollection = db.collection('meetups'); // Work on the .find() to get all _id field values from the MongoDB
  // 1st param is to filter out specific documents
  // 2nd param is to filter out fields in the documents
  // by typing in _id:1, returns only 1 field which is the _id field for all document since no filter on documents
  // Convert to Array, and now populate paths object below with these by .map().

  const meetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  return {
    // .map() to an object with a key of params set equal to 
    /// the value of an object which contains meetupId as a key and meetup._id.toString() as a value to it
    // make sure to add comma correctly after params value object
    // replicate the hardcoded values below.
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    })),

    /*[
        These are from the id's in the dummy data in index.js in pages folder(Start Page)
        These params are any possible routes that could be dynamic
        This will be generated later in the backend
            Removed These Hardcoded values:
            { params: {meetupId: 'm1',},},
            {params: {meetupId: 'm2',},},
    ],*/
    // if fallback is set to false, any page that doesn't match the ids such as "/m3", would return 404
    // "/m1" or "/m2" would return respectable pages
    // if fallback is set to true and the user goes to "/m3", nextJs will try to generate a relative page for it
    // wouldn't return 404 on unknown route but rather nextJs generated page on the fly
    // Not helpful here because if the meetup doesn't exist nextJs generating the page would be buggy and unneccessary 
    fallback: false
  };
}
async function getStaticProps(context) {
  // fetch data for a single meetup
  // make props as a meetupData for props, which is an object
  // need to make dynamic for specific meetupPages, can't just put in data like dummy data
  // That's why context is used in the param of getStaticProps() 
  // it has a params key -> pulls dynamic name from [] which in this case is called 
  // by [meetupId]
  const meetupId = context.params.meetupId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect("mongodb+srv://Xander_Mik:Isaiah55@cluster0.hjuun.mongodb.net/testDb?retryWrites=true&w=majority"); // get hold of database by:

  const db = client.db(); // get access to meetups collection which is in the DB -> NoSQL DB collections full of documents in MongoDB

  const meetupsCollection = db.collection('meetups'); // need to send up props that are dynamic and not hardcoded
  // send up by finding and displaying data from the specific id passed into here or the .findOne() method
  // finds the document with the _id which is in the url -> need to convert to ObjectId as it is seen in MongoDb to find correctly
  // import { MongoClient, ObjectId} from 'mongodb';

  const selectedMeetup = await meetupsCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_2__["ObjectId"])(meetupId)
  }); // close client/DB after done using.

  client.close(); // need to convert weird ObjectId of the document to a string again by .toString(), can't just send in selectedMeetup
  // change in the above component function in the <MeetupDetail/> import

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  };
}
;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsInN0eWxlcyIsImRldGFpbCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJNZWV0dXBEZXRhaWxzIiwibWVldHVwRGF0YSIsImdldFN0YXRpY1BhdGhzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJwYXRocyIsIm1hcCIsIm1lZXR1cCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInNlbGVjdGVkTWVldHVwIiwiZmluZE9uZSIsIk9iamVjdElkIiwiY2xvc2UiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7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UnRCLGFBQUssRUFBQzBCLGNBQWMsQ0FBQzFCLEtBRmI7QUFHUkMsYUFBSyxFQUFDeUIsY0FBYyxDQUFDekIsS0FIYjtBQUlSQyxlQUFPLEVBQUV3QixjQUFjLENBQUN4QixPQUpoQjtBQUtSQyxtQkFBVyxFQUFDdUIsY0FBYyxDQUFDdkI7QUFMbkI7QUFEVDtBQURMLEdBQU47QUFXSDtBQUFBO0FBRWNDLDRFQUFmLEU7Ozs7Ozs7Ozs7O0FDL0dBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1ttZWV0dXBJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanNcIik7XG4iLCIgICAgLy8gRHluYW1pYyBhYmlsaXR5IGJ5IHVzaW5nIHByb3BzIGhlcmUsIGNhbGxlZCBhbmQgc2V0IGluIFttZWV0dXBJZF0gaW5kZXguanMgTWVldHVwRGV0YWlscyBmdW5jdGlvblxyXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZWV0dXBEZXRhaWwubW9kdWxlLmNzc1wiXHJcblxyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWwocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsfT5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17cHJvcHMuaW1hZ2V9XHJcbiAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXRhaWxcIjogXCJNZWV0dXBEZXRhaWxfZGV0YWlsX19DXzhJVFwiXG59O1xuIiwiLy8gVGhpcyBpcyB0aGUgbWVldHVwIGRldGFpbCBwYWdlIC0+IGxvY2FsaG9zdDozMDAwL2FueXRoaW5nXHJcbiAgICAvLyBUaGlzIGlzIGV4Y2VwdCBmb3Igc3BlY2lmaWVkIHRoaW5ncyBzdWNoIGFzIHRoZSBsb2NhbGhvc3Q6MzAwMC9uZXctbWVldHVwXHJcbiAgICAgICAgLy8gc2VlIGhvdyB0aGlzIHJvdXRlIGlzIGdvdCB0byBieSBNZWV0dXBJdGVtLmpzXHJcbi8vIERlZmF1bHQgRGF0YSBmb3Igbm93LCB3aWxsIGJlIGZldGNoZWQgZnJvbSBiYWNrZW5kIGluIHRoZSBmdXR1cmVcclxuICAgIC8vIFN0b3JlIGluIE1lZXR1cERldGFpbC5qcyBhbmQgYWRkIHN0eWxlcyB2aWEgTWVldHVwRGV0YWlsLm1vZHVsZS5jc3NcclxuICAgICAgICAvLyBEb24ndCBjcmVhdGUgSlNYIGluIHRoaXMgcGFnZSwgb3V0c291cmNlIHRvIGNvbXBvbmVudHNcclxuICAgICAgICAgICAgLy8gY2hhbmdlIGV2ZXJ5dGhpbmcgdG8gcHJvcHMgdG8gbWFrZSBpdCBkeW5hbWljLCBkaXNwa2F5cyB3aGF0IGlzIHNlbnQgaW4gZnJvbSBoZXJlLFxyXG4gICAgICAgICAgICAvLyBjb3VsZCBiZSBoZWxwZnVsIGZvciBmZXRjaGluZyBkYXRhIGZyb20gYmFja2VuZCB0b28/Pz9cclxuXHJcbmltcG9ydCAgTWVldHVwRGV0YWlsICBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsJ1xyXG5pbXBvcnQgIHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gVGhlc2UgZHluYW1pYyBwcm9wcyBhcmUgZnJvbSB0aGUgZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb24gcmV0dXJuIGZyb20gYmVsb3dcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHsvKiBUaGlzIGhlYWQgdGFnIGp1c3QgaG9sZHMgbWV0YWRhdGEgICovfVxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZWV0dXBEZXRhaWwgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX0gYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfSBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gc2luY2UgaXQncyBtYWlubHkgYmFzZWQgb24gdGhlIGNvbmNlcHQgb2YgcHJlLXJlbmRlciBwcm9jZXNzLCBkeW5hbWljIHJvdXRlcyBcclxuICAgIC8vIG5lZWQgdG8gYmUgcmVnZW5lcmF0ZWQgb24gbmV3IGR5bmFtaWMgcm91dGVzIHRoYXQgYXJlIGNyZWF0ZWQgb3Igd3JpdHRlbiBieSB0aGUgdXNlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9YYW5kZXJfTWlrOklzYWlhaDU1QGNsdXN0ZXIwLmhqdXVuLm1vbmdvZGIubmV0L3Rlc3REYj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIik7XHJcbiAgICAvLyBnZXQgaG9sZCBvZiBkYXRhYmFzZSBieTpcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgLy8gZ2V0IGFjY2VzcyB0byBtZWV0dXBzIGNvbGxlY3Rpb24gd2hpY2ggaXMgaW4gdGhlIERCIC0+IE5vU1FMIERCIGNvbGxlY3Rpb25zIGZ1bGwgb2YgZG9jdW1lbnRzIGluIE1vbmdvREJcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIC8vIFdvcmsgb24gdGhlIC5maW5kKCkgdG8gZ2V0IGFsbCBfaWQgZmllbGQgdmFsdWVzIGZyb20gdGhlIE1vbmdvREJcclxuICAgICAgICAvLyAxc3QgcGFyYW0gaXMgdG8gZmlsdGVyIG91dCBzcGVjaWZpYyBkb2N1bWVudHNcclxuICAgICAgICAvLyAybmQgcGFyYW0gaXMgdG8gZmlsdGVyIG91dCBmaWVsZHMgaW4gdGhlIGRvY3VtZW50c1xyXG4gICAgICAgICAgICAvLyBieSB0eXBpbmcgaW4gX2lkOjEsIHJldHVybnMgb25seSAxIGZpZWxkIHdoaWNoIGlzIHRoZSBfaWQgZmllbGQgZm9yIGFsbCBkb2N1bWVudCBzaW5jZSBubyBmaWx0ZXIgb24gZG9jdW1lbnRzXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gQXJyYXksIGFuZCBub3cgcG9wdWxhdGUgcGF0aHMgb2JqZWN0IGJlbG93IHdpdGggdGhlc2UgYnkgLm1hcCgpLlxyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHtfaWQ6MX0pLnRvQXJyYXkoKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAubWFwKCkgdG8gYW4gb2JqZWN0IHdpdGggYSBrZXkgb2YgcGFyYW1zIHNldCBlcXVhbCB0byBcclxuICAgICAgICAgICAgLy8vIHRoZSB2YWx1ZSBvZiBhbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgbWVldHVwSWQgYXMgYSBrZXkgYW5kIG1lZXR1cC5faWQudG9TdHJpbmcoKSBhcyBhIHZhbHVlIHRvIGl0XHJcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gYWRkIGNvbW1hIGNvcnJlY3RseSBhZnRlciBwYXJhbXMgdmFsdWUgb2JqZWN0XHJcbiAgICAgICAgLy8gcmVwbGljYXRlIHRoZSBoYXJkY29kZWQgdmFsdWVzIGJlbG93LlxyXG4gICAgICAgIHBhdGhzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHsgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSAsXHJcbiAgICAgICAgLypbXHJcbiAgICAgICAgICAgIFRoZXNlIGFyZSBmcm9tIHRoZSBpZCdzIGluIHRoZSBkdW1teSBkYXRhIGluIGluZGV4LmpzIGluIHBhZ2VzIGZvbGRlcihTdGFydCBQYWdlKVxyXG4gICAgICAgICAgICBUaGVzZSBwYXJhbXMgYXJlIGFueSBwb3NzaWJsZSByb3V0ZXMgdGhhdCBjb3VsZCBiZSBkeW5hbWljXHJcbiAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBnZW5lcmF0ZWQgbGF0ZXIgaW4gdGhlIGJhY2tlbmRcclxuICAgICAgICAgICAgICAgIFJlbW92ZWQgVGhlc2UgSGFyZGNvZGVkIHZhbHVlczpcclxuICAgICAgICAgICAgICAgIHsgcGFyYW1zOiB7bWVldHVwSWQ6ICdtMScsfSx9LFxyXG4gICAgICAgICAgICAgICAge3BhcmFtczoge21lZXR1cElkOiAnbTInLH0sfSxcclxuICAgICAgICBdLCovXHJcbiAgICAgICAgLy8gaWYgZmFsbGJhY2sgaXMgc2V0IHRvIGZhbHNlLCBhbnkgcGFnZSB0aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIGlkcyBzdWNoIGFzIFwiL20zXCIsIHdvdWxkIHJldHVybiA0MDRcclxuICAgICAgICAgICAgLy8gXCIvbTFcIiBvciBcIi9tMlwiIHdvdWxkIHJldHVybiByZXNwZWN0YWJsZSBwYWdlc1xyXG4gICAgICAgIC8vIGlmIGZhbGxiYWNrIGlzIHNldCB0byB0cnVlIGFuZCB0aGUgdXNlciBnb2VzIHRvIFwiL20zXCIsIG5leHRKcyB3aWxsIHRyeSB0byBnZW5lcmF0ZSBhIHJlbGF0aXZlIHBhZ2UgZm9yIGl0XHJcbiAgICAgICAgICAgIC8vIHdvdWxkbid0IHJldHVybiA0MDQgb24gdW5rbm93biByb3V0ZSBidXQgcmF0aGVyIG5leHRKcyBnZW5lcmF0ZWQgcGFnZSBvbiB0aGUgZmx5XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgaGVscGZ1bCBoZXJlIGJlY2F1c2UgaWYgdGhlIG1lZXR1cCBkb2Vzbid0IGV4aXN0IG5leHRKcyBnZW5lcmF0aW5nIHRoZSBwYWdlIHdvdWxkIGJlIGJ1Z2d5IGFuZCB1bm5lY2Nlc3NhcnkgXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dClcclxue1xyXG4gICAgLy8gZmV0Y2ggZGF0YSBmb3IgYSBzaW5nbGUgbWVldHVwXHJcbiAgICAgICAgLy8gbWFrZSBwcm9wcyBhcyBhIG1lZXR1cERhdGEgZm9yIHByb3BzLCB3aGljaCBpcyBhbiBvYmplY3RcclxuICAgICAgICAgICAgLy8gbmVlZCB0byBtYWtlIGR5bmFtaWMgZm9yIHNwZWNpZmljIG1lZXR1cFBhZ2VzLCBjYW4ndCBqdXN0IHB1dCBpbiBkYXRhIGxpa2UgZHVtbXkgZGF0YVxyXG4gICAgLy8gVGhhdCdzIHdoeSBjb250ZXh0IGlzIHVzZWQgaW4gdGhlIHBhcmFtIG9mIGdldFN0YXRpY1Byb3BzKCkgXHJcbiAgICAgICAgLy8gaXQgaGFzIGEgcGFyYW1zIGtleSAtPiBwdWxscyBkeW5hbWljIG5hbWUgZnJvbSBbXSB3aGljaCBpbiB0aGlzIGNhc2UgaXMgY2FsbGVkIFxyXG4gICAgICAgICAgICAvLyBieSBbbWVldHVwSWRdXHJcbiAgICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9YYW5kZXJfTWlrOklzYWlhaDU1QGNsdXN0ZXIwLmhqdXVuLm1vbmdvZGIubmV0L3Rlc3REYj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIik7XHJcbiAgICAvLyBnZXQgaG9sZCBvZiBkYXRhYmFzZSBieTpcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgLy8gZ2V0IGFjY2VzcyB0byBtZWV0dXBzIGNvbGxlY3Rpb24gd2hpY2ggaXMgaW4gdGhlIERCIC0+IE5vU1FMIERCIGNvbGxlY3Rpb25zIGZ1bGwgb2YgZG9jdW1lbnRzIGluIE1vbmdvREJcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIC8vIG5lZWQgdG8gc2VuZCB1cCBwcm9wcyB0aGF0IGFyZSBkeW5hbWljIGFuZCBub3QgaGFyZGNvZGVkXHJcbiAgICAgICAgLy8gc2VuZCB1cCBieSBmaW5kaW5nIGFuZCBkaXNwbGF5aW5nIGRhdGEgZnJvbSB0aGUgc3BlY2lmaWMgaWQgcGFzc2VkIGludG8gaGVyZSBvciB0aGUgLmZpbmRPbmUoKSBtZXRob2RcclxuICAgICAgICAgICAgLy8gZmluZHMgdGhlIGRvY3VtZW50IHdpdGggdGhlIF9pZCB3aGljaCBpcyBpbiB0aGUgdXJsIC0+IG5lZWQgdG8gY29udmVydCB0byBPYmplY3RJZCBhcyBpdCBpcyBzZWVuIGluIE1vbmdvRGIgdG8gZmluZCBjb3JyZWN0bHlcclxuICAgICAgICAgICAgICAgIC8vIGltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZH0gZnJvbSAnbW9uZ29kYic7XHJcbiAgICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe19pZDogT2JqZWN0SWQobWVldHVwSWQpfSk7XHJcblxyXG4gICAgLy8gY2xvc2UgY2xpZW50L0RCIGFmdGVyIGRvbmUgdXNpbmcuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIC8vIG5lZWQgdG8gY29udmVydCB3ZWlyZCBPYmplY3RJZCBvZiB0aGUgZG9jdW1lbnQgdG8gYSBzdHJpbmcgYWdhaW4gYnkgLnRvU3RyaW5nKCksIGNhbid0IGp1c3Qgc2VuZCBpbiBzZWxlY3RlZE1lZXR1cFxyXG4gICAgICAgIC8vIGNoYW5nZSBpbiB0aGUgYWJvdmUgY29tcG9uZW50IGZ1bmN0aW9uIGluIHRoZSA8TWVldHVwRGV0YWlsLz4gaW1wb3J0XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6c2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=