const gridArea = document.querySelector("#grid-area");
const resetButton = document.querySelector("#reset-button");
const newGridButton = document.querySelector("new-grid-button");
let numSquaresPerSide = 16;
let squareColor = "black";

setGrid(numSquaresPerSide);

// set event listeners in this block
resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll("#grid-area div");
    for (let square of squares) {
        square.style.backgroundColor = null;
        square.setAttribute("class", "default-box");
    }
});

newGridButton.addEventListener("click", () => {
    do {
        newNumSquares = prompt("How many squares per side? Must be between 1-100");
    } while (newNumSquares <= 100 && newNumSquares > 1);

});

// define event functions here
function divEntered() {
    if (this.hasAttribute("class"))
        this.setAttribute("class", "hovered-box");
}

function divClicked() {
    if (this.hasAttribute("class"))
        this.removeAttribute("class");
    this.style.backgroundColor = squareColor;
}

function divLeft() {
    if (this.hasAttribute("class"))
        this.setAttribute("class", "default-box");
}

function setGrid(squaresPerSide) {
    let squareSize = gridArea.offsetWidth / squaresPerSide;

    if(gridArea.hasChildNodes()) {
        while (gridArea.firstChild)
            gridArea.removeChild(gridArea.firstChild);
    }

    for (let i = 0; i < (squaresPerSide ** 2); i++) {
        const squareToAdd = document.createElement("div");
        squareToAdd.setAttribute("class", "default-box");
        squareToAdd.style.width = squareSize + "px";
        squareToAdd.style.height = squareSize + "px";
        squareToAdd.addEventListener("mouseover", divEntered);
        squareToAdd.addEventListener("mouseleave", divLeft);
        squareToAdd.addEventListener("mousedown", divClicked);

        gridArea.appendChild(squareToAdd);
    }
}