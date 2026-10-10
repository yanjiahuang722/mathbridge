'use strict';
const menuButton = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    }
  });
}
