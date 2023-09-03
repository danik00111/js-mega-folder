const poeple = [{
  name: 'John',
  surname: 'Doe',
},{
  name: 'Jane',
  surname: 'Lee',
},{
  name: 'Mike',
  surname: 'Watson',
},{
  name: 'Emily',
  surname: 'Brad',
}];

let newarrPoeple = poeple.map((persno, i) => (
  {
    fullName: `${persno.name} ${persno.surname}`,
    id: i
  }
));

console.log(newarrPoeple)