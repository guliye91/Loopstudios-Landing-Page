const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.main-nav');
const links = menu.querySelectorAll('.main-nav li a');
const heroText = document.querySelector('.hero-text');

window.addEventListener('DOMContentLoaded',()=>{
    heroText.style.animation= `fadeIn 1s ease-in  forwards`;
})

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('show');
    })
})

burgerBtn.addEventListener('click',()=>{
    menu.classList.toggle('show');
})
