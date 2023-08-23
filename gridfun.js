const gridArea = document.querySelector("#grid-area");
const numSquaresPerSide = 16;
const squareSize = gridArea.offsetWidth / numSquaresPerSide;
let squareColor = "black";

for(let i = 0; i < (numSquaresPerSide ** 2); i++) {
    const squareToAdd = document.createElement("div");
    squareToAdd.setAttribute("class", "default-box");
    squareToAdd.style.width = squareSize + "px";
    squareToAdd.style.height = squareSize + "px";
    gridArea.appendChild(squareToAdd);
}
    