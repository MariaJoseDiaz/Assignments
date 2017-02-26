var colorList = ['#ff87df', '#c587ff', '#8793ff', '#87d7ff', '#fff8bf'];
var barWidth = 20;
var lastBar = -1;


function setup() {
  createCanvas(900, 600)

}

function draw() {

  for (var x = 10; x < 950; x += 10) {
    for (var y = 25; y < 950; y += 25) {
    
      var whichBar = mouseX / barWidth;
  if (whichBar != lastBar) {
    var barX = whichBar * barWidth;
    fill(barX, mouseY, 66);
    lastBar = whichBar;
    

    }

      beginShape()
      vertex(x - 10, y - 25);
      vertex(x, y - 35);
      vertex(x, y);
      vertex(x - 10, y + 10);
      endShape(CLOSE);
    }
  }

}
