const wrapper = document.querySelector(".wrapper");

function createSquare() {
  const div = document.createElement("div");
  div.setAttribute("class", "square");
  wrapper.appendChild(div);
  document.querySelector(".wrapper").appendChild(div);
}

function createGrid(n) {
  for (i = 0; i < n; i++) {
    createSquare();
  }
}
