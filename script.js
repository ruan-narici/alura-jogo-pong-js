// Posição X, Y e Diametro D da Bola.
// o Raio ou seja a borda(edge) da bola vai ser igual ao diamentro / 2.
let xBall = 300;
let yBall = 200;
let dBall = 15;
let rBall = dBall / 2;

// Posição X,Y e Largura e Altura Width e Height do Player.
let xPlayer = 10;
let yPlayer = 150;
let wPlayer = 10;
let hPlayer = 100;

// Posição X, Y da CPU
let xCPU = 580;
let yCPU = 150;
let cpuError = 0;

// Definindo quantas casas no eixo Y o Player vai se movimentar.
let mPlayer = 10;

// Velocidade de movimento V da Bola.
// Velocidade aplicada para o eixo X e Y.
let vxBall = 5;
let vyBall = 5;

// Contabilizando as pontuações
let playerPoints = 0;
let cpuPoints = 0;

// Sons do jogo
let soundBackground;
let sonundPoint;
let soundTouchPlayers;

// Carregando os arquivos mp3 antes da execução do Jogo Pong
function preload(){
  soundPoint = loadSound("./Pong - Sons/ponto.mp3");
  soundTouchPlayers = loadSound("./Pong - Sons/raquetada.mp3");
  soundBackground = loadSound("./Pong - Sons/trilha.mp3");
}

// Criando o background e iniciando o som de fundo do jogo
function setup() {
  createCanvas(600, 400);
  soundBackground.loop();
}

// A function draw é responsável pela exibição de todas as functions do jogo
function draw() {
  background(0);
  showBall();
  moveBall();
  directionBall();
  showPlayers(xPlayer, yPlayer);
  showPlayers(xCPU, yCPU);
  movePlayer();
  touchPlayers();
  moveCpu();
  showScore(playerPoints, 230, 50);
  showScore(cpuPoints, 360, 50);
  countPoints();
  CPUerror();
}

// Exibindo a bola
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

// Exibindo os personagens dos Players (BARRAS BRANCAS)
function showPlayers(x, y) {
    rect(x, y, wPlayer, hPlayer);
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

function touchPlayers(){
// Verificando se a bolinha está tocando a borda.
// Nessa verificação primeiro iremos ver se a bola está tocando o eixo X + Largura do Player.
// Após isso, iremos verificar se o eixo Y da bola é menor que o eixo Y do Player.
// Também verificaremos se o eixo Y da bola é maior que o eixo Y do Player.
// Caso todas essas condições forem verdadeiras, iremos mudar a direção da bola.

// Essas condições estão ligadas ao PLAYER.
  if (xBall - rBall < xPlayer + wPlayer &&
     yBall - rBall < yPlayer + hPlayer &&
     yBall - rBall > yPlayer){
    vxBall *= -1;
    soundTouchPlayers.play();
  }
  
// Essas condições estão ligadas a CPU.
    if (xBall + rBall > xCPU &&
     yBall + rBall < yCPU + hPlayer &&
     yBall + rBall > yCPU){
    vxBall *= -1;
    soundTouchPlayers.play();
  }
}

// Movendo a posição Y da CPU de acordo a posição Y da bola
function moveCpu(){
  yCPU = yBall - 50 - cpuError;
}

function CPUerror(){
  if (cpuPoints > playerPoints +1){
    cpuError = -40;
  }
  if (cpuPoints > playerPoints +2){
    cpuError = -80;
  }
  if (cpuPoints < playerPoints){
    cpuError = 0;
  }
}

// Mostrando o placar
function showScore(points, x, y){
  stroke(255);
  fill(color(255, 128, 0));
  rect(x - 35, y - 30, 70, 40);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(points, x, y);
}

// Contabilizando os pontos
function countPoints(){
  if (xBall < 10){
    cpuPoints += 1;
    soundPoint.play();
    xBall = 300;
    yBall = 200;
    vxBall -= vxBall + 6;
    yPlayer = 150;
    yCPU = 150;
  }
    if (xBall > 590){
    playerPoints += 1;
    soundPoint.play();
    xBall = 300;
    yBall = 200;
    vxBall = vxBall + 12;
    yPlayer = 150;
    yCPU = 150;
  }
}