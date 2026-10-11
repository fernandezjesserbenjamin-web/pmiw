
function dibujarBoton(x, y, ancho, alto, textoBoton) {
  fill(255);
  rect(x, y, ancho, alto);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(textoBoton, x + ancho / 2, y + alto / 2);
}

function detectarClick(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}

function botones(pagina) {
  // boton comenzar en el inicio
  if (pagina === 37) {
    dibujarBoton(190, 300, 150, 40, "CRÉDITOS");
    dibujarBoton(450, 300, 150, 40, "COMENZAR");
  }

  // botones de la pantalla 01
  if (pagina === 0 && millis() - tiempoInicio > 5000) {
    dibujarBoton(100, 400, 250, 40, "Levantarte");
    dibujarBoton(450, 400, 250, 40, "Dormir un rato más");
  }

  // boton siguiente
  if (
    pagina === 1 || pagina === 3 || pagina === 4 || pagina === 5 || pagina === 6 || pagina === 7 || pagina === 8 || pagina === 9 || pagina === 11 || pagina === 14 || pagina === 15 || pagina === 16 || pagina === 17 || pagina === 19 || pagina === 21 || pagina === 23 || pagina === 24 || pagina === 25 || pagina === 26 || pagina === 27 || pagina === 28 || pagina === 30 || pagina === 31 || pagina === 33 || pagina === 35 || pagina === 36 || pagina === 38 || pagina === 39 || pagina === 40 || pagina === 42) {
    dibujarBoton(450, 400, 250, 40, "Siguiente");
  }

  // botones pantalla 02
  if (pagina === 2) {
    dibujarBoton(80, 400, 200, 40, "Los auris");
    dibujarBoton(310, 400, 200, 40, "El cofre");
    dibujarBoton(530, 400, 200, 40, "El relój");
  }

  if (pagina === 34) {
    dibujarBoton(100, 400, 250, 40, "Ir al kiosco");
    dibujarBoton(450, 400, 250, 40, "No comprar nada");
  }

  if (pagina === 10) {
    dibujarBoton(100, 400, 250, 40, "Ir a clases");
    dibujarBoton(450, 400, 250, 40, "Ir con tu amiga");
  }

  // botones de finales
  if (pagina === 41 || pagina === 43 || pagina === 44) {
    dibujarBoton(100, 400, 250, 40, "CRÉDITOS");
    dibujarBoton(450, 400, 250, 40, "REINICIAR");
  }

  if (pagina === 13) {
    dibujarBoton(100, 400, 250, 40, "Facturas");
    dibujarBoton(450, 400, 250, 40, "Budines");
  }

  if (pagina === 29) {
    dibujarBoton(100, 400, 250, 40, "Comprar un yogur");
    dibujarBoton(450, 400, 250, 40, "Comprar unas galletitas");
  }

  if (pagina === 12) {
    dibujarBoton(100, 400, 250, 40, "Ir al cine");
    dibujarBoton(450, 400, 250, 40, "Ir a tomar mates");
  }

  if (pagina === 18) {
    dibujarBoton(100, 400, 250, 40, "Comprar pochoclos");
    dibujarBoton(450, 400, 250, 40, "No comprar nada");
  }

  // boton volver al inicio en creditos
  if (pagina === 45) {
    dibujarBoton(275, 350, 250, 50, "Volver al inicio");
  }
}

 
function mousePressed() {
  // comienzo
  if (inicio === 37) {
    // boton creditos
    if (detectarClick(190, 300, 150, 40)) {
      inicio = 45;
    }
    // boton comenzar
    else if (detectarClick(450, 300, 150, 40)) {
      userStartAudio();
      if (!musicaFondo.isPlaying()) {
        musicaFondo.loop();
      }
      inicio = 0;
      tiempoInicio = millis();
      alarma.play();
    }
  }

  // botones pantalla 01
  else if (inicio === 0 && millis() - tiempoInicio > 5000) {
    if (detectarClick(100, 400, 250, 40)) {
      alarma.stop();
      inicio = 1;
    }
    else if (detectarClick(450, 400, 250, 40)) {
      alarma.stop();
      inicio = 4;
      tiempoInicio = millis();
    }
  }

  // boton pantalla 01
  else if (inicio === 1) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 2;
      tiempoInicio = millis();
    }
  }

  // botones pantalla 02
  else if (inicio === 2) {
    if (detectarClick(80, 400, 200, 40)) {
      opcion = 6;
      inicio = 3;
    }
    else if (detectarClick(310, 400, 200, 40)) {
      opcion = 7;
      inicio = 3;
    }
    else if (detectarClick(530, 400, 200, 40)) {
      opcion = 8;
      inicio = 3;
    }
  }

  // boton pantalla 03
  else if (inicio === 3) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = opcion;
    }
  }

  // botones pantallas 06, 07 y 08
  else if (inicio === 6 || inicio === 7 || inicio === 8) {
    if (detectarClick(450, 400, 250, 40)) {
      camino28 = 1;
      inicio = 34;
    }
  }

  // boton pantalla 04
  else if (inicio === 4) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 5;
      tiempoInicio = millis();
    }
  }

  else if (inicio === 5) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 9;
    }
  }

  // boton pantalla 09
  else if (inicio === 9) {
    if (detectarClick(450, 400, 250, 40)) {
      camino28 = 2;
      inicio = 28;
    }
  }

  // botones pantalla 34
  else if (inicio === 34) {
    if (detectarClick(100, 400, 250, 40)) {
      camino28 = 1;
      inicio = 28;
    }
    else if (detectarClick(450, 400, 250, 40)) {
      inicio = 10;
    }
  }

  else if (inicio === 10) {
    if (detectarClick(100, 400, 250, 40)) {
      inicio = 11;
    }
    else if (detectarClick(450, 400, 250, 40)) {
      inicio = 12;
    }
  }

  // pantalla 12
  else if (inicio === 12) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 13;
    }
    else if (detectarClick(100, 400, 250, 40)) {
      inicio = 17;
    }
  }

  else if (inicio === 13) {
    if (detectarClick(100, 400, 250, 40)) {
      inicio = 14;
    }
    else if (detectarClick(450, 400, 250, 40)) {
      inicio = 15;
    }
  }

  else if (inicio === 14) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 16;
    }
  }

  else if (inicio === 16 || inicio === 40) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 42;
    }
  }

  else if (inicio === 15) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 40;
    }
  }
  else if (inicio === 11) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 27;
    }
  }
  else if (inicio === 27) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 23;
    }
  }

  else if (inicio === 23) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 25;
    }
  }

  else if (inicio === 25) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 41;
    }
  }

  else if (inicio === 19) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 39;
    }
  }

  else if (inicio === 38 || inicio === 39) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 21;
    }
  }

  // botones pantalla 29
  else if (inicio === 29) {
    if (detectarClick(100, 400, 250, 40)) {
      inicio = 30;
    }
    else if (detectarClick(450, 400, 250, 40)) {
      inicio = 31;
    }
  }

  else if (inicio === 18) {
    if (detectarClick(100, 400, 250, 40)) {
      inicio = 19;
    }
    else if (detectarClick(450, 400, 250, 40)) {
      inicio = 38;
    }
  }

  // botones de finales
  else if (inicio === 41 || inicio === 43 || inicio === 44) {
    if (detectarClick(100, 400, 250, 40)) {
      inicio = 45;
    }
    else if (detectarClick(450, 400, 250, 40)) {
      inicio = 37;
    }
  }

  // pantalla 28
  else if (inicio === 28) {
    if (detectarClick(450, 400, 250, 40)) {
      if (camino28 === 1) {
        inicio = 35;
      }
      else if (camino28 === 2) {
        inicio = 29;
      }
    }
  }

  else if (inicio === 35) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 36;
    }
  }

  else if (inicio === 30 || inicio === 31) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 34;
    }
  }

  else if (inicio === 36) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 10;
    }
  }

  else if (inicio === 17) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 18;
    }
  }

  else if (inicio === 42) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 26;
    }
  }

  else if (inicio === 26) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 43;
    }
  }

  else if (inicio === 21) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 24;
    }
  }

  else if (inicio === 24) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 33;
    }
  }

  else if (inicio === 33) {
    if (detectarClick(450, 400, 250, 40)) {
      inicio = 44;
    }
  }

  // volver al inicio desde creditos
  else if (inicio === 45) {
    if (detectarClick(275, 350, 250, 50)) {
      inicio = 37;
    }
  }
}
