let bestFilms = [
  {
    name: 'Barbie',
    year: 2023,
  },{
    name: 'Soul',
    year: 2020,
  },{
    name: 'Luca',
    year: 2021,
  }
];

console.log(bestFilms.map(film => film.name));


let menu = [{
  name: 'Claifornia Roll',
  price: 279
},{
  name: 'Miso Soup',
  price: 199
},{
  name: 'California Combo',
  price: 799
}]

const h = menu.every(x => x.price < 300);
console.log(h);

const c = menu.some(x => x.price < 300);
console.log(c);


let numbers = [
  undefined, 8, 74,
  'Hello World!', -82,
  undefined, -21, true,
  269.64, NaN, 92
];

console.log(numbers.filter(x => x%2 === 0));