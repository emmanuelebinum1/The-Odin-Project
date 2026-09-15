const container = document.querySelector(".container");

function makeGrid(num) {
    container.style.width = `500px`;
    for (let i = 0; i < (num * num); i++) {
        const square = document.createElement("div");
        square.style.height = `${500 / num}px`;
        square.style.width = `${500 / num}px`;
        square.style.backgroundColor = "brown";
        square.addEventListener('mouseenter', () => {
            square.style.background = "black";
        });
        square.addEventListener('mouseleave', () => {
            square.style.background = "black";
        });
        container.append(square);
    }
}

makeGrid(16);

