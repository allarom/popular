webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ForceLayout.jsx":
/*!************************************!*\
  !*** ./components/ForceLayout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./components/lang.json");
var _lang__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang */ "./components/lang.json", 1);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/index.js");
/* harmony import */ var _hooks_useResizeObeserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useResizeObeserver */ "./hooks/useResizeObeserver.jsx");
var _jsxFileName = "/Users/ar/projects/popular/components/ForceLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { select, hierarchy, tree, linkVertical, forceSimulation, forceCenter,  mouse,  forceX,  forceY, forceCollide, forceRadial} from "d3"
// import * as d3 from 'd3'





var Page = function Page(props) {
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dimensions = Object(_hooks_useResizeObeserver__WEBPACK_IMPORTED_MODULE_4__["default"])(wrapperRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(dimensions);
    if (!dimensions) return; // const svg = select(svgRef.current)

    if (d3) {
      console.log("d3", d3.layout.force());
    }

    var width = dimensions.width,
        height = dimensions.height,
        root;
    var force = d3.layout.force().linkDistance(80).charge(-120).gravity(.05).size([width, height]).on("tick", tick); // var svg = d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height);

    var svg = d3.select(svgRef.current);
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
      nodeEnter.append("circle").attr("r", function (d) {
        return Math.sqrt(d.size) / 10 || 4.5;
      });
      nodeEnter.append("text").attr("dy", "15px").text(function (d) {
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
    __self: this
  }, __jsx("div", {
    height: "2000px",
    ref: wrapperRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("svg", {
    ref: svgRef,
    height: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.2bdc88f69e4768afebab.hot-update.js.map