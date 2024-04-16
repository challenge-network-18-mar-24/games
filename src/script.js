const container = document.getElementById("carousel");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const link = document.createElement("a");

let currentIndex = 0;

/*
* La funzione ha un argomento next che sarà 
* -1 se cliccato previousButton
* 1 se cliccato nextButton
*/
const changeGame = (next) => {
  currentIndex = currentIndex + next;

  // Disabilita previousButton per il primo elemento
  if(currentIndex === 0) {
    previousButton.disabled = true;
  }

  // Disabilita nextButton per l'ultimo elemento
  if(currentIndex === data-length - 1) {
    nextButton.disabled = true;
  }

  link.href = data[currentIndex].gameUrl;
  link.innerText = data[currentIndex].name;
  container.appendChild(link);
}

changeGame(0);