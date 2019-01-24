$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true
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


});
//
// var inspirationText = document.querySelectorAll('.inspiration__foto-text');
// var inspirationSection = document.querySelectorAll('.inspirations__foto');
//
//
//
// inspirationSection.addEventListener('click', function(ev) {
//     inspirationText.style.display = 'none';
// });
