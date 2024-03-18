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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  font-size: 1rem;\n  cursor: pointer;\n}\n\nbody #root {\n  background: linear-gradient(#0073c8, #48b1ff);\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 100dvh;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  gap: 2rem;\n}\nbody #root.night {\n  background: linear-gradient(#000, #323232);\n}\nbody #root main {\n  padding: 2rem;\n}\nbody #root main h1 {\n  text-align: center;\n  margin-bottom: 1rem;\n}\nbody #root main .current-temps-group {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\nbody #root main .current-temps-group .max-temp-group,\nbody #root main .current-temps-group .min-temp-group {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\nbody #root main .current-temps-group .max-temp-group .max-temp,\nbody #root main .current-temps-group .max-temp-group .min-temp,\nbody #root main .current-temps-group .min-temp-group .max-temp,\nbody #root main .current-temps-group .min-temp-group .min-temp {\n  font-weight: bold;\n}\nbody #root main .current-temps-group .current-temp {\n  font-size: 5rem;\n  font-weight: bold;\n}\nbody #root main .current-temp-icon-container {\n  width: 9rem;\n  height: 9rem;\n  margin: 2.5rem auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nbody #root main .current-temp-icon-container .current-temp-icon {\n  display: block;\n  width: 100%;\n}\nbody #root main .forecast {\n  display: flex;\n  justify-content: center;\n  list-style-type: none;\n  gap: 1.5rem;\n}\nbody #root main .forecast .day-group {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 0.5rem;\n}\nbody #root main .forecast .day-group .day-icon-container {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nbody #root main .forecast .day-group .day-icon-container .day-icon {\n  width: 100%;\n}\nbody #root nav {\n  padding: 1rem;\n}\nbody #root nav .open-search-btn {\n  display: block;\n  background-color: transparent;\n  margin: 0 auto;\n  border: none;\n  padding: 0.5rem;\n}\nbody #root nav .search-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100dvw;\n  height: 100dvh;\n  background-color: rgba(0, 0, 0, 0.456);\n  backdrop-filter: blur(5px);\n}\nbody #root nav .search-overlay.hidden {\n  visibility: hidden;\n}\nbody #root nav .search-overlay .search-container {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 1rem;\n  width: fit-content;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.8509803922);\n  color: black;\n}\nbody #root nav .search-overlay .search-container input {\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid grey;\n  text-align: center;\n  padding: 0.25rem;\n}\nbody #root nav .search-overlay .search-container input:focus {\n  outline: none;\n  border-bottom: 1px solid black;\n}\nbody #root nav .search-overlay .search-container .search-btn {\n  background-color: transparent;\n  color: black;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  border: 1px solid black;\n}\nbody #root .loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100dvw;\n  height: 100dvh;\n  background-color: rgba(0, 0, 0, 0.456);\n  backdrop-filter: blur(5px);\n  pointer-events: none;\n  opacity: 1;\n  transition: none;\n}\nbody #root .loading-overlay.hidden {\n  opacity: 0;\n  transition: opacity 500ms;\n}\nbody #root .loading-overlay .loading-text {\n  font-weight: bold;\n  font-size: 1.5rem;\n}\nbody #root .error-msg-container {\n  position: fixed;\n  top: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100dvw - 6rem);\n  max-width: 600px;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  background-color: darkred;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);\n  opacity: 1;\n  transition: opacity 500ms;\n}\nbody #root .error-msg-container.hidden {\n  opacity: 0;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b627f089441dbf124446af3c2d3b12da.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/search.svg?");

/***/ }),

/***/ "./src/images/weather-icons/broken-clouds.svg":
/*!****************************************************!*\
  !*** ./src/images/weather-icons/broken-clouds.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bf6ece9beb6b937be0384463674ba315.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/broken-clouds.svg?");

/***/ }),

/***/ "./src/images/weather-icons/day-clear-sky.svg":
/*!****************************************************!*\
  !*** ./src/images/weather-icons/day-clear-sky.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1efca73e8583d08c0d1a7106761d7973.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/day-clear-sky.svg?");

/***/ }),

/***/ "./src/images/weather-icons/day-few-clouds.svg":
/*!*****************************************************!*\
  !*** ./src/images/weather-icons/day-few-clouds.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9f3adc85bbd53957acc4a91619ae3565.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/day-few-clouds.svg?");

/***/ }),

/***/ "./src/images/weather-icons/day-rain.svg":
/*!***********************************************!*\
  !*** ./src/images/weather-icons/day-rain.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"91ec57111c2f73053d86ca087f13848e.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/day-rain.svg?");

/***/ }),

/***/ "./src/images/weather-icons/mist.svg":
/*!*******************************************!*\
  !*** ./src/images/weather-icons/mist.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"48e0acb2401c8a3ca3ba9dbe4c425f65.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/mist.svg?");

/***/ }),

/***/ "./src/images/weather-icons/night-clear-sky.svg":
/*!******************************************************!*\
  !*** ./src/images/weather-icons/night-clear-sky.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0ba555f6eff2e29a0f0625be9a3a0ab7.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/night-clear-sky.svg?");

/***/ }),

/***/ "./src/images/weather-icons/night-few-clouds.svg":
/*!*******************************************************!*\
  !*** ./src/images/weather-icons/night-few-clouds.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"530b3ca32deee41512e1dba93cbcd82b.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/night-few-clouds.svg?");

/***/ }),

/***/ "./src/images/weather-icons/night-rain.svg":
/*!*************************************************!*\
  !*** ./src/images/weather-icons/night-rain.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6dfc3b47274b88a8c755251b02522f15.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/night-rain.svg?");

/***/ }),

/***/ "./src/images/weather-icons/scattered-clouds.svg":
/*!*******************************************************!*\
  !*** ./src/images/weather-icons/scattered-clouds.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"65ad3652e4114c488a14d9814514016e.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/scattered-clouds.svg?");

/***/ }),

/***/ "./src/images/weather-icons/shower-rain.svg":
/*!**************************************************!*\
  !*** ./src/images/weather-icons/shower-rain.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"653987cf63914c39a4d7ce75475d1cd3.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/shower-rain.svg?");

/***/ }),

/***/ "./src/images/weather-icons/snow.svg":
/*!*******************************************!*\
  !*** ./src/images/weather-icons/snow.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c972900a83feeebe2c0b5d4759847892.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/snow.svg?");

/***/ }),

/***/ "./src/images/weather-icons/thunderstorm.svg":
/*!***************************************************!*\
  !*** ./src/images/weather-icons/thunderstorm.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a0aa6197a45270be5de5a28173ed705a.svg\");\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/thunderstorm.svg?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/getCurrentWeather.ts":
/*!**************************************!*\
  !*** ./src/api/getCurrentWeather.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentWeather)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/api/key.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nfunction getCurrentWeather(geoCode) {\n    return __awaiter(this, void 0, void 0, function () {\n        var lat, lon, currentWeather, reponse, data, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    lat = geoCode.lat, lon = geoCode.lon;\n                    currentWeather = \"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(lat, \"&lon=\").concat(lon, \"&units=metric&lang=pt_br&appid=\").concat(_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, fetch(currentWeather)];\n                case 2:\n                    reponse = _a.sent();\n                    if (!reponse.ok) {\n                        throw new Error(\"Failed to fetch data\");\n                    }\n                    return [4 /*yield*/, reponse.json()];\n                case 3:\n                    data = _a.sent();\n                    return [2 /*return*/, data];\n                case 4:\n                    error_1 = _a.sent();\n                    console.error(error_1);\n                    return [2 /*return*/, null];\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/api/getCurrentWeather.ts?");

/***/ }),

/***/ "./src/api/getForecast.ts":
/*!********************************!*\
  !*** ./src/api/getForecast.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getForecast)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/api/key.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nfunction getForecast(geoCode) {\n    return __awaiter(this, void 0, void 0, function () {\n        var lat, lon, forecast, reponse, data, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    lat = geoCode.lat, lon = geoCode.lon;\n                    forecast = \"https://api.openweathermap.org/data/2.5/forecast?lat=\".concat(lat, \"&lon=\").concat(lon, \"&units=metric&lang=pt_br&appid=\").concat(_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, fetch(forecast)];\n                case 2:\n                    reponse = _a.sent();\n                    if (!reponse.ok) {\n                        throw new Error(\"Failed to fetch data\");\n                    }\n                    return [4 /*yield*/, reponse.json()];\n                case 3:\n                    data = _a.sent();\n                    return [2 /*return*/, data];\n                case 4:\n                    error_1 = _a.sent();\n                    console.error(error_1);\n                    return [2 /*return*/, null];\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/api/getForecast.ts?");

/***/ }),

/***/ "./src/api/getGeocode.ts":
/*!*******************************!*\
  !*** ./src/api/getGeocode.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getGeoCode)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/api/key.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nfunction getGeoCode(city) {\n    return __awaiter(this, void 0, void 0, function () {\n        var geoCode, response, data, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    geoCode = \"https://api.openweathermap.org/geo/1.0/direct?q=\".concat(city, \"&appid=\").concat(_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 4, , 5]);\n                    if (!city) {\n                        throw new Error(\"Cannot fetch with an empty string\");\n                    }\n                    return [4 /*yield*/, fetch(geoCode)];\n                case 2:\n                    response = _a.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Failed to fetch data\");\n                    }\n                    return [4 /*yield*/, response.json()];\n                case 3:\n                    data = _a.sent();\n                    if (data.length === 0) {\n                        throw new Error(\"City name not found\");\n                    }\n                    return [2 /*return*/, data[0]];\n                case 4:\n                    error_1 = _a.sent();\n                    console.error(error_1);\n                    return [2 /*return*/, null];\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/api/getGeocode.ts?");

/***/ }),

/***/ "./src/api/getReverseGeocoding.ts":
/*!****************************************!*\
  !*** ./src/api/getReverseGeocoding.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getReverseGeocoding)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/api/key.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nfunction getReverseGeocoding(browserGeolocation) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, latitude, longitude, revGeocode, response, data, error_1;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _a = browserGeolocation.coords, latitude = _a.latitude, longitude = _a.longitude;\n                    revGeocode = \"https://api.openweathermap.org/geo/1.0/reverse?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=\").concat(_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n                    _b.label = 1;\n                case 1:\n                    _b.trys.push([1, 4, , 5]);\n                    return [4 /*yield*/, fetch(revGeocode)];\n                case 2:\n                    response = _b.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Failed to fetch data\");\n                    }\n                    return [4 /*yield*/, response.json()];\n                case 3:\n                    data = _b.sent();\n                    if (data.length === 0) {\n                        throw new Error(\"City name not found\");\n                    }\n                    return [2 /*return*/, data[0]];\n                case 4:\n                    error_1 = _b.sent();\n                    console.error(error_1);\n                    return [2 /*return*/, null];\n                case 5: return [2 /*return*/];\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/api/getReverseGeocoding.ts?");

/***/ }),

/***/ "./src/api/key.ts":
/*!************************!*\
  !*** ./src/api/key.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar API_KEY = \"f665e17e864ad3ebcceb327ae8c2131a\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_KEY);\n\n\n//# sourceURL=webpack://weather-app/./src/api/key.ts?");

/***/ }),

/***/ "./src/components/createLoadingScreen.ts":
/*!***********************************************!*\
  !*** ./src/components/createLoadingScreen.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createLoadingScreen)\n/* harmony export */ });\n/*\n  Creates a loading screen to be dynamically retained in the DOM.\n  It is initially hidden and can be displayed by removing the 'hidden' class.\n*/\nfunction createLoadingScreen() {\n    var root = document.querySelector(\"#root\");\n    var loadingOverlay = document.createElement(\"div\");\n    var loadingText = document.createElement(\"p\");\n    loadingText.textContent = \"Carregando...\";\n    loadingOverlay.classList.add(\"loading-overlay\");\n    loadingOverlay.classList.add(\"hidden\");\n    loadingText.classList.add(\"loading-text\");\n    loadingOverlay.appendChild(loadingText);\n    root.appendChild(loadingOverlay);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/components/createLoadingScreen.ts?");

/***/ }),

/***/ "./src/components/handleSearch.ts":
/*!****************************************!*\
  !*** ./src/components/handleSearch.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleSearch)\n/* harmony export */ });\n/* harmony import */ var _api_getGeocode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/getGeocode */ \"./src/api/getGeocode.ts\");\n/* harmony import */ var _api_getForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getForecast */ \"./src/api/getForecast.ts\");\n/* harmony import */ var _api_getCurrentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/getCurrentWeather */ \"./src/api/getCurrentWeather.ts\");\n/* harmony import */ var _utils_reduceForecastList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/reduceForecastList */ \"./src/utils/reduceForecastList.ts\");\n/* harmony import */ var _renderWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderWeather */ \"./src/components/renderWeather.ts\");\n/* harmony import */ var _renderErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderErrorMessage */ \"./src/components/renderErrorMessage.ts\");\n/*\n  Handles the search operation for weather information based on a location.\n  It accepts either a string with the location name or a GeoCode object.\n  \n  This function fetches the geocode and weather information, then reduces the\n  forecast data to a manageable list using 'reduceForecastList' function.\n  \n  If any error occurs during the search process, it renders an error message\n  using the 'renderErrorMessage' function.\n  \n  Additionally, it manages the loading screen by showing it while fetching\n  data and hiding it when the data is received or an error occurs.\n*/\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\nfunction handleSearch(location) {\n    return __awaiter(this, void 0, void 0, function () {\n        var loadingScreen, currWeather, forecast, reducedForecast, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    loadingScreen = document.querySelector(\".loading-overlay\");\n                    loadingScreen.classList.remove(\"hidden\");\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 6, , 7]);\n                    if (!(typeof location === \"string\")) return [3 /*break*/, 3];\n                    return [4 /*yield*/, (0,_api_getGeocode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location)];\n                case 2:\n                    location = _a.sent();\n                    if (!location) {\n                        throw new Error(\"Houve um erro ao buscar os dados da localiza\\u00E7\\u00E3o. \\n          Verifique se o nome da cidade est\\u00E1 correto e \\n          se o seu dispositivo est\\u00E1 conectado \\u00E0 internet.\");\n                    }\n                    _a.label = 3;\n                case 3: return [4 /*yield*/, (0,_api_getCurrentWeather__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(location)];\n                case 4:\n                    currWeather = _a.sent();\n                    return [4 /*yield*/, (0,_api_getForecast__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(location)];\n                case 5:\n                    forecast = _a.sent();\n                    if (!currWeather || !forecast) {\n                        throw new Error(\"Houve um erro ao buscar os dados meteorol\\u00F3gicos. \\n        Verifique se o seu dispositivo est\\u00E1 conectado \\u00E0 internet.\");\n                    }\n                    reducedForecast = (0,_utils_reduceForecastList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(forecast.list);\n                    (0,_renderWeather__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(location, currWeather, reducedForecast);\n                    loadingScreen.classList.add(\"hidden\");\n                    return [3 /*break*/, 7];\n                case 6:\n                    error_1 = _a.sent();\n                    (0,_renderErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(error_1);\n                    loadingScreen.classList.add(\"hidden\");\n                    return [2 /*return*/];\n                case 7: return [2 /*return*/];\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/components/handleSearch.ts?");

/***/ }),

/***/ "./src/components/renderErrorMessage.ts":
/*!**********************************************!*\
  !*** ./src/components/renderErrorMessage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderErrorMessage)\n/* harmony export */ });\n/*\n  Renders an error message on the DOM for a specified duration,\n  then removes it.\n\n  @param error The Error object containing the error message to display.\n  @returns A Promise that resolves when the error message is removed.\n*/\nfunction renderErrorMessage(error) {\n    return new Promise(function (resolve) {\n        var root = document.querySelector(\"#root\");\n        var container = document.createElement(\"div\");\n        var p = document.createElement(\"p\");\n        p.textContent = error.message;\n        container.classList.add(\"error-msg-container\");\n        container.appendChild(p);\n        root.appendChild(container);\n        setTimeout(function () {\n            container.classList.add(\"hidden\");\n        }, 5000);\n        setTimeout(function () {\n            root.removeChild(container);\n            resolve();\n        }, 6000);\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/components/renderErrorMessage.ts?");

/***/ }),

/***/ "./src/components/renderNav.ts":
/*!*************************************!*\
  !*** ./src/components/renderNav.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderNav)\n/* harmony export */ });\n/* harmony import */ var _handleSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSearch */ \"./src/components/handleSearch.ts\");\n/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/search.svg */ \"./src/images/search.svg\");\n/*\n  Renders a navigation bar with a search functionality.\n  It creates a button to open the search overlay, which contains\n  an input field and a search button. The search functionality\n  triggers a search operation when the user inputs a value and\n  presses Enter or clicks the search button. The container can\n  be closed by clicking outside of it. The search functionality\n  is handled by the 'handleSearch' module.\n*/\n\n\nvar HIDDEN = \"hidden\";\nfunction renderNav() {\n    var nav = document.querySelector(\"nav\");\n    var openSearchBtn = document.createElement(\"button\");\n    var searchIconElement = document.createElement(\"img\");\n    var searchOverlay = document.createElement(\"div\");\n    var searchContainer = document.createElement(\"div\");\n    var label = document.createElement(\"label\");\n    var input = document.createElement(\"input\");\n    var searchBtn = document.createElement(\"button\");\n    var openSearch = function () {\n        searchOverlay.classList.remove(HIDDEN);\n        input.focus();\n        input.select();\n    };\n    var handleOverlayClick = function (e) {\n        if (e.target === searchOverlay) {\n            searchOverlay.classList.add(HIDDEN);\n        }\n    };\n    var search = function () {\n        if (input.value) {\n            (0,_handleSearch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value);\n            searchOverlay.classList.add(HIDDEN);\n        }\n    };\n    var getEnterPress = function (e) {\n        if (e.key === \"Enter\")\n            search();\n    };\n    var handleSearchBtn = function () {\n        search();\n        input.focus(); // Focus returns if there is no input\n    };\n    label.textContent = \"Digite o nome da cidade:\";\n    searchBtn.textContent = \"Buscar\";\n    searchIconElement.src = _images_search_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    searchIconElement.alt = \"Abrir janela de pesquisa\";\n    openSearchBtn.title = \"Abrir janela de pesquisa\";\n    openSearchBtn.type = \"button\";\n    label.setAttribute(\"for\", \"search\");\n    input.id = \"search\";\n    searchBtn.type = \"button\";\n    openSearchBtn.classList.add(\"open-search-btn\");\n    searchIconElement.classList.add(\"search-icon\");\n    searchOverlay.classList.add(\"search-overlay\");\n    searchOverlay.classList.add(HIDDEN);\n    searchContainer.classList.add(\"search-container\");\n    searchBtn.classList.add(\"search-btn\");\n    openSearchBtn.addEventListener(\"click\", openSearch);\n    searchOverlay.addEventListener(\"click\", handleOverlayClick);\n    input.addEventListener(\"keyup\", getEnterPress);\n    searchBtn.addEventListener(\"click\", handleSearchBtn);\n    searchContainer.appendChild(label);\n    searchContainer.appendChild(input);\n    searchContainer.appendChild(searchBtn);\n    searchOverlay.appendChild(searchContainer);\n    openSearchBtn.appendChild(searchIconElement);\n    nav.appendChild(openSearchBtn);\n    nav.appendChild(searchOverlay);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/components/renderNav.ts?");

/***/ }),

/***/ "./src/components/renderWeather.ts":
/*!*****************************************!*\
  !*** ./src/components/renderWeather.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderWeather)\n/* harmony export */ });\n/* harmony import */ var _utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/capitalizeFirstLetter */ \"./src/utils/capitalizeFirstLetter.ts\");\n/* harmony import */ var _utils_getIconByCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getIconByCode */ \"./src/utils/getIconByCode.ts\");\n/* harmony import */ var _utils_getTranslatedCondition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getTranslatedCondition */ \"./src/utils/getTranslatedCondition.ts\");\n/*\n  Renders weather information for a specified location.\n  It takes in geoInfo, currWeather, and forecast parameters\n  to display the current weather conditions and a forecast\n  for upcoming days.\n*/\n\n\n\nfunction renderWeather(geoInfo, currWeather, forecast) {\n    var root = document.querySelector(\"#root\");\n    var main = document.querySelector(\"main\");\n    var cityName = document.createElement(\"h1\");\n    var currentTempsGroup = document.createElement(\"div\");\n    var maxTempGroup = document.createElement(\"div\");\n    var maxTempText = document.createElement(\"p\");\n    var maxTemp = document.createElement(\"p\");\n    var currentTemp = document.createElement(\"p\");\n    var minTempGroup = document.createElement(\"div\");\n    var minTempText = document.createElement(\"p\");\n    var minTemp = document.createElement(\"p\");\n    var currentTempIconContainer = document.createElement(\"div\");\n    var currentTempIcon = document.createElement(\"img\");\n    var forecastGroup = document.createElement(\"ul\");\n    var descriptionText = (0,_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currWeather.weather[0].description);\n    main.innerHTML = \"\";\n    var itsNight = currWeather.weather[0].icon.endsWith(\"n\");\n    root.classList[itsNight ? \"add\" : \"remove\"](\"night\");\n    cityName.textContent = geoInfo.name;\n    maxTempText.textContent = \"Máx.\";\n    maxTemp.textContent = \"\".concat(currWeather.main.temp_max.toFixed(0), \"\\u00BA\");\n    currentTemp.textContent = \"\".concat(currWeather.main.temp.toFixed(0), \"\\u00BA\");\n    minTempText.textContent = \"Mín.\";\n    minTemp.textContent = \"\".concat(currWeather.main.temp_min.toFixed(0), \"\\u00BA\");\n    currentTempsGroup.classList.add(\"current-temps-group\");\n    cityName.classList.add(\"city-name\");\n    maxTempGroup.classList.add(\"max-temp-group\");\n    maxTempText.classList.add(\"max-temp-text\");\n    maxTemp.classList.add(\"max-temp\");\n    currentTemp.classList.add(\"current-temp\");\n    minTempGroup.classList.add(\"min-temp-group\");\n    minTempText.classList.add(\"min-temp-text\");\n    minTemp.classList.add(\"min-temp\");\n    currentTempIconContainer.classList.add(\"current-temp-icon-container\");\n    currentTempIcon.classList.add(\"current-temp-icon\");\n    forecastGroup.classList.add(\"forecast\");\n    currentTempIcon.src = (0,_utils_getIconByCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currWeather.weather[0].icon);\n    currentTempIcon.title = descriptionText;\n    currentTempIcon.alt = descriptionText;\n    for (var _i = 0, forecast_1 = forecast; _i < forecast_1.length; _i++) {\n        var item = forecast_1[_i];\n        var dayGroup = document.createElement(\"li\");\n        var weekday = document.createElement(\"p\");\n        var dayIconContainer = document.createElement(\"div\");\n        var dayIcon = document.createElement(\"img\");\n        var weekDayText = new Intl.DateTimeFormat(\"pt-BR\", {\n            weekday: \"short\",\n        }).format(item.day);\n        var conditionText = (0,_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_utils_getTranslatedCondition__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.condition));\n        weekday.textContent = (0,_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weekDayText);\n        dayIcon.src = (0,_utils_getIconByCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.iconCode.replace(\"n\", \"d\"));\n        dayIcon.title = conditionText;\n        dayIcon.alt = conditionText;\n        dayIconContainer.classList.add(\"day-icon-container\");\n        dayGroup.classList.add(\"day-group\");\n        weekday.classList.add(\"weekday\");\n        dayIcon.classList.add(\"day-icon\");\n        dayGroup.appendChild(weekday);\n        dayIconContainer.appendChild(dayIcon);\n        dayGroup.appendChild(dayIconContainer);\n        forecastGroup.appendChild(dayGroup);\n    }\n    main.appendChild(cityName);\n    maxTempGroup.appendChild(maxTempText);\n    maxTempGroup.appendChild(maxTemp);\n    currentTempsGroup.appendChild(maxTempGroup);\n    currentTempsGroup.appendChild(currentTemp);\n    minTempGroup.appendChild(minTempText);\n    minTempGroup.appendChild(minTemp);\n    currentTempsGroup.appendChild(minTempGroup);\n    main.appendChild(currentTempsGroup);\n    currentTempIconContainer.appendChild(currentTempIcon);\n    main.appendChild(currentTempIconContainer);\n    main.appendChild(forecastGroup);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/components/renderWeather.ts?");

/***/ }),

/***/ "./src/components/requestUserLocation.ts":
/*!***********************************************!*\
  !*** ./src/components/requestUserLocation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requestUserLocation)\n/* harmony export */ });\n/*\n  Requests the user's current location using the Geolocation API.\n  It returns a Promise that resolves with the user's location if\n  the location is successfully retrieved, or resolves with null if\n  there's an error or if the user denies the request.\n*/\nfunction requestUserLocation() {\n    return new Promise(function (resolve) {\n        navigator.geolocation.getCurrentPosition(resolve, function () { return resolve(null); });\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/components/requestUserLocation.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_getReverseGeocoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/getReverseGeocoding */ \"./src/api/getReverseGeocoding.ts\");\n/* harmony import */ var _components_handleSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/handleSearch */ \"./src/components/handleSearch.ts\");\n/* harmony import */ var _components_createLoadingScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createLoadingScreen */ \"./src/components/createLoadingScreen.ts\");\n/* harmony import */ var _components_renderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/renderNav */ \"./src/components/renderNav.ts\");\n/* harmony import */ var _components_requestUserLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/requestUserLocation */ \"./src/components/requestUserLocation.ts\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\nvar root = document.querySelector(\"#root\");\nvar main = document.createElement(\"main\");\nvar nav = document.createElement(\"nav\");\nroot.appendChild(main);\nroot.appendChild(nav);\nfunction startUI() {\n    return __awaiter(this, void 0, void 0, function () {\n        var userLocation, _a, _b;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    (0,_components_renderNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                    (0,_components_createLoadingScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                    return [4 /*yield*/, (0,_components_requestUserLocation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()];\n                case 1:\n                    userLocation = _c.sent();\n                    _a = _components_handleSearch__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n                    if (!userLocation) return [3 /*break*/, 3];\n                    return [4 /*yield*/, (0,_api_getReverseGeocoding__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userLocation)];\n                case 2:\n                    _b = _c.sent();\n                    return [3 /*break*/, 4];\n                case 3:\n                    _b = \"Brasília\";\n                    _c.label = 4;\n                case 4:\n                    _a.apply(void 0, [_b]);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nwindow.onload = startUI;\n\n\n//# sourceURL=webpack://weather-app/./src/index.ts?");

/***/ }),

/***/ "./src/utils/capitalizeFirstLetter.ts":
/*!********************************************!*\
  !*** ./src/utils/capitalizeFirstLetter.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ capitalizeFirstLetter)\n/* harmony export */ });\nfunction capitalizeFirstLetter(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/utils/capitalizeFirstLetter.ts?");

/***/ }),

/***/ "./src/utils/getIconByCode.ts":
/*!************************************!*\
  !*** ./src/utils/getIconByCode.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getIconByCode)\n/* harmony export */ });\n/* harmony import */ var _images_weather_icons_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/weather-icons/broken-clouds.svg */ \"./src/images/weather-icons/broken-clouds.svg\");\n/* harmony import */ var _images_weather_icons_day_clear_sky_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/weather-icons/day-clear-sky.svg */ \"./src/images/weather-icons/day-clear-sky.svg\");\n/* harmony import */ var _images_weather_icons_day_few_clouds_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/weather-icons/day-few-clouds.svg */ \"./src/images/weather-icons/day-few-clouds.svg\");\n/* harmony import */ var _images_weather_icons_day_rain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/weather-icons/day-rain.svg */ \"./src/images/weather-icons/day-rain.svg\");\n/* harmony import */ var _images_weather_icons_mist_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/weather-icons/mist.svg */ \"./src/images/weather-icons/mist.svg\");\n/* harmony import */ var _images_weather_icons_night_clear_sky_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/weather-icons/night-clear-sky.svg */ \"./src/images/weather-icons/night-clear-sky.svg\");\n/* harmony import */ var _images_weather_icons_night_few_clouds_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/weather-icons/night-few-clouds.svg */ \"./src/images/weather-icons/night-few-clouds.svg\");\n/* harmony import */ var _images_weather_icons_night_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/weather-icons/night-rain.svg */ \"./src/images/weather-icons/night-rain.svg\");\n/* harmony import */ var _images_weather_icons_scattered_clouds_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/weather-icons/scattered-clouds.svg */ \"./src/images/weather-icons/scattered-clouds.svg\");\n/* harmony import */ var _images_weather_icons_shower_rain_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/weather-icons/shower-rain.svg */ \"./src/images/weather-icons/shower-rain.svg\");\n/* harmony import */ var _images_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/weather-icons/snow.svg */ \"./src/images/weather-icons/snow.svg\");\n/* harmony import */ var _images_weather_icons_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/weather-icons/thunderstorm.svg */ \"./src/images/weather-icons/thunderstorm.svg\");\n/*\n  Retrieves the corresponding weather icon directory\n  based on the provided weather code.\n*/\n\n\n\n\n\n\n\n\n\n\n\n\nvar weatherIcons = {\n    \"01d\": _images_weather_icons_day_clear_sky_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    \"01n\": _images_weather_icons_night_clear_sky_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    \"02d\": _images_weather_icons_day_few_clouds_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"02n\": _images_weather_icons_night_few_clouds_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    \"03d\": _images_weather_icons_scattered_clouds_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    \"03n\": _images_weather_icons_scattered_clouds_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    \"04d\": _images_weather_icons_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    \"04n\": _images_weather_icons_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    \"09d\": _images_weather_icons_shower_rain_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    \"09n\": _images_weather_icons_shower_rain_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    \"10d\": _images_weather_icons_day_rain_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    \"10n\": _images_weather_icons_night_rain_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    \"11d\": _images_weather_icons_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    \"11n\": _images_weather_icons_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    \"13d\": _images_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    \"13n\": _images_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    \"50d\": _images_weather_icons_mist_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    \"50n\": _images_weather_icons_mist_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n};\nfunction getIconByCode(code) {\n    return weatherIcons[code] || \"\";\n}\n\n\n//# sourceURL=webpack://weather-app/./src/utils/getIconByCode.ts?");

/***/ }),

/***/ "./src/utils/getTranslatedCondition.ts":
/*!*********************************************!*\
  !*** ./src/utils/getTranslatedCondition.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTranslatedCondition)\n/* harmony export */ });\nvar translations = {\n    clear: \"limpo\",\n    clouds: \"nublado\",\n    atmosphere: \"névoa\",\n    drizzle: \"chuvisco\",\n    rain: \"chuva\",\n    snow: \"neve\",\n    thunderstorm: \"tempestade\",\n};\nfunction getTranslatedCondition(condition) {\n    return translations[condition] || \"\";\n}\n\n\n//# sourceURL=webpack://weather-app/./src/utils/getTranslatedCondition.ts?");

/***/ }),

/***/ "./src/utils/reduceForecastList.ts":
/*!*****************************************!*\
  !*** ./src/utils/reduceForecastList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reduceForecastList)\n/* harmony export */ });\n/*\n  Reduces a list of forecast data to include only the most important conditions\n  with their corresponding icons for the next 5 days.\n*/\n// Array defining the priority of weather conditions, with higher index indicating more severe conditions\nvar CONDITIONS = [\n    \"clear\",\n    \"clouds\",\n    \"atmosphere\",\n    \"drizzle\",\n    \"rain\",\n    \"snow\",\n    \"thunderstorm\",\n];\nfunction reduceForecastList(list) {\n    var result = [];\n    var today = new Date();\n    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {\n        var item = list_1[_i];\n        var itemDate = new Date(item.dt * 1000);\n        var itemCondition = item.weather[0].main.toLowerCase();\n        var itemIconCode = item.weather[0].icon;\n        var lastPushedItem = result.length\n            ? result[result.length - 1]\n            : null;\n        if (itemDate.getDate() > today.getDate()) {\n            if (lastPushedItem &&\n                lastPushedItem.day.getDate() === itemDate.getDate()) {\n                if (CONDITIONS.indexOf(itemCondition) >\n                    CONDITIONS.indexOf(lastPushedItem.condition)) {\n                    lastPushedItem.condition = itemCondition;\n                    lastPushedItem.iconCode = itemIconCode;\n                }\n            }\n            else {\n                result.push({\n                    day: itemDate,\n                    condition: itemCondition,\n                    iconCode: itemIconCode,\n                });\n            }\n        }\n    }\n    return result;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/utils/reduceForecastList.ts?");

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;