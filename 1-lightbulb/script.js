let lightbulb = false;
let img = document.querySelector('img');
document.querySelector('button').addEventListener('click', () => {
  if (lightbulb == true) {
    img.src = './pic_bulboff.gif';
    img.alt = 'lightbulb off';
  } else {
    img.src = './pic_bulbon.gif';
    img.alt = 'lightbulb on';
  };
  lightbulb = !lightbulb;
});