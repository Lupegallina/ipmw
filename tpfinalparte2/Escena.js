class Escena {
  constructor() {
    
    this.finalBueno;
    this.finalMalo;
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
}
