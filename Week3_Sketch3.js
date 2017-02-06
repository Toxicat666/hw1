function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);

var x=0,
		y=0;
	
	while(x<400){
		
		
		line(x,0,x,y)
		
		x = x + 10;
		y = y + 10;
	}
}
