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
const calcCategoryPrice = (arr,cate) => {
  let filtered = arr.filter(x => x.category === cate);
  let output = 0;
  for (let i=0; i<filtered.length; i++) { output += filtered[i].price*filtered[i].stock; }
  return output;
};

console.log(getAllValues(shopStock,'name')); // ['bsh','susp','vbx','hxb','brm','prh']
console.log(calcTotalPrice(shopStock,'Buckled Shoes')); // 3099.38
console.log(calcCategoryPrice(shopStock,'clothes')); // 20199.34