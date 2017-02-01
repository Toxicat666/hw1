function setup() { 
  createCanvas(400, 400);
}

function draw() {
  //background(255);
  
  var x=200,
      y=200;
			
    fill(255);
	stroke(0);
	
  ellipse(mouseX, mouseY, 100, 100);
  ellipse(mouseX-25, mouseY-25,25, 25);
  ellipse(mouseX+25, mouseY-25,25,25);
	arc(mouseX, mouseY, 50, 50, 0, PI, OPEN);
}
