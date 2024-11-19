//Comisión 5
//Profesor: Leonardo Andres Garay
//Integrantes del grupo:
//Inchazu Mateo Agustin(91427/6)
//Balbi Julian Ezequiel(12113/1)
//Enlace al video: https://youtu.be/s2pHpcNhFpc

let escena = 0;
let dialogo = [];
let anchopantalla = 640;
let altopantalla = 480;
let Fuente;
let crono = altopantalla;
let sonido;
let dorado, azul;
let art;

function preload() {
  sonido = loadSound('data/sonido/ambiente.mp3');
  dialogo = loadStrings('data/dialogo.txt');
  imagenes();
 
  Fuente = loadFont('data/font/WOW.ttf');
}

function setup() {
 createCanvas(anchopantalla, altopantalla);
 background(0);
 rect(100,100,100,100);
  sonido.loop();
  dorado = color(230, 204, 128);
  azul = color(0, 112, 221);
  
  textFont(Fuente);
  print(dialogo);
 
}


function draw() {
   print(escena);
  dibujarPantalla(anchopantalla,altopantalla);
  
}


function mouseClicked(){
  clickBoton()  
}
