let programmingStudents = [
  'Radchenko', 'Egor',   'Kostya',
  'Gleb',      'Bozhko', 'Polina',
  'Vod',       'Ilya',   'Myroslav',
  'Hladchuk',  'Kirill', 'Daniil'];
let programmingMentors = ['MorraMay', 'j', 'Dudenko'];
let programmingClass = programmingMentors.concat(programmingStudents);
console.log(programmingClass);
/*[
  'MorraMay',  'j',      'Dudenko',
  'Radchenko', 'Egor',   'Kostya',
  'Gleb',      'Bozhko', 'Polina',
  'Vod',       'Ilya',   'Myroslav',
  'Hladchuk',  'Kirill', 'Daniil'
]*/