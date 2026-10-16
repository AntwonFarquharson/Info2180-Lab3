window.onload = function () {

  var cells = document.querySelectorAll("#board div");
  var turn = "X";
  var status = document.getElementById("status");
  var resetBtn = document.querySelector(".btn");
  var board = ["", "", "", "", "", "", "", "", ""];

  // give each cell the square class
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add("square");
  }

  // set up each cell
  for (var i = 0; i < cells.length; i++) {

    cells[i].onclick = function () {

      // don't let them click a filled square
      if (this.textContent !== "") {
        return;
      }

      var pos = Array.prototype.indexOf.call(cells, this);
      this.textContent = turn;
      this.classList.add(turn);
      board[pos] = turn;

      // check if someone won
      var wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (var j = 0; j < wins.length; j++) {
        var x = wins[j][0];
        var y = wins[j][1];
        var z = wins[j][2];

        if (board[x] !== "" && board[x] === board[y] && board[y] === board[z]) {
          status.textContent = "Congratulations! " + board[x] + " is the Winner!";
          status.classList.add("you-won");
        }
      }

      // change player
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    };

    // hover in
    cells[i].onmouseover = function () {
      this.classList.add("hover");
    };

    // hover out
    cells[i].onmouseout = function () {
      this.classList.remove("hover");
    };
  }

  // new game button
  resetBtn.onclick = function () {
    for (var i = 0; i < cells.length; i++) {
      cells[i].textContent = "";
      cells[i].classList.remove("X");
      cells[i].classList.remove("O");
    }
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
  };

};