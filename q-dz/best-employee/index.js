import { maxOfArray } from '../../0-snippets/index.js';
const findBestEmployee = (obj) => Object.keys(obj)[Object.values(obj).indexOf(maxOfArray(Object.values(obj)))];

let employees = {
  Mango: 7,
  Ajax: 6,
  Kiwi: 8,
  Poly: 5
}

console.log(findBestEmployee(employees)); // Kiwi