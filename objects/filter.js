
const input = {
    'students' : [
    {
        'stdId':3, 
       'firstName': "sravs",
        'lastName' : 'golla'
    },
    {
        'stdId':20, 
       'firstName': "chinna",
        'lastName' : 'golla'
    } 
]
 }
    var obj = input.students.filter(function(item){
        return item.stdId >5? item : '';
    });
    console.log(obj)
