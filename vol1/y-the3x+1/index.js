console.log(`
  Input an integer. If it's even, it's halved.
  If it's odd, it's multiplied by 3 and bumped by 1.
  Over and over, inevitably getting stuck in a 4-2-1 loop.
`)
process.stdin.on("data", h => {
  let num = +h;
  let biggest = num;
  if(isNaN(num)) { console.log('NaN!'); process.exit(1); }
  while(num>1) {
    if(num !== Math.floor(num)) {
      console.log(`invalid input`);
      process.exit(1);
    }
    if(num%2) num = (3*num)+1; else num /= 2;
    biggest = Math.max(num,biggest);
    console.log(num);
  }
  console.log(`The sequence peaked at ${biggest}... and inevitabely fell down to 1.`);
  process.exit(0);
});