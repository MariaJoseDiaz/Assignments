var colorList = ['#ff87df', '#c587ff', '#8793ff', '#87d7ff', '#fff8bf'];

function setup() {
  createCanvas(400, 400)
  frameRate(3)
}

function draw() {

  for (var x = 10; x < 450; x += 10) {
    for (var y = 25; y < 450; y += 25) {

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      
     


      beginShape()
      vertex(x - 10, y - 25);
      vertex(x, y - 35);
      vertex(x, y);
      vertex(x - 10, y + 10);
      endShape(CLOSE);
    }
  }

}