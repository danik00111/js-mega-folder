import { InsideOutify } from '../../snippets/index.js';

let myArrOfObj = [
  { name: 'Poly', age: 12, hobby: "reading" },
  { name: 'Ajax', age: 13, hobby: "programming" },
  { name: 'Mango', age: 15, hobby: "speedcubing" },
  { name: 'Kiwi', age: 13, hobby: "skydiving" },
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