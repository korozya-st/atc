//Mobile

// Car Logos Slider
    $(document).ready(function(){
      $(".car-logos-slider").slick({
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true,
          centerMode: true,
          focusOnSelect: true,
          pauseOnHover: false,
          variableWidth: true,
          responsive: [
                  {
                    breakpoint: 750,
                    settings: {
                      slidesToShow: 3,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                    }
                  }
                  ]
      });
    });

// PRODUCT-CARD HOVER IN/OUT
$('.product-card').click(function() {
  $(this).find('.product-card__img').addClass('is--onhover-in');
  $(this).find('.product-card__content').addClass('is--onhover-in');
  $(this).find('.product-card__content,div,.product-card-title').addClass('is--onhover-in');
  $(this).find('.product-card__content,div,.product-card-text').addClass('is--onhover-in');
});
$('.product-card').click(function() {
  $(this).find('.product-card__img').removeClass('is--onhover-in');
  $(this).find('.product-card__content').removeClass('is--onhover-in');
  $(this).find('.product-card__content,div,.product-card-title').removeClass('is--onhover-in');
  $(this).find('.product-card__content,div,.product-card-text').removeClass('is--onhover-in');
});
