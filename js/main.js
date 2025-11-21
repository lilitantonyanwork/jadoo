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
    const lang_selected = document.querySelector('.nav__lang--selected');
    const lang = document.querySelector('.nav__lang--list');
    const lang_item = document.querySelectorAll('.nav__lang--item');

    if (menu_btn) {
        menu_btn.addEventListener('click', function (e) {
            menu.classList.toggle('open');
            overlay.classList.toggle('open');
            body.classList.toggle('no-scroll');
        });
    }
    if (lang_selected) {
        lang_selected.addEventListener('click', function (e) {
            lang.classList.toggle('open');
            lang_selected.classList.toggle('open');
        });
    }
    if (lang_item) {
        lang_item.forEach((button) =>{
            button.addEventListener('click', function (e) {
                const clickedText = this.textContent.trim();
                lang_selected.textContent = clickedText;
                lang.classList.toggle('open');
                lang_selected.classList.toggle('open');
            });
        }
        )
    }

});