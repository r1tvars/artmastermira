(function (Drupal, $, once) {
    Drupal.behaviors.fixed_header = {
      attach(context) {
        // The once call is wrapped in $() to allow the usual jQuery chaining.
        const $elements =  $(once('fixed_header', 'body', context));
        // `$elements` is always a jQuery object.
        $elements.each(processingCallback);
      }
    };
  
    function processingCallback() {
      $(document).ready(function () {
        console.log($('.group .is-active'));
        if($('.group .is-active').length){
          $('.group .is-active').next().removeClass('hidden group-hover:block').addClass('block');
        }
        var distance = $('.fixed-header').offset().top; 
        $(window).scroll(function () {
            if ($(window).scrollTop() >= distance) {
                // $('#navigation-sections').addClass("fixed-header");
                // alert('yoo');
            } else {
                // $('#navigation-sections').removeClass("fixed-header");
            }
        });
      });
    }

    
  }(Drupal, jQuery, once));