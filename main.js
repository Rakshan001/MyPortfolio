document.addEventListener("DOMContentLoaded", function () {
var typed = new Typed(".text",{
    strings: ["Full Stack Web Developer","Programmer"],
    typeSpeed:80,
    backSpeed:70,
    backDelay:100,
    loop:true
});
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})


