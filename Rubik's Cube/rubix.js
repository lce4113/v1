let frontColor = "green";
let backColor = "blue";
let bottomColor = "white";
let topColor = "yellow";
let rightColor = "orange";
let leftColor = "red";
let inColor = "gray";

let xOffset, yOffset;

let Xrotate = 125;
let Yrotate = 0;

let speed = 4;

let camdist = 2000;

let counter = 0;

function setup() {

  createCanvas(500, 1000, WEBGL);
  rectMode(CENTER);

  rubix = new Cube();

  turns = new Turns();

  buttons();

}

function draw() {

  let a = map(Xrotate, 0, width, -PI, PI);
  let b = map(Yrotate, 0, height, -PI, PI);

  camera(camdist * cos(b) * cos(a), camdist * sin(b), camdist * cos(b) * sin(a), 0, 0, 0, 0, 1, 0);

  background(0);

  rubix.show();
  rubix.update();

}

// Sets Offset For Rotation
function mousePressed() {

  xOffset = Xrotate - mouseX;
  yOffset = Yrotate - mouseY;

}

// Moves Cube During Mouse Movement
function mouseDragged() {

  Xrotate = mouseX + xOffset;
  Yrotate = mouseY + yOffset;

}

// Making Buttons
function buttons() {

  let buttonWidth = 100;
  let buttonHeight = 40;

  Scramble = createButton("Scramble");
  Solve = createButton("Solve");

  Scramble.position(20, 480);
  Solve.position(380, 480);

  Scramble.size(buttonWidth, buttonHeight);
  Solve.size(buttonWidth, buttonHeight);

  Scramble.mousePressed(turns.Scramble);
  Solve.mousePressed(turns.Solve);

  RButton = createButton("Right");
  RPrimeButton = createButton("Right Prime");
  LButton = createButton("Left");
  LPrimeButton = createButton("Left Prime");
  UButton = createButton("Up");
  UPrimeButton = createButton("Up Prime");
  DButton = createButton("Down");
  DPrimeButton = createButton("Down Prime");
  FButton = createButton("Front");
  FPrimeButton = createButton("Front Prime");
  BButton = createButton("Back");
  BPrimeButton = createButton("Back Prime");

  MButton = createButton("M");
  MPrimeButton = createButton("M Prime");
  EButton = createButton("E");
  EPrimeButton = createButton("E Prime");
  SButton = createButton("S");
  SPrimeButton = createButton("S Prime");
  XButton = createButton("X Turn");
  XPrimeButton = createButton("X Prime Turn");
  YButton = createButton("Y Turn");
  YPrimeButton = createButton("Y Prime Turn");
  ZButton = createButton("Z Turn");
  ZPrimeButton = createButton("Z Prime Turn");

  RButton.position(20, 20);
  RPrimeButton.position(20, 90);
  LButton.position(200, 20);
  LPrimeButton.position(200, 90);
  UButton.position(380, 20);
  UPrimeButton.position(380, 90);
  DButton.position(380, 200);
  DPrimeButton.position(380, 270);
  FButton.position(20, 200);
  FPrimeButton.position(20, 270);
  BButton.position(200, 200);
  BPrimeButton.position(200, 270);

  MButton.position(20, 690);
  MPrimeButton.position(20, 760);
  EButton.position(200, 690);
  EPrimeButton.position(200, 760);
  SButton.position(380, 690);
  SPrimeButton.position(380, 760);
  XButton.position(20, 870);
  XPrimeButton.position(20, 940);
  YButton.position(200, 870);
  YPrimeButton.position(200, 940);
  ZButton.position(380, 870);
  ZPrimeButton.position(380, 940);

  RButton.size(buttonWidth, buttonHeight);
  RPrimeButton.size(buttonWidth, buttonHeight);
  LButton.size(buttonWidth, buttonHeight);
  LPrimeButton.size(buttonWidth, buttonHeight);
  UButton.size(buttonWidth, buttonHeight);
  UPrimeButton.size(buttonWidth, buttonHeight);
  DButton.size(buttonWidth, buttonHeight);
  DPrimeButton.size(buttonWidth, buttonHeight);
  FButton.size(buttonWidth, buttonHeight);
  FPrimeButton.size(buttonWidth, buttonHeight);
  BButton.size(buttonWidth, buttonHeight);
  BPrimeButton.size(buttonWidth, buttonHeight);

  MButton.size(buttonWidth, buttonHeight);
  MPrimeButton.size(buttonWidth, buttonHeight);
  EButton.size(buttonWidth, buttonHeight);
  EPrimeButton.size(buttonWidth, buttonHeight);
  SButton.size(buttonWidth, buttonHeight);
  SPrimeButton.size(buttonWidth, buttonHeight);
  XButton.size(buttonWidth, buttonHeight);
  XPrimeButton.size(buttonWidth, buttonHeight);
  YButton.size(buttonWidth, buttonHeight);
  YPrimeButton.size(buttonWidth, buttonHeight);
  ZButton.size(buttonWidth, buttonHeight);
  ZPrimeButton.size(buttonWidth, buttonHeight);

  RButton.mousePressed(turns.R);
  RPrimeButton.mousePressed(turns.RPrime);
  LButton.mousePressed(turns.L);
  LPrimeButton.mousePressed(turns.LPrime);
  UButton.mousePressed(turns.U);
  UPrimeButton.mousePressed(turns.UPrime);
  DButton.mousePressed(turns.D);
  DPrimeButton.mousePressed(turns.DPrime);
  FButton.mousePressed(turns.F);
  FPrimeButton.mousePressed(turns.FPrime);
  BButton.mousePressed(turns.B);
  BPrimeButton.mousePressed(turns.BPrime);

  MButton.mousePressed(turns.M);
  MPrimeButton.mousePressed(turns.MPrime);
  EButton.mousePressed(turns.E);
  EPrimeButton.mousePressed(turns.EPrime);
  SButton.mousePressed(turns.S);
  SPrimeButton.mousePressed(turns.SPrime);
  XButton.mousePressed(turns.X);
  XPrimeButton.mousePressed(turns.XPrime);
  YButton.mousePressed(turns.Y);
  YPrimeButton.mousePressed(turns.YPrime);
  ZButton.mousePressed(turns.Z);
  ZPrimeButton.mousePressed(turns.ZPrime);

}

// Allows Buttons To Turn Cube
class Turns {
  constructor() {}
  R() {
    rubix.R();
  }
  RPrime() {
    rubix.RPrime();
  }
  L() {
    rubix.L();
  }
  LPrime() {
    rubix.LPrime();
  }
  U() {
    rubix.U();
  }
  UPrime() {
    rubix.UPrime();
  }
  D() {
    rubix.D();
  }
  DPrime() {
    rubix.DPrime();
  }
  F() {
    rubix.F();
  }
  FPrime() {
    rubix.FPrime();
  }
  B() {
    rubix.B();
  }
  BPrime() {
    rubix.BPrime();
  }
  M() {
    rubix.M();
  }
  MPrime() {
    rubix.MPrime();
  }
  E() {
    rubix.E();
  }
  EPrime() {
    rubix.EPrime();
  }
  S() {
    rubix.S();
  }
  SPrime() {
    rubix.SPrime();
  }
  X() {
    rubix.X();
  }
  XPrime() {
    rubix.XPrime();
  }
  Y() {
    rubix.Y();
  }
  YPrime() {
    rubix.YPrime();
  }
  Z() {
    rubix.Z();
  }
  ZPrime() {
    rubix.ZPrime();
  }
  Scramble() {
    rubix.scramble();
  }
  Solve() {
    rubix.fullSolve();
  }
}

// Small Cubes 
class Cubie {

  constructor(x, y, z, c1, c2, c3, c4, c5, c6) {
    this.x = 100 * (x - 1);
    this.y = 100 * (y - 1);
    this.z = 100 * (z - 1);
    this.xRotate = 0;
    this.yRotate = 0;
    this.zRotate = 0;
    this.rotates = [];
    this.frontColor = c1;
    this.backColor = c2;
    this.bottomColor = c3;
    this.topColor = c4;
    this.rightColor = c5;
    this.leftColor = c6;
  }

  update(c1, c2, c3, c4, c5, c6) {
    this.frontColor = c1;
    this.backColor = c2;
    this.bottomColor = c3;
    this.topColor = c4;
    this.rightColor = c5;
    this.leftColor = c6;
  }

  // Shows One "Face" Using Cube
  showFace(w, h, d, t, turn, axis, posneg) {

    push();

    rotateX(this.xRotate);
    rotateY(this.yRotate);
    rotateZ(this.zRotate);

    for (var i = this.rotates.length - 1; i >= 0; i--) {
      rotateX(this.rotates[i].x);
      rotateY(this.rotates[i].y);
      rotateZ(this.rotates[i].z);
    }

    translate(this.x, this.y, this.z);

    translate(t);
    box(w, h, d);
    pop();
  }

  // Shows All "Faces"
  showAll() {
    //this.update(c1, c2, c3, c4, c5, c6)
    fill(this.frontColor);
    this.showFace(98, 98, 10, createVector(0, 0, 45)); // front
    fill(this.backColor);
    this.showFace(98, 98, 10, createVector(0, 0, -45)); // back
    fill(this.bottomColor);
    this.showFace(98, 10, 98, createVector(0, 45, 0)); // bottom
    fill(this.topColor);
    this.showFace(98, 10, 98, createVector(0, -45, 0)); // top
    fill(this.rightColor);
    this.showFace(10, 98, 98, createVector(45, 0, 0)); // right
    fill(this.leftColor);
    this.showFace(10, 98, 98, createVector(-45, 0, 0)); // left
  }

}

// Big Cube
class Cube {

  constructor() {

    this.cubies = [
      [
        [],
        [],
        []
      ],
      [
        [],
        [],
        []
      ],
      [
        [],
        [],
        []
      ]
    ];

    this.cubies[0][0].push(new Cubie(0, 0, 0, inColor, backColor, inColor, topColor, inColor, leftColor));
    this.cubies[1][0].push(new Cubie(1, 0, 0, inColor, backColor, inColor, topColor, inColor, inColor));
    this.cubies[2][0].push(new Cubie(2, 0, 0, inColor, backColor, inColor, topColor, rightColor, inColor));
    this.cubies[0][1].push(new Cubie(0, 1, 0, inColor, backColor, inColor, inColor, inColor, leftColor));
    this.cubies[1][1].push(new Cubie(1, 1, 0, inColor, backColor, inColor, inColor, inColor, inColor));
    this.cubies[2][1].push(new Cubie(2, 1, 0, inColor, backColor, inColor, inColor, rightColor, inColor));
    this.cubies[0][2].push(new Cubie(0, 2, 0, inColor, backColor, bottomColor, inColor, inColor, leftColor));
    this.cubies[1][2].push(new Cubie(1, 2, 0, inColor, backColor, bottomColor, inColor, inColor, inColor));
    this.cubies[2][2].push(new Cubie(2, 2, 0, inColor, backColor, bottomColor, inColor, rightColor, inColor));
    this.cubies[0][0].push(new Cubie(0, 0, 1, inColor, inColor, inColor, topColor, inColor, leftColor));
    this.cubies[1][0].push(new Cubie(1, 0, 1, inColor, inColor, inColor, topColor, inColor, inColor));
    this.cubies[2][0].push(new Cubie(2, 0, 1, inColor, inColor, inColor, topColor, rightColor, inColor));
    this.cubies[0][1].push(new Cubie(0, 1, 1, inColor, inColor, inColor, inColor, inColor, leftColor));
    this.cubies[1][1].push(new Cubie(1, 1, 1, inColor, inColor, inColor, inColor, inColor, inColor));
    this.cubies[2][1].push(new Cubie(2, 1, 1, inColor, inColor, inColor, inColor, rightColor, inColor));
    this.cubies[0][2].push(new Cubie(0, 2, 1, inColor, inColor, bottomColor, inColor, inColor, leftColor));
    this.cubies[1][2].push(new Cubie(1, 2, 1, inColor, inColor, bottomColor, inColor, inColor, inColor));
    this.cubies[2][2].push(new Cubie(2, 2, 1, inColor, inColor, bottomColor, inColor, rightColor, inColor));
    this.cubies[0][0].push(new Cubie(0, 0, 2, frontColor, inColor, inColor, topColor, inColor, leftColor));
    this.cubies[1][0].push(new Cubie(1, 0, 2, frontColor, inColor, inColor, topColor, inColor, inColor));
    this.cubies[2][0].push(new Cubie(2, 0, 2, frontColor, inColor, inColor, topColor, rightColor, inColor));
    this.cubies[0][1].push(new Cubie(0, 1, 2, frontColor, inColor, inColor, inColor, inColor, leftColor));
    this.cubies[1][1].push(new Cubie(1, 1, 2, frontColor, inColor, inColor, inColor, inColor, inColor));
    this.cubies[2][1].push(new Cubie(2, 1, 2, frontColor, inColor, inColor, inColor, rightColor, inColor));
    this.cubies[0][2].push(new Cubie(0, 2, 2, frontColor, inColor, bottomColor, inColor, inColor, leftColor));
    this.cubies[1][2].push(new Cubie(1, 2, 2, frontColor, inColor, bottomColor, inColor, inColor, inColor));
    this.cubies[2][2].push(new Cubie(2, 2, 2, frontColor, inColor, bottomColor, inColor, rightColor, inColor));

    this.cubiesStorage = this.arrCopy(this.cubies, 3);

    this.colors = [
      [
        [frontColor, frontColor, frontColor],
        [frontColor, frontColor, frontColor],
        [frontColor, frontColor, frontColor]
      ],
      [
        [backColor, backColor, backColor],
        [backColor, backColor, backColor],
        [backColor, backColor, backColor]
      ],
      [
        [bottomColor, bottomColor, bottomColor],
        [bottomColor, bottomColor, bottomColor],
        [bottomColor, bottomColor, bottomColor]
      ],
      [
        [topColor, topColor, topColor],
        [topColor, topColor, topColor],
        [topColor, topColor, topColor]
      ],
      [
        [rightColor, rightColor, rightColor],
        [rightColor, rightColor, rightColor],
        [rightColor, rightColor, rightColor]
      ],
      [
        [leftColor, leftColor, leftColor],
        [leftColor, leftColor, leftColor],
        [leftColor, leftColor, leftColor]
      ]
    ];

    this.storage = this.arrCopy(this.colors);

    this.turns = [];
    this.turned = 0;
    this.turnSpeed = speed * PI / 100;

  }

  show() {

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
          this.cubies[i][j][k].showAll();
        }
      }
    }

  }

  update() {

    if (this.turns.length > 0) {
      switch (this.turns[0]) {

        case "R":
          this.rotateCubes("x", 2, 1);
          break;

        case "R'":
          this.rotateCubes("x", 2, -1);
          break;

        case "U":
          this.rotateCubes("y", 0, 1);
          break;

        case "U'":
          this.rotateCubes("y", 0, -1);
          break;

        case "L":
          this.rotateCubes("x", 0, -1);
          break;

        case "L'":
          this.rotateCubes("x", 0, 1);
          break;

        case "D":
          this.rotateCubes("y", 2, -1);
          break;

        case "D'":
          this.rotateCubes("y", 2, 1);
          break;

        case "F":
          this.rotateCubes("z", 2, 1);
          break;

        case "F'":
          this.rotateCubes("z", 2, -1);
          break;

        case "B":
          this.rotateCubes("z", 0, -1);
          break;

        case "B'":
          this.rotateCubes("z", 0, 1);
          break;

        case "M":
          this.rotateCubes("x", 1, -1);
          break;

        case "M'":
          this.rotateCubes("x", 1, 1);
          break;

        case "E":
          this.rotateCubes("y", 1, -1);
          break;

        case "E'":
          this.rotateCubes("y", 1, 1);
          break;

        case "S":
          this.rotateCubes("z", 1, 1);
          break;

        case "S'":
          this.rotateCubes("z", 1, -1);
          break;

        case "X":
          this.turns = this.turns.slice(1, this.turns.length)
          this.turns.splice(0, 0, "R");
          this.turns.splice(0, 0, "M'");
          this.turns.splice(0, 0, "L'");
          break;

        case "X'":
          this.turns = this.turns.slice(1, this.turns.length)
          this.turns.splice(0, 0, "R'");
          this.turns.splice(0, 0, "M");
          this.turns.splice(0, 0, "L");
          break;

        case "Y":
          this.turns = this.turns.slice(1, this.turns.length)
          this.turns.splice(0, 0, "U");
          this.turns.splice(0, 0, "E'");
          this.turns.splice(0, 0, "D'");
          break;

        case "Y'":
          this.turns = this.turns.slice(1, this.turns.length)
          this.turns.splice(0, 0, "U'");
          this.turns.splice(0, 0, "E");
          this.turns.splice(0, 0, "D");
          break;

        case "Z":
          this.turns = this.turns.slice(1, this.turns.length)
          this.turns.splice(0, 0, "F");
          this.turns.splice(0, 0, "S");
          this.turns.splice(0, 0, "B'");
          break;

        case "Z'":
          this.turns = this.turns.slice(1, this.turns.length)
          this.turns.splice(0, 0, "F'");
          this.turns.splice(0, 0, "S'");
          this.turns.splice(0, 0, "B");
          break;

      }
    }

  }

  rotateCubes(axis, a, dir) {

    if (axis == "x") {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.cubies[a][i][j].xRotate += dir * this.turnSpeed;
        }
      }
    }

    if (axis == "y") {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.cubies[i][a][j].yRotate += -dir * this.turnSpeed;
        }
      }
    }

    if (axis == "z") {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.cubies[i][j][a].zRotate += dir * this.turnSpeed;
        }
      }
    }

    this.turned += this.turnSpeed;

    if (this.turned >= PI / 2) {

      if (axis == "x") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            this.cubies[a][i][j] = this.cubiesStorage[a][1 - dir + dir * j][1 + dir - dir * i];
            this.cubies[a][i][j].xRotate = 0;
            this.cubies[a][i][j].rotates.push(createVector(dir * PI / 2, 0, 0));
          }
        }
      }

      if (axis == "y") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            this.cubies[i][a][j] = this.cubiesStorage[1 - dir + dir * j][a][1 + dir - dir * i];
            this.cubies[i][a][j].yRotate = 0;
            this.cubies[i][a][j].rotates.push(createVector(0, -dir * PI / 2, 0));
          }
        }
      }


      if (axis == "z") {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            this.cubies[i][j][a] = this.cubiesStorage[1 - dir + dir * j][1 + dir - dir * i][a];
            this.cubies[i][j][a].zRotate = 0;
            this.cubies[i][j][a].rotates.push(createVector(0, 0, dir * PI / 2));
          }
        }
      }

      this.cubiesStorage = this.arrCopy(this.cubies, 3);

      this.turns = this.turns.slice(1, this.turns.length);
      this.turned = 0;
    }

  }

  arrCopy(arr, d1 = 6, d2 = 3, d3 = 3) {

    var copied = [];
    for (var i = 0; i < d1; i++) {
      copied.push([]);
      for (var j = 0; j < d2; j++) {
        copied[i].push([]);
        for (var k = 0; k < d3; k++) {
          copied[i][j].push(arr[i][j][k]);
        }
      }
    }
    return copied

  }

  // Function To Rotate Sides Of Faces - X Axis
  edgeRotatorX(f1, x1, f2, x2, f3, x3, f4, x4) {

    for (let i = 0; i < 3; i++) {
      this.storage[f1][x1][i] = this.colors[f2][x2][i];
      this.storage[f2][x2][i] = this.colors[f3][x3][2 - i];
      this.storage[f3][x3][2 - i] = this.colors[f4][x4][i];
      this.storage[f4][x4][i] = this.colors[f1][x1][i];
    }

  }

  // Function To Rotate Sides Of Faces - Y Axis
  edgeRotatorY(f1, f2, f3, f4, y) {

    for (let i = 0; i < 3; i++) {
      this.storage[f1][i][y] = this.colors[f2][i][y];
      this.storage[f2][i][y] = this.colors[f3][i][y];
      this.storage[f3][i][y] = this.colors[f4][i][y];
      this.storage[f4][i][y] = this.colors[f1][i][y];
    }

  }

  // Function To Rotate Sides Of Faces - Z Axis
  edgeRotatorZ(y1, f2, x2, y3, f4, x4, inv) {

    for (let i = 0; i < 3; i++) {
      this.storage[3][i][y1] = this.colors[f2][x2][1 - inv + inv * i];
      this.storage[f2][x2][1 - inv + inv * i] = this.colors[2][2 - i][y3];
      this.storage[2][2 - i][y3] = this.colors[f4][x4][1 + inv - inv * i];
      this.storage[f4][x4][1 + inv - inv * i] = this.colors[3][i][y1];
    }

  }

  // Function To Rotate Faces Of Cube
  faceRotator(face, dir) {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.storage[face][i][j] = this.colors[face][1 + dir - dir * j][1 - dir + dir * i];
      }
    }

  }

  R() {

    this.edgeRotatorX(0, 2, 2, 2, 1, 0, 3, 2);
    this.faceRotator(4, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("R");

  }

  RPrime() {

    this.edgeRotatorX(0, 2, 3, 2, 1, 0, 2, 2);
    this.faceRotator(4, -1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("R\'");

  }

  L() {

    this.edgeRotatorX(0, 0, 3, 0, 1, 2, 2, 0);
    this.faceRotator(5, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("L");

  }

  LPrime() {

    this.edgeRotatorX(0, 0, 2, 0, 1, 2, 3, 0);
    this.faceRotator(5, -1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("L\'");

  }

  U() {

    this.edgeRotatorY(0, 4, 1, 5, 2);
    this.faceRotator(3, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("U");

  }

  UPrime() {

    this.edgeRotatorY(0, 5, 1, 4, 2);
    this.faceRotator(3, -1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("U\'");

  }

  D() {

    this.edgeRotatorY(0, 5, 1, 4, 0);
    this.faceRotator(2, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("D");

  }

  DPrime() {

    this.edgeRotatorY(0, 4, 1, 5, 0);
    this.faceRotator(2, -1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("D\'");

  }

  F() {

    this.edgeRotatorZ(0, 5, 2, 2, 4, 0, 1);
    this.faceRotator(0, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("F");

  }

  FPrime() {

    this.edgeRotatorZ(0, 4, 0, 2, 5, 2, -1);
    this.faceRotator(0, -1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("F\'");

  }

  B() {

    this.edgeRotatorZ(2, 4, 2, 0, 5, 0, -1);
    this.faceRotator(1, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("B");

  }

  BPrime() {

    this.edgeRotatorZ(2, 5, 0, 0, 4, 2, 1);
    this.faceRotator(1, -1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("B\'");

  }

  M() {

    this.edgeRotatorX(0, 1, 3, 1, 1, 1, 2, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("M");

  }

  MPrime() {

    this.edgeRotatorX(0, 1, 2, 1, 1, 1, 3, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("M\'");

  }

  E() {

    this.edgeRotatorY(0, 5, 1, 4, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("E");

  }

  EPrime() {

    this.edgeRotatorY(0, 4, 1, 5, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("E\'");

  }

  S() {

    this.edgeRotatorZ(1, 5, 1, 1, 4, 1, 1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("S");

  }

  SPrime() {

    this.edgeRotatorZ(1, 4, 1, 1, 5, 1, -1);
    this.colors = this.arrCopy(this.storage);
    this.turns.push("S\'");

  }

  X() {

    this.edgeRotatorX(0, 2, 2, 2, 1, 0, 3, 2);
    this.edgeRotatorX(0, 1, 2, 1, 1, 1, 3, 1);
    this.edgeRotatorX(0, 0, 2, 0, 1, 2, 3, 0);

    this.faceRotator(4, 1);
    this.faceRotator(5, -1);

    this.colors = this.arrCopy(this.storage);
    this.turns.push("X");

  }

  XPrime() {

    this.edgeRotatorX(0, 2, 3, 2, 1, 0, 2, 2);
    this.edgeRotatorX(0, 1, 3, 1, 1, 1, 2, 1);
    this.edgeRotatorX(0, 0, 3, 0, 1, 2, 2, 0);

    this.faceRotator(4, -1);
    this.faceRotator(5, 1);

    this.colors = this.arrCopy(this.storage);
    this.turns.push("X\'");

  }

  Y() {

    this.edgeRotatorY(0, 4, 1, 5, 2);
    this.edgeRotatorY(0, 4, 1, 5, 1);
    this.edgeRotatorY(0, 4, 1, 5, 0);

    this.faceRotator(3, 1);
    this.faceRotator(2, -1);

    this.colors = this.arrCopy(this.storage);
    this.turns.push("Y");

  }

  YPrime() {

    this.edgeRotatorY(0, 5, 1, 4, 2);
    this.edgeRotatorY(0, 5, 1, 4, 1);
    this.edgeRotatorY(0, 5, 1, 4, 0);

    this.faceRotator(3, -1);
    this.faceRotator(2, 1);

    this.colors = this.arrCopy(this.storage);
    this.turns.push("Y\'");

  }

  Z() {

    this.edgeRotatorZ(0, 5, 2, 2, 4, 0, 1);
    this.edgeRotatorZ(1, 5, 1, 1, 4, 1, 1);
    this.edgeRotatorZ(2, 5, 0, 0, 4, 2, -1);

    this.faceRotator(0, 1);
    this.faceRotator(1, -1);

    this.colors = this.arrCopy(this.storage);
    this.turns.push("Z");

  }

  ZPrime() {

    this.edgeRotatorZ(0, 4, 0, 2, 5, 2, -1);
    this.edgeRotatorZ(1, 4, 1, 1, 5, 1, -1);
    this.edgeRotatorZ(2, 4, 2, 0, 5, 0, 1);

    this.faceRotator(0, -1);
    this.faceRotator(1, 1);

    this.colors = this.arrCopy(this.storage);
    this.turns.push("Z\'");

  }

  scramble() {

    for (let i = 0; i < 30; i++) {

      let rand = int(random(18));
      if (rand == 0) {
        this.R();
      } else if (rand == 1) {
        this.RPrime();
      } else if (rand == 2) {
        this.L();
      } else if (rand == 3) {
        this.LPrime();
      } else if (rand == 4) {
        this.U();
      } else if (rand == 5) {
        this.UPrime();
      } else if (rand == 6) {
        this.D();
      } else if (rand == 7) {
        this.DPrime();
      } else if (rand == 8) {
        this.F();
      } else if (rand == 9) {
        this.FPrime();
      } else if (rand == 10) {
        this.B();
      } else if (rand == 11) {
        this.BPrime();
      }

    }

  }

  equal(a1, a2, a3, b1, b2 = 1, b3 = 1) {
    return this.colors[a1][a2][a3] == this.colors[b1][b2][b3];
  }

  whiteCross() {

    for (let i = 0; i < 2; i++) {

      // Edges On Bottom Of Middle Faces
      if (this.equal(0, 1, 0, 2)) {
        this.FPrime();
        this.D();
        this.RPrime();
      }

      if (this.equal(4, 1, 0, 2)) {
        this.RPrime();
        this.D();
        this.BPrime();
      }

      if (this.equal(1, 1, 0, 2)) {
        this.BPrime();
        this.D();
        this.LPrime();
      }

      if (this.equal(5, 1, 0, 2)) {
        this.LPrime();
        this.D();
        this.FPrime();
      }

      // Edges On Top Of Middle Faces
      if (this.equal(0, 1, 2, 2)) {
        while (this.equal(2, 0, 1, 2)) {
          this.D();
        }
        this.F();
        this.D();
        this.RPrime();
      }

      if (this.equal(4, 1, 2, 2)) {
        while (this.equal(2, 2, 1, 2)) {
          this.D();
        }
        this.R();
        this.D();
        this.BPrime();
      }

      if (this.equal(1, 1, 2, 2)) {
        while (this.equal(2, 1, 2, 2)) {
          this.D();
        }
        this.B();
        this.D();
        this.LPrime();
      }

      if (this.equal(5, 1, 2, 2)) {
        while (this.equal(2, 1, 0, 2)) {
          this.D();
        }
        this.L();
        this.D();
        this.FPrime();
      }

      // Edges On Middle Of Middle Faces
      if (this.equal(0, 0, 1, 2)) {
        while (this.equal(2, 0, 1, 2)) {
          this.D();
        }
        this.L();
      }

      if (this.equal(0, 2, 1, 2)) {
        while (this.equal(2, 2, 1, 2)) {
          this.D();
        }
        this.RPrime();
      }

      if (this.equal(4, 0, 1, 2)) {
        while (this.equal(2, 1, 2, 2)) {
          this.D();
        }
        this.F();
      }

      if (this.equal(4, 2, 1, 2)) {
        while (this.equal(2, 1, 0, 2)) {
          this.D();
        }
        this.BPrime();
      }

      if (this.equal(1, 0, 1, 2)) {
        while (this.equal(2, 2, 1, 2)) {
          this.D();
        }
        this.R();
      }

      if (this.equal(1, 2, 1, 2)) {
        while (this.equal(2, 0, 1, 2)) {
          this.D();
        }
        this.LPrime();
      }

      if (this.equal(5, 0, 1, 2)) {
        while (this.equal(2, 1, 0, 2)) {
          this.D();
        }
        this.B();
      }

      if (this.equal(5, 2, 1, 2)) {
        while (this.equal(2, 1, 2, 2)) {
          this.D();
        }
        this.FPrime();
      }

      // Edges On Top Face
      if (this.equal(3, 1, 0, 2)) {
        // Turn Until Free Space
        while (this.equal(2, 1, 2, 2)) {
          this.D();
        }
        this.F();
        this.F();
      }

      if (this.equal(3, 2, 1, 2)) {
        while (this.equal(2, 2, 1, 2)) {
          this.D();
        }
        this.R();
        this.R();
      }

      if (this.equal(3, 1, 2, 2)) {
        while (this.equal(2, 1, 0, 2)) {
          this.D();
        }
        this.B();
        this.B();
      }

      if (this.equal(3, 0, 1, 2)) {
        while (this.equal(2, 0, 1, 2)) {
          this.D();
        }
        this.L();
        this.L();
      }

    }

  }

  // Counts White Edges In the Correct Place
  edgeCount() {
    let count = 0;
    if (this.equal(0, 1, 0, 0)) {
      count += 1;
    }
    if (this.equal(4, 1, 0, 4)) {
      count += 1;
    }
    if (this.equal(1, 1, 0, 1)) {
      count += 1;
    }
    if (this.equal(5, 1, 0, 5)) {
      count += 1;
    }
    return count
  }

  whiteCrossOrientation() {

    while (this.edgeCount() < 2) {
      this.D();
    }

    // Opposite Colors Front + Back
    if (this.equal(0, 1, 0, 1)) {
      this.M();
      this.M();
      this.U();
      this.U();
      this.M();
      this.M();
    }

    // Opposite Colors Right + Left
    if (this.equal(4, 1, 0, 5)) {
      this.S();
      this.S();
      this.U();
      this.U();
      this.S();
      this.S();
    }

    // Color Swap Left + Front
    if (this.equal(0, 1, 0, 5)) {
      this.F();
      this.D();
      this.FPrime();
      this.DPrime();
      this.F();
    }

    // Color Swap Front + Right
    if (this.equal(4, 1, 0, 0)) {
      this.R();
      this.D();
      this.RPrime();
      this.DPrime();
      this.R();
    }

    // Color Swap Right + Back
    if (this.equal(1, 1, 0, 4)) {
      this.B();
      this.D();
      this.BPrime();
      this.DPrime();
      this.B();
    }

    // Color Swap Back + Left
    if (this.equal(5, 1, 0, 1)) {
      this.L();
      this.D();
      this.LPrime();
      this.DPrime();
      this.L();
    }

  }

  whiteCorners() {

    for (let i = 0; i < 12; i++) {

      // Color On Front Face
      if (this.equal(0, 2, 2, 2)) {
        // Turn Until Above Correct Slot
        while (!this.equal(4, 0, 2, 4)) {
          this.D();
          this.E();
        }
        this.FPrime();
        this.UPrime();
        this.F();
        this.U();
      }

      // Color On Right Face
      if (this.equal(4, 0, 2, 2)) {
        while (!this.equal(0, 2, 2, 0)) {
          this.D();
          this.E();
        }
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
      }

      // Color On Top Face
      if (this.equal(3, 2, 0, 2)) {
        while (!this.equal(0, 2, 2, 4)) {
          this.D();
          this.E();
        }
        this.R();
        this.U();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
      }

      // Cube On Bottom Layer Disoriented - White On Front Face
      if (this.equal(0, 2, 0, 2)) {
        this.R();
        this.UPrime();
        this.RPrime();
        while (!this.equal(4, 0, 2, 4)) {
          this.D();
          this.E();
        }
        this.FPrime();
        this.UPrime();
        this.F();
      }

      // Cube On Bottom Layer Disoriented - White On Right Face
      if (this.equal(4, 0, 0, 2)) {
        this.FPrime();
        this.U();
        this.F();
        while (!this.equal(0, 2, 2, 0)) {
          this.D();
          this.E();
        }
        this.R();
        this.U();
        this.RPrime();
      }

      // Cube On Bottom Layer Disoriented - White On Bottom Face
      if (this.equal(2, 2, 2, 2) && !this.equal(0, 2, 0, 0)) {
        this.FPrime();
        this.U();
        this.F();
        while (!this.equal(4, 0, 2, 4)) {
          this.D();
          this.E();
        }
        this.FPrime();
        this.UPrime();
        this.F();
      }

      this.Y();

    }

  }

  middleEdges() {
    while (!this.equal(0, 0, 1, 0) || !this.equal(0, 2, 1, 0) || !this.equal(4, 0, 1, 4) || !this.equal(4, 2, 1, 4) || !this.equal(1, 0, 1, 1) || !this.equal(1, 2, 1, 1) || !this.equal(5, 0, 1, 5) || !this.equal(5, 2, 1, 5)) {

      if (!this.equal(0, 1, 2, 3) && !this.equal(3, 1, 0, 3)) {

        while (this.colors[0][1][2] != this.colors[0][1][1]) {
          this.D();
          this.E();
        }

        if (this.colors[3][1][0] == this.colors[4][1][1]) {
          this.U();
          this.R();
          this.UPrime();
          this.RPrime();
          this.UPrime();
          this.FPrime();
          this.U();
          this.F();
          this.U();
        } else {
          this.UPrime();
          this.LPrime();
          this.U();
          this.L();
          this.U();
          this.F();
          this.UPrime();
          this.FPrime();
          this.UPrime();
        }
      }

      // Take Cube Out If In The Wrong Slot
      if (!this.equal(0, 2, 1, 3) && !this.equal(4, 0, 1, 3)) {
        if (!this.equal(0, 2, 1, 0) || !this.equal(4, 0, 1, 4)) {
          this.R();
          this.UPrime();
          this.RPrime();
          this.UPrime();
          this.FPrime();
          this.U();
          this.F();
        }
      }

      this.Y();

    }

  }

  OLL(testOLL) {

    for (let i = 0; i < 4; i++) {


      // Cross Formed

      // R U R' U [R U2' R']
      // OLL 27 (Sune)
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 0, 0, 3) && this.equal(0, 2, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.R();
        this.U();
        this.RPrime();
        this.U();
        this.R();
        this.U();
        this.U();
        this.RPrime();

        if (testOLL) {
          print(27);
        }
        break;

      }

      // R U2 R' U' R U' R'
      // OLL 26 (AntiSune)
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(0, 0, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.R();
        this.U();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.UPrime();
        this.RPrime();

        if (testOLL) {
          print(26);
        }
        break;

      }

      // R U2 R' U' R U R' U' R U' R'
      // OLL 21
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(0, 2, 2, 3) && this.equal(0, 0, 2, 3) && this.equal(1, 0, 2, 3)) {

        this.R();
        this.U();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.UPrime();
        this.RPrime();

        if (testOLL) {
          print(21);
        }
        break;

      }

      // R U2' [R2 U'] [R2 U'] R2 U2' R
      // OLL 22
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(0, 2, 2, 3) && this.equal(1, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.R();
        this.U();
        this.U();
        this.R();
        this.R();
        this.UPrime();
        this.R();
        this.R();
        this.UPrime();
        this.R();
        this.R();
        this.U();
        this.U();
        this.R();

        if (testOLL) {
          print(22);
        }
        break;

      }

      // R2 D [R' U2 R] D' [R' U2 R']
      // OLL 23 (Superman)
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(0, 0, 2, 3) && this.equal(0, 2, 2, 3) && this.equal(3, 2, 2, 3)) {

        this.R();
        this.R();
        this.D();
        this.RPrime();
        this.U();
        this.U();
        this.R();
        this.DPrime();
        this.RPrime();
        this.U();
        this.U();
        this.RPrime();

        if (testOLL) {
          print(23);
        }
        break;

      }

      // r U R' U' r' [F R F']
      // OLL 24
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(0, 0, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 2, 2, 3)) {

        this.R();
        this.MPrime();
        this.U();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.M();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(24);
        }
        break;

      }

      // x [U R' U'] L [U R U' r']
      // OLL 25
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(0, 0, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(4, 2, 2, 3)) {

        this.F();
        this.RPrime();
        this.FPrime();
        this.MPrime();
        this.R();
        this.U();
        this.R();
        this.UPrime();
        this.M();
        this.RPrime();

        if (testOLL) {
          print(25);
        }
        break;

      }


      // No Edges

      // R U2 [R2' F R F'] U2' [R' F R F']
      // OLL 1
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(4, 0, 2, 3) && this.equal(4, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.R();
        this.U();
        this.U();
        this.R();
        this.R();
        this.F();
        this.R();
        this.FPrime();
        this.U();
        this.U();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(1);
        }
        break;

      }

      // [F R U R' U' F'] [f R U R' U' f']
      // OLL 2
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(0, 2, 2, 3) && this.equal(1, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();
        this.F();
        this.S();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();
        this.SPrime();

        if (testOLL) {
          print(2);
        }
        break;

      }

      // [f R U R' U' f'] U' [F R U R' U' F']
      // OLL 3
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(4, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.F();
        this.S();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();
        this.SPrime();
        this.UPrime();
        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();

        if (testOLL) {
          print(3);
        }
        break;

      }

      // [f R U R' U' f'] U [F R U R' U' F']
      // OLL 4
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(4, 0, 2, 3) && this.equal(5, 0, 2, 3)) {

        this.F();
        this.S();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();
        this.SPrime();
        this.U();
        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();

        if (testOLL) {
          print(4);
        }
        break;

      }

      // [R U R' U] [R' F R F'] U2 [R' F R F']
      // OLL 17
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.R();
        this.U();
        this.RPrime();
        this.U();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();
        this.U();
        this.U();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(17);
        }
        break;

      }

      // [F R U R' U] y' R' U2 [R' F R F']
      // OLL 18
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(1, 2, 2, 3)) {

        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.U();
        this.YPrime();
        this.RPrime();
        this.U();
        this.U();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(18);
        }
        break;

      }

      // M U [R U R' U'] M' [R' F R F']
      // OLL 19
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(3, 0, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.M();
        this.U();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.MPrime();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(19);
        }
        break;

      }

      // M U R U R' U' M2 [U R U' r']
      // OLL 20
      if (!this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(3, 0, 0, 3)) {

        this.M();
        this.U();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.M();
        this.M();
        this.U();
        this.R();
        this.UPrime();
        this.RPrime();
        this.M();

        if (testOLL) {
          print(20);
        }
        break;

      }


      // C Shapes

      // R' U' [R' F R F'] U R
      // OLL 46
      if (this.equal(3, 1, 0, 3) && this.equal(3, 1, 2, 3) && !this.equal(3, 0, 1, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();
        this.U();
        this.R();

        if (testOLL) {
          print(46);
        }
        break;

      }

      // R U R2 U' R' F R U R U' F'
      // OLL 34
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(4, 2, 2, 3)) {

        this.R();
        this.U();
        this.R();
        this.R();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.U();
        this.R();
        this.UPrime();
        this.FPrime();

        if (testOLL) {
          print(34);
        }
        break;

      }


      // I Shapes

      // R U2 R2 U' R U' R' U2 F R F'
      // OLL 55
      if (this.equal(3, 1, 0, 3) && this.equal(3, 1, 2, 3) && !this.equal(3, 0, 1, 3) && this.equal(4, 0, 2, 3) && this.equal(4, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.R();
        this.U();
        this.U();
        this.R();
        this.R();
        this.UPrime();
        this.R();
        this.UPrime();
        this.RPrime();
        this.U();
        this.U();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(55);
        }
        break;

      }

      // R U R' U R d' R U' R' F'
      // OLL 52
      if (this.equal(3, 1, 0, 3) && this.equal(3, 1, 2, 3) && !this.equal(3, 0, 1, 3) && this.equal(4, 0, 2, 3) && this.equal(4, 2, 2, 3) && this.equal(0, 0, 2, 3)) {

        this.R();
        this.U();
        this.RPrime();
        this.U();
        this.R();
        this.DPrime();
        this.EPrime();
        this.R();
        this.UPrime();
        this.RPrime();
        this.FPrime();

        if (testOLL) {
          print(52);
        }
        break;

      }

      // f [R U R' U'] [R U R' U'] f'
      // OLL 51
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(0, 2, 2, 3) && this.equal(5, 2, 2, 3) && this.equal(5, 0, 2, 3)) {

        this.F();
        this.S();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();
        this.SPrime();

        if (testOLL) {
          print(51);
        }
        break;

      }

      // [F R U R' U' R] F' [r U R' U'] r'
      // OLL 56
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 0, 3) && this.equal(4, 0, 2, 3) && this.equal(4, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.FPrime();
        this.L();
        this.F();
        this.RPrime();
        this.FPrime();
        this.LPrime();

        if (testOLL) {
          print(56);
        }
        break;

      }


      // L Shapes

      // F [R U R' U'] [R U R' U'] F'
      // OLL 48
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(0, 2, 2, 3) && this.equal(5, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();

        if (testOLL) {
          print(48);
        }
        break;

      }

      // [F' L' U' L U] [L' U' L U] F
      // OLL 47
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(0, 0, 2, 3) && this.equal(4, 0, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.FPrime();
        this.LPrime();
        this.UPrime();
        this.L();
        this.U();
        this.LPrime();
        this.UPrime();
        this.L();
        this.U();
        this.F();

        if (testOLL) {
          print(47);
        }
        break;

      }

      // [r U R' U] [R U' R' U] [R U2' r']
      // OLL 54
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(4, 0, 2, 3) && this.equal(5, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.R();
        this.MPrime();
        this.U();
        this.RPrime();
        this.U();
        this.R();
        this.UPrime();
        this.RPrime();
        this.U();
        this.R();
        this.U();
        this.U();
        this.RPrime();
        this.M();

        if (testOLL) {
          print(54);
        }
        break;

      }

      // [l' U' L U'] [L' U L U'] [L' U2 l]
      // OLL 53
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(4, 0, 2, 3) && this.equal(5, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.LPrime();
        this.MPrime();
        this.UPrime();
        this.L();
        this.UPrime();
        this.LPrime();
        this.U();
        this.L();
        this.UPrime();
        this.LPrime();
        this.U();
        this.U();
        this.L();
        this.M();

        if (testOLL) {
          print(53);
        }
        break;

      }

      // [R' F R' F'] R2 U2' y [R' F R F']
      // OLL 49
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(0, 2, 2, 3) && this.equal(5, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.RPrime();
        this.F();
        this.RPrime();
        this.FPrime();
        this.R();
        this.R();
        this.U();
        this.U();
        this.BPrime();
        this.R();
        this.B();
        this.RPrime();

        if (testOLL) {
          print(49);
        }
        break;

      }

      // R' F R2 B' R2' F' R2 B R'
      // OLL 50
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(0, 0, 2, 3) && this.equal(4, 0, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.RPrime();
        this.F();
        this.R();
        this.R();
        this.BPrime();
        this.R();
        this.R();
        this.FPrime();
        this.R();
        this.R();
        this.B();
        this.RPrime();

        if (testOLL) {
          print(50);
        }
        break;

      }


      // P Shapes

      // F [U R U' R'] F'
      // OLL 44
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.F();
        this.U();
        this.R();
        this.UPrime();
        this.RPrime();
        this.FPrime();

        if (testOLL) {
          print(44);
        }
        break;

      }

      // F' [U' L' U L] F
      // OLL 43
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.FPrime();
        this.UPrime();
        this.LPrime();
        this.U();
        this.L();
        this.F();

        if (testOLL) {
          print(43);
        }
        break;

      }

      // R U B' U' R' U R B R'
      // OLL 32
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(0, 0, 2, 3)) {

        this.R();
        this.U();
        this.BPrime();
        this.UPrime();
        this.RPrime();
        this.U();
        this.R();
        this.B();
        this.RPrime();

        if (testOLL) {
          print(32);
        }
        break;

      }

      // [R' U'] F [U R U' R'] F' R
      // OLL 31
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(0, 0, 2, 3)) {

        this.RPrime();
        this.UPrime();
        this.F();
        this.U();
        this.R();
        this.UPrime();
        this.RPrime();
        this.FPrime();
        this.R();

        if (testOLL) {
          print(31);
        }
        break;

      }


      // T Shapes

      // F [R U R' U'] F'
      // OLL 45
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();

        if (testOLL) {
          print(45);
        }
        break;

      }

      // [R U R' U'] [R' F R F']
      // OLL 33
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(0, 0, 2, 3)) {

        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(33);
        }
        break;

      }


      // W Shapes

      // [R U R' U] [R U' R' U'] [R' F R F']
      // OLL 38
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.R();
        this.U();
        this.RPrime();
        this.U();
        this.R();
        this.UPrime();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(38);
        }
        break;

      }

      // [L' U' L U'] [L' U L U] [L F' L' F]
      // OLL 36
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.LPrime();
        this.UPrime();
        this.L();
        this.UPrime();
        this.LPrime();
        this.U();
        this.L();
        this.U();
        this.L();
        this.FPrime();
        this.LPrime();
        this.F();

        if (testOLL) {
          print(36);
        }
        break;

      }


      // Small Lightning Bolt With Dot

      // R2 U R' B' R U' R2 U R B R'
      // OLL 30
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(3, 2, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.R();
        this.R();
        this.U();
        this.RPrime();
        this.BPrime();
        this.R();
        this.UPrime();
        this.R();
        this.R();
        this.U();
        this.R();
        this.B();
        this.RPrime();

        if (testOLL) {
          print(30);
        }
        break;

      }

      // M U [R U R' U'] [R' F R F'] M'
      // OLL 29
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(3, 2, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.M();
        this.U();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();
        this.MPrime();

        if (testOLL) {
          print(29);
        }
        break;

      }

      // R U' R' U2] R U y R U' R' U' F'
      // OLL 41
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(1, 0, 2, 3)) {

        this.L();
        this.UPrime();
        this.LPrime();
        this.U();
        this.U();
        this.L();
        this.U();
        this.F();
        this.UPrime();
        this.FPrime();
        this.UPrime();
        this.LPrime();

        if (testOLL) {
          print(41);
        }
        break;

      }

      // R' U2 [R U R' U] R y [F R U R' U' F']
      // OLL 42
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.RPrime();
        this.U();
        this.U();
        this.R();
        this.U();
        this.RPrime();
        this.U();
        this.R();
        this.R();
        this.B();
        this.U();
        this.BPrime();
        this.UPrime();
        this.RPrime();

        if (testOLL) {
          print(42);
        }
        break;

      }


      // Fish Shapes

      // F R U' R' U' R U R' F'
      // OLL 37
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 0, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(0, 0, 2, 3)) {

        this.F();
        this.R();
        this.UPrime();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
        this.FPrime();

        if (testOLL) {
          print(37);
        }
        break;

      }

      // R U2' [R2 F R F'] [R U2 R']
      // OLL 35  
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(0, 0, 2, 3)) {

        this.R();
        this.U();
        this.U();
        this.R();
        this.R();
        this.F();
        this.R();
        this.FPrime();
        this.R();
        this.U();
        this.U();
        this.RPrime();

        if (testOLL) {
          print(35);
        }
        break;

      }

      // [R U R'] y R' F R U' R' F' R
      // OLL 10
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(4, 2, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.F();
        this.U();
        this.FPrime();
        this.RPrime();
        this.F();
        this.R();
        this.UPrime();
        this.RPrime();
        this.FPrime();
        this.R();

        if (testOLL) {
          print(10);
        }
        break;

      }

      // [R' U' R] y' x' R U' R' F R U R'
      // OLL 9
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(0, 0, 2, 3) && this.equal(5, 0, 2, 3)) {

        this.RPrime();
        this.UPrime();
        this.R();
        this.F();
        this.RPrime();
        this.FPrime();
        this.U();
        this.F();
        this.R();
        this.FPrime();

        if (testOLL) {
          print(9);
        }
        break;

      }


      // Knight Move Shapes

      // r U' r' U' r U r' y' [R' U R]
      // OLL 13
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 0, 0, 3) && this.equal(0, 2, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.L();
        this.FPrime();
        this.LPrime();
        this.UPrime();
        this.L();
        this.F();
        this.LPrime();
        this.FPrime();
        this.U();
        this.F();

        if (testOLL) {
          print(13);
        }
        break;

      }

      // R' F R U R' F' R y' [R U' R']
      // OLL 14
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(0, 0, 2, 3) && this.equal(5, 0, 2, 3)) {

        this.RPrime();
        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.FPrime();
        this.R();
        this.F();
        this.UPrime();
        this.FPrime();

        if (testOLL) {
          print(14);
        }
        break;

      }

      // [r U r'] [R U R' U'] [r U' r']
      // OLL 15
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 2, 2, 3) && this.equal(0, 0, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.L();
        this.F();
        this.LPrime();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.L();
        this.FPrime();
        this.LPrime();

        if (testOLL) {
          print(15);
        }
        break;

      }

      // [l' U' l] [L' U' L U] [l' U l]
      // OLL 16
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 0, 2, 3) && this.equal(0, 2, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.RPrime();
        this.FPrime();
        this.R();
        this.LPrime();
        this.UPrime();
        this.L();
        this.U();
        this.RPrime();
        this.F();
        this.R();

        if (testOLL) {
          print(16);
        }
        break;

      }


      // Big Lightning Bolt Shapes

      // [R' F R U R' U' F'] U R
      // OLL 40
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(5, 2, 2, 3)) {

        this.RPrime();
        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.FPrime();
        this.U();
        this.R();

        if (testOLL) {
          print(40);
        }
        break;

      }

      // [L F' L' U' L U F] U' L'
      // OLL 39
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 2, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.L();
        this.FPrime();
        this.LPrime();
        this.UPrime();
        this.L();
        this.U();
        this.F();
        this.UPrime();
        this.LPrime();

        if (testOLL) {
          print(39);
        }
        break;

      }


      // Small Lightning Bolt Shapes

      // [l' U' L U'] [L' U2 l]
      // OLL 8
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 0, 3) && this.equal(0, 0, 2, 3) && this.equal(5, 0, 2, 3)) {

        this.RPrime();
        this.FPrime();
        this.L();
        this.FPrime();
        this.LPrime();
        this.F();
        this.F();
        this.R();

        if (testOLL) {
          print(8);
        }
        break;

      }

      // [r U R' U] [R U2' r']
      // OLL 7
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 0, 0, 3) && this.equal(0, 2, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.L();
        this.F();
        this.RPrime();
        this.F();
        this.R();
        this.F();
        this.F();
        this.LPrime();

        if (testOLL) {
          print(7);
        }
        break;

      }

      // M U2 [R' U' R U' R' U2 R] U M'
      // OLL 12
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 2, 0, 3) && this.equal(0, 0, 2, 3) && this.equal(5, 0, 2, 3)) {

        this.M();
        this.U();
        this.U();
        this.RPrime();
        this.UPrime();
        this.R();
        this.UPrime();
        this.RPrime();
        this.U();
        this.U();
        this.R();
        this.U();
        this.MPrime();

        if (testOLL) {
          print(12);
        }
        break;

      }

      // [F' L' U' L U F] y [F R U R' U' F']
      // OLL 11
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(0, 2, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.FPrime();
        this.LPrime();
        this.UPrime();
        this.L();
        this.U();
        this.F();
        this.R();
        this.B();
        this.U();
        this.BPrime();
        this.UPrime();
        this.RPrime();

        if (testOLL) {
          print(11);
        }
        break;

      }


      // Square Shapes

      // r U2' R' U' R U' r'
      // OLL 6
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 2, 2, 3) && this.equal(0, 0, 2, 3) && this.equal(4, 0, 2, 3)) {

        this.L();
        this.F();
        this.F();
        this.RPrime();
        this.FPrime();
        this.R();
        this.FPrime();
        this.LPrime();

        if (testOLL) {
          print(6);
        }
        break;

      }

      // l' U2 L U L' U l
      // OLL 5
      if (this.equal(3, 0, 1, 3) && !this.equal(3, 2, 1, 3) && this.equal(3, 1, 2, 3) && this.equal(3, 0, 2, 3) && this.equal(0, 2, 2, 3) && this.equal(4, 2, 2, 3)) {

        this.RPrime();
        this.F();
        this.F();
        this.L();
        this.F();
        this.LPrime();
        this.F();
        this.R();

        if (testOLL) {
          print(5);
        }
        break;

      }


      // Arrow And H Shapes

      // M' U M U2 M' U M
      // OLL 28
      if (!this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && this.equal(3, 1, 0, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(3, 2, 0, 3)) {

        this.MPrime();
        this.U();
        this.M();
        this.U();
        this.U();
        this.MPrime();
        this.U();
        this.M();

        if (testOLL) {
          print(28);
        }
        break;

      }

      // [R U R' U'] M' [U R U' r']
      // OLL 57
      if (this.equal(3, 0, 1, 3) && this.equal(3, 2, 1, 3) && !this.equal(3, 1, 2, 3) && this.equal(3, 0, 0, 3) && this.equal(3, 0, 2, 3) && this.equal(3, 2, 0, 3)) {

        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.MPrime();
        this.U();
        this.R();
        this.UPrime();
        this.RPrime();
        this.M();

        if (testOLL) {
          print(57);
        }
        break;

      }


      this.Y()

    }

  }

  PLL(testPLL) {

    for (let i = 0; i < 4; i++) {


      // Edge Permutations

      if (!this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 0, 2, 0, 2, 2) && !this.equal(4, 0, 2, 4, 1, 2) && this.equal(4, 0, 2, 4, 2, 2) && !this.equal(5, 0, 2, 5, 1, 2) && this.equal(5, 0, 2, 5, 2, 2)) {

        // M2 U M U2 M' U M2
        // Ua Perm
        if (this.equal(1, 0, 2, 1, 1, 2) && this.equal(0, 1, 2, 4, 0, 2)) {

          this.M();
          this.M();
          this.U();
          this.M();
          this.U();
          this.U();
          this.MPrime();
          this.U();
          this.M();
          this.M();

          if (testPLL) {
            print("Ua");
          }
          break;

          // M2 U' M U2 M' U' M2
          // Ub Perm
        } else if (this.equal(1, 0, 2, 1, 1, 2)) {

          this.M();
          this.M();
          this.UPrime();
          this.M();
          this.U();
          this.U();
          this.MPrime();
          this.UPrime();
          this.M();
          this.M();

          if (testPLL) {
            print("Ub");
          }
          break;

          // M2 U M2 U2 M2 U M2
          // H Perm
        } else if (this.equal(1, 1, 2, 0, 0, 2)) {

          this.M();
          this.M();
          this.U();
          this.M();
          this.M();
          this.U();
          this.U();
          this.M();
          this.M();
          this.U();
          this.M();
          this.M();

          if (testPLL) {
            print("H");
          }
          break;

          // M2 U M2 U M' U2 M2 U2 M' U2
          // Z Perm
        } else {

          if (this.equal(0, 1, 2, 5, 2, 2)) {
            this.U();
          }

          this.M();
          this.M();
          this.U();
          this.M();
          this.M();
          this.U();
          this.MPrime();
          this.U();
          this.U();
          this.M();
          this.M();
          this.U();
          this.U();
          this.MPrime();

          if (testPLL) {
            print("Z");
          }
          break;

        }

      }


      // Corner Permutations

      if (this.equal(0, 0, 2, 0, 1, 2) && !this.equal(0, 1, 2, 0, 2, 2) && !this.equal(5, 0, 2, 5, 1, 2) && this.equal(5, 1, 2, 5, 2, 2) && !(this.equal(0, 2, 2, 4, 1, 2) && this.equal(5, 0, 2, 1, 1, 2))) {

        // l' U R' D2 R U' R' D2 R2
        // Aa Perm
        if (this.equal(0, 2, 2, 4, 1, 2)) {

          this.R();
          this.R();
          this.B();
          this.B();
          this.R();
          this.F();
          this.RPrime();
          this.B()
          this.B()
          this.R();
          this.FPrime();
          this.R();

          if (testPLL) {
            print("Aa");
          }
          break;

          // l U' R D2 R' U R D2 R2
          // Ab Perm
        } else {

          this.RPrime();
          this.F();
          this.RPrime();
          this.B();
          this.B();
          this.R();
          this.FPrime();
          this.RPrime();
          this.B();
          this.B();
          this.R();
          this.R();

          if (testPLL) {
            print("Ab");
          }
          break;

        }

      }

      // x' [R U' R' D] [R U R' D'] [R U R' D] [R U' R' D']
      // E Perm
      if (this.equal(0, 2, 2, 4, 1, 2) && this.equal(4, 1, 2, 1, 0, 2) && this.equal(1, 2, 2, 5, 1, 2) && this.equal(5, 1, 2, 0, 0, 2)) {

        this.R();
        this.BPrime();
        this.RPrime();
        this.F();
        this.R();
        this.B();
        this.RPrime();
        this.FPrime();
        this.R();
        this.B();
        this.RPrime();
        this.F();
        this.R();
        this.BPrime();
        this.RPrime();
        this.FPrime();

        if (testPLL) {
          print("E");
        }
        break;

      }


      // Corner And Edge Swap Permutations

      // [R U R' U'] R' F R2 U' R' U' [R U R' F']
      // T Perm
      if (this.equal(0, 0, 2, 0, 1, 2) && !this.equal(0, 1, 2, 0, 2, 2) && !this.equal(1, 0, 2, 1, 1, 2) && this.equal(1, 1, 2, 1, 2, 2)) {

        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.R();
        this.UPrime();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
        this.FPrime();

        if (testPLL) {
          print("T");
        }
        break;

      }

      // R' U' F' [R U R' U'] [R' F R2 U' R' U'] R U R' U R
      // F Perm
      if (this.equal(5, 0, 2, 5, 1, 2) && this.equal(5, 1, 2, 5, 2, 2) && !this.equal(0, 0, 2, 0, 1, 2) && !this.equal(1, 1, 2, 1, 2, 2) && !this.equal(0, 0, 2, 0, 2, 2)) {

        this.RPrime();
        this.UPrime();
        this.FPrime();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.R();
        this.UPrime();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
        this.U();
        this.R();

        if (testPLL) {
          print("F");
        }
        break;

      }

      // [R' U L'] U2 [R U' R' U2] L R
      // Ja Perm
      if (this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 1, 2, 0, 2, 2) && this.equal(4, 0, 2, 4, 1, 2) && !this.equal(5, 1, 2, 5, 2, 2)) {

        this.RPrime();
        this.U();
        this.LPrime();
        this.U();
        this.U();
        this.R();
        this.UPrime();
        this.RPrime();
        this.U();
        this.U();
        this.L();
        this.R();

        if (testPLL) {
          print("Ja");
        }
        break;

      }

      // [L U' R] U2 [L' U L U2] R' L'
      // Jb Perm
      if (this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 1, 2, 0, 2, 2) && !this.equal(4, 0, 2, 4, 1, 2) && this.equal(5, 1, 2, 5, 2, 2)) {

        this.L();
        this.UPrime();
        this.R();
        this.U();
        this.U();
        this.LPrime();
        this.U();
        this.L();
        this.U();
        this.U();
        this.RPrime();
        this.LPrime();

        if (testPLL) {
          print("Jb");
        }
        break;

      }

      // [L U2' L' U2'] L F' L' U' L U L F L2' U
      // Ra Perm
      if (!this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 0, 2, 0, 2, 2) && this.equal(4, 0, 2, 4, 1, 2) && !this.equal(4, 1, 2, 4, 2, 2) && !this.equal(5, 1, 2, 5, 2, 2)) {

        this.L();
        this.U();
        this.U();
        this.LPrime();
        this.U();
        this.U();
        this.L();
        this.FPrime();
        this.LPrime();
        this.UPrime();
        this.L();
        this.U();
        this.L();
        this.F();
        this.L();
        this.L();
        this.U();

        if (testPLL) {
          print("Ra");
        }
        break;

      }

      // [R' U2 R U2] R' F R U R' U' R' F' R2 U'
      // Rb Perm
      if (!this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 0, 2, 0, 2, 2) && !this.equal(5, 0, 2, 5, 1, 2) && this.equal(5, 1, 2, 5, 2, 2) && !this.equal(4, 0, 2, 4, 1, 2)) {

        this.RPrime();
        this.U();
        this.U();
        this.R();
        this.U();
        this.U();
        this.RPrime();
        this.F();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.FPrime();
        this.R();
        this.R();

        if (testPLL) {
          print("Rb");
        }
        break;

      }

      // [R' U R' d'] R' F' R2 U' R' U R' F R F
      // V Perm
      if (this.equal(0, 0, 2, 0, 1, 2) && !this.equal(0, 1, 2, 0, 2, 2) && this.equal(5, 1, 2, 5, 2, 2) && !this.equal(5, 0, 2, 5, 1, 2) && this.equal(0, 2, 2, 4, 1, 2) && this.equal(5, 0, 2, 1, 1, 2)) {

        this.RPrime();
        this.U();
        this.RPrime();
        this.UPrime();
        this.BPrime();
        this.RPrime();
        this.B();
        this.B();
        this.UPrime();
        this.BPrime();
        this.U();
        this.BPrime();
        this.R();
        this.B();
        this.R();

        if (testPLL) {
          print("V");
        }
        break;

      }

      // [F R U' R' U' R U R' F'] [R U R' U'] [R' F R F']
      // Y Perm
      if (this.equal(0, 0, 2, 0, 1, 2) && !this.equal(0, 1, 2, 0, 2, 2) && !this.equal(4, 0, 2, 4, 1, 2) && this.equal(4, 1, 2, 4, 2, 2)) {

        this.F();
        this.R();
        this.UPrime();
        this.RPrime();
        this.UPrime();
        this.R();
        this.U();
        this.RPrime();
        this.FPrime();
        this.R();
        this.U();
        this.RPrime();
        this.UPrime();
        this.RPrime();
        this.F();
        this.R();
        this.FPrime();

        if (testPLL) {
          print("Y");
        }
        break;

      }

      // [L U' R U2 L' U R'] [L U' R U2 L' U R'] U
      // Na Perm
      if (!this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 1, 2, 0, 2, 2) && !this.equal(4, 0, 2, 4, 1, 2) && this.equal(4, 1, 2, 4, 2, 2) && !this.equal(1, 0, 2, 1, 1, 2) && !this.equal(5, 0, 2, 5, 1, 2)) {

        this.L();
        this.UPrime();
        this.R();
        this.U();
        this.U();
        this.LPrime();
        this.U();
        this.RPrime();
        this.L();
        this.UPrime();
        this.R();
        this.U();
        this.U();
        this.LPrime();
        this.U();
        this.RPrime();

        if (testPLL) {
          print("Na");
        }
        break;

      }

      // [R' U L' U2 R U' L] [R' U L' U2 R U' L] U'
      // Nb Perm
      if (this.equal(0, 0, 2, 0, 1, 2) && !this.equal(0, 1, 2, 0, 2, 2) && this.equal(4, 0, 2, 4, 1, 2) && !this.equal(4, 1, 2, 4, 2, 2) && !this.equal(1, 1, 2, 1, 2, 2) && !this.equal(5, 1, 2, 5, 2, 2)) {

        this.RPrime();
        this.U();
        this.LPrime();
        this.U();
        this.U();
        this.R();
        this.UPrime();
        this.L();
        this.RPrime();
        this.U();
        this.LPrime();
        this.U();
        this.U();
        this.R();
        this.UPrime();
        this.L();

        if (testPLL) {
          print("Nb");
        }
        break;

      }


      // G Permutations

      // [R2 u] R' U R' U' R u' R2 y' [R' U R]
      // Ga Perm
      if (!this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 1, 2, 0, 2, 2) && !this.equal(5, 0, 2, 5, 1, 2) && this.equal(5, 0, 2, 5, 2, 2) && !this.equal(4, 0, 2, 4, 1, 2)) {

        this.R();
        this.R();
        this.D();
        this.BPrime();
        this.U();
        this.BPrime();
        this.UPrime();
        this.B();
        this.DPrime();
        this.R();
        this.R();
        this.FPrime();
        this.U();
        this.F();

        if (testPLL) {
          print("Ga");
        }
        break;

      }

      // [L' U' L] y' [R2 u R' U R U' R u' R2]
      // Gb Perm
      if (!this.equal(0, 0, 2, 0, 1, 2) && this.equal(0, 1, 2, 0, 2, 2) && !this.equal(1, 0, 2, 1, 1, 2) && this.equal(1, 0, 2, 1, 2, 2) && !this.equal(4, 0, 2, 4, 1, 2)) {

        this.FPrime();
        this.UPrime();
        this.F();
        this.R();
        this.R();
        this.D();
        this.BPrime();
        this.U();
        this.B();
        this.UPrime();
        this.B();
        this.DPrime();
        this.R();
        this.R();

        if (testPLL) {
          print("Gb");
        }
        break;

      }

      // [R2 u'] R U' R U R' u R2 y [R U' R']
      // Gc Perm
      if (this.equal(1, 0, 2, 1, 1, 2) && !this.equal(1, 1, 2, 1, 2, 2) && !this.equal(5, 0, 2, 5, 1, 2) && this.equal(5, 0, 2, 5, 2, 2) && !this.equal(4, 1, 2, 4, 2, 2)) {

        this.R();
        this.R();
        this.DPrime();
        this.F();
        this.UPrime();
        this.F();
        this.U();
        this.FPrime();
        this.D();
        this.R();
        this.R();
        this.B();
        this.UPrime();
        this.BPrime();

        if (testPLL) {
          print("Gc");
        }
        break;

      }

      // [R U R'] y' R2 u' R U' R' U R' u R2
      // Gd Perm
      if (this.equal(4, 0, 2, 4, 1, 2) && !this.equal(4, 1, 2, 4, 2, 2) && !this.equal(5, 0, 2, 5, 1, 2) && this.equal(5, 0, 2, 5, 2, 2) && !this.equal(0, 1, 2, 0, 2, 2)) {

        this.R();
        this.U();
        this.RPrime();
        this.F();
        this.F();
        this.DPrime();
        this.L();
        this.UPrime();
        this.LPrime();
        this.U();
        this.LPrime();
        this.D();
        this.F();
        this.F();

        if (testPLL) {
          print("Gd");
        }
        break;

      }


      this.U();


    }

    while (!this.equal(0, 1, 2, 0)) {
      this.U();
    }

  }

  fullSolve(testOLL = false, testPLL = false) {

    this.whiteCross();
    this.whiteCrossOrientation();
    this.whiteCorners();
    this.middleEdges();
    this.OLL(testOLL);
    this.PLL(testPLL);

  }

}