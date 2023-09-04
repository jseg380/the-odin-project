/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  min-height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  background-color: white;
  box-shadow: 3px 3px 5px lightgrey;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 4rem 6rem;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
}

.main-content__label {
  width: fit-content;
}

.main-content__label::after {
  content: ' *';
}

.main-content__input {
  --border-width: 2px;
  --border-type: solid;
  margin-top: 4px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: var(--border-width) var(--border-type) lightgrey;
  padding: 3px 5px;
  font-size: inherit;
}

.main-content__input:focus {
  outline: none;
  border: var(--border-width) var(--border-type) blue;
}

.main-content__input--valid {
  background-color: lightgreen;
  border: var(--border-width) var(--border-type) darkgrey;
}

.main-content__input--invalid {
  background-color: rgba(255, 0, 0, 0.55);
  border: var(--border-width) var(--border-type) black;
  margin-bottom: 4px;
}

.main-content__help {
  background-color: #F4F4F4;
  border-radius: 5px;
  padding: 4px 8px;
  color: black;
  font-family: 'Arial', sans-serif;
  font-weight: bolder;
  font-size: 0.6rem;
  margin-bottom: 18px;
}

.main-content__submit {
  width: fit-content;
  border-radius: 20px;
  border: 0;
  padding: 10px 20px;
  align-self: center;
  cursor: pointer;
}

.main-content__submit--active {
  background-color: lightgreen;
  translation: all 50ms ease-in-out;
}

.main-content__submit--active:hover {
  background-color: #6ECC71;
  box-shadow: 1px 1px 3px lightgrey;
}

.main-content__submit--active:active {
  transform: translateY(1px);
  box-shadow: 1px 1px 1px lightgrey;
}

.main-content__submit--invalid {
  background-color: #E5E5E5;
  color: #A0A0A0;
  cursor: not-allowed;
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,iCAAiC;EACjC,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,wDAAwD;EACxD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mDAAmD;AACrD;;AAEA;EACE,4BAA4B;EAC5B,uDAAuD;AACzD;;AAEA;EACE,uCAAuC;EACvC,oDAAoD;EACpD,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,gCAAgC;EAChC,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  background-color: aliceblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-content {\n  background-color: white;\n  box-shadow: 3px 3px 5px lightgrey;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  padding: 4rem 6rem;\n  font-family: 'Arial', sans-serif;\n  font-size: 1rem;\n}\n\n.main-content__label {\n  width: fit-content;\n}\n\n.main-content__label::after {\n  content: ' *';\n}\n\n.main-content__input {\n  --border-width: 2px;\n  --border-type: solid;\n  margin-top: 4px;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  border: var(--border-width) var(--border-type) lightgrey;\n  padding: 3px 5px;\n  font-size: inherit;\n}\n\n.main-content__input:focus {\n  outline: none;\n  border: var(--border-width) var(--border-type) blue;\n}\n\n.main-content__input--valid {\n  background-color: lightgreen;\n  border: var(--border-width) var(--border-type) darkgrey;\n}\n\n.main-content__input--invalid {\n  background-color: rgba(255, 0, 0, 0.55);\n  border: var(--border-width) var(--border-type) black;\n  margin-bottom: 4px;\n}\n\n.main-content__help {\n  background-color: #F4F4F4;\n  border-radius: 5px;\n  padding: 4px 8px;\n  color: black;\n  font-family: 'Arial', sans-serif;\n  font-weight: bolder;\n  font-size: 0.6rem;\n  margin-bottom: 18px;\n}\n\n.main-content__submit {\n  width: fit-content;\n  border-radius: 20px;\n  border: 0;\n  padding: 10px 20px;\n  align-self: center;\n  cursor: pointer;\n}\n\n.main-content__submit--active {\n  background-color: lightgreen;\n  translation: all 50ms ease-in-out;\n}\n\n.main-content__submit--active:hover {\n  background-color: #6ECC71;\n  box-shadow: 1px 1px 3px lightgrey;\n}\n\n.main-content__submit--active:active {\n  transform: translateY(1px);\n  box-shadow: 1px 1px 1px lightgrey;\n}\n\n.main-content__submit--invalid {\n  background-color: #E5E5E5;\n  color: #A0A0A0;\n  cursor: not-allowed;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _countries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries.js */ "./src/countries.js");


const mainContent = document.createElement('form');
mainContent.classList.add('main-content');

const label = document.createElement('label');

label.htmlFor = 'email';
label.textContent = 'E-mail';
mainContent.appendChild(label.cloneNode(true));

const emailInput = document.createElement('input');
emailInput.id = 'email';
emailInput.name = 'email';
emailInput.type = 'email';
mainContent.appendChild(emailInput);


label.htmlFor = 'country';
label.textContent = 'Country';
mainContent.appendChild(label.cloneNode(true));

const countrySelect = document.createElement('select');
countrySelect.id = 'country';
countrySelect.name = 'country';
countrySelect.classList.add('main-content__input');
countrySelect.setAttribute('list', 'available-countries');

// Available countries options
let options = '<option value="">-- Please select a country --</option>';
_countries_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((country) => {
  options += `\n<option value="${country}">${country}</option>`;
});
countrySelect.innerHTML = options;
mainContent.appendChild(countrySelect);


label.htmlFor = 'zip';
label.textContent = 'Zip code';
mainContent.appendChild(label.cloneNode(true));

const zipInput = document.createElement('input');
zipInput.id = 'zip';
zipInput.name = 'zip';
zipInput.type = 'number';
zipInput.max = 99999;
zipInput.min = 0;
mainContent.appendChild(zipInput);


label.htmlFor = 'password';
label.textContent = 'Password';
mainContent.appendChild(label.cloneNode(true));

const passInput = document.createElement('input');
passInput.id = 'password';
passInput.name = 'password';
passInput.type = 'password';
mainContent.appendChild(passInput);


label.htmlFor = 'confirm-password';
label.textContent = 'Confirm password';
mainContent.appendChild(label.cloneNode(true));

const confirmPassInput = document.createElement('input');
confirmPassInput.id = 'confirm-password';
confirmPassInput.name = 'confirm-password';
confirmPassInput.type = 'password';
mainContent.appendChild(confirmPassInput);

// Add class 'main-content__label' to all the labels
mainContent.querySelectorAll('label').forEach(el => {
  el.classList.add('main-content__label');
});

// Add class 'main-content__input' to all the inputs and required attribute
mainContent.querySelectorAll('input').forEach(el => {
  el.classList.add('main-content__input');
  el.required = true;
})


const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.classList.add('main-content__submit');
mainContent.appendChild(submitButton);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent);


/***/ }),

/***/ "./src/countries.js":
/*!**************************!*\
  !*** ./src/countries.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
"Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Australia",
"Austria",
"Azerbaijan",
"The Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bhutan",
"Bolivia",
"Bosnia and Herzegovina",
"Botswana",
"Brazil",
"Brunei",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Central African Republic",
"Chad",
"Chile",
"China",
"Colombia",
"Comoros",
"Congo, Republic of the",
"Congo, Democratic Republic of the",
"Costa Rica",
"Cote d'Ivoire",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"East Timor (Timor-Leste)",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Fiji",
"Finland",
"France",
"Gabon",
"The Gambia",
"Georgia",
"Germany",
"Ghana",
"Greece",
"Grenada",
"Guatemala",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Ireland",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea, North",
"Korea, South",
"Kosovo",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macedonia",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Mauritania",
"Mauritius",
"Mexico",
"Micronesia, Federated States of",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Morocco",
"Mozambique",
"Myanmar (Burma)",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Qatar",
"Romania",
"Russia",
"Rwanda",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Swaziland",
"Sweden",
"Switzerland",
"Syria",
"Taiwan",
"Tajikistan",
"Tanzania",
"Thailand",
"Togo",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States of America",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Vatican City (Holy See)",
"Venezuela",
"Vietnam",
"Yemen",
"Zambia",
"Zimbabwe"
]);


/***/ })

/******/ 	});
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.js */ "./src/body.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const body = document.body;

body.appendChild(_body_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


// Form validation

const emailInput = document.querySelector('#email');
const zipInput = document.querySelector('#zip');
const countrySelect = document.querySelector('#country');
const passInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('.main-content__submit');
const inputs = Array.from(document.querySelectorAll('.main-content__input'));
let validMap = new Map(inputs.map((input) => [input.id, false]));
const isFormValid = function() {
  const invalidInputs = Array.from(validMap.values()).filter((valid) => !valid);

  console.log(validMap);
  if (validMap.size > 5) console.log('\n\nIT HAPPENED NOW\n\n');
  console.log('In isFormValid, invalidInputs', invalidInputs);
  // The form is valid if there are no invalid inputs
  return invalidInputs.length === 0;
};

// Event listeners
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (!isFormValid()) return;

  alert('The form is valid!');
});

emailInput.addEventListener('focusout', emailValidity);
emailInput.addEventListener('input', emailValidity);

countrySelect.addEventListener('focusout', countryValidity);
countrySelect.addEventListener('input', countryValidity);

zipInput.addEventListener('focusout', zipValidity);
zipInput.addEventListener('input', zipValidity);

passInput.addEventListener('focusout', passwordValidity);
passInput.addEventListener('input', passwordValidity);

confirmPassInput.addEventListener('focusin', confirmPassValidity);
confirmPassInput.addEventListener('focusout', confirmPassValidity);
confirmPassInput.addEventListener('input', confirmPassValidity);

// First time executing
buttonValidity();

// Functions

function buttonValidity() {
  if (isFormValid()) {
    submitButton.classList.add('main-content__submit--active');
    submitButton.classList.remove('main-content__submit--invalid');
  }
  else {
    submitButton.classList.add('main-content__submit--invalid');
    submitButton.classList.remove('main-content__submit--active');
  }
}

function emailValidity() {
  if (emailInput.validity.valid) {
    emailInput.classList.add('main-content__input--valid');
    emailInput.classList.remove('main-content__input--invalid');
    removeHelp(emailInput);
    validMap.set(emailInput.id, true);
  }
  else {
    emailInput.classList.add('main-content__input--invalid');
    emailInput.classList.remove('main-content__input--valid');
    addHelp(emailInput.validationMessage, emailInput);
    validMap.set(emailInput.id, false);
  }

  buttonValidity();
}

function countryValidity() {
  if (countrySelect.selectedOptions[0].value !== '') {
    countrySelect.classList.add('main-content__input--valid');
    countrySelect.classList.remove('main-content__input--invalid');
    removeHelp(countrySelect);
    validMap.set(countrySelect.id, true);
  }
  else {
    countrySelect.classList.add('main-content__input--invalid');
    countrySelect.classList.remove('main-content__input--valid');
    addHelp('Select a country from the list', countrySelect);
    validMap.set(countrySelect.id, false);
  }

  buttonValidity();
}

function zipValidity() {
  if (zipInput.validity.valid) {
    zipInput.classList.add('main-content__input--valid');
    zipInput.classList.remove('main-content__input--invalid');
    removeHelp(zipInput);
    validMap.set(zipInput.id, true);
  }
  else {
    zipInput.classList.add('main-content__input--invalid');
    zipInput.classList.remove('main-content__input--valid');
    addHelp(zipInput.validationMessage, zipInput);
    validMap.set(zipInput.id, false);
  }

  buttonValidity();
}

function passwordValidity() {
  if (passInput.validity.valid) {
    passInput.classList.add('main-content__input--valid');
    passInput.classList.remove('main-content__input--invalid');
    removeHelp(passInput);
    validMap.set(passInput.id, true);
  }
  else {
    passInput.classList.add('main-content__input--invalid');
    passInput.classList.remove('main-content__input--valid');
    addHelp(passInput.validationMessage, passInput);
    validMap.set(passInput.id, false);
  }

  confirmPassValidity();
  buttonValidity();
}

function confirmPassValidity() {
  if (confirmPassInput.value === passInput.value 
    && confirmPassInput.value !== '') {
    confirmPassInput.classList.add('main-content__input--valid');
    confirmPassInput.classList.remove('main-content__input--invalid');
    removeHelp(confirmPassInput);
    validMap.set(confirmPassInput.id, true);
  }
  else if (passInput.value !== '') {
    confirmPassInput.classList.add('main-content__input--invalid');
    confirmPassInput.classList.remove('main-content__input--valid');
    addHelp('Passwords do not coincide', confirmPassInput);
    validMap.set(confirmPassInput.id, false);
  }
  else {
    confirmPassInput.classList.add('main-content__input--invalid');
    confirmPassInput.classList.remove('main-content__input--valid');
    addHelp('Password cannot be empty', confirmPassInput);
    validMap.set(confirmPassInput.id, false);
  }

  buttonValidity();
}

function addHelp(message, element) {
  // If it has help already, update the message
  if (element.nextSibling.classList.contains('main-content__help')) {
    element.nextSibling.textContent = message;
    return;
  }

  // Otherwise create the help element and add it
  const helpPar = document.createElement('p');
  helpPar.classList.add('main-content__help');
  helpPar.textContent = message;
  
  element.parentNode.insertBefore(helpPar, element.nextSibling);
}

function removeHelp(element) {
  if (element.nextSibling.classList.contains('main-content__help')) {
    element.nextSibling.remove();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7OztVQ3JNRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNmOztBQUVyQjs7QUFFQSxpQkFBaUIsZ0RBQVc7OztBQUc1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2NvdW50cmllcy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNHJlbSA2cmVtO1xuICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubWFpbi1jb250ZW50X19sYWJlbCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLm1haW4tY29udGVudF9fbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogJyAqJztcbn1cblxuLm1haW4tY29udGVudF9faW5wdXQge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci10eXBlOiBzb2xpZDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItdHlwZSkgbGlnaHRncmV5O1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5tYWluLWNvbnRlbnRfX2lucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci10eXBlKSBibHVlO1xufVxuXG4ubWFpbi1jb250ZW50X19pbnB1dC0tdmFsaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICBib3JkZXI6IHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLXR5cGUpIGRhcmtncmV5O1xufVxuXG4ubWFpbi1jb250ZW50X19pbnB1dC0taW52YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjU1KTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci10eXBlKSBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4ubWFpbi1jb250ZW50X19oZWxwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLm1haW4tY29udGVudF9fc3VibWl0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluLWNvbnRlbnRfX3N1Ym1pdC0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgdHJhbnNsYXRpb246IGFsbCA1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFpbi1jb250ZW50X19zdWJtaXQtLWFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RUNDNzE7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGxpZ2h0Z3JleTtcbn1cblxuLm1haW4tY29udGVudF9fc3VibWl0LS1hY3RpdmU6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGxpZ2h0Z3JleTtcbn1cblxuLm1haW4tY29udGVudF9fc3VibWl0LS1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgY29sb3I6ICNBMEEwQTA7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3REFBd0Q7RUFDeEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLG9EQUFvRDtFQUNwRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBsaWdodGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA0cmVtIDZyZW07XFxuICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1haW4tY29udGVudF9fbGFiZWwge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50X19sYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyAqJztcXG59XFxuXFxuLm1haW4tY29udGVudF9faW5wdXQge1xcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcXG4gIC0tYm9yZGVyLXR5cGU6IHNvbGlkO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItdHlwZSkgbGlnaHRncmV5O1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLm1haW4tY29udGVudF9faW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItdHlwZSkgYmx1ZTtcXG59XFxuXFxuLm1haW4tY29udGVudF9faW5wdXQtLXZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLXR5cGUpIGRhcmtncmV5O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50X19pbnB1dC0taW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41NSk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLXR5cGUpIGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50X19oZWxwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50X19zdWJtaXQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudF9fc3VibWl0LS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gIHRyYW5zbGF0aW9uOiBhbGwgNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tY29udGVudF9fc3VibWl0LS1hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFQ0M3MTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGxpZ2h0Z3JleTtcXG59XFxuXFxuLm1haW4tY29udGVudF9fc3VibWl0LS1hY3RpdmU6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggbGlnaHRncmV5O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50X19zdWJtaXQtLWludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcXG4gIGNvbG9yOiAjQTBBMEEwO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHdvcmxkQ291bnRyaWVzIGZyb20gJy4vY291bnRyaWVzLmpzJztcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5tYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG5sYWJlbC5odG1sRm9yID0gJ2VtYWlsJztcbmxhYmVsLnRleHRDb250ZW50ID0gJ0UtbWFpbCc7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChsYWJlbC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG5jb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmVtYWlsSW5wdXQuaWQgPSAnZW1haWwnO1xuZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcbmVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcblxuXG5sYWJlbC5odG1sRm9yID0gJ2NvdW50cnknO1xubGFiZWwudGV4dENvbnRlbnQgPSAnQ291bnRyeSc7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChsYWJlbC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG5jb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5jb3VudHJ5U2VsZWN0LmlkID0gJ2NvdW50cnknO1xuY291bnRyeVNlbGVjdC5uYW1lID0gJ2NvdW50cnknO1xuY291bnRyeVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnRfX2lucHV0Jyk7XG5jb3VudHJ5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbGlzdCcsICdhdmFpbGFibGUtY291bnRyaWVzJyk7XG5cbi8vIEF2YWlsYWJsZSBjb3VudHJpZXMgb3B0aW9uc1xubGV0IG9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFBsZWFzZSBzZWxlY3QgYSBjb3VudHJ5IC0tPC9vcHRpb24+JztcbndvcmxkQ291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcbiAgb3B0aW9ucyArPSBgXFxuPG9wdGlvbiB2YWx1ZT1cIiR7Y291bnRyeX1cIj4ke2NvdW50cnl9PC9vcHRpb24+YDtcbn0pO1xuY291bnRyeVNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb25zO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY291bnRyeVNlbGVjdCk7XG5cblxubGFiZWwuaHRtbEZvciA9ICd6aXAnO1xubGFiZWwudGV4dENvbnRlbnQgPSAnWmlwIGNvZGUnO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobGFiZWwuY2xvbmVOb2RlKHRydWUpKTtcblxuY29uc3QgemlwSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuemlwSW5wdXQuaWQgPSAnemlwJztcbnppcElucHV0Lm5hbWUgPSAnemlwJztcbnppcElucHV0LnR5cGUgPSAnbnVtYmVyJztcbnppcElucHV0Lm1heCA9IDk5OTk5O1xuemlwSW5wdXQubWluID0gMDtcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKHppcElucHV0KTtcblxuXG5sYWJlbC5odG1sRm9yID0gJ3Bhc3N3b3JkJztcbmxhYmVsLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkJztcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKGxhYmVsLmNsb25lTm9kZSh0cnVlKSk7XG5cbmNvbnN0IHBhc3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5wYXNzSW5wdXQuaWQgPSAncGFzc3dvcmQnO1xucGFzc0lucHV0Lm5hbWUgPSAncGFzc3dvcmQnO1xucGFzc0lucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGFzc0lucHV0KTtcblxuXG5sYWJlbC5odG1sRm9yID0gJ2NvbmZpcm0tcGFzc3dvcmQnO1xubGFiZWwudGV4dENvbnRlbnQgPSAnQ29uZmlybSBwYXNzd29yZCc7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChsYWJlbC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG5jb25zdCBjb25maXJtUGFzc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbmZpcm1QYXNzSW5wdXQuaWQgPSAnY29uZmlybS1wYXNzd29yZCc7XG5jb25maXJtUGFzc0lucHV0Lm5hbWUgPSAnY29uZmlybS1wYXNzd29yZCc7XG5jb25maXJtUGFzc0lucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29uZmlybVBhc3NJbnB1dCk7XG5cbi8vIEFkZCBjbGFzcyAnbWFpbi1jb250ZW50X19sYWJlbCcgdG8gYWxsIHRoZSBsYWJlbHNcbm1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJykuZm9yRWFjaChlbCA9PiB7XG4gIGVsLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9fbGFiZWwnKTtcbn0pO1xuXG4vLyBBZGQgY2xhc3MgJ21haW4tY29udGVudF9faW5wdXQnIHRvIGFsbCB0aGUgaW5wdXRzIGFuZCByZXF1aXJlZCBhdHRyaWJ1dGVcbm1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaChlbCA9PiB7XG4gIGVsLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9faW5wdXQnKTtcbiAgZWwucmVxdWlyZWQgPSB0cnVlO1xufSlcblxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9fc3VibWl0Jyk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDtcbiIsImV4cG9ydCBkZWZhdWx0IFtcblwiQWZnaGFuaXN0YW5cIixcblwiQWxiYW5pYVwiLFxuXCJBbGdlcmlhXCIsXG5cIkFuZG9ycmFcIixcblwiQW5nb2xhXCIsXG5cIkFudGlndWEgYW5kIEJhcmJ1ZGFcIixcblwiQXJnZW50aW5hXCIsXG5cIkFybWVuaWFcIixcblwiQXVzdHJhbGlhXCIsXG5cIkF1c3RyaWFcIixcblwiQXplcmJhaWphblwiLFxuXCJUaGUgQmFoYW1hc1wiLFxuXCJCYWhyYWluXCIsXG5cIkJhbmdsYWRlc2hcIixcblwiQmFyYmFkb3NcIixcblwiQmVsYXJ1c1wiLFxuXCJCZWxnaXVtXCIsXG5cIkJlbGl6ZVwiLFxuXCJCZW5pblwiLFxuXCJCaHV0YW5cIixcblwiQm9saXZpYVwiLFxuXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsXG5cIkJvdHN3YW5hXCIsXG5cIkJyYXppbFwiLFxuXCJCcnVuZWlcIixcblwiQnVsZ2FyaWFcIixcblwiQnVya2luYSBGYXNvXCIsXG5cIkJ1cnVuZGlcIixcblwiQ2FtYm9kaWFcIixcblwiQ2FtZXJvb25cIixcblwiQ2FuYWRhXCIsXG5cIkNhcGUgVmVyZGVcIixcblwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsXG5cIkNoYWRcIixcblwiQ2hpbGVcIixcblwiQ2hpbmFcIixcblwiQ29sb21iaWFcIixcblwiQ29tb3Jvc1wiLFxuXCJDb25nbywgUmVwdWJsaWMgb2YgdGhlXCIsXG5cIkNvbmdvLCBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLFxuXCJDb3N0YSBSaWNhXCIsXG5cIkNvdGUgZCdJdm9pcmVcIixcblwiQ3JvYXRpYVwiLFxuXCJDdWJhXCIsXG5cIkN5cHJ1c1wiLFxuXCJDemVjaCBSZXB1YmxpY1wiLFxuXCJEZW5tYXJrXCIsXG5cIkRqaWJvdXRpXCIsXG5cIkRvbWluaWNhXCIsXG5cIkRvbWluaWNhbiBSZXB1YmxpY1wiLFxuXCJFYXN0IFRpbW9yIChUaW1vci1MZXN0ZSlcIixcblwiRWN1YWRvclwiLFxuXCJFZ3lwdFwiLFxuXCJFbCBTYWx2YWRvclwiLFxuXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxuXCJFcml0cmVhXCIsXG5cIkVzdG9uaWFcIixcblwiRXRoaW9waWFcIixcblwiRmlqaVwiLFxuXCJGaW5sYW5kXCIsXG5cIkZyYW5jZVwiLFxuXCJHYWJvblwiLFxuXCJUaGUgR2FtYmlhXCIsXG5cIkdlb3JnaWFcIixcblwiR2VybWFueVwiLFxuXCJHaGFuYVwiLFxuXCJHcmVlY2VcIixcblwiR3JlbmFkYVwiLFxuXCJHdWF0ZW1hbGFcIixcblwiR3VpbmVhXCIsXG5cIkd1aW5lYS1CaXNzYXVcIixcblwiR3V5YW5hXCIsXG5cIkhhaXRpXCIsXG5cIkhvbmR1cmFzXCIsXG5cIkh1bmdhcnlcIixcblwiSWNlbGFuZFwiLFxuXCJJbmRpYVwiLFxuXCJJbmRvbmVzaWFcIixcblwiSXJhblwiLFxuXCJJcmFxXCIsXG5cIklyZWxhbmRcIixcblwiSXNyYWVsXCIsXG5cIkl0YWx5XCIsXG5cIkphbWFpY2FcIixcblwiSmFwYW5cIixcblwiSm9yZGFuXCIsXG5cIkthemFraHN0YW5cIixcblwiS2VueWFcIixcblwiS2lyaWJhdGlcIixcblwiS29yZWEsIE5vcnRoXCIsXG5cIktvcmVhLCBTb3V0aFwiLFxuXCJLb3Nvdm9cIixcblwiS3V3YWl0XCIsXG5cIkt5cmd5enN0YW5cIixcblwiTGFvc1wiLFxuXCJMYXR2aWFcIixcblwiTGViYW5vblwiLFxuXCJMZXNvdGhvXCIsXG5cIkxpYmVyaWFcIixcblwiTGlieWFcIixcblwiTGllY2h0ZW5zdGVpblwiLFxuXCJMaXRodWFuaWFcIixcblwiTHV4ZW1ib3VyZ1wiLFxuXCJNYWNlZG9uaWFcIixcblwiTWFkYWdhc2NhclwiLFxuXCJNYWxhd2lcIixcblwiTWFsYXlzaWFcIixcblwiTWFsZGl2ZXNcIixcblwiTWFsaVwiLFxuXCJNYWx0YVwiLFxuXCJNYXJzaGFsbCBJc2xhbmRzXCIsXG5cIk1hdXJpdGFuaWFcIixcblwiTWF1cml0aXVzXCIsXG5cIk1leGljb1wiLFxuXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsXG5cIk1vbGRvdmFcIixcblwiTW9uYWNvXCIsXG5cIk1vbmdvbGlhXCIsXG5cIk1vbnRlbmVncm9cIixcblwiTW9yb2Njb1wiLFxuXCJNb3phbWJpcXVlXCIsXG5cIk15YW5tYXIgKEJ1cm1hKVwiLFxuXCJOYW1pYmlhXCIsXG5cIk5hdXJ1XCIsXG5cIk5lcGFsXCIsXG5cIk5ldGhlcmxhbmRzXCIsXG5cIk5ldyBaZWFsYW5kXCIsXG5cIk5pY2FyYWd1YVwiLFxuXCJOaWdlclwiLFxuXCJOaWdlcmlhXCIsXG5cIk5vcndheVwiLFxuXCJPbWFuXCIsXG5cIlBha2lzdGFuXCIsXG5cIlBhbGF1XCIsXG5cIlBhbmFtYVwiLFxuXCJQYXB1YSBOZXcgR3VpbmVhXCIsXG5cIlBhcmFndWF5XCIsXG5cIlBlcnVcIixcblwiUGhpbGlwcGluZXNcIixcblwiUG9sYW5kXCIsXG5cIlBvcnR1Z2FsXCIsXG5cIlFhdGFyXCIsXG5cIlJvbWFuaWFcIixcblwiUnVzc2lhXCIsXG5cIlJ3YW5kYVwiLFxuXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixcblwiU2FpbnQgTHVjaWFcIixcblwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixcblwiU2Ftb2FcIixcblwiU2FuIE1hcmlub1wiLFxuXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIixcblwiU2F1ZGkgQXJhYmlhXCIsXG5cIlNlbmVnYWxcIixcblwiU2VyYmlhXCIsXG5cIlNleWNoZWxsZXNcIixcblwiU2llcnJhIExlb25lXCIsXG5cIlNpbmdhcG9yZVwiLFxuXCJTbG92YWtpYVwiLFxuXCJTbG92ZW5pYVwiLFxuXCJTb2xvbW9uIElzbGFuZHNcIixcblwiU29tYWxpYVwiLFxuXCJTb3V0aCBBZnJpY2FcIixcblwiU291dGggU3VkYW5cIixcblwiU3BhaW5cIixcblwiU3JpIExhbmthXCIsXG5cIlN1ZGFuXCIsXG5cIlN1cmluYW1lXCIsXG5cIlN3YXppbGFuZFwiLFxuXCJTd2VkZW5cIixcblwiU3dpdHplcmxhbmRcIixcblwiU3lyaWFcIixcblwiVGFpd2FuXCIsXG5cIlRhamlraXN0YW5cIixcblwiVGFuemFuaWFcIixcblwiVGhhaWxhbmRcIixcblwiVG9nb1wiLFxuXCJUb25nYVwiLFxuXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXG5cIlR1bmlzaWFcIixcblwiVHVya2V5XCIsXG5cIlR1cmttZW5pc3RhblwiLFxuXCJUdXZhbHVcIixcblwiVWdhbmRhXCIsXG5cIlVrcmFpbmVcIixcblwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixcblwiVW5pdGVkIEtpbmdkb21cIixcblwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsXG5cIlVydWd1YXlcIixcblwiVXpiZWtpc3RhblwiLFxuXCJWYW51YXR1XCIsXG5cIlZhdGljYW4gQ2l0eSAoSG9seSBTZWUpXCIsXG5cIlZlbmV6dWVsYVwiLFxuXCJWaWV0bmFtXCIsXG5cIlllbWVuXCIsXG5cIlphbWJpYVwiLFxuXCJaaW1iYWJ3ZVwiXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG1haW5Db250ZW50IGZyb20gJy4vYm9keS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG5jb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5jb25zdCB6aXBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6aXAnKTtcbmNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeScpO1xuY29uc3QgcGFzc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5jb25zdCBjb25maXJtUGFzc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tcGFzc3dvcmQnKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnRfX3N1Ym1pdCcpO1xuY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1jb250ZW50X19pbnB1dCcpKTtcbmxldCB2YWxpZE1hcCA9IG5ldyBNYXAoaW5wdXRzLm1hcCgoaW5wdXQpID0+IFtpbnB1dC5pZCwgZmFsc2VdKSk7XG5jb25zdCBpc0Zvcm1WYWxpZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBpbnZhbGlkSW5wdXRzID0gQXJyYXkuZnJvbSh2YWxpZE1hcC52YWx1ZXMoKSkuZmlsdGVyKCh2YWxpZCkgPT4gIXZhbGlkKTtcblxuICBjb25zb2xlLmxvZyh2YWxpZE1hcCk7XG4gIGlmICh2YWxpZE1hcC5zaXplID4gNSkgY29uc29sZS5sb2coJ1xcblxcbklUIEhBUFBFTkVEIE5PV1xcblxcbicpO1xuICBjb25zb2xlLmxvZygnSW4gaXNGb3JtVmFsaWQsIGludmFsaWRJbnB1dHMnLCBpbnZhbGlkSW5wdXRzKTtcbiAgLy8gVGhlIGZvcm0gaXMgdmFsaWQgaWYgdGhlcmUgYXJlIG5vIGludmFsaWQgaW5wdXRzXG4gIHJldHVybiBpbnZhbGlkSW5wdXRzLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmICghaXNGb3JtVmFsaWQoKSkgcmV0dXJuO1xuXG4gIGFsZXJ0KCdUaGUgZm9ybSBpcyB2YWxpZCEnKTtcbn0pO1xuXG5lbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZW1haWxWYWxpZGl0eSk7XG5lbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZW1haWxWYWxpZGl0eSk7XG5cbmNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBjb3VudHJ5VmFsaWRpdHkpO1xuY291bnRyeVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNvdW50cnlWYWxpZGl0eSk7XG5cbnppcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgemlwVmFsaWRpdHkpO1xuemlwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB6aXBWYWxpZGl0eSk7XG5cbnBhc3NJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHBhc3N3b3JkVmFsaWRpdHkpO1xucGFzc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcGFzc3dvcmRWYWxpZGl0eSk7XG5cbmNvbmZpcm1QYXNzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNvbmZpcm1QYXNzVmFsaWRpdHkpO1xuY29uZmlybVBhc3NJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGNvbmZpcm1QYXNzVmFsaWRpdHkpO1xuY29uZmlybVBhc3NJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNvbmZpcm1QYXNzVmFsaWRpdHkpO1xuXG4vLyBGaXJzdCB0aW1lIGV4ZWN1dGluZ1xuYnV0dG9uVmFsaWRpdHkoKTtcblxuLy8gRnVuY3Rpb25zXG5cbmZ1bmN0aW9uIGJ1dHRvblZhbGlkaXR5KCkge1xuICBpZiAoaXNGb3JtVmFsaWQoKSkge1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnRfX3N1Ym1pdC0tYWN0aXZlJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tY29udGVudF9fc3VibWl0LS1pbnZhbGlkJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9fc3VibWl0LS1pbnZhbGlkJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tY29udGVudF9fc3VibWl0LS1hY3RpdmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWFpbFZhbGlkaXR5KCkge1xuICBpZiAoZW1haWxJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50X19pbnB1dC0tdmFsaWQnKTtcbiAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tY29udGVudF9faW5wdXQtLWludmFsaWQnKTtcbiAgICByZW1vdmVIZWxwKGVtYWlsSW5wdXQpO1xuICAgIHZhbGlkTWFwLnNldChlbWFpbElucHV0LmlkLCB0cnVlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9faW5wdXQtLWludmFsaWQnKTtcbiAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tY29udGVudF9faW5wdXQtLXZhbGlkJyk7XG4gICAgYWRkSGVscChlbWFpbElucHV0LnZhbGlkYXRpb25NZXNzYWdlLCBlbWFpbElucHV0KTtcbiAgICB2YWxpZE1hcC5zZXQoZW1haWxJbnB1dC5pZCwgZmFsc2UpO1xuICB9XG5cbiAgYnV0dG9uVmFsaWRpdHkoKTtcbn1cblxuZnVuY3Rpb24gY291bnRyeVZhbGlkaXR5KCkge1xuICBpZiAoY291bnRyeVNlbGVjdC5zZWxlY3RlZE9wdGlvbnNbMF0udmFsdWUgIT09ICcnKSB7XG4gICAgY291bnRyeVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnRfX2lucHV0LS12YWxpZCcpO1xuICAgIGNvdW50cnlTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1jb250ZW50X19pbnB1dC0taW52YWxpZCcpO1xuICAgIHJlbW92ZUhlbHAoY291bnRyeVNlbGVjdCk7XG4gICAgdmFsaWRNYXAuc2V0KGNvdW50cnlTZWxlY3QuaWQsIHRydWUpO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvdW50cnlTZWxlY3QuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50X19pbnB1dC0taW52YWxpZCcpO1xuICAgIGNvdW50cnlTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1jb250ZW50X19pbnB1dC0tdmFsaWQnKTtcbiAgICBhZGRIZWxwKCdTZWxlY3QgYSBjb3VudHJ5IGZyb20gdGhlIGxpc3QnLCBjb3VudHJ5U2VsZWN0KTtcbiAgICB2YWxpZE1hcC5zZXQoY291bnRyeVNlbGVjdC5pZCwgZmFsc2UpO1xuICB9XG5cbiAgYnV0dG9uVmFsaWRpdHkoKTtcbn1cblxuZnVuY3Rpb24gemlwVmFsaWRpdHkoKSB7XG4gIGlmICh6aXBJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgIHppcElucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9faW5wdXQtLXZhbGlkJyk7XG4gICAgemlwSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1jb250ZW50X19pbnB1dC0taW52YWxpZCcpO1xuICAgIHJlbW92ZUhlbHAoemlwSW5wdXQpO1xuICAgIHZhbGlkTWFwLnNldCh6aXBJbnB1dC5pZCwgdHJ1ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgemlwSW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50X19pbnB1dC0taW52YWxpZCcpO1xuICAgIHppcElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tY29udGVudF9faW5wdXQtLXZhbGlkJyk7XG4gICAgYWRkSGVscCh6aXBJbnB1dC52YWxpZGF0aW9uTWVzc2FnZSwgemlwSW5wdXQpO1xuICAgIHZhbGlkTWFwLnNldCh6aXBJbnB1dC5pZCwgZmFsc2UpO1xuICB9XG5cbiAgYnV0dG9uVmFsaWRpdHkoKTtcbn1cblxuZnVuY3Rpb24gcGFzc3dvcmRWYWxpZGl0eSgpIHtcbiAgaWYgKHBhc3NJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgIHBhc3NJbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnRfX2lucHV0LS12YWxpZCcpO1xuICAgIHBhc3NJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWNvbnRlbnRfX2lucHV0LS1pbnZhbGlkJyk7XG4gICAgcmVtb3ZlSGVscChwYXNzSW5wdXQpO1xuICAgIHZhbGlkTWFwLnNldChwYXNzSW5wdXQuaWQsIHRydWUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHBhc3NJbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnRfX2lucHV0LS1pbnZhbGlkJyk7XG4gICAgcGFzc0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tY29udGVudF9faW5wdXQtLXZhbGlkJyk7XG4gICAgYWRkSGVscChwYXNzSW5wdXQudmFsaWRhdGlvbk1lc3NhZ2UsIHBhc3NJbnB1dCk7XG4gICAgdmFsaWRNYXAuc2V0KHBhc3NJbnB1dC5pZCwgZmFsc2UpO1xuICB9XG5cbiAgY29uZmlybVBhc3NWYWxpZGl0eSgpO1xuICBidXR0b25WYWxpZGl0eSgpO1xufVxuXG5mdW5jdGlvbiBjb25maXJtUGFzc1ZhbGlkaXR5KCkge1xuICBpZiAoY29uZmlybVBhc3NJbnB1dC52YWx1ZSA9PT0gcGFzc0lucHV0LnZhbHVlIFxuICAgICYmIGNvbmZpcm1QYXNzSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgY29uZmlybVBhc3NJbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnRfX2lucHV0LS12YWxpZCcpO1xuICAgIGNvbmZpcm1QYXNzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1jb250ZW50X19pbnB1dC0taW52YWxpZCcpO1xuICAgIHJlbW92ZUhlbHAoY29uZmlybVBhc3NJbnB1dCk7XG4gICAgdmFsaWRNYXAuc2V0KGNvbmZpcm1QYXNzSW5wdXQuaWQsIHRydWUpO1xuICB9XG4gIGVsc2UgaWYgKHBhc3NJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICBjb25maXJtUGFzc0lucHV0LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9faW5wdXQtLWludmFsaWQnKTtcbiAgICBjb25maXJtUGFzc0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tY29udGVudF9faW5wdXQtLXZhbGlkJyk7XG4gICAgYWRkSGVscCgnUGFzc3dvcmRzIGRvIG5vdCBjb2luY2lkZScsIGNvbmZpcm1QYXNzSW5wdXQpO1xuICAgIHZhbGlkTWFwLnNldChjb25maXJtUGFzc0lucHV0LmlkLCBmYWxzZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uZmlybVBhc3NJbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnRfX2lucHV0LS1pbnZhbGlkJyk7XG4gICAgY29uZmlybVBhc3NJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWNvbnRlbnRfX2lucHV0LS12YWxpZCcpO1xuICAgIGFkZEhlbHAoJ1Bhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsIGNvbmZpcm1QYXNzSW5wdXQpO1xuICAgIHZhbGlkTWFwLnNldChjb25maXJtUGFzc0lucHV0LmlkLCBmYWxzZSk7XG4gIH1cblxuICBidXR0b25WYWxpZGl0eSgpO1xufVxuXG5mdW5jdGlvbiBhZGRIZWxwKG1lc3NhZ2UsIGVsZW1lbnQpIHtcbiAgLy8gSWYgaXQgaGFzIGhlbHAgYWxyZWFkeSwgdXBkYXRlIHRoZSBtZXNzYWdlXG4gIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1jb250ZW50X19oZWxwJykpIHtcbiAgICBlbGVtZW50Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBPdGhlcndpc2UgY3JlYXRlIHRoZSBoZWxwIGVsZW1lbnQgYW5kIGFkZCBpdFxuICBjb25zdCBoZWxwUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoZWxwUGFyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudF9faGVscCcpO1xuICBoZWxwUGFyLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgXG4gIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaGVscFBhciwgZWxlbWVudC5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhlbHAoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5uZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tY29udGVudF9faGVscCcpKSB7XG4gICAgZWxlbWVudC5uZXh0U2libGluZy5yZW1vdmUoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9