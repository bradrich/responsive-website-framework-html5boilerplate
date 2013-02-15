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

    });

})(window.jQuery);