function setup() { 
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  var faceX = mouseX,
      faceY = mouseY,
     faceWidth = 100,
     faceHeight = 100;
  ellipse(faceX, faceY, faceWidth, faceHeight);

  ellipse(faceX-25, faceY-25,
       25, 25);
  ellipse(faceX+25, faceY-25,25,25);
	arc(faceX, faceY, 50, 50, 0, PI, OPEN);
}
