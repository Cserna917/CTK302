
var cars = [];
var frogPos;
var state = 0;
var maxCars = 5;
var maxTimer = 12*60
var timer = maxTimer;

function setup() {
  // put setup code here
  createCanvas(600,600);

//spawn cars
for(var i = 0; i < maxCars; i++){
  cars.push(new Car());
}//end loop
  frogPos = createVector(400, height - 100);
  textAlign(CENTER);
}//end setup

//--------------------------------------

function draw() {
  // put drawing code here

  switch(state){

    case 0://menu
    background('blue');
    textSize(24);
    fill('White');
    text("Welcome click to start!",width/2 ,height/2);
    break;

    case 1://game state
    game();
    timer = timer - 1;
    if(timer <= 0){
      timer = maxTimer;
      state = 3;//they lost
    }
    break;

    case 2://win state
      background('green');
      text("You Won!",width/2, height/2);
      break;

    case 3://lose state
      background('yellow');
      text("you lost", width/2, height/2);
      break;
    }


}//end draw

//-----------------------------------

  function mouseReleased(){
    switch(state){
      case 0:
      state = 1;
      break;

      case 2://win state
      timer = maxTimer;
      resetGame();
      state = 0;
      break;

      case 3://lost state
      timer = maxTimer;
      resetGame();
      state = 0;
      break;
    }
  }//end of mouse

//-----------------------------------

  function resetGame(){
    cars = [];
    for(var i = 0; i < maxCars; i++){
      cars.push(new Car());
  }//end for
  timer = maxTimer;
}//end of resetGame

//-----------------------------------

  function game(){
    background('red');
    for(var i = 0; i < cars.length; i++){
      cars[i].display();
      cars[i].drive();

      if(cars[i].pos.dist(frogPos) < 50){
        cars.splice(i , 1);
      }//end if
  }//end for

//if there are no more cars, go to win state
  if(cars.length == 0){
    state = 2; //you win
  }//end if

  //frog
      fill('white');
      ellipse(frogPos.x, frogPos.y, 50, 50);
      checkForKeys();



  }//end of game
//----------------------------------------------

  function checkForKeys(){
    if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
    if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
    if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  }//end of KeyIsDown
  //----------------------------------------------



function Car(){
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5,5), random(-5));
  this.r = random(255);
  this.b = random(255);
  this.g = random(255);

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 50, 50);
  }//end display
//---------------------------------------------
  this.drive = function(){
    this.pos.add(this.vel);
    if (this.pos.x > width) this.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }//end drive
//----------------------------------------------
}//end of car
