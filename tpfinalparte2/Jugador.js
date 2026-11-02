class Jugador {
  constructor() {
    this.vidas=3;
    this.puntos=0;
    this.personaje= new Chica();
  }
  dibujar() {
    this.personaje.dibujar();
  }
  teclaPres() {
    this.personaje.teclaPres();
  }
  herida() {
    this.vidas= this.vidas -1;
  }
  sumarPuntos() {
    this.puntos=this.puntos+10;
  }
  
}
