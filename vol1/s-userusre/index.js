let user = {
  name: 'Daniil',
  email: 'kremenskiydaniil@gmail.com',
  age: 13,
  login() {
    console.log(`Welcome back, ${this.name}! In case you already forgot, you're ${this.age} years old and your email is ${this.email}. Hope your Alzheimer's will get cured soon! Have a nice day! 😀`); // this is a joke i dont have alzheimers
  }
}

user.login();