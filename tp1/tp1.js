/*



  
           ¸¸.•*´¨`♫                       ♫´¨`*•.¸¸
      ¸¸.•*´¨`♫ ───────────────────────────────── ♫´¨`*•.¸¸
 ────═════════════════════════════════════════════════════════════════════────
 
    ♫          │             TP 1                 │    ♫
               │           COMISIÓN 5             │
    ♫          │      Balbi Julian Ezequiel       │ ♫
    ¸¸.•*      │         Legajo: 121113/1         │      *•.¸¸
 
 ────═════════════════════════════════════════════════════════════════════────
 ──═══─────════│ ♫ ──────────────────────────────── ♫  │════──────═══──
 
 







*/

/*

 LINK DE YOUTUBE : " https://www.youtube.com/watch?v=R_m6aRpSEcA "
 
 
 
 */

/*

 
 
/*
 
 */

  let cantidad, lado, circleX, angle=0, xspeed = 2, going = true, victorvasarely, flock;

function preload() {
  victorvasarely = loadImage("./data/victorvasarely.jpg");
}

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  cantidad = 40;
  lado = width/cantidad;
}


function draw() {

  background(166, 166, 166);

  let d = dist (width/2, height/2, mouseX, mouseY);
  image(victorvasarely, 0, 0, width/2.1, height);
  fill(166, 166, 166);



  for (let x = 19; x <= cantidad; x++) {
    for (let y = 0; y <= cantidad; y++) {

      if (going  ) {
        if (x % 2 ==  0 && y  % 2 == 0) {

          fill(222, 106, 38);


          if (y * lado < mouseY+1) {
            fill(30, 38, 185);
          }


          // celeste

          if (x * lado > mouseX) {
            fill(138, 206, 223);
          }



          //

          // MOSTAZA

          ellipse (x*lado+10, y* lado+10, lado, lado);
          fill(48, 200, 18);


          //

          ellipse (x*lado-10, y* lado+10, lado, lado-10);
          fill(249, 193, 80);

          //
          ellipse (x*lado-10, y* lado-10, lado-8, lado);
          fill(236, 236, 22);

          // AMARILLA -roja
          ellipse (x*lado+10, y* lado-10, lado, lado-8);
          fill(31, 255, 69);
        }
      } else {



        fill(222, 106, 38);



        if (y * lado < mouseY+1) {
          fill(30, 38, 185);
        }
        rotate (mouseX, -angle*xspeed);

        // celeste

        if (x * lado > mouseX) {
          fill(138, 206, 223);
        }



        //

        // MOSTAZA

        ellipse (x*lado+10, y* lado+10, lado, lado);
        fill(48, 200, 18);


        //

        ellipse (x*lado-10, y* lado+10, lado, lado-10);
        fill(249, 193, 80);

        //
        ellipse (x*lado-10, y* lado-10, lado-8, lado);
        fill(236, 236, 22);

        // AMARILLA -roja
        ellipse (x*lado+10, y* lado-10, lado, lado-8);
        fill(31, 255, 69);
        translate(mouseX, mouseY);
      }
      if (x % 2 != 0 && y  % 2 == 0) {
        fill(118, 118, 118);
      }
    }
  }
}


function mousePressed() {
  if (going) {
    going = false;
  } else {
    going=true;
  }
}
