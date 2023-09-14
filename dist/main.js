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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./basico.woff */ "./src/basico.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 10px;
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
}

@font-face {
  font-family: "Basico";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
  font-style: normal;
  font-weight: 400;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100vh;
}
body {
  min-height: 100vh;
  font-family: "Basico";
}

ul {
  list-style: none;
}

.container {
  min-height: inherit;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  padding: 1rem 2rem;
  background-color: var(--bs-gray-dark);
  color: var(--bs-light);
}

.header h1 {
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 4rem;
  padding-left: 4rem;
}

.header ul {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  margin-right: 20%;
  font-size: 1.5rem;
}

.header ul li {
  cursor: pointer;
}

.header ul li:hover {
  color: #c9c9c9;
}

.content {
  background-color: #9a6638;
  color: var(--bs-light);
}
.home-wrapper {
  padding: 10rem 30rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "title title"
    "text img"
    "text img";
}

.home-wrapper h1 {
  grid-area: title;
  place-self: center;
  font-size: 7rem;
  margin-bottom: 5%;
}

.home-wrapper img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.home-wrapper .side-content {
  background-color: var(--bs-dark);
  padding: 3rem;
  display: grid;
  gap: 2rem;
  place-content: center;
}

.side-content p {
  font-size: 1.5rem;
  max-width: 60ch;
  letter-spacing: 1px;
}

.about-wrapper,
.contact-wrapper {
  display: grid;
  height: 100%;
}

.hero {
  align-self: center;
  justify-self: stretch;

  display: grid;
  background-color: rgba(33, 37, 41, 0.6);
  place-items: center;
  padding: 15rem;
  margin-top: 4rem;
}
.hero h1 {
  font-size: 7rem;
  letter-spacing: 1rem;
}

.story {
  justify-self: center;
  display: grid;
  gap: 2rem;
  place-content: center;
  padding: 4rem 0;
}

.story p {
  max-width: 75ch;
  font-size: 1.5rem;
  line-height: 2.5rem;
}

form {
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 8rem;
  width: 40%;
}

.input-group {
  display: grid;
  place-items: start;
  gap: 1rem;
}

.input-group input {
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #eee;
  width: 100%;
}

.input-group label {
  align-self: end;
  font-size: 2rem;
}

.input-group textarea {
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
}

.input-group:nth-child(3) {
  grid-column: span 2;
}

.input-group:last-child {
  grid-column: span 2;
}

.input-group button {
  border: none;
  outline: none;
  border-radius: 10px;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: var(--bs-teal);
  color: var(--bs-white);
  font-weight: bold;
  font-size: 1.8rem;
}

.footer {
  background-color: var(--bs-gray-dark);
  color: var(--bs-light);
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,2DAAwC;EACxC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,kBAAkB;EAClB,qCAAqC;EACrC,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC;;;cAGY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;;EAErB,aAAa;EACb,uCAAuC;EACvC,mBAAmB;EACnB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,oBAAoB;EACpB,gCAAgC;EAChC,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":[":root {\r\n  font-size: 10px;\r\n  --bs-blue: #0d6efd;\r\n  --bs-indigo: #6610f2;\r\n  --bs-purple: #6f42c1;\r\n  --bs-pink: #d63384;\r\n  --bs-red: #dc3545;\r\n  --bs-orange: #fd7e14;\r\n  --bs-yellow: #ffc107;\r\n  --bs-green: #198754;\r\n  --bs-teal: #20c997;\r\n  --bs-cyan: #0dcaf0;\r\n  --bs-white: #fff;\r\n  --bs-gray: #6c757d;\r\n  --bs-gray-dark: #343a40;\r\n  --bs-primary: #0d6efd;\r\n  --bs-secondary: #6c757d;\r\n  --bs-success: #198754;\r\n  --bs-info: #0dcaf0;\r\n  --bs-warning: #ffc107;\r\n  --bs-danger: #dc3545;\r\n  --bs-light: #f8f9fa;\r\n  --bs-dark: #212529;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Basico\";\r\n  src: url(\"./basico.woff\") format(\"woff\");\r\n  font-style: normal;\r\n  font-weight: 400;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100vh;\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  font-family: \"Basico\";\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  min-height: inherit;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n}\r\n\r\n.header {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n  padding: 1rem 2rem;\r\n  background-color: var(--bs-gray-dark);\r\n  color: var(--bs-light);\r\n}\r\n\r\n.header h1 {\r\n  letter-spacing: 2px;\r\n  font-weight: 600;\r\n  font-size: 4rem;\r\n  padding-left: 4rem;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: end;\r\n  gap: 2rem;\r\n  margin-right: 20%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.header ul li {\r\n  cursor: pointer;\r\n}\r\n\r\n.header ul li:hover {\r\n  color: #c9c9c9;\r\n}\r\n\r\n.content {\r\n  background-color: #9a6638;\r\n  color: var(--bs-light);\r\n}\r\n.home-wrapper {\r\n  padding: 10rem 30rem;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"title title\"\r\n    \"text img\"\r\n    \"text img\";\r\n}\r\n\r\n.home-wrapper h1 {\r\n  grid-area: title;\r\n  place-self: center;\r\n  font-size: 7rem;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.home-wrapper img {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.home-wrapper .side-content {\r\n  background-color: var(--bs-dark);\r\n  padding: 3rem;\r\n  display: grid;\r\n  gap: 2rem;\r\n  place-content: center;\r\n}\r\n\r\n.side-content p {\r\n  font-size: 1.5rem;\r\n  max-width: 60ch;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.about-wrapper,\r\n.contact-wrapper {\r\n  display: grid;\r\n  height: 100%;\r\n}\r\n\r\n.hero {\r\n  align-self: center;\r\n  justify-self: stretch;\r\n\r\n  display: grid;\r\n  background-color: rgba(33, 37, 41, 0.6);\r\n  place-items: center;\r\n  padding: 15rem;\r\n  margin-top: 4rem;\r\n}\r\n.hero h1 {\r\n  font-size: 7rem;\r\n  letter-spacing: 1rem;\r\n}\r\n\r\n.story {\r\n  justify-self: center;\r\n  display: grid;\r\n  gap: 2rem;\r\n  place-content: center;\r\n  padding: 4rem 0;\r\n}\r\n\r\n.story p {\r\n  max-width: 75ch;\r\n  font-size: 1.5rem;\r\n  line-height: 2.5rem;\r\n}\r\n\r\nform {\r\n  justify-self: center;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 2rem;\r\n  padding: 8rem;\r\n  width: 40%;\r\n}\r\n\r\n.input-group {\r\n  display: grid;\r\n  place-items: start;\r\n  gap: 1rem;\r\n}\r\n\r\n.input-group input {\r\n  padding: 0.6rem;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: #eee;\r\n  width: 100%;\r\n}\r\n\r\n.input-group label {\r\n  align-self: end;\r\n  font-size: 2rem;\r\n}\r\n\r\n.input-group textarea {\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  font-size: 1.2rem;\r\n  padding: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.input-group:nth-child(3) {\r\n  grid-column: span 2;\r\n}\r\n\r\n.input-group:last-child {\r\n  grid-column: span 2;\r\n}\r\n\r\n.input-group button {\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  padding: 1.5rem 1rem;\r\n  background-color: var(--bs-teal);\r\n  color: var(--bs-white);\r\n  font-weight: bold;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.footer {\r\n  background-color: var(--bs-gray-dark);\r\n  color: var(--bs-light);\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("about-wrapper");
  wrapper.innerHTML = `<div class="hero">
            <h1>ABOUT US</h1>
          </div>
          <div class="story">
            <p>
              Once upon a time, in a quaint and picturesque village nestled deep within the rolling hills of Tuscany, there lived a man named Giovanni. Giovanni
              was a humble and kind-hearted soul, known throughout the village for his unwavering passion for cooking. He had a talent for creating the most
              exquisite dishes, each one a masterpiece of flavor and presentation.
            </p>

            <p>
              Giovanni's love for cooking was born from the deep-seated memories of his childhood. His parents, Maria and Antonio, had owned a small trattoria
              on the outskirts of the village, a place where locals and travelers alike would gather to savor the delectable flavors of homemade Italian
              cuisine.
            </p>

            <p>
              Maria was a culinary genius, a woman who could turn the simplest ingredients into gastronomic wonders that left patrons raving about her dishes
              for years to come. Antonio, her beloved husband, was the heart and soul of the trattoria, always ready with a warm smile and a friendly
              conversation for anyone who walked through their door.
            </p>

            <p>
              Life was idyllic for young Giovanni as he watched his parents work side by side, their love for each other and their craft evident in every dish
              they served. But tragedy struck one fateful evening when a powerful storm rolled through the village, unleashing torrents of rain and fierce
              winds.
            </p>

            <p>
              The trattoria, nestled on the banks of a gentle river, was inundated with water as the river overflowed its banks. Giovanni's parents, Maria and
              Antonio, were trapped inside. Desperate attempts were made by the villagers to save them, but the raging storm was unforgiving. In the end, they
              could only watch in helpless horror as the waters claimed the trattoria and its beloved owners.
            </p>

            <p>
              Giovanni was devastated by the loss of his parents and the trattoria. He was left with nothing but the precious memories of their culinary
              creations and the dreams they had shared together. Determined to honor their legacy, he vowed to rebuild their trattoria and share their recipes
              with the world.
            </p>

            <p>
              With the help of the villagers, Giovanni worked tirelessly to reconstruct the trattoria from the ground up. It took years of hard work and
              dedication, but eventually, the trattoria rose from the ashes, more beautiful than ever before. Giovanni adorned the walls with photographs of his
              parents and their creations, turning the trattoria into a living tribute to their memory.
            </p>

            <p>
              Giovanni's trattoria became famous far and wide, drawing food enthusiasts and travelers from across the globe. His dishes were a testament to his
              parents' culinary genius, and each bite was a taste of the love and passion that Maria and Antonio had poured into their craft.
            </p>

            <p>
              Yet, as Giovanni stood in his bustling trattoria, he couldn't help but feel the absence of his parents, especially during those quiet moments in
              the kitchen when he knew they should have been by his side. The tragic origins of his restaurant were a constant reminder of the price he had paid
              to preserve their legacy.
            </p>

            <p>
              And so, Giovanni's trattoria thrived, a place where the flavors of the past mingled with the present, and where the spirit of Maria and Antonio
              lived on through every dish served. But the sadness in Giovanni's eyes was a reminder that behind the delectable creations was a story of love,
              loss, and the undying determination to keep a culinary dream alive.
            </p>
          </div>`;
  contentContainer.appendChild(wrapper);
  return {
    page: "aboutUs",
    element: wrapper,
  };
}


/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("contact-wrapper");
  wrapper.innerHTML = `<div class="hero">
            <h1>CONTACT US</h1>
          </div>
          <form>
            <div class="input-group">
              <label for="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div class="input-group">
              <label for="message">Your Message</label>
              <textarea name="" id="message" cols="50" rows="10"></textarea>
            </div>
            <div class="input-group">
              <button>Submit</button>
            </div>
          </form>`;
  contentContainer.appendChild(wrapper);
  return {
    page: "contact",
    element: wrapper,
  };
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
function Home() {
  const contentContainer = document.querySelector(".content");
  contentContainer.children[0].remove();
  const wrapper = document.createElement("div");
  wrapper.classList.add("home-wrapper");
  wrapper.innerHTML = `<h1>Welcome to the show</h1>
            <div class="side-content">
              <p>
                Step into a world of culinary delight at [Restaurant Name], where every visit promises a memorable dining experience. Our restaurant is dedicated
                to serving exquisite cuisine in a warm and inviting atmosphere. From our carefully crafted menus to our attentive staff, we aim to create the
                perfect setting for your next dining adventure. At [Restaurant Name], we take pride in our commitment to culinary excellence. Our talented chefs
                are passionate about creating dishes that tantalize your taste buds. Using only the finest and freshest ingredients, we offer a diverse menu that
                caters to all palates, from classic comfort foods to innovative, gourmet creations.
              </p>
              <p>
                At [Restaurant Name], we take pride in our commitment to culinary excellence. Our talented chefs are passionate about creating dishes that
                tantalize your taste buds. Using only the finest and freshest ingredients, we offer a diverse menu that caters to all palates, from classic
                comfort foods to innovative, gourmet creations.
              </p>
            </div>
            <img src="../src/img1.jpg" alt="" srcset="" />
            <img src="../src/img2.jpg" alt="" srcset="" />
            <div class="side-content">
              <p>
                Dining at [Restaurant Name] is not just about the food; it's an immersive experience for all your senses. Our thoughtfully designed interior,
                soothing ambiance, and carefully curated music selection create a harmonious atmosphere that complements the flavors on your plate.
              </p>
              <p>
                Whether you're a seafood enthusiast, a vegetarian, or a carnivore craving a juicy steak, our menu has something to satisfy every craving. We also
                offer a wide range of gluten-free, vegan, and allergy-friendly options, ensuring that everyone can enjoy a memorable meal.
              </p>
              <p>
                Enhance your dining experience with our handcrafted cocktails and an extensive wine list. Our expert mixologists take pride in concocting unique
                libations that perfectly complement your meal. From classic cocktails to our signature creations, you're in for a treat.
              </p>
            </div>`;
  contentContainer.appendChild(wrapper);
  return { page: "home", element: wrapper };
}


/***/ }),

/***/ "./src/basico.woff":
/*!*************************!*\
  !*** ./src/basico.woff ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a19ef64c02b71bc13d4.woff";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");




let curPage = "home";

const changePage = function (e) {
  if (this.textContent === "Home" && curPage != "home") return (curPage = (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])().page);
  if (this.textContent === "About Us" && curPage != "aboutUs") return (curPage = (0,_modules_about__WEBPACK_IMPORTED_MODULE_2__["default"])().page);
  if (this.textContent === "Contact" && curPage != "contact") return (curPage = (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"])().page);
};

document.querySelectorAll(".header ul li").forEach((e) => e.addEventListener("click", changePage));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FB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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDRTtBQUNJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSx5REFBSTtBQUM5RSxpRkFBaUYsMERBQUs7QUFDdEYsZ0ZBQWdGLDREQUFPO0FBQ3ZGO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYXNpY28ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICAtLWJzLWJsdWU6ICMwZDZlZmQ7XHJcbiAgLS1icy1pbmRpZ286ICM2NjEwZjI7XHJcbiAgLS1icy1wdXJwbGU6ICM2ZjQyYzE7XHJcbiAgLS1icy1waW5rOiAjZDYzMzg0O1xyXG4gIC0tYnMtcmVkOiAjZGMzNTQ1O1xyXG4gIC0tYnMtb3JhbmdlOiAjZmQ3ZTE0O1xyXG4gIC0tYnMteWVsbG93OiAjZmZjMTA3O1xyXG4gIC0tYnMtZ3JlZW46ICMxOTg3NTQ7XHJcbiAgLS1icy10ZWFsOiAjMjBjOTk3O1xyXG4gIC0tYnMtY3lhbjogIzBkY2FmMDtcclxuICAtLWJzLXdoaXRlOiAjZmZmO1xyXG4gIC0tYnMtZ3JheTogIzZjNzU3ZDtcclxuICAtLWJzLWdyYXktZGFyazogIzM0M2E0MDtcclxuICAtLWJzLXByaW1hcnk6ICMwZDZlZmQ7XHJcbiAgLS1icy1zZWNvbmRhcnk6ICM2Yzc1N2Q7XHJcbiAgLS1icy1zdWNjZXNzOiAjMTk4NzU0O1xyXG4gIC0tYnMtaW5mbzogIzBkY2FmMDtcclxuICAtLWJzLXdhcm5pbmc6ICNmZmMxMDc7XHJcbiAgLS1icy1kYW5nZXI6ICNkYzM1NDU7XHJcbiAgLS1icy1saWdodDogI2Y4ZjlmYTtcclxuICAtLWJzLWRhcms6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJhc2ljb1wiO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmZcIik7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmFzaWNvXCI7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzByZW0sIDFmcikpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ncmF5LWRhcmspO1xyXG4gIGNvbG9yOiB2YXIoLS1icy1saWdodCk7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDEge1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyIHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyIHVsIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIgdWwgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjYzljOWM5O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNjYzODtcclxuICBjb2xvcjogdmFyKC0tYnMtbGlnaHQpO1xyXG59XHJcbi5ob21lLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDEwcmVtIDMwcmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwidGl0bGUgdGl0bGVcIlxyXG4gICAgXCJ0ZXh0IGltZ1wiXHJcbiAgICBcInRleHQgaW1nXCI7XHJcbn1cclxuXHJcbi5ob21lLXdyYXBwZXIgaDEge1xyXG4gIGdyaWQtYXJlYTogdGl0bGU7XHJcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogN3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmhvbWUtd3JhcHBlciBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5ob21lLXdyYXBwZXIgLnNpZGUtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZGFyayk7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMnJlbTtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlLWNvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWF4LXdpZHRoOiA2MGNoO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5hYm91dC13cmFwcGVyLFxyXG4uY29udGFjdC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlcm8ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzcsIDQxLCAwLjYpO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVyZW07XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4uaGVybyBoMSB7XHJcbiAgZm9udC1zaXplOiA3cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uc3Rvcnkge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDA7XHJcbn1cclxuXHJcbi5zdG9yeSBwIHtcclxuICBtYXgtd2lkdGg6IDc1Y2g7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDhyZW07XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBzdGFydDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCBpbnB1dCB7XHJcbiAgcGFkZGluZzogMC42cmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgbGFiZWwge1xyXG4gIGFsaWduLXNlbGY6IGVuZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cDpudGgtY2hpbGQoMykge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cDpsYXN0LWNoaWxkIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXRlYWwpO1xyXG4gIGNvbG9yOiB2YXIoLS1icy13aGl0ZSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktZGFyayk7XHJcbiAgY29sb3I6IHZhcigtLWJzLWxpZ2h0KTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVz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QUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgLS1icy1ibHVlOiAjMGQ2ZWZkO1xcclxcbiAgLS1icy1pbmRpZ286ICM2NjEwZjI7XFxyXFxuICAtLWJzLXB1cnBsZTogIzZmNDJjMTtcXHJcXG4gIC0tYnMtcGluazogI2Q2MzM4NDtcXHJcXG4gIC0tYnMtcmVkOiAjZGMzNTQ1O1xcclxcbiAgLS1icy1vcmFuZ2U6ICNmZDdlMTQ7XFxyXFxuICAtLWJzLXllbGxvdzogI2ZmYzEwNztcXHJcXG4gIC0tYnMtZ3JlZW46ICMxOTg3NTQ7XFxyXFxuICAtLWJzLXRlYWw6ICMyMGM5OTc7XFxyXFxuICAtLWJzLWN5YW46ICMwZGNhZjA7XFxyXFxuICAtLWJzLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1icy1ncmF5OiAjNmM3NTdkO1xcclxcbiAgLS1icy1ncmF5LWRhcms6ICMzNDNhNDA7XFxyXFxuICAtLWJzLXByaW1hcnk6ICMwZDZlZmQ7XFxyXFxuICAtLWJzLXNlY29uZGFyeTogIzZjNzU3ZDtcXHJcXG4gIC0tYnMtc3VjY2VzczogIzE5ODc1NDtcXHJcXG4gIC0tYnMtaW5mbzogIzBkY2FmMDtcXHJcXG4gIC0tYnMtd2FybmluZzogI2ZmYzEwNztcXHJcXG4gIC0tYnMtZGFuZ2VyOiAjZGMzNTQ1O1xcclxcbiAgLS1icy1saWdodDogI2Y4ZjlmYTtcXHJcXG4gIC0tYnMtZGFyazogIzIxMjUyOTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJhc2ljb1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi9iYXNpY28ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXNpY29cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcmVtLCAxZnIpKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktZGFyayk7XFxyXFxuICBjb2xvcjogdmFyKC0tYnMtbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGgxIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHVsIGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB1bCBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2M5YzljOTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNjYzODtcXHJcXG4gIGNvbG9yOiB2YXIoLS1icy1saWdodCk7XFxyXFxufVxcclxcbi5ob21lLXdyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMTByZW0gMzByZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJ0aXRsZSB0aXRsZVxcXCJcXHJcXG4gICAgXFxcInRleHQgaW1nXFxcIlxcclxcbiAgICBcXFwidGV4dCBpbWdcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS13cmFwcGVyIGgxIHtcXHJcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDdyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtd3JhcHBlciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXdyYXBwZXIgLnNpZGUtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kYXJrKTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1jb250ZW50IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXgtd2lkdGg6IDYwY2g7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtd3JhcHBlcixcXHJcXG4uY29udGFjdC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzNywgNDEsIDAuNik7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbn1cXHJcXG4uaGVybyBoMSB7XFxyXFxuICBmb250LXNpemU6IDdyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3J5IHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDRyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3J5IHAge1xcclxcbiAgbWF4LXdpZHRoOiA3NWNoO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDhyZW07XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCBsYWJlbCB7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCB0ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cDpudGgtY2hpbGQoMykge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWdyb3VwIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZWFsKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1icy13aGl0ZSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktZGFyayk7XFxyXFxuICBjb2xvcjogdmFyKC0tYnMtbGlnaHQpO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgY29udGVudENvbnRhaW5lci5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC13cmFwcGVyXCIpO1xyXG4gIHdyYXBwZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJoZXJvXCI+XHJcbiAgICAgICAgICAgIDxoMT5BQk9VVCBVUzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9yeVwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBPbmNlIHVwb24gYSB0aW1lLCBpbiBhIHF1YWludCBhbmQgcGljdHVyZXNxdWUgdmlsbGFnZSBuZXN0bGVkIGRlZXAgd2l0aGluIHRoZSByb2xsaW5nIGhpbGxzIG9mIFR1c2NhbnksIHRoZXJlIGxpdmVkIGEgbWFuIG5hbWVkIEdpb3Zhbm5pLiBHaW92YW5uaVxyXG4gICAgICAgICAgICAgIHdhcyBhIGh1bWJsZSBhbmQga2luZC1oZWFydGVkIHNvdWwsIGtub3duIHRocm91Z2hvdXQgdGhlIHZpbGxhZ2UgZm9yIGhpcyB1bndhdmVyaW5nIHBhc3Npb24gZm9yIGNvb2tpbmcuIEhlIGhhZCBhIHRhbGVudCBmb3IgY3JlYXRpbmcgdGhlIG1vc3RcclxuICAgICAgICAgICAgICBleHF1aXNpdGUgZGlzaGVzLCBlYWNoIG9uZSBhIG1hc3RlcnBpZWNlIG9mIGZsYXZvciBhbmQgcHJlc2VudGF0aW9uLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBHaW92YW5uaSdzIGxvdmUgZm9yIGNvb2tpbmcgd2FzIGJvcm4gZnJvbSB0aGUgZGVlcC1zZWF0ZWQgbWVtb3JpZXMgb2YgaGlzIGNoaWxkaG9vZC4gSGlzIHBhcmVudHMsIE1hcmlhIGFuZCBBbnRvbmlvLCBoYWQgb3duZWQgYSBzbWFsbCB0cmF0dG9yaWFcclxuICAgICAgICAgICAgICBvbiB0aGUgb3V0c2tpcnRzIG9mIHRoZSB2aWxsYWdlLCBhIHBsYWNlIHdoZXJlIGxvY2FscyBhbmQgdHJhdmVsZXJzIGFsaWtlIHdvdWxkIGdhdGhlciB0byBzYXZvciB0aGUgZGVsZWN0YWJsZSBmbGF2b3JzIG9mIGhvbWVtYWRlIEl0YWxpYW5cclxuICAgICAgICAgICAgICBjdWlzaW5lLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBNYXJpYSB3YXMgYSBjdWxpbmFyeSBnZW5pdXMsIGEgd29tYW4gd2hvIGNvdWxkIHR1cm4gdGhlIHNpbXBsZXN0IGluZ3JlZGllbnRzIGludG8gZ2FzdHJvbm9taWMgd29uZGVycyB0aGF0IGxlZnQgcGF0cm9ucyByYXZpbmcgYWJvdXQgaGVyIGRpc2hlc1xyXG4gICAgICAgICAgICAgIGZvciB5ZWFycyB0byBjb21lLiBBbnRvbmlvLCBoZXIgYmVsb3ZlZCBodXNiYW5kLCB3YXMgdGhlIGhlYXJ0IGFuZCBzb3VsIG9mIHRoZSB0cmF0dG9yaWEsIGFsd2F5cyByZWFkeSB3aXRoIGEgd2FybSBzbWlsZSBhbmQgYSBmcmllbmRseVxyXG4gICAgICAgICAgICAgIGNvbnZlcnNhdGlvbiBmb3IgYW55b25lIHdobyB3YWxrZWQgdGhyb3VnaCB0aGVpciBkb29yLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBMaWZlIHdhcyBpZHlsbGljIGZvciB5b3VuZyBHaW92YW5uaSBhcyBoZSB3YXRjaGVkIGhpcyBwYXJlbnRzIHdvcmsgc2lkZSBieSBzaWRlLCB0aGVpciBsb3ZlIGZvciBlYWNoIG90aGVyIGFuZCB0aGVpciBjcmFmdCBldmlkZW50IGluIGV2ZXJ5IGRpc2hcclxuICAgICAgICAgICAgICB0aGV5IHNlcnZlZC4gQnV0IHRyYWdlZHkgc3RydWNrIG9uZSBmYXRlZnVsIGV2ZW5pbmcgd2hlbiBhIHBvd2VyZnVsIHN0b3JtIHJvbGxlZCB0aHJvdWdoIHRoZSB2aWxsYWdlLCB1bmxlYXNoaW5nIHRvcnJlbnRzIG9mIHJhaW4gYW5kIGZpZXJjZVxyXG4gICAgICAgICAgICAgIHdpbmRzLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBUaGUgdHJhdHRvcmlhLCBuZXN0bGVkIG9uIHRoZSBiYW5rcyBvZiBhIGdlbnRsZSByaXZlciwgd2FzIGludW5kYXRlZCB3aXRoIHdhdGVyIGFzIHRoZSByaXZlciBvdmVyZmxvd2VkIGl0cyBiYW5rcy4gR2lvdmFubmkncyBwYXJlbnRzLCBNYXJpYSBhbmRcclxuICAgICAgICAgICAgICBBbnRvbmlvLCB3ZXJlIHRyYXBwZWQgaW5zaWRlLiBEZXNwZXJhdGUgYXR0ZW1wdHMgd2VyZSBtYWRlIGJ5IHRoZSB2aWxsYWdlcnMgdG8gc2F2ZSB0aGVtLCBidXQgdGhlIHJhZ2luZyBzdG9ybSB3YXMgdW5mb3JnaXZpbmcuIEluIHRoZSBlbmQsIHRoZXlcclxuICAgICAgICAgICAgICBjb3VsZCBvbmx5IHdhdGNoIGluIGhlbHBsZXNzIGhvcnJvciBhcyB0aGUgd2F0ZXJzIGNsYWltZWQgdGhlIHRyYXR0b3JpYSBhbmQgaXRzIGJlbG92ZWQgb3duZXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBHaW92YW5uaSB3YXMgZGV2YXN0YXRlZCBieSB0aGUgbG9zcyBvZiBoaXMgcGFyZW50cyBhbmQgdGhlIHRyYXR0b3JpYS4gSGUgd2FzIGxlZnQgd2l0aCBub3RoaW5nIGJ1dCB0aGUgcHJlY2lvdXMgbWVtb3JpZXMgb2YgdGhlaXIgY3VsaW5hcnlcclxuICAgICAgICAgICAgICBjcmVhdGlvbnMgYW5kIHRoZSBkcmVhbXMgdGhleSBoYWQgc2hhcmVkIHRvZ2V0aGVyLiBEZXRlcm1pbmVkIHRvIGhvbm9yIHRoZWlyIGxlZ2FjeSwgaGUgdm93ZWQgdG8gcmVidWlsZCB0aGVpciB0cmF0dG9yaWEgYW5kIHNoYXJlIHRoZWlyIHJlY2lwZXNcclxuICAgICAgICAgICAgICB3aXRoIHRoZSB3b3JsZC5cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgV2l0aCB0aGUgaGVscCBvZiB0aGUgdmlsbGFnZXJzLCBHaW92YW5uaSB3b3JrZWQgdGlyZWxlc3NseSB0byByZWNvbnN0cnVjdCB0aGUgdHJhdHRvcmlhIGZyb20gdGhlIGdyb3VuZCB1cC4gSXQgdG9vayB5ZWFycyBvZiBoYXJkIHdvcmsgYW5kXHJcbiAgICAgICAgICAgICAgZGVkaWNhdGlvbiwgYnV0IGV2ZW50dWFsbHksIHRoZSB0cmF0dG9yaWEgcm9zZSBmcm9tIHRoZSBhc2hlcywgbW9yZSBiZWF1dGlmdWwgdGhhbiBldmVyIGJlZm9yZS4gR2lvdmFubmkgYWRvcm5lZCB0aGUgd2FsbHMgd2l0aCBwaG90b2dyYXBocyBvZiBoaXNcclxuICAgICAgICAgICAgICBwYXJlbnRzIGFuZCB0aGVpciBjcmVhdGlvbnMsIHR1cm5pbmcgdGhlIHRyYXR0b3JpYSBpbnRvIGEgbGl2aW5nIHRyaWJ1dGUgdG8gdGhlaXIgbWVtb3J5LlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBHaW92YW5uaSdzIHRyYXR0b3JpYSBiZWNhbWUgZmFtb3VzIGZhciBhbmQgd2lkZSwgZHJhd2luZyBmb29kIGVudGh1c2lhc3RzIGFuZCB0cmF2ZWxlcnMgZnJvbSBhY3Jvc3MgdGhlIGdsb2JlLiBIaXMgZGlzaGVzIHdlcmUgYSB0ZXN0YW1lbnQgdG8gaGlzXHJcbiAgICAgICAgICAgICAgcGFyZW50cycgY3VsaW5hcnkgZ2VuaXVzLCBhbmQgZWFjaCBiaXRlIHdhcyBhIHRhc3RlIG9mIHRoZSBsb3ZlIGFuZCBwYXNzaW9uIHRoYXQgTWFyaWEgYW5kIEFudG9uaW8gaGFkIHBvdXJlZCBpbnRvIHRoZWlyIGNyYWZ0LlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBZZXQsIGFzIEdpb3Zhbm5pIHN0b29kIGluIGhpcyBidXN0bGluZyB0cmF0dG9yaWEsIGhlIGNvdWxkbid0IGhlbHAgYnV0IGZlZWwgdGhlIGFic2VuY2Ugb2YgaGlzIHBhcmVudHMsIGVzcGVjaWFsbHkgZHVyaW5nIHRob3NlIHF1aWV0IG1vbWVudHMgaW5cclxuICAgICAgICAgICAgICB0aGUga2l0Y2hlbiB3aGVuIGhlIGtuZXcgdGhleSBzaG91bGQgaGF2ZSBiZWVuIGJ5IGhpcyBzaWRlLiBUaGUgdHJhZ2ljIG9yaWdpbnMgb2YgaGlzIHJlc3RhdXJhbnQgd2VyZSBhIGNvbnN0YW50IHJlbWluZGVyIG9mIHRoZSBwcmljZSBoZSBoYWQgcGFpZFxyXG4gICAgICAgICAgICAgIHRvIHByZXNlcnZlIHRoZWlyIGxlZ2FjeS5cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgQW5kIHNvLCBHaW92YW5uaSdzIHRyYXR0b3JpYSB0aHJpdmVkLCBhIHBsYWNlIHdoZXJlIHRoZSBmbGF2b3JzIG9mIHRoZSBwYXN0IG1pbmdsZWQgd2l0aCB0aGUgcHJlc2VudCwgYW5kIHdoZXJlIHRoZSBzcGlyaXQgb2YgTWFyaWEgYW5kIEFudG9uaW9cclxuICAgICAgICAgICAgICBsaXZlZCBvbiB0aHJvdWdoIGV2ZXJ5IGRpc2ggc2VydmVkLiBCdXQgdGhlIHNhZG5lc3MgaW4gR2lvdmFubmkncyBleWVzIHdhcyBhIHJlbWluZGVyIHRoYXQgYmVoaW5kIHRoZSBkZWxlY3RhYmxlIGNyZWF0aW9ucyB3YXMgYSBzdG9yeSBvZiBsb3ZlLFxyXG4gICAgICAgICAgICAgIGxvc3MsIGFuZCB0aGUgdW5keWluZyBkZXRlcm1pbmF0aW9uIHRvIGtlZXAgYSBjdWxpbmFyeSBkcmVhbSBhbGl2ZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYWdlOiBcImFib3V0VXNcIixcclxuICAgIGVsZW1lbnQ6IHdyYXBwZXIsXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtd3JhcHBlclwiKTtcclxuICB3cmFwcGVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaGVyb1wiPlxyXG4gICAgICAgICAgICA8aDE+Q09OVEFDVCBVUzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5Zb3VyIE1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjUwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPmA7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGFnZTogXCJjb250YWN0XCIsXHJcbiAgICBlbGVtZW50OiB3cmFwcGVyLFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaG9tZS13cmFwcGVyXCIpO1xyXG4gIHdyYXBwZXIuaW5uZXJIVE1MID0gYDxoMT5XZWxjb21lIHRvIHRoZSBzaG93PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgU3RlcCBpbnRvIGEgd29ybGQgb2YgY3VsaW5hcnkgZGVsaWdodCBhdCBbUmVzdGF1cmFudCBOYW1lXSwgd2hlcmUgZXZlcnkgdmlzaXQgcHJvbWlzZXMgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuIE91ciByZXN0YXVyYW50IGlzIGRlZGljYXRlZFxyXG4gICAgICAgICAgICAgICAgdG8gc2VydmluZyBleHF1aXNpdGUgY3Vpc2luZSBpbiBhIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUuIEZyb20gb3VyIGNhcmVmdWxseSBjcmFmdGVkIG1lbnVzIHRvIG91ciBhdHRlbnRpdmUgc3RhZmYsIHdlIGFpbSB0byBjcmVhdGUgdGhlXHJcbiAgICAgICAgICAgICAgICBwZXJmZWN0IHNldHRpbmcgZm9yIHlvdXIgbmV4dCBkaW5pbmcgYWR2ZW50dXJlLiBBdCBbUmVzdGF1cmFudCBOYW1lXSwgd2UgdGFrZSBwcmlkZSBpbiBvdXIgY29tbWl0bWVudCB0byBjdWxpbmFyeSBleGNlbGxlbmNlLiBPdXIgdGFsZW50ZWQgY2hlZnNcclxuICAgICAgICAgICAgICAgIGFyZSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIGRpc2hlcyB0aGF0IHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMuIFVzaW5nIG9ubHkgdGhlIGZpbmVzdCBhbmQgZnJlc2hlc3QgaW5ncmVkaWVudHMsIHdlIG9mZmVyIGEgZGl2ZXJzZSBtZW51IHRoYXRcclxuICAgICAgICAgICAgICAgIGNhdGVycyB0byBhbGwgcGFsYXRlcywgZnJvbSBjbGFzc2ljIGNvbWZvcnQgZm9vZHMgdG8gaW5ub3ZhdGl2ZSwgZ291cm1ldCBjcmVhdGlvbnMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQXQgW1Jlc3RhdXJhbnQgTmFtZV0sIHdlIHRha2UgcHJpZGUgaW4gb3VyIGNvbW1pdG1lbnQgdG8gY3VsaW5hcnkgZXhjZWxsZW5jZS4gT3VyIHRhbGVudGVkIGNoZWZzIGFyZSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIGRpc2hlcyB0aGF0XHJcbiAgICAgICAgICAgICAgICB0YW50YWxpemUgeW91ciB0YXN0ZSBidWRzLiBVc2luZyBvbmx5IHRoZSBmaW5lc3QgYW5kIGZyZXNoZXN0IGluZ3JlZGllbnRzLCB3ZSBvZmZlciBhIGRpdmVyc2UgbWVudSB0aGF0IGNhdGVycyB0byBhbGwgcGFsYXRlcywgZnJvbSBjbGFzc2ljXHJcbiAgICAgICAgICAgICAgICBjb21mb3J0IGZvb2RzIHRvIGlubm92YXRpdmUsIGdvdXJtZXQgY3JlYXRpb25zLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltZzEuanBnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1nMi5qcGdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBEaW5pbmcgYXQgW1Jlc3RhdXJhbnQgTmFtZV0gaXMgbm90IGp1c3QgYWJvdXQgdGhlIGZvb2Q7IGl0J3MgYW4gaW1tZXJzaXZlIGV4cGVyaWVuY2UgZm9yIGFsbCB5b3VyIHNlbnNlcy4gT3VyIHRob3VnaHRmdWxseSBkZXNpZ25lZCBpbnRlcmlvcixcclxuICAgICAgICAgICAgICAgIHNvb3RoaW5nIGFtYmlhbmNlLCBhbmQgY2FyZWZ1bGx5IGN1cmF0ZWQgbXVzaWMgc2VsZWN0aW9uIGNyZWF0ZSBhIGhhcm1vbmlvdXMgYXRtb3NwaGVyZSB0aGF0IGNvbXBsZW1lbnRzIHRoZSBmbGF2b3JzIG9uIHlvdXIgcGxhdGUuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgV2hldGhlciB5b3UncmUgYSBzZWFmb29kIGVudGh1c2lhc3QsIGEgdmVnZXRhcmlhbiwgb3IgYSBjYXJuaXZvcmUgY3JhdmluZyBhIGp1aWN5IHN0ZWFrLCBvdXIgbWVudSBoYXMgc29tZXRoaW5nIHRvIHNhdGlzZnkgZXZlcnkgY3JhdmluZy4gV2UgYWxzb1xyXG4gICAgICAgICAgICAgICAgb2ZmZXIgYSB3aWRlIHJhbmdlIG9mIGdsdXRlbi1mcmVlLCB2ZWdhbiwgYW5kIGFsbGVyZ3ktZnJpZW5kbHkgb3B0aW9ucywgZW5zdXJpbmcgdGhhdCBldmVyeW9uZSBjYW4gZW5qb3kgYSBtZW1vcmFibGUgbWVhbC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBFbmhhbmNlIHlvdXIgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aCBvdXIgaGFuZGNyYWZ0ZWQgY29ja3RhaWxzIGFuZCBhbiBleHRlbnNpdmUgd2luZSBsaXN0LiBPdXIgZXhwZXJ0IG1peG9sb2dpc3RzIHRha2UgcHJpZGUgaW4gY29uY29jdGluZyB1bmlxdWVcclxuICAgICAgICAgICAgICAgIGxpYmF0aW9ucyB0aGF0IHBlcmZlY3RseSBjb21wbGVtZW50IHlvdXIgbWVhbC4gRnJvbSBjbGFzc2ljIGNvY2t0YWlscyB0byBvdXIgc2lnbmF0dXJlIGNyZWF0aW9ucywgeW91J3JlIGluIGZvciBhIHRyZWF0LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gIHJldHVybiB7IHBhZ2U6IFwiaG9tZVwiLCBlbGVtZW50OiB3cmFwcGVyIH07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuL21vZHVsZXMvYWJvdXRcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XHJcbmxldCBjdXJQYWdlID0gXCJob21lXCI7XHJcblxyXG5jb25zdCBjaGFuZ2VQYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gXCJIb21lXCIgJiYgY3VyUGFnZSAhPSBcImhvbWVcIikgcmV0dXJuIChjdXJQYWdlID0gSG9tZSgpLnBhZ2UpO1xyXG4gIGlmICh0aGlzLnRleHRDb250ZW50ID09PSBcIkFib3V0IFVzXCIgJiYgY3VyUGFnZSAhPSBcImFib3V0VXNcIikgcmV0dXJuIChjdXJQYWdlID0gQWJvdXQoKS5wYWdlKTtcclxuICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gXCJDb250YWN0XCIgJiYgY3VyUGFnZSAhPSBcImNvbnRhY3RcIikgcmV0dXJuIChjdXJQYWdlID0gQ29udGFjdCgpLnBhZ2UpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXIgdWwgbGlcIikuZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUGFnZSkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=