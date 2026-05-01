// ✅ Fully Fixed & Clean Tic Tac Toe (Easy + Hard AI)

const body = document.querySelector(".contan");
const container = document.querySelector(".main");

// ================== COMMON ==================
let players = [];

const winningPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// ================== START ==================
function start() {
  body.innerHTML = `
    <div class="form">
      <h1>Enter Player Name</h1>
      <input id="Player1" placeholder="Enter Name" />
      <button onclick="getRobo()">Play With Robot</button>
    </div>
  `;
}

// ================== GET PLAYER ==================
function getRobo() {
  const p1 = document.getElementById("Player1").value;

  if (!p1) return alert("Enter name");

  players = [p1, "Robot"];

  body.innerHTML = `
    <div style="text-align:center;">
      <h2>Choose Mode</h2>
      <button onclick="startEasy()">Easy</button>
      <button onclick="startHard()">Hard</button>
    </div>
  `;
}

// ================== EASY MODE ==================
let board = ["", "", "", "", "", "", "", "", ""];
let current = "X";
const easyBtns = document.querySelectorAll(".g_btn");

function startEasy() {
  body.innerHTML = "";
  container.classList.remove("hide");
  resetEasy();
}

easyBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (board[i] !== "" || current !== "X") return;

    makeMove(i, "X", easyBtns, board);

    if (checkWinnerEasy() || checkDrawEasy()) return;

    setTimeout(robotEasy, 300);
  });
});

function robotEasy() {
  let empty = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);

  if (empty.length === 0) return;

  let move = empty[Math.floor(Math.random() * empty.length)];

  makeMove(move, "O", easyBtns, board);

  checkWinnerEasy() || checkDrawEasy();
}

function checkWinnerEasy() {
  for (let [a,b,c] of winningPatterns) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      showWinner(board[a]);
      disableAll(easyBtns);
      return true;
    }
  }
  return false;
}

function checkDrawEasy() {
  if (!board.includes("")) {
    alert("Draw");
    resetEasy();
    return true;
  }
  return false;
}

function resetEasy() {
  board = ["","","","","","","","",""];
  easyBtns.forEach(btn => {
    btn.innerHTML = "";
    btn.disabled = false;
  });
}

// ================== HARD MODE ==================
let hardBoard = ["","","","","","","","",""];
const hardBtns = document.querySelectorAll(".hg_btn");

function startHard() {
  body.innerHTML = "";
  document.querySelector("#Robohard").classList.remove("hide");
  resetHard();
}

hardBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (hardBoard[i] !== "") return;

    makeMove(i, "X", hardBtns, hardBoard);

    if (checkWinnerHard() || checkDrawHard()) return;

    robotHard();
  });
});

function robotHard() {
  let move = findBestMove("O") ?? findBestMove("X");

  if (move === null) {
    let empty = hardBoard.map((v,i)=> v === "" ? i : null).filter(v=>v!==null);
    if (empty.length === 0) return;
    move = empty[Math.floor(Math.random()*empty.length)];
  }

  makeMove(move, "O", hardBtns, hardBoard);

  checkWinnerHard() || checkDrawHard();
}

function findBestMove(p) {
  for (let [a,b,c] of winningPatterns) {
    let values = [hardBoard[a], hardBoard[b], hardBoard[c]];

    if (values.filter(v => v === p).length === 2 && values.includes("")) {
      return [a,b,c][values.indexOf("")];
    }
  }
  return null;
}

function checkWinnerHard() {
  for (let [a,b,c] of winningPatterns) {
    if (hardBoard[a] && hardBoard[a] === hardBoard[b] && hardBoard[b] === hardBoard[c]) {
      showWinner(hardBoard[a]);
      disableAll(hardBtns);
      return true;
    }
  }
  return false;
}

function checkDrawHard() {
  if (!hardBoard.includes("")) {
    alert("Draw");
    resetHard();
    return true;
  }
  return false;
}

function resetHard() {
  hardBoard = ["","","","","","","","",""];
  hardBtns.forEach(btn => {
    btn.innerHTML = "";
    btn.disabled = false;
  });
}

// ================== COMMON FUNCTIONS ==================
function makeMove(i, player, btns, boardRef) {
  boardRef[i] = player;
  btns[i].innerHTML = player;
  btns[i].disabled = true;
}

function disableAll(btns) {
  btns.forEach(btn => btn.disabled = true);
}

function showWinner(symbol) {
  const name = symbol === "X" ? players[0] : players[1];

  body.innerHTML = `
    <div style="text-align:center;">
      <h2>Winner: ${name}</h2>
      <button onclick="start()">Restart</button>
    </div>
  `;
}
