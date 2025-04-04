import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Happy = ({ winner, handleResetGame }) => {
  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    if (winner) {
      setIsCelebrating(true);
      setTimeout(() => {
        setIsCelebrating(false);
      }, 10000);
    }
  }, [winner]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      {isCelebrating && <Confetti />}

      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full animate-zoomIn">
        <h2 className="text-2xl font-bold">Chúc mừng!</h2>
        <p className="mt-4 text-lg">
          Người chiến thắng là:{" "}
          <span id="winner-name" className="font-semibold text-blue-800">
            {winner}
          </span>
        </p>
        <button
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transform transition duration-200 ease-in-out hover:scale-105 animate-bounce"
          onClick={() => handleResetGame()}
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
};

export default Happy;
