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
];
let elevDir = null;
const elevFunc = () => {
  elevActualFunc();
  if(document.querySelector(`.elev-button:nth-child(${floor})`).classList.contains('lid-up')) document.querySelector(`.elev-button:nth-child(${floor})`).classList.remove('lid-up');
  if(floorCalls[0][floor-1] === true) {
    floorCalls[0][floor-1] = false;
    queue.splice(queue.indexOf(floor), 1);
    // Open the doors to pick up the passanger...
  };
  queueOutput.innerHTML = queue;
};
const elevActualFunc = () => {
  updateFloorCalls();
  if(elevDir === null) { // special case for first elev movement
    if(litButtonsInside()) { // prioritize requests from inside the elev
      if(isGoingUpInside()) { floorUp(); elevDir = true; console.log('Elevator going up (in, null)'); return; };
      if(isGoingDownInside()) { floorDown(); elevDir = false; console.log('Elevator going down (in, null)'); return; };
    };
    if(isGoingUpOutside()) { floorUp(); elevDir = true; console.log('Elevator going up (out, null)'); return; };
    if(isGoingDownOutside()) { floorDown(); elevDir = false; console.log('Elevator going down (out, null)'); return; };
    console.log('Elevator idle (null)');
    return;
  };
  if(litButtonsInside()) { // prioritize requests from inside the elev
    if((isGoingUpInside())&&(isGoingDownInside())) {
      if(elevDir) {floorUp(); console.log('Elevator going up (in, both)'); elevDir = true; return;}
      else {floorDown(); console.log('Elevator going down (in, both)'); elevDir = false; return;};
    };
    if((isGoingUpInside())) {floorUp(); console.log('Elevator going up (in)'); elevDir = true; return;};
    if((isGoingDownInside())) {floorDown(); console.log('Elevator going down (in)'); elevDir = false; return;};
  };
  if((isGoingUpOutside())&&(isGoingDownOutside())) {
    if(elevDir) {floorUp(); console.log('Elevator going up (out, both)'); elevDir = true; return;}
    else {floorDown(); console.log('Elevator going down (out, both)'); elevDir = false; return;};
  };
  if(isGoingUpOutside()) {floorUp(); console.log('Elevator going up (out)'); elevDir = true; return;};
  if(isGoingDownOutside()) {floorDown(); console.log('Elevator going down (out)'); elevDir = false; return;};
  console.log('Elevator idle');
};

const isGoingUp = () => (isGoingUpInside() || isGoingUpOutside());
const isGoingDown = () => (isGoingDownInside() || isGoingDownOutside());
const litButtonsInside = () => (isGoingUpInside() || isGoingDownInside());
const litButtonsOutside = () => (isGoingUpOutside() || isGoingDownOutside());
const isGoingUpInside = () => [...floorCalls[1]].splice(floor-1).some(x => x);
const isGoingUpOutside = () => [...floorCalls[0]].splice(floor-1).some(x => x);
const isGoingDownInside = () => [...floorCalls[1]].splice(0,floor).some(x => x);
const isGoingDownOutside = () => [...floorCalls[0]].splice(0,floor).some(x => x);
const updateFloorCalls = () => {
  floorCalls = [[false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false]];
  for(let i=1; i<=10; i++) if(queue.includes(i)) floorCalls[0][i-1] = true;
  elevButtons.forEach((button, i) => { if(button.classList.contains('lid-up')) floorCalls[1][i] = true; });
  console.log(floorCalls[0], floorCalls[1]);
}

let elevLoop = setInterval(elevFunc, 1000);
const unloop = () => {
  clearInterval(elevLoop);
  document.getElementById('unloop-btn').disabled = true;
};