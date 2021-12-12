window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Меню

    const menu = document.querySelector('.promo__menu'),
    menuItem = document.querySelectorAll('.promo__menu-item'),
    hamburger = document.querySelector('.humburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('humburger_active');
        menu.classList.toggle('promo__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('humburger_active');
            menu.classList.toggle('promo__menu_active');
        });
    });

    // Слайдер

    $(document).ready(function(){
        $('.carousel__inner').slick({
            speed: 500,
            infinite: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left_arrow.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right_arrow.png"></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                    }
                }
            ]
        });
    });

    // Pageup

    (function() {

        const goTopBtn = document.querySelector('.pageup');
      
        window.addEventListener('scroll', trackScroll);
        goTopBtn.addEventListener('click', backToTop);
      
        function trackScroll() {
          const scrolled = window.pageYOffset;
          const coords = document.documentElement.clientHeight;
      
          if (scrolled > coords) {
            goTopBtn.classList.add('pageup-show');
          }
          if (scrolled < coords) {
            goTopBtn.classList.remove('pageup-show');
          }
        }
      
        function backToTop() {
          if (window.pageYOffset > 0) {
            window.scrollTo({ 
              top: 0, 
              behavior: 'smooth'
            });
          }
        }
      
    })();

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('[data-close]'),
          modal = document.querySelector('.overlay');

    function modalShow() {
      modal.classList.add('show');
    }

    function modalHide() {
      modal.classList.remove('show');
    }

    modalTrigger.forEach(b => {
      b.addEventListener('click', modalShow);
    });

    modalClose.addEventListener('click', modalHide);

    console.log(modalTrigger, modalClose, modal);
});


