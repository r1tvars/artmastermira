(function (Drupal, $, once) {
    Drupal.behaviors.language_switcher = {
      attach(context) {
        // The once call is wrapped in $() to allow the usual jQuery chaining.
        const $elements =  $(once('language_switcher', 'body', context));
        // `$elements` is always a jQuery object.
        $elements.each(processingCallback);
      }
    };
  
    function processingCallback() {
      $(document).ready(function (e) {
        $('.language').on('click', function(event){
          $('.language-block').toggleClass('hidden');
        });
        $(document).click(function(event) {
          if(!$(event.target).closest('.language').length){
            if($('.language-block').is(':visible')){
              $('.language-block').toggleClass('hidden');
            }
          }
        });
      });
    }
  }(Drupal, jQuery, once));