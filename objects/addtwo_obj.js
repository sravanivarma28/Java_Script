
const address = {
street : 'perika',
city :'Hyd'
}
const extendAddress = {

    state : 'TG',
    country :'India'
    }
    const combinedAddress = {
        ...address,
        ...extendAddress
        
    }
    console.log(combinedAddress)

    //another method
    // var cloneObj = Object.assign(address, extendAddress);
    // console.log(cloneObj)