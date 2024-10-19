function botonmusica(x, y) {
  botonmusicax=x;
  botonmusicay=y;
  botonmusicaancho=50
    botonmusicaalto=50

    push();
  fill(azul);
  rect(botonmusicax, botonmusicay, botonmusicaancho, botonmusicaalto);
  fill(dorado);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Musica", botonmusicax+botonmusicaancho/2, botonmusicay+botonmusicaalto/2);
  pop();
}

function reproducirmusica() {
  if (mouseX > botonmusicax && mouseX < botonmusicax + botonmusicaancho &&
    mouseY > botonmusicay && mouseY < botonmusicay + botonmusicaalto&&escena===0) {


    if (sonido.isPlaying()) {
      sonido.stop();
    } else {
      sonido.loop();
    }
  }



}
