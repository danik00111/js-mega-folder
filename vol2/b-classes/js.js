/*
  Створіть клас Person, що містить властивості firstName та lastName.
  Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
*/
class Person {
  constructor(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(){return`${this.firstName} ${this.lastName}`}
}
let me = new Person('Daniil','Kremenskyi');
console.log(me,me.getFullName());test
