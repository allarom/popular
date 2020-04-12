// export default function sketch (p) {
//   // let rotation = 0;

//   // p.setup = function () {
//   //   p.createCanvas(600, 400, p.WEBGL);
//   // };

//   // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//   //   if (props.rotation){
//   //     rotation = props.rotation * Math.PI / 180;
//   //   }
//   // };

//   // p.draw = function () {
//   //   p.background(100);
//   //   p.normalMaterial();
//   //   p.noStroke();
//   //   p.push();
//   //   p.rotateY(rotation);
//   //   p.box(100);
//   //   p.pop();
//   // };


//     // an array for the nodes
//     var nodeCount = 100;
//     var nodes = [];
//     // an array for the springs
//     var springs = [];
  
//     // dragged node
//     var selectedNode = null;
  
//     var nodeDiameter = 16;
  
//     p.setup = function() {
//       p.createCanvas(p.windowWidth, p.windowHeight);
//       p.background(255);
//       p.noStroke();
  
//       initNodesAndSprings();
//     };
  
//     p.draw = function() {
  
//       p.background(255);
  
//       // let all nodes repel each other
//       for (var i = 0; i < nodes.length; i++) {
//         nodes[i].attractNodes(nodes);
//       }
//       // apply spring forces
//       for (var i = 0; i < springs.length; i++) {
//         springs[i].update();
//       }
//       // apply velocity vector and update position
//       for (var i = 0; i < nodes.length; i++) {
//         nodes[i].update();
//       }
  
//       if (selectedNode != null) {
//         selectedNode.x = p.mouseX;
//         selectedNode.y = p.mouseY;
//       }
  
//       // draw nodes
//       p.stroke(0, 130, 164);
//       p.strokeWeight(2);
//       for (var i = 0; i < springs.length; i++) {
//         p.line(springs[i].fromNode.x, springs[i].fromNode.y, springs[i].toNode.x, springs[i].toNode.y);
//       }
//       // draw nodes
//       p.noStroke();
//       for (var i = 0; i < nodes.length; i++) {
//         p.fill(255);
//         p.ellipse(nodes[i].x, nodes[i].y, nodeDiameter, nodeDiameter);
//         p.fill(0);
//         p.ellipse(nodes[i].x, nodes[i].y, nodeDiameter - 4, nodeDiameter - 4);
//       }
  
//     };
  
//     var initNodesAndSprings = function() {
//       // init nodes
//       nodes = [];
  
//       var rad = nodeDiameter / 2;
//       console.log("Node", Node)
//       for (var i = 0; i < nodeCount; i++) {
//         var newNode = new Node(p.width / 2 + p.random(-200, 200), p.height / 2 + p.random(-200, 200));
//         newNode.minX = rad;
//         newNode.minY = rad;
//         newNode.maxX = p.width - rad;
//         newNode.maxY = p.height - rad;
//         newNode.radius = 100;
//         newNode.strength = -5;
//         nodes.push(newNode);
//       }
  
//       // set springs randomly
//       springs = [];
  
//       for (var j = 0; j < nodes.length - 1; j++) {
//         var rCount = p.floor(p.random(1, 2));
//         for (var i = 0; i < rCount; i++) {
//           var r = p.floor(p.random(j + 1, nodes.length));
//           var newSpring = new Spring(nodes[j], nodes[r]);
//           newSpring.length = 20;
//           newSpring.stiffness = 1;
//           springs.push(newSpring);
//         }
//       }
  
//     };
  
//     p.mousePressed = function() {
//       // Ignore anything greater than this distance
//       var maxDist = 20;
//       for (var i = 0; i < nodes.length; i++) {
//         var checkNode = nodes[i];
//         var d = p.dist(p.mouseX, p.mouseY, checkNode.x, checkNode.y);
//         if (d < maxDist) {
//           selectedNode = checkNode;
//           maxDist = d;
//         }
//       }
//     };
  
//     p.mouseReleased = function() {
//       if (selectedNode != null) {
//         selectedNode = null;
//       }
//     };
  
//     p.keyPressed = function() {
//       if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
  
//       if (key == 'r' || key == 'R') {
//         p.background(255);
//         initNodesAndSprings();
//       }
//     };
  
//   // };
  
//   // var myp5 = new p5(sketch);
  
// }