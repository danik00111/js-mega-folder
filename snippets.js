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
  switch (true) {
    case (x % 2 === 1):
      return true;
    case (x % 2 === 0):
      return false;
    default:
      return NaN;
  }
}
// im bored

const maxOfArray = (array) => {
  if (Array.isArray(array)) { // check for it being an array in the first place
    let biggest = -Infinity; // initiating the former biggest value as something that can't beat anything
    for (i = 0; i < array.length; i++) { // loop through all elements in the array
      if (array[i] > biggest) { /* check for the current element being the former biggest element,
      at the same time checking if its a number in the first place */
        biggest = array[i];
      }
    } // set the former biggest to the current if it is
    return typeof (biggest) === 'number' ? biggest : NaN;
    /* return the biggest after iterating through all elements, or NaN if no good result */
  } else { return NaN; } // not an array
}
// from d-max-of-array

function randInt(min, max) {
  min = Math.ceil(min); // we only focus on integers,
  max = Math.floor(max); // so round to integers, lower bound up, and upper boung down
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //----------------^^^^^^^^^^^^^ random number from 0 to 0.999999999999999999999999...
  //------------------------------^^^^^^^^^^^^^^^^^^ multiply by the range between max and min, increasing the range of the randomness
  //-------------------------------------------------^^^^^ raise the lower and upper bound by the same amount to match the min and max
}
// from 9-dz

export {
  CelcuisToFahrenheit,
  FahrenheitToCelcuis,
  isOdd,
  maxOfArray,
  randInt
};