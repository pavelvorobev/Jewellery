(function () {
  const menuToggleButton = document.querySelector('.header__toggle-button');
  const headerTop = document.querySelector('.header__top');
  const mainNavMenu = document.querySelector('.header__main-nav');
  const loginButton = document.querySelectorAll('.user-nav__item-login');
  const modals = document.querySelector('.modals');
  const modalEmailInput = document.querySelector('#email');
  const loginForm = document.querySelector('.login-form');
  const loginFormClose = document.querySelector('.login-form__close-button');
  const body = document.querySelector('.body');

  headerTop.classList.remove('header__top--active');
  headerTop.classList.remove('header__top--nojs');
  mainNavMenu.classList.remove('header__main-nav--active');
  mainNavMenu.classList.remove('header__main-nav--nojs');

  menuToggleButton.addEventListener('click', () => {
    if (body.style.overflow === 'hidden') {
      body.style.overflow = 'visible';
      headerTop.classList.toggle('header__top--active');
      mainNavMenu.classList.toggle('header__main-nav--active');
    } else {
      headerTop.classList.toggle('header__top--active');
      mainNavMenu.classList.toggle('header__main-nav--active');
      body.style.overflow = 'hidden';
    }


  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023.2) {
      headerTop.classList.remove('header__top--active');
      mainNavMenu.classList.remove('header__main-nav--active');
      body.style.overflow = 'visible';
    }
  });

  const onEscClose = (e) =>{
    if (e.key === 'Escape' || e.key === 'Esc') {
      e.preventDefault();
      document.body.style.overflow = 'visible';
      modals.classList.remove('visible');
      modals.classList.add('hidden');
      document.removeEventListener('keydown', onEscClose);
    }
  };

  loginForm.addEventListener('submit', () => {
    localStorage.setItem('email', modalEmailInput.value);
  });

  loginButton.forEach(((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.style.overflow = 'hidden';
      modals.classList.remove('hidden');
      modals.classList.add('visible');
      modalEmailInput.focus();

      modals.addEventListener('transitionend', () => {
        modalEmailInput.focus();
      });

      modals.addEventListener('click', (e) => {
        if (e.target.closest('.modals__login-form') === null) {
          document.body.style.overflow = 'visible';
          modals.classList.remove('visible');
          modals.classList.add('hidden');
        }
      });

      document.addEventListener('keydown', onEscClose);
    });
  }));

  loginFormClose.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    modals.classList.remove('visible');
    modals.classList.add('hidden');
  });

  if (!window.location.toString().includes('catalog.html')) {
    const questionsToggles = document.querySelectorAll('.questions__item');
    const questionsList = document.querySelector('.questions__list');

    questionsList.classList.remove('questions__list--nojs');

    // eslint-disable-next-line
    let swiper = new Swiper('.novelty__slider', {
      simulateTouch: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          pagination: {
            type: 'fraction',
            renderFraction: function (currentClass, totalClass, index, total) {
              return '<span class="' + currentClass + '">0 ' + index + ' </span>' +
                  ' of ' +
                  '<span class="' + totalClass + '">0 ' + total + ' </span>';
            },
          }
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          pagination: {
            type: 'bullets',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          }
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            type: 'bullets',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          }
        }
      }
    });

    questionsToggles.forEach((item) => {
      item.classList.add('closed');

      item.addEventListener('click', () => {
        if (item.classList.contains('closed')) {
          questionsToggles.forEach((toggle) => {
            if (toggle.classList.contains('opened')) {
              toggle.classList.remove('opened');
              toggle.classList.add('closed');
            }
          });

          item.classList.remove('closed');
          item.classList.add('opened');

        } else if (item.classList.contains('opened')) {
          item.classList.remove('opened');
          item.classList.add('closed');
        }
      });
    });
  }

  if (window.location.toString().includes('catalog.html')) {
    const filterToggles = document.querySelectorAll('.filters__fieldset');
    const filters = document.querySelector('.filters');
    const filtersForm = document.querySelector('.filters__form');
    const filtersOpenButton = document.querySelector('.goods__filters-button--open');
    const filtersCloseButton = document.querySelector('.filters__button--close');

    filtersForm.classList.remove('filters__form--nojs');

    filtersOpenButton.addEventListener('click', () => {
      filters.classList.toggle('visible');
    });

    filtersCloseButton.addEventListener('click', () => {
      filters.classList.toggle('visible');
    });


    window.addEventListener('resize', () => {
      if (window.innerWidth > 1023.2) {
        filters.classList.remove('visible');
      }
    });

    filterToggles.forEach((item) => {
      item.classList.add('closed');

      item.addEventListener('click', (e) => {
        if (e.target.closest('.filters__title') || e.target.closest('.filters__toggle-button')) {
          if (item.classList.contains('closed')) {
            item.classList.remove('closed');
            item.classList.add('opened');

          } else if (item.classList.contains('opened')) {
            item.classList.remove('opened');
            item.classList.add('closed');
          }
        }
      });
    });
  }

})();
