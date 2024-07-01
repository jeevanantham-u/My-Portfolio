const menuIcon = document.querySelector(".header__main-ham-menu-count");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add(".header__main-ham-menu-count--active");
});