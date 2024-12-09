
var birthYears = [2000,2004,1998,1996];

var ages = birthYears.map(ageFind)
function ageFind(ele){

    return 2024-ele;
}
console.log(ages)