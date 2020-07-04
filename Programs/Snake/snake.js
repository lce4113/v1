var game;

function setup() {

  createCanvas(500, 500);
  game = new Game(29);

}

function draw() {

  game.draw();
  game.update();

}

class Game {

  constructor(gridSize) {
    this.gridSize = gridSize;
    this.reset();
    this.firebase();
  }

  reset() {
    this.framesSinceDeath = 0;
    this.status = "playing";
    this.snake = new Snake(this.gridSize);
    this.apple = new Apple(this.gridSize);
  }

  firebaseInit() {
    this.firebaseConfig = {
      apiKey: "AIzaSyD_16611BzASCqluxN1f6BYjtSkcpIAc6Q",
      authDomain: "snake-score-storage.firebaseapp.com",
      databaseURL: "https://snake-score-storage.firebaseio.com",
      projectId: "snake-score-storage",
      storageBucket: "snake-score-storage.appspot.com",
      messagingSenderId: "339249446361",
      appId: "1:339249446361:web:7c9c69d5dfaf9887b8edc8",
      measurementId: "G-CPMMVCFQQV"
    };
    firebase.initializeApp(this.firebaseConfig);
    this.database = firebase.database();
    this.ref = this.database.ref("scores");
  }

  firebase() {
    this.firebaseInit();
    this.ref.on("value", function(snapshot) {
      var data = snapshot.val();
      var keys = Object.keys(data);
      var scores = [];
      var $records = $(".record-container>ol");
      $.each(keys, function(i, key) {
        scores.push(data[key].score);
      });
      scores = scores.sort().reverse().slice(0, 5);
      $records.empty();
      $.each(scores, (i, score) => {
        $("<li><h1 class='record " + (i == 0 ? "record1" : "") + "'>" + (i + 1) + ".) " + score + "</h1></li>").appendTo($records);
      });
    });
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
      // Apple is eaten
      if (this.vecEqual(this.apple.pos, this.snake.squares[0])) {
        this.snake.move(true);
        this.apple.move();
      } else {
        this.snake.move();
      }
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

  deathCheck() {
    this.snake.deathCheck();
    if (this.snake.dead) {
      this.status = "end screen";
      this.snake.die();
      // this.ref.push({
      //   "score": this.snake.squares.length - 1,
      // });
      $(".tint").fadeIn(500);
    }
  }

  vecEqual(a, b) {
    return (abs(a.x - b.x) <= 0.01 && abs(a.y - b.y) <= 0.01);
  }

}

class Snake {

  constructor(gridSize) {
    this.gridSize = gridSize;
    this.squares = new Array(2).fill(createVector(width % this.gridSize / 2 +
      this.gridSize * floor(width / this.gridSize / 2),
      height % this.gridSize / 2 +
      this.gridSize * floor(height / this.gridSize / 2)));
    this.dead = false;
    this.dir = createVector(0, 0);
    this.dirStack = [];
  }

  draw() {
    noStroke();
    fill(0, 150, 0);
    circle(this.squares[0].x + this.gridSize / 2,
      this.squares[0].y + this.gridSize / 2,
      this.gridSize * sqrt(2));
    for (let i = 1; i < this.squares.length - (this.dead ? 0 : 1); i++) {
      rect(this.squares[i].x, this.squares[i].y, this.gridSize, this.gridSize);
    }
  }

  move(apple = false) {
    if (!apple) {
      this.squares.pop();
    }
    this.squares.unshift(p5.Vector.add(this.squares[0], this.dir));
  }

  dirChange() {
    if (this.dirStack.length > 0) {
      if (this.dirStack[0].x != -this.dir.x || this.dirStack[0].y != -this.dir.y || this.squares.length <= 3) {
        this.dir = this.dirStack[0];
      }
      this.dirStack.shift();
    }
  }

  deathCheck() {
    // Check if snake hit walls
    if (width - width % this.gridSize / 2 - this.gridSize < this.squares[0].x ||
      this.squares[0].x < width % this.gridSize / 2 ||
      height - height % this.gridSize / 2 - this.gridSize < this.squares[0].y ||
      this.squares[0].y < height % this.gridSize / 2) {
      this.dead = true;
    }
    // Check if snake hit self
    for (let i = 1; i < this.squares.length - 1; i++) {
      if (this.squares[0].x == this.squares[i].x &&
        this.squares[0].y == this.squares[i].y) {
        this.dead = true;
      }
    }
  }

  die() {
    this.squares.shift();
    this.dir = createVector(0, 0);
  }

}

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