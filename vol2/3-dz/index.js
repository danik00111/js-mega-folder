let users = [{
  name: 'Poly',
  following: ['Mango', 'Kiwi'],
  skills: ['lasereyes', 'invisibility'],
  balance: 9471,
},{
  name: 'Ajax',
  following: [ ],
  skills: ['timecontrol', 'flight'],
  balance: 6894,
},{
  name: 'Mango',
  following: ['Ajax'],
  skills: ['mindcontrol', 'lasereyes'],
  balance: 2759,
},{
  name: 'Kiwi',
  following: ['Mango', 'Poly', 'Ajax'],
  skills: ['flight', 'mindcontrol'],
  balance: 4025,
}]

const sumArray = (r) => {
  let sum = 0;
  r.forEach(i=>{sum += i;});
  return sum;
}
const totalBalance = sumArray(users.map(x => x.balance));
console.log(totalBalance);

/////////////////////////////////////////////////////////////////////

const findFollowers = (arr, username) => arr.filter(x => x.following.includes(username)).map(x => x.name);
console.log(findFollowers(users, 'Ajax'));

/////////////////////////////////////////////////////////////////////

const sortByFollows = (arr) => arr.sort((a, b) => b.following.length - a.following.length).map(x => x.name);
console.log(sortByFollows(users));

/////////////////////////////////////////////////////////////////////

import { noDupesAndSort } from "../../snippets/index.js";

let allSkills = noDupesAndSort([].concat(...(users.map(x => x.skills))), []);

console.log(allSkills);