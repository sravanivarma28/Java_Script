
const originalObj = 
    {
        'stdId':3, 
       'firstName': "sravs",
        'lastName' : 'golla'
    }
    console.log(originalObj)
    const modifiedObj = {
        ...originalObj,
        school : 'zphs'
    }
    console.log(modifiedObj)

   // objects equal or not
   
 const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);