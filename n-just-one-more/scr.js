const button = document.getElementById('coinflip');
const hbutton = document.getElementById('headsflip');
const tbutton = document.getElementById('tailsflip');
let score = document.getElementById('score').innerHTML;
let zeros = '0';
button.addEventListener("click", () => {
  if (zeros !== true) { // nothing happens if you won
    document.getElementById('score').classList.remove('minus');
    document.getElementById('score').classList.remove('plus');
    if(Math.floor(Math.random()*(1-0+1))) {
      score *= 1.8;
      document.getElementById('score').classList.add('plus');
    } else {
      score *= 0.5;
      document.getElementById('score').classList.add('minus');
    }
    score = score.toFixed(4);
    let zeros;
    switch(true){
      case score<1:zeros='0000';break;
      case score<10:zeros='000';break;
      case score<100:zeros='00';break;
      case score<1000:zeros='0';break;
      case score<10000:zeros='';break;
      case score>10000:zeros=true;break; // you won
    }
    if(zeros === '0000') {
      document.getElementById('score').innerHTML = score.slice(1); // make all 0s greyed out
    } else if(zeros === true) {
      document.getElementById('score').innerHTML = '10K!'; // you won
    } else {
      document.getElementById('score').innerHTML = score;
    }
    if (zeros !== true) { document.getElementById('trailing').innerHTML = zeros; }
  }
});
hbutton.addEventListener("click", () => {
  if (zeros !== true) { // nothing happens if you won
    document.getElementById('score').classList.remove('minus');
    document.getElementById('score').classList.remove('plus');
    score = (score * 1.8).toFixed(4);
    document.getElementById('score').classList.add('plus');
    let zeros;
    switch(true){
      case score<1:zeros='0000';break;
      case score<10:zeros='000';break;
      case score<100:zeros='00';break;
      case score<1000:zeros='0';break;
      case score<10000:zeros='';break;
      case score>10000:zeros=true;break; // you won
    }
    if(zeros === '0000') {
      document.getElementById('score').innerHTML = score.slice(1); // make all 0s greyed out
    } else if(zeros === true) {
      document.getElementById('score').innerHTML = '10K!'; // you won
    } else {
      document.getElementById('score').innerHTML = score;
    }
    if(zeros !== true) { document.getElementById('trailing').innerHTML = zeros; }
  }
});
tbutton.addEventListener("click", () => {
  if (zeros !== true) { // nothing happens if you won
    document.getElementById('score').classList.remove('minus');
    document.getElementById('score').classList.remove('plus');
    score = (score * 0.5).toFixed(4);
    document.getElementById('score').classList.add('minus');
    let zeros;
    switch(true){
      case score<1:zeros='0000';break;
      case score<10:zeros='000';break;
      case score<100:zeros='00';break;
      case score<1000:zeros='0';break;
      case score<10000:zeros='';break;
      case score>10000:zeros=true;break; // you won
    }
    if(zeros === '0000') {
      document.getElementById('score').innerHTML = score.slice(1); // make all 0s greyed out
    } else if(zeros === true) {
      document.getElementById('score').innerHTML = '10K!'; // you won
    } else {
      document.getElementById('score').innerHTML = score;
    }
    if (zeros !== true) { document.getElementById('trailing').innerHTML = zeros; }
  }
});