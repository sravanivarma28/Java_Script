
let obj = {
      id:'1',
      name : 'sravs',
      age : '26',
       work : 'programmer'
       };

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));

// check it is an object

const myObj = { city  :'hyd' , country:'India'};
const result = myObj !==null && typeof myObj == 'object';
console.log(result)