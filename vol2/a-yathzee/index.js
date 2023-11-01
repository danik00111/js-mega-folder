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
  if(parseInt(str) != str) { console.log('< uhmhmh watthrt'); return; }
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
const isShSt = () => {
  let the = [...diceCup].sort((a,b)=>a-b);
  let count = 1;
  let found = false;
  the.forEach((die, i) => {
    if (die === the[i - 1] + 1) {
      count++;
      if (count === 4) { found = true; }
    } else if (die !== the[i - 1]) { count = 1; }
  });
  return found;
}
const isLgSt = () => {
  let the = [...diceCup].sort((a,b)=>a-b);
  let count = 1;
  let found = false;
  the.forEach((die, i) => {
    if (die === the[i - 1] + 1) {
      count++;
      if (count === 4) { found = true; }
    } else if (die !== the[i - 1]) { count = 1; }
  });
  return found;
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
          console.log(`< 3oak, you score ${(isTOAK()) ? cupSum() : '0 bro fr thought his dice be 3oak lul💀'}`); process.exit();
        break;
        case 'foak\n':
        case '4oak\n':
        case '4 of a kind\n':
        case '4ofakind\n':
        case 'fourofakind\n':
        case 'four of a kind\n':
          console.log(`< 4oak, you score ${(isFOAK()) ? cupSum() : '0 bro fr thought his dice be 4oak lul💀'}`); process.exit();
        break;
        case '5oak\n':
        case '5 of a kind\n':
        case '5ofakind\n':
        case 'fiveofakind\n':
        case 'five of a kind\n':
          case 'yz\n': case 'y\n': case 'yathzee\n': case 'yacht\n': case 'yath\n':
            console.log(`< zamnnnnnnn, you scored the yummy ${isYath() ? '50' : '0'} points ZAMNNNNN${isYath() ? '' : '💀💀💀'}`); process.exit();
          break;
          case 'fh\n': case 'fullhouse\n': case 'full house\n': case 'house\n':
          console.log(`< fh, you score ${isFH() ? '25' : '0'} points${isFH() ? '' : ' bro fr thought he be having fh lul 💀💀'}`); process.exit();
          break;
        case 'straight\n': case 'st\n': case 'str\n': case 'strt\n':
          if(isLgSt()) { console.log(`< 40pts for the large straight`); process.exit(); }
          else if(isShSt()) { console.log(`< 30pts for the small straight`); process.exit(); }
          else { console.log(`< idk what straight you meant but 0 points any way`); process.exit(); }
        break;
        case 'small straight\n': case 'short straight\n':
        case 'smallstraight\n': case 'shortstraight\n':
        case 'smst\n': case 'smstr\n': case 'smstrt\n':
        case 'shst\n': case 'shstr\n': case 'shstrt\n':
        case 'ss\n':
          console.log(`< small straight, you score ${isShSt() ? '30 pts' : '0 pts brughhhhhh:skyll:💀'}`);
          break;
        case 'large straight\n': case 'long straight\n':
        case 'largestraight\n': case 'longstraight\n':
        case 'lgst\n': case 'lgstr\n': case 'lgstrt\n':
        case 'lgst\n': case 'lgstr\n': case 'lgstrt\n':
        case 'ls\n':
          console.log(`< large straight, you score ${isLgSt() ? '40 pts' : '0 pts brughhhhhh:skyll:💀💀'}`);
        break;
        default: console.log('< Waht¿¿'); break;
      }
      break;
    case (input.startsWith('reroll ')):
      rerolle(input.slice(7)); // example input: "reroll 10010", any missing digits are 
    break;
    case input === 'wollolllo\n': console.log('< Narwinia.'); rerolls = +Infinity; break; // temporary + dev-only
    default: console.log('< Waht??!¿'); break;
  }
});