class Obstaculo {
  constructor(Vel) {
    this.posX=random(800, 10000); 
    this.carriles= [200, 300, 400];
    this.posY=random(this.carriles);
    this.vel=Vel;
    this.seRompe=false;
    this.estrella;
  }
  
  dibujar() {
    //image(this.estrella)
    if(!this.seRompe){
   fill(0,100,0)
    rect(this.posX,this.posY,40,40);
    this.mover();
  }  
  }
  posObstaculos() {
   for (let i=0; i<this.cantObstaculos; i++) {
      let posX=random(800, 12000);
      let posY=random(85, 350)
        this.obstaculos[i]=new Obstaculo(posX, posY);
    }
  }
  
  mover() {
   this.posX=this.posX-this.vel;
  }
  
  roto(){
   this.seRompe = true;
  }
}
