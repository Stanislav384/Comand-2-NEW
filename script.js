document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-navigation a[href]');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
const btn = document.querySelector('.dropbtn');
const menu = document.querySelector('.dropdown-content');

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
  menu.style.display = 'none';
});

  