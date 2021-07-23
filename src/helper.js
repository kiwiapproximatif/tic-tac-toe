export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    if (squares) {
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return [squares[a], [a, b, c]];
            }
        }
    }
    return null;
}

export function getRowCol(index) {
    let count = 0;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (count === index) {
                return [i, j];
            }
            count++;
        }
    }
    return [null, null];
}