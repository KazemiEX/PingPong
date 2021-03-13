//variáveis Bola
let xBola = 400;
let yBola = 300;
let diametro = 25;
let raio = diametro / 2;

//velocidade Bola
let velocidadeXbola = 20;
let velocidadeYbola = 20;

//raquete P1
let xRaqueteP1 = 5;
let yRaqueteP1 = 250;
let comprimentoRaquete = 10;
let alturaRaquete = 100;

//raquete P2
let xRaqueteP2 = 785
let yRaqueteP2 = 250
let velocidadeYP2;

//colisao
let colisaoRaquete = false;

//placar do jogo
let pontosP1 = 0;
let pontosP2 = 0;

//sons
let raquetada
let ponto
//let trilhaSonora

function preload(){
  //trilhaSonora = loadSound("trilhaSonora.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(800, 600);
  //trilha.loop()
}

function draw() {
  background(0);
  mostraBola();
  movimentoBola();
  colisaoBorda();
  criaRaquete(xRaqueteP1, yRaqueteP1);
  criaRaquete(xRaqueteP2, yRaqueteP2);
  movimentoRaqueteP1();
  movimentoRaqueteP2();
  colisaoRaquetes(xRaqueteP1, yRaqueteP1);
  colisaoRaquetes(xRaqueteP2, yRaqueteP2);
  exibePlacar();
  marcaPonto();
}

//cria a Bola
function mostraBola(){
    circle(xBola,yBola,diametro);
}

//movimento Bola
function movimentoBola(){
  xBola += velocidadeXbola;
  yBola += velocidadeYbola
}
 
//verifica colisão com a borda
function colisaoBorda(){
    if(xBola + raio > width ||
       xBola - raio < 0){
       velocidadeXbola *= -1;
  }
    if(yBola + raio > height ||
       yBola - raio < 0){
       velocidadeYbola *= -1;
    }
}

//cria raquete
function criaRaquete(x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

//movimento da Raquete P1
function movimentoRaqueteP1(){
  if (keyIsDown(UP_ARROW)){
      yRaqueteP1 -= 20
  }
  if (keyIsDown(DOWN_ARROW)){
      yRaqueteP1 += 20
  }
}

//movimento da Raquete P2
function movimentoRaqueteP2(){
  velocidadeYP2 = yBola - yRaqueteP2 - comprimentoRaquete / 2 - 30
  yRaqueteP2 += velocidadeYP2;
}

//verifica colisão nas raquetes
function colisaoRaquetes(x, y) {
    colisao = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBola, yBola, diametro);
    if (colisao) {
        velocidadeXbola *= -1;
        raquetada.play()
    }
}

//exibe o placar na posição central superior da tela
function exibePlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(26)
  fill(color(255,40,0))
  rect(230, 7, 40, 30);
  fill(255)
  text(pontosP1, 250, 30)
  fill(color(255,0,0))
  rect(530, 7, 40, 30);
  fill(255)
  text(pontosP2, 550, 30)
}

//marca ponto ao tocar na borda
function marcaPonto(){
  if (xBola > 790){
    pontosP1 +=1
    ponto.play()
  }
  if (xBola < 10){
    pontosP2 += 1
    ponto.play()
  }
}
