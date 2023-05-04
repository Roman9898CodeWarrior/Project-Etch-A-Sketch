let color = 'black';
let click = true;

function fillBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', changeSquareColor)
        board.insertAdjacentElement('beforeend', square);
    }
}

fillBoard(16);

let container = document.querySelector('.flex-container');
let warning = document.querySelector('.warning');

function changeSize(input) {
    if (input >=2 && input <= 64) {
        fillBoard(input);
        click = true;
        document.querySelector('.mode').textContent = 'Mode: coloring';
    } else {
        warning.textContent = 'Enter a number from 2 to 64';
    }
}

function changeSquareColor() {
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice
}

let input = document.querySelector('input')

function reset() {
    changeSize(16);
    input.value = 16;
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: coloring'
        } else {
            document.querySelector('.mode').textContent = 'Mode: not coloring'
        }
    }
})