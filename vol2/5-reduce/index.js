const posts = [{
  likes: 420,
  subs: 69,
  reposts: 111,
  totally: ['i', 'am', 'currently'],
},{
  likes: 420,
  subs: 69,
  reposts: 111,
  not: ['held', 'hostage', 'forced'],
},{
  likes: 420,
  subs: 69,
  reposts: 111,
  a: ['to', 'learn', 'this'],
},{
  likes: 420,
  subs: 69,
  reposts: 111,
  message: ['method', 'send', 'help'],
}]
console.log(posts.reduce((a, v) => a + v.likes, 0));

const usres = [{
  name: 'Kiwi',
  lastLogin: 1,
},{
  name: 'Poly',
  lastLogin: 5,
},{
  name: 'Ajax',
  lastLogin: 858, // ajax went to get milk for his kids :sob:
},{
  name: 'Mango',
  lastLogin: 3,
}]

usres.sort((a,b) => a.lastLogin - b.lastLogin);

console.log(usres);

let arryr = [2, 6, 3, 7, 4, 0, 11, 5, 23, 9];

const filterMod2 = (arr) => {
  let returnValue = [];
  for(let i=0; i < arr.length; i++) { if(arr[i] % 2 === 0) returnValue.push(arr[i]) };
  return returnValue;
}

const doubleNumbersInArray = (arr) => {
  let returnValue = [];
  for(let i=0; i < arr.length; i++) { returnValue.push(arr[i] * 2)};
  return returnValue;
}

const invertArray = (arr) => {
  let returnValue = [];
  for(let i=arr.length - 1; i >= 0; i--) { returnValue.push(arr[i])};
  return returnValue;
}

console.log(
  invertArray(
    doubleNumbersInArray(
      filterMod2(
        arryr
      )
    )
  )
);

// or you could just:

console.log(
  arryr
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .reverse()
);