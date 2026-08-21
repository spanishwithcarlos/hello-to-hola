const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#mobile-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.querySelector('.sr-only').textContent = open ? 'Open menu' : 'Close menu';
    menu.hidden = open;
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.sr-only').textContent = 'Open menu';
      menu.hidden = true;
    }
  });
}
