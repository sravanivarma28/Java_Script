
const originalObj = 
    {
        'stdId':3, 
       'firstName': "sravs",
        'lastName' : 'golla'
    }
    console.log(originalObj)

    const modifiedObj = {
        ...originalObj,
        'lastName' : 'varma'

    }
    console.log(modifiedObj)