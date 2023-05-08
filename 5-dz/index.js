const MY_EMAIL = 'kremenskiydaniil@gmail.com';
console.log(MY_EMAIL);
if (MY_EMAIL.includes('@')) {
  console.log('Email is valid.');
} else {
  console.log('Email is invalid.');
}
const NOT_AN_EMAIL = 'amOngUsAAAAA';
console.log(NOT_AN_EMAIL);
if (NOT_AN_EMAIL.includes('@')) {
  console.log('Email is valid.');
} else {
  console.log('Email is invalid.');
}
console.log(NOT_AN_EMAIL.toUpperCase());
console.log(NOT_AN_EMAIL.toLowerCase());
console.log(MY_EMAIL.toUpperCase());
console.log(MY_EMAIL.toLowerCase());
console.log(NOT_AN_EMAIL.indexOf('A', 8));
console.log(NOT_AN_EMAIL.indexOf('n'));
console.log(NOT_AN_EMAIL.indexOf('S'));
console.log(MY_EMAIL.length);
console.log(NOT_AN_EMAIL.length);
const LETTER = 'a';
console.log(LETTER.length);
const USER_NAME = 'Daniel';
const PRICE = 19.99;
console.log(`Thanks for using our e-shop, ${USER_NAME}. The price is $${PRICE}.`)