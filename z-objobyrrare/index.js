let poeple = [{
  name: 'Poly',
  eyeColor: 0xff4000,
  gender: 'f',
  isActive: true,
  email: 'polytheplaceholder@gmail.com',
  age: 19,
},{
  name: 'Ajax',
  eyeColor: 0x4000ff,
  gender: 'm',
  isActive: false,
  email: 'ajaxtheplaceholder@gmail.com',
  age: 16,
},{
  name: 'Mango',
  eyeColor: 0xe0e020,
  gender: 'f',
  isActive: false,
  email: 'mangotheplaceholder@gmail.com',
  age: 18,
},{
  name: 'Kiwi',
  eyeColor: 0x00a000,
  gender: 'f',
  isActive: true,
  email: 'kiwitheplaceholder@gmail.com',
  age: 14
}];

console.log(poeple.map(persno => '#' +
  ('000000' + persno.eyeColor.toString(16)) // poeple's eye colors in hex with appended zeroes
  .slice(-6))); // cut unneeded zeroes
console.log(poeple
  .find(persno => persno.eyeColor === 0x00a000) // the persno with darkgreen eyes
  .name // 's name
);
console.log(poeple.map(persno => persno.name)); // all names
console.log(poeple
  .filter(persno => persno.gender === 'f') // all female poeple
  .map(persno => persno.name) // all names
);
console.log(poeple
  .filter(persno => !persno.isActive) // all inactive poeple
  .map(persno => persno.name) // all names
);
console.log(poeple
  .find(persno => persno.email === 'kiwitheplaceholder@gmail.com') // the persno with the email
  .name // 's name
);
console.log(poeple
  .filter(persno =>
    persno.age <= 18 // poeple not too young
    &&
    16 <= persno.age) // poeple not too old
  .map(persno => persno.name) // all names
);


const fruts = [
  'alple', 'bnanan',
  'aplpe', 'ornage',
  'greap', 'bannaa',
  'kiwe'];

console.log(fruts.map(frut =>(
  frut.charAt(0) + frut.slice(-1)
)));