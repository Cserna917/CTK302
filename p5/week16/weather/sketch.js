var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x =0 ;
var ws =0;


function setup() {
  createCanvas(400, 400);
  noStroke();

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=00ee13f90a55b39d30f8ac72ea7aba7d'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
}


function draw() {

  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    background('#0779e4');
    fill('yellow');
    textSize(30);
    text("Peoria Weather", 100, 25) ;
// parse the weather object and put some text or images using at least 3 different weather data!
    textSize(20)
    fill('white');
    text("Temperature is " + weather.main.temp, 100, 90);
    text("Humidity is " + weather.main.humidity, 100, 110);
    text("Windspeed is " + weather.wind.speed, 100, 130);

    //cloud
    ellipse(x-10,155,100,100);
    ellipse(x+20,150,100,100);
    ellipse(x,170,150,70);
    x = x + ws/4;
    if(x > width) x = 0;

    //sun
    fill('#f6d743')
    ellipse(100, 300, 100, 100);


    //grass
    fill('#4cbbb9')
    rect(0,300,400,100);
      break;

  }
}
