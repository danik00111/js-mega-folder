const maxOfArray = (array) => {
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
const allEvenOfArray = (array) => {
  if(Array.isArray(array)){
    let list = [];
    for(i=0;i<array.length;i++) {
      if(array[i] % 2 === 0) {
        list.push(array[i]);
      }
    }
    return list;
  } else { return NaN; }
}
const allLongOfArray = (array, length) => {
  if(Array.isArray(array) && typeof length === 'number'){
    let list = [];
    for(i=0;i<array.length;i++) {
      if(array[i].length >= 5) {
        list.push(array[i]);
      }
    }
    return list;
  } else { return NaN; }
}
/*
  ABOVE: FUNCTIONS
  BELOW: TESTING THEM
*/
array = [8, 2.6, -53, 73, 962, -63, 68, 293846, 90, 9257];
console.log(maxOfArray(array)); // 293846
console.log(allEvenOfArray(array)); // [8, 962, 68, 293846, 90], non-integers do not pass
array = [
  'bruh',
  'Lorem ipsum ipsum ipsum ipsum ipsum ipsum',
  'a',
  'whta ',
  'do not the the the',
  'running',
  'out',
  'of',
  'ideas',
  'a;lskdfj'
];
console.log(allLongOfArray(array, 5));
/*[
  'Lorem ipsum ipsum ipsum ipsum ipsum ipsum',
  'whta ',
  'do not the the the',
  'running',
  'ideas',
  'a;lskdfj'
  //    ^ this or longer to pass
]*/