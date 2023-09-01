const poeple = [{
  name: 'John',
  surname: 'Doe',
  id: 32,
},{
  name: 'Jane',
  surname: 'Lee',
  id: 26,
},{
  name: 'Mike',
  surname: 'Watson',
  id: 42,
},{
  name: 'Emily',
  surname: 'Brad',
  id: 29,
}];

let newarrPoeple = poeple.map(persno => (
  {
    fullName: `${persno.name} ${persno.surname}`,
    id: persno.id
  }
));

console.log(newarrPoeple)