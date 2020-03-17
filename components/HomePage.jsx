import {useEffect, useState} from 'react'

const HomePage = (props) => {
  let [windowsWidth, setWidth] = useState(0)
  let [windowsHeight, setHeight] = useState(0)
  let list = null

useEffect(() => {
setWidth(window.innerWidth);
setHeight(window.innerHeight);


// Multiple Animated Circle - Get Canvas element by Id
var canvas = document.getElementById( "myCanvas" );

// Set Canvas dimensions
canvas.width   = windowsWidth;
canvas.height  = windowsHeight;

// Get drawing context
var ctx = canvas.getContext( '2d' );
// The Circle class
function Circle( x, y, dx, dy, radius, title, traffic ) {

	this.x 	= x;
	this.y 	= y;
	this.dx = dx;
  this.dy = dy;
  this.title = title
  this.traffic = traffic
  this.radius = radius;
  const allTraffic = props.props.map( el => el.traffic.match(/\d+/)[0] );
  this.highest = allTraffic[0]
  const lowest = allTraffic[allTraffic.length - 1]
 

  
  this.random_rgba = function() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
var color = this.random_rgba();


	this.draw = function() {
    
		ctx.beginPath();
		ctx.arc( this.x, this.y,  this.radius, 0, Math.PI * 2, false  );
    ctx.fillStyle = `rgba(255,0,0,${this.traffic/this.highest})`;
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = "16px Verdana";
    ctx.textAlign = 'center';
    ctx.fillText(this.title,this.x, this.y);

	}

	this.update = function() {

		if( this.x + this.radius > windowsWidth || this.x - this.radius < 0 ) {

			this.dx = -this.dx;
		}

		if( this.y + this.radius > windowsHeight || this.y - this.radius < 0 ) {

			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var circles = [];

// Radius
var radius = 70;

for( var i = 0; i < props.props.length; i++ )  {
	
	// Starting Position
	var x = Math.random() * ( windowsWidth - radius * 2 ) + radius;
	var y = Math.random() * ( windowsHeight - radius * 2) + radius;

	// Speed in x and y direction
  	var dx = ( Math.random() - 0.5 ) * 2;
  	var dy = ( Math.random() - 0.5 ) * 2;
  var title = props.props[i].title
  var traffic = props.props[i].traffic.match(/\d+/)[0];
	circles.push( new Circle( x, y, dx, dy, radius, title, traffic) );
}

function animate() {
  
	requestAnimationFrame( animate );

	ctx.clearRect( 0, 0, windowsWidth, windowsHeight );

	for( var r = 0; r < props.props.length; r++ ) {

		circles[ r ].update();
	}
}

animate();
})

return (
  <div>
    <canvas id="myCanvas" width={windowsWidth} height={windowsHeight} style={{border: '1px solid black' }} >
    </canvas>
  </div>

)
}

export default HomePage