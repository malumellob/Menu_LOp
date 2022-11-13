

let MENU = 0
let img2;

function preload() {
  img2 = loadImage('outra.png')
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  print(mouseX, mouseY)
  background(500);
  fill(85,0,80);
  rect(50, 50, 200, 75);
  fill('#356');
  rect(50, 200, 200, 75);
  fill('purple');
  rect(50, 350, 200, 75);
  textSize(50)
  fill(255);
  text('JOGAR', 60, 106);
  textSize(38)
  text('CRÉDITOS', 53, 406);
  textSize(30);
  text('INSTRUÇÕES', 52, 248);
  image(img2, 250, 0, 550, 550);

  if (MENU == 1) {
    background(85, 0, 80)
    fill(0)
    textSize(20)
    text('Clique com o botão direito para voltar', 450, 30)
    textSize(80)
    text('EM BREVE', 180 , 250)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // START GAME
  if (MENU == 2) {
    background('#356')
    textSize(20)
    text('Clique com o botão direito para voltar', 450, 30)
    textSize(30)
    text('1. Escolha a porta certa utilizando o mouse', 50, 150)
    text('2. Passe de níveil acertando as respostas ', 50, 200)
    text('3. O jogo acaba se o jogador escolher a porta', 50, 250)
    text('com a alternativa errada',50,280)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  } // INSTRUCTIONS
  if (MENU == 3) {
    background('purple')
    textSize(20)
    text('Clique com o botão direito para voltar', 450, 30)
    textSize(35)
    text('Maria Luisa Mello',50,150)
    textSize(20)
    text('Função: Programadora',50,180)
    text('Estudante de Engenharia Ambiental',50,250)
    text('Universidade Federal do Rio Grande do Norte',50,275)
    if(mouseButton == RIGHT){
      MENU = 0
    }
  } // EXIT 
}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
      if (mouseY < 275 && mouseY > 200) {
        MENU = 2
      }
      if (mouseY < 425 && mouseY > 350) {
        MENU = 3
      }
    }
  }
}


