
// let is for block scope
for(let i=1;i<=4;i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)
}

// var is for function scope only
for(var i=1;i<=4;i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)
}