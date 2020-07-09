class Apple {

  constructor(gridSize) {
    this.gridSize = gridSize;
    this.pos = createVector(width % this.gridSize / 2 +
      this.gridSize * floor(random(floor(width / this.gridSize))),
      height % this.gridSize / 2 +
      this.gridSize * floor(random(floor(height / this.gridSize))));
  }

  draw() {
    fill(255, 0, 0);
    circle(this.pos.x + this.gridSize / 2,
      this.pos.y + this.gridSize / 2,
      this.gridSize * 3 / 4);
    stroke(151, 111, 76);
    strokeWeight(this.gridSize * 1 / 15);
    line(this.pos.x + this.gridSize / 2,
      this.pos.y + this.gridSize * 0.1,
      this.pos.x + this.gridSize / 2,
      this.pos.y + this.gridSize * 0.4);
  }

  move() {
    this.pos = createVector(width % this.gridSize / 2 +
      this.gridSize * floor(random(floor(width / this.gridSize))),
      height % this.gridSize / 2 +
      this.gridSize * floor(random(floor(height / this.gridSize))));
  }

}