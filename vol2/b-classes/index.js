const animal={legs:4};
const dog=Object.create(animal);
console.log(dog);
dog._name="Charlie";
console.log(dog,animal.isPrototypeOf(dog));
try{console.log(dog._name,dog.hasItsOwnProperty('_name'))}catch(e){console.warn(e)};
try{console.log(dog.legs,dog.hasItsOwnProperty('legs'))}catch(e){console.warn(e)};

class User {
  name; #email;
  constructor(n,e){this._name=n;this.#email=e}
  get _name(){return _name}
  set setEmail(x){
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(x)) {console.warn('warn: invalid email'); return;}
    this.#email=x;
  }
};

const me = new User('Dani','totallynotthethe@gmail.com');
console.log(me); // User { _name: 'Dani', email: 'totallynotthethe@gmail.com' }
const what = new User({_name:'what',email:'what@huh.uh'}, 'hmm i wonder what is happening here (it works differently in the docs)');
console.log(what); // User { _name: { _name: 'what', email: 'what@huh.uh' }, email: 'hmm i wonder what is happening here (it works differently in the docs)' }