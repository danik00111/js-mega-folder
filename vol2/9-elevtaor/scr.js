const elevButtons = Array.from(document.querySelectorAll('.elev-button'));
const segments = Array.from(document.querySelectorAll('.led-digit.ones .led-segment'));
const theOne = Array.from(document.querySelectorAll('.led-digit.tens .led-segment'));
let floor = 4;
const sevensegmentLookup = [
  [1,1,1,1,1,1,0],
  [0,1,1,0,0,0,0],
  [1,1,0,1,1,0,1],
  [1,1,1,1,0,0,1],
  [0,1,1,0,0,1,1],
  [1,0,1,1,0,1,1],
  [1,0,1,1,1,1,1],
  [1,1,1,0,0,0,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,0,1,1]
];
elevButtons.forEach((button, i) => { button.addEventListener('click', () => {
  if (floor !== button.floor) elevButtons[i].classList.add('lid-up');
  elevButtons.forEach((button, i) => {if(floor === button.floor) elevButtons[i].classList.remove('lid-up');})
  if (elevButtons.every(x => x.classList.contains('lid-up'))) { elevButtons.forEach((buttob, i) => { buttob.classList.remove('lid-up')}) };
});});
const floorTo = (num) => { if(num<20){floor = num}else{floor=19}; updateLED(); };
const floorUp = () => { if(floor<10){floor++}; updateLED(); };
const floorDown = () => { if(floor>1){floor--}; updateLED(); };
const updateLED = () => {
  if(floor >= 10) {
    theOne.forEach(segment => { segment.classList.add('lid-up'); });
  } else {
    theOne.forEach(segment => { segment.classList.remove('lid-up'); });
  }
  segments.forEach((segment, i) => {
    if(sevensegmentLookup[floor % 10][i]) {
      segment.classList.add('lid-up');
    } else {
      segment.classList.remove('lid-up');
    };
  });
}
updateLED();

const callElevButton = document.querySelector('#elevator-call-btn');
let callElevInput = document.querySelector('#elevator-call-inp');
let queueOutput = document.getElementById('queue-output');
let queue = [];
callElevButton.addEventListener('click', ()=>{
  let newFloor = parseInt(callElevInput.value);
  if (newFloor <= 10 && newFloor >= 1 && !(queue.includes(newFloor)) && newFloor !== floor) {
    queue.push(newFloor);
    queueOutput.innerHTML = queue;
  }
  console.log(newFloor, queue);
});

const elevTo = (num) => {
  while(floor != num) {
    (floor < num) ? floorUp() : floorDown();
  }
}

let floorCalls = [
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false]
]
let elevDir = null;

const elevFunc = () => {
  updateFloorCalls();
  console.log(isGoingUp());
  console.log(isGoingDown());
  console.log(litButtonsInside());
  console.log(litButtonsOutside());
  console.log(isGoingUpInside());
  console.log(isGoingUpOutside());
  console.log(isGoingDownInside());
  console.log(isGoingDownOutside());
  {
    // // if (floorCalls[0].every(x => !x) && floorCalls[0].every(x => x === false)) { console.log('Elevator is idle'); return;}
    // if(isGoingUpInside() || isGoingDownInside()) {
      //   console.log('There are lid up buttons inside the elev.')
      //   if(init) {
        //     if(isGoingUpInside()) { console.log('ELEVATOR IS MOVING UP'); init = false; floorUp(); return; };
  //     if(isGoingDownInside()) { console.log('ELEVATOR IS MOVING DOWN'); init = false; floorDown(); return; }
  //     console.log('ELEVATOR IS IDLE'); return;
  //   }
  //   if(elevDir&&isGoingUpInside()) { console.log('ELEVATOR IS MOVING UP'); floorUp(); return; };
  //   if((!elevDir)&&isGoingDownInside()) { console.log('ELEVATOR IS MOVING DOWN'); floorDown(); return; }
  //   console.log('ELEVATOR IS IDLE'); return;
  // }
  // console.log('There are NO lid up buttons inside the elev.')
  // if (isGoingUpOutside() && isGoingDownOutside()) {
    //   if (elevDir) { floorUp(); console.log('ELEVATOR IS MOVING UP'); } else { floorDown(); console.log('ELEVATOR IS MOVING DOWN'); }
    //   return;
    // }
    // if((!isGoingUpOutside()) && (!isGoingDownOutside())) { console.log('ELEVATOR IS IDLE'); return;}
    // console.log(`ELEVATOR IS MOVING ${isGoingUpOutside()?'UP':'DOWN'}`);
    // elevDir = isGoingUpOutside();
    // if(isGoingUpOutside()){floorUp(); return;}
    // if(isGoingDownOutside()){floorDown(); return;}
  }; // commented out code, folded
  {
  // if(elevDir === null) { // special case for first elev movement
  //   console.log('Null.')
  //   if(litButtonsInside()) { // prioritize requests from inside the elev
  //     console.log('Indied,')
  //     if(isGoingUpInside()) { floorUp(); elevDir = true; console.log('Elevator going up (in, null)'); return; };
  //     if(isGoingDownInside()) { floorDown(); elevDir = false; console.log('Elevator going down (in, null)'); return; };
  //   };
  //   console.log('Not,')
  //   if(isGoingUpOutside()) { floorUp(); elevDir = true; console.log('Elevator going up (out, null)'); return; };
  //   if(isGoingDownOutside()) { floorDown(); elevDir = false; console.log('Elevator going down (out, null)'); return; };
  //   console.log('Elevator idle (null)')
  //   return;
  // };
  // if(litButtonsInside) { // prioritize requests from inside the elev
  //   // Code...
  //   return;
  // };
  }; // second attepmrt 2 and i am now already brugh screw this sgjt anymoer
}

const isGoingUp = () => (isGoingUpInside() || isGoingUpOutside());
const isGoingDown = () => (isGoingDownInside() || isGoingDownOutside());
const litButtonsInside = () => (isGoingUpInside() || isGoingDownInside());
const litButtonsOutside = () => (isGoingUpOutside() || isGoingDownOutside());
const isGoingUpInside = () => [...floorCalls[1].splice(floor-1)].some(x => x);
const isGoingUpOutside = () => [...floorCalls[0].splice(floor-1)].some(x => x);
const isGoingDownInside = () => [...floorCalls[1].splice(0,floor)].some(x => x);
const isGoingDownOutside = () => [...floorCalls[0].splice(0,floor)].some(x => x);
const updateFloorCalls = () => {
  floorCalls = [[false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false]];
  for(let i=1; i<=10; i++) if(queue.includes(i)) floorCalls[0][i-1] = true;
  elevButtons.forEach((button, i) => { if(button.classList.contains('lid-up')) floorCalls[1][i] = true; });
  floorCalls[1].reverse();
  // floorCalls[0][floor-1] = false;
  // floorCalls[1][floor-1] = false;
  // queueOutput.innerHTML = queue;
  console.log(floorCalls[0], floorCalls[1]);
}

// let elevLoop = setInterval(elevFunc, 2500);
const unloop=()=>{clearInterval(elevLoop)};