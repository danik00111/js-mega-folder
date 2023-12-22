let zone = document.getElementById('zone');
let hw = parseInt(getComputedStyle(zone).width)/2;
let hh = parseInt(getComputedStyle(zone).height)/2;
let vw = parseInt(getComputedStyle(document.body).width);
let vh = parseInt(getComputedStyle(document.body).height);
let gameOn = true;
let score = -1;
const initDelay = 500;
const initDecay = 5;
let decay = initDecay;
let delay = initDelay + initDecay;
const buttob = document.getElementById('rondom');
const buttobW = parseInt(getComputedStyle(buttob).width);
const buttobH = parseInt(getComputedStyle(buttob).height);
zone.addEventListener('mouseleave',()=>{
  document.body.style.background=gameOn?'beige':'tan';
  document.body.style.color='black'
});
document.body.addEventListener('mouseenter',()=>{
  document.body.style.background=gameOn?'beige':'tan';
  document.body.style.color='black'
});
document.body.addEventListener('mouseleave',()=>{
  document.body.style.background='black';
  document.body.style.color=gameOn?'beige':'tan';
  gameOn = false;
  document.querySelector('p').innerHTML='your mouse left the window';
  document.getElementById('delay').disabled = false;
  document.getElementById('decay').disabled = false;
  buttob.innerHTML=score+'<br>Retry?';
});
zone.addEventListener('mouseenter',()=>{
  document.body.style.background='black';
  document.body.style.color=gameOn?'beige':'tan';
  gameOn = false;
  document.querySelector('p').innerHTML='Game Over!';
  document.getElementById('delay').disabled = false;
  document.getElementById('decay').disabled = false;
  buttob.innerHTML=score+'<br>Retry?';
});
document.addEventListener('mousemove',e=>{
  setTimeout(()=>{
    zone.style.display = 'block';
    zone.style.top = `${e.clientY-hh}px`;
    zone.style.left = `${e.clientX-hw}px`;
    zone.style.opacity = gameOn ? 0.5 : 0.1;
    zone.style.zIndex = gameOn ? 0 : -5;
  },delay);
});
const randInt=(n,x)=>Math.floor(Math.random()*(Math.ceil(x)-Math.ceil(n)+1))+Math.ceil(n);
const plus = () => {
  if(gameOn){
    score++;
    delay-=decay;
    buttob.style.top = randInt(0,vh-buttobH)+'px';
    buttob.style.left = randInt(0,vw-buttobW)+'px';
    buttob.innerHTML = score;
    document.querySelector('p').innerHTML = `Click the button, while avoiding the circle,<br>that follows you with ${delay}ms delay.`;
  } else {
    delay = document.getElementById('delay').value;
    decay = document.getElementById('decay').value;
    score = 0;
    document.getElementById('delay').disabled = true;
    document.getElementById('decay').disabled = true;
    gameOn = true;
    buttob.style.top = randInt(0,vh-buttobH)+'px';
    buttob.style.left = randInt(0,vw-buttobW)+'px';
    buttob.innerHTML = score;
    document.body.style.background='beige';
    document.body.style.color='black'
    document.querySelector('p').innerHTML = `Click the button, while avoiding the circle,<br>that follows you with ${delay}ms delay.`;
  }
};
plus();