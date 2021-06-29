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
$('.product-card').mouseenter(function() {
	$(this).find('.product-card__img').addClass('is--onhover-in');
	$(this).find('.product-card__content').addClass('is--onhover-in');
	$(this).find('.product-card__content,div,.product-card-title').addClass('is--onhover-in');
	$(this).find('.product-card__content,div,.product-card-text').addClass('is--onhover-in');
});
$('.product-card').mouseleave(function() {
	$(this).find('.product-card__img').removeClass('is--onhover-in');
	$(this).find('.product-card__content').removeClass('is--onhover-in');
	$(this).find('.product-card__content,div,.product-card-title').removeClass('is--onhover-in');
	$(this).find('.product-card__content,div,.product-card-text').removeClass('is--onhover-in');
});

// HERO Interactive Video
      // Declare end
      let end;
      // Reference the parent tag of all buttons
      const btns = document.querySelector('#vid-btns-wrapper');
      // Reference the video
      const vid = document.querySelector('#vid-test');
      // Register the click event to btns-wrapper.vid-btn
      btns.addEventListener('click', frag);
      // Register the timeupdate event to video.vid
      vid.addEventListener('timeupdate', stop);
      // Pass Event Object
      function frag(event) {
        // Event.target always points to the clicked button, time-updated video, etc.
        const clicked = event.target;
        // if clicked tag is an <a>...
        if (clicked.matches('div')) {
          // Get the value of its data-start and convert it to a real number
          let start = Number(clicked.dataset.start);
          // Set end to the value of it data-end and convert it to a real number
          end = Number(clicked.dataset.end);
          // Set video current time to value of start
          vid.currentTime = start;
          // Play video
          vid.play();
        } else if (clicked.matches('a')) {
          // Get the value of its data-start and convert it to a real number
          let start = Number(clicked.dataset.start);
          // Set end to the value of it data-end and convert it to a real number
          end = Number(clicked.dataset.end);
          // Set video current time to value of start
          vid.currentTime = start;
          // Play video
          vid.play();
        }
        return false;
      }
      // Pass Event Object
      function stop(event) {
        // Reference the video
        const vid = event.target;
        // if it is a <video>...
        if (vid.matches('video')) {
          // and if that video time is currently at or past the value of end...
          if (vid.currentTime >= end) {
            // Pause video
            vid.pause();
          }
        }
        // End function
        return false;
      }