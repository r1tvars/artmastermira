(function (Drupal, $, once) {
    Drupal.behaviors.scroll_to_content = {
      attach(context) {
        // The once call is wrapped in $() to allow the usual jQuery chaining.
        const $elements =  $(once('scroll_to_content', 'body', context));
        // `$elements` is always a jQuery object.
        $elements.each(processingCallback);
      }
    };
  
    function processingCallback() {
      $(document).ready(function (e) {
        $('.scroll-to-content').on('click', function(){
          var target = $(this).data('content-target');
          $('html, body').animate({
            scrollTop: $(`#${target}`).offset().top
          }, 800);
        });
        $('.scroll-to-top').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
            scrollTop: "0",
          }, 800);
        });
      });
    }
  }(Drupal, jQuery, once));