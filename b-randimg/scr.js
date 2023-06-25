function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let cycleVar = 0;
const MY_FORM = document.getElementById('form');
const MY_INPUT = document.getElementById('input');
const MY_BUTTON_PREV = document.getElementById('buttonPrev');
const MY_BUTTON_RAND = document.getElementById('buttonRand');
const MY_BUTTON_NEXT = document.getElementById('buttonNext');
const IMG_BABY = document.querySelector('.images #baby');
const IMG_KID = document.querySelector('.images #kid');
const IMG_TEEN = document.querySelector('.images #teen');
const IMG_YA = document.querySelector('.images #ya');
const IMG_ADULT = document.querySelector('.images #adult');
const IMG_ELDER = document.querySelector('.images #elder');
const IMG_DEAD = document.querySelector('.images #dead');
const IMG_UFO = document.querySelector('.images #ufo');
const IMG_DINO = document.querySelector('.images #dino');
const IMG_ERROR = document.getElementById('error');

MY_BUTTON_NEXT.addEventListener('click', () => {
  document.querySelectorAll('.images > img').forEach(img => img.classList.remove('anim'));
  cycleVar++;
  cycleVar = cycleVar % 9;
  console.log(cycleVar);
  switch (cycleVar) { // add anim to one of the images
    case (0):
      IMG_BABY.classList.add('anim');
      break;
    case (1):
      IMG_KID.classList.add('anim');
      break;
    case (2):
      IMG_TEEN.classList.add('anim');
      break;
    case (3):
      IMG_YA.classList.add('anim');
      break;
    case (4):
      IMG_ADULT.classList.add('anim');
      break;
    case (5):
      IMG_ELDER.classList.add('anim');
      break;
    case (6):
      IMG_DEAD.classList.add('anim');
      break;
    case (7):
      IMG_UFO.classList.add('anim');
      break;
    case (8):
      IMG_DINO.classList.add('anim');
      break;
  }
});

MY_BUTTON_RAND.addEventListener('click', () => {
  document.querySelectorAll('.images > img').forEach(img => img.classList.remove('anim'));
  cycleVar = randInt(0,8);
  console.log(cycleVar);
  switch (cycleVar) { // add anim to one of the images
    case (0):
      IMG_BABY.classList.add('anim');
      break;
    case (1):
      IMG_KID.classList.add('anim');
      break;
    case (2):
      IMG_TEEN.classList.add('anim');
      break;
    case (3):
      IMG_YA.classList.add('anim');
      break;
    case (4):
      IMG_ADULT.classList.add('anim');
      break;
    case (5):
      IMG_ELDER.classList.add('anim');
      break;
    case (6):
      IMG_DEAD.classList.add('anim');
      break;
    case (7):
      IMG_UFO.classList.add('anim');
      break;
    case (8):
      IMG_DINO.classList.add('anim');
      break;
  }
});

MY_BUTTON_PREV.addEventListener('click', () => {
  document.querySelectorAll('.images > img').forEach(img => img.classList.remove('anim'));
  cycleVar--;
  if(cycleVar === -1){cycleVar = 8};
  console.log(cycleVar);
  switch (cycleVar) { // add anim to one of the images
    case (0):
      IMG_BABY.classList.add('anim');
      break;
    case (1):
      IMG_KID.classList.add('anim');
      break;
    case (2):
      IMG_TEEN.classList.add('anim');
      break;
    case (3):
      IMG_YA.classList.add('anim');
      break;
    case (4):
      IMG_ADULT.classList.add('anim');
      break;
    case (5):
      IMG_ELDER.classList.add('anim');
      break;
    case (6):
      IMG_DEAD.classList.add('anim');
      break;
    case (7):
      IMG_UFO.classList.add('anim');
      break;
    case (8):
      IMG_DINO.classList.add('anim');
      break;
  }
});
