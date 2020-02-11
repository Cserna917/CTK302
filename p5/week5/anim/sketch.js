var x = 0;
var v = 0;

function setup() {
  // put setup code here
  createCanvas(2000,1000);
  rectMode(CENTER);
  ellipseMode(CENTER);

}
function draw() {
  // put drawing code here
  background('orange')
  //rect(x,100,v,100);
  fill('red');
  textSize(40);
  text("parasite" , x,100);
  x = x + 5;

  if(x > width){
    x = 0;
  }


}
