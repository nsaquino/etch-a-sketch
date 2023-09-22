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
    //Make choose color only once
    squareRef.removeEventListener('mouseover', paintSquareRandom);
    //Choose random color
    const randRed = getRandomInt(256);
    const randGreen = getRandomInt(256);
    const randBlue = getRandomInt(256);

    squareRef.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
    squareRef.style.borderColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
    squareRef.style.opacity = '0.1';

    squareRef.addEventListener('mouseover', darkenColor);
}

function darkenColor(e) {
    const squareRef = e.target;
    let opacity = parseFloat(squareRef.style.opacity);
    if (opacity < 1) opacity += 0.1;
    squareRef.style.opacity = `${opacity}`;
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