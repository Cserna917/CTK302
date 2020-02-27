var song1;
var song2;
var song3;
var state = 0;

function preload() {

  song1 = loadSound('assets/speed.mp3');
  song2 = loadSound('assets/camp.mp3');
  song3 = loadSound('assets/helio.mp3');

  song1.loop();
  song1.stop();

  song2.loop();
  song2.stop();

  song3.loop();
  song3.stop();

}

function setup() {
  createCanvas(720, 200);

  background('orange');
    // this is what starts the sound
}

function draw(){
  background('orange');
  switch(state){

    case 0:
    song1.play();
    state = 1;
    break;

    case 1:
    break;

    case 2:
    song2.play();
    state = 3;
    break;

    case 3:
    break;

    case 4:
    song3.play();
    state = 5;
    break;

    case 5:
    break;



}
}


function mouseReleased(){
  state = state + 1;
  if(state > 5){
    state = 0;
  }


  song1.pause();
  song2.pause();
  song3.pause();
}

function touchStarted() {
  getAudioContext().resume();
}
