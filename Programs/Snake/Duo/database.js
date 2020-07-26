class Firebase {

  constructor() {
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
    this.ref = firebase.database().ref("snakeDuo");
    this.ref.once("value", snapshot => console.log(snapshot.val()));
  }

  search(callback) {
    this.ref.once("value", snapshot => {

      const games = snapshot.val();
      if (games == null) {
        var gameName = "game1";
      } else {
        var lastKey = Object.keys(games).slice(-1)[0];
        var lastEl = games[lastKey];
        var gameName = "game" + (parseInt(lastKey.slice(-1)[0]) + 1);
      }

      if (games == null || lastEl[Object.keys(lastEl)[0]].gameFull) {

        this.gameRef = this.ref.child(gameName);
        console.log("hi");
        this.gameRef["gameFull"] = false;

        this.playerRef = this.gameRef.child("player1");
        this.oppRef = this.gameRef.child("player2");
        this.playerRef.push("filler");
        this.oppRef.push("filler");
        callback(1, 2);

      } else {

        this.gameRef = this.ref.child(lastKey);
        console.log("hi2");
        this.gameRef.update({
          gameFull: true
        });

        this.playerRef = this.gameRef.child("player2");
        this.oppRef = this.gameRef.child("player1");
        callback(2, 1);

      }

    });
  }

  read() {
    this.oppRef.on("child_changed", snapshot => {
      var oppSquares = snapshot.val();
      if (oppSquares != "filler") {
        game.opp.squares = this.arrtovec(oppSquares);
        this.oppRef.child(snapshot.key).remove();
      }
    });
  }

  write(squares) {
    this.playerRef.set({
      "squares": this.vectoarr(squares)
    });
  }

  arrtovec(arr) {
    var newArr = [];
    arr.forEach(coo => {
      newArr.push(createVector(coo[0], coo[1]));
    });
    return newArr;
  }

  vectoarr(vecs) {
    var newArr = [];
    vecs.forEach(vec => {
      newArr.push([vec.x, vec.y]);
    });
    return newArr;
  }

}
