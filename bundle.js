/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Travelers {
  constructor (data) {
    this.allTravelers = data;
    this.createdTravelers = [];
  }

  createAllTravelers() {
    this.allTravelers.forEach((user) => {
      let uniqueTraveler = new _Traveler__WEBPACK_IMPORTED_MODULE_0__.default(user);
      this.createdTravelers.push(uniqueTraveler);
    })
  }

  findTraveler(data) {
    let result = this.createdTravelers.find((traveler) => {
      return traveler.login === data;
    }) 
    return result;
  }

  getRandomUser() {
    return Math.floor(Math.random() * this.createdTravelers.length);
  }
}
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Travelers);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.login = 'traveler' + data.id;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Traveler);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Destinations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


class Trips {
  constructor(tripsData, destinationData) {
    this.trips = tripsData;
    this.destinations = destinationData;
    this.createdDestinations = [];
  }
  createDestinations() {
    this.destinations.forEach((destination) => {
      let uniqueDestination = new _Destinations__WEBPACK_IMPORTED_MODULE_0__.default(destination);
      this.createdDestinations.push(uniqueDestination);
    })
  }
  findAllTrips(data) {
    let result = this.trips.filter((trip) => {
      return trip.userID === data;
    })
    return result;
  }
  calculateTotalCost(id) {
    let total = 0;
    let trips = this.findAllTrips(id).filter((data) => {
      return (data.date <= "2021/12/31" && data.date >= "2021/01/01" && data.status === 'approved');
    });
    trips.forEach((trip) => {
      let specificTrip = this.createdDestinations.find((destination) => {
        return destination.id === trip.destinationID;
      })
      total += specificTrip.estimatedFlightCostPerPerson;
      total += trip.duration * specificTrip.estimatedLodgingCostPerDay;  
    })
    return Math.round(100 * (total * 1.1)) / 100;
  }
  findDestination(data) {
    let result = this.createdDestinations.find((destination) => {
      return destination.id === data;
    })
    return result.destination;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trips);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Destinations {
  constructor(obj) {
    this.id = obj.id;
    this.destination = obj.destination;
    this.estimatedLodgingCostPerDay = obj.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = obj.estimatedFlightCostPerPerson;
    this.image = obj.img;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Destinations);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This is an example of how to import a partial scss file*/\nbody {\n  background: url(\"https://i.redd.it/gkg933hkexz71.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.dashboard {\n  border-radius: 1px;\n}\n\nh1 {\n  display: flex;\n  justify-content: center;\n}\n\n.all-trips {\n  background: #593786;\n  height: 156px;\n  width: 50%;\n  overflow: auto;\n  float: left;\n  position: relative;\n  border-radius: 1px;\n  border-color: #db437c;\n}\n\n.pending-trips {\n  background: #03001b;\n  height: 200px;\n  width: 100%;\n  overflow: auto;\n  float: left;\n  position: relative;\n}\n\n.traveler-trip {\n  border: 1px solid #db437c;\n  color: #f0f0f0;\n}\n\n.total-spent {\n  background: #593786;\n  height: 156px;\n  width: 50%;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: xx-large;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font: arial;\n}\n\n.login-page {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n}\n\n.login-error {\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.cost {\n  display: flex;\n  justify-content: end;\n}\n\n.new-trip-form,\n.total-cost,\n.all-trips.message,\n.submitted-trips,\n.total-spent {\n  color: #f0f0f0;\n}", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"AAAA,2DAAA;AAGA;EACE,sDAAA;EACA,sBAAA;EACA,4BAAA;EACA,4BAAA;EACA,yCAAA;AADF;;AAIA;EACE,kBAAA;AADF;;AASA;EAJE,aAAA;EACA,uBAAA;AADF;;AAQA;EACE,mBCvBgB;EDwBhB,aAAA;EACA,UAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBC/Bc;AD0BhB;;AAQA;EACE,mBCjCe;EDkCf,aAAA;EACA,WAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;AALF;;AAQA;EACE,yBAAA;EACA,cC9CmB;ADyCrB;;AAQA;EACE,mBChDgB;EDiDhB,aAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AALF;;AAQA;EACE,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;AALF;;AAQA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;AALF;;AAQA;EACE,UAAA;AALF;;AAQA;EACE,kBAAA;AALF;;AAQA;EACE,aAAA;EACA,oBAAA;AALF;;AAQC;;;;;EAKC,cC5FmB;ADuFrB","sourcesContent":["/* This is an example of how to import a partial scss file*/\n@import '_variables';\n\nbody {\n  background: url('https://i.redd.it/gkg933hkexz71.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family:Arial, Helvetica, sans-serif\n}\n\n.dashboard {\n  border-radius: 1px;\n}\n\n@mixin header {\n  display: flex;\n  justify-content: center;\n}\n\nh1 {\n  @include header;\n}\n\n.all-trips {\n  background: $secondary-color;\n  height: 156px;\n  width: 50%;\n  overflow: auto;\n  float: left;\n  position: relative;\n  border-radius: 1px;\n  border-color: $primary-color;\n  }\n\n.pending-trips{\n  background: $tertiary-color;\n  height: 200px;\n  width: 100%;\n  overflow: auto;\n  float: left;\n  position: relative;\n}\n\n.traveler-trip {\n  border: 1px solid $primary-color;\n  color: $primary-font-color;\n}\n\n.total-spent {\n  background: $secondary-color;\n  height: 156px;\n  width: 50%;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: xx-large;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font: arial;\n}\n\n.login-page {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n}\n\n.login-error {\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;  \n}\n\n.cost {\n  display: flex;\n  justify-content: end;\n}\n\n .new-trip-form,\n .total-cost,\n .all-trips.message, \n .submitted-trips,\n .total-spent {\n  color: $primary-font-color;\n}","$primary-font-color: #f0f0f0;\n$primary-color: #db437c;\n$secondary-color: #593786;\n$tertiary-color: #03001b;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 10 */
/***/ ((module) => {

const getAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
const getAllTrips = fetch('http://localhost:3001/api/v1/trips')
const getAllDestinations = fetch('http://localhost:3001/api/v1/destinations')

module.exports = { getAllTravelers, getAllTrips, getAllDestinations }



/***/ }),
/* 11 */
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Travelers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_Trips_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apiCalls__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable max-len */




const dayjs = __webpack_require__(11);

let allTravelers;
let allTrips;
let currentUser;
let today = Date.now();

const pageTrips = document.querySelector(".all-trips");
const totalSpent = document.querySelector(".total-spent");
const destinationsList = document.querySelector("#places");
const planTripButton = document.querySelector(".new-trip-button");
const newTripForm = document.querySelector(".new-trip-form");
const newTripDate = document.querySelector("#new-trip-date");
const newTripDestination = document.querySelector("#destinations");
const newTripDuration = document.querySelector("#trip-duration");
const newTripPeopleCount = document.querySelector("#number-of-people");
const pendingTrips = document.querySelector(".pending-trips");
const submitTrip = document.querySelector(".submit-new-trip");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginButton = document.querySelector(".submit-login");
const loginPage = document.querySelector(".login-page");
const userDashboard = document.querySelector('.dashboard');
const loginError = document.querySelector('.login-error');
const homeMessage = document.querySelector('.home-message');
const priceCheck = document.querySelector('.total-cost');
const totalCostButton = document.querySelector('.check-price');
const submitErrorMessage = document.querySelector(".submit-error");
const submittedTripsForm = document.querySelector(".pending-trips");
const submittedTripsMessage = document.querySelector(".submitted-trips")

const updateToday = () => {
  newTripDate.value = Date.now();
  newTripDate.min = Date.now();
}

const userLogin = () => {
  let nameArray = username.value.split('r');
  if (password.value !== 'travel' || nameArray[2] > 50 || nameArray[2] < 1 ) {
    loginError.innerText = `Incorrect username / password`;
  } else {
    loginPage.classList.add('hidden');
    userDashboard.classList.remove('hidden');
    loginToDashboard();
  }
}

const planNewTrip = () => {
  pendingTrips.innerHTML += `
  <div class="traveler-trip">
      <p>Date: ${dayjs(newTripDate.value).format("dddd, MMMM D, YYYY")}</p> 
      <p>Destination: ${newTripDestination.value}</p> 
      <p>Trip length: ${newTripDuration.value} days.</p>
      <p>Total people: ${newTripPeopleCount.value}</p>
      <p>Price: $${calculateNewTripCost().toLocaleString()}
                + $${(calculateNewTripCost() * .1).toLocaleString()} (agent's fee) = Total: $${(Math.round(100 * (calculateNewTripCost() * 1.1)) / 100).toLocaleString()}</p>
      <p>Status: Pending</p>
  </div>  
  `;
}

const locateDestinationID = (newDestination) => {
  let result = allTrips.destinations.find((destination) => {
    return destination.destination === newDestination;
  })
  return result.id;
}

const submitNewTrip = () => {
  if (newTripDestination.value && newTripPeopleCount.value && newTripDuration.value && newTripDate.value) {
    let newTrip = {
      id: Math.floor(Math.random() * 10000) + 205,
      userID: currentUser.id, 
      destinationID: locateDestinationID(newTripDestination.value), 
      travelers: newTripPeopleCount.value,
      date: dayjs(newTripDate.value).format('YYYY/MM/DD'),
      duration: newTripDuration.value,
      status: 'pending',
      suggestedActivities: [],
    }
    postTrip(newTrip);
    submitErrorMessage.innerText = ``;
  } else {
    submitErrorMessage.innerText = `Please fill out all fields`;
  }
}

const postTrip = (data) => {
  fetch ('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .catch(error => window.alert(error));
}


const calculateNewTripCost = () => {
  let newDestination = newTripDestination.value;
  let destinationCost = allTrips.destinations.find((element) => {
    return element.destination === newDestination;
  });
  let result = 0;
  result += (destinationCost.estimatedLodgingCostPerDay * newTripDuration.value * newTripPeopleCount.value) + (destinationCost.estimatedFlightCostPerPerson * newTripPeopleCount.value );
  return result;
}

const pageLoad = () => {
  getData();
}

const getData = () => {
  Promise.all([_apiCalls__WEBPACK_IMPORTED_MODULE_3__.getAllTravelers, _apiCalls__WEBPACK_IMPORTED_MODULE_3__.getAllTrips, _apiCalls__WEBPACK_IMPORTED_MODULE_3__.getAllDestinations]).then(values => {
    return Promise.all(values.map(result => result.json()));
  }).then(values => {
    createTravelers(values[0].travelers)
    createTrips(values[1].trips, values[2].destinations);
    
  }).catch(error => window.alert(error));
}

const createTravelers = (data) => {
  allTravelers = new _src_Travelers__WEBPACK_IMPORTED_MODULE_0__.default(data)
  allTravelers.createAllTravelers();
}

const createTrips = (data, secondData) => {
  allTrips = new _src_Trips_js__WEBPACK_IMPORTED_MODULE_1__.default(data, secondData)
  allTrips.createDestinations();
}

const loginToDashboard = () => {
  getUserInfo();
  updateTrips();
  updateTotalSpent();
  updateHomeMessage();
  updateToday();
}

const getUserInfo = () => {
  currentUser = allTravelers.findTraveler(`${username.value}`);
}

const updateHomeMessage = () => {
  homeMessage.innerText = `Hi ${currentUser.name}!`;
}

const updateTrips = () => {
  let userTrips = allTrips.findAllTrips(currentUser.id)
  userTrips.forEach((trip) => {
    pageTrips.innerHTML += `
        <div class="traveler-trip">
            <p>Date: ${dayjs(trip.date).format("dddd, MMMM D, YYYY")}</p> 
            <p>Destination: ${allTrips.findDestination(trip.destinationID)}</p> 
            <p>Trip length: ${trip.duration} days.</p>
            <p>Status: ${trip.status} </p>
        </div>  
        `
  })
}

const updateTotalSpent = () => {
  totalSpent.innerText += `
  You have spent $${allTrips.calculateTotalCost(currentUser.id).toLocaleString()} this year.
  `;
}

const addDestinations = () => {
  let list = allTrips.createdDestinations.map((each) => {
    return `<option value="${each.destination}">`
  });
  list.forEach((destination) => {
    destinationsList.innerHTML += destination;
  })
}

const showNewTripForm = () => {
  addDestinations();
  newTripForm.classList.remove('hidden');
}

const submitNewTripForm = () => {
  submitNewTrip();
  planNewTrip();
  newTripDate.value = today;
  newTripDuration.value = ``;
  newTripDestination.value = ``;
  newTripPeopleCount.value = ``;
  pendingTrips.value = ``;
  showNewTripForm();
  showSubmittedTrips();
}

const calculateTotal = () => {
  if (newTripDate.value < today) {
    priceCheck.innerText = "Please select a valid date.";
  } else if (newTripDestination.value && newTripPeopleCount.value && newTripDuration.value && newTripDate.value) {
    priceCheck.innerText = `Trip cost: $${calculateNewTripCost().toLocaleString()}
  + $${(calculateNewTripCost() * .1).toLocaleString()} (agent's fee) 
  = Total: $${(Math.round(100 * (calculateNewTripCost() * 1.1)) / 100).toLocaleString()}`;
    submitErrorMessage.innerText = ``;
  } else {
    priceCheck.innerText = "Please select all options."
  }
}

const showSubmittedTrips = () => {
  submittedTripsForm.classList.remove("hidden");
  submittedTripsMessage.classList.remove("hidden");
}

window.addEventListener('load', pageLoad);
planTripButton.addEventListener('click', showNewTripForm);
submitTrip.addEventListener('click', submitNewTripForm);
loginButton.addEventListener('click', userLogin);
totalCostButton.addEventListener('click', calculateTotal);
password.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    userLogin();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map