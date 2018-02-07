var bgcolor; 
var canvas; 

function setup() {
	canvas = createCanvas(200, 200);
	bgcolor = color(200); 
	createButton("hi hi hi"); 
	button.mousePressed(changeColor)
}

function mousePressed() {
	changeColor(); 
}

function changeColor() {
	bgcolor = color(random(255)); 
}

function draw() {
	background(bgcolor);
	fill(255, 0, 175);
	rect(100, 100, 50, 50); 
}