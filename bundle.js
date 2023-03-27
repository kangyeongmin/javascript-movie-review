/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\nbody.no-scroll {\\n  overflow: hidden;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n\\n  width: 1100px;\\n  margin: 0 auto;\\n  transition: all 0.5s;\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-row-gap: 48px;\\n  justify-content: space-between;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  transition: all 0.5s;\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n\\n  width: 100%;\\n  height: 72px;\\n\\n  padding: 0 30px;\\n  margin-bottom: 48px;\\n  background-color: #222;\\n  border-bottom: 1px solid white;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n  transition: all 0.5s ease;\\n}\\n\\nheader .search-box > input {\\n  border: 0;\\n}\\n\\nheader .search-box > #search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n.error-message {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  text-align: center;\\n}\\n\\n.error-message h3 {\\n  font-size: 24px;\\n  margin-bottom: 24px;\\n}\\n\\n.error-message p {\\n  font-size: 14px;\\n}\\n\\n.placeholder-thumbnail {\\n  background-color: #3a3a3a;\\n}\\n\\n.modal-backdrop {\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  right: 0;\\n\\n  background: rgba(0, 0, 0, 0.35);\\n}\\n\\n.movie-modal {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n\\n  max-width: 826px;\\n  min-width: 327px;\\n  max-height: 577px;\\n\\n  background-color: #212122;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.modal-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\\n  position: relative;\\n}\\n\\n.modal-close {\\n  position: absolute;\\n  width: 36px;\\n  height: 36px;\\n  top: 12px;\\n  right: 10px;\\n\\n  border-radius: 50%;\\n  border: 0;\\n\\n  font-size: 21px;\\n  color: #f1f1f1;\\n  background: #383839;\\n}\\n\\n.modal-title {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  width: 100%;\\n  height: 60px;\\n\\n  border-bottom: 1px solid rgba(241, 241, 241, 0.25);\\n  font-weight: 600;\\n  font-size: 20px;\\n}\\n\\n.modal-poster {\\n  max-width: 35%;\\n  max-height: 45%;\\n}\\n\\n.modal-sub-container {\\n  display: flex;\\n  width: 90%;\\n  margin: 30px;\\n}\\n\\n.modal-text {\\n  font-size: 16px;\\n  line-height: 24px;\\n}\\n\\n.modal-overview {\\n  max-height: 300px;\\n  overflow: scroll;\\n  margin-bottom: 30px;\\n}\\n\\n.modal-info-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n\\n  width: 100%;\\n  margin-left: 20px;\\n}\\n\\n.info-header {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 15px;\\n}\\n\\n.modal-score {\\n  width: 26px;\\n  height: 26px;\\n  margin-right: 5px;\\n}\\n\\n.modal-icon {\\n  margin: 0 3px 0 15px;\\n}\\n\\n.modal-score-box {\\n  display: flex;\\n  align-items: center;\\n  padding: 0 20px;\\n  height: 64px;\\n\\n  background: #383839;\\n  border-radius: 16px;\\n\\n  font-size: 16px;\\n  font-weight: 400;\\n}\\n\\n.modal-score-box > p.bold {\\n  font-weight: 700;\\n  font-size: 16px;\\n  margin-right: 0.5rem;\\n}\\n\\n.modal-score-box > a > p.normal {\\n  font-weight: 400;\\n  margin-left: 0.7rem;\\n}\\n\\n.star-count {\\n  display: flex;\\n  align-items: center;\\n  margin-left: 1rem;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\n\\n@media only screen and (min-width: 800px) and (max-width: 1199px) {\\n  .item-view {\\n    width: 800px;\\n  }\\n\\n  .item-list {\\n    grid-template-columns: repeat(3, 180px);\\n  }\\n}\\n\\n@media only screen and (min-width: 450px) and (max-width: 799px) {\\n  .item-view {\\n    width: 400px;\\n  }\\n\\n  .item-list {\\n    grid-template-columns: repeat(2, 180px);\\n  }\\n}\\n\\n@media only screen and (max-width: 599px) {\\n  .modal-poster {\\n    display: none;\\n  }\\n\\n  .movie-modal {\\n    transform: translate(-50%, 0%);\\n  }\\n\\n  .modal-overview {\\n    max-height: 100px;\\n  }\\n\\n  .modal-info-container {\\n    margin-left: 0px;\\n  }\\n}\\n\\n@media only screen and (max-width: 449px) {\\n  header {\\n    width: 100vw;\\n  }\\n\\n  .item-view {\\n    width: auto;\\n  }\\n\\n  .item-view h2 {\\n    margin-left: 2rem;\\n  }\\n\\n  .item-list {\\n    grid-template-columns: repeat(2, 180px);\\n    grid-row-gap: 30px;\\n  }\\n\\n  .item-card {\\n    align-items: center;\\n  }\\n\\n  .item-thumbnail {\\n    width: 140px;\\n    height: 220px;\\n  }\\n\\n  .item-title {\\n    font-size: 16px;\\n    width: 140px;\\n  }\\n\\n  .item-score {\\n    font-size: 16px;\\n    align-self: start;\\n    margin-left: 1.2rem;\\n  }\\n\\n  header > .search-box {\\n    display: flex;\\n    justify-content: space-between;\\n    position: absolute;\\n    top: 20px;\\n    right: 25px;\\n\\n    width: 35px;\\n  }\\n\\n  header .search-box > input {\\n    width: 0px;\\n  }\\n\\n  header > .search-box:hover {\\n    width: 365px;\\n  }\\n\\n  header > .search-box:hover > input {\\n    transition: all 0.7s ease;\\n    width: 200px;\\n  }\\n\\n  .modal-score-box > a > p.normal {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MovieItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MovieItem */ \"./src/components/MovieItem.ts\");\n/* harmony import */ var _components_MovieListContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MovieListContainer */ \"./src/components/MovieListContainer.ts\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NavBar */ \"./src/components/NavBar.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/domSelector */ \"./src/utils/domSelector.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass App {\n    constructor() {\n        this.render();\n        this.setScrollObserver();\n        this.initEvents();\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\"#app\").insertAdjacentHTML(\"afterbegin\", _components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render());\n            (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\"main\").insertAdjacentHTML(\"afterbegin\", _components_MovieListContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render());\n        });\n    }\n    initEvents() {\n        _components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bindSubmitEvent();\n    }\n    setScrollObserver() {\n        const observer = new IntersectionObserver((entry) => {\n            if (entry[0].isIntersecting) {\n                _components_MovieListContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onScroll();\n            }\n            _components_MovieItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeSkeleton();\n        }, {\n            root: document.querySelector(\"#scrollArea\"),\n        });\n        observer.observe((0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\"#movie-list-end\"));\n    }\n}\nnew App();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/App.ts?");

/***/ }),

/***/ "./src/api/HTTPError.ts":
/*!******************************!*\
  !*** ./src/api/HTTPError.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HTTPError\": () => (/* binding */ HTTPError)\n/* harmony export */ });\nclass HTTPError extends Error {\n    constructor(statusCode, message) {\n        super(message);\n        this.name = `HTTPError`;\n        this.statusCode = statusCode;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/HTTPError.ts?");

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchDetailedMovieData\": () => (/* binding */ fetchDetailedMovieData),\n/* harmony export */   \"fetchPopularMovieData\": () => (/* binding */ fetchPopularMovieData),\n/* harmony export */   \"fetchSearchedMovieData\": () => (/* binding */ fetchSearchedMovieData)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _HTTPError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTTPError */ \"./src/api/HTTPError.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst fetchPopularMovieData = (currentPage) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL}movie/popular?api_key=${\"f34d1031242e2e85f709994a1cede895\"}&language=ko-KR&page=${currentPage}`);\n    if (!response.ok)\n        throw new _HTTPError__WEBPACK_IMPORTED_MODULE_1__.HTTPError(response.status);\n    const movieData = yield response.json();\n    return movieData.results;\n});\nconst fetchSearchedMovieData = (searchKey, currentPage) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL}search/movie?api_key=${\"f34d1031242e2e85f709994a1cede895\"}&language=ko-KR&query=${searchKey}&page=${currentPage}&include_adult=false`);\n    if (!response.ok)\n        throw new _HTTPError__WEBPACK_IMPORTED_MODULE_1__.HTTPError(response.status);\n    const movieData = yield response.json();\n    return movieData.results;\n});\nconst fetchDetailedMovieData = (movieId) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL}movie/${movieId}?api_key=${\"f34d1031242e2e85f709994a1cede895\"}&language=ko-KR`);\n    if (!response.ok)\n        throw new _HTTPError__WEBPACK_IMPORTED_MODULE_1__.HTTPError(response.status);\n    const movieData = yield response.json();\n    return movieData;\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/index.ts?");

/***/ }),

/***/ "./src/assets/index.ts":
/*!*****************************!*\
  !*** ./src/assets/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logo\": () => (/* reexport default export from named module */ _logo_png__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"SearchButton\": () => (/* reexport default export from named module */ _search_button_png__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"StarEmpty\": () => (/* reexport default export from named module */ _star_empty_svg__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"StarFilled\": () => (/* reexport default export from named module */ _star_filled_svg__WEBPACK_IMPORTED_MODULE_3__)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _search_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_button.png */ \"./src/assets/search_button.png\");\n/* harmony import */ var _star_empty_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_empty.svg */ \"./src/assets/star_empty.svg\");\n/* harmony import */ var _star_filled_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star_filled.svg */ \"./src/assets/star_filled.svg\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/index.ts?");

/***/ }),

/***/ "./src/components/InvalidMessage.ts":
/*!******************************************!*\
  !*** ./src/components/InvalidMessage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n\nconst InvalidMessage = {\n    renderNoSearchMessage: (searchKey) => {\n        const template = `\n      <div class=\"error-message\">\n        <h3>입력하신 검색어 \"${searchKey}\"(와)과 일치하는 결과가 없습니다.</h3>\n        <p>다른 키워드를 입력해 보세요.</p>\n      </div>`;\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)(\".item-list\").insertAdjacentHTML(\"afterbegin\", template);\n    },\n    renderErrorMessage: (statusCode) => {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)(\".item-view\").replaceChildren();\n        const template = `\n      <div class=\"error-message\">\n      ${statusCode >= 500\n            ? `<h3>서비스 이용에 불편을 드려 죄송합니다.</h3>\n        <p>새로고침 단추를 클릭하거나 나중에 다시 시도해 주세요.</p>`\n            : `<h3>요청하신 페이지를 찾을 수 없습니다.</h3>\n        <p>유효한 페이지 주소인지 확인해 주세요.</p>`}\n      </div>`;\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)(\".item-view\").insertAdjacentHTML(\"afterbegin\", template);\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvalidMessage);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/InvalidMessage.ts?");

/***/ }),

/***/ "./src/components/MovieItem.ts":
/*!*************************************!*\
  !*** ./src/components/MovieItem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MovieModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieModal */ \"./src/components/MovieModal.ts\");\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n\n\n\n\n\nconst MovieItem = {\n    render: (movie) => {\n        return `\n      <li>\n        <a href=\"#\">\n          <div id=\"${movie.id}\" class=\"item-card movie-item\">\n          ${movie.poster_path\n            ? `<img\n              class=\"item-thumbnail skeleton\"\n              src=\"${_constants__WEBPACK_IMPORTED_MODULE_3__.POSTER_BASE_URL}${movie.poster_path}\"\n              loading=\"lazy\"\n              alt=\"${movie.title}\"\n            />`\n            : `<div id=\"item-thumbnail\" class=\"item-thumbnail placeholder-thumbnail skeleton\"></div>`}\n            <p id=\"item-title\" class=\"item-title skeleton\">${movie.title}</p>\n            <p id=\"item-score\" class=\"item-score skeleton\"><img src=\"${_assets__WEBPACK_IMPORTED_MODULE_2__.StarFilled}\" alt=\"별점\" />${movie.vote_average}</p>\n        </div>\n      </a>\n    </li>`;\n    },\n    bindClickEvent: () => {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_4__.$$)(\".movie-item\").forEach((movieItem) => {\n            movieItem.addEventListener(\"click\", (event) => {\n                event.preventDefault();\n                MovieItem.onClickMovieItem(Number(movieItem.id));\n            });\n        });\n    },\n    onClickMovieItem: (movieId) => {\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setCurrentMovieId(movieId);\n        _MovieModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadMovieDetail();\n    },\n    removeSkeleton: () => {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_4__.$$)(\".item-card\").forEach((item) => {\n            item.childNodes.forEach((child) => {\n                if (child instanceof HTMLElement) {\n                    child.classList.remove(\"skeleton\");\n                }\n            });\n        });\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieItem);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItem.ts?");

/***/ }),

/***/ "./src/components/MovieListContainer.ts":
/*!**********************************************!*\
  !*** ./src/components/MovieListContainer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n/* harmony import */ var _MovieItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieItem */ \"./src/components/MovieItem.ts\");\n/* harmony import */ var _InvalidMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvalidMessage */ \"./src/components/InvalidMessage.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _api_HTTPError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/HTTPError */ \"./src/api/HTTPError.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst MovieListContainer = {\n    render() {\n        return `\n      <section class=\"item-view\">\n        <h2 id=\"movie-list-title\">지금 인기 있는 영화</h2>\n        <ul class=\"item-list\"></ul>\n        <div id=\"modal\"></div>\n        <div id=\"movie-list-end\"></div>\n      </section>\n    `;\n    },\n    renderMovieItem: (searchKey) => __awaiter(void 0, void 0, void 0, function* () {\n        const movies = yield _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMovieData();\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\".item-list\").insertAdjacentHTML(\"beforeend\", movies.map((movie) => _MovieItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(movie)).join(\"\"));\n        _MovieItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bindClickEvent();\n        if (searchKey && !movies.length) {\n            MovieListContainer.hideTitle();\n            _InvalidMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderNoSearchMessage(searchKey);\n        }\n    }),\n    onScroll: () => {\n        try {\n            MovieListContainer.renderMovieItem();\n        }\n        catch (error) {\n            if (error instanceof _api_HTTPError__WEBPACK_IMPORTED_MODULE_4__.HTTPError) {\n                _InvalidMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderErrorMessage(error.statusCode);\n            }\n        }\n    },\n    onSearch: (searchKey) => __awaiter(void 0, void 0, void 0, function* () {\n        try {\n            (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\"#movie-list-title\").textContent = `\"${searchKey}\" 검색 결과`;\n            (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\".item-list\").replaceChildren();\n            MovieListContainer.showTitle();\n            MovieListContainer.renderMovieItem(searchKey);\n        }\n        catch (error) {\n            if (error instanceof _api_HTTPError__WEBPACK_IMPORTED_MODULE_4__.HTTPError) {\n                _InvalidMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderErrorMessage(error.statusCode);\n            }\n        }\n    }),\n    showTitle: () => {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\"#movie-list-title\").style.display = \"block\";\n    },\n    hideTitle: () => {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)(\"#movie-list-title\").style.display = \"none\";\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieListContainer);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieListContainer.ts?");

/***/ }),

/***/ "./src/components/MovieModal.ts":
/*!**************************************!*\
  !*** ./src/components/MovieModal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n/* harmony import */ var _InvalidMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvalidMessage */ \"./src/components/InvalidMessage.ts\");\n/* harmony import */ var _api_HTTPError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/HTTPError */ \"./src/api/HTTPError.ts\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nconst MovieModal = {\n    loadMovieDetail: () => __awaiter(void 0, void 0, void 0, function* () {\n        try {\n            const movieDetail = yield _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDetailedMovieData();\n            const starCount = _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStarCount();\n            MovieModal.render(movieDetail);\n            MovieModal.renderStar(starCount);\n            MovieModal.initEvents();\n            (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"body\").classList.add(\"no-scroll\");\n        }\n        catch (error) {\n            if (error instanceof _api_HTTPError__WEBPACK_IMPORTED_MODULE_2__.HTTPError) {\n                _InvalidMessage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderErrorMessage(error.statusCode);\n            }\n        }\n    }),\n    render: (movie) => {\n        const template = `\n      <div id=\"modal-backdrop\" class=\"modal-backdrop\"/>\n      <div class=\"movie-modal modal-container\">\n        <button class=\"modal-close\">✕</button>\n        <p class=\"modal-title\">${movie.title}</p>\n        <div id=\"${movie.id}\" class=\"modal-sub-container\">\n          ${movie.poster_path\n            ? `<img\n              class=\"modal-poster\"\n              src=\"${_constants__WEBPACK_IMPORTED_MODULE_4__.POSTER_BASE_URL}${movie.poster_path}\"\n              loading=\"lazy\"\n              alt=\"${movie.title}\"\n            />`\n            : `<div class=\"item-thumbnail placeholder-thumbnail\"></div>`}\n          <div class=\"modal-info-container\">\n            <div>\n              <div class=\"info-header\">\n                <p class=\"modal-text\" >${movie.genres\n            .map((genre) => genre.name)\n            .join(\", \")}</p>\n                <img class=\"modal-icon\" src=\"${_assets__WEBPACK_IMPORTED_MODULE_3__.StarFilled}\" alt=\"별점\"/>\n                <p class=\"modal-text\">${movie.vote_average}</p>\n              </div>\n              <p class=\"modal-text modal-overview\">${movie.overview}</p>\n            </div>\n            <div class=\"modal-score-box\">\n              <p class=\"bold\">내 별점</p>\n              <a href=\"#\" id=\"star-count\" class=\"star-count\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    `;\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"#modal\").innerHTML = template;\n    },\n    initEvents: () => {\n        MovieModal.bindClickEvent();\n        MovieModal.bindPressEvent();\n        MovieModal.bindGoBack();\n    },\n    renderStar: (starCount) => {\n        const score = starCount * 2;\n        const template = `\n    ${[...Array(starCount)]\n            .map((_, index) => `<img id=\"${index + 1}\" class=\"modal-score\" src=\"${_assets__WEBPACK_IMPORTED_MODULE_3__.StarFilled}\" alt=\"별점\"/>`)\n            .join(\"\") +\n            [...Array(5 - starCount)]\n                .map((_, index) => `<img id=\"${starCount + index + 1}\" class=\"modal-score\" src=\"${_assets__WEBPACK_IMPORTED_MODULE_3__.StarEmpty}\" alt=\"별점\"/>`)\n                .join(\"\")}\n    <p id=\"score\" class=\"normal\">${score}</p>\n    <p class=\"normal\">${_constants__WEBPACK_IMPORTED_MODULE_4__.SCORE_COMMENT[score]}</p>\n    `;\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"#star-count\").replaceChildren();\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"#star-count\").insertAdjacentHTML(\"afterbegin\", template);\n    },\n    bindClickEvent: () => {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"#modal-backdrop\").addEventListener(\"click\", (event) => {\n            if (event.target == (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"#modal-backdrop\")) {\n                MovieModal.close();\n            }\n        });\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\".modal-close\").addEventListener(\"click\", (event) => {\n            event.stopPropagation();\n            MovieModal.close();\n        });\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$$)(\".modal-score\").forEach((star) => {\n            star.addEventListener(\"click\", (event) => {\n                event.preventDefault();\n                MovieModal.renderStar(Number(star.id));\n                MovieModal.initEvents();\n            });\n        });\n    },\n    bindPressEvent: () => {\n        window.addEventListener(\"keydown\", (event) => {\n            if (event.code == \"Backspace\" || event.code == \"Escape\") {\n                MovieModal.close();\n            }\n        });\n    },\n    bindGoBack: () => {\n        history.pushState(null, location.href);\n        window.onpopstate = function () {\n            MovieModal.close();\n        };\n    },\n    close: () => __awaiter(void 0, void 0, void 0, function* () {\n        const score = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"#score\").innerText;\n        if (score != \"0\") {\n            _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveStar(Number(score) / 2);\n        }\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"#modal-backdrop\").remove();\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_5__.$)(\"body\").classList.remove(\"no-scroll\");\n    }),\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieModal);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieModal.ts?");

/***/ }),

/***/ "./src/components/NavBar.ts":
/*!**********************************!*\
  !*** ./src/components/NavBar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _MovieListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieListContainer */ \"./src/components/MovieListContainer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nconst NavBar = {\n    render: () => {\n        return `\n      <header>\n        <h1><a href=\"\"><img src=\"${_assets__WEBPACK_IMPORTED_MODULE_1__.Logo}\" alt=\"MovieList 로고\" /></a></h1>\n        <form id=\"search-form\" class=\"search-box\">\n          <input id=\"search-input\" name=\"search-input\" type=\"text\" placeholder=\"검색\" />\n          <button id=\"search-button\">검색</button>\n        </form>\n      </header>`;\n    },\n    bindSubmitEvent: () => {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.$)(\".search-box\").addEventListener(\"submit\", (event) => NavBar.onSubmitSearchForm(event));\n    },\n    onSubmitSearchForm: (event) => __awaiter(void 0, void 0, void 0, function* () {\n        event.preventDefault();\n        const target = event.target;\n        const inputElement = target[\"search-input\"];\n        if (inputElement.value.trim().length === 0)\n            return;\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(inputElement.value);\n        _MovieListContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].onSearch(inputElement.value);\n    }),\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/NavBar.ts?");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_BASE_URL\": () => (/* binding */ API_BASE_URL),\n/* harmony export */   \"MOVIE_MAX_COUNT\": () => (/* binding */ MOVIE_MAX_COUNT),\n/* harmony export */   \"POSTER_BASE_URL\": () => (/* binding */ POSTER_BASE_URL),\n/* harmony export */   \"SCORE_COMMENT\": () => (/* binding */ SCORE_COMMENT)\n/* harmony export */ });\nconst MOVIE_MAX_COUNT = 20;\nconst POSTER_BASE_URL = \"https://www.themoviedb.org/t/p/original\";\nconst API_BASE_URL = \"https://api.themoviedb.org/3/\";\nconst SCORE_COMMENT = {\n    0: \"별점을 매겨주세요\",\n    2: \"최악이예요\",\n    4: \"별로예요\",\n    6: \"보통이에요\",\n    8: \"재미있어요\",\n    10: \"명작이에요\",\n};\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/index.ts?");

/***/ }),

/***/ "./src/domain/MovieList.ts":
/*!*********************************!*\
  !*** ./src/domain/MovieList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/index */ \"./src/api/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass MovieList {\n    constructor() {\n        this.currentPage = 1;\n        this.searchKey = \"\";\n        this.currentMovieId = 0;\n    }\n    static getInstance() {\n        if (!MovieList.instance) {\n            MovieList.instance = new MovieList();\n        }\n        return MovieList.instance;\n    }\n    init(searchKey) {\n        this.currentPage = 1;\n        this.searchKey = searchKey;\n    }\n    increaseCurrentPage() {\n        this.currentPage += 1;\n    }\n    setCurrentMovieId(newMovieId) {\n        this.currentMovieId = newMovieId;\n    }\n    getPopularMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const moviesData = yield (0,_api_index__WEBPACK_IMPORTED_MODULE_0__.fetchPopularMovieData)(this.currentPage);\n            this.increaseCurrentPage();\n            const movies = moviesData.map((movie) => ({\n                id: movie.id,\n                title: movie.title,\n                vote_average: Math.round(movie.vote_average * 10) / 10,\n                poster_path: movie.poster_path,\n            }));\n            return movies;\n        });\n    }\n    getSearchedMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const moviesData = yield (0,_api_index__WEBPACK_IMPORTED_MODULE_0__.fetchSearchedMovieData)(this.searchKey, this.currentPage);\n            this.increaseCurrentPage();\n            const movies = moviesData.map((movie) => ({\n                id: movie.id,\n                title: movie.title,\n                vote_average: Math.round(movie.vote_average * 10) / 10,\n                poster_path: movie.poster_path,\n            }));\n            return movies;\n        });\n    }\n    getDetailedMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movieData = yield (0,_api_index__WEBPACK_IMPORTED_MODULE_0__.fetchDetailedMovieData)(this.currentMovieId);\n            const movieDetail = {\n                id: movieData.id,\n                title: movieData.title,\n                genres: movieData.genres,\n                overview: movieData.overview,\n                vote_average: Math.round(movieData.vote_average * 10) / 10,\n                poster_path: movieData.poster_path,\n            };\n            return movieDetail;\n        });\n    }\n    getMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.searchKey !== \"\"\n                ? yield this.getSearchedMovieData()\n                : yield this.getPopularMovieData();\n        });\n    }\n    getStars() {\n        var _a;\n        return (_a = JSON.parse(localStorage.getItem(\"stars\"))) !== null && _a !== void 0 ? _a : [];\n    }\n    getStarCount() {\n        const stars = this.getStars();\n        const star = stars.filter((star) => star.id === this.currentMovieId);\n        return star.length == 0 ? 0 : star[0].count;\n    }\n    saveStar(count) {\n        const stars = this.getStars();\n        const star = stars.filter((star) => star.id === this.currentMovieId);\n        star.length == 0 ? this.addStar(count) : this.modifyStar(count);\n    }\n    modifyStar(count) {\n        const stars = this.getStars();\n        const modifiedStars = stars.map((star) => {\n            if (star.id === this.currentMovieId) {\n                star.count = count;\n            }\n            return star;\n        });\n        localStorage.setItem(\"stars\", JSON.stringify(modifiedStars));\n    }\n    addStar(count) {\n        const stars = this.getStars();\n        const star = { id: this.currentMovieId, count: count };\n        localStorage.setItem(\"stars\", JSON.stringify([...stars, star]));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/MovieList.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.ts */ \"./src/App.ts\");\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/common.css */ \"./src/css/common.css\");\n\n\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/utils/domSelector.ts":
/*!**********************************!*\
  !*** ./src/utils/domSelector.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (selector) => {\n    const element = document.querySelector(selector);\n    if (!element) {\n        throw new Error(`DOM에 ${selector} 요소가 존재하지 않습니다.`);\n    }\n    return element;\n};\nconst $$ = (selector) => {\n    return document.querySelectorAll(selector);\n};\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/domSelector.ts?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/search_button.png":
/*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?");

/***/ }),

/***/ "./src/assets/star_empty.svg":
/*!***********************************!*\
  !*** ./src/assets/star_empty.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cab6563edbbea412a54.svg\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_empty.svg?");

/***/ }),

/***/ "./src/assets/star_filled.svg":
/*!************************************!*\
  !*** ./src/assets/star_filled.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63befeaf062038194590.svg\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_filled.svg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;