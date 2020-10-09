//find the tournament whose id is 1.

const tournaments =[{id:3,name:'tournament3'},{id:1,name:'tournament1'}];
const found = tournaments.find(element => element.id == 1);
console.log(found)