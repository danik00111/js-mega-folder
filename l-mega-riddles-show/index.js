// let ourArray = ['Daniil Kremenskyi', 'Dasha Rudenko', 'Artem Gladchuk', 'Kostya Barinets\''];
// const convertArrayToNewlinedString = (array) => {
//   return array.join('\n');
// }
// console.log(convertArrayToNewlinedString(ourArray));

// const toLowerCaseAndDefis = (string) => {
//   let array = string.split(' ');
//   return array.join('-').toLowerCase();
// }
// let ourString = 'This sting will be converted to have a line between each word instead of a space, AND ALSO LOWERCASED.';
// console.log(toLowerCaseAndDefis(ourString));

// const minOfArray = (array) => {
//   if(!Array.isArray(array)) { return; };
//   let smallest = Infinity;
//   for(let i=0; i < array.length; i++) {
//     if(array[i] < smallest) {
//       smallest = array[i];
//     }
//   }
//   return typeof smallest === "number" ? smallest : NaN;
// }

const antiCase = (string) => {
  let newString = '';
  for(let i=0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      newString += string.charAt(i).toLowerCase();
    } else {
      newString += string.charAt(i).toUpperCase();
    }
  }
  return newString;
}

console.log(antiCase('Hello World!'))