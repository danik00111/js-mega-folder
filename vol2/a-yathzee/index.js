// import { randInt } from '../../snippets/index.js';
const randInt = (min, max) => (Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min));
let diceCup;
let rerolls;
let afdf;
let bonusYaths = 0;
console.log('If you don\'t know anything about Yathzee,\nI highly recommend googling the rules and/or playing a couple of online games.\nTo get started, type [help] in the terminal (without the brackets).')
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
    if(str.charAt(i) === '1') {
      diceCup[i] = randInt(1,6);
    }
  })
  rerolls--;
  console.log('< rerolled:', diceCup);
  if (scores[11] === 50 && isYath()) { console.log(`< OMGE BONUS YATHZEE 😱hOWWW🆘💀 you get a whopping 100 POINTS BONUS 😱😱😱🤪`); bonusYath(); return; }
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
      if (count === 5) { found = true; }
    } else if (die !== the[i - 1]) { count = 1; }
  });
  return found;
}
const cupSum = () => diceCup.reduce((partialSum, a) => partialSum + a, 0);
roll();
let scores = [
  null, null, null, null, null, null, null, null, null, null, null, null, null,
// 1s,   2s,   3s,   4s,   5s,   6s,   3k,   4k,   fh,   ss,   ls,   yz,   ch
];
const totalT = () => {
  let t = 0;
  for(let i = 0; i < 6; i++) t += scores[i];
  return t;
}
const totalB = () => {
  let t = 0;
  for(let i = 6; i < 13; i++) t += scores[i];
  return t;
}
const bonusYath = () => {
  bonusYaths++;
  let dize = diceCup[0];
  if(scores[dize-1] === null) {
    console.log(`< You will have to play that in ${dize}s for ${5 * (dize+1)} pts.`)
    newTurn(dize-1); return;
  }
  console.log(`< Play this as a joker anywhere in the bottom sect!`)
}
const newTurn = (x) => {
  if(scores[x] !== null) { console.log('< you already scored there'); return; }
  if(scores[11] === 50 && isYath()) {
    switch(x) {
      case 0: case 1: case 2: case 3: case 4: case 5:
        if([...scores].splice(6).includes(null)) {
          console.log('< why'); return;
        } else {
          scores[x] = 5 * (x+1);
        };
      return;
      case 6:
        scores[x] = cupSum();
        console.log(`< 3oak, you score ${cupSum()}`);
      break;
      case 7:
        scores[x] = cupSum();
        console.log(`< 4oak, you score ${cupSum()}`);
      break;
      case 8:
        scores[x] = 25;
        console.log(`< fh, you score 25 points`);
        break;
      case 9:
        scores[x] = 30;
        console.log(`< small straight, you score 30 pts}`);
      break;
      case 10:
        scores[x] = 40;
        console.log(`< small straight, you score 40 pts}`);
      break;
      case 11:
        console.log('< wait wh- HOWWWWWWWWWWWWW');
        process.exit(69);
      break;
      case 12:
        scores[x] = cupSum();
        console.log(`< chance, you got ${cupSum()} points`);
      break;
      default: console.log('< uhmmhmhgh hugh'); return;
    }
    return;
  }
  switch(x) {
    case 0: case 1: case 2: case 3: case 4: case 5:
      console.log(`< ${x+1}s, you score ${([...diceCup].filter(h=>h==(x+1)).length) * (x+1)} points`);
      scores[x] = ([...diceCup].filter(h=>h==(x+1)).length) * (x+1);
    break; case 6:
      console.log(`< 3oak, you score ${(isTOAK()) ? cupSum() : '0 bro fr thought his dice be 3oak lul'}`);
      scores[x] = isTOAK() ? cupSum() : 0;
    break; case 7:
      console.log(`< 4oak, you score ${(isTOAK()) ? cupSum() : '0 bro fr thought his dice be 4oak lul'}`);
      scores[x] = isFOAK() ? cupSum() : 0;
    break; case 8:
      console.log(`< fh, you score ${isFH() ? '25 points' : '0 points bro fr thought he be having fh lul 💀'}`);
      scores[x] = isFH() ? 25 : 0;
    break; case 9:
      console.log(`< small straight, you score ${isShSt() ? '30 pts' : '0 pts brughhhhhh💀💀'}`);
      scores[x] = isShSt() ? 30 : 0;
      break; case 10:
      console.log(`< large straight, you score ${isLgSt() ? '40 pts' : '0 pts brughhhhhh💀💀💀'}`);
      scores[x] = isLgSt() ? 40 : 0;
    break; case 11:
      console.log(`< zamnnnnnnn, you scored the yummy ${isYath() ? '50' : '0'} points ZAMNNNNN${isYath() ? '' : '💀💀💀💀'}`);
      scores[x] = isYath() ? 50 : 0;
    break; case 12:
      console.log(`< chance, you got ${cupSum()} points`);
      scores[x] = cupSum();
    break; default: console.log('< hugh,'); process.exit(420); break;
  }
  if(!(scores.includes(null))) {
    console.log(`\n< Well, the game ends here.\n< Here's how you did:\n`);
    theScores();
    process.exit();
  };
  roll();
}
const theScores = () => { console.log(`< 1s-6s: ${[...scores].splice(0,6).join(', ')},\n< 3oak: ${scores[6]}, 4oak: ${scores[7]}, fullhouse: ${scores[8]},\n< straights: ${scores[9]}, ${scores[10]}, yath: ${scores[11]}, chance: ${scores[12]},\n< totals: ${totalT()} + ${totalB()} ${(totalT() >= 63) ? '(+35 bonus) ' : ''}${(bonusYaths === 0) ? '' : `(+${bonusYaths * 100} bounus) `}= ${totalT() + totalB() + ((totalT() >= 63) ? 35 : 0) + ((bonusYaths === 0) ? 0 : bonusYaths * 100)}`); }
process.stdin.on("data", r => {
  let input = String(r).toLowerCase();
  switch(true) {
    case (input === 'exit\n'):
      console.log(`\n< Here's how you did:\n`);
      theScores();
      process.exit();
    break;
    case (input === 'help\n'):
      console.log('< [help] - you are here!\n< [exit] - exit the node.js\n< [advhelp {cmd}] - help on a specific command\n< [score {cell}] - score your dice\n< [rr {5 bits}] - reroll your dice up to twice\n< [scores] - view the scores');
    break;
    case (input.startsWith('advhelp ')):
      switch(input.slice(8)) {
        case 'help\n': case 'exit\n': case 'scores\n': console.log('< actually dumb person detected 💀💀'); break;
        case 'advhelp\n': console.log('< good morning rise and shine 💀💀💀💀'); break;
        case 'score\n': console.log("< available ways to score:\n< 1s, 2s, ..., 6s - sum of the dice with this side up\n< 3ofakind, 4ofakind - 0 if you don't have 3 or 4 dice with the same number, sum of all dice if you do\n< yathzee - basically fiveofakind for 50 points\n< smallstraight, largestraight - if 4 or 5 dice in ascending order, then 30 / 40 pts, else 0\n< chance - sum of all dice, no matter what the dice are\n< see source code for some shortcuts (like y for yathzee, and h for fullhouse)"); break;
        case 'rr\n': console.log('< example usage: [rr 10011] to reroll the 1st, 4th, and 5th dice, [rr 101] to reroll the 1st and 4th die (all missing digits count as 0)'); break;
        default: console.log('< huh'); break;
      }
    break;
    case (input.startsWith('score ')):
      switch(input.slice(6)) {
        case 'ones\n':   case '1s\n': case '1\n': newTurn(0); break;
        case 'twos\n':   case '2s\n': case '2\n': newTurn(1); break;
        case 'threes\n': case '3s\n': case '3\n': newTurn(2); break;
        case 'fours\n':  case '4s\n': case '4\n': newTurn(3); break;
        case 'fives\n':  case '5s\n': case '5\n': newTurn(4); break;
        case 'sixes\n':  case '6s\n': case '6\n': newTurn(5); break;
        case 'toak\n': case '3oak\n': case '3k\n': case '3o\n': case '3 of a kind\n': case '3ofakind\n': case 'threeofakind\n': case 'three of a kind\n': case 't\n': newTurn(6); break;
        case 'foak\n': case '4oak\n': case '4k\n': case '4o\n': case '4 of a kind\n': case '4ofakind\n': case 'fourofakind\n': case 'four of a kind\n': case '\nf': newTurn(7); break;
        case 'fh\n': case 'fullhouse\n': case 'full house\n': case 'house\n': case 'h\n': newTurn(8); break;
        case 'small straight\n': case 'short straight\n': case 'smallstraight\n': case 'shortstraight\n': case 'smst\n': case 'smstr\n': case 'smstrt\n': case 'shst\n': case 'shstr\n': case 'shstrt\n': case 'ss\n': case 's\n': newTurn(9); break;
        case 'large straight\n': case 'long straight\n': case 'largestraight\n': case 'longstraight\n': case 'lgst\n': case 'lgstr\n': case 'lgstrt\n': case 'ls\n': case 'l\n': newTurn(10); break;
        case '5oak\n': case '5 of a kind\n': case '5k\n': case '5o\n': case '5ofakind\n': case 'fiveofakind\n': case 'five of a kind\n': case 'yz\n': case 'y\n': case 'yathzee\n': case 'yacht\n': case 'yath\n': newTurn(11); break;
        case 'chance\n': case 'ch\n': case 'sum\n': case 'c\n': newTurn(12); break;
        case 'straight\n': case 'st\n': case 'str\n': case 'strt\n': console.log('< what straight? [score smst] [score lgst]'); break;
        default: console.log('< Waht¿¿'); break;
      }
      break;
    case (input.startsWith('rr ')): rerolle(input.slice(3)); break; // example input: "reroll 10010", any missing digits are counted as 0
    case (input === 'scores\n'): theScores(); break;
    default: console.log('< Waht??!¿'); break;
  }
});