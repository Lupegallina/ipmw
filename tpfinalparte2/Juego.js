
class Juego {
  constructor() {
    this.estado = "menu";
    this.runner;
  }

  dibujar() {
    if (this.estado == "menu") {
      background(0);
      fill(255);
      textSize(40);
      textAlign(CENTER);
      text("MENU PRINCIPAL", 400, 170);

      crearBoton("COMENZAR", 300, 230, 200, 60);
      crearBoton("INSTRUCCIONES", 300, 300, 200, 60);
      crearBoton("CREDITOS", 300, 370, 200, 60);
    }

    if (this.estado == "runner") {
      this.runner.dibujar();

      if (this.runner.finales.habilitarReinicio) {
        crearBoton("VOLVER AL MENU", 300, 300, 200, 60);
      }

      if (this.runner.jugador.posY < 200) {
        crearBoton("VOLVER AL MENU", 300, 300, 200, 60);
      }
    }

    if (this.estado == "creditos") {
      background(0);
      fill(255);
      textAlign(CENTER);
      textSize(35);
      text("CREDITOS", 400, 80);

      textSize(20);
      text("asdasd", 400, 170);
      text("asdasd", 400, 210);
      text("asdasd", 400, 250);
      text("asdasd", 400, 290);

      crearBoton("VOLVER AL MENU", 300, 350, 200, 60);
    }

    if (this.estado == "instrucciones") {
      background(0);
      fill(255);
      textAlign(CENTER);
      textSize(35);
      text("INSTRUCCIONES", 400, 80);

      textSize(20);
      text("asdasd", 400, 160);
      text("asdasd", 400, 200);
      text("asdasd", 400, 240);
      text("asdasd", 400, 280);

      crearBoton("VOLVER AL MENU", 300, 350, 200, 60);
    }
  }

  iniciar() {
    this.runner = new Runner();
    this.runner.iniciarJuego();
    this.estado = "runner";
  }

  volverMenu() {
    this.estado = "menu";
    this.runner = " ";
  }

  mousePres() {
    if (this.estado == "menu") {
      if (mouseX > 300 && mouseX < 500) {

        if (mouseY > 230 && mouseY < 290) {
          this.iniciar();
        }

        if (mouseY > 300 && mouseY < 360) {
          this.estado = "instrucciones";
        }

        if (mouseY > 370 && mouseY < 430) {
          this.estado = "creditos";
        }
      }
    }

    if (this.estado == "creditos" || this.estado == "instrucciones") {
      if (mouseX > 300 && mouseX < 500 && mouseY > 350 && mouseY < 410) {
        this.volverMenu();
      }
    }

    if (this.estado == "runner") {
      if (this.runner.finales.habilitarReinicio && mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
        this.volverMenu();
      }

      if (this.runner.jugador.posY < 200 && mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
        this.volverMenu();
      }
    }
  }

  teclaPres() {
    if (this.estado == "runner") {
      this.runner.teclaPres();
    }
  }
}

function crearBoton(textoBoton, x, y, ancho, alto) {
  rectMode(CORNER);

  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    fill(247, 16, 162);
    stroke(250, 112, 189);
  } else {
    fill(250, 112, 189);
    stroke(247, 16, 162);
  }

  strokeWeight(8);
  rect(x, y, ancho, alto, 12);
  noStroke();

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  strokeWeight(4);
  stroke(0);
  text(textoBoton, x + ancho / 2, y + alto / 2);
  noStroke();
}
