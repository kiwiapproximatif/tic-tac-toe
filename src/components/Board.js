import React from "react";
import Square from "./Square";

function Board({squares, winSquares, onClick}) {
    const renderSquare = (i) => {
        return (
            <Square
                name={(winSquares && winSquares.includes(i)) ? "win-square" : "square"}
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    }

    const renderBoard = () => {
        let board = [];
        let count = 0;
        for (let i = 0; i < 3; i++) {
            let children = [];
            for (let j = 0; j < 3; j++) {
                children.push(renderSquare(count))
                count++;
            }
            board.push(<div className="board-row">{children}</div>)
        }
        return board;
    }

    return (
        <div>{renderBoard()}</div>
    );
}

export default Board;