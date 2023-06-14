function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let month = randInt(1, 12);
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log(`${month} winter`);
    break;
  case 3:
  case 4:
  case 5:
    console.log(`${month} spring`);
    break;
  case 6:
  case 7:
  case 8:
    console.log(`${month} summer`);
    break;
  case 9:
  case 10:
  case 11:
    console.log(`${month} autumn`);
    break;
  default:
    console.log(`${month} error`);
}
// if ((month === 12) || (month === 1) || (month === 2)) {
//   console.log(`${month} winter`);
// } else if ((month >= 3) && (month <= 5)) {
//   console.log(`${month} spring`);
// } else if ((month >= 6) && (month <= 8)) {
//   console.log(`${month} summer`);
// } else if ((month >= 9) && (month <= 11)) {
//   console.log(`${month} autumn`);
// } else { console.log(`${month} error`); }