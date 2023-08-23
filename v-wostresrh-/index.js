// The pun in the folder name, is that "worcestershire sauce" is hard to pronounce.
// and today, on the lessons, we are learning desctructuriz- wh. how do you pronounce that.

const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}
const { _name, age, email } = user;

console.log(_name);
console.log(age);
console.log(email);

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}

const {make: brand, model, year, features: [feat1, feat2, feat3], safety: { airbags, antilock_brakes, stability_control}} = car;

console.log(brand);
console.log(year);
console.log(feat2);
console.log(airbags);

const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

const {
  title,
  director: {name: dirName, nationality: dirNat},
  actors: [actor1, actor2],
  release_year: releaseYear,
  ratings: {
    idmb: idmbRating,
    rotten_tomatoes: RTrating
  }
} = movie;

console.log(title);
console.log(dirNat);
console.log(actor2);
console.log(releaseYear);
console.log(RTrating);