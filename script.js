// Posição X, Y e Diametro D da Bola.
// o Raio ou seja a borda(edge) da bola vai ser igual ao diamentro / 2.
let xBall = 300;
let yBall = 200;
let dBall = 15;
let rBall = dBall / 2;

// Posição X,Y e Largura e Altura Width e Height do Player.
let xPlayer = 5;
let yPlayer = 150;
let wPlayer = 10;
let hPlayer = 100;

// Definindo quantas casas no eixo Y o Player vai se movimentar.
let mPlayer = 10;

// Velocidade de movimento V da Bola.
// Velocidade aplicada para o eixo X e Y.
let vxBall = 5;
let vyBall = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showBall();
  moveBall();
  directionBall();
  showPlayer();
  movePlayer();
  touchPlayer();
}

function showBall() {
    circle(xBall, yBall, dBall);
}

function moveBall() {
// Aplicando o valor da velocidade da bola.
// Essa fórmula faz com que a posição da bola seja igual a ela mesma mais a velocidade.
// Podemos escrever de duas formas: (xBall = xBall + vxBall) ou (xBall += vxBall).
// O resultado é o mesmo!
  xBall += vxBall;
  yBall += vyBall;
}

function directionBall() {
// Essa fórmula faz com que a direção da velocidade da bola vxBall e vyBall sejam alteradas.
// Essa alteração é realizada toda vez que a posição da bola é maior ou menor que o background.
  if (xBall + rBall > width ||
     xBall - rBall < 0) {
    vxBall *= -1;
      }
  if (yBall + rBall > height ||
     yBall - rBall < 0) {
    vyBall *= -1;
      }
}

function showPlayer() {
    rect(xPlayer, yPlayer, wPlayer, hPlayer);
}

function movePlayer(){
// Movimentando o Player para cima.
  if (keyIsDown(UP_ARROW)) {
    yPlayer -= mPlayer;
  }
    if (keyIsDown(DOWN_ARROW)) {
// Movimentando o Player para baixo.
    yPlayer += mPlayer;
  }
}

function touchPlayer(){
// Verificando se a bolinha está tocando a borda.
// Nessa verificação primeiro iremos ver se a bola está tocando o eixo X + Largura do Player.
// Após isso, iremos verificar se o eixo Y da bola é menor que o eixo Y do Player.
// Também verificaremos se o eixo Y da bola é maior que o eixo Y do Player.
// Caso todas essas condições forem verdadeiras, iremos mudar a direção da bola.

  if (xBall - rBall < xPlayer + wPlayer &&
     yBall - rBall < yPlayer + hPlayer &&
     yBall + rBall > yPlayer){
    vxBall *= -1;
  }
}