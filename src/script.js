const container = document.getElementById("container");
const colorButton = document.getElementById("colorButton");
const scoreBoard = document.getElementById("scoreBoard");

let currentColor = getRandomColor();
let score = 0;

colorButton.addEventListener("click", () => {
  const guessedColor = prompt("Indovina il colore (es. rosso, #FF0000):").toLowerCase();

  if (guessedColor === currentColor) {
    score++;
    alert("Corretto! Punteggio: " + score);
  } else {
    alert("Sbagliato! Il colore era " + currentColor);
  }

  updateScoreBoard();
  changeBackgroundColor();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeBackgroundColor() {
  currentColor = getRandomColor();
  container.style.backgroundColor = currentColor;
}

function updateScoreBoard() {
  scoreBoard.innerText = "Punteggio: " + score;
}
