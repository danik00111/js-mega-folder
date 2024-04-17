import { maxOfArray } from "../../snippets/index.js";

let mainarray = [2, -3, -2.3, 372, 5938, 7, -1, 3.245987645, 9, 0];
let advarray = [undefined, 8, 74, 'Hello World!', undefined, -22, true, 269.64, NaN, 92];
let numberless = [undefined, 'Hello World!', {}, true, NaN];
let obj = {
  string: 'h',
  exists: false,
  nice: 69
};

console.log(maxOfArray(mainarray)); // 5938
console.log(maxOfArray(advarray)); // 269.64
console.log(maxOfArray(numberless)); // NaN
console.log(maxOfArray(obj)); // NaN
console.log(maxOfArray(false)); // NaN
console.log(maxOfArray('hwlo wrdol')); // NaN
console.log(maxOfArray(69)); // NaN
console.log(maxOfArray(NaN)); // NaN
console.log(maxOfArray(undefined)); // NaN
console.log(maxOfArray([-Infinity])); // -Infty
console.log(maxOfArray([Infinity])); // +Infty
console.log(maxOfArray()); // NaN
// just use Math.max(...myArray)