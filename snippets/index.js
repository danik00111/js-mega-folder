export const CelcuisToFahrenheit = (c, b) => {
  let f = (1.8 * c) + 32; // define the fahrenheit
  if (b) {
    console.log(f); // console.log it if the boolean is true
  }
  return f; // return the fahrenheit
}
export const FahrenheitToCelcuis = (f, b) => {
  let c = (f - 32) / 1.8; // define the celcius
  if (b) {
    console.log(c); // console.log it if the boolean is true
  }
  return c; // return the celcius
}
// from 3-fahren

export const isOdd = (x) => x % 2;

export const maxOfArray = (array) => {
  if (!Array.isArray(array)) return; // check for it being an array in the first place, return undef if not
    let biggest = -Infinity; // initiating the former biggest value as something that can't beat anything
    for (let i = 0; i < array.length; i++) { // loop through all elements in the array
      if (array[i] > biggest) { /* check for the current element being the former biggest element,
      at the same time checking if its a number in the first place */
        biggest = array[i]; // set the former biggest to the current if it is
      }
    }
    return typeof (biggest) >= 'number' ? biggest : NaN;
    /* return the biggest after iterating through all elements, or NaN if no good result */
}
// from d-max-array

export const randInt = (min, max) => {
  min = Math.ceil(min); // we only focus on integers,
  max = Math.floor(max); // so round to integers, lower bound up, and upper bound down
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //----------------^^^^^^^^^^^^^ random number from 0 to 0.999999999999999999999999...
  //------------------------------^^^^^^^^^^^^^^^^^^ multiply by the range between max and min, increasing the range of the randomness
  //-------------------------------------------------^^^^^ raise the lower and upper bound by the same amount to match the min and max
}
// from 9-dz

export const forJoin = (r) => {
  if (!Array.isArray(r)) return;
  let string = r[0];
  for (let i = 1; i < r.length; i++) {
    string = `${string}, ${r[i]}`;
  }
  return string;
} // just use .join(', ')

export const arrayRemoveDupes = (r) => {
  if (!Array.isArray(r)) return;
  let newR = [];
  for (let i=0; i<r.length; i++) if (!newR.includes(r[i])) newR.push(r[i])
  // for each element, if hash table doesn't include the element, add it
  return newR; // return the result
}; // just use .filter((x, i) => arr1.indexOf(x) === i);

export const ANTIcASE = (s) => {
  if (typeof s !== 'string') { return };
  let newS = '';
  for (let i = 0; i < s.length; i++) {
    newS += (/^[A-Z]*$/.test(s.charAt(i))) ? s.charAt(i).toLowerCase() : s.charAt(i).toUpperCase();
  } //       ^^^^^^^^^^^^^^^^ regex🤯 https://stackoverflow.com/a/40796345/
  return newS;
}

export const decimalToRoman = (num) => {
  if(num >= 4000) return '>=4K!';
  let output = '';
  switch (true) {
    case num >= 3000: output += 'MMM'; break;
    case num >= 2000: output += 'MM'; break;
    case num >= 1000: output += 'M'; break;
  }
  switch (true) {
    case (num % 1000) >= 900: output += 'CM'; break;
    case (num % 1000) >= 800: output += 'DCCC'; break;
    case (num % 1000) >= 700: output += 'DCC'; break;
    case (num % 1000) >= 600: output += 'DC'; break;
    case (num % 1000) >= 500: output += 'D'; break;
    case (num % 1000) >= 400: output += 'CD'; break;
    case (num % 1000) >= 300: output += 'CCC'; break;
    case (num % 1000) >= 200: output += 'CC'; break;
    case (num % 1000) >= 100: output += 'C'; break;
  }
  switch (true) {
    case (num % 100) >= 90: output += 'XC'; break;
    case (num % 100) >= 80: output += 'LXXX'; break;
    case (num % 100) >= 70: output += 'LXX'; break;
    case (num % 100) >= 60: output += 'LX'; break;
    case (num % 100) >= 50: output += 'L'; break;
    case (num % 100) >= 40: output += 'XL'; break;
    case (num % 100) >= 30: output += 'XXX'; break;
    case (num % 100) >= 20: output += 'XX'; break;
    case (num % 100) >= 10: output += 'X'; break;
  }
  switch (true) {
    case (num % 10) >= 9: output += 'IX'; break;
    case (num % 10) >= 8: output += 'VIII'; break;
    case (num % 10) >= 7: output += 'VII'; break;
    case (num % 10) >= 6: output += 'VI'; break;
    case (num % 10) >= 5: output += 'V'; break;
    case (num % 10) >= 4: output += 'IV'; break;
    case (num % 10) >= 3: output += 'III'; break;
    case (num % 10) >= 2: output += 'II'; break;
    case (num % 10) >= 1: output += 'I'; break;
  }
  return output;
}

export const decToRomV2 = (num) => {
  if(num >= 4000) return '>=4K!';
  if(num <= 0) return '#NEG!';
  const lookup = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM']
  ];
  const ones = Math.floor(num % 10);
  const tens = Math.floor((num % 100 - ones) / 10);
  const huns = Math.floor((num % 1000 - tens) / 100);
  return lookup[3][Math.floor((num - huns) / 1000)] + lookup[2][huns] + lookup[1][tens] + lookup[0][ones];
};

export const romanToDecimal = (r) => {
  if(r.startsWith('MMMM')) return '>=4K!';
  let rom = r;
  let output = 0;
  switch(true) {
    case rom.startsWith('MMM'): output += 3000; rom = rom.slice(3); break;
    case  rom.startsWith('MM'): output += 2000; rom = rom.slice(2); break;
    case   rom.startsWith('M'): output += 1000; rom = rom.slice(1); break;
  }
  switch(true) {
    case   rom.startsWith('CM'): output += 900; rom = rom.slice(2); break;
    case rom.startsWith('DCCC'): output += 800; rom = rom.slice(4); break;
    case  rom.startsWith('DCC'): output += 700; rom = rom.slice(3); break;
    case   rom.startsWith('DC'): output += 600; rom = rom.slice(2); break;
    case    rom.startsWith('D'): output += 500; rom = rom.slice(1); break;
    case   rom.startsWith('CD'): output += 400; rom = rom.slice(2); break;
    case  rom.startsWith('CCC'): output += 300; rom = rom.slice(3); break;
    case   rom.startsWith('CC'): output += 200; rom = rom.slice(2); break;
    case    rom.startsWith('C'): output += 100; rom = rom.slice(1); break;
  }
  switch(true) {
    case   rom.startsWith('XC'): output += 90; rom = rom.slice(2); break;
    case rom.startsWith('LXXX'): output += 80; rom = rom.slice(4); break;
    case  rom.startsWith('LXX'): output += 70; rom = rom.slice(3); break;
    case   rom.startsWith('LX'): output += 60; rom = rom.slice(2); break;
    case    rom.startsWith('L'): output += 50; rom = rom.slice(1); break;
    case   rom.startsWith('XL'): output += 40; rom = rom.slice(2); break;
    case  rom.startsWith('XXX'): output += 30; rom = rom.slice(3); break;
    case   rom.startsWith('XX'): output += 20; rom = rom.slice(2); break;
    case    rom.startsWith('X'): output += 10; rom = rom.slice(1); break;
  }
  switch(true) {
    case   rom.startsWith('IX'): output += 9; rom = rom.slice(2); break;
    case rom.startsWith('VIII'): output += 8; rom = rom.slice(4); break;
    case  rom.startsWith('VII'): output += 7; rom = rom.slice(3); break;
    case   rom.startsWith('VI'): output += 6; rom = rom.slice(2); break;
    case    rom.startsWith('V'): output += 5; rom = rom.slice(1); break;
    case   rom.startsWith('IV'): output += 4; rom = rom.slice(2); break;
    case  rom.startsWith('III'): output += 3; rom = rom.slice(3); break;
    case   rom.startsWith('II'): output += 2; rom = rom.slice(2); break;
    case    rom.startsWith('I'): output += 1; rom = rom.slice(1); break;
  }
  return output;
}

export const noDupesAndSort = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined; // check for unexpected input
  const filtarr1 = arr1.filter((x, i) => arr1.indexOf(x) === i); // filter arr1 for dupes
  const filtarr2 = arr2.filter((x, i) => arr2.indexOf(x) === i); // filter arr2 for dupes
  const filtarr3 = filtarr2.filter(x => !filtarr1.includes(x)); // also filter arr2 to not include anything from arr1
  const noDupes = filtarr1.concat(filtarr3).sort((a, b) => a - b); // concat & sort
  if (noDupes.every(x => typeof x === 'number')) return noDupes.sort((a, b) => a - b);
  // sort and return, except if there's strings...
  const strs = noDupes.filter((x) => typeof x === 'string').sort(); // only strings & sort
  const nums = noDupes.filter((x) => typeof x === 'number').sort((a, b) => a - b); // only numbers & sort
  return nums.concat(strs); // concat & return
};

export const InsideOutify = (arr) => {
  let result = {};
  let currentKey;
  let currentValue;
  for (let i = 0; i < Object.keys(arr[0]).length; i++) {
    currentKey = Object.keys(arr[0])[i];
    currentValue = arr.map(obj => obj[currentKey]);
    result[currentKey] = currentValue;
  }
  return result;
}

export const rootGet = (x) => getComputedStyle(document.querySelector(':root')).getPropertyValue('--' + x);
export const rootSet = (x, y) => { document.querySelector(':root').style.setProperty('--' + x, y) };

export const t = {
  r: "\x1b[0m", // reset
  x: {
    b: "\x1b[1m", // bright
    d: "\x1b[2m", // dim
    u: "\x1b[4m", // underscore
    l: "\x1b[5m", // blink
    i: "\x1b[7m", // invert bg and fg
    h: "\x1b[8m", // hidden
  }, f: {
    k: "\x1b[30m", // black
    r: "\x1b[31m", // red
    g: "\x1b[32m", // green
    y: "\x1b[33m", // yellow
    b: "\x1b[34m", // blue
    m: "\x1b[35m", // magenta
    c: "\x1b[36m", // cyan
    w: "\x1b[37m", // white
    s: "\x1b[90m", // gray
  }, b: {
    k: "\x1b[40m", // black
    r: "\x1b[41m", // red
    g: "\x1b[42m", // green
    y: "\x1b[43m", // yellow
    b: "\x1b[44m", // blue
    m: "\x1b[45m", // magenta
    c: "\x1b[46m", // cyan
    w: "\x1b[47m", // white
    s: "\x1b[100m", //gray
  },
} // https://stackoverflow.com/a/41407246