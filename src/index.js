import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "./components/Game";


/*class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    row: null,
                    col: null
                },
            ],
            stepNumber: 0,
            xIsNext: true,
            isReversed: false
        };
    }

    getRowCol(index) {
        let count = 0;
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                if (count === index) {
                    return [i, j];
                }
                count++;
            }
        }
        return null;
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const [row, col] = this.getRowCol(i);
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares,
                    row: row,
                    col: col
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const row = history[move].row;
            const col = history[move].col;
            const desc = move ?
                'Go to move #' + move + ' (' + row + ', ' + col + ')' :
                'Go to game start';
            return (
                <li key={move}>
                    <button
                        className={(current.row === row && current.col === col) ? "current-play" : ""}
                        onClick={() => this.jumpTo(move)}>{desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner[0];
        } else {
            if (!current.squares.includes(null)) {
                status = "No one has won!"
            } else {
                status = "Next player: " + (this.state.xIsNext ? "X" : "O");
            }
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        winSquares={winner ? winner[1] : []}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}*/

// ========================================

ReactDOM.render(<Game/>, document.getElementById("root"));


