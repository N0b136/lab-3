let cells = document.querySelectorAll('.cell');
let tops = document.querySelectorAll('.top');
let mids = document.querySelectorAll('.middle');
let btms = document.querySelectorAll('.bottoms');
let lfts = document.querySelectorAll('.left');
let rts = document.querySelectorAll('.right')
let cntr = document.querySelectorAll('.center');
let result = document.querySelector('.result');

cells.forEach(function(cell){
    cell.addEventListener("click",cellClicked);
    cell.addEventListener("click",checkTop);
});

let ptrn = ['X','O','X','O','X','O','X','O','X'];
let i = 0;

function clearCells() {
    cells.forEach(function(cell){
        cell.textContent = '';
        result.textContent = 'Cleared!';
    })
   };

function cellClicked(e){
    e.target.textContent = ptrn[i];
    i++;
    if (i == 9) {
        i = 0;
        clearCells();
    };
};

function xWin() {
    result.textContent = 'X Wins!'
}

function oWin() {
    result.textContent = 'O Wins!'
}

function noWin() {
    result.textContent = 'Draw!'
}

//Checking win conditions

//top row victory
function checkTop() {
    switch (tops) {
        case 'X':
            xWin();
            break;
        case 'O':
            oWin();
            break;
        default:
            result.textContent = '';
    }
}

function checkMiddle() {
    switch (mids) {
        case 'X':
            xWin();
            break;
        case 'O':
            oWin();
            break;
        default:
            result.textContent = '';
    }
}