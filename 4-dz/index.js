console.log('parseInt(\'64.7\')', parseInt('64.7'));
console.log('parseInt(\'25,1\')', parseInt('25,1'));
console.log('parseInt(\'45,7v29c6\')', parseInt('45,7v29c6'));
console.log('parseInt(\'h67.7\')', parseInt('h67.7'));
// parseInt - scans the string, symbol by symbol,
// halting and outputing the scanned part,
// when the next symbol isn't a sign (+/-) or a number (0-9).
console.log('parseFloat(\'64.7\')', parseFloat('64.7'));
console.log('parseFloat(\'25,1\')', parseFloat('25,1'));
console.log('parseFloat(\'45,7v29c6\')', parseFloat('45,7v29c6'));
console.log('parseFloat(\'h67.7\')', parseFloat('h67.7'));
// parseFloat - basically parseInt, but also accepts the period.
console.log('Math.floor(6.3)', Math.floor(6.3));
console.log('Math.floor(6.7)', Math.floor(6.7));
console.log('Math.round(6.3)', Math.round(6.3));
console.log('Math.round(6.7)', Math.round(6.7));
console.log('Math.ceil(6.3)', Math.ceil(6.3));
console.log('Math.ceil(6.7)', Math.ceil(6.7));
// round - rounds the number to an integer,
// either up or down, whichever is the closest.
// ceil - always rounds up.
// floor -  always rounds down.
console.log('Math.sign(-5)', Math.sign(-5));
console.log('Math.sign(0)', Math.sign(0));
console.log('Math.sign(8)', Math.sign(8));
// sign - outputs 1 for positive numbers, -1 for negative ones, and 0 for 0.
console.log('Math.ceil(10 * (Math.random()))', Math.ceil(10 * (Math.random())));
// Math.random was used to generate a number 1 to 10.
console.log('Math.pow(3,7)', Math.pow(3, 7));
// exponetn
console.log('Math.max(9, 27, 4, 7, 24, 5, 14)', Math.max(9, 27, 4, 7, 24, 5, 14));
console.log('Math.min(9, 27, 4, 7, 24, 5, 14)', Math.min(9, 27, 4, 7, 24, 5, 14));
// Math.max/Math.min - returns the biggest / smallest number in the array.