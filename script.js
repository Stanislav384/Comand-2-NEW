document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-navigation a[href]');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

  