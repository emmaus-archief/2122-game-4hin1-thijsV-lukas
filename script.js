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
vijandX= vijandX - 5;
  if (vijandX && vijandX < 0) {
    vijandX = 1280
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
if (spelerX - vijandX < 50 &&
    spelerX - vijandX >-50 &&
    spelerY - vijandY <50 &&
   spelerY - vijandY > -50) {
  console.log("Botsing");
  }
  
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
fill("blue")
  rect(0,0,1280,720)
  // vijand
  fill ("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);
  // kogel

  // speler
  fill("");
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
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}

