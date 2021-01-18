const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.main-nav');

burgerBtn.addEventListener('click', ()=>{
    menu.classList.toggle('show');
    closeBtn.classList.add('show-close');
})


