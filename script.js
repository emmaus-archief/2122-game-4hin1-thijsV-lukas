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
var spelStatus = SPELEN;

const KEY_LEFT = 65;
const KEY_UP = 87;
const KEY_DOWN = 83;
const KEY_RIGHT = 68;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 1280;
var vijandY = 500;






/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
 if (keyIsDown(KEY_LEFT)) {
     spelerX = spelerX -5;
  }
  if (keyIsDown(KEY_UP)) {
     spelerY = spelerY -5;
  }
   if (keyIsDown(KEY_DOWN)) {
     spelerY = spelerY +5;
  }
   if (keyIsDown(KEY_RIGHT)) {
     spelerX = spelerX +5;
  }
  


  // vijand
vijandX= vijandX - 10;
  if (vijandX && vijandX < 0) {
    vijandX = 1280
    vijandY = random(100,700);
  }
  
  
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
fill("gray")
  rect(0,0,1280,720)
  // vijand
  fill ("black");
  rect(vijandX - 75, vijandY - 75, 150, 150);
  fill("white");
  ellipse(vijandX, vijandY, 30, 30);
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

 // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerX - vijandX < 100 &&
    spelerX - vijandX >-100 &&
    spelerY - vijandY < 100 &&
   spelerY - vijandY > -100) {
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
   spelStatus = UITLEG; 
      
    }
    
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
  console.log("uitleg");
    textSize(70);
    fill("white")
    rect(0,0, 1280, 720)
    textSize(70);
    fill("black")
    text("UITLEG", 500, 230)
    textSize(40);
    fill("black")
    text("ontwijk de meteorieten!", 440, 330)
    text("W = naar boven", 500, 380)
    text("A = naar links", 500, 430)
    text("D = naar rechts", 500, 480)
    text("S = naar beneden", 500, 530)
    if (keyIsDown(13)) {
      spelerX = 400;
      vijandX = 1200;
      spelStatus = SPELEN;
      
    }
  }
}

