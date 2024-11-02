/*

 
 
 
           ¸¸.•*´¨`♫                 ♫´¨`*•.¸¸
 ¸¸.•*´¨`♫ ───────────────────────────────── ♫´¨`*•.¸¸
 ────═════════════════════════════════════════════════════════════════════────
 
 ♫          │             TP 1 REC             │    ♫
            │           COMISIÓN 5             │
 ♫          │      Balbi Julian Ezequiel       │ ♫
 ¸¸.•*      │         Legajo: 121113/1         │      *•.¸¸
 
 ────═════════════════════════════════════════════════════════════════════────
 ──═══──════│ ♫ ─────────────────────────── ♫  │════──═══──
 
 
 
 
 
 
 
 
 
 */

/*

 LINK DE YOUTUBE : " https://www.youtube.com/watch?v=R_m6aRpSEcA " (video anterior)
 
 CLICK en la pantalla del sector izquierdo para PAUSAR,
 CLiCK en la pantalla del sector derecho para alterar los colores.
 
 
 */



let victorVasarely, cantidad, coloresAlterados = true, resultado;

function preload() {
  victorVasarely = loadImage("./data/victorVasarely.jpg");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  cantidad = width/20;
  image(victorVasarely, 0, 0, width/2, height);
  colorear(coloresAlterados);
 }
 
function mousePressed() {
  if (mitadDerecha(400, 0, width/2, height, resultado)) {
    coloresAlterados=true;
  } else {
    coloresAlterados=false;
  }
}
