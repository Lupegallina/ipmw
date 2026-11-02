class Chica {
  constructor() {

    this.posX=300;
    this.posY=300;

    this.spritesCorrer = [];
    this.spritesSaltar = [];
    this.spritesDeslizar = [];

    for (let i=0; i<6; i++) {
      this.spritesCorrer[i] = loadImage("images/Corriendo_" + i + ".png");
    }

    for (let i=0; i<7; i++) {
      this.spritesSaltar[i] = loadImage("images/Saltando_" + i + ".png");
    }

    for (let i=0; i<6; i++) {
      this.spritesDeslizar[i] = loadImage("images/Deslizando_" + i + ".png");
    }

    this.accionActual = "correr";
    this.spriteActual = 0;
    this.animVelocidad = 0.15;
    
  }

  correr(){
  this.actualizarSprites();
  this.animar(this.spritesCorrer);
  }
  
  saltar(){
  this.actualizarSprites();
  this.animar(this.spritesSaltar);
  }
  
  deslizar(){
  this.actualizarSprites();
  this.animar(this.spritesDeslizar);
  }

  actualizarSprites() {
    this.spriteActual += this.animVelocidad;
    if (this.accionActual == "correr") {
      if (floor(this.spriteActual) >= 6) {
        this.spriteActual = 0;
      }
    }
    if (this.accionActual == "saltar") {
      if (floor(this.spriteActual) >= 6) {
        this.accionActual = "correr";
      }
    }
    if (this.accionActual == "deslizar") {
      if (floor(this.spriteActual) >= 5) {
        this.accionActual = "correr";
      }
    }
  }
  
  animar(animacion) {
    fill(0,255,255,50)
    rect(this.posX-20, this.posY-40, 55, 84);
    imageMode(CENTER);
    image(animacion[floor(this.spriteActual)], this.posX, this.posY);
    imageMode(CORNER)
      console.log(round(this.spriteActual))
  }

  dibujar() {
    if (this.accionActual == "correr") {
      this.correr();
    }
    else if (this.accionActual == "saltar") {
      this.saltar();
    }
    else if (this.accionActual == "deslizar") {
      this.deslizar();
    }
  }

  teclaPres() {
    if (keyIsDown(UP_ARROW) && this.posY != 200) {
      this.posY= this.posY-100;
    } else if (keyIsDown(DOWN_ARROW) && this.posY != 400) {
      this.posY= this.posY+100;
    }
    if (keyIsDown(32) && (this.accionActual == "correr" || this.accionActual == "deslizar")) {
      this.accionActual = "saltar";
      this.spriteActual = 0;
    }
    if (keyIsDown(SHIFT) && this.accionActual == "correr") {
      this.accionActual = "deslizar";
      this.spriteActual = 0;
    }
  }
}
