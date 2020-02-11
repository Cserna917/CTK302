function setup() {
  // put setup code here
  createCanvas(800,800);
  background('blue');

}

function draw() {
  // put drawing code here

  rect(100,100,100,100,20);
}
function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
  background(random(256),random(256),random(256));
}



}
