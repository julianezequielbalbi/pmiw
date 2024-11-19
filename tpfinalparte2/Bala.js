class Bala {
  constructor(x, y) {
    this.imagen = imgBala;
    this.posX = x;
    this.posY = y;
    this.velocidad = 10;
    this.tamaño = 40;
    this.activa = true; //la bala esta activa
  }

  dibujar() {
    if (this.activa) {
      image(this.imagen, this.posX, this.posY, this.tamaño, 80);
    }
  }

mover() {
  if (this.activa) {
    this.posY -= this.velocidad;
  }
}

}
