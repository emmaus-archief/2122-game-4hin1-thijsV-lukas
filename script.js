/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */


const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = UITLEG;

const KEY_LEFT = 65;     //A
const KEY_UP = 87;       //W
const KEY_DOWN = 83;     //S
const KEY_RIGHT = 68;    //D

var spelerX = 200        // x-positie van speler
var spelerY = 360        // y-positie van speler

var vijandX1 = 740;      // x-positie van vijand 
var vijandY1 = 500;      // y-positie van speler

var vijandX2 = 1280;
var vijandY2 = 500;

var img1;  //plaatjes
var img2;

var score = 0;  //score
var highscore = 0;  //highscore




/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () { 
  // speler
 if (keyIsDown(KEY_LEFT)) {  //A
     spelerX = spelerX -6;
  }
  if (keyIsDown(KEY_UP)) {  //W
     spelerY = spelerY -6;
  }
   if (keyIsDown(KEY_DOWN)) {  //S
     spelerY = spelerY +6;
  }
   if (keyIsDown(KEY_RIGHT)) {  //D
     spelerX = spelerX +6;
  }
  


  // vijand
 vijandX1 = vijandX1 - 10;  //bewegen vijand
  if (vijandX1 && vijandX1 < 0) {
    vijandX1 = 1280
    vijandY1 = random(100,700);
  }

  vijandX2 = vijandX2 - 10;  //bewegen vijand
  if (vijandX2 && vijandX2 < 0) {
    vijandX2 = 1280
    vijandY2 = random(100,700);
  }

  score = score + 1  //score
  
  if (score > highscore) {  //highscore
    highscore = score
 }
  
   if (score > 500) {  //vijand sneller bij 500
     vijandX1 = vijandX1 - 2,5;
     vijandX2 = vijandX2 - 2,5;
   }
   if (score > 1000) {  //vijand sneller bij 1000
     vijandX1 = vijandX1 - 2,5;
     vijandX2 = vijandX2 - 2,5;
   }
  if (score > 1500) {  //vijand sneller bij 1500
     vijandX1 = vijandX1 - 2,5;
     vijandX2 = vijandX2 - 2,5;
   }
  if (score > 2000) {  //vijand sneller bij 2000
     vijandX1 = vijandX1 - 2,5;
     vijandX2 = vijandX2 - 2,5;
   }
     
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
};




function preload() {
 img1 = loadImage('meteoriet.png');
 img2 = loadImage('ufo.png');
 img3 = loadImage('ruimteachtergrond.png')
 img4 = loadImage('backgrounduitleg.png')

}



var tekenAlles = function () {
  // achtergrond
//fill("gray")
  //rect(0, 0, 1280, 720)
  image (img3, 0, 0, 1280, 720)
 
  // vijand oude stappen
 // fill ("black");
 // rect(vijandX1 - 75, vijandY1 - 75, 150, 150);
  //fill("white");
//  ellipse(vijandX1, vijandY1, 30, 30);

  // fill ("black");
 // rect(vijandX2 - 75, vijandY2 - 75, 150, 150);
  //fill("white");
 // ellipse(vijandX2, vijandY2, 30, 30);

  image (img1, vijandX1-110, vijandY1-110, 220, 220);
  image (img1, vijandX2-110, vijandY2-110, 220, 220);
  // kogel

  // speler oude stappen
 // fill("white");
  //rect(spelerX - 25, spelerY - 25, 50, 50);
  //fill("black");
 // ellipse(spelerX, spelerY, 10, 10);
  image (img2, spelerX-50, spelerY-45, 100, 100);
  
 

 // score
  textSize(70)
  fill("white")
  text("score: " + score, 490, 100);
  
  textSize (50)
  fill("white")
  text("highscore: " + highscore, 880, 50 )

  
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerX - vijandX1 < 100 &&
    spelerX - vijandX1 >-100 &&
    spelerY - vijandY1 < 100 &&
   spelerY - vijandY1 > -100) {
  console.log("Botsing")
    return true;
  }

   if (spelerX - vijandX2 < 100 &&
    spelerX - vijandX2 >-100 &&
    spelerY - vijandY2 < 100 &&
   spelerY - vijandY2 > -100) {
  console.log("Botsing")
    return true;
  }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
  
    
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  console.log("spelen");
  }

  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
console.log("game over");
    textSize(70);
    fill("red")
    text("GAME OVER", 420, 260)
    textSize(40);
    fill("white")
    text("druk op spatie om opnieuw te beginnen!", 300, 330)
    if (keyIsDown(32)) { // spatie
      spelerX = 200;
      spelerY = 500 
      vijandX1 = 740;
      vijandX2 = 1280;
      vijandY1 = 200;
      vijandY2 = 1080;
      spelStatus = SPELEN;
      score = 0
      
    }
    
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
  console.log("uitleg");
   // textSize(70);
    //fill("white")
   // rect(0,0, 1280, 720)
    image (img4, 0, 0, 1280, 720)
    textSize(70);
    fill("white")
    text("UITLEG", 510, 210)
    textSize(40);
    text("ontwijk de meteorieten!", 440, 290)
    text("W = naar boven", 500, 360)
    text("A = naar links", 500, 410)
    text("D = naar rechts", 500, 460)
    text("S = naar beneden", 500, 510)
    text("druk op enter om te starten!", 410, 590)
    if (keyIsDown(13)) {
       spelerX = 200;
       spelerY = 500
      vijandX1 = 740;
      vijandX2 = 1280;
      vijandY1 = 200;
      vijandY2 = 1080;
      spelStatus = SPELEN;
      score = 0
      
    }
  }
}

