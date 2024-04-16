import { useState } from 'react';
import Square from "../square";

export default function Board() {
    
    // storing the games state in the parent board component 
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const winner = calculateWinner(squares);

    let winnerStatus;
    if (winner) {
        winnerStatus = "Winner: " + winner;
    } 
    
    else {
        winnerStatus = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick (i){
        // Check if already has a X or an O. If the square is already filled, you will return in the handleClick function early—before it tries to update the board state.
        // or if there is a winner already, there will be no more moves
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares); 
        setXIsNext(!xIsNext);
        console.log(nextSquares)

    }
    
    return (
    <>
        <div className = "card-section">
            <br></br><h3>TicTacToe</h3>
            <div className="status">{winnerStatus}</div>
            <div className = "board-centre">
                <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </div>
                <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </div>
                <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </div>
            </div>
        </div>
    </>
    );
}

function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}



    // Then Board component to render that Square component using JSX syntax

// when a user clicks the top left square on your board to add an X to it:

// Clicking on the upper left square runs the function that the button received as its onClick prop from the Square. The Square component received that function as its onSquareClick prop from the Board. The Board component defined that function directly in the JSX. It calls handleClick with an argument of 0.
// handleClick uses the argument (0) to update the first element of the squares array from null to X.
// The squares state of the Board component was updated, so the Board and all of its children re-render. This causes the value prop of the Square component with index 0 to change from null to X.
// In the end the user sees that the upper left square has changed from empty to having a X after clicking it.