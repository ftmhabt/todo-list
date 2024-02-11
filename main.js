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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --black:#69665c;
    --yellow:#fff9de;
}

*{
    font-family: 'Ubuntu', sans-serif;
    color:var(--black);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* border: 1px solid mediumslateblue; */
}

body{
    padding: 5rem;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 10fr;
}

/* logo */

.logo-holder{
    align-self: center;
    padding-left: 0.5rem;
}

/* add button */

.add-holder{
    align-self: center;
    justify-self: right;
    padding-right: 1rem;
}

.add-btn{
    background-color: white;
    border: 0;
    outline: 0;
    font-size: 2rem;
    cursor: pointer;
}

/* tags side bar */

.tags-holder{
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
}

ul.tags{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.tags input[type="radio"]{
    -webkit-appearance: none;
    appearance: none;
}

li:has([type="radio"]){
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    width: fit-content;
    list-style: none;
}

li:has([type="radio"]:checked){
    background-color: var(--yellow);
    padding: 0.2rem 1rem;
}

#tag-name{
    border-radius: 0.5rem;
    padding: 0.2rem 1rem;
    border: 1px solid var(--black);
}

#add-tag{
    background-color: white;
    border: 0;
    font-size: 1.5rem;
    cursor: pointer;
}

/* container */

.container{
    padding: 1rem;    
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    grid-auto-rows: 100px;
    gap: 1rem;
}

.container>*{
    background-color: var(--yellow);
    border: 1px solid var(--black);
    border-radius: 0.5rem;
    max-width: 400px;
    padding: 1rem;
}

form{
    position: absolute;
    display: none;
    flex-direction: column;
    left: 30%;
    background-color: white;
    border: 1px solid var(--black);
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 0.5rem;
}

.show{
    display: flex;
}

.hide{
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA,SAAS;;AAET;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA,eAAe;;AAEf;IACI,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,UAAU;IACV,eAAe;IACf,eAAe;AACnB;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,iBAAiB;IACjB,eAAe;AACnB;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,aAAa;IACb,6DAA6D;IAC7D,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,+BAA+B;IAC/B,8BAA8B;IAC9B,qBAAqB;IACrB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,8BAA8B;IAC9B,aAAa;IACb,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');\r\n\r\n:root{\r\n    --black:#69665c;\r\n    --yellow:#fff9de;\r\n}\r\n\r\n*{\r\n    font-family: 'Ubuntu', sans-serif;\r\n    color:var(--black);\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    /* border: 1px solid mediumslateblue; */\r\n}\r\n\r\nbody{\r\n    padding: 5rem;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\n\r\n/* logo */\r\n\r\n.logo-holder{\r\n    align-self: center;\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n/* add button */\r\n\r\n.add-holder{\r\n    align-self: center;\r\n    justify-self: right;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.add-btn{\r\n    background-color: white;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n/* tags side bar */\r\n\r\n.tags-holder{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0.5rem;\r\n    gap: 0.5rem;\r\n}\r\n\r\nul.tags{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.tags input[type=\"radio\"]{\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n}\r\n\r\nli:has([type=\"radio\"]){\r\n    border-radius: 0.5rem;\r\n    padding: 0.2rem 0.5rem;\r\n    width: fit-content;\r\n    list-style: none;\r\n}\r\n\r\nli:has([type=\"radio\"]:checked){\r\n    background-color: var(--yellow);\r\n    padding: 0.2rem 1rem;\r\n}\r\n\r\n#tag-name{\r\n    border-radius: 0.5rem;\r\n    padding: 0.2rem 1rem;\r\n    border: 1px solid var(--black);\r\n}\r\n\r\n#add-tag{\r\n    background-color: white;\r\n    border: 0;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n/* container */\r\n\r\n.container{\r\n    padding: 1rem;    \r\n    display: grid;\r\n    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );\r\n    grid-auto-rows: 100px;\r\n    gap: 1rem;\r\n}\r\n\r\n.container>*{\r\n    background-color: var(--yellow);\r\n    border: 1px solid var(--black);\r\n    border-radius: 0.5rem;\r\n    max-width: 400px;\r\n    padding: 1rem;\r\n}\r\n\r\nform{\r\n    position: absolute;\r\n    display: none;\r\n    flex-direction: column;\r\n    left: 30%;\r\n    background-color: white;\r\n    border: 1px solid var(--black);\r\n    padding: 1rem;\r\n    gap: 0.5rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.show{\r\n    display: flex;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag */ "./src/tag.js");
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
// eslint-disable-next-line import/no-extraneous-dependencies



const dom = (() => ({
  populateContainer(tagName) {
    const container = document.querySelector('.container');

    // clear
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // populate
    for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoTagArrayBasedOnTags(tagName).length; i++) {
      const todoItem = document.createElement('div');
      const todoTitle = document.createElement('div');
      const todoDate = document.createElement('div');
      const todoIsDone = document.createElement('input');
      todoIsDone.type = 'checkbox';

      todoTitle.textContent = _todo__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoTagArrayBasedOnTags(tagName)[i].title;
      todoDate.textContent = _todo__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoTagArrayBasedOnTags(tagName)[i].dueDate;
      todoIsDone.checked = _todo__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoTagArrayBasedOnTags(tagName)[i].isdone;

      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDate);
      todoItem.appendChild(todoIsDone);
      container.appendChild(todoItem);

      todoIsDone.addEventListener('change', () => {
        _todo__WEBPACK_IMPORTED_MODULE_0__["default"].setIsDone(todoIsDone.checked, i);
      });
    }
  },
  populateTags() {
    const tagsUl = document.querySelector('.tags');

    // clear
    while (tagsUl.firstChild) {
      tagsUl.removeChild(tagsUl.firstChild);
    }

    // populate
    for (let i = 0; i < _tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTagsNumber(); i++) {
      const li = document.createElement('li');
      const radio = document.createElement('input');
      const label = document.createElement('label');
      label.htmlFor = `side-tag${i}`;
      radio.type = 'radio';
      radio.name = 'tag';
      label.textContent = _tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTags()[i].name;
      radio.checked = _tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTags()[i].checked;
      radio.classList.add('side-tag');
      radio.setAttribute('id', `side-tag${i}`);

      radio.addEventListener('change', () => {
        if (radio.checked) {
          for (let j = 0; j < _tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTagsNumber(); j++) {
            if (j === i) {
              _tag__WEBPACK_IMPORTED_MODULE_1__["default"].changeTagsState(_tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTags()[j].name, true);
            } else {
              _tag__WEBPACK_IMPORTED_MODULE_1__["default"].changeTagsState(_tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTags()[j].name, false);
            }
          }
        }

        dom.populateContainer(_tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTrueTag());
      });

      li.appendChild(label);
      li.appendChild(radio);
      tagsUl.appendChild(li);
    }
  },
  populateTagsInForm() {
    const tagsFieldset = document.querySelector('#tags');

    // clear
    while (tagsFieldset.childNodes.length > 1) {
      tagsFieldset.removeChild(tagsFieldset.lastChild);
    }

    // populate
    for (let i = 1; i < _tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTagsNumber(); i++) {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('tag');
      checkbox.setAttribute('id', `tag${i}`);
      checkbox.value = _tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTags()[i].name;
      checkbox.addEventListener('change', () => {
        checkbox.setAttribute('checked', this.checked);
      });

      label.htmlFor = `tag${i}`;
      label.textContent = _tag__WEBPACK_IMPORTED_MODULE_1__["default"].getTags()[i].name;

      tagsFieldset.appendChild(checkbox);
      tagsFieldset.appendChild(label);
    }
  },
}))();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const form = (() => {
  const formElement = document.querySelector('form');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const radios = Array.from(document.querySelectorAll('input[name="priorty"]'));
  const date = document.querySelector('#date');
  let tags;

  return {
    show() { formElement.classList.add('show'); },
    hide() { formElement.classList.remove('show'); },
    reset() { formElement.reset(); },
    getTitle() { return title.value; },
    getDescription() { return description.value; },
    getRadio() {
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          return radios[i].value;
        }
      }
      return '';
    },
    getDueDate() { return date.value; },
    getTag() {
      tags = Array.from(document.querySelectorAll('input[type="checkbox"][class="tag"]'));
      const checkedTags = ['all'];
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].checked) {
          checkedTags.push(tags[i].value);
        }
      }
      return checkedTags;
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./src/tag.js":
/*!********************!*\
  !*** ./src/tag.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const tag = (() => {
  const tags = [{ name: 'all', checked: true }];
  return {
    add(name, checked) {
      tags.push({ name, checked });
    },
    getTags() { return tags; },
    getTagsNumber() { return tags.length; },
    changeTagsState(name, checked) {
      for (let i = 0; i < tags.length; i++) {
        if (name === tags[i].name) {
          tags[i].checked = checked;
        }
      }
    },
    getTrueTag() {
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].checked) {
          return tags[i].name;
        }
      }
      return '';
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tag);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const todo = (() => {
  const todos = [];
  return {
    add(title, description, priorty, dueDate, tag, isdone) {
      todos.push({
        title, description, priorty, dueDate, tag, isdone,
      });
      console.table(todos);
    },
    get(name) {
      const holder = [];
      for (let i = 0; i < todos.length; i++) {
        holder.push(todos[i][name]);
      }
      return holder;
    },
    setIsDone(value, index) {
      todos[index].isdone = value;
    },
    getTodosNumbers() {
      return todos.length;
    },
    getTodoTagArrayBasedOnTags(tagName) {
      const holder = [];
      for (let i = 0; i < todos.length; i++) {
        for (let j = 0; j < todos[i].tag.length; j++) {
          if (todos[i].tag[j] === tagName) {
            holder.push(todos[i]);
          }
        }
      }
      return holder;
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag */ "./src/tag.js");
/* eslint-disable linebreak-style */






// show todo form button
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  _form__WEBPACK_IMPORTED_MODULE_2__["default"].show();
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].populateTagsInForm();
});

// add todo button
const submitTodoBtn = document.querySelector('#submit-todo-btn');
submitTodoBtn.addEventListener('click', (event) => {
  event.preventDefault();

  _todo__WEBPACK_IMPORTED_MODULE_3__["default"].add(
    _form__WEBPACK_IMPORTED_MODULE_2__["default"].getTitle(),
    _form__WEBPACK_IMPORTED_MODULE_2__["default"].getDescription(),
    _form__WEBPACK_IMPORTED_MODULE_2__["default"].getRadio(),
    _form__WEBPACK_IMPORTED_MODULE_2__["default"].getDueDate(),
    _form__WEBPACK_IMPORTED_MODULE_2__["default"].getTag(),
    false,
  );

  _form__WEBPACK_IMPORTED_MODULE_2__["default"].reset();
  _form__WEBPACK_IMPORTED_MODULE_2__["default"].hide();

  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].populateContainer(_tag__WEBPACK_IMPORTED_MODULE_4__["default"].getTrueTag());
});

// add tag button
const addTagBtn = document.querySelector('#add-tag');
const tagField = document.querySelector('#tag-name');
addTagBtn.addEventListener('click', () => {
  _tag__WEBPACK_IMPORTED_MODULE_4__["default"].add(tagField.value, false);
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].populateTags();
  tagField.value = '';
});

// tags checkbox

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7QUFDRztBQUNFO0FBQ0E7QUFDRjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkNBQUk7QUFDTixFQUFFLDRDQUFHO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkNBQUk7QUFDTixJQUFJLDZDQUFJO0FBQ1IsSUFBSSw2Q0FBSTtBQUNSLElBQUksNkNBQUk7QUFDUixJQUFJLDZDQUFJO0FBQ1IsSUFBSSw2Q0FBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkNBQUk7QUFDTixFQUFFLDZDQUFJO0FBQ047QUFDQSxFQUFFLDRDQUFHLG1CQUFtQiw0Q0FBRztBQUMzQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNENBQUc7QUFDTCxFQUFFLDRDQUFHO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XHJcbiAgICAtLWJsYWNrOiM2OTY2NWM7XHJcbiAgICAtLXllbGxvdzojZmZmOWRlO1xyXG59XHJcblxyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6dmFyKC0tYmxhY2spO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBtZWRpdW1zbGF0ZWJsdWU7ICovXHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xyXG59XHJcblxyXG4vKiBsb2dvICovXHJcblxyXG4ubG9nby1ob2xkZXJ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLyogYWRkIGJ1dHRvbiAqL1xyXG5cclxuLmFkZC1ob2xkZXJ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmFkZC1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIHRhZ3Mgc2lkZSBiYXIgKi9cclxuXHJcbi50YWdzLWhvbGRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbnVsLnRhZ3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udGFncyBpbnB1dFt0eXBlPVwicmFkaW9cIl17XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5saTpoYXMoW3R5cGU9XCJyYWRpb1wiXSl7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxubGk6aGFzKFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XHJcbn1cclxuXHJcbiN0YWctbmFtZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4jYWRkLXRhZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGNvbnRhaW5lciAqL1xyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDFyZW07ICAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpICk7XHJcbiAgICBncmlkLWF1dG8tcm93czogMTAwcHg7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXI+KntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw2REFBNkQ7SUFDN0QscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tYmxhY2s6IzY5NjY1YztcXHJcXG4gICAgLS15ZWxsb3c6I2ZmZjlkZTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjp2YXIoLS1ibGFjayk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgbWVkaXVtc2xhdGVibHVlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxufVxcclxcblxcclxcbi8qIGxvZ28gKi9cXHJcXG5cXHJcXG4ubG9nby1ob2xkZXJ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGFkZCBidXR0b24gKi9cXHJcXG5cXHJcXG4uYWRkLWhvbGRlcntcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHRhZ3Mgc2lkZSBiYXIgKi9cXHJcXG5cXHJcXG4udGFncy1ob2xkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbnVsLnRhZ3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFncyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJde1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpOmhhcyhbdHlwZT1cXFwicmFkaW9cXFwiXSl7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saTpoYXMoW3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFnLW5hbWV7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YWd7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhaW5lciAqL1xcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07ICAgIFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSApO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMTAwcHg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcj4qe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBsZWZ0OiAzMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaG93e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kbyc7XHJcbmltcG9ydCB0YWcgZnJvbSAnLi90YWcnO1xyXG5cclxuY29uc3QgZG9tID0gKCgpID0+ICh7XHJcbiAgcG9wdWxhdGVDb250YWluZXIodGFnTmFtZSkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIGNsZWFyXHJcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3B1bGF0ZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvLmdldFRvZG9UYWdBcnJheUJhc2VkT25UYWdzKHRhZ05hbWUpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCB0b2RvSXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgdG9kb0lzRG9uZS50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VG9kb1RhZ0FycmF5QmFzZWRPblRhZ3ModGFnTmFtZSlbaV0udGl0bGU7XHJcbiAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXRUb2RvVGFnQXJyYXlCYXNlZE9uVGFncyh0YWdOYW1lKVtpXS5kdWVEYXRlO1xyXG4gICAgICB0b2RvSXNEb25lLmNoZWNrZWQgPSB0b2RvLmdldFRvZG9UYWdBcnJheUJhc2VkT25UYWdzKHRhZ05hbWUpW2ldLmlzZG9uZTtcclxuXHJcbiAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcbiAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcclxuICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0lzRG9uZSk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XHJcblxyXG4gICAgICB0b2RvSXNEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICB0b2RvLnNldElzRG9uZSh0b2RvSXNEb25lLmNoZWNrZWQsIGkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIHBvcHVsYXRlVGFncygpIHtcclxuICAgIGNvbnN0IHRhZ3NVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWdzJyk7XHJcblxyXG4gICAgLy8gY2xlYXJcclxuICAgIHdoaWxlICh0YWdzVWwuZmlyc3RDaGlsZCkge1xyXG4gICAgICB0YWdzVWwucmVtb3ZlQ2hpbGQodGFnc1VsLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBvcHVsYXRlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZy5nZXRUYWdzTnVtYmVyKCk7IGkrKykge1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5odG1sRm9yID0gYHNpZGUtdGFnJHtpfWA7XHJcbiAgICAgIHJhZGlvLnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICByYWRpby5uYW1lID0gJ3RhZyc7XHJcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGFnLmdldFRhZ3MoKVtpXS5uYW1lO1xyXG4gICAgICByYWRpby5jaGVja2VkID0gdGFnLmdldFRhZ3MoKVtpXS5jaGVja2VkO1xyXG4gICAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhZycpO1xyXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNpZGUtdGFnJHtpfWApO1xyXG5cclxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhZy5nZXRUYWdzTnVtYmVyKCk7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaiA9PT0gaSkge1xyXG4gICAgICAgICAgICAgIHRhZy5jaGFuZ2VUYWdzU3RhdGUodGFnLmdldFRhZ3MoKVtqXS5uYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YWcuY2hhbmdlVGFnc1N0YXRlKHRhZy5nZXRUYWdzKClbal0ubmFtZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb20ucG9wdWxhdGVDb250YWluZXIodGFnLmdldFRydWVUYWcoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGkuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZChyYWRpbyk7XHJcbiAgICAgIHRhZ3NVbC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwb3B1bGF0ZVRhZ3NJbkZvcm0oKSB7XHJcbiAgICBjb25zdCB0YWdzRmllbGRzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFncycpO1xyXG5cclxuICAgIC8vIGNsZWFyXHJcbiAgICB3aGlsZSAodGFnc0ZpZWxkc2V0LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICB0YWdzRmllbGRzZXQucmVtb3ZlQ2hpbGQodGFnc0ZpZWxkc2V0Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9wdWxhdGVcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGFnLmdldFRhZ3NOdW1iZXIoKTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFnJyk7XHJcbiAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFnJHtpfWApO1xyXG4gICAgICBjaGVja2JveC52YWx1ZSA9IHRhZy5nZXRUYWdzKClbaV0ubmFtZTtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGFiZWwuaHRtbEZvciA9IGB0YWcke2l9YDtcclxuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSB0YWcuZ2V0VGFncygpW2ldLm5hbWU7XHJcblxyXG4gICAgICB0YWdzRmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICB0YWdzRmllbGRzZXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pKSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuY29uc3QgZm9ybSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG4gIGNvbnN0IHJhZGlvcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInByaW9ydHlcIl0nKSk7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XHJcbiAgbGV0IHRhZ3M7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93KCkgeyBmb3JtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7IH0sXHJcbiAgICBoaWRlKCkgeyBmb3JtRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7IH0sXHJcbiAgICByZXNldCgpIHsgZm9ybUVsZW1lbnQucmVzZXQoKTsgfSxcclxuICAgIGdldFRpdGxlKCkgeyByZXR1cm4gdGl0bGUudmFsdWU7IH0sXHJcbiAgICBnZXREZXNjcmlwdGlvbigpIHsgcmV0dXJuIGRlc2NyaXB0aW9uLnZhbHVlOyB9LFxyXG4gICAgZ2V0UmFkaW8oKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHJhZGlvc1tpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmFkaW9zW2ldLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9LFxyXG4gICAgZ2V0RHVlRGF0ZSgpIHsgcmV0dXJuIGRhdGUudmFsdWU7IH0sXHJcbiAgICBnZXRUYWcoKSB7XHJcbiAgICAgIHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXVtjbGFzcz1cInRhZ1wiXScpKTtcclxuICAgICAgY29uc3QgY2hlY2tlZFRhZ3MgPSBbJ2FsbCddO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGFnc1tpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjaGVja2VkVGFncy5wdXNoKHRhZ3NbaV0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2hlY2tlZFRhZ3M7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuY29uc3QgdGFnID0gKCgpID0+IHtcclxuICBjb25zdCB0YWdzID0gW3sgbmFtZTogJ2FsbCcsIGNoZWNrZWQ6IHRydWUgfV07XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZChuYW1lLCBjaGVja2VkKSB7XHJcbiAgICAgIHRhZ3MucHVzaCh7IG5hbWUsIGNoZWNrZWQgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGFncygpIHsgcmV0dXJuIHRhZ3M7IH0sXHJcbiAgICBnZXRUYWdzTnVtYmVyKCkgeyByZXR1cm4gdGFncy5sZW5ndGg7IH0sXHJcbiAgICBjaGFuZ2VUYWdzU3RhdGUobmFtZSwgY2hlY2tlZCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdGFnc1tpXS5uYW1lKSB7XHJcbiAgICAgICAgICB0YWdzW2ldLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFRydWVUYWcoKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0YWdzW2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgIHJldHVybiB0YWdzW2ldLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH0sXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhZztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXHJcbmNvbnN0IHRvZG8gPSAoKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9zID0gW107XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9ydHksIGR1ZURhdGUsIHRhZywgaXNkb25lKSB7XHJcbiAgICAgIHRvZG9zLnB1c2goe1xyXG4gICAgICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3J0eSwgZHVlRGF0ZSwgdGFnLCBpc2RvbmUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLnRhYmxlKHRvZG9zKTtcclxuICAgIH0sXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICBjb25zdCBob2xkZXIgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhvbGRlci5wdXNoKHRvZG9zW2ldW25hbWVdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaG9sZGVyO1xyXG4gICAgfSxcclxuICAgIHNldElzRG9uZSh2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgdG9kb3NbaW5kZXhdLmlzZG9uZSA9IHZhbHVlO1xyXG4gICAgfSxcclxuICAgIGdldFRvZG9zTnVtYmVycygpIHtcclxuICAgICAgcmV0dXJuIHRvZG9zLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBnZXRUb2RvVGFnQXJyYXlCYXNlZE9uVGFncyh0YWdOYW1lKSB7XHJcbiAgICAgIGNvbnN0IGhvbGRlciA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0b2Rvc1tpXS50YWcubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmICh0b2Rvc1tpXS50YWdbal0gPT09IHRhZ05hbWUpIHtcclxuICAgICAgICAgICAgaG9sZGVyLnB1c2godG9kb3NbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaG9sZGVyO1xyXG4gICAgfSxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kbztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tJztcclxuaW1wb3J0IGZvcm0gZnJvbSAnLi9mb3JtJztcclxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJztcclxuaW1wb3J0IHRhZyBmcm9tICcuL3RhZyc7XHJcblxyXG4vLyBzaG93IHRvZG8gZm9ybSBidXR0b25cclxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcclxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGZvcm0uc2hvdygpO1xyXG4gIGRvbS5wb3B1bGF0ZVRhZ3NJbkZvcm0oKTtcclxufSk7XHJcblxyXG4vLyBhZGQgdG9kbyBidXR0b25cclxuY29uc3Qgc3VibWl0VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdG9kby1idG4nKTtcclxuc3VibWl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHRvZG8uYWRkKFxyXG4gICAgZm9ybS5nZXRUaXRsZSgpLFxyXG4gICAgZm9ybS5nZXREZXNjcmlwdGlvbigpLFxyXG4gICAgZm9ybS5nZXRSYWRpbygpLFxyXG4gICAgZm9ybS5nZXREdWVEYXRlKCksXHJcbiAgICBmb3JtLmdldFRhZygpLFxyXG4gICAgZmFsc2UsXHJcbiAgKTtcclxuXHJcbiAgZm9ybS5yZXNldCgpO1xyXG4gIGZvcm0uaGlkZSgpO1xyXG5cclxuICBkb20ucG9wdWxhdGVDb250YWluZXIodGFnLmdldFRydWVUYWcoKSk7XHJcbn0pO1xyXG5cclxuLy8gYWRkIHRhZyBidXR0b25cclxuY29uc3QgYWRkVGFnQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YWcnKTtcclxuY29uc3QgdGFnRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFnLW5hbWUnKTtcclxuYWRkVGFnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHRhZy5hZGQodGFnRmllbGQudmFsdWUsIGZhbHNlKTtcclxuICBkb20ucG9wdWxhdGVUYWdzKCk7XHJcbiAgdGFnRmllbGQudmFsdWUgPSAnJztcclxufSk7XHJcblxyXG4vLyB0YWdzIGNoZWNrYm94XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==