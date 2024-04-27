const char = document.querySelector(".char")
const clicks = document.querySelector(".clicks")

let a = 0

char.addEventListener('mousedown', ()=>{
    a++;
    clicks.innerHTML = "shark: " + a
    char.style.transform = "scale(1.1)"
})

char.addEventListener('mouseup', ()=>{
    char.style.transform = "scale(1)"
})