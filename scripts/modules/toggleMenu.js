const toggleMenu = (menu, humburgerMenu) => {
  menu.classList.toggle('menu-active');
  humburgerMenu.classList.toggle('humburger-menu-active');
};

export default toggleMenu;