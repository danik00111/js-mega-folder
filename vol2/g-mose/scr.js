const zone = document.getElementById('zone');
const buttob = document.getElementById('rondom');
const stricc = document.getElementById('strictoggle');
const randInt=(n,x)=>Math.floor(Math.random()*(Math.ceil(x)-Math.ceil(n)+1))+Math.ceil(n);
let vw = parseInt(getComputedStyle(document.body).width);
let vh = parseInt(getComputedStyle(document.body).height);
const zw = parseInt(getComputedStyle(zone).width);
const zh = parseInt(getComputedStyle(zone).height);
const bw = parseInt(getComputedStyle(buttob).width);
const bh = parseInt(getComputedStyle(buttob).height);
buttob.style.top = `${randInt(0,vh-bh)}px`;
buttob.style.left = `${randInt(0,vw-bw)}px`;
let strict = false;
let gameOn = true;
let score = 0;
const initDelay = 1500;
const initDecay = 15;
let decay = initDecay;
let delay = initDelay + initDecay;
zone.addEventListener('mouseleave',()=>{
  document.body.style.background=gameOn?'beige':'tan';
  document.body.style.color='black';
  document.getElementById('delay').style.color='black';
  document.getElementById('decay').style.color='black';
});
window.addEventListener('resize',_=>{
  vw = parseInt(getComputedStyle(document.body).width);
  vh = parseInt(getComputedStyle(document.body).height);
},true);
document.body.addEventListener('mouseenter',()=>{
  document.body.style.background=gameOn?'beige':'tan';
  document.body.style.color='black';
  document.getElementById('delay').style.color='black';
  document.getElementById('decay').style.color='black';
});
document.body.addEventListener('mouseleave',()=>{
  document.body.style.background='black';
  document.body.style.color=gameOn?'beige':'tan';
  document.getElementById('delay').style.color=gameOn?'beige':'tan';
  document.getElementById('decay').style.color=gameOn?'beige':'tan';
  gameOn = false;
  document.querySelector('p').innerHTML='your mouse left the <s>house</s> &lt;body&gt;';
  document.getElementById('delay').style.opacity = 1;
  document.getElementById('decay').style.opacity = 1;
  stricc.style.opacity = 1;
  document.getElementById('delay').disabled = false;
  document.getElementById('decay').disabled = false;
  buttob.classList.add('diasabled');
  buttob.innerHTML=score+'<br>Retry?';
});
zone.addEventListener('mouseenter',()=>{
  document.body.style.background='black';
  document.body.style.color=gameOn?'beige':'tan';
  document.getElementById('delay').style.color=gameOn?'beige':'tan';
  document.getElementById('decay').style.color=gameOn?'beige':'tan';
  gameOn = false;
  document.querySelector('p').innerHTML='Game Over!';
  document.getElementById('decay').style.opacity = 1;
  document.getElementById('delay').style.opacity = 1;
  stricc.style.opacity = 1;
  document.getElementById('delay').disabled = false;
  document.getElementById('decay').disabled = false;
  stricc.style.cursor = 'pointer';
  buttob.classList.add('diasabled');
  buttob.innerHTML=score+'<br>Retry?';
});
document.addEventListener('mousemove',e=>{
  setTimeout(()=>{
    zone.style.display = 'block';
    zone.style.top = `${e.clientY-(zh/2)}px`;
    zone.style.left = `${e.clientX-(zw/2)}px`;
    zone.style.opacity = gameOn ? 0.5 : 0.1;
    zone.style.zIndex = gameOn ? 0 : -5;
  },delay);
});
const e = () => { if(strict) {
  if(gameOn===true){
    delay -= decay;
    buttob.style.top = `${randInt(0,vh-bh)}px`;
    buttob.style.left = `${randInt(0,vw-bw)}px`;
    buttob.innerHTML = score;
    document.querySelector('p').innerHTML = `Click the button, while avoiding the circle,<br>that follows you with ${delay}ms delay.`;
  } else if(gameOn==='h') gameOn = true;
}};
const plus = () => {
  if(gameOn){
    score++;
    if(!strict) {
      delay -= decay;
      buttob.style.top = `${randInt(0,vh-bh)}px`;
      buttob.style.left = `${randInt(0,vw-bw)}px`;
      buttob.innerHTML = score;
      document.querySelector('p').innerHTML = `Click the button, while avoiding the circle,<br>that follows you with ${delay}ms delay.`;
    }
  } else {
    delay = document.getElementById('delay').value;
    decay = document.getElementById('decay').value;
    document.getElementById('delay').style.opacity = 0.5;
    document.getElementById('delay').disabled = true;
    document.getElementById('decay').style.opacity = 0.5;
    document.getElementById('decay').disabled = true;
    buttob.classList.remove('diasabled');
    stricc.style.opacity = 0.5;
    stricc.style.cursor = 'default';
    score = 0; gameOn = 'h';
    buttob.style.top = `${randInt(0,vh-bh)}px`;
    buttob.style.left = `${randInt(0,vw-bw)}px`;
    buttob.innerHTML = score;
    document.body.style.background='beige';
    document.body.style.color='black';
    document.querySelector('p').innerHTML = `Click the button, while avoiding the circle,<br>that follows you with ${delay}ms delay.`;
  }
};
const togge = () => { if(!gameOn) { if(strict) { stricc.innerHTML = 'tolerant' } else { stricc.innerHTML = 'strict' }; strict = !strict } };
e();