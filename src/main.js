import './style.css';
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const hiderparent = document.querySelector('.hiderParent');
const hider = document.querySelector('.hider');

menu.addEventListener('click',()=>{
    menu.classList.add('hidden');
    hiderparent.classList.remove('hidden');
    hider.classList.remove('hidden');

})

close.addEventListener("click",()=>{
    menu.classList.remove('hidden');
    hiderparent.classList.add('hidden');
    hider.classList.add("hidden");
})