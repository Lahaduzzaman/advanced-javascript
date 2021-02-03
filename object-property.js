const students = [
    {id: 21, name: 'Adib'},
    {id: 31, name: 'Shakil'},
    {id: 41, name: 'Rashed'},
    {id: 71, name: 'Opu'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);

console.log(biggerOne);