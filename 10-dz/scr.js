// just declaring consts for html elements
// actual code starts at line 18

let age;
const MY_INPUT = document.querySelector('.input');
const MY_BUTTON = document.querySelector('.button');
const IMG_BABY = document.querySelector('.baby');
const IMG_KID = document.querySelector('.kic');
const IMG_TEEN = document.querySelector('.teen');
const IMG_YA = document.querySelector('.ya');
const IMG_ADULT = document.querySelector('.adult');
const IMG_ELDER = document.querySelector('.elder');
const IMG_DEAD = document.querySelector('.dead');
const IMG_UFO = document.querySelector('.ufo');
const IMG_DINO = document.querySelector('.dino');
const IMG_ERROR = document.querySelector('.error');

MY_BUTTON.addEventListener('click', () => {
  age = MY_INPUT.value;
  document.querySelectorAll('.images>img').classList.remove('anim');
  if (age < 3) {
    IMG_BABY.classList.add('anim');
  } else if (age < 12) {
    IMG_KID.classList.add('anim');
  } else if (age < 18) {
    IMG_TEEN.classList.add('anim');
  } else if (age < 28) {
    IMG_YA.classList.add('anim');
  } else if (age < 45) {
    IMG_ADULT.classList.add('anim');
  } else if (age < 90) {
    IMG_ELDER.classList.add('anim');
  } else if (age < 200) {
    IMG_DEAD.classList.add('anim');
  } else if (age < 500) {
    IMG_UFO.classList.add('anim');
  } else if (age > 500) {
    IMG_DINO.classList.add('anim');
  } else {
    IMG_ERROR.classList.add('anim');
    setTimeout(() => {
      location.href = "https://youtu.be/5BZLz21ZS_Y";
    }, 100);
  }
})