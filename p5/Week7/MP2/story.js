var state = 0;
var timer = 0;
var sit;
var x = 0;
var y =0;
var body;
var boat;
var guys;
function preload(){


}

function setup() {
  // put setup code here
  createCanvas(1250, 800);
  sit = loadImage("asset/intro.png");
  body = loadImage("asset/body.png");
  boat = loadImage("asset/boat.png");
  guys = loadImage("asset/guys.png");
}

function draw() {
  // put drawing code here


  switch(state){

    case 0:
    background('black');
    fill('red');
    textSize(50);
    text("What are you doing here Joseph, you know you're not supposed to come around here", 100,100, 400,600);
    text("CLICK TO SHOOT",800,700);
    image(sit, 700, 100);
    break;


    case 1:

    background('red');
    textSize(500);
    fill('white');
    text("Bang", x , 400);
    x +=11;
    if(x > width){
      x = 0;
    }

    timer ++;
    if(timer > 50){
      state = 2;
      timer = 0;
    }

    break;

    case 2:
    background('black');
    image(body,500,380);
    textSize(50);
    fill('red');
    text("Tony", 100,200);
    text("Clean up the mess", 100,375);
    fill('yellow');
    text("Where you want it?", 400,475);
    text("yea boss?", 400,250);

    timer ++;
    if(timer > 300){
      state = 3;
      timer = 0;
    }


    break;

    case 3:
    background('black');
    image(boat, 200, 300);
    textSize(50);
    fill('red');
    text("The boat yard...guy was a fisher, make it look like a bad accident", 100,100,500,500);
    rect(1,600,2000,100);

    timer ++;
    if(timer > 300){
      state = 4;
      timer = 0;
    }

    break;

    case 4:
    background('#27496d');
    fill('#0c7b93')
    textSize(300);
    text("SPLASH", 50,y);

    y +=10;
    if(y>width){
      y = 0;

    }

    timer ++;
    if(timer > 50){
      state = 5;
      timer = 0;
    }
    break;

    case 5:
    background('black');
    image(guys, 500, 690);

    textSize(50);
    fill('yellow');
    text("Poor guy", 100, 150);
    text("Heard he sold the boss some bad cannolis", 100,250,400,400);
    text("Guess so", 100,650);
    fill('blue');
    text("You know what he did?", 500,200);
    text("Guy died over bad cannolis?", 500,550);

    timer ++;
    if(timer > 350){
      state = 0;
      timer = 0;
    }

    break;
  }
}

function mouseReleased(){
  state = state + 1;
  if(state > 5){
    state = 0;
  }

}
