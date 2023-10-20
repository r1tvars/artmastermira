(function (Drupal, $, once) {
    Drupal.behaviors.gallery_swiper = {
      attach(context) {
        // The once call is wrapped in $() to allow the usual jQuery chaining.
        const $elements =  $(once('gallery_swiper', 'body', context));
        // `$elements` is always a jQuery object.
        $elements.each(processingCallback);
      }
    };
  
    function processingCallback() {
      $('.swiper-wrapper').slick();
    }

    
  }(Drupal, jQuery, once));