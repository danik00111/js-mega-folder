import { decimalToRoman, romanToDecimal} from "../0-snippets/index.js";
console.log(`
  Input: 2 roman numerals, that are separated by a + (WITHCOUT SPACES) and are both less than 2000.
  Output: the sum of the two roman numerals... as a roman numeral.
`)
process.stdin.on("data", data => {
  let inp = String(data);
  if(inp === '.exit\n' || inp === '.exit') process.exit();
  if(inp.endsWith('\n')) inp = inp.slice(0, -1);
  console.log(decimalToRoman( romanToDecimal(inp.split('+')[0]) + romanToDecimal(inp.split('+')[1]) ));
});