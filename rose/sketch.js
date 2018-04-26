var d = 8;
var n = 5;
var sliderD;
var sliderN;
function setup() {
  // put setup code 
  createCanvas(500, 500);
  sliderD = createSlider(1, 30, 5);
  sliderN = createSlider(1, 30, 8);
}

function draw() {
  d = sliderD.value();
  n = sliderN.value();
  
  var k = n/d;
  
  background(60);
  translate(width/2, height/2);

  beginShape();
  stroke(200,0,0);
  noFill();
  strokeWeight(1);
  for (var a = 0; a < d *TWO_PI; a += 0.02) {
    var r = 250 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}