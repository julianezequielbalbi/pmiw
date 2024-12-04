class Enemigo {
  constructor(posX, posY) {
    this.imagen = imgEnemigo; 
    this.posX = posX;
    this.posY = posY;
    this.tamaño = 55;
    this.velX = random([-1, 1]); 
    this.velY = random([-1, 1]);
    this.vida = true;
  }

  dibujar() {
    if (this.vida) {
      this.mover();
      fill(255, 0, 0);
      
      image(this.imagen, this.posX, this.posY, this.tamaño, this.tamaño);
    }
  }

  mover() {
    this.posX += this.velX;
    this.posY += this.velY;

    // rebota en el borde
    if (this.posX <= 0 || this.posX >= width) {
      this.velX *= -1;
    }
    if (this.posY <= 0 || this.posY >= height) {
      this.velY *= -1; // Reversa la dirección en Y
    }
  }

  // Detectar el choque contra aldeano
  colisionarConAliado(aliado) {
    if (this.vida) {
      if (dist(this.posX, this.posY, aliado.posX, aliado.posY) < (this.tamaño / 2 + aliado.tamaño / 2)) {
        // Si colisiona, el aliado se mueve junto al enemigo
        aliado.posX = this.posX;
        aliado.posY = this.posY;
        //ir hacia arriba
        this.velY = -3;
        return true;
      }
    }
    return false;
  }

  estaVivo() {}

  matar() {
    this.vida = false;
  }

  haTocadoLaBala(bala) {
    if (this.vida) { // solo colisiona si el enemigo está vivo
      return dist(this.posX, this.posY, bala.posX, bala.posY) < (this.tamaño / 2 + bala.tamaño / 2);
    }
    return false;
  }
}
