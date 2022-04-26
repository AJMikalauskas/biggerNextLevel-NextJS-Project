module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
// This is an api endpoint. need api folder in pages folder keyname specific.
// This is only run on the server, can send credentials because it's not compromised by the client
// These api endpoints are called in component functions -> this api endpoint is -> "/api/new-meetup"
// In req and res you can access headers, method, JSON, body,  etc... similar to NodeJS and ExpressJS 
//MongoDB is connected with a my account : xjmikalauskas@gmail.com
// imports are below


async function handler(req, res) {
  // only use request if it's a POST request
  //optional: could add error handling via try catch or specifically for this
  if (req.method === "POST") {
    // access body of the POST reqeust whcih contains object of things extracted from object destructure below
    const data = req.body; //use object destructuring to know what we get out of this
    //expect title, image, description, id, address
    //const { title, image, address, description } = data;
    // Stored in DB(MongoDB) 
    // use connection string from MongoDB when click connect btn -> replace <password> with password 
    // and can replace myFirstDatabase with any DB name you want, secure place to store credentials because on server not client
    // returns a promise which is handled by making this an async function

    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://Xander_Mik:Isaiah55@cluster0.hjuun.mongodb.net/testDb?retryWrites=true&w=majority"); // get hold of database by, if not existed yet, created on the fly:

    const db = client.db(); // get access to meetups collection which is in the DB -> NoSQL DB collections full of documents in MongoDB
    // collections hold multiple entries/documents, creates collection on the fly if not existed yet when called
    // .collection()

    const meetupsCollection = db.collection('meetups'); // Inserts one document/entry into document, there are also many other command in mongoDB including adding/removing mutliple
    // destructuring becomes unneccessary aboe, can just add the data which is the request body
    // object is expected in insertOne() and is still passed in via insertOne()
    // get result of operation asynchronously with auto generated id

    const result = await meetupsCollection.insertOne(data);
    console.log(result); // close DB connection once done adding to DB

    client.close(); // send back response -> like node and express JS, 201 means somethings was successfully added
    // message property in .json() isn't required but it's just to send to the user/page that it was successfully called and completed

    res.status(201).json({
      message: 'Meetup Inserted!'
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUNJO0FBQ0k7QUFHWjtBQUNJO0FBQ0o7O0FBQ0EsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzdCO0FBQ0k7QUFDSixNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFsQixFQUEwQjtBQUN0QjtBQUNBLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQixDQUZzQixDQUl0QjtBQUNJO0FBQ0o7QUFDQTtBQUNJO0FBQ0k7QUFDUjs7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQixpR0FBcEIsQ0FBckIsQ0FYc0IsQ0FZdEI7O0FBQ0EsVUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWCxDQWJzQixDQWV0QjtBQUNJO0FBQ0k7O0FBQ1IsVUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUIsQ0FsQnNCLENBbUJ0QjtBQUNJO0FBQ0k7QUFDSTs7QUFDWixVQUFNQyxNQUFNLEdBQUcsTUFBT0YsaUJBQWlCLENBQUNHLFNBQWxCLENBQTRCVCxJQUE1QixDQUF0QjtBQUNBVSxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQXhCc0IsQ0EwQnRCOztBQUNBTixVQUFNLENBQUNVLEtBQVAsR0EzQnNCLENBNkJ0QjtBQUNJOztBQUNKZCxPQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFyQjtBQUNIO0FBQ0o7O0FBRWNuQixzRUFBZixFOzs7Ozs7Ozs7OztBQy9DQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvbmV3LW1lZXR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanNcIik7XG4iLCIvLyBUaGlzIGlzIGFuIGFwaSBlbmRwb2ludC4gbmVlZCBhcGkgZm9sZGVyIGluIHBhZ2VzIGZvbGRlciBrZXluYW1lIHNwZWNpZmljLlxyXG4gICAgLy8gVGhpcyBpcyBvbmx5IHJ1biBvbiB0aGUgc2VydmVyLCBjYW4gc2VuZCBjcmVkZW50aWFscyBiZWNhdXNlIGl0J3Mgbm90IGNvbXByb21pc2VkIGJ5IHRoZSBjbGllbnRcclxuICAgICAgICAvLyBUaGVzZSBhcGkgZW5kcG9pbnRzIGFyZSBjYWxsZWQgaW4gY29tcG9uZW50IGZ1bmN0aW9ucyAtPiB0aGlzIGFwaSBlbmRwb2ludCBpcyAtPiBcIi9hcGkvbmV3LW1lZXR1cFwiXHJcbiAgICAgICAgICAgIC8vIEluIHJlcSBhbmQgcmVzIHlvdSBjYW4gYWNjZXNzIGhlYWRlcnMsIG1ldGhvZCwgSlNPTiwgYm9keSwgIGV0Yy4uLiBzaW1pbGFyIHRvIE5vZGVKUyBhbmQgRXhwcmVzc0pTIFxyXG5cclxuXHJcbi8vTW9uZ29EQiBpcyBjb25uZWN0ZWQgd2l0aCBhIG15IGFjY291bnQgOiB4am1pa2FsYXVza2FzQGdtYWlsLmNvbVxyXG4gICAgLy8gaW1wb3J0cyBhcmUgYmVsb3dcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gb25seSB1c2UgcmVxdWVzdCBpZiBpdCdzIGEgUE9TVCByZXF1ZXN0XHJcbiAgICAgICAgLy9vcHRpb25hbDogY291bGQgYWRkIGVycm9yIGhhbmRsaW5nIHZpYSB0cnkgY2F0Y2ggb3Igc3BlY2lmaWNhbGx5IGZvciB0aGlzXHJcbiAgICBpZihyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgIC8vIGFjY2VzcyBib2R5IG9mIHRoZSBQT1NUIHJlcWV1c3Qgd2hjaWggY29udGFpbnMgb2JqZWN0IG9mIHRoaW5ncyBleHRyYWN0ZWQgZnJvbSBvYmplY3QgZGVzdHJ1Y3R1cmUgYmVsb3dcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIC8vdXNlIG9iamVjdCBkZXN0cnVjdHVyaW5nIHRvIGtub3cgd2hhdCB3ZSBnZXQgb3V0IG9mIHRoaXNcclxuICAgICAgICAgICAgLy9leHBlY3QgdGl0bGUsIGltYWdlLCBkZXNjcmlwdGlvbiwgaWQsIGFkZHJlc3NcclxuICAgICAgICAvL2NvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcclxuICAgICAgICAvLyBTdG9yZWQgaW4gREIoTW9uZ29EQikgXHJcbiAgICAgICAgICAgIC8vIHVzZSBjb25uZWN0aW9uIHN0cmluZyBmcm9tIE1vbmdvREIgd2hlbiBjbGljayBjb25uZWN0IGJ0biAtPiByZXBsYWNlIDxwYXNzd29yZD4gd2l0aCBwYXNzd29yZCBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBjYW4gcmVwbGFjZSBteUZpcnN0RGF0YWJhc2Ugd2l0aCBhbnkgREIgbmFtZSB5b3Ugd2FudCwgc2VjdXJlIHBsYWNlIHRvIHN0b3JlIGNyZWRlbnRpYWxzIGJlY2F1c2Ugb24gc2VydmVyIG5vdCBjbGllbnRcclxuICAgICAgICAvLyByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCBpcyBoYW5kbGVkIGJ5IG1ha2luZyB0aGlzIGFuIGFzeW5jIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vWGFuZGVyX01pazpJc2FpYWg1NUBjbHVzdGVyMC5oanV1bi5tb25nb2RiLm5ldC90ZXN0RGI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpXHJcbiAgICAgICAgLy8gZ2V0IGhvbGQgb2YgZGF0YWJhc2UgYnksIGlmIG5vdCBleGlzdGVkIHlldCwgY3JlYXRlZCBvbiB0aGUgZmx5OlxyXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgICAgIC8vIGdldCBhY2Nlc3MgdG8gbWVldHVwcyBjb2xsZWN0aW9uIHdoaWNoIGlzIGluIHRoZSBEQiAtPiBOb1NRTCBEQiBjb2xsZWN0aW9ucyBmdWxsIG9mIGRvY3VtZW50cyBpbiBNb25nb0RCXHJcbiAgICAgICAgICAgIC8vIGNvbGxlY3Rpb25zIGhvbGQgbXVsdGlwbGUgZW50cmllcy9kb2N1bWVudHMsIGNyZWF0ZXMgY29sbGVjdGlvbiBvbiB0aGUgZmx5IGlmIG5vdCBleGlzdGVkIHlldCB3aGVuIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgLy8gLmNvbGxlY3Rpb24oKVxyXG4gICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcbiAgICAgICAgLy8gSW5zZXJ0cyBvbmUgZG9jdW1lbnQvZW50cnkgaW50byBkb2N1bWVudCwgdGhlcmUgYXJlIGFsc28gbWFueSBvdGhlciBjb21tYW5kIGluIG1vbmdvREIgaW5jbHVkaW5nIGFkZGluZy9yZW1vdmluZyBtdXRsaXBsZVxyXG4gICAgICAgICAgICAvLyBkZXN0cnVjdHVyaW5nIGJlY29tZXMgdW5uZWNjZXNzYXJ5IGFib2UsIGNhbiBqdXN0IGFkZCB0aGUgZGF0YSB3aGljaCBpcyB0aGUgcmVxdWVzdCBib2R5XHJcbiAgICAgICAgICAgICAgICAvLyBvYmplY3QgaXMgZXhwZWN0ZWQgaW4gaW5zZXJ0T25lKCkgYW5kIGlzIHN0aWxsIHBhc3NlZCBpbiB2aWEgaW5zZXJ0T25lKClcclxuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgcmVzdWx0IG9mIG9wZXJhdGlvbiBhc3luY2hyb25vdXNseSB3aXRoIGF1dG8gZ2VuZXJhdGVkIGlkXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgIG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAvLyBjbG9zZSBEQiBjb25uZWN0aW9uIG9uY2UgZG9uZSBhZGRpbmcgdG8gREJcclxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgLy8gc2VuZCBiYWNrIHJlc3BvbnNlIC0+IGxpa2Ugbm9kZSBhbmQgZXhwcmVzcyBKUywgMjAxIG1lYW5zIHNvbWV0aGluZ3Mgd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZFxyXG4gICAgICAgICAgICAvLyBtZXNzYWdlIHByb3BlcnR5IGluIC5qc29uKCkgaXNuJ3QgcmVxdWlyZWQgYnV0IGl0J3MganVzdCB0byBzZW5kIHRvIHRoZSB1c2VyL3BhZ2UgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IGNhbGxlZCBhbmQgY29tcGxldGVkXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdNZWV0dXAgSW5zZXJ0ZWQhJ30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==