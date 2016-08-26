var img;
var canvas,text;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas');
  background('white');

  text = createDiv('Drag your mouse around!');
  text.parent('p5-text');
  text.position(20, 20);

  img = loadImage("assets/hello-world.png");
}


function draw() {
  image(img, 0, 0);
}

function mouseDragged() {
  noStroke();
  fill('pink');
  ellipse(mouseX, mouseY, 100, 100);
  // prevent default
  return false;
}
