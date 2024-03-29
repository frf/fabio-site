(function ($) {
    "use strict";
    $(document).ready(function () {
        $(function () {
         
           /*===iso tope blog start===*/

            var $container = $('.blog-container'),
                colWidth = function () {
                    var w = $container.width(),
                        columnNum = 1,
                        columnWidth = 0;
                    if (w > 1200) {
                        columnNum = 3;
                    } else if (w > 900) {
                        columnNum = 3;
                    } else if (w > 600) {
                        columnNum = 3;
                    } else if (w > 300) {
                        columnNum = 1;
                    }
                    columnWidth = Math.floor(w / columnNum);
                    $container.find('.item').each(function () {
                        var $item = $(this),
                            multiplier_w = $item.attr('class').match(/item-w(\d)/),
                            multiplier_h = $item.attr('class').match(/item-h(\d)/),
                            width = multiplier_w ? columnWidth * multiplier_w[1] - 20 : columnWidth - 20;
                        //                                height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-4 : columnWidth*0.5-4;
                        $item.css({
                            width: width
                            //                            height: height
                        });
                    });
                    return columnWidth;
                },
                isotope = function () {
                    $container.isotope({
                        resizable: false,
                        itemSelector: '.item',
                        masonry: {
                            columnWidth: colWidth()
                            //                            gutterWidth: 10
                        }
                    });
                };
            isotope();
            $(window).smartresize(isotope);
            $(window).load(isotope);

            /*===iso tope blog end===*/
        });

    });

})(jQuery);
