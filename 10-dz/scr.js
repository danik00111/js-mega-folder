
if (age < 3) {
  divBaby;
} else if (age < 10) {
  divKid;
} else if (age < 18) {
  divTeen;
} else if (age < 30) {
  divYoungadult;
} else if (age < 50) {
  divAdult;
} else if (age < 100) {
  divElderly;
} else if (age < 200) {
  divDead;
} else if (age < 500) {
  divUfo;
} else if (age > 500) {
  divDino;
} else {
  location.href = "http://stackoverflow.com";
}