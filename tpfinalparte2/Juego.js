class Juego {
  constructor(){
    this.imagen = imgFondo;
    this.enemigos = [];
    this.cantidadEnemigos = 5;
    this.aliados = [];
    this.cantidadAliados = 5;
    this.personaje = new Personaje();
    this.estado = 'jugando'; //jugando,victoria o derrota

    // Crear enemigos
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos.push(new Enemigo(random(width), random(0, 50)));
    }

    // Crear aliados
    for (let a = 0; a < this.cantidadAliados; a++) {
      this.aliados.push(new Aliado(random(width), 440));
    }
  }

  dibujar() {
    background(0);
    image(this.imagen, width/2, height/2, 640,480);
    if (this.estado === 'jugando') {
      this.personaje.dibujar();

      // Dibujar enemigos
      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].dibujar();
      }

      // Dibujar aliados
      for (let a = 0; a < this.aliados.length; a++) {
        this.aliados[a].dibujar();
      }
      this.detectarColisionesEntreEnemigosYAliados();
      this.controlarDisparosAEnemigos();
      this.verificarVictoria();
      this.verificarDerrota();
    } else if (this.estado === 'victoria') {
      this.mostrarVictoria();
    } else if (this.estado === 'derrota') {
      this.mostrarDerrota();
    }
  }

  teclaPresionada(keyCode) {
    if (this.estado === 'jugando') {
      this.personaje.teclaPresionada(keyCode);
    } else if (this.estado === 'victoria' || this.estado === 'derrota') {
      if (keyCode === 82) {// tecla R
        this.reiniciar();// reiniciar
        pantallaActiva = 1;
      }
    }
  }

  detectarColisionesEntreEnemigosYAliados() {
    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      for (let j = 0; j < this.aliados.length; j++) {
        let aliado = this.aliados[j];
        enemigo.colisionarConAliado(aliado); // Actualiza la posición del aliado cuando choca
      }
    }
  }

  controlarDisparosAEnemigos() {
    for (let i = 0; i < this.personaje.balas.length; i++) {
      let bala = this.personaje.balas[i];


      for (let j = 0; j < this.enemigos.length; j++) {
        let enemigo = this.enemigos[j];

        if (enemigo.vida && enemigo.haTocadoLaBala(bala)) {
          enemigo.matar(); // Marca al enemigo como muerto y desactiva la bala
        }
      }
    }
  }
  verificarVictoria() {
    if (this.enemigos.every(enemigo => !enemigo.vida)) {
      this.estado = 'victoria';
    }
  }

  
  verificarDerrota() {
    let aliadosFuera = this.aliados.filter(aliado => aliado.posY < 0).length;
    if (aliadosFuera >= 1) {
      this.estado = 'derrota';
    }
  }
  mostrarVictoria() {
    fill(0);
    push();
    rectMode(CENTER,CENTER);
    fill(13, 56, 180);
    rect(width/2,height/2,width,height/2);
    pop();
    textSize(32);
    textAlign(CENTER, CENTER);
    text('¡Victoria para Ventormenta!', width / 2, height / 2 - 40);
    textSize(20);
    text('Haz ganado el juego. Presiona "R" para volver a jugar.', width / 2, height / 2 + 40);
 
}
  mostrarDerrota() {
    fill(0);
    push();
    rectMode(CENTER,CENTER);
    fill(162, 0, 0);
    rect(width/2,height/2,width,height/2);
    pop();
    textSize(32);
    textAlign(CENTER, CENTER);
    text('¡Perdiste,La Horda arraza!', width / 2, height / 2 - 40);
    textSize(20);
    text('Se han llevado a uno de los tuyos. Presiona "R" para volver a jugar.', width / 2, height / 2 + 40);
 
}

  // Reiniciar el juego
  reiniciar() {
    this.estado = 'jugando';
    this.enemigos = [];
    this.aliados = [];
    this.personaje = new Personaje();

    // Crear enemigos
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos.push(new Enemigo(random(width), random(0, 50)));
    }

    // Crear aliados
    for (let a = 0; a < this.cantidadAliados; a++) {
      this.aliados.push(new Aliado(random(width), 440));
    }
  }
}
