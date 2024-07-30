import { useState, useEffect } from "react";
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

  const [xPlaying, setXPlaying] = useState(true); // Player X
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 }); // X is player, O is bot
  const [gameOver, setGameOver] = useState(false);
  const [botTurn, setBotTurn] = useState(false);
  const [message, setMessage] = useState("");

  const handleBoardClick = (index) => {
    if (board[index] || gameOver || botTurn) return;

    const newBoard = board.slice();
    newBoard[index] = xPlaying ? "X" : "O";
    setBoard(newBoard);
    checkGameStatus(newBoard);

    if (!gameOver) {
      setBotTurn(true);
    }
  };

  const checkGameStatus = (board) => {
    for (let [a, b, c] of WIN_CONDITIONS) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameOver(true);
        if (board[a] === "X") {
          setScores((prevScores) => ({
            ...prevScores,
            xScore: prevScores.xScore + 1,
          }));
          setMessage("Player X Wins!");
        } else {
          setScores((prevScores) => ({
            ...prevScores,
            oScore: prevScores.oScore + 1,
          }));
          setMessage("Bot Wins!");
        }
        return;
      }
    }
    if (!board.includes(null)) {
      setGameOver(true);
      setMessage("It's a Draw!");
    }
  };

  const makeBotMove = () => {
    let availableMoves = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);
    let randomMove =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];

    const newBoard = board.slice();
    newBoard[randomMove] = "O";
    setBoard(newBoard);
    checkGameStatus(newBoard);

    if (!gameOver) {
      setBotTurn(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setMessage("");
    setXPlaying(true);
    setBotTurn(false);
  };

  useEffect(() => {
    if (botTurn && !gameOver) {
      setTimeout(makeBotMove, 1000); // Delay for bot move
    }
  }, [botTurn]);

  return (
    <div className="w-80">
      <div>
        <BackArrow />
      </div>

      <ScoreBoard scores={scores} />

      {gameOver ? (
        <WinAndLose message={message} resetGame={resetGame} />
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
