import toggleMenu from './toggleMenu.js';
import closeMenu from './closeMenu.js';

const burgerMenu = () => {
    const menu = document.querySelector('.menu');
    const humburgerMenu = document.querySelector('.humburger-menu');

    humburgerMenu.onclick = () => toggleMenu(menu, humburgerMenu);

    menu.onclick = event => {
        const target = event.target;
        if (target.closest('.menu-list__item')) {
            closeMenu(menu, humburgerMenu);
        }
    };
};

export default burgerMenu;