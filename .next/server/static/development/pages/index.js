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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ForceLayout.jsx":
/*!************************************!*\
  !*** ./components/ForceLayout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./components/lang.json");
var _lang__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang */ "./components/lang.json", 1);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-force */ "d3-force");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_force__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useResizeObeserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useResizeObeserver */ "./hooks/useResizeObeserver.jsx");
var _jsxFileName = "/Users/ar/projects/popular/components/ForceLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { select, hierarchy, tree, linkVertical, forceSimulation, forceCenter,  mouse,  forceX,  forceY, forceCollide, forceRadial, scaleSqrt} from "d3"
// import * as d3 from 'd3'





const Page = props => {
  const svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const dimensions = Object(_hooks_useResizeObeserver__WEBPACK_IMPORTED_MODULE_4__["default"])(wrapperRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!dimensions) return; // const svg = select(svgRef.current)

    var width = dimensions.width,
        height = dimensions.height,
        root;
    var force = d3.layout.force().linkDistance(100).charge(-120).gravity(.05).size([width, height]).on("tick", tick); // var svg = d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height);

    const svg = d3.select(svgRef.current);
    var link = svg.selectAll(".link"),
        node = svg.selectAll(".node");
    root = _lang__WEBPACK_IMPORTED_MODULE_2__;
    update();

    function update() {
      var nodes = flatten(root),
          links = d3.layout.tree().links(nodes); // Restart the force layout.

      force.nodes(nodes).links(links).start(); // Update links.

      link = link.data(links, function (d) {
        return d.target.id;
      });
      link.exit().remove();
      link.enter().insert("line", ".node").attr("class", "link"); // Update nodes.

      node = node.data(nodes, function (d) {
        return d.id;
      });
      node.exit().remove();
      var nodeEnter = node.enter().append("g").attr("class", "node").on("click", click).call(force.drag);
      let radiusScale = d3.scale.log().domain([10000, 2600000000000]).range([5, 50]);
      nodeEnter.append("circle").attr("r", node => radiusScale(node.speaker));
      nodeEnter.append("text").attr("dy", "30px").text(function (d) {
        return d.language;
      }); // .attr("y", node => node.y + "10px")

      node.select("circle").style("fill", color);
    }

    function tick() {
      link.attr("x1", function (d) {
        return d.source.x;
      }).attr("y1", function (d) {
        return d.source.y;
      }).attr("x2", function (d) {
        return d.target.x;
      }).attr("y2", function (d) {
        return d.target.y;
      });
      node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    }

    function color(d) {
      return d._children ? "#3182bd" // collapsed package
      : d.children ? "#c6dbef" // expanded package
      : "#fd8d3c"; // leaf node
    } // Toggle children on click.


    function click(d) {
      if (d3.event.defaultPrevented) return; // ignore drag

      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }

      update();
    } // Returns a list of all nodes under the root.


    function flatten(root) {
      var nodes = [],
          i = 0;

      function recurse(node) {
        if (node.children) node.children.forEach(recurse);
        if (!node.id) node.id = ++i;
        nodes.push(node);
      }

      recurse(root);
      return nodes;
    } // const simulation = forceSimulation(nodeData)
    // // force
    // .force("center", forceCenter(dimensions.width/2, dimensions.height/2))
    // .force("charge", forceManyBody().strength(-40))
    // .force("collide", forceCollide(60))
    // .on("tick", () => {
    //   const linkGenerator = linkVertical()
    //   .x(node => node.x)
    //   .y(node => node.y + 100)
    //   svg
    //   .selectAll(".node")
    //   .data(nodeData)
    //   .join("circle")
    //   .attr("class", "node")
    //   .attr("r", 5)
    //   .attr("fill", "grey")
    //   .attr("cx", node => node.x)
    //   .attr("cy", node => node.y + 100)
    //   svg
    //   .selectAll(".link")
    //   .data(linkData)
    //   .join("path").attr("class","link")
    //   .attr("fill", "none")
    //   .attr("stroke", "grey")
    //   .attr("d", linkGenerator)
    //   .attr("x1", link => link.source.x)
    //   .attr("y1", link => link.source.y)
    //   .attr("x2", link => link.target.x)
    //   .attr("y2", link => link.target.y)
    //   svg
    //   .selectAll(".label")
    //   .data(root.descendants())
    //   .join("text")
    //   .attr("class", "label")
    //   .attr("fill", "black")
    //   .text(node => node.data.language)
    //   .attr("font-size", 16)
    //   .attr("text-anchor", "middle")
    //   .attr("x", node => node.x)
    //   .attr("y", node => node.y + 85)
    // })
    // svg.on("mousemove", ()=> {
    //   const [x,y] = mouse(svgRef.current)
    //   simulation
    //   .force("x", forceX(x).strength(node => 0.2 + node.depth * 0.15))
    //   .force("y", forceY(y).strength(node => 0.2 + node.depth * 0.15))
    // })
    // svg.on("click", () => {
    //    const [x, y] = mouse(svgRef.current)
    //    simulation
    //    .alpha(0.5)
    //    .restart()
    //    .force("orbit", forceRadial(100, x, y))
    //    svg.selectAll(".orbit")
    //    .data([json])
    //    .join("circle")
    //    .attr("class", "orbit")
    //    .attr("fill", "none")
    //    .attr("r", 500)
    //    .attr("cx", x)
    //    .attr("cy", y)
    // })

  }, [_lang__WEBPACK_IMPORTED_MODULE_2__, dimensions]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("div", {
    ref: wrapperRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx("svg", {
    ref: svgRef,
    height: "100vh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/HomePage.jsx":
/*!*********************************!*\
  !*** ./components/HomePage.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ar/projects/popular/components/HomePage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HomePage = props => {
  let {
    0: windowsWidth,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let {
    0: windowsHeight,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let list = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight); // Multiple Animated Circle - Get Canvas element by Id

    var canvas = document.getElementById("myCanvas"); // Set Canvas dimensions

    canvas.width = windowsWidth;
    canvas.height = windowsHeight; // Get drawing context

    var ctx = canvas.getContext('2d'); // The Circle class

    function Circle(x, y, dx, dy, radius, title, traffic, related) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.title = title;
      this.traffic = traffic;
      this.radius = radius;
      this.related = related;
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
        ctx.fillText(this.title, this.x, this.y); // ctx.fillText(this.related,this.x, this.y + 20);
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
      var related = props.props[i].relatedQueries ? props.props[i].relatedQueries : null;
      var title = props.props[i].title;
      var traffic = props.props[i].traffic.match(/\d+/)[0];
      circles.push(new Circle(x, y, dx, dy, radius, title, traffic, related));
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
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("canvas", {
    id: "myCanvas",
    width: windowsWidth,
    height: windowsHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./components/Page.jsx":
/*!*****************************!*\
  !*** ./components/Page.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang */ "./components/lang.json");
var _lang__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang */ "./components/lang.json", 1);
var _jsxFileName = "/Users/ar/projects/popular/components/Page.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Page = props => {
  const svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const svg = Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(svgRef.current);
    const root = Object(d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"])(_lang__WEBPACK_IMPORTED_MODULE_3__);
    const treeLayout = Object(d3__WEBPACK_IMPORTED_MODULE_2__["tree"])().size([1700, 600]);
    treeLayout(root);
    const linkGenerator = Object(d3__WEBPACK_IMPORTED_MODULE_2__["linkVertical"])().x(node => node.x).y(node => node.y + 100);
    svg.selectAll(".node").data(root.descendants()).join("circle").attr("class", "node").attr("r", 5).attr("fill", "grey").attr("cx", node => node.x).attr("cy", node => node.y + 100);
    svg.selectAll(".link").data(root.links()).join("path").attr("class", "link").attr("fill", "none").attr("stroke", "grey").attr("d", linkGenerator);
    svg.selectAll(".label").data(root.descendants()).join("text").attr("class", "label").attr("fill", "black").text(node => node.data.language).attr("font-size", 16).attr("text-anchor", "middle").attr("x", node => node.x).attr("y", node => node.y + 85);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("svg", {
    ref: svgRef,
    width: "2000px",
    height: "2000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("button", {
    onClick: () => setData(data.map(value => value + 5)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Update"));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/lang.json":
/*!******************************!*\
  !*** ./components/lang.json ***!
  \******************************/
/*! exports provided: language, speaker, children, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"language\":\"Indoeuropean\",\"speaker\":2600000000000,\"children\":[{\"language\":\"European\",\"speaker\":1100000000000,\"children\":[{\"language\":\"Germanic\",\"speaker\":515000000,\"children\":[{\"language\":\"Northgermanic\",\"speaker\":20000000,\"children\":[{\"language\":\"Icelandic\",\"speaker\":314000},{\"language\":\"Faroese\",\"speaker\":66000},{\"language\":\"Swedish\",\"speaker\":10000000},{\"language\":\"Danish\",\"speaker\":5600000},{\"language\":\"Norwegian\",\"speaker\":5000000}]},{\"language\":\"Westgermanic\",\"speaker\":500000000,\"children\":[{\"language\":\"Anglo-frisian\",\"speaker\":360135000,\"children\":[{\"language\":\"English\",\"speaker\":360000000},{\"language\":\"Scots\",\"speaker\":125000},{\"language\":\"Frisian\",\"speaker\":10000}]},{\"language\":\"Low franconian\",\"speaker\":10000,\"children\":[{\"language\":\"Afrikaans\",\"speaker\":10000},{\"language\":\"Dutch\",\"speaker\":10000},{\"language\":\"Flemish\",\"speaker\":10000}]},{\"language\":\"High german\",\"speaker\":10000,\"children\":[{\"language\":\"Luxemburgish\",\"speaker\":10000},{\"language\":\"Swiss\",\"speaker\":10000},{\"language\":\"Yiddish\",\"speaker\":10000},{\"language\":\"Bavarian\",\"speaker\":10000},{\"language\":\"Swabian\",\"speaker\":10000},{\"language\":\"Hunsrik\",\"speaker\":10000},{\"language\":\"German\",\"speaker\":10000},{\"language\":\"Limburg\",\"speaker\":10000},{\"language\":\"Saxon\",\"speaker\":10000},{\"language\":\"Main-Fränkish\",\"speaker\":10000}]}]}]},{\"language\":\"Hellenic\",\"speaker\":10000},{\"language\":\"Armenian\",\"speaker\":10000},{\"language\":\"Romance\",\"speaker\":10000},{\"language\":\"Baltic\",\"speaker\":10000},{\"language\":\"Slavic\",\"speaker\":315000000},{\"language\":\"Albanian\",\"speaker\":10000},{\"language\":\"Celtic\",\"speaker\":10000}]},{\"language\":\"Indo-Iranian\",\"speaker\":1500000000000,\"children\":[{\"language\":\"Iranian\",\"speaker\":10000,\"children\":[{\"language\":\"Persian\",\"speaker\":10000},{\"language\":\"Pashto\",\"speaker\":10000},{\"language\":\"Kurdish\",\"speaker\":10000},{\"language\":\"Baluchi\",\"speaker\":10000},{\"language\":\"Likai\",\"speaker\":10000},{\"language\":\"Hazaragi\",\"speaker\":10000},{\"language\":\"Tajiki\",\"speaker\":10000},{\"language\":\"Luri\",\"speaker\":10000},{\"language\":\"Dimli\",\"speaker\":10000},{\"language\":\"Talysh\",\"speaker\":10000},{\"language\":\"Ossetian\",\"speaker\":10000}]},{\"language\":\"Indo-Aryan\",\"speaker\":10000,\"children\":[{\"language\":\"Northwestern zone\",\"speaker\":10000,\"children\":[{\"language\":\"Punjabi\",\"speaker\":10000},{\"language\":\"Sindhi\",\"speaker\":10000},{\"language\":\"Cashmiri\",\"speaker\":10000},{\"language\":\"Seraiki\",\"speaker\":10000}]},{\"language\":\"Northern zone\",\"speaker\":10000,\"children\":[{\"language\":\"Nepali\",\"speaker\":10000},{\"language\":\"Mahasui\",\"speaker\":10000},{\"language\":\"Kangri\",\"speaker\":10000},{\"language\":\"Dogri\",\"speaker\":10000},{\"language\":\"Kumaoni\",\"speaker\":10000},{\"language\":\"Mandcali\",\"speaker\":10000},{\"language\":\"Garhwali\",\"speaker\":10000}]},{\"language\":\"Eastern zone\",\"speaker\":10000,\"children\":[{\"language\":\"Sinhala\",\"speaker\":10000},{\"language\":\"Maldivian\",\"speaker\":10000},{\"language\":\"Bengali assamese\",\"speaker\":10000,\"children\":[{\"language\":\"Bengali\",\"speaker\":10000},{\"language\":\"Assamese\",\"speaker\":10000},{\"language\":\"Rangpuri\",\"speaker\":10000},{\"language\":\"Chitta gonian\",\"speaker\":10000}]}]}]}]}]}");

/***/ }),

/***/ "./hooks/useResizeObeserver.jsx":
/*!**************************************!*\
  !*** ./hooks/useResizeObeserver.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "resize-observer-polyfill");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__);



const useResizeObserver = ref => {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const observeTarget = ref.current;
    const resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
      console.log(entries);
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserever.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

/* harmony default export */ __webpack_exports__["default"] = (useResizeObserver);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomePage */ "./components/HomePage.jsx");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./components/Page.jsx");
/* harmony import */ var _components_ForceLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ForceLayout */ "./components/ForceLayout.jsx");
var _jsxFileName = "/Users/ar/projects/popular/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import P5Wrapper from 'react-p5-wrapper';
// import sketch from '../components/sketch';

function Home({
  searchesMapped
}) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "My page title"), __jsx("script", {
    src: "https://d3js.org/d3.v3.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_ForceLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
}

async function getServerSideProps() {
  try {
    const dev = true;
    const server = dev ? 'http://localhost:3001' : 'https://popular.now.sh';
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${server}/api/trends`);
    const json = await res.json();
    const searches = json.default.trendingSearchesDays[0].trendingSearches;
    const searchesMapped = searches.map(el => {
      console.log(el);
      const search = {};
      search.title = el.title.query;
      search.children = [];
      el.articles ? el.articles.map(el => {
        let title = {};
        title = el.title.split(' ')[1];
        search.children.push({
          title
        });
      }) : null; // search.traffic = el.formattedTraffic

      return search;
    });
    return {
      props: {
        searchesMapped
      }
    };
  } catch (err) {
    console.log(err);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ar/projects/popular/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "d3-force":
/*!***************************!*\
  !*** external "d3-force" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-force");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map