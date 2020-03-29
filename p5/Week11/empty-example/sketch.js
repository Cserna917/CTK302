var myCar;
var myCar2;
var cars = [];

function setup() {
  // put setup code here
  createCanvas(1000,1000);

for(var i =0; i<20; i++){

  cars.push(new Car());
  }

}

function draw() {
  // put drawing code here
  background('red');

  for(var i =0; i<cars.length; i++){
    cars[i].display();
    cars[i].drive();
    }
  }



function Car(){
  this.pos = createVector(random(width),random(height));
  this.vel = createVector(random(-5,5),random(-5));
  this.r = random(256);
  this.b = random(256);
  this.g = random(256);

  //method
  this.display = function(){
    fill(this.r, this.b, this.g);
    rect(this.pos.x, this.pos.y,100,100);

  }

  this.drive = function(){
    this.pos.add(this.vel);
    if(this.pos.x > width) this.x =0;
    if(this.pos.x <0) this.pos.x =width;
    if(this.pos.y > height) thi.pos.y =0;
    if(this.pos.y < 0) this.pos.y = height;
  }

}
