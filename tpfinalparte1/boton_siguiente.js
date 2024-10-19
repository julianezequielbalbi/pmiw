function botonsig(){
  posXBotons = width-anchoBoton;
  posYBotons = height/2;
  anchoBotons =140;
  altoBotons = 40;
  
  push();
  fill(azul);
  rect(posXBotons,posYBotons,anchoBotons,altoBotons);
  fill(dorado);
  textSize(22);
  textAlign(CENTER,CENTER);
  text("Siguiente",posXBotons+anchoBotons/2,posYBotons+altoBotons/2);
  pop();
  
}



function clicsigue(){
if (mouseX > posXBotons && mouseX < posXBotons + anchoBotons &&
     mouseY > posYBotons && mouseY < posYBotons + altoBotons&&escena !== 3 && escena !== 10&& escena !== 13&& escena !== 29&& escena !== 39) {
   escena++
   imagenes()
     }
}
