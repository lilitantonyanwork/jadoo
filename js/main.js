const swiper = new Swiper('.swiper', {
    direction: 'vertical',   // ← ключевой параметр
    spaceBetween: 0,
    mousewheel: false,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },
    allowTouchMove: false
});
document.addEventListener('DOMContentLoaded', () => {
    const menu_btn = document.querySelector('.btn__menu');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    if (menu_btn) {
        menu_btn.addEventListener('click', function (e) {
            menu.classList.toggle('open');
            overlay.classList.toggle('open');
            body.classList.toggle('no-scroll');
        });
    }

});