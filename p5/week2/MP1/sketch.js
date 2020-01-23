function setup() {
  // put setup code here
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background('#FF9A21');


    if (mouseIsPressed) {
      //stuff that shows mouse pressed
      ellipse(50, 50, 50, 50);
    } else {
      //mouse is not pressed
      rect(50, 50, 50, 50);
    }

    fill(100);
    textSize(30);
    text(mouseX + " , " +  mouseY, 100 , 100);
  }

  function mouseReleased() {
      console.log(mouseX +", "+ mouseY);
  }
