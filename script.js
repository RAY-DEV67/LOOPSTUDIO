const ham = document.querySelector(".ham")
const navMenu = document.querySelector(".navMenu")
const body = document.querySelector("body")
const closeMenu = document.querySelector(".close")

function menu(resp1,resp2){
    navMenu.style.display = `${resp1}`
    body.style.overflowY = `${resp2}`
}
ham.addEventListener("click",function(){
    menu("block","hidden")
})
closeMenu.addEventListener("click",function(){
    menu("none","visible")
})