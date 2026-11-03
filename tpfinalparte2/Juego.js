class Juego {
  constructor() {
    this.fondo=loadImage("images/background.png");
    this.jugador= new Jugador();
    this.monedas=[];
    this.mesas=[];
    this.sillas=[];
    this.cantMonedas=50;
    this.cantMesas=50;
    this.cantSillas=50;
    this.posX=0;
    this.vel=4;
    this.interactuar;
    this.escena= new Escena();
  }
  iniciarJuego() {
    for (let i=0; i<this.cantMonedas; i++) {
      this.monedas[i]=new Moneda(this.vel);
    }
    for (let m=0; m<this.cantMesas; m++) {
      this.mesas[m]= new Mesa(this.vel);
    }
    for (let s=0; s<this.cantSillas; s++) {
      this.sillas[s]= new Silla(this.vel);
    }
  }
  dibujar() {
      if (this.escena.finalMalo) {
        this.escena.dibujarFinalMalo();
      } else {
        background(240);
        this.dibujarFondo();
        this.dibujarHud();
        this.dibujarCosas();
        this.jugador.dibujar();
        this.colision();
      }
    }
    colision() {
      for (let i=0; i<this.cantMonedas; i++) {
        if (!this.monedas[i].seRompe && dist(this.monedas[i].posX, this.monedas[i].posY,
          this.jugador.personaje.posX, this.jugador.personaje.posY)<=50){
          this.jugador.sumarPuntos();
          this.monedas[i].roto();
        }
      }
      for (let m=0; m<this.cantMesas; m++) {
        if (!this.mesas[m].pierde && dist(this.mesas[m].posX, this.mesas[m].posY,
          this.jugador.personaje.posX, this.jugador.personaje.posY)<=50)
        {
          this.mesas[m].perdio();
          this.escena.finalMalo=true;
        }
      }
      for (let s=0; s<this.cantMesas; s++) {
        if (!this.sillas[s].pierde && dist(this.sillas[s].posX, this.sillas[s].posY,
          this.jugador.personaje.posX, this.jugador.personaje.posY)<=50)
        {
          this.sillas[s].perdio();
          this.escena.finalMalo=true;
        }
      }
    }

    dibujarCosas() {
      for (let i=0; i<this.cantMonedas; i++) {
        this.monedas[i].dibujar();
      }
      for (let m=0; m<this.cantMesas; m++) {
        this.mesas[m].dibujar();
      }
      for (let s=0; s<this.cantSillas; s++) {
        this.sillas[s].dibujar();
      }
    }

    dibujarHud() {
      fill(255);
      textSize(20);
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
