import React, { useState, useEffect } from "react";
import Board from "./Board";
import { checkForWinner, getBotMove } from "../scripts/helper";
import Happy from "./Happy";

const Game = ({ isDarkMode }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [index, setIndex] = useState(null);
  const [isBotPlaying, setIsBotPlaying] = useState(false);
  const winner = checkForWinner(board);

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };

  const handleClick = (index) => {
    const cloneBoard = [...board];
    if (winner || cloneBoard[index]) return;
    cloneBoard[index] = xIsNext ? "X" : "O";
    setBoard(cloneBoard);
    setXIsNext((xIsNext) => !xIsNext);
    setIndex(index);
  };

  const handleReturnClick = () => {
    console.log(index);
    if (index !== null) {
      const cloneBoard = [...board];
      cloneBoard[index] = null;
      setBoard(cloneBoard);
      setIndex(null);
    }
  };

  // useEffect to handle bot
  useEffect(() => {
    if (!xIsNext && winner === null && isBotPlaying) {
      const timer = setTimeout(() => {
        const botMove = getBotMove(board);
        if (botMove !== null) {
          handleClick(botMove);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [xIsNext, board, winner, isBotPlaying]);

  const toggleBot = () => {
    setIsBotPlaying(!isBotPlaying);
    if (!isBotPlaying && !xIsNext) {
      const botMove = getBotMove(board);
      if (botMove !== null) {
        handleClick(botMove);
      }
    }
  };

  return (
    <div>
      <h1 className="mt-36 md:mt-52 lg:mt-44 xl:mt-28 w-full h-full text-4xl font-bold text-center">
        <span className="text-blue-800">Tic</span>
        <span className="text-slate-300">Tac</span>
        <span className="text-red-500">Toe</span>
      </h1>
      <Board isDarkMode={isDarkMode} board={board} handleClick={handleClick} />
      <div className="w-full h-full flex mt-4 items-center justify-around text-white font-medium">
        <button
          className="mr-1 p-1 w-[60px] h-[30px] rounded-3xl bg-cyan-400"
          onClick={() => handleReturnClick()}
        >
          <img
            src="./return.png"
            alt="return.png"
            className="object-contain w-full h-full"
          />
        </button>
        <button
          onClick={toggleBot}
          className={`rounded-3xl mr-1 p-1 ${
            isBotPlaying ? "bg-green-500" : "bg-gray-500"
          } text-white`}
        >
          {isBotPlaying ? "Bot: ON" : "Bot: OFF"}
        </button>
        <button
          className="mr-1 p-1 w-[60px] h-[30px] rounded-3xl bg-red-500"
          onClick={() => handleResetGame()}
        >
          <img
            src="./reset.png"
            alt="reset.png"
            className="object-contain w-full h-full"
          />
        </button>
      </div>
      {/* Render the Happy component when there is a winner */}
      {winner && <Happy winner={winner} handleResetGame={handleResetGame} />}
    </div>
  );
};

export default Game;
