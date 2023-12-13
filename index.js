let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function makeMove(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  for (let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById('result').innerText = `${board[a]} venceu!`;
      disableBoard();
      return;
    }
  }
  if (!board.includes('')) {
    document.getElementById('result').innerText = 'Empate!';
    disableBoard();
  }
}

function disableBoard() {
  for (let i = 0; i < board.length; i++) {
    document.getElementById('board').children[i].removeAttribute('onclick');
  }
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('result').innerText = '';
  for (let i = 0; i < 9; i++) {
    document.getElementById('board').children[i].innerText = '';
    document.getElementById('board').children[i].setAttribute('onclick', `makeMove(${i})`);
  }
}