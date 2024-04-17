const container = document.getElementById("container");
const iframeGame = document.getElementById("iframeGame");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const closeButton = document.getElementById("close-button");

const currentGame = document.getElementById("currentGame");
const currentCode = document.getElementById("currentCode");

let currentIndex = 0;
let currentGameLink;

const onkeydown = (event) => {
  if (event.code === "ArrowRight" && currentIndex < data.length - 1) {
    changeGame(1);
  } 

  if (event.code === "ArrowLeft" && currentIndex > 0) {
    changeGame(-1)
  }

  if (event.code === "Enter") {
    openGame()
  }

  if (event.code === "Escape") {
    exitGame()
  }
};

document.onkeydown = onkeydown;

const openGame = () => {
  iframeGame.style.position = "absolute";
    iframeGame.style.top = "0";
    iframeGame.style.left = "0";
    iframeGame.style.width = "100%";
    iframeGame.style.height = "100%";
    iframeGame.style.marginTop = "0";
    iframeGame.style.opacity = "1";
    closeButton.style.display = "block";
}

const exitGame = () => {
  closeButton.style.display = "none";
    iframeGame.style.position = "relative";
    iframeGame.style.marginTop = "40px";
    iframeGame.style.width = "600px";
    iframeGame.style.height = "400px";
    iframeGame.style.opacity = "0.8";
}

/*
* La funzione ha un argomento next che sarà 
* -1 se cliccato previousButton
* 1 se cliccato nextButton
*/
const changeGame = (next) => {
  currentIndex = currentIndex + next;

  // Disabilita previousButton per il primo elemento e nextButton per l'ultimo
  if(currentIndex === 0) {
    previousButton.disabled = true;
    previousButton.style.visibility = "hidden";
  } else if(currentIndex === data.length - 1) {
    nextButton.disabled = true;
    nextButton.style.visibility = "hidden";
  } else {
    previousButton.disabled = false;
    previousButton.style.visibility = "visible";

    nextButton.disabled = false;
    nextButton.style.visibility = "visible";
  }

  currentGameLink = data[currentIndex].gameUrl;
  let currentCodeLink = data[currentIndex].codeUrl;

  currentGame.href = currentGameLink;
  iframeGame.src = currentGameLink;
  currentGame.innerText = data[currentIndex].name;

  currentCode.href = currentCodeLink
}

changeGame(0);