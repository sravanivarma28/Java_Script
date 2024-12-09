
let num1 = [80,120], num2 = 100;

function test(num1,num2,fun){
    console.log(num1)
    console.log(num2);
    console.log(fun());
}
function test2(){
    console.log("test2 function");
    return 'completed';
}
test(num1,num2,test2);

// test -> higher order function
// test2 -> callback function