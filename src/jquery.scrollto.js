/**
 * @name jQuery plugin to scroll document.
 * @author asolovyov (Lexa-san)
 * @description Scroll page to context object position.
 * @version 1.0.0
 */

(function($) {
    $.fn.LS_scrollTo = function(options) {

        var options = $.extend({
            shift: 0, // shift for top position
            speed: 1100 // animation speed
        }, options);

        try {
            this.each(function() {

                var dest = parseInt($(this).offset().top) + parseInt(options.shift);
                if (dest > 0) {
                    $('html, body').animate({ scrollTop: dest }, parseInt(options.speed));
                }

            });

        } catch (e) {
            console.error(e.message);
        }
        return this;
    }
}(jQuery));
