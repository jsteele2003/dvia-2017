/* Adapted from https://processing.org/examples/clock.html */

var cx, cy; // center position of canvas

// Radius for hands of the clock
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;

function setup() {

  createCanvas(1280, 680);
  stroke(255);

  var radius = min(width, height) / 2; // this is the maximum possible radius
  secondsRadius = radius * 0.72;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.50;
  clockDiameter = radius * 1.8;

  cx = width / 2;
  cy = height / 2;

}

function draw() {
	background(0);

  // Draw the clock background

	  //Change the clock background informed by time progression (secondsRadius)
	  fill(secondsRadius, 128, 128);

  noStroke();
  ellipse(cx, cy, clockDiameter, clockDiameter);

  //display the secondsRadius

 	textSize(20);
	text("Time Distance: "+secondsRadius/(180/PI), 10, 30); 

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  	//clockhands informed by time progression (secondsRadius)
  	stroke(secondsRadius, 255, 255);

  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
	secondsRadius++;
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();

  //future past time concept
  if (secondsRadius > cx){
  	secondsRadius= -secondsRadius ;
  } 
  
}