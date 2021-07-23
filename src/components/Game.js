import React, {useState} from "react";
import {calculateWinner, getRowCol} from "../helper";
import Board from "./Board";

function Game() {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
        index: null
    }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber].squares);
    const xO = xIsNext ? 'X' : 'O';

    const handleClick = (i) => {
        const _history = history.slice(0, stepNumber + 1);
        const current = _history[stepNumber];
        const squares = [...current.squares];
        if (winner || squares[i]) {
            return;
        }
        squares[i] = xO;
        setHistory(
            [
                ..._history,
                {
                    squares: squares,
                    index: i
                }
            ]
        );
        setStepNumber(_history.length);
        setXIsNext(!xIsNext);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0)
    }

    const renderMoves = () =>
        history.map((_step, move) => {
            const currentSelectedIndex = history[stepNumber].index;
            const currentIndex = history[move].index;
            const [row, col] = getRowCol(currentIndex);
            const desc = move ? `Go to move #${move} (${row}, ${col})` : "Go to game start";
            return (
                <li key={move}>
                    <button
                        className={(currentSelectedIndex === currentIndex) ? "current-move" : ""}
                        onClick={() => jumpTo(move)}
                    >{desc}
                    </button>
                </li>
            );
        });

    const renderStatus = () => {
        let status;
        const currentSquares = history[stepNumber].squares;
        if (winner) {
            status = `Winner: ${winner[0]}`;
        } else {
            if (!currentSquares.includes(null)) {
                status = "No one has won!"
            } else {
                status = `Next player: ${xO}`;
            }
        }
        return status;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={history[stepNumber].squares}
                    winSquares={winner ? winner[1] : null}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{renderStatus()}</div>
                <ol>{renderMoves()}</ol>
            </div>
        </div>
    );

}

export default Game;