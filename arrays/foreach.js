
var salaries = [5000,4500,55500,6000];

console.log(salaries)
salaries.forEach(increment)

function increment (salary , index){
    console.log(salary)
    let increment =  salary/10
    salaries[index] = salary+increment
}
console.log(salaries)