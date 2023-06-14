let age;
const MY_FORM = document.getElementById('form');
const MY_INPUT = document.getElementById('input');
const MY_BUTTON = document.getElementById('button');
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

MY_FORM.addEventListener('submit', (event) => {
console.log('debug log');
event.preventDefault(); // Prevent form submission
age = parseInt(MY_INPUT.value);
document.querySelectorAll('.images > img').forEach(img => img.classList.remove('anim'));
switch (true) {
  case (0 <= age && age < 3):
    IMG_BABY.classList.add('anim');
    break;
  case (3 <= age && age < 12):
    IMG_KID.classList.add('anim');
    break;
  case (12 <= age && age < 18):
    IMG_TEEN.classList.add('anim');
    break;
  case (18 <= age && age < 25):
    IMG_YA.classList.add('anim');
    break;
  case (25 <= age && age < 50):
    IMG_ADULT.classList.add('anim');
    break;
  case (50 <= age && age < 100):
    IMG_ELDER.classList.add('anim');
    break;
  case (100 <= age && age < 200):
    IMG_DEAD.classList.add('anim');
    break;
  case (200 <= age && age < 500):
    IMG_UFO.classList.add('anim');
    break;
  case (age >= 500):
    IMG_DINO.classList.add('anim');
    break;
  default:
    IMG_ERROR.classList.add('anim');
    setTimeout(() => {
      location.href = "https://youtu.be/5BZLz21ZS_Y";
    }, 100);
}
});
