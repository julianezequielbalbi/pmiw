class Personaje {
  constructor() {
   
    this.posX = width / 2;
    this.posY = 400;
    this.imagen = imgPersonaje;
    this.velocidad = 5;
    this.tamaño = 100;
    this.balas = [];
  }

dibujar() {
  fill(255, 55, 144);
  imageMode(CENTER);
  image(this.imagen, this.posX, this.posY, this.tamaño, this.tamaño);

  for (let i = 0; i < this.balas.length; i++) {
    let bala = this.balas[i];

    if (bala.activa) {
      bala.dibujar();
      bala.mover();
    }
  }
}




  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW && this.posX > 0) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW && this.posX < 640) {
      this.moverDerecha();
    } else if (keyCode == ENTER) {
      this.disparar();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }

  moverIzquierda() {
    this.posX -= 10;
  }

  disparar() {
    
    let nuevaBala = new Bala(this.posX, this.posY);
    this.balas.push(nuevaBala);
  }
haDisparadoBala() {
  return this.balas.length > 0;
}

}
