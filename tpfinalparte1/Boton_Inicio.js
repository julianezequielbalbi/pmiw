function botont(){
  posXBoton = width/2-70;
  posYBoton = height/2;
  anchoBoton =140;
  altoBoton = 40;
  
  
   push();
  fill(azul);
  rect(posXBoton,posYBoton,anchoBoton,altoBoton);
  fill(0);
  textSize(22);
  textAlign(CENTER,CENTER);
  fill(dorado);
  text("COMENZAR",posXBoton+anchoBoton/2,posYBoton+altoBoton/2);
  textSize(100);
  stroke(10);
  strokeWeight(8);
  //titulo
  text("WARCRAFT",width/2,100);
  pop();
}


function clickinicio(){
if (mouseX > posXBoton && mouseX < posXBoton + anchoBoton &&
     mouseY > posYBoton && mouseY < posYBoton + altoBoton&&escena===0) {
   escena++
   imagenes()
     }
}

  
