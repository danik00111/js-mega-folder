let salaries = {
  Mango: 1300,
  Ajax: 900,
  Kiwi: 1500,
  Poly: 1000,
}

let totalSalary = (obj) => {
  let output = 0;
  for(let i=0;i<Object.keys(obj).length;i++) {
    output += Object.values(obj)[i];
  }
  return output;
}

console.log(totalSalary(salaries)); // 4700