class Escena {
  constructor() {
    this.pantallaActual=0; 
    this.menu=loadImage("images/menu4.png");
    this.fondoDelMenu=loadImage("images/MenuFondo.png");
  }
  dibujarMenuPrincipal(){
    background(0);
    image(this.fondoDelMenu,0,0,width,height);
    image(this.menu,100,80,550,300);
    fill(255);
    //rect(310,215,130,40);
    //rect(310,270,130,40);
    textSize(40);
    text("", 250, 225);
  }
 dibujarFinalMalo() {
    background(0);
    fill(255);
    textSize(40);
    text("FINAL MALO", 250, 225);
  }

  dibujarFinalBueno() {
    background(0);
    fill(255);
    textSize(40);
    text("ESCAPASTE", 250, 225);
  }

interaccionMenuIniciar() {
  if (mouseIsPressed &&
      mouseX >= 310 && mouseX <= 440 &&
      mouseY >= 215 && mouseY <= 255) {
    this.pantallaActual = 1;
  }
}

interaccionMenuCreditos() {
  if (mouseIsPressed &&
      mouseX >= 310 && mouseX <= 440 &&
      mouseY >= 270 && mouseY <= 310) {
    this.pantallaActual = 1;
  }
}
}
