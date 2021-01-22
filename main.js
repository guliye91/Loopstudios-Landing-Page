const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.main-nav');
const links = menu.querySelectorAll('.main-nav li a');

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('show');
    })
})

burgerBtn.addEventListener('click',()=>{
    menu.classList.toggle('show');
})
