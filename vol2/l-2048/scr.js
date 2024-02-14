const tileShowOff = () => {let e=8; [...document.querySelectorAll('.cell')].forEach(x => {x.setAttribute("value",e); e*=2})}
const addRand = ary => {
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
  } return ary; // all cells are filled
}
let geaeme = {
  score: 0,
  board: addRand(Array(4).fill(undefined).map(_=>Array(4).fill(undefined)))
};

const moeve=x=>{geaeme=move(x,geaeme);updateHTML()};
let timeoutStore;
/**
 * Checks whether progess can be made on a board of 2048.
 * @param {any[][]} board
 * @returns {boolean}
 */
const isAlive = board =>
  board.some(x=>x.some(y=>y===undefined||y===0)) // empty space left
||board.some(x=>{for(let i=1;i<x.length;i++)if(x[i-1]===x[i])return true;return false}) // horizontal move possible
||rotat_e(board).some(x=>{for(let i=1;i<x.length;i++)if(x[i-1]===x[i])return true;return false}); // vertical move possible
const updateHTML = () => {
  if(timeoutStore != 0) {clearTimeout(timeoutStore);timeoutStore=0};
  document.querySelector('#helptext').classList.remove("shown")
  document.querySelector('p span').innerHTML = geaeme.score;
  let currentcell;
  for(let i=0;i<4;i++) for(let j=0;j<4;j++){
    currentcell = document.querySelector(`.row[pos="${i}"] .cell[pos="${j}"]`);
    currentcell.setAttribute("value",geaeme.board[i][j]);
    if(currentcell.getAttribute("value")=="undefined") currentcell.setAttribute("value","");
  }
  if(!isAlive(geaeme.board))document.querySelector('#reset').classList.add("shown");
}
updateHTML();
timeoutStore = setTimeout(()=>{document.querySelector('#helptext').classList.add("shown")},10e3)
document.addEventListener('keydown',e=>{
  if(e.repeat) return;
  switch(e.key) {
    case'w':case 'ArrowUp':  moeve(3);break;
    case'a':case 'ArrowLeft':moeve(0);break;
    case's':case 'ArrowDown':moeve(1);break;
    case'd':case'ArrowRight':moeve(2);break;
  }
});
const e_tator=m=>m[0].map((_,i)=>m.map(r=>r[r.length-1-i]));
const rotat_e=m=>m[0].map((_,i)=>m.map(r=>r[i]).reverse());
const maepe=j=>j.map(x=>x.map(y=>y===undefined?-1:y)).toString();
const move=(d,{score,board})=>{
  if(!Array.isArray(board))return {score:Number(score),board:[]};
  let compareBoard = maepe(board); // i have to do it here, as for whetever reason "b" somehow gets modified throughout the code
  let bjoarb = [...board]; let n=0;
  for(let dir=d%4;dir>0;dir--){n++;bjoarb=rotat_e([...bjoarb])}; // rotate so that the move direction is always left
  bjoarb = [...bjoarb].map(r=>r.sort((_,b)=>b!=undefined));
  let returne = mergeFunc2D({board:bjoarb});
  returne.score += score;
  for(;n>0;n--)returne.board=e_tator([...returne.board]); // unrotate
  return (maepe(returne.board)===compareBoard)
    ? {score:Number(returne.score),board:returne.board}
    : {score:Number(returne.score),board:addRand(returne.board)};
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
};
//! the code below is blatantly copied from the first google search result :3
//! the code below is blatantly copied from the first google search result :3
//! the code below is blatantly copied from the first google search result :3
//! the code below is blatantly copied from the first google search result :3
//! the code below is blatantly copied from the first google search result :3

//Initial mouse X and Y positions are 0

let mouseX = 0;
let mouseY = 0;
let initialX = 0;
let initialY = 0;
let isSwiped;

//Events for touch and mouse
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType;
let isTouchDevice;
//Detect touch device
try {
  //We try to create TouchEvent (it would fail for desktops and throw error)
  document.createEvent("TouchEvent");
  deviceType="touch";
  isTouchDevice=true;
} catch (e) {
  deviceType="mouse";
  isTouchDevice=false;
}

//Get left and top of touchArea
let rectLeft=document.body.getBoundingClientRect().left;
let rectTop=document.body.getBoundingClientRect().top;

//Get Exact X and Y position of mouse/touch
const getXY=e=>{
  mouseX=(!isTouchDevice?e.pageX:e.touches[0].pageX)-rectLeft;
  mouseY=(!isTouchDevice?e.pageY:e.touches[0].pageY)-rectTop;
};


//Start Swipe
document.body.addEventListener(events[deviceType].down,e=>{
  isSwiped=true;
  //Get X and Y Position
  getXY(e);
  initialX=mouseX;
  initialY=mouseY;
});

//Mousemove / touchmove
document.body.addEventListener(events[deviceType].move,e=>{
  // if(!isTouchDevice)e.preventDefault();
  if(!isSwiped)return;
  getXY(e);
  let diffX=mouseX-initialX;
  let diffY=mouseY-initialY;
  if(Math.abs(diffY)>Math.abs(diffX))moeve(diffY>0?1:3);
  else moeve(diffX>0?2:0);
  isSwiped=false;
});

//Stop Drawing
let stopdraw=()=>{isSwiped=false};
document.body.addEventListener(events[deviceType].up,stopdraw);
window.onmouseup=stopdraw;
document.body.addEventListener("mouseleave",stopdraw);
window.onload=stopdraw;