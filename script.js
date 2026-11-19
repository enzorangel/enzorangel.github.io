document.addEventListener('DOMContentLoaded', () => {
    // 1. Ativação do menu hambúrguer em dispositivos móveis
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });

    // 2. Alternância entre modo escuro e modo claro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
            if (themeIcon) {
                themeIcon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
            }
        });
    }
});