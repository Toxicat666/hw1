function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);

var w = 0,
		h = 0;
	while(w<400,h<400){
		noFill();
		
		ellipse(200,200,w,h);
		
		w = w + 10;
		h = h + 10;
	}
}
