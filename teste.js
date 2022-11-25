// Var Ball
let pxBall = 400;
let pyBall = 150;
let dmBall = 20;
let rdBall = dmBall /2;
let vlBall = 10;
let dirBall = 2;

// Var Player
let pxPlayer = 10;
let pyPlayer = 100;
let wwPlayer = 10;
let hhPlayer = 100;

// Var CPU
let pxCPU = 580;
let pyCPU = 100;
let wwCPU = 10;
let hhCPU = 100;


// Var Canvas
let vwidth = 600;
let vheight = 300;

// Var pts
let pts_CPU = 0;
let pts_PLAYER = 0;

function setup(){
    createCanvas(vwidth,vheight)
}

// Função responsável pela exibição dos elementos.
function draw(){
    background(0);
    showBall();
    showPlayer();
    movesBall();
    ballTouchPlayer();
    updownPlayer();
    showYball();
    showYPlayer();
    countPts();
    showPts();
    showCPU();
    moveCPU();
    showYCPU();
    showvelBall();
    regVelBal();
}

function showBall(){
    let c = color(255, 204, 0);
    fill(c);
    circle(pxBall,pyBall,dmBall);
}

function showPlayer(){
    let c = color(175, 100, 220);
    fill(c);
    let blueValue = blue(c);
    fill(0, 0, blueValue);
    rect(pxPlayer,pyPlayer, wwPlayer, hhPlayer);
}

function showCPU(){
    let c = color(255, 204, 0);
    fill(c);
    let redValue = red(c);
    fill(redValue, 0, 0);
    rect(pxCPU,pyCPU, wwCPU, hhCPU);
}

function movesBall(){
    pxBall += vlBall;
    if (pxBall + rdBall > vwidth) {
        vlBall *= -1;
    }
    if (pxBall - rdBall < 0) {
        vlBall *= -1;
    }
    pyBall += dirBall;
    if (pyBall + rdBall > vheight) {
        dirBall *= -1;
    }
    if (pyBall - rdBall < 0) {
        dirBall *= -1;
    }
}

function updownPlayer(){
    if (keyIsDown(UP_ARROW)){
        pyPlayer -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        pyPlayer += 10;
    }
}

function ballTouchPlayer(){
    if (pxBall - rdBall < pxPlayer + wwPlayer &&
        pyBall - rdBall < pyPlayer + hhPlayer &&
        pyBall - rdBall > pyPlayer) {
        vlBall *= -1;
        vlBall += 0.1;
    }
    if (pxBall + rdBall > pxCPU &&
        pyBall + rdBall < pyCPU + hhCPU &&
        pyBall + rdBall > pyCPU) {
        vlBall *= -1;
        vlBall -= 0.1;
    }
}

function regVelBal(){
    if (vlBall > 40) {
        vlBall = 8;
        pts_CPU = 0;
        pts_PLAYER = 0;
    }
}

function moveCPU(){
    pyCPU = pyBall - 50;
}

function showYball(){
    document.querySelector('.y').innerHTML = 'Y Ball: ' + pyBall;
}

function showYPlayer(){
    document.querySelector('.y_2').innerHTML = 'Y Player: ' + pyPlayer;
}

function showYCPU(){
    document.querySelector('.y_3').innerHTML = 'Y CPU: ' + pyCPU;
}
function showvelBall(){
    document.querySelector('.velBall').innerHTML = 'Vel Ball: ' + vlBall;
}

function countPts(){
    if (pxBall - rdBall < 0) {
        pts_CPU += 1;
        pxBall = 400;
        pyBall = 150;
        vlBall += 1;
    } 
    if (pxBall + rdBall > vwidth) {
        pts_PLAYER += 1;
        pxBall = 400;
        pyBall = 150;
        vlBall += 1;
    }
}

function showPts(){
    document.querySelector('.ptsCPU').innerHTML = pts_CPU;
    document.querySelector('.ptsPlayer').innerHTML = pts_PLAYER;
}