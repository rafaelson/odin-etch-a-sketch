const wrapper = document.querySelector(".grid-wrapper");
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  let size = prompt(
    "Insert the number of squares per side (maximum of 100)",
    0
  );
  if (size > 100) {
    return;
  }
  deleteGrid();
  createGrid(size);
});

function createSquare() {
  const div = document.createElement("div");
  div.classList.add("square");
  div.addEventListener(
    "mouseover",
    () => (div.style.backgroundColor = "black")
  );
  wrapper.appendChild(div);
  document.querySelector(".grid-wrapper").appendChild(div);
}

function createGrid(n) {
  wrapper.style.gridTemplateColumns = `repeat(${n}, auto)`;
  for (i = 0; i < n * n; i++) {
    createSquare();
  }
}

function deleteGrid() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((sqr) => sqr.remove());
}
