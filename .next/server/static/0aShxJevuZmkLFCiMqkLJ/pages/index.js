module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/HomePage.jsx

var __jsx = external_react_default.a.createElement;


const HomePage = props => {
  let {
    0: windowsWidth,
    1: setWidth
  } = Object(external_react_["useState"])(0);
  let {
    0: windowsHeight,
    1: setHeight
  } = Object(external_react_["useState"])(0);
  let list = null;
  Object(external_react_["useEffect"])(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight); // Multiple Animated Circle - Get Canvas element by Id

    var canvas = document.getElementById("myCanvas"); // Set Canvas dimensions

    canvas.width = windowsWidth;
    canvas.height = windowsHeight; // Get drawing context

    var ctx = canvas.getContext('2d'); // The Circle class

    function Circle(x, y, dx, dy, radius, title, traffic) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.title = title;
      this.traffic = traffic;
      this.radius = radius;
      const allTraffic = props.props.map(el => el.traffic.match(/\d+/)[0]);
      this.highest = allTraffic[0];
      const lowest = allTraffic[allTraffic.length - 1];

      this.random_rgba = function () {
        var o = Math.round,
            r = Math.random,
            s = 255;
        return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
      };

      var color = this.random_rgba();

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255,0,0,${this.traffic / this.highest})`;
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.font = "16px Verdana";
        ctx.textAlign = 'center';
        ctx.fillText(this.title, this.x, this.y);
      };

      this.update = function () {
        if (this.x + this.radius > windowsWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > windowsHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      };
    }

    var circles = []; // Radius

    var radius = 70;

    for (var i = 0; i < props.props.length; i++) {
      // Starting Position
      var x = Math.random() * (windowsWidth - radius * 2) + radius;
      var y = Math.random() * (windowsHeight - radius * 2) + radius; // Speed in x and y direction

      var dx = (Math.random() - 0.5) * 2;
      var dy = (Math.random() - 0.5) * 2;
      var title = props.props[i].title;
      var traffic = props.props[i].traffic.match(/\d+/)[0];
      circles.push(new Circle(x, y, dx, dy, radius, title, traffic));
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, windowsWidth, windowsHeight);

      for (var r = 0; r < props.props.length; r++) {
        circles[r].update();
      }
    }

    animate();
  });
  return __jsx("div", null, __jsx("canvas", {
    id: "myCanvas",
    width: windowsWidth,
    height: windowsHeight,
    style: {
      border: '1px solid black'
    }
  }));
};

/* harmony default export */ var components_HomePage = (HomePage);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;


 // import '../components/HomePage.css'
// import particles from 'particles.js'

function Home({
  searchesMapped
}) {
  return pages_jsx("div", null, pages_jsx(head_default.a, null, pages_jsx("title", null, "My page title"), pages_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), pages_jsx("div", null, pages_jsx(components_HomePage, {
    props: searchesMapped
  })));
}

async function getStaticProps() {
  const dev = false;
  const server = dev ? 'http://localhost:3000' : 'https://popular.now.sh';
  console.log("server", server);
  const res = await external_isomorphic_unfetch_default()(`${server}/api/trends`);
  console.log("res", res);
  const json = await res.json();
  const searches = json.default.trendingSearchesDays[0].trendingSearches;
  const searchesMapped = searches.map(el => {
    const search = {};
    search.title = el.title.query;
    search.traffic = el.formattedTraffic;
    return search;
  });
  return {
    props: {
      searchesMapped
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });