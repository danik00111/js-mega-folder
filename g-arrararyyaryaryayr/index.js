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

// let s = 'BrhUUo'
// console.log(s.charAt(0))

// if (typeof s === 'string') {
//   let newS = '';
//   console.log(newS);
//   for (let i = 0; i < s.length; i++) {
//     console.log(newS);
//     newS = newS + (/^[A-Z]*$/.test(charAt(i))) ? s.charAt[i].toLowerCase() : s.charAt[i].toUpperCase();
//   }
//   console.log(newS);
// } else { console.log(undefined) };