function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
}

function draw() {
  var locX = random(0, 800);
  var locY = random(0, 800);
  var s = random(5, 10);
  square(locX, locY, s);
  
  if (mouseIsPressed) {
    var r = random(1, 5);
    noStroke();
    fill(0, 60);
    circle(mouseX, mouseY, r);
    strokeWeight(r);
    stroke(0.100);
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
}