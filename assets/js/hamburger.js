// hamburger.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});
