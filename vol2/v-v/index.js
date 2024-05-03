const printNumbers = (from = 0, to = 5) => {
  let printNumbers_count = from;
  const printNumbers_i = setInterval(() => {
    console.log(printNumbers_count);
    printNumbers_count++;
    if(printNumbers_count > 5) {
      clearInterval(printNumbers_i);
      return;
    }
  }, 1e3);
}
/* const printNumbers = (from = 0, to = 5) => {
  let printNumbers_count = from;

  const printNumbers_f = () => {
    console.log(printNumbers_count);
    printNumbers_count++;
    if(printNumbers_count > 5) {
      return 1;
    } else {
      setTimeout(printNumbers_f,0.5e3);
    }
  };

  let printNumbers_i = setTimeout(()=>{
    if(printNumbers_f()) return;
  }, 0.5e3);
} */


printNumbers()