let juego;

function setup() {
createCanvas(800, 450);
juego= new Juego();
juego.iniciarJuego();
}

function draw() {
juego.dibujar();
console.log(juego.posX)
}

function keyPressed(){
juego.teclaPres();
}
