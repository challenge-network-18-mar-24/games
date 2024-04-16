const container = document.getElementById("carousel");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const current = document.getElementById("current");

let currentIndex = 0;
let currentLink;

const onkeydown = (event) => {
  if (event.code === "ArrowRight" && currentIndex < data.length - 1) {
    changeGame(1)
  } 

  if (event.code === "ArrowLeft" && currentIndex > 0) {
    changeGame(-1)
  }

  if (event.code === "Enter") {
    window.open(currentLink, "_blank");
  }
};

document.onkeydown = onkeydown;

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
    previousButton.style.visibility = "visible";
    nextButton.style.visibility = "visible";
  }

  currentLink = data[currentIndex].gameUrl;
  current.href = currentLink;
  current.innerText = data[currentIndex].name;
}

changeGame(0);