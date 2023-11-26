let bubbles = [];
let n = 10;
let bk;
let kittens = [];

function preLoad() {
  bk = loadImage('Background.png');
  for(let i = 0; i < 5; i++) {
    kittens[i] = loadImage('kittens/kitten'+ i +'.png')
  }
}

function setup() {
  createCanvas(1280, 720);
  bk = loadImage('Background.png');
  for(let i = 0; i < 5; i++) {
    kittens[i] = loadImage('kittens/kitten'+ i +'.png')
  }
  background(0);
  for(let i = 0; i < n; i++) {
    x = random(width);
    y = random(height);
    r = 150;
    kitten = random(kittens);
    b = new Bubble(x, y, r, kitten);
    bubbles.push(b);
  }
}

function mousePressed() {
  for(let i = bubbles.length - 1; i >= 0; i--){
    if(bubbles[i].clickedOn(mouseX, mouseY)){
      bubbles.splice(i, 1);
    }
  }
}

function keyTyped() {
  if(key === ' '){
    b = new Bubble(mouseX, mouseY, 150, random(kittens));
    bubbles.push(b);
  }
  else{
    return false;
  }
}

function draw() {
  background(0);

  for(let bub of bubbles) {
    bub.show();
    bub.update();
    bub.enlighten(mouseX, mouseY);
  }

  if(bubbles.length > 10){
    bubbles.splice(0, 1);
  }
}
