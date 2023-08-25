let user = {
  hobby: 'skydiving',
  premium: false,
  mood: 'happy'
};

const {hobby, premium, mood} = user;

console.log(hobby, premium, mood);

//////////////////////////////////////////////////////////////////

let objert = {
  Temperature: 24,
  Humidity: .75,
  Wind: {
    Speed: .4,
    Direction: .3563,
  },
  isFreezing() {
    return this.Temperature < 0;
  },
}

const {Temperature, Humidity, Wind: {Speed, Direction}} = objert;

console.log(Temperature, Humidity, Speed, Direction);

//////////////////////////////////////////////////////////////////

let salaries = {
  Mango: 1300,
  Ajax: 900,
  Kiwi: 1500,
  Poly: 1000,
}

const {Mango: salMango, Ajax: salAjax, Kiwi: salKiwi, Poly: salPoly} = salaries;

console.log(salMango, salAjax, salKiwi, salPoly);

//////////////////////////////////////////////////////////////////

let shopStock = [{
  name: 'Buckled Shoes',
  category: 'clothes',
  price: 49.99,
  stock: 62,
}, {
  name: 'Suspicious Red Spacesuit',
  category: 'clothes',
  price: 4254.99,
  stock: 4,
}, {
  name: '1000 vBucks for 10% off',
  category: 'games',
  price: 7.191, // official price: 7.99
  stock: 683, // 683 bulks of "1k vbucks"
}, {
  name: 'Hacks for Brawl Stars',
  category: 'games',
  price: 999.99,
  stock: 2,
}, {
  name: 'Backrooms Mango',
  category: 'edible',
  price: 7999.99,
  stock: 0,
}, {
  name: 'PRIME From Ohio 💀',
  category: 'edible',
  price: 9.99,
  stock: 6942,
}];

const [
  {
    name: nameQ,
    category: categoryQ,
    price: priceQ,
    stock: stockQ,
  },{
    name: nameW,
    category: categoryW,
    price: priceW,
    stock: stockW,
  },{
    name: nameE,
    category: categoryE,
    price: priceE,
    stock: stockE,
  },{
    name: nameR,
    category: categoryR,
    price: priceR,
    stock: stockR,
  },{
    name: nameT,
    category: categoryT,
    price: priceT,
    stock: stockT,
  },{
    name: nameY,
    category: categoryY,
    price: priceY,
    stock: stockY,
  },
] = shopStock;

console.log(nameR, priceW);