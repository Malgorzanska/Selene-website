$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicMainBullets: 1,
           // type: '',
        },
    });

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper = new Swiper('.swiper-slide', {
        speed: 400,
        spaceBetween: 200
    });

    // var swiper = new Swiper('.swiper-container', {
    //     // Default parameters
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //     // Responsive breakpoints
    //     breakpoints: {
    //         // when window width is <= 320px
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 10
    //         },
    //         // when window width is <= 480px
    //         480: {
    //             slidesPerView: 2,
    //             spaceBetween: 20
    //         },
    //         // when window width is <= 640px
    //         640: {
    //             slidesPerView: 3,
    //             spaceBetween: 30
    //         }
    //     }
    // })
});