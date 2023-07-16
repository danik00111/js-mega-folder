const AverageComma = () => {
  let total = 0;
  let myLength = 0;
  for(let argument of arguments) {
    if(typeof argument === 'number') {
      total += argument;
      myLength++;
    }
  }
  return total / myLength;
}
const AverageArray = (r) => {
  if(!Array.isArray(r)) { return };
  let total = 0;
  let myLength = 0;
  for(let i=0; i<r.length; i++) {
    if(r[i] > -Infinity) { // check for number
      total += r[i];
      myLength++;
    }
  }
  return total / myLength;
}

console.log(AverageComma(4, -Infinity, 7, 2, false, 'Hello World!', 7, 8));
console.log(AverageArray([4, -Infinity, 7, 2, false, 'Hello World!', 7, 8]))