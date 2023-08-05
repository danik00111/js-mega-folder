// let students = [{
//   name: 'Mango',
//   age: 15,
//   gender: 'female',
//   grade: 98,
// },{
//   name: 'Ajax',
//   age: 13,
//   gender: 'male',
//   grade: 69,
// },{
//   name: 'Poly',
//   age: 12,
//   gender: 'male',
//   grade: 86,
// },{
//   name: 'Kiwi',
//   age: 13,
//   gender: 'female',
//   grade: 40}]

// const averageGrade = arr => arr.reduce((p, c) => p + c, 0) / arr.length; // stackoverflow

// let thing = [];
// for(let i=0;i<students.length;i++) {thing.push(students[i].grade);}
// console.log(averageGrade(thing));

// let book = {
//   Define(a, n, g) {
//     this.author = a;
//     this.name = n;
//     this.genre = g;
//   }}

// book.Define('Daniil Kremenskyi👹', 'Як отримати 99999 гемів в бравл старс за 3 хвилини!', 'scam');
// console.log(book);
// /* {
//   Define: [Function: Define],
//   author: 'Daniil Kremenskyi👹',
//   name: 'Як отримати 99999 гемів в бравл старс за 3 хвилини!',
//   genre: 'scam'
// } */

let car = {
  brand: 'Nissan',
  color: 0x949494,
  year: 2008,
  makeAnnouncement() {
    console.log(`класна машинка від ${this.brand}, кольору #${Math.abs(this.color).toString(16)}, класно їздить, бо ${this.year} року`)
}}

car.makeAnnouncement();