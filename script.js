document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('.hamburger');

    const menuCloseButton = document.querySelector('#menuClose');
    const menu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
        hamburgerButton.remove();
    });

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
        hamburgerButton.classList.add('open');
    })


})