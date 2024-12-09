
function salaryCalculate(salary , inc=5){
    if(inc>5){
        isalary = salary+0.1*salary;
        return isalary;
 
   }  else {
    isalary = salary+0.05*salary;
    return isalary;
   }

}
console.log( salaryCalculate(100000,10))