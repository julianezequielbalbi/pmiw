function dibujarPantalla(ancho,alto) {

 //FONDO
  image(art, 0, 0, ancho, alto);

  if (escena===0) {
// Titulo
    push();
    fill(dorado);
    textSize(100);
    stroke(10);
    strokeWeight(8);
    textAlign(CENTER, CENTER);
    text("WARCRAFT", width/2, 100);
    pop();
    //B TITULO
    boton(width/2-70, height/2, 140, 40, azul, "Comenzar", dorado);
    
    
    //B Musica
  
    boton(0, 0, 60, 60, azul, "Musica", dorado);
  }

  if (escena>0) {
    CuadroTexto();
  }

  if (escena>0&&escena!== 3 && escena !== 10&& escena !== 13&& escena !== 29&& escena !== 39) {
    //B SIGUIENTE
    boton(width-140, height/2, 140, 40, azul, "Siguiente", dorado);

  }
  //Desiciones
  if (escena ===3||escena ===10||escena ===13||escena ===29) {
    let textoBotonA = "";
    let textoBotonB = "";

    if (escena === 3) {
      textoBotonA = "Dejarlo";
      textoBotonB = "No dejarlo";
    } else if (escena === 10) {
      textoBotonA = "Respetarlo";
      textoBotonB = "Romper acuerdo";
    } else if (escena === 13) {
      textoBotonA = "Atacar";
      textoBotonB = "Esperar";
    } else if (escena === 29) {
      textoBotonA = "Atacar";
      textoBotonB = "Esperar";
    }

    //A
    boton(width/2-80, height/2-100, 160, 50, azul, textoBotonA, dorado);


    //B
    boton(width/2-80, height/2, 160, 50, azul, textoBotonB, dorado);
  }
  //FINAL
  if (escena ===16||escena ===20||escena ===24||escena ===30||escena ===35) {
    escena = 39;
  }

  if (escena == 39) {
    // PANTALLA FINAL Y CREDITOS
    if (crono > 30) {
      crono--;
    }
    //Fondo final
    fill(0);
    rect(0, 0, width, height);

    // Texto de créditos
    fill(222, 111, 22);
    push();
    textSize(25);
    textAlign(CENTER);
    text(
      "WARCRAFT: El origen \nPelicula dirigida y coescrita por Duncan Jones\nbasada en el universo de Warcraft\ncreado por Blizzard Entertainment\nTP FINAL PARTE 1\nIntegrantes del grupo:\nInchazu Mateo Agustin (91427/6)\nBalbi Julian Ezequiel (12113/1)", width / 2, crono);
    pop();

    if (crono === 30) {

      boton(width/2-100, height-150, 200, 80, azul, "Reiniciar", dorado);
    }
  }

  if (escena ===0) {
    crono = altopantalla;
  }
}

function imagenes() {
  let rutaImagen = "data/escenas/" + escena + ".jpg";
  art = loadImage(rutaImagen);
}
