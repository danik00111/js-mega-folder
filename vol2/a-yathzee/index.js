import { randInt } from '../../snippets/index.js';
let diceCup;
let rerolls;
console.log('Input: idek just type "help"')
const roll = () => {
  if(rerolls !== +Infinity) rerolls = 2;
  diceCup = [randInt(1,6),randInt(1,6),randInt(1,6),randInt(1,6),randInt(1,6)];
  console.log(diceCup);
}
const rerolle = (h) => {
  if(rerolls < 1) { console.log('< nuh uh'); return; }
  let str = h;
  if(parseInt(str) != str) { console.log('< uhmhmh watthrt'); return; }
  diceCup.forEach((die, i) => {
    if(str.charAt(i) === '1') {
      diceCup[i] = randInt(1,6);
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
let scoreboard = [
  null, null, null, null, null, null, null, null, null, null, null, null, null,
// 1s,   2s,   3s,   4s,   5s,   6s,   3k,   4k,   fh,   ss,   ls,   yz,   ch
];
const totalT = () => {
  let t = 0;
  for(let i = 0; i < 6; i++) t += scoreboard[i];
  return t;
}
const totalB = () => {
  let t = 0;
  for(let i = 6; i < 13; i++) t += scoreboard[i];
  return t;
}
const routine = (x) => {
  if(scoreboard[x] !== null) { console.log('< you already scored there'); return; }
  switch(x) {
    case 0:
      console.log(`ones, you score ${([...diceCup].filter(x=>x==1).length) * 1} points`);
      scoreboard[0] = ([...diceCup].filter(x=>x==1).length) * 1;
    break; case 1:
      console.log(`twos, you score ${([...diceCup].filter(x=>x==2).length) * 2} points`);
      scoreboard[1] = ([...diceCup].filter(x=>x==2).length) * 2;
    break; case 2:
      console.log(`threes, you score ${([...diceCup].filter(x=>x==3).length) * 3} points`);
      scoreboard[2] = ([...diceCup].filter(x=>x==3).length) * 3;
    break; case 3:
      console.log(`fours, you score ${([...diceCup].filter(x=>x==4).length) * 4} points`);
      scoreboard[3] = ([...diceCup].filter(x=>x==4).length) * 4;
    break; case 4:
      console.log(`fives, you score ${([...diceCup].filter(x=>x==5).length) * 5} points`);
      scoreboard[4] = ([...diceCup].filter(x=>x==5).length) * 5;
    break; case 5:
      console.log(`sixes, you score ${([...diceCup].filter(x=>x==6).length) * 6} points`);
      scoreboard[5] = ([...diceCup].filter(x=>x==6).length) * 6;
    break; case 6:
      console.log(`< 3oak, you score ${(isTOAK()) ? cupSum() : '0 bro fr thought his dice be 3oak lul💀'}`);
      scoreboard[6] = isTOAK() ? cupSum() : 0;
    break; case 7:
      console.log(`< 4oak, you score ${(isTOAK()) ? cupSum() : '0 bro fr thought his dice be 4oak lul💀'}`);
      scoreboard[7] = isFOAK() ? cupSum() : 0;
    break; case 8:
      console.log(`< fh, you score ${isFH() ? '25 points' : '0 points bro fr thought he be having fh lul 💀💀'}`);
      scoreboard[8] = isFH() ? 25 : 0;
    break; case 9:
      console.log(`< small straight, you score ${isShSt() ? '30 pts' : '0 pts brughhhhhh:skyll:💀'}`);
      scoreboard[9] = isShSt() ? 30 : 0;
      break; case 10:
      console.log(`< large straight, you score ${isLgSt() ? '40 pts' : '0 pts brughhhhhh:skyll:💀💀'}`);
      scoreboard[10] = isLgSt() ? 40 : 0;
    break; case 11:
      console.log(`< zamnnnnnnn, you scored the yummy ${isYath() ? '50' : '0'} points ZAMNNNNN${isYath() ? '' : '💀💀💀'}`);
      scoreboard[11] = isYath() ? 50 : 0;
    break; case 12:
      console.log(`< chance, you got ${cupSum()} points`);
      scoreboard[12] = cupSum();
    break; default: console.log('< hugh,'); process.exit(420); break;
  }
  if(!(scoreboard.includes(null))) {
    console.log(`\n< Well, the game ends here.\n< Here's how you did:\n\n< 1s-6s: ${scoreboard[0]}, ${scoreboard[1]}, ${scoreboard[2]}, ${scoreboard[3]}, ${scoreboard[4]}, ${scoreboard[5]},\n< 3oak: ${scoreboard[6]}, 4oak: ${scoreboard[7]}, fullhouse: ${scoreboard[8]},\n< straights: ${scoreboard[9]}, ${scoreboard[10]}, yath: ${scoreboard[11]}, chance: ${scoreboard[12]},\n< totals: ${totalT()} + ${totalB()}${(totalT() >= 63) ? ' (+35 bonus)' : ''} = ${totalT() + totalB() + ((totalT() >= 63) ? 35 : 0)}`);
    process.exit();
  };
  roll();
}
process.stdin.on("data", r => {
  let input = String(r).toLowerCase();
  switch(true) {
    case (input === 'exit\n'):process.exit();break;
    case (input === 'help\n'):
      console.log('< [help] - you are here!\n< [exit] - exit the node.js\n< [advhelp {cmd}] - help on a specific command\n< [score {cell}] - score your dice\n< [rr {5 bits}] - reroll your dice up to twice\n< ????? - set your rerolls to infty (for debug purposes only)\n< [scoreboard] - view the scoreboard');
    break;
    case (input.startsWith('advhelp ')):
      switch(input.slice(8)) {
        case 'help\n': case 'exit\n': case 'scoreboard\n': console.log('< actually dumb person detected 💀💀'); break;
        case 'advhelp\n': console.log('< good morning rise and shine 💀💀💀💀'); break;
        case 'score\n': console.log("< available ways to score:\n< 1s, 2s, ..., 6s - sum of the dice with this side up\n< 3ofakind, 4ofakind - 0 if you don't have 3 or 4 dice with the same number, sum of all dice if you do\n< yathzee - basically fiveofakind for 50 points\n< smallstraight, largestraight - if 4 or 5 dice in ascending order, then 30 / 40 pts, else 0\n< chance - sum of all dice, no matter what the dice are")
        case 'rr\n': console.log('< example usage: [rr 10011] to reroll the 1st, 4th, and 5th dice, [rr 101] to reroll the 1st and 4rd die (all missing digits count as 0)'); break;
        default: console.log('< huh'); break;
      }
    break;
    case (input.startsWith('score ')):
      switch(input.slice(6)) {
        case 'ones\n':   case '1s\n': case '1\n': routine(0); break;
        case 'twos\n':   case '2s\n': case '2\n': routine(1); break;
        case 'threes\n': case '3s\n': case '3\n': routine(2); break;
        case 'fours\n':  case '4s\n': case '4\n': routine(3); break;
        case 'fives\n':  case '5s\n': case '5\n': routine(4); break;
        case 'sixes\n':  case '6s\n': case '6\n': routine(5); break;
        case 'toak\n': case '3oak\n': case '3 of a kind\n': case '3ofakind\n': case 'threeofakind\n': case 'three of a kind\n': routine(6); break;
        case 'foak\n': case '4oak\n': case '4 of a kind\n': case '4ofakind\n': case 'fourofakind\n': case 'four of a kind\n': routine(7); break;
        case 'fh\n': case 'fullhouse\n': case 'full house\n': case 'house\n': routine(8); break;
        case 'small straight\n': case 'short straight\n': case 'smallstraight\n': case 'shortstraight\n': case 'smst\n': case 'smstr\n': case 'smstrt\n': case 'shst\n': case 'shstr\n': case 'shstrt\n': case 'ss\n': routine(9); break;
        case 'large straight\n': case 'long straight\n': case 'largestraight\n': case 'longstraight\n': case 'lgst\n': case 'lgstr\n': case 'lgstrt\n': case 'ls\n': routine(10); break;
        case '5oak\n': case '5 of a kind\n': case '5ofakind\n': case 'fiveofakind\n': case 'five of a kind\n': case 'yz\n': case 'y\n': case 'yathzee\n': case 'yacht\n': case 'yath\n': routine(11); break;
        case 'chance\n': case 'ch\n': case 'sum\n': case 'c\n': routine(12); break;
        case 'straight\n': case 'st\n': case 'str\n': case 'strt\n': console.log('< what straight? [score smst] [score lgst]'); break;
        default: console.log('< Waht¿¿'); break;
      }
      break;
    case (input.startsWith('rr ')): rerolle(input.slice(3)); break; // example input: "reroll 10010", any missing digits are counted as 0
    case input === 'wollolllo\n': console.log('< Narwinia.'); rerolls = +Infinity; break; // temporary + dev-only
    case (input === 'scoreboard\n'): console.log(`< 1s-6s: ${scoreboard[0]}, ${scoreboard[1]}, ${scoreboard[2]}, ${scoreboard[3]}, ${scoreboard[4]}, ${scoreboard[5]},\n< 3oak: ${scoreboard[6]}, 4oak: ${scoreboard[7]}, fullhouse: ${scoreboard[8]},\n< straights: ${scoreboard[9]}, ${scoreboard[10]}, yath: ${scoreboard[11]}, chance: ${scoreboard[12]},\n< totals: ${totalT()} + ${totalB()}${(totalT() >= 63) ? ' (+35 bonus)' : ''} = ${totalT() + totalB() + ((totalT() >= 63) ? 35 : 0)}`); break;
    default: console.log('< Waht??!¿'); break;
  }
});