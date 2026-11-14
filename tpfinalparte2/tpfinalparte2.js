let juego;

function setup() {
  createCanvas(800, 450);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function mousePressed() {
  juego.mousePres();
}

function keyPressed() {
  juego.teclaPres();
}
