
function foo1(){
    return {
        bar:'hello'
    };
}
function foo2(){
    return 
    {
       // { -> it puts next line it gives undefined
        bar :'hello'
    };
}
console.log(foo1());
console.log(foo2());