
function textbox() {
  let centrocuadrox = width/2;
  let centrocuadroy = height-80;

push();
  fill(azul);  
  stroke(0);  
  rectMode(CENTER);
  rect(centrocuadrox, centrocuadroy, anchopantalla - 10, 100);
  fill(255);
  rectMode(CORNER);
  textSize(16);
  text(dialogo[escena], 20, centrocuadroy-35,anchopantalla-20);
  pop();
}
