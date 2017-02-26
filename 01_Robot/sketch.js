function setup() {
  createCanvas(900,400);
  strokeWeight (2);
}

function draw() {
 background("#6d6a6a");
 
 //Neck
 stroke(100);
 line(200,100,200,300);
 line(210,100,210,300);
 line(220,100,220,300);
 
  //Antenna
 stroke(100);
 line(240,122,270,125);
 line(220,100,240,20);
 line(190,90,180,70);
 
 //Head
 fill(0);
 noStroke();
 ellipse(210,110,90,90);

 //Eyes
 fill(255);
 noStroke();
 ellipse(225,108,28,28);
 
 fill(0);
 ellipse(225,108,7,7);
 
 fill(150);
 ellipse(235,90,7,7);
 ellipse(200,106,10,10);
 ellipse(240,122,6,6);
 
 //Body
 fill(100);
 noStroke();
 ellipse(195,300,60,60);
 
 fill(0);
 rect(155,200,80,100);
 
 fill(100);
 rect(155,210,80,5);
}
