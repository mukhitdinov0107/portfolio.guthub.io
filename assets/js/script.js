const nav_open = document.getElementById("nav_toggle")
const nav_close = document.getElementById("nav_close")

nav_open.addEventListener("click", function(){
    document.getElementById("nav-menu").style.bottom = 0;
})

nav_close.addEventListener("click", function(){
    document.getElementById("nav-menu").style.bottom = "-100%";

})
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.style.bottom = '-100%';
}
navLink.forEach(n => n.addEventListener('click', linkAction))