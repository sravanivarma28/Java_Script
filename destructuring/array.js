
// array destructuring

marks = [340,560,600,450,350];
[f,s,...rest] = marks

console.log(f,s,rest)

// string destructuring

let lang = 'Javascript';
[f,s] = lang

console.log(f,s)

//nested obj

let details = {
    surName : 'golla',
    address :{
    city : 'hyd',
    state :'TG'
}
}
let {surName,address:{city}} = details
console.log(surName,city)


