/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: enableDevMode, slideTime, default */
/***/ (function(module) {

eval("module.exports = {\"enableDevMode\":true,\"slideTime\":10000};\n\n//# sourceURL=webpack:///./config.json?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/* <reusable> */\\n.padding-0-5-rem {\\n  padding: 0.5rem;\\n}\\n\\n/* </reusable> */\\nhtml {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\nhtml body {\\n  margin: 0;\\n}\\nhtml body ul {\\n  padding: 0;\\n}\\nhtml body ul li {\\n  list-style: none;\\n}\\nhtml body a {\\n  text-decoration: none;\\n  color: #000000;\\n}\\n\\n.header {\\n  font-size: 2vh;\\n}\\n.header ul {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n.header a {\\n  white-space: nowrap;\\n}\\n.header .menu-bar li {\\n  border-bottom: 1px solid transparent;\\n}\\n.header .menu-bar li:hover {\\n  border-bottom: 1px solid red;\\n}\\n\\n.content {\\n  position: relative;\\n  overflow: hidden;\\n}\\n.content .slide-show {\\n  display: flex;\\n  position: relative;\\n  height: 60vh;\\n  color: #ffffff;\\n  text-shadow: 0 0 20px #000000;\\n}\\n.content .slide-show > div {\\n  position: absolute;\\n}\\n.content .slide-show .slide-image {\\n  width: 100%;\\n  flex-shrink: 0;\\n  display: flex;\\n}\\n.content .slide-show .slide-image .skewed {\\n  width: 50%;\\n  height: 60vh;\\n  transform: skew(-20deg);\\n  margin-left: 7%;\\n  background: red;\\n  opacity: 0.4;\\n}\\n.content .slide-show .slide-image .text {\\n  width: 60%;\\n  margin-left: -55%;\\n  z-index: 1;\\n}\\n.content .slide-show .slide-image .text h1 {\\n  font-size: 3.5vmax;\\n  margin-left: 30%;\\n  margin-bottom: 0;\\n}\\n@media only screen and (max-width: 360px) {\\n  .content .slide-show .slide-image .text h1 {\\n    font-size: 4.5vmax;\\n  }\\n}\\n.content .slide-show .slide-image .text p {\\n  font-size: 1.6vmax;\\n  margin-top: 0;\\n  margin-left: 20%;\\n}\\n@media only screen and (max-width: 360px) {\\n  .content .slide-show .slide-image .text p {\\n    font-size: 2.7vmax;\\n  }\\n}\\n@media only screen and (max-width: 360px) {\\n  .content .slide-show .slide-image .text {\\n    width: 70%;\\n  }\\n}\\n.content .slide-show .slide-buttons {\\n  bottom: 10px;\\n  right: 10px;\\n}\\n.content .slide-show .slide-buttons .slide-button {\\n  margin-right: 10px;\\n  padding: 10px;\\n  border: 1px solid transparent;\\n  background: #ffffff;\\n}\\n.content .slide-show .image-1 {\\n  background: url(\\\"images/5.png\\\");\\n  background-size: cover;\\n  background-position: center;\\n  left: 100%;\\n}\\n.content .slide-show .image-2 {\\n  background: url(\\\"images/6.jpg\\\");\\n  background-size: cover;\\n  background-position: center;\\n  left: 100%;\\n}\\n.content .slide-show .image-3 {\\n  background: url(\\\"images/7.jpg\\\");\\n  background-size: cover;\\n  background-position: center;\\n  left: 100%;\\n}\\n.content .slide-show .image-4 {\\n  background: url(\\\"images/8.png\\\");\\n  background-size: cover;\\n  background-position: center;\\n  left: 100%;\\n}\\n.content .slide-show .move-to-center {\\n  -webkit-animation: move-to-center 8s 0s 1 forwards;\\n  -moz-animation: move-to-center 8s 0s 1 forwards;\\n  -o-animation: move-to-center 8s 0s 1 forwards;\\n  animation: move-to-center 8s 0s 1 forwards;\\n}\\n.content .slide-show .move-to-out {\\n  -webkit-animation: move-to-out 3s 0s 1 forwards;\\n  -moz-animation: move-to-out 3s 0s 1 forwards;\\n  -o-animation: move-to-out 3s 0s 1 forwards;\\n  animation: move-to-out 3s 0s 1 forwards;\\n}\\n.content .service-header {\\n  font-size: 1.3rem;\\n  text-align: center;\\n}\\n.content .services {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n  color: #000000;\\n}\\n.content .services .service {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0.5em;\\n  width: 21vmax;\\n}\\n.content .services .service > img {\\n  margin: 0.5em;\\n  height: 20vmax;\\n  align-self: center;\\n}\\n@media only screen and (max-width: 370px) {\\n  .content .services .service > img {\\n    height: 57vmax;\\n  }\\n}\\n.content .services .service > .text {\\n  margin: 1vmax;\\n}\\n.content .services .service > .text p:first-child {\\n  font-size: 2rem;\\n  margin: 0.5vmax 0;\\n}\\n@media only screen and (max-width: 370px) {\\n  .content .services .service > .text {\\n    margin: 0 5vmax;\\n  }\\n}\\n.content .services .service:nth-child(2) {\\n  border-left: 1px solid #D9D9D9;\\n  border-right: 1px solid #D9D9D9;\\n  padding: 0 3vmax;\\n}\\n@media only screen and (max-width: 1300px) {\\n  .content .services .service:nth-child(2) {\\n    padding: 0;\\n    border: 0px;\\n    border-top: 1px solid #D9D9D9;\\n    border-bottom: 1px solid #D9D9D9;\\n  }\\n}\\n@media only screen and (max-width: 1300px) and (min-width: 370px) {\\n  .content .services .service {\\n    flex-direction: row;\\n    width: auto;\\n  }\\n}\\n@media only screen and (max-width: 370px) {\\n  .content .services .service {\\n    width: 60vmax;\\n  }\\n}\\n@media only screen and (max-width: 1300px) {\\n  .content .services {\\n    flex-direction: column;\\n  }\\n}\\n\\n.footer {\\n  background: #0D9361;\\n  display: flex;\\n  justify-content: space-around;\\n  color: #ffffff;\\n  padding-bottom: 50px;\\n}\\n.footer > div {\\n  margin: 10px;\\n}\\n.footer .contact p {\\n  font-size: 2rem;\\n}\\n@media only screen and (min-width: 370px) {\\n  .footer .contact p {\\n    margin: 0.5vmax 0;\\n  }\\n}\\n.footer .contact form {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.footer .contact form label {\\n  margin-top: 0.5vmax;\\n}\\n.footer .about {\\n  position: relative;\\n  width: 50%;\\n  text-align: end;\\n}\\n.footer .about :nth-child(2) {\\n  font-size: 2rem;\\n}\\n.footer .about .red-div {\\n  position: absolute;\\n  background: red;\\n  width: 100%;\\n}\\n@media only screen and (max-width: 370px) {\\n  .footer {\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n}\\n\\n/* <keyframes> */\\n@-webkit-keyframes move-to-center {\\n  0% {\\n    left: 100%;\\n  }\\n  30% {\\n    left: 0;\\n  }\\n  100% {\\n    left: 0;\\n  }\\n}\\n@-moz-keyframes move-to-center {\\n  0% {\\n    left: 100%;\\n  }\\n  30% {\\n    left: 0;\\n  }\\n  100% {\\n    left: 0;\\n  }\\n}\\n@-o-keyframes move-to-center {\\n  0% {\\n    left: 100%;\\n  }\\n  30% {\\n    left: 0;\\n  }\\n  100% {\\n    left: 0;\\n  }\\n}\\n@keyframes move-to-center {\\n  0% {\\n    left: 100%;\\n  }\\n  30% {\\n    left: 0;\\n  }\\n  100% {\\n    left: 0;\\n  }\\n}\\n@-webkit-keyframes move-to-out {\\n  0% {\\n    left: 0;\\n  }\\n  100% {\\n    left: -100%;\\n  }\\n}\\n@-moz-keyframes move-to-out {\\n  0% {\\n    left: 0;\\n  }\\n  100% {\\n    left: -100%;\\n  }\\n}\\n@-o-keyframes move-to-out {\\n  0% {\\n    left: 0;\\n  }\\n  100% {\\n    left: -100%;\\n  }\\n}\\n@keyframes move-to-out {\\n  0% {\\n    left: 0;\\n  }\\n  100% {\\n    left: -100%;\\n  }\\n}\\n/* </keyframes> */\\n\\n/*# sourceMappingURL=index.css.map */\\n\"\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\r\\n    <link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" href=\\\"favicon.ico\\\">\\r\\n    <title>Safety</title>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"index.css\\\"/>\\r\\n</head>\\r\\n<body>\\r\\n    <div class=\\\"header\\\">\\r\\n        <ul class=\\\"\\\">\\r\\n            <li class=\\\"padding-0-5-rem\\\"><a href=\\\"#\\\">Logo</a></li>\\r\\n            <li class=\\\"\\\">\\r\\n                <ul class=\\\"menu-bar\\\">\\r\\n                    <li class=\\\"padding-0-5-rem\\\"><a href=\\\"#\\\">Home</a></li>\\r\\n                    <li class=\\\"padding-0-5-rem\\\"><a href=\\\"#\\\">Services</a></li>\\r\\n                    <li class=\\\"padding-0-5-rem\\\"><a href=\\\"#\\\">About Us</a></li>\\r\\n                    <li class=\\\"padding-0-5-rem\\\"><a href=\\\"#\\\">Contact Us</a></li>\\r\\n                </ul>\\r\\n            </li>\\r\\n        </ul>\\r\\n    </div>\\r\\n    <div class=\\\"content\\\">\\r\\n        <div class=\\\"slide-show\\\">\\r\\n            <div class=\\\"slide-image image-1 move-to-center\\\">\\r\\n                <div class=\\\"skewed\\\"></div>\\r\\n                <div class=\\\"text\\\">\\r\\n                    <h1>Lorem ipsum dolor sit amet.</h1>\\r\\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"slide-image image-2\\\">\\r\\n                <div class=\\\"skewed\\\"></div>\\r\\n                <div class=\\\"text\\\">\\r\\n                    <h1>Lorem ipsum dolor sit amet.</h1>\\r\\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"slide-image image-3\\\">\\r\\n                <div class=\\\"skewed\\\"></div>\\r\\n                <div class=\\\"text\\\">\\r\\n                    <h1>Lorem ipsum dolor sit amet.</h1>\\r\\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"slide-image image-4\\\">\\r\\n                <div class=\\\"skewed\\\"></div>\\r\\n                <div class=\\\"text\\\">\\r\\n                    <h1>Lorem ipsum dolor sit amet.</h1>\\r\\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"slide-buttons\\\">\\r\\n                <button class=\\\"slide-button\\\" value=\\\"dec\\\"><</button>\\r\\n                <button class=\\\"slide-button\\\" value=\\\"inc\\\">></button>\\r\\n            </div>\\r\\n        </div>\\r\\n        <p class=\\\"service-header\\\">This is why you should choose us...</p>\\r\\n        <div class=\\\"services\\\">\\r\\n            <div class=\\\"service\\\">\\r\\n                <img src=\\\"images/info1.png\\\" alt=\\\"\\\">\\r\\n                <div class=\\\"text\\\">\\r\\n                    <p>Lorem ipsum dolor sit.</p>\\r\\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"service\\\">\\r\\n                <img src=\\\"images/info2.jpg\\\" alt=\\\"\\\">\\r\\n                <div class=\\\"text\\\">\\r\\n                    <p>Lorem ipsum dolor sit.</p>\\r\\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"service\\\">\\r\\n                <img src=\\\"images/info3.png\\\" alt=\\\"\\\">\\r\\n                <div class=\\\"text\\\">\\r\\n                    <p>Lorem ipsum dolor sit.</p>\\r\\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"footer\\\">\\r\\n        <div class=\\\"contact\\\">\\r\\n            <p>Enquiry</p>\\r\\n            <form>\\r\\n                <label for=\\\"cname\\\">Name</label>\\r\\n                <input type=\\\"text\\\" name=\\\"cname\\\" id=\\\"\\\">\\r\\n                <label for=\\\"cphone\\\">Phone</label>\\r\\n                <input type=\\\"text\\\" name=\\\"cphone\\\" id=\\\"\\\">\\r\\n                <label for=\\\"cemail\\\">Email</label>\\r\\n                <input type=\\\"text\\\" name=\\\"cemail\\\" id=\\\"\\\">\\r\\n                <label for=\\\"cmessage\\\">Message</label>\\r\\n                <textarea name=\\\"cmessage\\\" id=\\\"\\\" cols=\\\"30\\\" rows=\\\"5\\\"></textarea>\\r\\n            </form>\\r\\n        </div>\\r\\n        <div class=\\\"about\\\">\\r\\n            <div class=\\\"red-div\\\"></div>\\r\\n            <p>About Us</p>\\r\\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto atque deleniti dolor saepe dolorum est odio optio. Reiciendis possimus nihil, sed enim distinctio adipisci quisquam, dolorem aliquam dolorum maiores id.</p>\\r\\n        </div>\\r\\n    </div>\\r\\n    <script type=\\\"text/javascript\\\" src=\\\"dist/index.js\\\"></script>\\r\\n</body>\\r\\n</html>\"\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar config = __webpack_require__(/*! ./config.json */ \"./config.json\");\n\nif (config.enableDevMode) {\n  __webpack_require__(/*! ./index.html */ \"./index.html\");\n\n  __webpack_require__(/*! ./index.css */ \"./index.css\");\n}\n\nvar SlideShow =\n/*#__PURE__*/\nfunction () {\n  function SlideShow() {\n    var _this = this;\n\n    _classCallCheck(this, SlideShow);\n\n    this.imageNumber = 1;\n    this.timer = setInterval(function () {\n      _this.imageNumber += 1;\n\n      _this.adjustImageCount();\n\n      _this.setImage();\n    }, config.slideTime);\n  }\n\n  _createClass(SlideShow, [{\n    key: \"setImage\",\n    value: function setImage() {\n      var moved = document.getElementsByClassName(\"move-to-center\");\n      moved[0].classList.add(\"move-to-out\");\n      moved[0].style.WebkitAnimationDuration = \"\".concat(config.slideTime / 2.5, \"ms\");\n      moved[0].style.animationDuration = \"\".concat(config.slideTime / 2.5, \"ms\");\n      moved[0].classList.remove(\"move-to-center\");\n      var imageElement = document.getElementsByClassName(\"image-\".concat(this.imageNumber));\n      imageElement[0].classList.add(\"move-to-center\");\n      imageElement[0].style.WebkitAnimationDuration = \"\".concat(config.slideTime, \"ms\");\n      imageElement[0].style.animationDuration = \"\".concat(config.slideTime, \"ms\");\n      imageElement[0].classList.remove(\"move-to-out\");\n    }\n  }, {\n    key: \"interval\",\n    value: function interval() {\n      var _this2 = this;\n\n      this.timer = setInterval(function () {\n        _this2.imageNumber += 1;\n\n        _this2.adjustImageCount();\n\n        _this2.setImage();\n      }, config.slideTime);\n    }\n  }, {\n    key: \"addEventListners\",\n    value: function addEventListners() {\n      var _this3 = this;\n\n      var buttonElement = document.getElementsByClassName(\"slide-button\");\n      buttonElementArray = Array.from(buttonElement);\n      buttonElementArray.map(function (element) {\n        element.addEventListener(\"click\", function () {\n          clearInterval(_this3.timer);\n          if (element.value == \"inc\") _this3.imageNumber += 1;else _this3.imageNumber -= 1;\n\n          _this3.adjustImageCount();\n\n          _this3.setImage();\n\n          _this3.interval();\n        });\n      });\n    }\n  }, {\n    key: \"adjustImageCount\",\n    value: function adjustImageCount() {\n      var slideImagesElement = document.getElementsByClassName(\"slide-image\");\n      if (this.imageNumber > slideImagesElement.length) this.imageNumber = 1;else if (this.imageNumber < 1) this.imageNumber = 4;\n    }\n  }]);\n\n  return SlideShow;\n}();\n\nvar slideShowInstance = new SlideShow(); // slideShowInstance.interval();\n\nslideShowInstance.addEventListners();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });