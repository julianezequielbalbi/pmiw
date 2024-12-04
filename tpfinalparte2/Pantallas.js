class Pantalla {
  constructor() {
    // Crear botones compartidos
    this.imagen = imgPrincipal;
    this.botonRegresar = new Boton(width / 2 - 50, 400, 100, 40, "Regresar");
  }

  mostrarPrincipal() {
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
    this.botonJugar = new Boton(width / 2 - 50, 150, 100, 40, "Jugar");
    this.botonInstrucciones = new Boton(width / 2 - 50, 220, 100, 40, "Instrucciones");
    this.botonCreditos = new Boton(width / 2 - 50, 290, 100, 40, "Creditos");

    this.botonJugar.dibujar();
    this.botonInstrucciones.dibujar();
    this.botonCreditos.dibujar();
  }

  mostrarInstrucciones() {
    
    imageMode(CENTER, CENTER);
    image(this.imagen, width / 2, height / 2, 740, 580);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, 100);
    textSize(25);
    textAlign(LEFT, TOP);
    text("-Presiona repetidamente las flechas izquierda y \n  derecha para moverte.\n-Dispara con ENTER\n-Defiende a los aldeanos de los orcos...\n-Si un orco logra llevarse a un aldeano, pierdes.\n-Matalos a todos para ganar.", 50, 150);
    this.botonRegresar.dibujar();
  }

  mostrarCreditos() {
    background(5);
    fill(255);
    textAlign(CENTER, CENTER)
    textSize(34);
    text("Warcraft: El Origen", width / 2, 40);
    textSize(16);
    textAlign(CORNER, CORNER);
    text("Pelicula dirigida y coescrita \npor Duncan Jones\nbasada en el universo\nde Warcraft\ncreado por\nBlizzard Entertainment\nTP FINAL PARTE 1\nIntegrantes del grupo:\nInchazu Mateo Agustin (91427/6)\nJuego y Visual\nBalbi Julian Ezequiel (12113/1)\nPrograma y pantallas", width / 2-70, 100);
    
    this.botonRegresar.dibujar();
  }
}
