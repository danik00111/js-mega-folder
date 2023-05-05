let response = parseInt(prompt('Pick a number, 1 - 10, double it, then add 7, and write the result here.'));
// prompt == 2x + 7
// 2x == prompt - 7
// x == (prompt - 7) / 2
let answer = (response - 7) / 2;
alert(`I think you picked ${answer}.`);