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

const isOdd = function (x) {
  return x % 2;
}
// im bored

const maxOfArray = (array) => {
  if (!Array.isArray(array)) return; // check for it being an array in the first place, return undef if not
    let biggest = -Infinity; // initiating the former biggest value as something that can't beat anything
    for (i = 0; i < array.length; i++) { // loop through all elements in the array
      if (array[i] > biggest) { /* check for the current element being the former biggest element,
      at the same time checking if its a number in the first place */
        biggest = array[i]; // set the former biggest to the current if it is
      }
    }
    return typeof (biggest) === 'number' ? biggest : NaN;
    /* return the biggest after iterating through all elements, or NaN if no good result */
}
// from d-max-of-array

function randInt(min, max) {
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
      if (r[i] === newR[j]) { // compare current elem of r with current elem of newR
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

export {
  CelcuisToFahrenheit,
  FahrenheitToCelcuis,
  isOdd,
  maxOfArray,
  randInt,
  forJoin,
  arrayRemoveDupes
};

// export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"; [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"