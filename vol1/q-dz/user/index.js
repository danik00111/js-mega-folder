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
/*
  hobby: skydiving,
  premium: false,
  mood: happy
*/