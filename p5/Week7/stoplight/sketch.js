var state = 0;
var timer = 0;
function setup() {
  createCanvas(1000,1000);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  fill('#fddb3a');
  rect(700,420,200,550);


  switch(state){

    case 0:
    fill('red');
    ellipse(700,250,150,150,);
    fill('grey');
    ellipse(700,420,150,150,);
    fill('grey');
    ellipse(700,590,150,150,);
    timer ++;
    if(timer > 100){
      state = 1;
      timer = 0;
    }
    break;

    case 1:
    fill('grey');
    ellipse(700,250,150,150,);
    fill('grey');
    ellipse(700,420,150,150,);
    fill('green');
    ellipse(700,590,150,150,);
    timer ++;
    if(timer > 100){
      state = 2;
      timer = 0;
    }
    break;

    case 2:
    fill('grey');
    ellipse(700,250,150,150,);
    fill('yellow');
    ellipse(700,420,150,150,);
    fill('grey');
    ellipse(700,590,150,150,);
    timer ++;
    if(timer > 100){
      state = 0;
      timer = 0;
    }
    break;
  }

}
