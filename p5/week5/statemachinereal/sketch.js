var myState = 0;

function setup() {
  // put setup code here
  createCanvas( 800,800);

}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    textSize(30);
    background('red');
    text("Your probably woundering how I ended up here..." , 30,100);
    break;

    case 2:
    background('blue');
    text("Yes I am in a garbage can ", 100,100) ;
    break;

    case 3:
    background('orange');
    text("It was a horrble dirt bike accident" , 100,100);
    break;

    case 4:
    background('purple');
    text("Yes thats my friends dad laughing" , 100,100);
    break;

    case 5:
    background('green');
    text("No I was not hurt" , 100,100);
    break;

  }
}

    function mouseReleased() {
      myState = myState + 1;
      if(myState > 4){
        myState = 0;
      }
}
