var carPic1;
var carPic2;
var carPic3;

function setup(){
createCanvas(5000, 5000);
carPic1 = loadImage("assets/car1.jpg");
carPic2 = loadImage("assets/car2.jpg");
carPic3 = loadImage("assets/car3.jpg");
}

function draw() {
  image(carPic1, 0, 0);
  image(carPic2, 0, 1000);
  image(carPic3, 0, 2000);
}
