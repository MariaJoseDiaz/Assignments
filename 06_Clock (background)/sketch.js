var fondo;
var myImage;

function preload(){
    myImage = loadImage("images/milan2.jpg"); // donde adjunto link de imagen?
}

function setup() {
    createCanvas(width,height);
 myImage.filter("gray");
    fondo = color(204);
    frameRate(2)
}


function draw() {
  
    image(myImage,0,0,900,600);
   // fill(value);
    translate(0,-1*(height/17));

  fill(color(random(0, 170), random(0, 170), random(0, 170)));
    textSize((random(0, 170), random(0, 170), random(0, 170))); //(height/4) //
    textAlign(CENTER);  
    textFont('Abril Fatface');
    
    text(hour(),width/2,height/3);
    text(minute(),width/2,height/3*2);
    text(second(),width/2,height);
    
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}