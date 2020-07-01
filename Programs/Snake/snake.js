var squares, gridSize, status, dir, dirStack, framesSinceDeath, eaten;

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_16611BzASCqluxN1f6BYjtSkcpIAc6Q",
  authDomain: "snake-score-storage.firebaseapp.com",
  databaseURL: "https://snake-score-storage.firebaseio.com",
  projectId: "snake-score-storage",
  storageBucket: "snake-score-storage.appspot.com",
  messagingSenderId: "339249446361",
  appId: "1:339249446361:web:7c9c69d5dfaf9887b8edc8",
  measurementId: "G-CPMMVCFQQV"
};

// Initialize Firebase Database
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref("scores");

function startGame() {

  $(function() {$(".tint").hide();});
  gridSize = 25;
  status = "playing";
  squares = new Array(2).fill( createVector(width%gridSize/2 + gridSize*floor(width/gridSize/2), height%gridSize/2 + gridSize*floor(height/gridSize/2)) );
  dir = createVector(0, 0);
  dirStack = [];
  framesSinceDeath = 0;
  eaten = true;
  applePos = createVector( width%gridSize/2 + gridSize*floor(random(floor(width/gridSize))), height%gridSize/2 + gridSize*floor(random(floor(height/gridSize))) )

}

function setup() {

  createCanvas(524, 524);
  startGame();

  ref.on("value", function(data) {
    var record = 0;
    var scores = data.val();
    var keys = Object.keys(scores);
    keys.forEach((key, i) => {
      if (scores[key] > record) {
        record = scores[key];
      }
    });
    $(".record").fadeOut(300);
    $("<h1 class='record'>record: " + record + "</h1>").hide().appendTo(".record-container").fadeIn(300);
  });

}

function draw() {

  // Draw background
  noStroke();
  background(175, 255, 175);
  // background(175+(255-175)*90/255, 255, 175+(255-175)*90/255);
  for (let i = 0; i < floor(width/gridSize); i++) {
    for (let j = 0; j < floor(height/gridSize); j++) {
      if ( (i+j)%2 == 0 ) {
        fill(150, 200, 50);
      } else {
        fill(175, 215, 100);
      }
      rect( width%gridSize/2 + i*gridSize, height%gridSize/2 + j*gridSize, gridSize, gridSize );
    }
  }

  // Draw apple
  fill(255, 0, 0);
  circle( applePos.x + gridSize/2, applePos.y + gridSize/2, gridSize*3/4 );
  stroke(151, 111, 76);
  strokeWeight(gridSize*1/15);
  line(applePos.x+gridSize/2, applePos.y+gridSize*0.1, applePos.x+gridSize/2, applePos.y+gridSize*0.4);

  // Draw snake
  noStroke();
  fill(0, 150, 0);
  circle( squares[0].x + gridSize/2, squares[0].y + gridSize/2, gridSize*sqrt(2) );
  for (let i = 1; i < squares.length-1; i++) {
    rect( squares[i].x, squares[i].y, gridSize, gridSize );
  }

  if ( status == "playing" ) {

    // Frame rate is slow
    frameRate(7.5);

    // Use next dir in dirStack
    if ( dirStack.length > 0 ) {
      if ( dirStack[0].x != -dir.x || dirStack[0].y != -dir.y || squares.length <= 3 ) {
        dir = dirStack[0];
      }
      dirStack.shift();
    }

    // Move snake
    if ( abs(applePos.x - squares[0].x) <= 0.01 && abs(applePos.y - squares[0].y) <= 0.01 ) {
      applePos = createVector( width%gridSize/2 + gridSize*floor(random(floor(width/gridSize))), height%gridSize/2 + gridSize*floor(random(floor(height/gridSize))) );
    } else {
      squares.pop();
    }
    squares.unshift( p5.Vector.add(squares[0], dir) );

    // Check if snake hit walls
    if ( width-width%gridSize/2-gridSize < squares[0].x || squares[0].x < width%gridSize/2 ||
         height-height%gridSize/2-gridSize < squares[0].y || squares[0].y < height%gridSize/2 ) {
      die();
    }

    // Check if snake hit self
    for (let i = 1; i < squares.length-1; i++) {
      if ( squares[0].x == squares[i].x && squares[0].y == squares[i].y ) {
        die();
      }
    }

  } else if ( status == "end screen" || status == "not playing" ) {

    // Frame rate is fast
    frameRate(60);
    framesSinceDeath++;

    // White tint
    $(function() {$(".tint").fadeIn(500);});
    background(255, 255, 255, min(90, framesSinceDeath*3));

    // "You scored __" and "Click anywhere to play again."
    noStroke();
    textFont("Georgia", height*1/8);
    textAlign(CENTER, BOTTOM);
    fill(0, 0, 0, min(255, framesSinceDeath*3));
    text( "You Scored " + str(squares.length-1), width*1/2, height*1/2 );
    textSize(height*1/16);
    textAlign(CENTER, TOP);
    text( "Click anywhere to play again.", width*1/2, height*1/2 );

    // Switch to not playing from end screen allowing user to play again
    if ( framesSinceDeath*3 == 255 ) {
      status = "not playing";
    }

    // If user clicks on screen play again
    if ( status == "not playing" && mouseIsPressed ) {
      startGame();
    }

  }

}

function die() {
  ref.push(squares.length-1);
  squares.shift();
  squares.push( squares[ squares.length-1 ] );
  status = "end screen";
}

document.onkeydown = function() {
  if ( event.key == "ArrowUp" ) {
    dirStack.push(createVector(0, -gridSize));
  }  else if ( event.key == "ArrowLeft" ) {
    dirStack.push(createVector(-gridSize, 0));
  } else if ( event.key == "ArrowDown" ) {
    dirStack.push(createVector(0, gridSize));
  } else if ( event.key == "ArrowRight" ) {
    dirStack.push(createVector(gridSize, 0));
  }
}

function keyTyped() {
  if ( status == "playing" ) {
    if ( key == "i" || key == "w" ) {
      dirStack.push(createVector(0, -gridSize));
    } else if ( key == "j" || key == "a" ) {
      dirStack.push(createVector(-gridSize, 0));
    } else if ( key == "k" || key == "s" ) {
      dirStack.push(createVector(0, gridSize));
    } else if ( key == "l" || key == "d" ) {
      dirStack.push(createVector(gridSize, 0));
    } else if ( key == " " ) {
      status = "paused";
    }
  } else if ( status == "paused" ) {
    status = "playing";
  } else if ( status == "not playing" ) {
    startGame();
  }
}
