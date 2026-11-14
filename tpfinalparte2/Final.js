class Final {
  constructor() {
    this.fondoFinalMalo=loadImage("images/background3.png");
    this.personajeVarado=loadImage("images/Varada.png");
    this.posX = -30;
    this.rotacion = 0;
    this.habilitarReinicio = false;
  }
  
 dibujarFinalMalo() {
    image(this.fondoFinalMalo,0,0);
    this.posX += 1;
    this.rotacion += 0.01;
    push();
    translate(this.posX, 225);
    rotate(this.rotacion);
    imageMode(CENTER);
    image(this.personajeVarado, 0, 0);
    imageMode(CORNER);
    pop();
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("PERDISTE", 400, 225);
    if(this.posX >= 300){
    this.habilitarReinicio = true;
    }
  }

  dibujarFinalBueno() {
    background(0);
    fill(255);
    textSize(40);
    text("ESCAPASTE", 250, 225);
  }
}
