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
    this.apples = [];
    for (let i = 0; i < 2; i++) {
      this.apples.push(new Apple(this.gridSize));
    }
    this.database = new Firebase();
    this.ready = false;
    this.database.search((a, b) => {
      this.database.read();
      this.ready = true;
      this.player = new Snake(this.gridSize, a / 3);
      this.opp = new Snake(this.gridSize, b / 3);
    });
    $(".tint").hide();
  }

  changeDir(dir) {
    this.player.changeDir(dir);
  }

  draw() {
    if (this.ready) {
      this.drawBack();
      this.apples.forEach(apple => {
        apple.draw();
      });
      this.player.draw(this.status == "end screen");
      this.opp.draw(this.status == "end screen");
      if (this.status == "end screen" || this.status == "not playing") {
        this.endScreen();
      }
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
    text("You Scored " + str(this.player.squares.length + this.opp.squares.length), width * 1 / 2, height * 1 / 2);
    textSize(height * 1 / 16);
    textAlign(CENTER, TOP);
    text("Click anywhere to play again.", width * 1 / 2, height * 1 / 2);
  }

  update() {
    if (this.ready) {
      if (this.status == "playing") {

        frameRate(7.5);
        this.player.dirStackCheck();
        this.player.move();
        this.database.write(this.player.squares);
        this.deathCheck();

      } else if (this.status == "end screen" || this.status == "not playing") {

        // Frame rate is fast
        frameRate(60);
        this.framesSinceDeath++;

        // Switch status allowing user to click to play again
        if (this.framesSinceDeath * 3 == 255) {
          this.status = "not playing";
        }

        // If user clicks on screen play again
        if (this.status == "not playing" && mouseIsPressed) {
          this.reset();
        }

      }
    }
  }

  appleCheck() {
    var eaten = [false, false];
    this.apples.forEach(apple => {
      if (this.vecEqual(apple.pos, this.player.squares[0])) {
        apple.move();
        eaten[0] = true;
      } else if (this.vecEqual(apple.pos, this.opp.squares[0])) {
        apple.move();
        eaten[1] = true;
      }
    });
    return eaten;
  }

  deathCheck() {
    this.player.deathCheck();
    this.opp.deathCheck();
    if (this.player.dead || this.opp.dead) {
      this.status = "end screen";
      this.player.die();
      this.opp.die();
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
      game.changeDir("up");
    } else if (event.key == "ArrowLeft" || event.key == "j" || event.key == "a") {
      game.changeDir("left");
    } else if (event.key == "ArrowDown" || event.key == "k" || event.key == "s") {
      game.changeDir("down");
    } else if (event.key == "ArrowRight" || event.key == "l" || event.key == "d") {
      game.changeDir("right");
    } else if (event.key == " ") {
      game.status = "paused";
    }
  } else if (game.status == "paused") {
    game.status = "playing";
  } else if (game.status == "not playing") {
    game.reset();
  }
}