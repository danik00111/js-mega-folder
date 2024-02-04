const addRand = ary => {
  if(!Array.isArray(ary))return null;
  let r = [...ary]; // make a copy of the array
  // assume that our 2d array is a 4x4
  let lotterypool = [];
  for(let i=0;i<4;i++)for(let j=0;j<4;j++)lotterypool.push({i,j}); // idek which is x and which is y, not like it really matters in this exact case as the array is a square
  while(lotterypool.length){
    let currCell = lotterypool.splice(Math.floor(Math.random()*lotterypool.length),1)[0]; // idk why but splice returns [{i,j}] so [0]
    if(r[currCell.i][currCell.j]===undefined){ // undef = empty cell
      r[currCell.i][currCell.j] = (Math.random()*10<9)?2:4; // 1/10 chance that it's filled with a 4 instead
      return r;
    }
  } return null; // all cells are filled
}
let geaeme = {
  score: 0,
  board: addRand(Array(4).fill(undefined).map(_=>Array(4).fill(undefined)))
};
const moeve = x => {
  if(!isNaN(x)) geaeme = move(x,geaeme);
  console.log(geaeme)
  document.querySelector('p span').innerHTML = geaeme.score;
  let currentcell;
  if(geaeme.board===null)
    document.querySelector('.grid').classList.add('gameover');
  else for(let i=0;i<4;i++) for(let j=0;j<4;j++){
    currentcell = document.querySelector(`.row[pos="${i}"] .cell[pos="${j}"]`);
    currentcell.setAttribute("value",geaeme.board[i][j]);
    if(currentcell.getAttribute("value")=="undefined") currentcell.setAttribute("value","");
  }
};
moeve();
document.addEventListener('keydown',e=>{
  if(e.repeat) return;
  switch(e.key) {
    case'w':case 'ArrowUp':  moeve(3);break;
    case'a':case 'ArrowLeft':moeve(0);break;
    case's':case 'ArrowDown':moeve(1);break;
    case'd':case'ArrowRight':moeve(2);break;
  }
});
/**
 * Rotates the array 90 degrees counterclockwise (e.g. [[1,2,3],[4,5,6],[7,8,9]] => [[3,6,9],[2,5,8],[1,4,7]]).
 * @param {Array} r The array to rotate.
 */
const e_tator=m=>m[0].map((_,i)=>m.map(r=>r[r.length-1-i]));
/**
 * Rotates the array 90 degrees clockwise (e.g. [[1,2,3],[4,5,6],[7,8,9]] => [[7,4,1],[8,5,2],[9,6,3]]).
 * @param {Array} r The array to rotate.
 */
const rotat_e=m=>m[0].map((_,i)=>m.map(r=>r[i]).reverse());
const maepe=j=>j.map(x=>x.map(y=>y===undefined?-1:y)).toString();
const move=(d,{score,board})=>{ // 0 = left, 1 = down, 2 = right, 3 = up, bigger = mod4
  if(!Array.isArray(board))return {score,board:null};
  let compareBoard = maepe(board); // i have to do it here, as for whetever reason "b" somehow gets modified throughout the code
  let bjoarb = [...board]; let n=0;
  for(let dir=d%4;dir>0;dir--){n++;bjoarb=rotat_e([...bjoarb])}; // rotate so that the move direction is always left
  
  bjoarb = [...bjoarb].map(r=>r.sort((_,b)=>b!=undefined));
  let returne = mergeFunc2D({board:bjoarb});
  returne.score += score;
  
  for(;n>0;n--)returne.board=e_tator([...returne.board]); // unrotate

  return (maepe(returne.board)===compareBoard)
    ? ( (returne.board.some(x=>x.some(y=>y===undefined))) ? returne : {score:returne.score,board:null} )
    : {score:returne.score,board:addRand(returne.board)};
};

const mergeFunc2D = ({score, board}) => {
  let returnObject = {
    score: score || 0,
    board: board.map(x=>x.filter(y=>y!==undefined))
  };
  for(let j=0; j<returnObject.board.length; j++) { // for each array:
    for(let i=0; i<returnObject.board[j].length-1; i++) // parsing through the array left to right,
      if(returnObject.board[j][i] === returnObject.board[j][i+1]){ // if an element is the same as the element to it's right,
        returnObject.score += returnObject.board[j][i]*2; // add the value of the new tile to the score,
        returnObject.board[j].splice(i,2,returnObject.board[j][i]*2) // and merge the two tiles.
      }
      // optionally, cut to specific width and pad with undefs
      returnObject.board[j] = returnObject.board[j].concat([undefined,undefined,undefined,undefined]).splice(0,4);
  }
  return returnObject;
}