var myFont;

function preload() {
  myFont = loadFont('assets/SKETCHY.otf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 1000) ;
}
function draw() {
  fill('black');   // SETS the color
  textFont(myFont, 24);  // SETS the font
  	// SETS the size of the font
  text("HELLO WORLD", 20, 50); // DISPLAYS TEXT WITH THE FONT
}
