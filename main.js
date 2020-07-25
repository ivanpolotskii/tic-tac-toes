function isSolved(board) {
    if (board[0].every(n => n === 1) || board[1].every(n => n === 1) || board[2].every(n => n === 1) ||
        (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) ||
        (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) ||
        (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) ||
        (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
        (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1)) {
        alert('Крестики победили')
        return 1;
    } else if (board[0].every(n => n === 2) || board[1].every(n => n === 2) || board[2].every(n => n === 2) ||
        (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) ||
        (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) ||
        (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) ||
        (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) ||
        (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2)) {
        alert('Нолики победили')
        return 2;
    } else if (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) {
        return -1;
    } else {
        alert('Ничья')
        return 0;
    }
}

function $(selector) {
    return document.querySelectorAll(selector);
}
const elem = $('.elem'),
    a00 = $('.a00'),
    a01 = $('.a01'),
    a02 = $('.a02'),
    a10 = $('.a10'),
    a11 = $('.a11'),
    a12 = $('.a12'),
    a20 = $('.a20'),
    a21 = $('.a21'),
    a22 = $('.a22');
let per = true;

let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
elem.forEach(el => {

    el.addEventListener('click', (e) => {
        if (per == true) {
            if (board[e.target.id.slice(1, 2)][e.target.id.slice(4, 5)] == 0) {
                board[e.target.id.slice(1, 2)][e.target.id.slice(4, 5)] = 1;
                e.target.insertAdjacentHTML('afterbegin', '<div class="d24"></div>');
                isSolved(board);
                per = false;
            }

        } else {
            if (board[e.target.id.slice(1, 2)][e.target.id.slice(4, 5)] == 0) {
                board[e.target.id.slice(1, 2)][e.target.id.slice(4, 5)] = 2;
                e.target.insertAdjacentHTML('afterbegin', '<div class="d1"></div>');
                isSolved(board);
                per = true;
            }

        }

    })
})