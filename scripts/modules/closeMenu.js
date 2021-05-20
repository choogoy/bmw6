const closeMenu = (menu, humburgerMenu) => {
  menu.classList.remove('menu-active');
  humburgerMenu.classList.remove('humburger-menu-active');
};

export default closeMenu;