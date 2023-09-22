const container = document.querySelector('#container');
const button = document.querySelector('#btn');
button.addEventListener('click', changeSize)

createNewGrid(16);

//Create 16x16 grid
function createNewGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';

        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseover', paintSquareRandom, {
                once: true
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

function paintSquareRandom(e){
    const squareRef = e.target;
    //Choos random color
    const randRed = getRandomInt(256);
    const randGreen = getRandomInt(256);
    const randBlue = getRandomInt(256);

    squareRef.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
    squareRef.style.borderColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
}

function changeSize() {
    let input = prompt('Enter number of squares per side desired (Maximum 100):');
    input = input.trim();
    if (isNaN(input) || input <= 0 || input > 100) return;

    //Remove old grid
    container.innerHTML = "";

    createNewGrid(input);
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}