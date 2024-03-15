const rootGet = (x) => getComputedStyle(document.querySelector(':root')).getPropertyValue('--' + x);
const rootSet = (x, y) => { document.querySelector(':root').style.setProperty('--' + x, y) };
/**
 * Generates a random number in the range of the two input numbers (inclusive).
 * @param {int} min
 * @param {int} max
 * @returns {int}
**/
function randInt(min,max){return Math.floor((Math.random()*(max-min+1))+min)};
/**
 * @returns {string} A random color, in the hex form (e.g. '#3f71a8').
**/
function randHex(){return '#'+((randInt(0,256**3).toString(16)).padStart(6,'0'))};

const rgbToHex = rgb => '#'+(rgb.match(/\d+/g)).map(x=>parseInt(x).toString(16).padStart(2,'0')).join('');
const rgbBrightness = rgb => (rgb.match(/\d+/g)).map(x=>parseInt(x)).reduce((a,v)=>a+v,0)/(255*3);
const rgbFormat = rgb => 'rgb('+(rgb.match(/\d+/g)).map(x=>x.padStart(3,'0'))+')';

for(let i=0;i<96;i++) {
  let elem = document.createElement("div");
  elem.classList.add('color');
  let color = randHex();
  elem.style.backgroundColor = color;
  elem.style.border = `${rgbBrightness(elem.style.backgroundColor)<0.5?'white':'black'} 1px solid`;
  elem.setAttribute("color",color);
  elem.onmouseenter = () => {
    document.getElementById('hex').innerHTML = elem.getAttribute("color");
    document.getElementById('rgb').innerHTML = rgbFormat(elem.style.backgroundColor);
    document.getElementById('hex').style.color = elem.getAttribute("color");
    document.getElementById('rgb').style.color = elem.getAttribute("color");
    document.getElementById('hex').style.backgroundColor = (rgbBrightness(elem.style.backgroundColor)<0.5)?'white':'black';
    document.getElementById('rgb').style.backgroundColor = (rgbBrightness(elem.style.backgroundColor)<0.5)?'white':'black';
  };
  document.getElementById('palette').appendChild(elem);
}
for(let r=0;r<256;r+=51)
for(let g=0;g<256;g+=51)
for(let b=0;b<256;b+=51) {
  let elem = document.createElement("div");
  elem.classList.add('color');
  let color = rgbToHex(`rgb(${r},${g},${b})`);
  elem.style.backgroundColor = color;
  elem.style.border = `${rgbBrightness(elem.style.backgroundColor)<0.5?'white':'black'} 1px solid`;
  elem.setAttribute("color",color);
  elem.onmouseenter = () => {
    document.getElementById('hex').innerHTML =
      (hex => '#' + hex.substring(1,2) + hex.substring(3,4) + hex.substring(5,6))
      // '#ff0066' => '#f06'
      (elem.getAttribute("color"));
    document.getElementById('rgb').innerHTML = rgbFormat(elem.style.backgroundColor);
    document.getElementById('hex').style.color = elem.getAttribute("color");
    document.getElementById('rgb').style.color = elem.getAttribute("color");
    document.getElementById('hex').style.backgroundColor = (rgbBrightness(elem.style.backgroundColor)<0.5)?'white':'black';
    document.getElementById('rgb').style.backgroundColor = (rgbBrightness(elem.style.backgroundColor)<0.5)?'white':'black';
  };
  document.getElementById(`reds${r/51}`).appendChild(elem);
}
document.getElementById('size').oninput = () => {
  document.getElementById('size').style.width = document.getElementById('size').value.length + 'ch'
  if(document.getElementById('size').style.width == '0ch')
  document.getElementById('size').style.width = '3ch'
}
document.getElementById('size').addEventListener('input',_.debounce(()=>{
  if(!document.getElementById('size').value=='')rootSet('size',document.getElementById('size').value+'px')
},250));