let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400);
  background(220);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  stroke("rgb(17,17,17),52)");
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 100);

  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 3;
  }
  
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 3;
  }
  
   if (mouseY < posicaoVertical) {
    posicaoVertical--;
   }
  
  if (mouseY > posicaoVertical) {
    posicaoVertical++;  
}
}
