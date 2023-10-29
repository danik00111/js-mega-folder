let diceCup = [5,5,1,5,5];
let yeah;
const isFOAK = () => {
  let count = 1;
  yeah = false;
  let the = [...diceCup].sort();
  [...diceCup].sort().forEach((die, i) => {
    console.log(die, the[i-1], (die == the[i-1]));
    if (die == the[i-1]) { count++; } else { count = 1 };
    console.log(i, count, '\n');
    if (count >= 4) yeah = true;
  });
  return yeah;
}
console.log(isFOAK());