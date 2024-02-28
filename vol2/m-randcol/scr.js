/**
 * Generates a random number in the range of the two input numbers (inclusive).
 * @param {int} min
 * @param {int} max
 * @returns {int}
 */
function randInt(min,max){return Math.floor((Math.random()*(max-min+1))+min)};
/**
 * @returns {string} A random color, in the hex form (e.g. '#3f71a8').
 */
function randHex(){return '#'+((randInt(0,256**3).toString(16)).padStart(6,'0'))};

const rgbToHex = rgb => '#'+(rgb.match(/\d+/g)).map(x=>parseInt(x).toString(16).padStart(2,'0')).join('');
const rgbBrightness = rgb => (rgb.match(/\d+/g)).map(x=>parseInt(x)).reduce((a,v)=>a+v,0)/(255*3);
const rgbFormat = rgb => 'rgb('+(rgb.match(/\d+/g)).map(x=>x.padStart(3,'0'))+')';

for(let i=0;i<96;i++) {
  let elem = document.createElement("div");
  elem.classList.add('color');
  let color = randHex();
  elem.style.backgroundColor = color;
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