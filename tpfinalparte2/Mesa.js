class Mesa {
  constructor(Vel) {
    this.posX=random(800, 15000); 
    this.carriles= [200, 300, 400];
    this.posY=random(this.carriles);
    this.vel=Vel;
    this.pierde=false;
    //this.mesita=loadImage("images/mesa.png");
  }
  
  dibujar() {
    if(!this.pierde){
    //image(this.mesita, this.posX,this.posY,50,50);
    fill(255,0,0);
    rect(this.posX,this.posY,50,50);
    this.mover();
  }  
  }
  posMesa() {
   for (let m=0; m<this.cantMesas; m++) {
      let posX=random(800, 12000);
      let posY=random(85, 350)
        this.mesas[m]=new Mesa(posX, posY);
    }
  }
  
  mover() {
   this.posX=this.posX-this.vel;
  }
  
  perdio(){
   this.pierde = true;
  }
}
