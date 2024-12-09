
let arr = ['ban','banglore','banned','banaras'];

arr = arr.map(function(x){
    return x.replace(/ban/g,' ');
});
console.log(arr);