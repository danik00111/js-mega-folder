const minimax = (board) => {
  
}

const possibleMoves = (board) => {
  let moves = [];
  for(let i=0;i<board.length;i++) {
    for(let j=1; j<=board[i]; j++) {
      moves.push([i,j]);
    }
  }
  return moves;
}

const forcedWin = (board) => {
  if([
    [], [1,1], [1,2],
    [1,2,2], [1,1,2], [1,1,3],
    [1,1,4], [1,1,5], [1,1,6],
    [1,2,4], [1,3,3], [1,2,3,4,6]
  ].includes(norm(board)))return true;return false;
}
const forcedLoss = (board) => {
  if([
    [1], [2,2], [3,3], [4,4], [5,5], [6,6],
    [1,2,3], [1,2,3,4,5], [1,1,1], [1,1,1,1,1],
    [1,1,2,2], [1,1,1,2,3],
  ].includes(norm(board)))return true;return false;
}

const norm = (b) => b.map(Number).filter(n=>Number.isInteger(n)&&n>0).sort((a,b)=>a-b);