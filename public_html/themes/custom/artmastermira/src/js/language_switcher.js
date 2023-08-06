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
        $('span.language').on('click', function(event){
          $('.language-block').toggleClass('hidden');
        });
      });
    }
  }(Drupal, jQuery, once));