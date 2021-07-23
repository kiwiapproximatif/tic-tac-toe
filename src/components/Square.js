import React from "react";

function Square({name, value, onClick}) {
    return (
        <button
            className={name}
            onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;