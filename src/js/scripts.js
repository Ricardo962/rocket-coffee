let menuMobile = document.querySelector('.menu-mobile');
let overflowBody = document.querySelector('body');
let buttonMobile = document.querySelector('.menu-mobile-icon img');

function openMenu() {  
    if(overflowBody.classList.contains('active')) {
        menuMobile.classList.remove('open');
        overflowBody.classList.remove('active');

        buttonMobile.setAttribute("src", "src/assets/menu-buguer-open.svg");
    }
    else {
        menuMobile.classList.add('open');
        overflowBody.classList.add('active');

        buttonMobile.setAttribute("src", "src/assets/menu-buguer-close.svg");
    }
}










