import { maxOfArray } from "../../snippets/index.js";

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

console.log(maxOfArray(myArray)); // 5938
console.log(maxOfArray(myNewArray)); // 269.64
console.log(maxOfArray(myBruhArray)); // NaN
console.log(maxOfArray(myObject)); // NaN
console.log(maxOfArray(myBoolean)); // NaN
console.log(maxOfArray(myString)); // NaN
console.log(maxOfArray(haha)); // NaN
console.log(maxOfArray(NaN)); // NaN
console.log(maxOfArray(undefined)); // NaN
console.log(maxOfArray()); // NaN
// just use Math.max(...myArray)