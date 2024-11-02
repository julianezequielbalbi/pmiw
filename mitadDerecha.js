function colorear(coloresAlterados) {
  if (coloresAlterados) {
    for (let i = width/2; i < width; i = i + 20) {
      for (let j = 0; j < height; j = j + 20) {
        rect(i, j, 19)
          fill (random(255), random(255), random(255))
          noStroke();
        ellipse(i+10, j+10, 17)
          fill(random(0, 255))
      }
    }
  }
}

function mitadDerecha (x, y, ancho, alto, resultado) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < ancho + alto) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
