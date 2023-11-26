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

  if(bubbles.length > 50){
    bubbles.splice(0, 1);
  }
}

class Bubble{
  constructor(x, y, r, img) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.c = color(0, 150);
      this.kitten = img;
  }

  show() {
      imageMode(CENTER);
      image(this.kitten, this.x, this.y, this.r, this.r);
      // fill(this.c);
      // strokeWeight(2);
      // stroke(255);
      // circle(this.x, this.y, 2*this.r);
  }

  update() {
      this.x += random(-2, 2);
      this.y += random(-2);
      if(this.checkTop()) {
          this.y = height;
      }
      if(this.checkSides) {
          if(this.x <= 0) {
              this.x = width;
          }
          else if(this.x >= width) {
              this.x = 0;
          }
      }
  }

  checkTop(){
      if(this.y <= 0) {
          return true;
      }
      return false;
  }

  checkSides(){
      if(this.x <= 0 || this.x >= width)  {
          return true;
      }
      return false;
  }

  over(px, py) {
      if(max(dist(0, this.y, 0, py), dist(this.x, 0, px, 0)) <= this.r){
          return true;
      }
      return false;
  }

  enlighten(px, py) {
      if(this.over(px, py)) {
          this.c = color(255, 150);
      }
      else{
          this.c = color(0, 150);
      }
  }

  clickedOn(px, py) {
      if(this.over(px, py)){
          return true;
      }
      else{
          return false;
      }
  }

}