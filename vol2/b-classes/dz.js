const spacer=()=>{console.log('')};

class Person {
  constructor(fn,ln) {
    this.firstName = fn;
    this.lastName = ln;
  }
  getFullName(){return`${this.firstName} ${this.lastName}`}
}

class Account {
  constructor({login,email}){
    this.login = login;
    this.email = email;
  }
  getInfo(){console.log(`Login: ${this.login}, Email: ${this.email}`)};
}

class User {
  constructor({name,age,followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo(){console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)};
}

class Storage {
  items = [];
  constructor(...r){
    this.items = r;
  }
  addItem(x){if(x!='' && x !=' ')this.items.push(x)}
  removeItem(x){if(this.items.includes(x))this.items.splice(this.items.indexOf(x),1)}
}

class StringConstructor {
  constructor(x){this._value=x}
  get value(){return this._value}
  append(x){this._value=`${this._value}${x}`};
  pad(x){this._value=`${x}${this._value}${x}`};
  prepend(x){this._value=`${x}${this._value}`};
}

let me = new Person('Daniil','Kremenskyi');
console.log(me,me.getFullName());

spacer();

const mango = new Account({
  login: 'Mango',
  email: 'mango@placeholder.com',
});
mango.getInfo(); // Login: Mango, Email: mango@placeholder.com
const poly = new Account({
  login: 'Poly',
  email: 'poly@gmail.com',
});
poly.getInfo(); // Login: Poly, Email: polytheplaceholder@gmail.com

spacer();

const kiwi = new User({
  name: 'Kiwi',
  age: 13,
  followers: 20,
});
mango.getInfo(); // User Kiwi is 13 years old and has 20 followers
const ajax = new User({
  name: 'Ajax',
  age: 13,
  followers: 17,
});
poly.getInfo(); // User Ajax is 13 years old and has 17 followers

spacer();

let averageOhioStorage = new Storage('suspicious red spacesuit','$19.99 fortnite card','prime from OHIO💀💀');
console.log(averageOhioStorage);
averageOhioStorage.addItem('200 000 tons of gunpowder');
console.log(averageOhioStorage);
averageOhioStorage.removeItem('$19.99 fortnite card');
console.log(averageOhioStorage);

spacer();

const idek = new StringConstructor('.');
console.log(idek.value); // .
idek.append('^');
console.log(idek.value); // .^
idek.prepend('^');
console.log(idek.value); // ^.^
idek.pad('=');
console.log(idek.value); // =^.^=


spacer();
spacer();


class Car {
  static getState(car){
    console.log(`speed/max: ${car.speed}/${car.maxSpeed}, is ${car.isOn?'on':'off'}, rode ${car.distance}km, costs ${car.price}`);
  }

  constructor({price,maxSpeed}){this.price=price;this.maxSpeed=maxSpeed;this.isOn=false;this.speed=0;this.distance=0}

  // TODO: figure out what the actual [[RangeError: Stack overflow]] am i supposed to do here
  get price() { }
  set price(p){ }
  
  turnOn(){this.isOn=true}
  turnOff(){this.isOn=false}

  // note: distance/speed are in km/hr (and price is in $), deal with it

  accelerate(v){this.speed=Math.min(this.speed+v,this.maxSpeed)}
  decelerate(v){this.speed=Math.max(this.speed-v,0)}

  drive(h){if(this.isOn)this.distance+=h*this.speed;}
}

const mustang = new Car({maxSpeed:200,price:46999});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getState(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 46999

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getState(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 46999

console.log(mustang.price); // 46999
mustang.price = 45999;
console.log(mustang.price); // 45999
