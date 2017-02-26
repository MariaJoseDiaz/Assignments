function setup() {
  createCanvas(800, 600)
  noFill()
  angleMode(DEGREES)
  frameRate(15)
  background(40)
}

function draw() {

 translate(width / 2, height / 2)
  rotate(frameCount * 7)
    //background(lerpColor(color("#ea0043"),color("#0fefca"),0,4)

  //horizontal
  
  stroke(lerpColor(color("#ea0043"), color("#0fefca"), (frameCount % 8) / 8))
  noFill()
  ellipse(100, 100, 100, 100)
  
    stroke(lerpColor(color("#0fefca"), color("#ea0043"), (frameCount % 8) / 8))
  noFill()
  ellipse(100, 100, 200, 200)
}