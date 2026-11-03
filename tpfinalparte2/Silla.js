class Silla {
  constructor(Vel) {
    this.posX=random(800, 15000); 
    this.carriles= [200, 300, 400];
    this.posY=random(this.carriles);
    this.vel=Vel;
    this.seRompe=false;
    //this.mesita=loadImage("images/mesa.png");
  }
  
  dibujar() {
    if(!this.pierde){
    //image(this.mesita, this.posX,this.posY,50,50);
    fill(0,0,250);
    rect(this.posX,this.posY,50,50);
    this.mover();
  }  
  }
  posSilla() {
   for (let s=0; s<this.cantSillas; s++) {
      let posX=random(800, 12000);
      let posY=random(85, 350)
        this.silla[s]=new Silla(posX, posY);
    }
  }
  
  mover() {
   this.posX=this.posX-this.vel;
  }
  
  perdio(){
   this.pierde = true;
  }
}
