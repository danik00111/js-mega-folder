const events = [
  {evente: 'e3', date: '24/02/2022'},
  {evente: 'e1', date: '28/07/1914'},
  {evente: 'e4', date: '09/08/1945'},
  {evente: 'e2', date: '11/09/2001'},
]

console.log(events
  .sort((a, b) => a.date.split('/')[0] - b.date.split('/')[0])
  .sort((a, b) => a.date.split('/')[1] - b.date.split('/')[1])
  .sort((a, b) => a.date.split('/')[2] - b.date.split('/')[2])
);

const reddet = [
  {name: 'The', score: 5827},
  {name: 'Is', score: 4782},
  {name: 'To', score: 7820},
  {name: 'An', score: 6821},
  {name: 'Of', score: 7820},
]

console.log(reddet
  .sort((a,b)=>(a.name.localeCompare(b.name)))
  .sort((a,b)=>a.score-b.score)
);

const numbers = [
  4,  8,
  16, 12,
  24, 2,
  9,  3
];

const averageOfArray = (arr) => arr.reduce(((v, a) => v + a), 0) / arr.length;

console.log(averageOfArray(numbers));