import React, { useState } from "react";
import "./App.css"; // Make sure to create appropriate styles

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    if (calculateWinner(newBoard)) {
      setWinner(isXNext ? "X" : "O");
    } else {
      setIsXNext(!isXNext);
      if (!isXNext) {
        computerMove(newBoard);
      }
    }
  };

  const computerMove = (currentBoard) => {
    const availableMoves = currentBoard
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null);
    if (availableMoves.length === 0) return;

    const randomMove =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const newBoard = currentBoard.slice();
    newBoard[randomMove] = "O";
    setBoard(newBoard);

    if (calculateWinner(newBoard)) {
      setWinner("O");
    } else {
      setIsXNext(true);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`}
      </div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
