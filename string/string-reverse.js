// reverse

let word ="hello";
let rev = word.split("").reverse().join("");
console.log(rev)

// index of

let s1 = 'def abc abc';
let i = s1.indexOf('abc');
console.log('indexOf is ='+i);

// replace

let s2 = 'Learn HTML at GfG';
let s3 = s2.replace('HTML', 'JavaScript');
console.log('replace = '+ s3);

// trimming whitespaces

let a = '    Learn JavaScript       ';
let b = a.trim();
console.log(b);

// access charactres

let c = 'Learn JavaScript';
let d = c[6];
console.log(d);

d = c.charAt(6);
console.log(d);

// comparison

let str1 = "John";
let str2 = new String("John");

console.log(str1 == str2);
console.log(str1 === str2);

console.log(str1.localeCompare(str2));


