

const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.header');


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    navList.classList.toggle('active');
});