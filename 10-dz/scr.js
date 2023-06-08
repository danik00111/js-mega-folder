
if (age < 3) {
  divBaby.classList.add('anim');
} else if (age < 10) {
  divKid.classList.add('anim');
} else if (age < 18) {
  divTeen.classList.add('anim');
} else if (age < 30) {
  divYoungadult.classList.add('anim');
} else if (age < 50) {
  divAdult.classList.add('anim');
} else if (age < 100) {
  divElderly.classList.add('anim');
} else if (age < 200) {
  divDead.classList.add('anim');
} else if (age < 500) {
  divUfo.classList.add('anim');
} else if (age > 500) {
  divDino.classList.add('anim');
} else {
  location.href = "http://stackoverflow.com";
}