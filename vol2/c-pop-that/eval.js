const InsideOutify = matrix => Array.from(
  {length:Math.max(
    ...matrix.map(row => row.length)
  )},
  (_,i)=>matrix.map(row=>row[i])
).filter(col=>col!==undefined);

const p1WinsBook = [
  [2], [3], [4], [5], [6], [1,1],
  [1,2], [1,3], [1,4], [1,5], [1,6], [],
  [2,3], [2,4], [2,5], [2,6], [1,1],
  [3,4], [3,5], [3,6], [1,2,4],
  [4,5], [4,6], [1,3,3],
  [5,6], [2,2,3], [3,4,5],
]
const p2WinsBook = [
  [1], [1,1,1], [1,1,2,2], [1,1,1,2,3], [1,1,3,3],
  [2,2], [3,3], [4,4], [5,5], [6,6], [1,4,5],
  [1,2,3], [1,2,3,4,5], [1,1,4,4], [2,2,2,2],
]

const sqrch = (x,y) => x.some(r=>r.length===y.length&&r.every((v,i)=>v===y[i]))

const midgameEval = board => !(InsideOutify(
  board.map(x=>x.toString(2))
    .map(x=>x.padStart(Math.max(
      ...(board
        .map(s=>s.toString(2))
        .map(s=>s.length))
    ),'0'))
    .map(x=>x.split('')))
    .map(x=>x.map(y=>parseInt(y))
    .reduce((a,b)=>a+b,0)%2
  ).every(x=>x===0));

const evaluate = (board) => {
  if(sqrch(p1WinsBook,board))return true;
  if(sqrch(p2WinsBook,board))return false;
  return midgameEval(board);
}

export default evaluate;