var state = 0;
var timer = 0;
function preload(){

}

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here
  background('blue');

  switch(state){

    case 0:
    textSize(30);
    text("What did one french man say to the other", 100,100);
    timer ++;
    if(timer > 200){
      state = 1;
      timer = 0;
    }
    break;

    case 1:
    textSize(30);
    text("I have no idea I dont speak french...", 100,100);
    timer ++;
    if(timer > 200){
      state = 2;
      timer = 0;
    }
    break;

    case 2:
    background('orange');
    textSize(30);
    text("A bull walks into a bar", 100,100);
    timer ++;
    if(timer > 200){
      state = 3;
      timer = 0;
    }
    break;

    case 3:
    background('orange');
    textSize(30);
    text("Everyone leaves relizing they could be in danger", 100,100);
    timer ++;
    if(timer > 200){
      state = 4;
      timer = 0;
    }
    break;

    case 4:
    background('yellow');
    textSize(30);
    text("What did the fish say when he ran into a wall", 100,100);
    timer ++;
    if(timer > 200){
      state = 5;
      timer = 0;
    }
    break;

    case 5:
    background('yellow');
    textSize(30);
    text("dam.", 100,100);
    timer ++;
    if(timer > 200){
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
