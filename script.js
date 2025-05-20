// let gridDiv = document.querySelector(".grid-container");

// let div = document.createElement("div");

const button = document.querySelector("#btn")

button.addEventListener("click", () => {
    let gridDimension = parseInt(prompt("Enter the square dimension (max: 150)"));

    drawGrid(gridDimension);
})

function drawGrid(dimension) {
    let gridContainer = document.querySelector(".grid-container");
    let selectAllgridRow = document.querySelectorAll(".grid-row");

    selectAllgridRow.forEach((box) => { box.remove() });

    let gridRow, singleBox;
    for (let yAxis = 0; yAxis < dimension; yAxis++) {
        gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridRow.style.cssText = `height: 100%; display: flex; gap: 1px;`;
        for (let xAxis = 0; xAxis < dimension; xAxis++) {
            singleBox = document.createElement("div");

            singleBox.classList.add("single-box");
            singleBox.style.cssText = `flex: auto; background-color: ${selectColor()};`;

            gridRow.appendChild(singleBox);
        }
        gridContainer.appendChild(gridRow);
    }
}

function selectColor() {
    let colorValues = [];

    for (let i = 0; i < 3; i++) {
        let randomValue = Math.floor(Math.random() * 256);
        colorValues.push(randomValue);
    }

    return `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]});`
}
