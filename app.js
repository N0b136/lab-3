let cells = document.querySelectorAll('.cell');
let tL = document.querySelectorAll('.top , .left').textContent;
let tC = document.querySelectorAll('.top , .center').textContent;
let tR = document.querySelectorAll('.top , .right').textContent;
let mL = document.querySelectorAll('.middle , .left').textContent;
let mC = document.querySelectorAll('.middle , .center').textContent;
let mR = document.querySelectorAll('.middle , .right').textContent;
let bL = document.querySelectorAll('.bottom , .left').textContent;
let bC = document.querySelectorAll('.bottom , .center').textContent;
let bR = document.querySelectorAll('.bottom , .right').textContent;
let result = document.querySelector('.result');

cells.forEach(function(cell){
    cell.addEventListener("click",cellClicked);
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
    switch (tL && tC && tR) {
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

/* function checkMiddle() {
    switch () {
        case 'X':
            xWin();
            break;
        case 'O':
            oWin();
            break;
        default:
            result.textContent = '';
    }
} */