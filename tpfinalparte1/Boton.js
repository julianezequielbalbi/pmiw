//boton(width/2-70,height/2,140, 40,azul,"Comenzar",dorado);
function boton(x, y, ancho, alto, colorBoton, texto, colorTexto) {
  let XBoton = x
    let YBoton = y
    let AnchoBoton = ancho
    let AltoBoton = alto


    push();
  fill(colorBoton);
  rect(XBoton, YBoton, AnchoBoton, AltoBoton);
  textSize(22);
  textAlign(CENTER, CENTER);
  fill(colorTexto);
  text(texto, XBoton+AnchoBoton/2, YBoton+AltoBoton/2);
  pop();
}


function clickBoton() {
  //Titulo
  if (mouseX > width/2-70 && mouseX < width/2-70 + 140 &&
    mouseY > height/2 && mouseY < height/2 + 40&&escena===0) {
    escena=1;
    imagenes()
  }
  //Musica
    if (mouseX > 0 && mouseX < 0 + 60 &&
    mouseY > 0 && mouseY < 0 + 60&&escena===0) {
     print("musica");
     if (sonido.isPlaying()) {
      sonido.stop();
    } else {
      sonido.loop();
    }
//  boton(0, 0, 60, 60, azul, "Musica", dorado);
  }
  
  
  //Siguiente
  if (mouseX > width-140 && mouseX < width-140 + 140 &&
    mouseY > height/2 && mouseY < height/2 + 40 && escena !== 3 && escena !== 10&& escena !== 13&& escena !== 29&& escena !== 39) {
    escena++;
    imagenes();
  }


  //BOTON A
  if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2-100 &&
    mouseY < height/2-100+50&&
    escena===3) {
    escena =4;
    imagenes();
  } else if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2-100 &&
    mouseY < height/2-100+50&&
    escena===10) {
    escena=11;
    imagenes()
  } else if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2-100 &&
    mouseY < height/2-100+50&&
    escena===13) {
    escena=14;
    imagenes()
  } else if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2-100 &&
    mouseY < height/2-100+50&&
    escena===29) {
    escena=32;
    imagenes()
  }

  //Boton B
  if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2 &&
    mouseY < height/2+50&&
    escena===3) {
    escena =18;
    imagenes();
  } else if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2 &&
    mouseY < height/2+50&&
    escena===10) {
    escena=26;
    imagenes()
  } else if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2 &&
    mouseY < height/2+50&&
    escena===13) {
    escena=22;
    imagenes()
  } else if (
    mouseX > width/2-80 &&
    mouseX < width/2-80+160 &&
    mouseY > height/2 &&
    mouseY < height/2+50&&
    escena===29) {
    escena=37;
    imagenes()
  }

  //Reinicio
  if (
    mouseX > width/2-100 &&
    mouseX < width/2-100+200 &&
    mouseY > height-150 &&
    mouseY < height-150+80&&
    escena===39) {
      if(crono===30){
      escena=0;
      imagenes()
      }
    //boton(width/2-100,height-150,200, 80,azul,"Reiniciar",dorado);
  }
}
