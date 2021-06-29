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
	$(this).find('.product-card__img').toggleClass('is--onhover-in');
	$(this).find('.product-card__content').toggleClass('is--onhover-in');
	$(this).find('.product-card__content,div,.product-card-title').toggleClass('is--onhover-in');
	$(this).find('.product-card__content,div,.product-card-text').toggleClass('is--onhover-in');
});