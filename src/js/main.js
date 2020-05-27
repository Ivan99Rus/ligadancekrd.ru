$(document).ready(function () {
  const scheduleBtn = $('.schedule__btn'),
    tableSecond = $('.schedule__table-second');

  scheduleBtn.on('click', () => {
    scheduleBtn.text() == 'Скрыть' ? hideTable() : viewTable();
  })

  const viewTable = () => {
    tableSecond.fadeIn('slow');
    scheduleBtn.text('Скрыть');
  };

  const hideTable = () => {
    tableSecond.fadeOut('slow');
    scheduleBtn.text('Узнать больше');
  };

  $(".menu__nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - $('.header').height();
    
      $('body,html').animate({scrollTop: top}, 1500);
  });
  

  const modal = $('.modal'),
  modalBtn = $('[data-toggle="modal"]'),
  closeBtn = $('.modal__close');

  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  $(document).on('keydown', (event) => {
    if (event.key === 'Escape')
      modal.removeClass('modal--visible');
  });

  $(document).on('click', (event) => {
    let target = event.target;

    if ($(target).hasClass('modal--visible'))
      modal.toggleClass('modal--visible');
  });



  var aboutSlider = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  var progressSlider = new Swiper ('.progress__slider-container', {
    loop: true,
    navigation: {
      nextEl: '.progress__slider-button-next',
      prevEl: '.progress__slider-button-prev',
    }
  })

  const next = $('.swiper-button-next'),
    prev = $('.swiper-button-prev'),
    bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);


  //slick
  $('.progress__slider').slick({
    dots: true,
    prevArrow: '<button class="slick-prevArrow"></button>',
    nextArrow: '<button class="slick-nextArrow"></button>'
  });
});