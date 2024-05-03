/* let count = 0;
let a = setInterval(()=>{
  console.log('real...', count)
  if(count++ > 5) clearInterval(a);
},2e3); // 2 secs, can be changed to 5 but too long */

/* import * as readline from 'node:readline/promises'; 
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout
});
const timer = parseInt(await rl.question('seconds: '));
setTimeout(()=>{console.log('the q')},timer*1e3);
rl.close(); */
const delays = 0.5e3;
const b = document.getElementById('blokk');
const anim = ()=>{
  setTimeout(() => {
    b.style.width = "500px";
    b.style.backgroundColor = "hsl(45,100%,50%)"
  }, delays * 0);
  setTimeout(() => {
    b.style.height = "500px";
    b.style.backgroundColor = "hsl(90,100%,50%)"
  }, delays * 1);
  setTimeout(() => {
    b.style.width = "250px";
    b.style.left = "250px";
    b.style.backgroundColor = "hsl(135,100%,50%)"
  }, delays * 2);
  setTimeout(() => {
    b.style.height = "250px";
    b.style.top = "250px";
    b.style.backgroundColor = "hsl(180,100%,50%)"
  }, delays * 3);
  setTimeout(() => {
    b.style.width = "500px";
    b.style.left = "0px";
    b.style.backgroundColor = "hsl(225,100%,50%)"
  }, delays * 4);
  setTimeout(() => {
    b.style.height = "500px";
    b.style.top = "0px";
    b.style.backgroundColor = "hsl(270,100%,50%)"
  }, delays * 5);
  setTimeout(() => {
    b.style.width = "250px";
    b.style.backgroundColor = "hsl(315,100%,50%)"
  }, delays * 6);
  setTimeout(() => {
    b.style.height = "250px";
    b.style.backgroundColor = "hsl(0,100%,50%)"
  }, delays * 7);
}; anim();
const i1 = setInterval(anim,delays*8);