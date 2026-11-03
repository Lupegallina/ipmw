class Jugador {
  constructor() {
    this.puntos=0;
    this.personaje= new Chica();
  }
  dibujar() {
    this.personaje.dibujar();
  }
  teclaPres() {
    this.personaje.teclaPres();
  }
  sumarPuntos() {
    this.puntos= this.puntos +10;
  }
  
}
