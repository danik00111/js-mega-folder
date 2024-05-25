const people = [
  { name: "John", age: 25 },
  { name: "Anna", age: 30 },
  { name: "Anna", age: 50 },
  { name: "Anna", age: 40 },
  { name: "Peter", age: 40 },
  { name: "Mary", age: 35 },
];

const le_sort = (people) => new Promise((resolve,_)=>{
  let ppl;
  setTimeout(()=>{
    ppl = people.sort((a,b) => {
      const comp = a.name.localeCompare(b.name);
      return comp!=0 ? comp : (a.age-b.age);
    });
    resolve(ppl);
  }, Math.random()*1e3);
}).catch(e=>{
  console.error('watafak:', e)
})

le_sort(people)
.then(h=>{console.log("people:", h)})