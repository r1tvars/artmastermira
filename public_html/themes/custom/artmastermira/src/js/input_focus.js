(function (Drupal, $, once) {
    Drupal.behaviors.input_focus = {
      attach(context) {
        // The once call is wrapped in $() to allow the usual jQuery chaining.
        const $elements =  $(once('input_focus', 'body', context));
        // `$elements` is always a jQuery object.
        $elements.each(processingCallback);
      }
    };
  
    function processingCallback() {
      $(document).ready(function (e) {
        function inputfunction(ajaxCall){
          setTimeout(() => {
            const form = $('#block-webforma .artmaster-contact-form');

            if(ajaxCall){
              form.find('input').each(function() {
                if($(this).val()){
                  $(this).prev('label').addClass('active-input');
                }
                if($(this).hasClass('error')){
                  $(this).prev('label').addClass('error-text-red');
                }
              })
              form.find('textarea').each(function() {
                if($(this).val()){
                  $(this).closest('div').prev('label').addClass('active-input')
                }
                if($(this).hasClass('error')){
                  $(this).closest('div').prev('label').addClass('error-text-red');
                }
              })
            }
            //TO DO: Pabeigt formas label animācijas un tad mobile menu bugu on resize
            form.find('input').on('focus click', function(e){
              e.stopPropagation();
              $(this).prev('label').addClass('active-input').removeClass('error-text-red');
            });
  
            form.find('input').on('blur', function(e){
              console.log($(this).val());
              if($(this).val() === ''){
                $(this).prev('label').removeClass('active-input');
              }
            });
  
            form.find('textarea').on('focus click', function(e){
              e.stopPropagation();
              $(this).closest('div').prev('label').addClass('active-input').removeClass('error-text-red');
            });
  
            form.find('textarea').on('blur', function(e){
              if($(this).val() === ''){
                $(this).closest('div').prev('label').removeClass('active-input');
              }
            });
  
            $(document).on('click', function () {
              form.find('label').each(function( index ) {
                if(!$(this).hasClass('active-input')){
                  $(this).prev('label').removeClass('active-input');
                  $(this).closest('div').prev('label').removeClass('active-input');
                }
              });
            });
          }, 600);
        }
        inputfunction();
        $(document).ajaxComplete(function(){
          inputfunction(true);
        });
      });
    }

    
  }(Drupal, jQuery, once));