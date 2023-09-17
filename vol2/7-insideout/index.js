import { InsideOutify } from '../../snippets/index.js';

let myArrOfObj = [
  { name: 'Poly', age: 13, hobby: "reading" },
  { name: 'Ajax', age: 16, hobby: "programming" },
  { name: 'Mango', age: 14, hobby: "speedcubing" },
  { name: 'Kiwi', age: 15, hobby: "skydiving" },
];

console.log(InsideOutify(myArrOfObj));

/*

  $ node vol2/7-insideout
  {
    name: [ 'Poly', 'Ajax', 'Mango', 'Kiwi' ],
    age: [ 13, 16, 14, 15 ],
    hobby: [ 'reading', 'programming', 'speedcubing', 'skydiving' ]
  }
  $ 

*/