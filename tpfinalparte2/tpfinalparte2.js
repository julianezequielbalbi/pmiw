//Comisión 5
//Profesor: Leonardo Andres Garay
//Integrantes del grupo:
//Inchazu Mateo Agustin(91427/6)
//Balbi Julian Ezequiel(12113/1)
//Enlace al video:https://youtu.be/OCpF0TTxfE4

let pantallaActiva = 1; // 1: Inicio, 2: Créditos, 3: Juego, 4: Instrucciones
let principal;
let fuente;
let sonido; // variable para almacenar el sonido

function preload() {
  imgPersonaje = loadImage('data/imagenes/Personaje.png');
  imgEnemigo = loadImage('data/imagenes/Enemigo.png');
  imgAliado = loadImage('data/imagenes/Aliado.png');
  imgBala = loadImage('data/imagenes/Flecha.png');
  imgFondo = loadImage('data/imagenes/Fondo.png');
  imgPrincipal = loadImage('data/imagenes/Principal.png');
  fuente = loadFont('data/fuente/WOW.ttf');
  sonido = loadSound('data/Sonido/ambiente.mp3'); // carga tu archivo de sonido
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  principal = new Principal();
}

function draw() {
  principal.dibujar();
}

class Boton {
  constructor(x, y, ancho, alto, texto, accion) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.accion = accion; //define qué hace el botón
  }

  dibujar() {
    fill(200);
    rect(this.x, this.y, this.ancho, this.alto, 10);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  esClic(x, y) {
    return (
      x > this.x &&
      x < this.x + this.ancho &&
      y > this.y &&
      y < this.y + this.alto
    );
  }
}

class Pantalla {
  constructor() {
    this.imagen = imgPrincipal;
    this.botones = [];
  }

  agregarBoton(boton) {
    this.botones.push(boton);
  }

  dibujar() {
    for (let boton of this.botones) {
      boton.dibujar();
    }
  }

  manejarClic(x, y) {
    for (let boton of this.botones) {
      if (boton.esClic(x, y)) {
        boton.accion();
      }
    }
  }
}

class PantallaInicio extends Pantalla {
  constructor() {
    super();
    this.agregarBoton(
      new Boton(220, 200, 200, 50, "Jugar", () => {
        pantallaActiva = 3;
      })
    );
    this.agregarBoton(
      new Boton(220, 270, 200, 50, "Creditos", () => {
        pantallaActiva = 2;
      })
    );
    this.agregarBoton(
      new Boton(220, 340, 200, 50, "Instrucciones", () => {
        pantallaActiva = 4;
      })
    );
  }

  dibujar() {
    this.imagen = imgPrincipal;
    background(0);
    push();
    imageMode(CENTER, CENTER);
    image(this.imagen, width / 2, height / 2, 740, 580);

    fill(255);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("Warcraft", width / 2, 100);
    textSize(20);
    text("Sonido:Tecla S", 60, 20);
    pop();
    super.dibujar();
  }
}

class PantallaCreditos extends Pantalla {
  constructor() {
    super();
    this.agregarBoton(
      new Boton(220, 350, 200, 50, "Volver al Menu", () => {
        pantallaActiva = 1;
      })
    );
  }

  dibujar() {
    background(50);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Warcraft: El Origen", width / 2, 40);
    textSize(16);
    textAlign(CORNER, CORNER);
    text("Pelicula dirigida y coescrita \npor Duncan Jones\nbasada en el universo\nde Warcraft\ncreado por\nBlizzard Entertainment\nTP FINAL PARTE 1\nIntegrantes del grupo:\nInchazu Mateo Agustin (91427/6)\nJuego y Visual\nBalbi Julian Ezequiel (12113/1)\nPrograma y pantallas", width / 2-70, 100);
    super.dibujar();
  }
}

class PantallaInstrucciones extends Pantalla {
  constructor() {
    super();
    this.agregarBoton(
      new Boton(220, 350, 200, 50, "Volver al Menu", () => {
        pantallaActiva = 1;
      })
    );
  }

  dibujar() {
    background(50);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, 100);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Presiona repetidamente las flechas izquierda y derecha para moverte.", 50, 150);
    text("Dispara con ENTER.", 50, 180);
    text("Defiende a los aldeanos de los orcos.", 50, 210);
    text("Si un orco logra llevarse a un aldeano, pierdes.\nMatalos a todos para ganar.", 50, 240);
    super.dibujar();
  }
}

class Principal {
  constructor() {
    this.pantallaInicio = new PantallaInicio();
    this.pantallaCreditos = new PantallaCreditos();
    this.pantallaInstrucciones = new PantallaInstrucciones(); 
    this.juego = new Juego();
  }

  dibujar() {
    if (pantallaActiva === 1) {
      this.pantallaInicio.dibujar();
    } else if (pantallaActiva === 2) {
      this.pantallaCreditos.dibujar();
    } else if (pantallaActiva === 3) {
      this.juego.dibujar();
    } else if (pantallaActiva === 4) {
      this.pantallaInstrucciones.dibujar();
    }
  }

  manejarClic(x, y) {
    if (pantallaActiva === 1) {
      this.pantallaInicio.manejarClic(x, y);
    } else if (pantallaActiva === 2) {
      this.pantallaCreditos.manejarClic(x, y);
    } else if (pantallaActiva === 4) {
      this.pantallaInstrucciones.manejarClic(x, y);
    }
  }

  teclaPresionada(keyCode) {
    if (pantallaActiva === 3) {
      this.juego.teclaPresionada(keyCode); // llama a teclaPresionada en la clase Juego
    }
    
    
    if (keyCode === 83) {//tecla S
      if (!sonido.isPlaying()) {
        sonido.loop();
      }
    }
  }
}

function mousePressed() {
  principal.manejarClic(mouseX, mouseY);
}

function keyPressed() {
  principal.teclaPresionada(keyCode);
}
