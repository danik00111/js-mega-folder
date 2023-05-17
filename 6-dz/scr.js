document.querySelector('.modal').classList.add('invis');
// document.querySelector('.loading').classList.remove('loading');
document.querySelector('#buttob').addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('invis');
  document.querySelector('#fadp').classList.add('fade');
})
document.querySelector('.confirm').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('invis');
  document.querySelector('#fadp').classList.remove('fade');
  console.log(true);
})
document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('invis');
  document.querySelector('#fadp').classList.remove('fade');
  console.log(false);
})

// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min - 1) + min);
// }
let rr; let gg; let bb;
let colorChange = document.querySelector('.colorChange')
colorChange.addEventListener('click', function () {
  rr = Math.floor(Math.random() * 256);
  gg = Math.floor(Math.random() * 256);
  bb = Math.floor(Math.random() * 256);
  colorChange.style.background = `rgb(${rr},${gg},${bb})`
  if (rr + gg + bb < ((255 / 2) * 3)) {
    colorChange.style.color = 'white';
  } else {
    colorChange.style.color = 'black';
  };
})

document.querySelector('.prempt').addEventListener('click', function () {
  let arst = prompt('enter number');
  alert(Math.round(parseFloat(arst)));
})

let togg = document.querySelector('.togg');
togg.style.background = 'black';
togg.style.color = 'white';
let toggr = true;
togg.addEventListener('click', function () {
  if (toggr) {
    togg.style.background = 'white';
    togg.style.color = 'black';
  } else {
    togg.style.background = 'black';
    togg.style.color = 'white';
  }
  toggr = !toggr;
})



// // random color generator 
// var randomColor = function () {
//   var rvalue = function () {
//     return Math.round(Math.random() * 255);
//   }

//   // return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
//   return `rgb(${rvalue()},${rvalue()},${rvalue()})`;
// }

// // get button element from DOM
// var colorChange = document.querySelector('.colorChange');

// // create event listener to change color on button click
// colorChange.addEventListener('click', () => {
//   colorChange.style.color = randomColor();
// })