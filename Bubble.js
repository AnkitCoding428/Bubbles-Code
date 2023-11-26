class Bubble {
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
    if (this.checkTop()) {
      this.y = height;
    }
    if (this.checkSides) {
      if (this.x <= 0) {
        this.x = width;
      } else if (this.x >= width) {
        this.x = 0;
      }
    }
  }

  checkTop() {
    if (this.y <= 0) {
      return true;
    }
    return false;
  }

  checkSides() {
    if (this.x <= 0 || this.x >= width) {
      return true;
    }
    return false;
  }

  over(px, py) {
    if (max(dist(0, this.y, 0, py), dist(this.x, 0, px, 0)) <= this.r) {
      return true;
    }
    return false;
  }

  enlighten(px, py) {
    if (this.over(px, py)) {
      this.c = color(255, 150);
    } else {
      this.c = color(0, 150);
    }
  }

  clickedOn(px, py) {
    if (this.over(px, py)) {
      return true;
    } else {
      return false;
    }
  }
}
