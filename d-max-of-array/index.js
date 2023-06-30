const biggestNumOfArray = (array) => {
  if(Array.isArray(array)){
    let biggest = -Infinity;
    for(i=0;i<array.length;i++) {
      if(array[i] > biggest) {
          biggest = array[i];
      }
    }
    return typeof(biggest) === 'number' ? biggest : NaN;
  } else { return NaN; }
}

let myArray = [2, -3, -2.3, 372, 5938, 7, -1, 3.245987645, 9, 0];
let myNewArray = [undefined, 8, 74, 'Hello World!', undefined, -22, true, 269.64, NaN, 92];
let myBruhArray = [undefined, 'Hello World!', undefined, true, NaN];
let myObject = {
  string: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi ab iusto architecto, harum iste sint facere, placeat sed quia ea.',
  alive: false,
  nice: 69
};
let myBoolean = false;
let myString = 'Hello World!'
let haha = 69;

console.log(biggestNumOfArray(myArray)); // 5938
console.log(biggestNumOfArray(myNewArray)); // 269.64
console.log(biggestNumOfArray(myBruhArray)); // NaN
console.log(biggestNumOfArray(myObject)); // NaN
console.log(biggestNumOfArray(myBoolean)); // NaN
console.log(biggestNumOfArray(myString)); // NaN
console.log(biggestNumOfArray(haha)); // NaN
console.log(biggestNumOfArray(NaN)); // NaN
console.log(biggestNumOfArray(undefined)); // NaN
console.log(biggestNumOfArray()); // NaN
// meanwhile Math.max(...myArray):