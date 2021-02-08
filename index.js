let turn = 0;
var totPlayers = [];
var gameOver = false;

var allValues = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

const startGame = () => {
  var p1Name = document.getElementById("name1").value;
  var p2Name = document.getElementById("name2").value;

  if (p1Name === "" || p2Name === "") {
    alert("Enter Both names");
    return;
  }
  totPlayers.push(p1Name);
  totPlayers.push(p2Name);
  document.getElementById("name1").setAttribute("disabled", true);
  document.getElementById("name2").setAttribute("disabled", true);

  document.querySelector(".container").classList.remove("hide");
  document.getElementsByClassName("chance").innerText = `'s turn`;
};

const toFill = (el) => {
  if (gameOver) return;

  if (el.innerText !== "") {
    return;
  }

  var indexes = el.id;
  var i = indexes[0];
  var j = indexes[1];

  if (turn % 2 === 0) {
    allValues[i][j] = "X";
  } else {
    allValues[i][j] = "O";
  }
  el.innerHTML = `<b>${allValues[i][j]}<b>`;

  if (turn > 3) {
    if (
      (allValues[0][2] !== "" &&
        allValues[0][0] === allValues[0][1] &&
        allValues[0][0] === allValues[0][2]) ||
      (allValues[1][2] !== "" &&
        allValues[1][0] === allValues[1][1] &&
        allValues[1][0] === allValues[1][2]) ||
      (allValues[2][2] !== "" &&
        allValues[2][0] === allValues[2][1] &&
        allValues[2][0] === allValues[2][2]) ||
      (allValues[2][0] !== "" &&
        allValues[0][0] === allValues[1][0] &&
        allValues[0][0] === allValues[2][0]) ||
      (allValues[2][1] !== "" &&
        allValues[0][1] === allValues[1][1] &&
        allValues[0][1] === allValues[2][1]) ||
      (allValues[2][2] !== "" &&
        allValues[0][2] === allValues[1][2] &&
        allValues[0][2] === allValues[2][2]) ||
      (allValues[2][2] !== "" &&
        allValues[0][0] === allValues[1][1] &&
        allValues[0][0] === allValues[2][2]) ||
      (allValues[0][2] !== "" &&
        allValues[2][0] === allValues[1][1] &&
        allValues[2][0] === allValues[0][2])
    ) {
      document.getElementById("winner").innerText = `${
        totPlayers[turn % 2]
      } won the match`;
      gameOver = true;
    }

    if (turn >= 8) {
      document.getElementById("winner").innerText = "Match Tie";
    }
  }
  turn++;
};
