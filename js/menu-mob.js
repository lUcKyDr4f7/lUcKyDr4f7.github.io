
let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let line3 = document.querySelector('.line-menumob-3')

const menuMobile = document.querySelector('.menu-mobile')

btnMenuMob.addEventListener("click", () => {
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    line3.classList.toggle('ativo3')
    menuMobile.classList.toggle('active')
})