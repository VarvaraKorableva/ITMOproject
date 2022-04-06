const sliderAllProjects = new Swiper('.slider__type_all-projects', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.slider__pages_type_all',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.slider__right-arrow_type_all',
    prevEl: '.slider__left-arrow_type_all',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const sliderGovernmentProjects = new Swiper('.slider__type_government-projects', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.slider__pages_type_gov',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.slider__right-arrow_type_gov',
    prevEl: '.slider__left-arrow_type_gov',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const sliderSpecialProjects = new Swiper('.slider__type_special-projects', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.slider__pages_type_spec',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.slider__right-arrow_type_spec',
    prevEl: '.slider__left-arrow_type_spec',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },  
});

const sliderDevProjects = new Swiper('.slider__type_dev-projects', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.slider__pages_type_dev',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.slider__right-arrow_type_dev',
    prevEl: '.slider__left-arrow_type_dev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },  
});

const tabs = document.querySelector('.projects__tabs');
const select = document.querySelector('.projects__select');
const projectsSliders = document.querySelectorAll('.swiper');
const paginationContainers = document.querySelectorAll('.slider__pagination');

tabs.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('projects__tab')) {
    const tabsArr = tabs.querySelectorAll('.projects__tab');
    tabsArr.forEach((tab) => {
      tab.classList.remove('projects__tab_active');
    });
    evt.target.classList.add('projects__tab_active');    
    tabs.classList.remove('projects__tabs_opened');
    select.classList.remove('projects__select_opened');
    select.textContent = evt.target.textContent;
  }

  projectsSliders.forEach((slider) => {
    slider.classList.remove('swiper_active');
    
  });

  const tabIndex = evt.target.dataset.tab;
  const thisSwiper = document.querySelector(tabIndex);
  thisSwiper.classList.add('swiper_active');

  paginationContainers.forEach((item) => {
    item.classList.remove('slider__pagination_active');
  });

  const paginationIndex = evt.target.dataset.pagination;
  const thisPagination = document.querySelector(paginationIndex);
  thisPagination.classList.add('slider__pagination_active');
});

const toggleTabsMobile = () => {
  select.classList.toggle('projects__select_opened');
  tabs.classList.toggle('projects__tabs_opened');
}

select.addEventListener('click', toggleTabsMobile);