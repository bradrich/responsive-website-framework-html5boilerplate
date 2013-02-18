/* Author: Brad Richardson */

// Anomymous Function for cleaner javascript
(function ($) {

    $(document).ready(function() {

        // ************************* //
        // ----- Nav Drop Down ----- //
        // _________________________ //

        $('.nav-button').click(function() {
            $('.nav-drop-tail').fadeToggle(300);
            $('.nav-drop-container').slideToggle(300);
        });
        
        
        // ************************** //
        // ----- HS Symbol Spin ----- //
        // __________________________ //
        
        var hssymbol = $('#hssymbol');
        
        var rotation = function (){
            $(hssymbol).rotate({angle: 0, animateTo: 7200, duration: 3000, easing: $.easing.easeInOutElastic});
        }
        
        $(hssymbol).hover(function(){
            rotation();
        }, function(){
            // Do nothing
        });

    });

})(window.jQuery);