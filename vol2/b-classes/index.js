const spacer=()=>{console.log('')};


spacer();


class Person {
  constructor(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName(){return`${this.firstName} ${this.lastName} is ${this.age} years old`}
}

let me = new Person('Daniil','Kremenskyi',13);
console.log(me,me.getFullName());


spacer();


class Account {
  constructor({login,email}){
    this.login = login;
    this.email = email;
  }
  getInfo(){console.log(`Login: ${this.login}, Email: ${this.email}`)};
}

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


class User {
  constructor({name,age,followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo(){console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)};
}

const kiwi = new User({
  name: 'Kiwi',
  age: 13,
  followers: 20,
});
kiwi.getInfo(); // User Kiwi is 13 years old and has 20 followers
const ajax = new User({
  name: 'Ajax',
  age: 13,
  followers: 17,
});
ajax.getInfo(); // User Ajax is 13 years old and has 17 followers


spacer();


class Storage {
  items = [];
  constructor(...r){
    this.items = r;
  }
  addItem(x){if(x!='' && x !=' ')this.items.push(x)}
  removeItem(x){if(this.items.includes(x))this.items.splice(this.items.indexOf(x),1)}
}

let averageOhioStorage = new Storage('suspicious red spacesuit','$19.99 fortnite card','prime from OHIO💀💀');
console.log(averageOhioStorage);
averageOhioStorage.addItem('200 000 tons of gunpowder');
console.log(averageOhioStorage);
averageOhioStorage.removeItem('$19.99 fortnite card');
console.log(averageOhioStorage);


spacer();


class StringConstructor {
  constructor(x){this.value=x}
  append(x){this.value=`${this.value}${x}`};
  pad(x){this.value=`${x}${this.value}${x}`};
  prepend(x){this.value=`${x}${this.value}`};
}
let idek = new StringConstructor('.');
console.log(idek.value); // .
idek.append('^');
console.log(idek.value); // .^
idek.prepend('^');
console.log(idek.value); // ^.^
idek.pad('=');
console.log(idek.value); // =^.^=


spacer();


class StringEditor extends StringConstructor {
  constructor(x) { super('append','pad','prepend'); this.value = x }
  cutStart(x) { this.value = this.value.substring(x, this.value.length) }
  cutPad(x) { this.value = this.value.substring(x, this.value.length - x) }
  cutEnd(x) { this.value = this.value.substring(0, this.value.length - x) }
}
idek = new StringEditor(idek.value);
console.log(idek.value); // =^.^=
idek.cutStart(2);
console.log(idek.value); // .^=
idek.append('^.')
console.log(idek.value); // .^=^.
idek.cutPad(1)
console.log(idek.value); // ^=^
idek.cutEnd(2)
console.log(idek.value); // ^
idek.prepend('^-')
console.log(idek.value); // ^-^


spacer();


import {t} from '../../snippets/index.js';
class Car {
  static getState(car){
    console.log(`\
speed/max: ${t.f.b}${car.speed}/${car.maxSpeed}${t.r}, \
is ${t.f.b}${car.isOn ?'on':'off'}${t.r}, \
rode ${t.f.b}${car.distance}${t.r}km, \
costs $${t.f.b}${car.price}${t.r}`);
  }
  #_price;
  constructor({price,maxSpeed}){this.#_price=price;this.maxSpeed=maxSpeed;this.isOn=false;this.speed=0;this.distance=0}
  get price(){return this.#_price;}
  set price(p){this.#_price=p;}
  turnOn(){this.isOn=true}
  turnOff(){this.isOn=false;this.speed=0;}
  // note: distance/speed are in km/hr (and price is in us$), deal with it
  accelerate(v){this.speed=Math.min(this.speed+v,this.maxSpeed)}
  decelerate(v){this.speed=Math.max(this.speed-v,0)}
  drive(h){if(this.isOn)this.distance+=h*this.speed;}
}

const mustang = new Car({maxSpeed:200,price:46999});
Car.getState(mustang);
mustang.turnOn();
Car.getState(mustang);
mustang.accelerate(50);
Car.getState(mustang);
mustang.drive(2);
Car.getState(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 46999
mustang.decelerate(20);
Car.getState(mustang);
mustang.drive(1);
Car.getState(mustang);
mustang.turnOff();
Car.getState(mustang);
mustang.price = 45999;
Car.getState(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 45999

spacer();


class Book{constructor({title,author,price}){this.title=title;this.author=author;this.price=price}}
class Bookshelf {
  shelfe = [];
  add(r){this.shelfe.push(r)}
  remove(r){this.shelfe.splice(this.shelfe.indexOf(this.shelfe.find(o=>o.title==r)),1)}
  list(){return this.shelfe}
}
const shelf = new Bookshelf();
console.log(shelf);
shelf.add(new Book({
  title:'Rich Dad, Poor Dad',
  author:'Robert Kiyosaki',
  price:22
}));
console.log(shelf);
shelf.add(new Book({
  title:'Harry Potter and the Half-Blood Prince',
  author:'J. K. Rowling',
  price:27
}));
console.log(shelf);
shelf.remove('Rich Dad, Poor Dad');
console.log(shelf);


spacer();


class Employee extends Person {
  constructor(firstName,lastName,age,position){super(firstName,lastName,age);this.position=position;}
  getInfo(){return`${this.firstName} ${this.lastName} is ${this.age} years old and is a ${this.position}`}
}
const johnn = new Employee('John', null, undefined, [{undefined:null}]);
console.log(johnn.getInfo());


spacer();


class Boookk{constructor({title,author,year}){this.title=title;this.author=author;this.year=year;this.available=true;}}
class Library {
  shelfe=[];
  add(b){this.shelfe.push(b)}
  take(b){this.shelfe[this.shelfe.indexOf(this.shelfe.find(o=>o.title==b))].available=false;}
  _return(b){this.shelfe[this.shelfe.indexOf(this.shelfe.find(o=>o.title==b))].available=true;}
  listAvailable(){return this.shelfe.filter(o=>o.available)}
}
const lib = new Library();
console.log(lib.listAvailable()); // []
lib.add(new Boookk({
  title:'Rich Dad, Poor Dad',
  author:'Robert Kiyosaki',
  year:2000
}));
console.log(lib.listAvailable()); // [Boookk{'Rich Dad, Poor Dad'}]
lib.add(new Boookk({
  title:'Harry Potter and the Half-Blood Prince',
  author:'J. K. Rowling',
  year:1997
}));
console.log(lib.listAvailable()); // [Boookk{'Rich Dad, Poor Dad'},Boookk{'Harry Potter'}]
lib.take('Rich Dad, Poor Dad');
console.log(lib.listAvailable()); // [Boookk{'Rich Dad, Poor Dad'}]
lib._return('Rich Dad, Poor Dad');
console.log(lib.listAvailable()); // [Boookk{'Rich Dad, Poor Dad'},Boookk{'Harry Potter'}]