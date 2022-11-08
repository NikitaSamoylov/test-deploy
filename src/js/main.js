import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const burgerButton = document.querySelector('.header__content > img');
const menuList = document.querySelector('.nav__list');
const navServicesList = document.querySelector('.services__list');
const mainLogo = document.querySelector('.header__logo');

burgerButton.addEventListener('click', () => {

if (menuList.classList.contains('nav__list--open')) {
    menuList.classList.remove('nav__list--open');
    navServicesList.classList.remove('services__list--open');
    mainLogo.classList.remove('header__logo--hidden');
    burgerButton.src = "../img/close-nav-icon.png";
    burgerButton.src = "../img/burger-icon.png";
}else {
    menuList.classList.add('nav__list--open');
    navServicesList.classList.add('services__list--open');
    mainLogo.classList.add('header__logo--hidden');
    burgerButton.src = "../img/close-nav-icon.png";
}
})

