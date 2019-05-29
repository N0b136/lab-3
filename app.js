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
    if (i == 9 || result.textContent == 'X Wins!' || result.textContent == 'O Wins!') {
        i = 0;
        clearCells();
    } else if (i === 8 && result.textContent !== 'X Wins!' && result.textContent !== 'O Wins!' ){
        noWin();
    } else if (i === 1 && result.textContent == 'Cleared!') {
        result.textContent = '';
        console.log('Should be working...');
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
    if (tR.textContent == 'X' && tC.textContent == 'X' && tL.textContent == 'X') {
        xWin();
    } else if(tR.textContent == 'O' && tC.textContent == 'O' && tL.textContent == 'O') {
        oWin();
    };
};

//check middle row win
function checkMiddle() {
    if (mR.textContent == 'X' && mC.textContent == 'X' && mL.textContent == 'X') {
        xWin();
    } else if(mR.textContent == 'O' && mC.textContent == 'O' && mL.textContent == 'O') {
        oWin();
    };
};

//check Bottom row win
function checkBottom() {
    if (bR.textContent == 'X' && bC.textContent == 'X' && bL.textContent == 'X') {
        xWin();
    } else if(bR.textContent == 'O' && bC.textContent == 'O' && bL.textContent == 'O') {
        oWin();
    };
};

//check left column win
function checkLeft() {
    if (tL.textContent == 'X' && mL.textContent == 'X' && bL.textContent == 'X') {
        xWin();
    } else if(tL.textContent == 'O' && mL.textContent == 'O' && bL.textContent == 'O') {
        oWin();
    };
};

//check Center column
function checkCenter() {
    if (mC.textContent == 'X' && tC.textContent == 'X' && bC.textContent == 'X') {
        xWin();
    } else if(mC.textContent == 'O' && tC.textContent == 'O' && bC.textContent == 'O') {
        oWin();
    };
};

//check right column win
function checkRight() {
    if (tR.textContent == 'X' && mR.textContent == 'X' && bR.textContent == 'X') {
        xWin();
    } else if(tR.textContent == 'O' && mR.textContent == 'O' && bR.textContent == 'O') {
        oWin();
    };
};

//check left diagonal win
function checkLeftDi() {
    if (bR.textContent == 'X' && mC.textContent == 'X' && tL.textContent == 'X') {
        xWin();
    } else if(bR.textContent == 'O' && mC.textContent == 'O' && tL.textContent == 'O') {
        oWin();
    };
};

//Check right diagonal win
function checkRightDi() {
    if (tR.textContent == 'X' && mC.textContent == 'X' && bL.textContent == 'X') {
        xWin();
    } else if(tR.textContent == 'O' && mC.textContent == 'O' && bL.textContent == 'O') {
        oWin();
    };
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