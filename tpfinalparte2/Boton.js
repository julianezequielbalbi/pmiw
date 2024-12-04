class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }

  dibujar() {
    fill(100, 150, 200);
    rect(this.x, this.y, this.w, this.h, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }

  estaPresionado() {
    return mouseX > this.x && mouseX < this.x + this.w &&
           mouseY > this.y && mouseY < this.y + this.h;
  }
}
