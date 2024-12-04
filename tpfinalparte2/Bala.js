class Bala {
  constructor(x, y) {
    this.imagen = imgBala;
    this.posX = x;
    this.posY = y;
    this.velocidad = 10;
    this.tamaño = 40;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, this.tamaño, 80);
  }

mover() {
  this.posY -= this.velocidad;

}

}
