var img;

function setup() {
  createCanvas(displayWidth, displayHeight);
  img = loadImage("assets/hello-world.png");
  background('white');
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

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}
