var bkgimg;
var canvas,text;

function setup() {
  bkgimg = createImg("assets/hello-world.png");
  canvas = createCanvas(windowWidth, windowHeight);

  bkgimg.position(0,0);
  bkgimg.size(windowWidth, windowHeight);

  canvas.position(0,0);
  canvas.parent('p5-canvas');
  background('white');

  text = createDiv('Drag your mouse around!');
  text.parent('p5-text');
  text.position(20, 20);
}


function draw() {}

function mouseDragged() {
  noStroke();
  fill('pink');
  ellipse(mouseX, mouseY, 100, 100);
  // prevent default
  return false;
}
