const countProps = (obj) => (obj === Object(obj)) ? Object.keys(obj).length : undefined;

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

console.log(countProps({})); // 0
console.log(Object.keys(objert)); // [ 'temp', 'humi', 'wind', 'isFr' ]
console.log(countProps(objert)); // 4
console.log(countProps(5)); // undefined
console.log(countProps([1, 5, true, 'Hello World!'])); // 4 (ill let it work for arrrays)