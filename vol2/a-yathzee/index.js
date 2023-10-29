import { randInt } from '../../snippets/index.js'
// const rolle = () => randInt(1,6);
// class diceCup {
//   cup;
//   set roll(cup) {
//     cup = [rolle(),rolle(),rolle(),rolle(),rolle()];
//     console.log(cup);
//   }
//   get isThreeOfAKind() {
//     is = false;
//     idek = cup.reduce((acc, value) => (acc[value] = -~acc[value], acc), {});
//   };
//   get isFourOfAKind() {};
// }
// diceCup.roll();
let diceCup;
let rerolls;
let yeah;
console.log(`
  Input: idek just see it in the code ig
`)
const roll = () => {
  rerolls = 2;
  diceCup = [randInt(1,6),randInt(1,6),randInt(1,6),randInt(1,6),randInt(1,6)];
  console.log(diceCup);
}
const rerolle = (h) => {
  if(rerolls < 1) { console.log('< nuh uh'); return; }
  let str = h;
  if(h === undefined) {
    h = '11111';
  }else if(parseInt(str) != str) { console.log('< uhmhmh watthrt'); return; }
  diceCup.forEach((die, i) => {
    // console.log(`< die ${i}, char there ${str.charAt(i)} (${str.charAt(i) === '1'})`);
    if(str.charAt(i) === '1') {
      diceCup[i] = randInt(1,6);
      // console.log(`< rerolled die ${i}, now is ${diceCup[i]}`);
    }
  })
  rerolls--;
  console.log('< rerolled:', diceCup);
  console.log('< rerolls left:', rerolls);
}
const isTOAK = () => {
  let counts = {};
  for (const die of [...diceCup]) counts[die] = (counts[die] || 0) + 1;
  const uniqueCounts = new Set(Object.values(counts));
  return (uniqueCounts.has(3) || uniqueCounts.has(4) || uniqueCounts.has(5));
}
const isFOAK = () => {
  let counts = {};
  for (const die of [...diceCup]) counts[die] = (counts[die] || 0) + 1;
  const uniqueCounts = new Set(Object.values(counts));
  return (uniqueCounts.has(4) || uniqueCounts.has(5));
}
const isYath = () => {
  let the = [...diceCup];
  let r = true;
  the.forEach((die,i) => { if(die != the[0]) { r = false; } });
  return r;
}
const isFH = () => {
  let counts = {};
  for (const die of [...diceCup]) counts[die] = (counts[die] || 0) + 1;
  const uniqueCounts = new Set(Object.values(counts));
  return uniqueCounts.size === 2 && (uniqueCounts.has(2) && uniqueCounts.has(3));
}
const cupSum = () => diceCup.reduce((partialSum, a) => partialSum + a, 0);
roll();
process.stdin.on("data", r => {
  let input = String(r).toLowerCase();
  switch(true) {
    case (input === 'exit\n'):
      process.exit();
    break;
    case (input.startsWith('score ')):
      switch(input.slice(6)) {
        case 'toak\n':
        case '3oak\n':
        case '3 of a kind\n':
        case '3ofakind\n':
        case 'threeofakind\n':
        case 'three of a kind\n':
          console.log(`< 3oak, you score ${(isTOAK()) ? cupSum() : '0 bro fr thought his dice be 3oak lul'}`); process.exit();
        break;
        case 'foak\n':
        case '4oak\n':
        case '4 of a kind\n':
        case '4ofakind\n':
        case 'fourofakind\n':
        case 'four of a kind\n':
          console.log(`< 4oak, you score ${(isFOAK()) ? cupSum() : '0 bro fr thought his dice be 4oak lul'}`); process.exit();
        break;
        case '5oak\n':
        case '5 of a kind\n':
        case '5ofakind\n':
        case 'fiveofakind\n':
        case 'five of a kind\n':
        case 'yz\n': case 'y\n': case 'yathzee\n': case 'yacht\n': case 'yath\n':
          console.log(`< zamnnnnnnn, you scored the yummy ${isYath ? '50' : '0'} points ZAMNNNNN`); process.exit();
        break;
        case 'wollolllo\n': console.log('< Narwinia.'); rerolls = +Infinity; break;
        default: console.log('< Waht¿¿'); break;
      }
    break;
    case (input.startsWith('reroll ')):
      rerolle(input.slice(7)); // example input: "reroll 10010", any missing digits are 
    break;
    default: console.log('< Waht??!¿'); break;
  }
});