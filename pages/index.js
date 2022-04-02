const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    // spaceBetween: 32,
    // initialSlide: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        720: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
        }
    }
});



const buttonBurgerMenu = document.querySelector('.header__btn-menu');
const popupBurger = document.querySelector('.popup_type_burger-menu');
const buttonClosePopup = document.querySelector('.popup__btn-cross');

buttonBurgerMenu.addEventListener('click', () => {
    popupBurger.classList.add('popup_opened');
});

buttonClosePopup.addEventListener('click', () => {
    popupBurger.classList.remove('popup_opened');
});

console.log(123);