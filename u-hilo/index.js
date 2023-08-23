import { randInt } from "../0-snippets/index.js";
console.log(`Guess the number between 1 and 100 in 7 tries. Type "h" to give up.`)
let tries = 7;
let numder = randInt(1,100);
process.stdin.on("data", data => {
  if (String(data) === 'h\n' || String(data) === 'h') {
    console.log(`
  The number was ${numder}.
  skill issue
    `);
    process.exit(69);
  };
  let guess = +data;
  if(isNaN(guess) || guess < 1 || guess > 100) {
    console.log(`It seems like you have entered an invalid input. You still have ${tries} ${(tries === 1) ? 'try' : 'tries'} left.`)
  } else {
    tries--;
    if(guess === numder) {
      console.log(`Congrats! You got it with ${tries} ${(tries === 1) ? 'try' : 'tries'} left.`)
      process.exit(0);
    } else if(tries < 1) {
      console.log(`The number was ${numder}. skill issue`);
      process.exit(69);
    } else {
      console.log(numder < guess ? 'Lower!' : 'Higher!');
    }
  }
});