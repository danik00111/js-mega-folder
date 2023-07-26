let shopStock = [{
    'name': 'Buckled Shoes',
    'price': 49.99,
    'stock': 62,
  },{
    'name': 'Suspicious Red Spacesuit',
    'price': 4254.99,
    'stock': 4,
  },{
    'name': '1000 vBucks for 10% off',
    'price': 7.191, // official price: 7.99
    'stock': 683, // 683 bulks of "1k vbucks"
  },{
    'name': 'Hacks for Brawl Stars',
    'price': 999.99,
    'stock': 2,
  },{
    'name': 'Backrooms Mango',
    'price': 7999.99,
    'stock': 0
  }
];

let userBasket = [];

// ABOVE: INIT
// BELOW: FUNCTIONS

const toUserBasket = (i) => {
  if (i !== Math.floor(i) || i < 0 || i >= shopStock.length) { console.log(`toUserBasket invalid input "${i}"!`); return; }
  if(shopStock[i].stock < 1) { console.log(`Item "${shopStock[i].name}" is out of stock!`); return; }
  userBasket.push({
    'name': shopStock[i].name,
    'price': shopStock[i].price,
    'index': i
  });
  console.log(`Item "${shopStock[i].name}" moved to user basket!`)
  shopStock[i].stock--;
  console.log(`Item "${shopStock[i].name}"'s stock variable lowered by 1!`)
}
const fromUserBasket = (i) => {
  if (i !== Math.floor(i) || i < 0) { console.log(`fromUserBasket invalid input "${i}"!`); return; }
  let indexToDelete = userBasket.findIndex(item => item.index === i);
  if(indexToDelete === -1) { console.log(`Index ${i} not found in user basket!`); return; }
  userBasket.splice(indexToDelete, 1);
  console.log(`Item "${shopStock[i].name}" removed from user basket!`)
  shopStock[i].stock++;
  console.log(`Item "${shopStock[i].name}"'s stock variable increased by 1!`)
}

// ABOVE: FUNCTIONS
// BELOW: TESTING

console.log('STOCK:', shopStock, '\nBASKET:', userBasket);
// STOCK: [
//   { name: 'Buckled Shoes', price: 49.99, stock: 62 },
//   { name: 'Suspicious Red Spacesuit', price: 4254.99, stock: 4 },
//   { name: '1000 vBucks for 10% off', price: 7.191, stock: 683 },
//   { name: 'Hacks for Brawl Stars', price: 999.99, stock: 2 },
//   { name: 'Backrooms Mango', price: 7999.99, stock: 0 }
// ]
// BASKET: []
toUserBasket(3);
// Item "Hacks for Brawl Stars" moved to user basket!
// Item "Hacks for Brawl Stars"'s stock variable lowered by 1!
console.log('STOCK:', shopStock, '\nBASKET:', userBasket);
// STOCK: [
//   { name: 'Buckled Shoes', price: 49.99, stock: 62 },
//   { name: 'Suspicious Red Spacesuit', price: 4254.99, stock: 4 },
//   { name: '1000 vBucks for 10% off', price: 7.191, stock: 683 },
//   { name: 'Hacks for Brawl Stars', price: 999.99, stock: 1 }, <== HERE CHANGES
//   { name: 'Backrooms Mango', price: 7999.99, stock: 0 }
// ]
// BASKET: [{ name: 'Hacks for Brawl Stars', price: 999.99, index: 3 }] <== HERE CHANGES
toUserBasket(4); // Item "Backrooms Mango" is out of stock!
toUserBasket(2.2); // toUserBasket invalid input "2.2"!
toUserBasket(-2); // toUserBasket invalid input "-2"!
toUserBasket(6); // toUserBasket invalid input "6"!
toUserBasket(1);
// Item "Suspicious Red Spacesuit" moved to user basket!
// Item "Suspicious Red Spacesuit"'s stock variable lowered by 1!
console.log('STOCK:', shopStock, '\nBASKET:', userBasket);
// STOCK: [
//   { name: 'Buckled Shoes', price: 49.99, stock: 62 },
//   { name: 'Suspicious Red Spacesuit', price: 4254.99, stock: 3 }, <== HERE CHANGES
//   { name: '1000 vBucks for 10% off', price: 7.191, stock: 683 },
//   { name: 'Hacks for Brawl Stars', price: 999.99, stock: 1 },
//   { name: 'Backrooms Mango', price: 7999.99, stock: 0 }
// ]
// BASKET: [
//   { name: 'Hacks for Brawl Stars', price: 999.99, index: 3 },
//   { name: 'Suspicious Red Spacesuit', price: 4254.99, index: 1 } <== HERE CHANGES
// ]
fromUserBasket(0); // Index 0 not found in user basket!
fromUserBasket(4.1); // fromUserBasket invalic input "4.1"!
fromUserBasket(-5); // fromUserBasket invalic input "-5"!
fromUserBasket(3);
// Item "Hacks for Brawl Stars" removed from user basket!
// Item "Hacks for Brawl Stars"'s stock variable increased by 1!
console.log('STOCK:', shopStock, '\nBASKET:', userBasket);
// STOCK: [
//   { name: 'Buckled Shoes', price: 49.99, stock: 62 },
//   { name: 'Suspicious Red Spacesuit', price: 4254.99, stock: 3 },
//   { name: '1000 vBucks for 10% off', price: 7.191, stock: 683 },
//   { name: 'Hacks for Brawl Stars', price: 999.99, stock: 2 }, <== HERE CHANGES
//   { name: 'Backrooms Mango', price: 7999.99, stock: 0 }
// ]
// BASKET: [{ name: 'Suspicious Red Spacesuit', price: 4254.99, index: 1 }] <== HERE CHANGES