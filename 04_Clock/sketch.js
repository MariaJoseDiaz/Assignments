function setup() {
  createCanvas(900,400)
  angleMode(DEGREES)
}

function draw() {
  background("#d3cfcf");
  translate(width/2,height/2);
  
  

	
	
  // hours
 
  push();
   if (hour()>12){
     var h = hour()-13
   }else{
     var h = hour()
   }
   
  rotate((h+1)*30);
	noStroke();
	fill("#d852a5");
	ellipse(0,-135,70,70);

	stroke("#d852a5");
	noFill()
	ellipse(0, 0, 270, 270);
	pop();
	
	//minute
	push();
	rotate((minute()*12));
	noStroke();
	fill("#d12150");
	ellipse(0,70,40,40);
	
	stroke("#d12150");
	noFill()
	ellipse(0, 0, 145, 145);
	pop();

	//second
	push();
	rotate((second())*6);
	noStroke(); 
	fill("#db6218");
	ellipse(0,-30,25,25);
	
	stroke("#db6218");
	noFill()
	ellipse(0, 0, 60, 60);
	pop();
  
}
