
let sum =(function(a,b){
    console.log('IIFE called');
    return a+b;
})(4,6)
console.log(sum)