let cells = document.querySelectorAll('.cell');
let tC = document.querySelector('#tC');
let tL = document.querySelector('#tL');
let tR = document.querySelector('#tR');
let mL = document.querySelector('#mL');
let mC = document.querySelector('#mC');
let mR = document.querySelector('#mR');
let bL = document.querySelector('#bL');
let bC = document.querySelector('#bC');
let bR = document.querySelector('#bR');
let result = document.querySelector('.result');

cells.forEach(function(cell){
    cell.addEventListener("click",cellClicked);
});

cells.forEach(function(cell){
    cell.addEventListener("click",Checkwin);
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
};

function oWin() {
    result.textContent = 'O Wins!'
};

function noWin() {
    result.textContent = 'Draw!'
};

//Checking win conditions

//top row victory
function checkTop() {
    switch (tL.textContent && tC.textContent && tR.textContent) {
        case 'X':
            xWin();
            console.log('won top');
            break;
        case 'O':
            oWin();
            console.log('won top');
            break;
    }
};

//check middle row win
function checkMiddle() {
    switch (mC.textContent && mL.textContent && mR.textContent) {
        case 'X':
            xWin();
            console.log('won middle');
            break;
        case 'O':
            oWin();
            console.log('won middle');
            break;
        default:
            result.textContent = '';
    }
};

//check Bottom row win
function checkBottom() {
    switch (bC.textContent && bL.textContent && bR.textContent) {
        case 'X':
            xWin();
            console.log('won bottom');
            break;
        case 'O':
            oWin();
            console.log('won bottom');
            break;
        default:
            result.textContent = '';
    }
};

//check left column win
function checkLeft() {
    switch (tL.textContent && mL.textContent && bL.textContent) {
        case 'X':
            xWin();
            console.log('won left');
            break;
        case 'O':
            oWin();
            console.log('won left');
            break;
        default:
            result.textContent = '';
    }
};

//check Center column
function checkCenter() {
    switch (tC.textContent && mC.textContent && bC.textContent) {
        case 'X':
            xWin();
            console.log('won center');
            break;
        case 'O':
            oWin();
            console.log('won center');
            break;
        default:
            result.textContent = '';
    }
};

//check right column win
function checkRight() {
    switch (tR.textContent && mR.textContent && bR.textContent) {
        case 'X':
            xWin();
            console.log('won right');
            break;
        case 'O':
            oWin();
            console.log('won right');
            break;
        default:
            result.textContent = '';
    }
};

//check left diagonal win
function checkLeftDi() {
    switch (tL.textContent && mC.textContent && bR.textContent) {
        case 'X':
            xWin();
            console.log('won ld');
            break;
        case 'O':
            oWin();
            console.log('won ld');
            break;
        default:
            result.textContent = '';
    }
};

//Check right diagonal win
function checkRightDi() {
    switch (tR.textContent && mC.textContent && bL.textContent) {
        case 'X':
            xWin();
            console.log('won rd');
            break;
        case 'O':
            oWin();
            console.log('won rd');
            break;
        default:
            result.textContent = '';
    }
};

function Checkwin() {
    checkTop();
    checkBottom();
    checkCenter();
    checkLeft();
    checkLeftDi();
    checkRight();
    checkRightDi();
}