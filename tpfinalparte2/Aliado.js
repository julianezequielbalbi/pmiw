class Aliado {
  constructor(posX, posY) {
    this.imagen = imgAliado;
    this.posX = posX;
    this.posY = posY;
    this.tamaño = 50;
    this.velX = random([-4,4]);
    this.capturado = false;
  }

  dibujar() {
    this.mover();

    
    
    
    
    
    image(this.imagen, this.posX, this.posY, this.tamaño, this.tamaño);
  }

  mover() {
    if(this.capturado){
    this.posX = this.enemigos.posX;
    this.posY = this.enemigos.posY;      
    }else{
    this.posX += this.velX;

    // Rebote en los bordes
    if (this.posX <= 0 || this.posX >= width) {
      this.velX *= -1;      
    }
    }
  }
}
