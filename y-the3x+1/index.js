console.log(`
  Input an integer. If it's even, it's halved.
  If it's odd, it's multiplied by 3 and bumped by 1.
  Over and over, inevitably getting stuck in a 4-2-1 loop.
`)
process.stdin.on("data", h => {
  let num = +h;
  if(isNaN(num)) { console.log('NaN!'); process.exit(1); }
  while(num>1) {
    if(num !== Math.floor(num)) {
      console.log(`invalid input`);
      process.exit(1);
    }
    if(num%2) num = (3*num)+1; else num /= 2;
    console.log(num);
  }
  console.log(4);
  console.log(2);
  console.log(1);
  console.log("I wonder if there's a number that never falls down to 1. We'll never know.");
  process.exit(0);
});