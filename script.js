const container = document.querySelector('#container');

//Create 16x16 grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';

    for (let j = 0; j < 16; j++) {
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