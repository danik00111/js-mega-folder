let wordsInArray = (str, multiplier) => {
  if(typeof str !== "string") { return; }
  if(multiplier === undefined) { multiplier = 1 };
  let myArray = str.split(' ');
  for(let i=0;i<myArray.length;i++) {
    if (!(/[a-z A-Z 0-9]/.test(myArray[i]))) {
      myArray.splice(i,1);
    }
  }
  return myArray.length * multiplier;
}

console.log(`wordsInArray('Hello r!'): ${wordsInArray('Hello r!')}`);
console.log(`wordsInArray('Double  space . lol', 5): ${wordsInArray('Double  space . lol', 5)}`);

let splitFilter = (str) => {
  if (typeof str !== "string") { return; }
  let myArray = str.split(' ');
  for (let i = 0; i < myArray.length; i++) {
    if (!(/[a-z A-Z 0-9]/.test(myArray[i]))) {
      myArray.splice(i, 1);
    }
  }
  return myArray;
}

let stringLongestWord = (input) => {
  let myArray;
  if (typeof input === "string") {myArray = splitFilter(input); }
  if (Array.isArray(input)) {myArray = input;}
  if(myArray === undefined) { return; }
  let longestWord = '';
  for (let i = 0; i < myArray.length; i++) { // loop though all elems in array
    if (
      typeof myArray[i] === "string" && // if string
      myArray[i].length > longestWord.length) // and longer than current longest
      {
        longestWord = myArray[i]; // new current longest
    }
  }
  return longestWord;
}

console.log(stringLongestWord('Hello World! Today, I want to talk about pneumonoultramicroscopicsilicovolcanoconiosis.')); // pneu-iosis
console.log(stringLongestWord(['Ajax', 58, null, undefined, NaN, 'Mango'])); // Mango

let stringMaxLength = (str, maxLength) => {
  if (typeof str !== "string") { return; }
  if(str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength)}...`;
}

console.log(stringMaxLength('123456', 5)); // 12345...

let checkForWords = (str, arr) => {
  if(typeof str !== "string" || ( !(Array.isArray(arr)) && arr !== undefined )) { return; };
  // check for invalid input ^
  if(arr === undefined) { arr = ['buy', 'sale', 'cost', 'refund', 'money back'] }; // default
  for(let i=0;i<arr.length;i++) { // loop thru array
    if(typeof arr[i] === "string") { // we only care about strings
      if(str.toLowerCase().includes(arr[i])) {
        return true;
      }
    }
  }
  return false;
}
console.log(checkForWords('Hello! I have a special deal for you! Sale for iPhone 12! A whopping 50% off! Money back guarantee! https://notascam.sus')) // true