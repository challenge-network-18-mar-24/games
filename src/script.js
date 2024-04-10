const container = document.getElementById("container");
const link = document.createElement("a");

data.forEach((object) => {
  link.href = object.gameUrl;
  link.innerText = object.name;
  container.appendChild(link);
})