//Comisión 5
//Profesor: Leonardo Andres Garay
//Integrantes del grupo:
//Inchazu Mateo Agustin(91427/6)
//Balbi Julian Ezequiel(12113/1)
//Enlace al video: https://youtu.be/s2pHpcNhFpc

let escena = 0;
//arreglo dialogos
let dialogo =[];
let anchopantalla=640;
let altopantalla=480;
let Fuente
let crono = altopantalla;
let sonido;
let dorado, azul;


function preload() {
  sonido = loadSound('data/sonido/ambiente.mp3');
  dialogo = loadStrings('data/dialogo.txt');
  imagenes()

    Fuente = loadFont('data/font/WOW.ttf');
}
function setup() {
  sonido.loop();
  dorado=color(230, 204, 128);
  azul=color (0, 112, 221);
  createCanvas(anchopantalla, altopantalla);
  textFont(Fuente);
  print(dialogo);
}
function draw() {
  titulo();

  if (escena>0) {
    textbox();
  }


  if (escena===0) {
    botonmusica(0, 0);
    botont();
  } else if (escena>0&&escena!== 3 && escena !== 10&& escena !== 13&& escena !== 29&& escena !== 39) {

    botonsig()
  }
  //Escenas de decicion
  if (escena ===3||escena ===10||escena ===13||escena ===29) {
    caminos()
  }

  if (escena ===16||escena ===20||escena ===24||escena ===30||escena ===35) {
    escena = 39;
  }


  if (escena==39) {
    // PANTALLA FINAL Y CREDITOS
    crono--;
    fill(0);
    rect(0, 0, width, height);
    fill(222, 111, 22);
    push();
    textSize(25);
    textAlign(CENTER);
    text("WARCRAFT: El origen \nPelicula dirigida y coescrita por Duncan Jones\nbasada en el universo de Warcraft\ncreado por Blizzard Entertainment\nTP FINAL PARTE 1\nIntegrantes del grupo:\nInchazu Mateo Agustin(91427/6)\nBalbi Julian Ezequiel(12113/1)", width/2, crono);
    pop();
    REINICIO()
      if (crono==-180) {
      crono = altopantalla;
    }
  }
}
function mouseClicked() {

  clickinicio()
    clicsigue()
    botonescamino()
    clickreinicio()
}

function mousePressed() {
  reproducirmusica()
}
