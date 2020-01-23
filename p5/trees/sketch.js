function setup() {
  // put setup code here
  createCanvas(720, 480);
}

function draw() {
  // put drawing code here
  background('#FF9A21');
    noStroke();



    fill('#A1913F ');
    rect(0, 350, 720, 300);//ground

    fill(102);
    rect(81, 298, 20, 63);//trees
    fill(102);
    triangle(90,250,68,298,112,298);

    fill(102);
    rect(400, 400, 20, 63);
    fill(102);
    triangle(409,370,386,401,431,401);

    fill(102);
    rect(100, 400, 20, 63);
    fill(102);
    triangle(109,372,86,400,137,400);

    fill('yellow');
    arc(479, 350, 280, 280, PI, TWO_PI);//sun

    fill(0);
    textSize(30);
    text(mouseX + " , " +  mouseY, 50 , 50);

  }
  function mouseReleased() {
      console.log(mouseX +", "+ mouseY);
  }
