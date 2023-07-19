const antiCase = (s) => {
  if (typeof s !== 'string') { return };
  let newS = '';
  for (let i = 0; i < s.length; i++) {
    newS += (/^[A-Z]*$/.test(s.charAt(i))) ? s.charAt(i).toLowerCase() : s.charAt(i).toUpperCase();
  } //       ^^^^^^^^^^^^^^^^  regex🤯  ^ https://stackoverflow.com/a/40796345/
  return newS;
}
console.log(antiCase('qweRTY')); // QWErty
console.log(antiCase('mAnGo')); // MaNgO
console.log(antiCase('AjAx')); // aJaX


const isEven = (num) => {
  if(isNaN(num)){ // converts input to number, and also checks if it outputs nan
    return undefined} // basically `return;`, if input is not an integer
  return !(Math.floor(num) % 2) // round down and check for even with %2
}
console.log(isEven(8)); // true
console.log(isEven(5)); // false
console.log(isEven(-6)); // true
console.log(isEven(-3)); // false
console.log(isEven(6.2)); // true
console.log(isEven(3.2)); // false
console.log(isEven(6.8)); // true
console.log(isEven(3.8)); // false
console.log(isEven(-5.2)); // true
console.log(isEven(-2.2)); // false
console.log(isEven(-5.8)); // true
console.log(isEven(-2.8)); // false


const AverageOfArray = (r) => {
  if (!Array.isArray(r)) { return };
  let total = 0;
  let myLength = 0;
  for (let i = 0; i < r.length; i++) {
    if (!isNaN(r[i])) {
      total += r[i];
      myLength++;
    }
  }
  // console.log(`${Math.floor(total / myLength)} + ${total % myLength}/${myLength}`);
  return total / myLength;
}
const toLetterGrade = (r) => {
  let avg = Math.round(AverageOfArray(r));
  if(!(typeof avg === 'number')) { return; }
  switch(true){
    case avg > 100: return `${avg} HOW?!!!`;
    case avg >= 97: return `${avg} A+`;
    case avg >= 93: return `${avg} A`;
    case avg >= 90: return `${avg} A-`;
    case avg >= 87: return `${avg} B+`;
    case avg >= 83: return `${avg} B`;
    case avg >= 80: return `${avg} B-`;
    case avg >= 77: return `${avg} C+`;
    case avg >= 73: return `${avg} C`;
    case avg >= 70: return `${avg} C-`;
    case avg >= 67: return `${avg} D+`;
    case avg >= 65: return `${avg} D`;
    case avg >=  0: return `${avg} D-`;
    default:        return `${avg}... what.`;
  }
}
let gradesA = [100, 95, 100, 92, 86, 96, 85, 100];
let gradesB = [88, 99, 96, 100, 85, 59, 80, 70];
let gradesC = [80, 93, 82, 63, 42, 83, 83, 70];
let gradesD = [70, 42, 69, 63, 67, 72, 63, 75];
console.log(toLetterGrade(gradesA)); // 94 A
console.log(toLetterGrade(gradesB)); // 85 B
console.log(toLetterGrade(gradesC)); // 75 C
console.log(toLetterGrade(gradesD)); // 65 D
console.log(toLetterGrade([])); // NaN... what.