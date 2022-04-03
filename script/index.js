const btnAspiranture = document.querySelector('.education__button_type_aspiranture');
const btnMagistarture = document.querySelector('.education__button_type_magistrature');
const containerAspiranture = document.querySelector('.education__container_type_aspiranture');
const containerMagistrature = document.querySelector('.education__container_type_magistrature');
const btnShare = document.querySelectorAll('.card__share');
const fieldShare = document.querySelectorAll('.card__social-items');

btnAspiranture.addEventListener('click', () => {
  btnAspiranture.classList.add('education__button_active');
  containerMagistrature.classList.add('education__container_visible');
  btnMagistarture.classList.remove('education__button_active');
  containerAspiranture.classList.remove('education__container_visible');
})

btnMagistarture.addEventListener('click', () => {
  btnMagistarture.classList.add('education__button_active');
  containerAspiranture.classList.add('education__container_visible');
  btnAspiranture.classList.remove('education__button_active');
  containerMagistrature.classList.remove('education__container_visible');
})

btnShare.forEach((element) => {
  element.addEventListener('click', showShare)
})

function showShare(evt) {
  fieldShare.forEach((element) => {
    element.classList.toggle('card__social-items_active')
  })
}

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is <= 480px
    490: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 33
    }
  },
  slidesPerGroup: 3,
  // And if we need scrollbar
});
