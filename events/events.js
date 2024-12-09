const openNav = document.getElementById("open")
const closeNav = document.getElementById("close")

const sideNavBar = document.querySelector(".sidenav")

closeNav.addEventListener('click', closeSideNavBar)

function closeSideNavBar() {
    sideNavBar.classList.toggle("mango")
}
const darkTheme = function () {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}
const lightTheme = function () {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"
                    
}
function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function () {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function () {
    document.querySelector("#company").textContent = "Company"
}
// const keyPressed = function() {
//     document.querySelector("body").style.backgroundColor = "blue"
// }

// const keyDown = function() {
//     document.querySelector("body").style.backgroundColor = "red"
// } 

const loginButton = document.getElementById("loginBtn")
const loginModal = document.getElementById("loginSection")
const mainSection = document.querySelectorAll(".main .section")
const userDetails = document.getElementById("one")

loginButton.onclick = showLogin

function showLogin() {
    sideNavBar.style.display = "none"
    mainForm.style.display = "none"
    userDetails.style.display = "none"
    myColors.style.display = "none"

    myBox.style.display = 'none'
    mainSection.forEach(function (item) {
        item.style.display = "none"
    })
    loginModal.style.display = "block"
}
document.getElementById("closeBtn").addEventListener('click', hideLogin)

function hideLogin() {
    sideNavBar.style.display = "block";
    mainForm.style.display = "block"
    userDetails.style.display = "block"

    myColors.style.display = "block"
    myBox.style.display = 'block'
    mainSection.forEach(function (item) {
        item.style.display = "block"
    })
    loginModal.style.display = "none"
}
// document.getElementById("loginsubmit").addEventListener('mouseover',function(){
// this.style.background = 'green'
// })
// document.getElementById("loginsubmit").addEventListener('mouseout',function(){
// this.style.background = 'blue'
// })
const NavBorder = document.getElementById("add-border")
NavBorder.addEventListener("click", addingBorder)

function addingBorder() {
    document.querySelector("header").style.border = "5px solid black"
}
if (10 > 20) {
    NavBorder.removeEventListener("click", addingBorder)
}
const mainForm = document.getElementById("myForm")
const userName = document.getElementById("nameInput")
const inputName = document.getElementById("name")

mainForm.addEventListener('input', function (e) {
    e.preventDefault()

    const myUserName = userName.value
    inputName.textContent = myUserName
    // mainForm.reset()
})
userName.addEventListener('focus', function (event) {
    event.target.style.backgroundColor = 'pink'
})
userName.addEventListener('blur', function (event) {
    event.target.style.backgroundColor = ''
})
const myColors = document.getElementById("myColors")
const myBox = document.getElementById("box")

myColors.addEventListener('change', function () {
    // myBox.style.backgroundColor = myColors.value
    myBox.textContent = myColors.value
})


