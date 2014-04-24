(function ($) {
    "use strict";
    $(document).ready(function () {
        $(function () {

        
            /*===Revolution Slider===*/
            var revapi;
            revapi = jQuery('.tp-banner').revolution(
                {
                    delay:10000,
                    startwidth:1170,
                    startheight:500,
                    hideThumbs:10,
                    onHoverStop:"off",
                    fullWidth:"off",
                    fullScreen:"on",
                    navigationType:"none",
                    fullScreenOffsetContainer: ""
                });


            /*===Drop Down Menu===*/
            $('.top-nav').superfish();

            $('.scroll-down').smoothScroll({
                offset: -80,
                easing: 'easeInExpo',
                speed: 500,
                // $.fn.smoothScroll only: whether to prevent the default click action
                preventDefault: true
            });

            $('.navigation').waypoint('sticky', {
                stuckClass: 'sticky-nav'
            });

            /*===Magnific Popup===*/
           

            /*===Scroll Top===*/

            $.scrollUp({
                scrollName: 'scrollUp', // Element ID
                topDistance: '300', // Distance from top before showing element (px)
                topSpeed: 300, // Speed back to top (ms)
                animation: 'slide', // Fade, slide, none
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '<i class="fa fa-angle-double-up"></i>' // Text for element
            });
            $(' #scrollUp').smoothScroll({
                offset: -80,
                easing: 'easeInExpo',
                speed: 500,
                // $.fn.smoothScroll only: whether to prevent the default click action
                preventDefault: true
            });
            
            
        });




    });


})(jQuery);

