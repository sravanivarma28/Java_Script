
let name = "xyz"

function wish(w,t){
    console.log('hello',this.name , w)
    console.log("now time is",t)
}
p1 = {
    name:'sravs',
    age:26
}
wish.call(p1 , "good eveng",'3.30PM')
wish.apply(p1 , ["good eveng",'3.30PM'])
