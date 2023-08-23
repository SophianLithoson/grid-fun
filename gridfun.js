const gridArea = document.querySelector("#grid-area");
const numSquaresPerSide = 16;
const squareSize = gridArea.offsetWidth / numSquaresPerSide;
let squareColor = "black";

for(let i = 0; i < (numSquaresPerSide ** 2); i++) {
    const squareToAdd = document.createElement("div");
    squareToAdd.setAttribute("class", "default-box");
    squareToAdd.style.width = squareSize + "px";
    squareToAdd.style.height = squareSize + "px";
    squareToAdd.addEventListener("mouseover", divEntered);
    squareToAdd.addEventListener("mouseleave", divLeft);
    squareToAdd.addEventListener("mousedown", divClicked);

    gridArea.appendChild(squareToAdd);
}

function divEntered(e) {
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