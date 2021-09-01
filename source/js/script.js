const menuOpenButton = document.querySelector('.main-nav__open');
const menuCloseButton = document.querySelector('.main-nav__close');
const mainNavMenu = document.querySelector('.main-nav__menu');

menuOpenButton.addEventListener('click', () => {
  mainNavMenu.classList.add('main-nav__menu--active');
});

menuCloseButton.addEventListener('click', () => {
  mainNavMenu.classList.remove('main-nav__menu--active');
});
