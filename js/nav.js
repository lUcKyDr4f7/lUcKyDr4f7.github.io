
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    const menuMobile = document.querySelector('.menu-mobile')
    header.classList.toggle('rolagem', window.scrollY > 0)
    menuMobile.classList.toggle('rolagem', window.scrollY > 0)
})