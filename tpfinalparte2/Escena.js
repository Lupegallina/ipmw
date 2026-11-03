class Escena {
  constructor() {
    
    this.finalBueno;
    this.finalMalo;
  }
 dibujarFinalMalo() {
    background(0);
    fill(255);
    textSize(40);
    text("TE ATRAPARON", 250, 225);
  }

  dibujarFinalBueno() {
    background(0);
    fill(255);
    textSize(40);
    text("ESCAPASTE", 250, 225);
  }
}
