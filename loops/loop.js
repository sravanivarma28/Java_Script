console.log('for in loop')

let person = {
    name: 'sravs',
    age: 25,
    address: 'hyd'
}
for (let key in person) {
    console.log(key + ':' + person[key])
}
console.log('for of loop');

let num = [4, 7, 3, 2, 3];
for (let number of num) {
    console.log(number);
}