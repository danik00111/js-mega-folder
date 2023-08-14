// let randArr = [0, 1, 2, 3, 4];
// let randAre = [5, 6, 7, 8, 9];
// let conjoiRe = [...randArr, 9, 11, ...randAre];
// console.log(conjoiRe);

let user = {
  hobby: 'speedcubing',
  premium: true
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
let key;

let index = 0;
for(key of Object.keys(user)) {
  index++;
  if(index === Object.keys(user).length) {
    console.log(`${key}: ${user[key]}`);
  } else {
    console.log(`${key}: ${user[key]},`);
  }
}