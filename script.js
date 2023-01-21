let cells = document.querySelectorAll('#field td');
let result = document.querySelector('#winner')

function start(cells) {
    let i = 2;
    for (let cell1 of cells) {
        cell1.addEventListener('click', function stat() {
            if (i % 2 == 0) {
                this.textContent = '☭';
                this.style.color = 'red'
            } else {
                this.textContent = '☮';
                this.style.color = 'white'
            }
            this.removeEventListener('click', stat);
            if (iswinner(cells) === true) {
                result.style.height = '150px';
                result.textContent = `Победитель ${this.textContent}`;
            } else if (i == 10) {
                result.style.height = '150px';
                result.textContent = `Ничья!`;
            }
            i++
        })
    }
}

function iswinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

start(cells);


