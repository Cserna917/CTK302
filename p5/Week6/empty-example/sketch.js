var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('green');

push();
translate(y,0);

//ypur avator
//  ellipse(y, 200, 100, 10) ;
if (touchStarted) {
    // stuff that shows when the mouse is pressed

    //legs
    //right
    fill('#7fa998');
    quad(684, 534, 738, 670, 688, 692, 615, 578);
    fill('#7fa998');
    rect(710,740, 65,140);
    fill('#9d2503')
    ellipse(710, 680, 90, 35);
    rect(710,830, 80,40);

    //left
    fill('#7fa998');
    quad(516, 537, 587, 577, 528, 688, 470, 667);
    fill('#7fa998');
    rect(500,740, 65,140);
    fill('#9d2503')
    ellipse(500, 680, 90, 35);
    rect(500,830, 80,40);

    //hips
    fill('#f1f1b0')
    rect(600, 490, 190, 80);
    fill('#f0cf85');
    ellipse(600, 450, 190, 35);
    fill('#7fa998');
    rect(600, 410, 75, 80);
    fill('#a4d4ae');
    rect(600, 410, 75, 60);
    fill('#7fa998');
    rect(600, 410, 75, 40);
    fill('#a4d4ae');
    rect(600, 410, 75, 20);
    fill('#9d2503')
    triangle(505,530,602,585,696,530);


    //chest
    fill('#f1f1b0')
    rect(600, 350, 275, 100);
    //buttons
    fill('#7fa998');
    rect(680, 340, 80, 30);
    fill('#df8543');
    ellipse(660, 340, 20, 20);
    fill('#df8543');
    triangle(686,333,696,347,706,333);
    fill('#f0cf85');
    ellipse(600, 300, 275, 35);

    //neck
    fill('#7fa998');
    rect(600, 260, 60, 70);
    fill('#a4d4ae');
    rect(600, 260, 60, 50);
    fill('#7fa998');
    rect(600, 260, 60, 30);
    fill('#a4d4ae');
    rect(600, 260, 60, 10);

    //head
    fill('#f1f1b0')
    rect(600, 200, 170, 100);
    fill('255');
    //eyes
    arc(560, 200, 40, 60, PI, TWO_PI);
    fill('255');
    arc(640, 200, 40, 60, PI, TWO_PI);

    fill(0);
    arc(560, 200, 24, 45, PI, TWO_PI);
    fill(0);
    arc(640, 200, 24, 45, PI, TWO_PI);
    //mouth
    fill(255);
    triangle(579,223,584,245,632,219);
    //ears
    fill('#9d2503')
    rect(510, 200, 10, 30);
    rect(690, 200, 10, 30);

    //arms
    //left
    fill('#9d2503')
    rect(457, 332, 10, 55);
    fill('#7fa998');
    quad(364, 270, 452, 315, 452, 349, 352, 292);
    rect(350,210, 28,90);
    fill('#9d2503')
    ellipse(350,275, 50,50);
    rect(350,160,50,15);
    //right
    rect(742, 332, 10, 55);
    fill('#7fa998');
    quad(746, 312, 838, 377, 828, 396, 746, 352);
    rect(850,465, 28,90);
    fill('#9d2503')
    ellipse(850,400, 50,50);
    rect(850,518,50,15);
    //left hand
    arc(350, 140, 45, 45, 6, PI + QUARTER_PI);
    //right hand
    ellipse(850,540,45,45);

    fill('#61d4b3');
    rect(600,1250,1400,800);

    } else {

      // when the mouse isn't pressed!
//legs
//right
fill('#7fa998');
quad(684, 534, 738, 670, 688, 692, 615, 578);
fill('#7fa998');
rect(710,740, 65,140);
fill('#9d2503')
ellipse(710, 680, 90, 35);
rect(710,830, 80,40);

//left
fill('#7fa998');
quad(516, 537, 587, 577, 528, 688, 470, 667);
fill('#7fa998');
rect(500,740, 65,140);
fill('#9d2503')
ellipse(500, 680, 90, 35);
rect(500,830, 80,40);

//hips
fill('#f1f1b0')
rect(600, 490, 190, 80);
fill('#f0cf85');
ellipse(600, 450, 190, 35);
fill('#7fa998');
rect(600, 410, 75, 80);
fill('#a4d4ae');
rect(600, 410, 75, 60);
fill('#7fa998');
rect(600, 410, 75, 40);
fill('#a4d4ae');
rect(600, 410, 75, 20);
fill('#9d2503')
triangle(505,530,602,585,696,530);


//chest
fill('#f1f1b0')
rect(600, 350, 275, 100);
//buttons
fill('#7fa998');
rect(680, 340, 80, 30);
fill('#df8543');
ellipse(660, 340, 20, 20);
fill('#df8543');
triangle(686,333,696,347,706,333);
fill('#f0cf85');
ellipse(600, 300, 275, 35);

//neck
fill('#7fa998');
rect(600, 260, 60, 70);
fill('#a4d4ae');
rect(600, 260, 60, 50);
fill('#7fa998');
rect(600, 260, 60, 30);
fill('#a4d4ae');
rect(600, 260, 60, 10);

//head
fill('#f1f1b0')
rect(600, 200, 170, 100);
fill(255);
//eyes
arc(560, 200, 40, 60, PI, TWO_PI);
fill(255);
arc(640, 200, 40, 60, PI, TWO_PI);

fill(0);
arc(560, 200, 24, 45, PI, TWO_PI);
fill(0);
arc(640, 200, 24, 45, PI, TWO_PI);
//mouth
fill(255);
triangle(579,223,584,245,632,219);
//ears
fill('#9d2503')
rect(510, 200, 10, 30);
rect(690, 200, 10, 30);

//arms
//left
fill('#9d2503')
rect(457, 332, 10, 55);
fill('#7fa998');
quad(341, 358, 453,314,452,347,349,396);
rect(350,435, 28,90);
fill('#9d2503')
ellipse(346,378, 50,50);
rect(350,481,50,15);
ellipse(351,505, 50,50);


//right
rect(742, 332, 10, 55);
fill('#7fa998');
quad(746, 312, 838, 377, 828, 396, 746, 352);
rect(850,465, 28,90);
fill('#9d2503')
ellipse(850,400, 50,50);
rect(850,518,50,15);
//left hand
//arc(350, 140, 45, 45, 6, PI + QUARTER_PI);
//right hand
ellipse(850,540,45,45);

fill('#655c56');
rect(600,1250,1400,800);
}


  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 10000; // you may need to change this
  pop();
  if (vol > .002) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}
// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
