// let string = "A quick brown fox jumps over the lazy dog";
// let arrayr = string.split(' ');
// console.log(arrayr);


// let arrayr = ['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
// arrayr.pop();
// console.log(arrayr)


// let arrayr = ['a', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
// let strign = 'And then';
// arrayr.unshift(strign);
// console.log(arrayr);


// let soccerTeam = [
//   'Yarmolenko',
//   'Shevchenko',
//   'Mudryk',
//   'Rebrov',
//   'Voronin',
//   'Pyatov'
// ]
// soccerTeam.splice(3,3,'Bondarenko');
// soccerTeam.splice(1,1,'Sudakov','Daniil Kremenskyi 🤬');
// console.log(soccerTeam);

// let musicMusic = ['Jazz', 'Blues'];
//                                     console.log(musicMusic);
// musicMusic.push('R&R');
//                                     console.log(musicMusic);
// musicMusic[Math.floor(musicMusic.length / 2)] = 'Classic';
//                                     console.log(musicMusic);
// console.log(musicMusic.shift());
//                                     console.log(musicMusic);
// musicMusic.unshift('Rap', 'Raggy');
//                                     console.log(musicMusic);

// const forJoin = (r) => {
//   if(!Array.isArray(r)){return null;}
//   let string = r[0];
//   for(let i=1;i<r.length;i++){
//     string = `${string}, ${r[i]}`;
//   }
//   return string;
// }
// const theFriends = [ 'Mango', 'Poly', 'Kiwi', 'Ajax'];
// let thatString = theFriends.join(', ')
// let thatSameString = forJoin(theFriends);
// console.log(thatString);
// console.log(thatSameString);

// let games = [
//   'brawl', 'genshin', 'minecraft', 'fortnite', 'Daniil Kremenskyi 🤬'
// ]
// const cringe = 'genshin';
// const DaniilKremenskyi = 'Daniil Kremenskyi 🤬';
// games.splice(games.indexOf(cringe), 1);
// games.push('sims2');
// games.splice(games.indexOf(DaniilKremenskyi), 1, 'roblox');
// console.log(games);

let numbers = [12, 42, 59, 123, 77, 12, 999, 991, 42, 70, 111, 2043054, 7, 77, 203, 66, 253, 42];
const arrayRemoveDupes = (r) => {
  if(!Array.isArray(r)){return undefined;}
  let newR = [];
  let isDupe; // idk if putting a let in a for is safe
  for(let i=0;i<r.length;i++) { // for each element
    isDupe = false; // initiate it as being not a dupe
    for(let j=0;j<newR.length;j++) { // for each element of newR
      if(r[i] === newR[j]) { // compare current elem of r with current elem of newR
        isDupe = true; // if it ever is, then mark the current element as dupe
        break; // and break out of the for(j)
      }
    }
    if(!isDupe) { newR.push(r[i]) }
    // if the element isn't present in newR, add it.
    // if it's a dupe, ignore it.
  }
  return newR; // return the result
};
console.log(arrayRemoveDupes(numbers));