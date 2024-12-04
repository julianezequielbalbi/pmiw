class Inicio {
  constructor() {
    this.pantallaActual = "principal";
    this.juego = new Juego();
    this.pantalla = new Pantalla(); // Instancia de la nueva clase Pantalla
  }

  mostrarPantalla() {
    if (this.pantallaActual === "principal") {
      this.pantalla.mostrarPrincipal();
    } else if (this.pantallaActual === "instrucciones") {
      this.pantalla.mostrarInstrucciones();
    } else if (this.pantallaActual === "creditos") {
      this.pantalla.mostrarCreditos();
    } else if (this.pantallaActual === "juego") {
      this.juego.dibujar();
    }
  }

  detectarClic() {
    if (this.pantallaActual === "principal") {
      if (this.pantalla.botonJugar.estaPresionado()) {
        this.pantallaActual = "juego";
      } else if (this.pantalla.botonInstrucciones.estaPresionado()) {
        this.pantallaActual = "instrucciones";
      } else if (this.pantalla.botonCreditos.estaPresionado()) {
        this.pantallaActual = "creditos";
      }
    } else if (this.pantallaActual === "instrucciones" || this.pantallaActual === "creditos") {
      if (this.pantalla.botonRegresar.estaPresionado()) {
        this.pantallaActual = "principal";
      }
    }
  }

  teclaPresionada(keyCode) {
    if (this.pantallaActual === "juego") {
      this.juego.teclaPresionada(keyCode);
    }
        if (keyCode === 83) {//tecla S
      if (!sonido.isPlaying()) {
        sonido.loop();
      }else{
        sonido.stop();
      }
    }
  }
}
