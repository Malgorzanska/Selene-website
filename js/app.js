$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true
    });

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var mySwiperDetails = new Swiper('.swiper-slide', {
        speed: 400,
        spaceBetween: 200
    });


  $(window).scroll(function(){

      const windScroll = $(this).scrollTop();

      if(windScroll > $('.aboutus').offset().top - ($(window).height())/1.5){
      $('.aboutus h2').addClass('text__slide--right');
      $('.text__description').addClass('text__slide--right');
      $('.aboutus__building').addClass('text__slide--left');
      $('.img__title').addClass('text__slide--left');
      $('.smaller__text').addClass('text__slide--left');
    }

      if(windScroll > $('.inspirations').offset().top - ($(window).height())/1.5){
          $('.inspiration__foto-text').addClass('.text__slide--down');
      }

      if(windScroll > $('.inspirations').offset().top - ($(window).height())/1.5){
          $('.arrow-to-top').addClass('show-arrow');
      }
  });

    $('.arrow-to-top').on("click", function () {
        $("html").animate({ scrollTop: 0 }, "slow");
    });


  // inspirations toggle text

  let $inspirationFoto = $('.inspirations__foto');

    $inspirationFoto.each(function (index) {
        $(this).on('click', function () {
            $(this).children('span').toggle('span');
            $(this).children('p').toggle('p');
        })
    });

    // latest projects slider

    let showMoreBtn =  $('.description__wrapper .btn');
    let showMoreContent = $('.show-span');

    showMoreBtn.on('click', function() {
        showMoreContent.toggleClass('show-more');
    });

    // form
    let contactUsBtn = $('.form__nav .nav-item-form');
    let phoneBtn = $('.form__nav .nav-item-phone');
    let emailBtn = $('.form__nav .nav-item-mail');

    let form = $('.form');
    let phoneInfo = $('.phone-info');
    let emailInfo = $('.email-info');


    contactUsBtn.on('click', function() {
        form.addClass('is-visible');
        phoneInfo.removeClass('is-visible');
        emailInfo.removeClass('is-visible');

    });

    phoneBtn.on('click', function() {
        phoneInfo.addClass('is-visible');
        form.removeClass('is-visible');
        emailInfo.removeClass('is-visible');
    });

    emailBtn.on('click', function () {
        emailInfo.addClass('is-visible');
        form.removeClass('is-visible');
        phoneInfo.removeClass('is-visible');
    });

    //form validation

    $('form').on('submit', function(ev) {
         ev.preventDefault();

        let $name = $('#name').val();
        let $phone = $('#phone').val();
        let $mail = $('#mail').val();

        $(".error").remove();

        if ($name.length < 2) {
            $(".input-name").after("<p class='error'> Please write your name</p>");
        }

        if ($phone.length < 5) {
            $(".input-phone").after("<p class='error'> Please write your phone</p>");
        }

        if ($mail.length < 5) {
            $(".input-mail").after("<p class='error'> Please write your mail</p>");
        }

    });




//     $('form').on('submit', function(ev){
//         ev.preventDefault();
//         let $name = $('#name').val();
//         let $thanksNote = $(`
//         <div class="thanks__box">
//         <p class="thanks-note">Thank you for your message ${$name}. We will contact you shortly. Have a lovely day!</p>
// </div>
//     `);
//         form.append($thanksNote);
//     });

});




