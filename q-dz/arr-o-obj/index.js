let shopStock = [{
  name: 'Buckled Shoes',
  price: 49.99,
  stock: 62,
}, {
  name: 'Suspicious Red Spacesuit',
  price: 4254.99,
  stock: 4,
}, {
  name: '1000 vBucks for 10% off',
  price: 7.191, // official price: 7.99
  stock: 683, // 683 bulks of "1k vbucks"
}, {
  name: 'Hacks for Brawl Stars',
  price: 999.99,
  stock: 2,
}, {
  name: 'Backrooms Mango',
  price: 7999.99,
  stock: 0,
}];

const getAllValues = (arr,key) => {
  let output = [];
  for(let i=0; i<arr.length; i++) {
    if (typeof arr[i][key] !== 'undefined') {
      output.push(arr[i][key]);
    }
  }
  return output;
}

const calcTotalPrice = (arr,prod) => arr.find(x => x.name === prod).price * arr.find(x => x.name === prod).stock;

console.log(getAllValues(shopStock,'name')); // ['bsh','susp','vbx','hxb','brm']
console.log(calcTotalPrice(shopStock,'Buckled Shoes')); // 3099.38