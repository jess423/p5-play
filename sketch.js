// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;
var w = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define colors
  c1 = color(51, 255, 204);
  c2 = color(102, 0, 153);

}

function draw() {
  // Background
  setGradient(0, 0, width, height, c1, c2, X_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
