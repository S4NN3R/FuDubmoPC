function init() {
    window.onscroll = function() {
        if (window.pageYOffset >= 184) {
            $("nav.navbar").addClass("navbar-fixed");
        }
        if (window.pageYOffset <= 184) {
            $("nav.navbar").removeClass("navbar-fixed");
        }
    }

    new Swiper("#main", {
        loop: true,
        speed: 1000,

        pagination: {
            el: '#main .swiper-pagination',
        },

        navigation: {
            nextEl: '#main .swiper-button-next',
            prevEl: '#main .swiper-button-prev',
        },
    });

    new Swiper(".swiper-list", {
        loop: false,
        speed: 1000,
        spaceBetween: 20,
        slidesPerView: 'auto',

        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 3
            },
            720: {
                slidesPerView: 4
            },
            920: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 'auto'
            },
        },

        pagination: {
            el: '.swiper-list .swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-list .swiper-button-next',
            prevEl: '.swiper-list .swiper-button-prev',
        },
    });
}

$(document).ready(init);

$(function() {
    var heightrovniy = window.innerHeight
    document.documentElement.clientHeight
    document.body.clientHeight;
    $('.min-height-all').css("min-height", heightrovniy - 124);
  });