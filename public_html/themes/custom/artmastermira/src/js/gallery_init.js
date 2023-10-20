(function (Drupal, $, once) {
    Drupal.behaviors.gallery_init = {
      attach(context) {
        // The once call is wrapped in $() to allow the usual jQuery chaining.
        const $elements =  $(once('gallery_init', 'body', context));
        // `$elements` is always a jQuery object.
        $elements.each(processingCallback);
      }
    };
  
    function processingCallback() {
      jQuery(function() { 
        $("#art-gallery").nanogallery2({
          "thumbnailWidth": "auto",
          "thumbnailHeight": 400,
          imageTransition: "swipe",
          "thumbnailBorderVertical": 0,
          "thumbnailBorderHorizontal": 0,
          "thumbnailHoverEffect2": "imageScaleIn80",
        });
      })
    }

    
  }(Drupal, jQuery, once));