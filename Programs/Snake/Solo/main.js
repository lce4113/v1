var game;

function setup() {

  createCanvas(500, 500);
  game = new Game(30);

}

function draw() {

  game.draw();
  game.update();

}

class Game {

  constructor(gridSize) {
    this.gridSize = gridSize;
    this.reset();
  }

  reset() {
    this.framesSinceDeath = 0;
    this.status = "playing";
    this.snake = new Snake(this.gridSize);
    this.apple = new Apple(this.gridSize);
    $(".tint").hide();
  }

  draw() {
    this.drawBack();
    this.apple.draw();
    this.snake.draw(this.status == "end screen");
    if (this.status == "end screen" || this.status == "not playing") {
      this.endScreen();
    }
  }

  drawBack() {
    noStroke();
    background(175, 255, 175);
    for (let i = 0; i < floor(width / this.gridSize); i++) {
      for (let j = 0; j < floor(height / this.gridSize); j++) {
        if ((i + j) % 2 == 0) {
          fill(150, 200, 50);
        } else {
          fill(175, 215, 100);
        }
        rect(width % this.gridSize / 2 + i * this.gridSize,
          height % this.gridSize / 2 + j * this.gridSize,
          this.gridSize, this.gridSize);
      }
    }
  }

  endScreen() {
    // White tint
    background(255, 255, 255, min(90, this.framesSinceDeath * 3));
    // "You scored __" and "Click anywhere to play again."
    noStroke();
    textFont("Georgia", height * 1 / 8);
    textAlign(CENTER, BOTTOM);
    fill(0, 0, 0, min(255, this.framesSinceDeath * 3));
    text("You Scored " + str(this.snake.squares.length), width * 1 / 2, height * 1 / 2);
    textSize(height * 1 / 16);
    textAlign(CENTER, TOP);
    text("Click anywhere to play again.", width * 1 / 2, height * 1 / 2);
  }

  update() {
    if (this.status == "playing") {

      frameRate(7.5);
      this.snake.dirChange();
      this.appleCheck();
      this.deathCheck();

    } else if (this.status == "end screen" || this.status == "not playing") {

      // Frame rate is fast
      frameRate(60);
      this.framesSinceDeath++;

      // Switch to not playing from end screen allowing user to play again
      if (this.framesSinceDeath * 3 == 255) {
        this.status = "not playing";
      }

      // If user clicks on screen play again
      if (this.status == "not playing" && mouseIsPressed) {
        this.reset();
      }

    }
  }

  appleCheck() {
    if (this.vecEqual(this.apple.pos, this.snake.squares[0])) {
      this.snake.move(true);
      this.apple.move();
    } else {
      this.snake.move();
    }
  }

  deathCheck() {
    this.snake.deathCheck();
    if (this.snake.dead) {
      this.status = "end screen";
      this.snake.die();
      $(".tint").fadeIn(500);
    }
  }

  vecEqual(a, b) {
    return (abs(a.x - b.x) <= 0.01 && abs(a.y - b.y) <= 0.01);
  }

}

document.onkeydown = function() {
  if (game.status == "playing") {
    if (event.key == "ArrowUp" || event.key == "i" || event.key == "w") {
      game.snake.dirStack.push(createVector(0, -game.snake.gridSize));
    } else if (event.key == "ArrowLeft" || event.key == "j" || event.key == "a") {
      game.snake.dirStack.push(createVector(-game.snake.gridSize, 0));
    } else if (event.key == "ArrowDown" || event.key == "k" || event.key == "s") {
      game.snake.dirStack.push(createVector(0, game.snake.gridSize));
    } else if (event.key == "ArrowRight" || event.key == "l" || event.key == "d") {
      game.snake.dirStack.push(createVector(game.snake.gridSize, 0));
    } else if (event.key == " ") {
      game.status = "paused";
    }
  } else if (game.status == "paused") {
    game.status = "playing";
  } else if (game.status == "not playing") {
    game.reset();
  }
}