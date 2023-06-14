function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let weekday = randInt(0, 6);
switch (weekday) {
  case 0:
    console.log(`${weekday} monday`);
    break;
  case 1:
    console.log(`${weekday} tuesday`);
    break;
  case 2:
    console.log(`${weekday} wednesday`);
    break;
  case 3:
    console.log(`${weekday} tuesday`);
    break;
  case 4:
    console.log(`${weekday} friday`);
    break;
  case 5:
    console.log(`${weekday} saturday`);
    break;
  case 6:
    console.log(`${weekday} sunday`);
    break;
  default:
    console.log(`${weekday} error`);
}