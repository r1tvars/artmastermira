(function (Drupal, $) {
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
        const breakPoint = 768;
        var resizeTimer, content;
        var windowHeight = $(window).outerHeight();
        var windowWidth = $(window).outerWidth(true);

        function checkWindow() {
            windowWidth = $(window).outerWidth(true);
        }
        $(window).on('resize', function(){
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                checkWindow();
                if($(window).outerHeight() !== windowHeight){
                    $('.menu__popover').css('top',`-${$(window).outerHeight()+200}px`);
                }
                if( windowWidth > breakPoint){
                    $('body').removeClass('overflow-y-hidden');
                    setTimeout(() => {
                        $('.site-logo path').css({fill: "#fff", transition: "1.0s"});
                    }, 100);
                    $('.mobile-menu-close').addClass('hidden');
                    $('.mobile-menu').removeClass('hidden');
                    $('.menu__popover').remove();
                }
            }, 20);
        });
        
        function menu_animate(){
            setTimeout(() => {
                $('.menu__popover').animate({
                    top: 0
                }, 300);
                $('.site-logo path').css({fill: "#292d33", transition: "1.0s"});
            }, 100);
        }
        $('.mobile-menu').on('click', function(){
            $('body').append(`<div class="menu__popover hidden" style="top: -${windowHeight+200}px;">
                <div class="mobile-menu-content hidden"></div>
                <div class="mobile-menu-bottom flex w-full z-10 absolute bottom-0 rotate-180 hidden">
                    <div class="flex lg:basis-2/5 basis-1/5 h-[50px] bg-darkGray"></div>
                    <div class="flex flex-1 relative overflow-hidden">
                    <div class="flex w-[40px] bg-darkGray absolute inset-0 top-left-cut left-[-2px] pt-[52px]"></div>
                    <div class="flex h-1/2 w-full bg-darkGray"></div>
                    <div class="flex w-[40px] bg-darkGray absolute inset-0 ml-auto top-right-cut right-[-2px] pt-[52px]"></div>
                    </div>
                    <div class="flex lg:basis-2/5 basis-1/5 h-[50px] bg-darkGray ml-auto"></div>
                </div>
            </div>`);
            $('.mobile-menu').addClass('hidden');
            $('.mobile-menu-close').removeClass('hidden');
            $('.mobile-menu-bottom').removeClass('hidden');
            $('body').addClass('overflow-y-hidden');
            $('.menu__popover').removeClass('hidden');
            $('.menu__popover').addClass('active');
            menu_animate();
            content = $('.header-menu').clone();
            content.removeClass('text-white').addClass('text-darkGray');
            $('.mobile-menu-content').append(content);
            $('.mobile-menu-content').fadeIn(1500);
        });
        $(document).on('click', '.scroll-to-about-mobile, .mobile-menu-close', function(){
            $('body').removeClass('overflow-y-hidden');
            $('.mobile-menu-close').addClass('hidden');
            $('.mobile-menu').removeClass('hidden');
            setTimeout(() => {
                $('.menu__popover').animate({
                    top: -windowHeight-200
                }, 300);
                $('.mobile-menu-content').hide().removeClass('active').html('');
                $('.site-logo path').css({fill: "#fff", transition: "1.0s"});
                $('.menu__popover').addClass('hidden');
            }, 100);
            setTimeout(() => {
                $('.mobile-menu-bottom').addClass('hidden');
                $('.menu__popover').remove();
            }, 300);
        });
        $(document).on('click', '.scroll-to-about-mobile', function(){
            $('html, body').animate({
                scrollTop: $('#block-webforma').offset().top
            }, 800);
        });
      });
     
    }
  }(Drupal, jQuery, once));