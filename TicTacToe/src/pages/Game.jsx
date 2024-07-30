import { useState } from "react";

import BackArrow from "../components/BackArrow";
import EachGrid from "../components/EachGrid";
import ScoreBoard from "../components/ScoreBoard";
import WinAndLose from "../components/WinAndLose";

function Game() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleBoardClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = board.map((value, i) => {
      if (i === index) {
        return xPlaying ? "X" : "O";
      }
      return value;
    });

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      if (gameWinner === "X") {
        setScores({ ...scores, xScore: scores.xScore + 1 });
      } else {
        setScores({ ...scores, oScore: scores.oScore + 1 });
      }
      setGameOver(true);
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setGameOver(true);
      setWinner(null);
    } else {
      setXPlaying(!xPlaying);
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
    setXPlaying(true);
  };

  const getResultMessage = () => {
    if (winner) {
      return winner === "X" ? "Player X Won!" : "Player O Won!";
    }
    return "It's a Draw!";
  };

  return (
    <div className="w-80">
      <div>
        <BackArrow />
      </div>

      <ScoreBoard scores={scores} xPlaying={xPlaying} />

      {gameOver ? (
        <WinAndLose message={getResultMessage()} resetGame={resetGame} />
      ) : (
        <div className="grid grid-cols-3 bg-customBlue1 font-black text-7xl gap-0 border-8 border-customBlue1 rounded-3xl">
          {board.map((letter, index) => (
            <EachGrid
              key={index}
              text2="game"
              letter={letter}
              onClick={() => handleBoardClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Game;
