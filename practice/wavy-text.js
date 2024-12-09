let inputEle = document.getElementById('text')
let h1 = document.getElementById('animate')

function animateText(str){
    let letters =str.split("")

    let spanEles =letters.map(letter=>{
        return `<span>${letter}</span>`
    })
    spanEles =spanEles.join("")

    h1.innerHTML = spanEles;

    Array.from(h1.children).forEach((span,index)=>{
        setTimeout(()=>{
            span.classList.add(('wavy'))
        },index*65+150)
    })
    
}
animateText("web")
inputEle.oninput = animateText(inputEle.value)