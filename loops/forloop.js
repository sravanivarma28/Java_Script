var amount = 1000;
var days = 20;
var intrest = 2;

for(let i=1;i<=days;i++){
    if(i%4===0){
        amount+=intrest

    }
// document.write(" your amount for"+i+"th day"+amount+"<br>")
console.log(" your amount for"+i+"th day : "+amount)
}
