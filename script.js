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

            square.style.flexGrow = 1;
            square.style.aspectRatio = '1 / 1';
            square.style.border = '1px solid black';

            square.addEventListener('mouseover', () => {
                square.classList.add('hovered');
            })

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

function changeSize() {
    let input = prompt('Enter number of squares per side desired (Maximum 100):');
    input = input.trim();
    if (isNaN(input) || input <= 0 || input > 100) return;

    //Remove old grid
    container.innerHTML = "";
    createNewGrid(input);
}