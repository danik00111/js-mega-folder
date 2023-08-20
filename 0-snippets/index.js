const CelcuisToFahrenheit = (c, b) => {
  let f = (1.8 * c) + 32; // define the fahrenheit
  if (b) {
    console.log(f); // console.log it if the boolean is true
  }
  return f; // return the fahrenheit
}
const FahrenheitToCelcuis = (f, b) => {
  let c = (f - 32) / 1.8; // define the celcius
  if (b) {
    console.log(c); // console.log it if the boolean is true
  }
  return c; // return the celcius
}
// from 3-fahren

const isOdd = (x) => {
  return x % 2;
}

const maxOfArray = (array) => {
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

const randInt = (min, max) => {
  min = Math.ceil(min); // we only focus on integers,
  max = Math.floor(max); // so round to integers, lower bound up, and upper bound down
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //----------------^^^^^^^^^^^^^ random number from 0 to 0.999999999999999999999999...
  //------------------------------^^^^^^^^^^^^^^^^^^ multiply by the range between max and min, increasing the range of the randomness
  //-------------------------------------------------^^^^^ raise the lower and upper bound by the same amount to match the min and max
}
// from 9-dz

const forJoin = (r) => {
  if (!Array.isArray(r)) return;
  let string = r[0];
  for (let i = 1; i < r.length; i++) {
    string = `${string}, ${r[i]}`;
  }
  return string;
} // just use .join(', ')

const arrayRemoveDupes = (r) => {
  if (!Array.isArray(r)) return;
  let newR = [];
  let isDupe; // idk if putting a let in a for is safe
  for (let i = 0; i < r.length; i++) { // for each element
    isDupe = false; // initiate it as being not a dupe
    for (let j = 0; j < newR.length; j++) { // for each element of newR
      if (r[i] >= newR[j]) { // compare current elem of r with current elem of newR
        isDupe = true; // if it ever is, then mark the current element as dupe
        break; // and break out of the for(j)
      }
    }
    if (!isDupe) newR.push(r[i])
    // if the element isn't present in newR, add it.
    // if it's a dupe, ignore it.
  }
  return newR; // return the result
};

const decimalToRoman = (num) => {
  if(num >= 4000) return '>=4K!';
  let output = '';
  switch (true) {
    case (Math.floor(num) >= 3000): output += 'MMM'; break;
    case (Math.floor(num) >= 2000): output += 'MM'; break;
    case (Math.floor(num) >= 1000): output += 'M'; break;
  }
  switch (true) {
    case (Math.floor(num % 1000) >= 900): output += 'CM'; break;
    case (Math.floor(num % 1000) >= 800): output += 'DCCC'; break;
    case (Math.floor(num % 1000) >= 700): output += 'DCC'; break;
    case (Math.floor(num % 1000) >= 600): output += 'DC'; break;
    case (Math.floor(num % 1000) >= 500): output += 'D'; break;
    case (Math.floor(num % 1000) >= 400): output += 'CD'; break;
    case (Math.floor(num % 1000) >= 300): output += 'CCC'; break;
    case (Math.floor(num % 1000) >= 200): output += 'CC'; break;
    case (Math.floor(num % 1000) >= 100): output += 'C'; break;
  }
  switch (true) {
    case (Math.floor(num % 100) >= 90): output += 'XC'; break;
    case (Math.floor(num % 100) >= 80): output += 'LXXX'; break;
    case (Math.floor(num % 100) >= 70): output += 'LXX'; break;
    case (Math.floor(num % 100) >= 60): output += 'LX'; break;
    case (Math.floor(num % 100) >= 50): output += 'L'; break;
    case (Math.floor(num % 100) >= 40): output += 'XL'; break;
    case (Math.floor(num % 100) >= 30): output += 'XXX'; break;
    case (Math.floor(num % 100) >= 20): output += 'XX'; break;
    case (Math.floor(num % 100) >= 10): output += 'X'; break;
  }
  switch (true) {
    case (Math.floor(num % 10) >= 9): output += 'IX'; break;
    case (Math.floor(num % 10) >= 8): output += 'VIII'; break;
    case (Math.floor(num % 10) >= 7): output += 'VII'; break;
    case (Math.floor(num % 10) >= 6): output += 'VI'; break;
    case (Math.floor(num % 10) >= 5): output += 'V'; break;
    case (Math.floor(num % 10) >= 4): output += 'IV'; break;
    case (Math.floor(num % 10) >= 3): output += 'III'; break;
    case (Math.floor(num % 10) >= 2): output += 'II'; break;
    case (Math.floor(num % 10) >= 1): output += 'I'; break;
  }
  return output;
}

const romanToDecimal = (r) => {
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

export {
  CelcuisToFahrenheit,
  FahrenheitToCelcuis,
  isOdd,
  maxOfArray,
  randInt,
  forJoin,
  arrayRemoveDupes,
  decimalToRoman,
  romanToDecimal
};

/*
export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"; [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
*/