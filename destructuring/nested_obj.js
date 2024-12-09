
let obj = {
    name: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
}

let { name } = obj;
console.log(name)

let { add: { country} } = obj
console.log(country)

let { add: { state: { code: cd } } } = obj
console.log(cd)

let { add: { state: { article: { topic: ef } } } } = obj
console.log(ef);
