(function (Drupal, $, once) {
    Drupal.behaviors.mobile_header = {
      attach(context) {
        // The once call is wrapped in $() to allow the usual jQuery chaining.
        const $elements =  $(once('mobile_header', 'body', context));
        // `$elements` is always a jQuery object.
        $elements.each(processingCallback);
      }
    };
  
    function processingCallback() {
      $(document).ready(function (e) {
        var windowHeight, content;
        windowHeight = $(window).outerHeight();
        $('body').append(`<div class="menu__popover hidden" style="top: -${windowHeight}px;">
            <div class="mobile-menu-content hidden"></div>
            <div class="flex w-full z-10 absolute bottom-0 rotate-180">
                <div class="flex lg:basis-2/5 basis-1/5 h-[50px] bg-darkGray"></div>
                <div class="flex flex-1 relative">
                <div class="flex w-[40px] bg-darkGray absolute inset-0 top-left-cut left-[-2px]"></div>
                <div class="flex h-1/2 w-full bg-darkGray"></div>
                <div class="flex w-[40px] bg-darkGray absolute inset-0 ml-auto top-right-cut right-[-2px]"></div>
                </div>
                <div class="flex lg:basis-2/5 basis-1/5 h-[50px] bg-darkGray ml-auto"></div>
            </div>
        </div>`);
        
        function menu_animate(){
            setTimeout(() => {
                $('.menu__popover').animate({
                    top: 0
                }, 'fast');
                $('.site-logo path').css({fill: "#292d33", transition: "1.0s"});
            }, 100);
        }
        $('.mobile-menu').on('click', function(){
            $('.mobile-menu').addClass('hidden');
            $('.mobile-menu-close').removeClass('hidden');
            $('body').addClass('overflow-y-hidden');
            $('.menu__popover').removeClass('hidden');
            menu_animate();
            content = $('.header-menu').clone();
            content.removeClass('text-white').addClass('text-darkGray');
            $('.mobile-menu-content').append(content);
            $('.mobile-menu-content').fadeIn(1500);
        });
        $('.mobile-menu-close').on('click', function(){
            $('body').removeClass('overflow-y-hidden');
            $('.mobile-menu-close').addClass('hidden');
            $('.mobile-menu').removeClass('hidden');
            setTimeout(() => {
                $('.menu__popover').animate({
                    top: -windowHeight
                }, 'fast');
                $('.mobile-menu-content').hide().html('');
                $('.site-logo path').css({fill: "#fff", transition: "1.0s"});
            }, 100);
        });
      });
     
    }
  }(Drupal, jQuery, once));