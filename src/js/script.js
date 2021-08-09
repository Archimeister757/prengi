window.addEventListener('DOMContentLoaded', () => {
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
});

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
