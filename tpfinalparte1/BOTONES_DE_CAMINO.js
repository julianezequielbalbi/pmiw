
respuesta1="Dejarlo";
respuesta2="No dejarlo";
function caminos() {
  anchoC=160;
  altoC=50;


  //boton1
  Xcamino1=width/2-80;
  Ycamino1=height/2-100;
  push();
  fill(azul);
  rect(Xcamino1, Ycamino1, anchoC, altoC);
  fill(dorado);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(respuesta1, Xcamino1+anchoC/2, Ycamino1+altoC/2);
  pop();
  //boton2
  Xcamino2=width/2-80;
  Ycamino2=height/2;
  push();
  fill(azul);
  rect(Xcamino2, Ycamino2, anchoC, altoC);
  fill(dorado);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(respuesta2, Xcamino2+anchoC/2, Ycamino2+altoC/2);
  pop();
}

function botonescamino() {
  //B1

  if (
    mouseX > Xcamino1 &&
    mouseX < Xcamino1+anchoC &&
    mouseY > Ycamino1 &&
    mouseY < Ycamino1+altoC&&
    escena===3) {
    escena =4;
    imagenes();
  } else if (
    mouseX > Xcamino1 &&
    mouseX < Xcamino1+anchoC &&
    mouseY > Ycamino1 &&
    mouseY < Ycamino1+altoC&&
    escena===10) {
    escena=11;
    imagenes()
  } else if (
    mouseX > Xcamino1 &&
    mouseX < Xcamino1+anchoC &&
    mouseY > Ycamino1 &&
    mouseY < Ycamino1+altoC&&
    escena===13) {
    escena=14;
    imagenes()
  } else if (
    mouseX > Xcamino1 &&
    mouseX < Xcamino1+anchoC &&
    mouseY > Ycamino1 &&
    mouseY < Ycamino1+altoC&&
    escena===29) {
    escena=32;
    imagenes()
  }



  //B2
  if (
    mouseX > Xcamino2 &&
    mouseX < Xcamino2+anchoC &&
    mouseY > Ycamino2 &&
    mouseY < Ycamino2+altoC&&
    escena===3) {
    escena =18;
    imagenes();
  } else if (
    mouseX > Xcamino2 &&
    mouseX < Xcamino2+anchoC &&
    mouseY > Ycamino2 &&
    mouseY < Ycamino2+altoC&&
    escena===10) {
    escena=26;
    imagenes()
  } else if (
    mouseX > Xcamino2 &&
    mouseX < Xcamino2+anchoC &&
    mouseY > Ycamino2 &&
    mouseY < Ycamino2+altoC&&
    escena===13) {
    escena=22;
    imagenes()
  } else if (
    mouseX > Xcamino2 &&
    mouseX < Xcamino2+anchoC &&
    mouseY > Ycamino2 &&
    mouseY < Ycamino2+altoC&&
    escena===29) {
    escena=37;
    imagenes()
  }


  //texto

  if (escena===3) {
    respuesta1="Dejarlo";
    respuesta2="No dejarlo";
  }
  if (escena===10) {
    respuesta1="Respetarlo";
    respuesta2="Romper acuerdo";
  }
  if (escena===13) {
    respuesta1="Atacar";
    respuesta2="Esperar";
  }
  if (escena===29) {
    respuesta1="Atacar";
    respuesta2="Esperar";
  }
}
