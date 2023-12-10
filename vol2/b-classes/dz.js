const spacer=()=>{console.log('')};

class Person {
  constructor(fn,ln) {
    this.firstName = fn;
    this.lastName = ln;
  }
  getFullName(){return`${this.firstName} ${this.lastName}`}
}

class Account {
  constructor(o){
    this.login = o.login;
    this.email = o.email;
  }
  getInfo(){return`Login: ${this.login}, Email: ${this.email}`};
}

let me = new Person('Daniil','Kremenskyi');
console.log(me,me.getFullName());

spacer();

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com

const kiwi = new User({
  name: 'Kiwi',
  age: 13,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const ajax = new User({
  name: 'Ajax',
  age: 13,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
