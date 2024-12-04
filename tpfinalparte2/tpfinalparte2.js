//Comisión 5
//Profesor: Leonardo Andres Garay
//Integrantes del grupo:
//Inchazu Mateo Agustin(91427/6)
//Balbi Julian Ezequiel(12113/1)
//Enlace al video:https://youtu.be/OCpF0TTxfE4


let inicio;
let fuente;
let sonido;

function preload() {
  imgPersonaje = loadImage('data/imagenes/Personaje.png');
  imgEnemigo = loadImage('data/imagenes/Enemigo.png');
  imgAliado = loadImage('data/imagenes/Aliado.png');
  imgBala = loadImage('data/imagenes/Flecha.png');
  imgFondo = loadImage('data/imagenes/Fondo.png');
  imgPrincipal = loadImage('data/imagenes/Principal.png');
  fuente = loadFont('data/fuente/WOW.ttf');
  sonido = loadSound('data/Sonido/ambiente.mp3');
}



function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  inicio = new Inicio();
}

function draw() {
  inicio.mostrarPantalla();
}
function keyPressed() {
  inicio.teclaPresionada(keyCode);
}
function mousePressed() {
  inicio.detectarClic();
}
