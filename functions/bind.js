
let name = "xyz"

function wish(w,t){
    console.log('hello',this.name , w)
    console.log("now time is",t)
}
p1 = {
    name:'sravs',
    age:26
}
bindres = wish.bind(p1)
bindres('good night','11pm')