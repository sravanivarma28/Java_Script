let firstName = 'sravani';
let secondName ='varma';
let salary = 90000;

// to access specific value
console.log('specific value = '+firstName[4]);

//  length  of string
console.log('length = '+firstName.length)

// trim --> string is immutable existing string is not change
let newString = firstName.trim();
console.log('trim = '+newString)

// to uppercase
 let name = firstName.toUpperCase();
console.log('uppercase = '+name)

//splice --> to access values from anywhere
let a = firstName.slice(0,5)
console.log('splice = '+ a)

// concatenation
let concat = firstName+" "+secondName;
console.log('cancatenation = '+concat);

console.log('this eq. will concat :' , 13+6+'2')

//template
console.log(`My name is ${firstName} and my salary is ${salary}`)

// substring

let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);
console.log('substring = '+ s2);

    
 