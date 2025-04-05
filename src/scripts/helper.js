export const checkForWinner = (cells) => {
  const defaultAnswer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let index = 0; index < defaultAnswer.length; ++index) {
    const [a, b, c] = defaultAnswer[index];
    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
      return cells[a];
    }
  }
  return null;
};

export const getBotMove = (board) => {
  // board is full filled
  if (!board.includes(null)) return null;

  // default bot is 'O'
  const botPlayer = 'O';
  const humanPlayer = 'X';

  // function Minimax
  const minimax = (board, isMaximizing) => {
    const winner = checkForWinner(board);

    // check is end game
    if (winner === botPlayer) return { score: 10 };
    if (winner === humanPlayer) return { score: -10 };
    if (!board.includes(null)) return { score: 0 };

    const moves = [];
    for (let index = 0; index < board.length; ++index) {
      if (board[index] === null) {
        const move = { idx: index };
        board[index] = isMaximizing ? botPlayer : humanPlayer;

        const result = minimax(board, !isMaximizing);
        move.score = result.score;

        board[index] = null;
        moves.push(move);
      }
    }

    let bestMove;
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let index = 0; index < moves.length; ++index) {
        if (moves[index].score > bestScore) {
          bestScore = moves[index].score;
          bestMove = index;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let index = 0; index < moves.length; ++index) {
        if (moves[index].score < bestScore) {
          bestScore = moves[index].score;
          bestMove = index;
        }
      }
    }
    return moves[bestMove];
  };
  return minimax(board, true).idx;
}