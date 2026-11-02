class Juego {
  constructor() {
    this.fondo=loadImage("images/background.png");
    this.jugador= new Jugador();
    this.obstaculos=[];
    this.cantObstaculos=50;
    this.posX=0;
    this.vel=4;
    this.interactuar;
  }
  iniciarJuego() {
    for (let i=0; i<this.cantObstaculos; i++) {
        this.obstaculos[i]=new Obstaculo(this.vel);
    }
  }
  dibujar() {
    background(240);
    this.dibujarFondo();
    this.dibujarHud();
    this.dibujarObstaculos();
    this.jugador.dibujar();
    this.colision();
  }
  colision() {
    for (let i=0; i<this.cantObstaculos; i++) {
      if (!this.obstaculos[i].seRompe && dist(this.obstaculos[i].posX, this.obstaculos[i].posY,
        this.jugador.personaje.posX, this.jugador.personaje.posY)<=50)
      {
        this.jugador.herida();
        this.obstaculos[i].roto();
      }
    }
  }

  dibujarObstaculos() {
    for (let i=0; i<this.cantObstaculos; i++) {
      this.obstaculos[i].dibujar();
    }
  }

  dibujarHud() {
    fill(255);
    textSize(20);
    text(this.jugador.vidas, 700, 40);
    text(this.jugador.puntos, 100, 40);
  }

  dibujarFondo() {

    image(this.fondo, this.posX, 0);
    image(this.fondo, this.posX+1182, 0);
    this.posX-=this.vel;
    if (this.posX <= -1182) {
      this.posX = 0;
    }
  }

  teclaPres() {
    this.jugador.teclaPres();
  }

  reiniciar() {
  }
}
