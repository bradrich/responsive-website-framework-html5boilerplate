/* Author: Brad Richardson */

// Anomymous Function for cleaner javascript
(function ($) {

    $(document).ready(function() {

        // ************************* //
        // ----- Nav Drop Down ----- //
        // _________________________ //

        $('.nav-button').click(function(e){
            e.preventDefault();
            $('.nav-drop-container').slideToggle(300);
        });
        
        
        // ************************** //
        // ----- HS Symbol Spin ----- //
        // __________________________ //
        
        var hssymbol = $('#hssymbol');
        
        var rotation = function(){
            $(hssymbol).rotate({angle: 0, animateTo: 7200, duration: 3000, easing: $.easing.easeInOutElastic});
        }
        
        $(hssymbol).hover(function(){
            rotation();
        }, function(){
            // Do nothing
        });


        // ******************* //
        // ----- Buttons ----- //
        // ___________________ //

        $('.header-button').hover(function(){
            $(this).removeClass('header-button-gradient');
        }, function(){
            $(this).addClass('header-button-gradient');
        });
        $('.header-button').mousedown(function(){
            $(this).addClass('header-button-mousedown');
        });

        $('.content-buttons').hover(function(){
            $(this).removeClass('content-buttons-gradient');
        }, function(){
            $(this).addClass('content-buttons-gradient');
        });
        $('.content-buttons').mousedown(function(){
            $(this).addClass('content-buttons-mousedown');
        });

        $('.content-buttons-sub').hover(function(){
            $(this).removeClass('content-buttons-sub-gradient');
        }, function(){
            $(this).addClass('content-buttons-sub-gradient');
        });
        $('.content-buttons-sub').mousedown(function(){
            $(this).addClass('content-buttons-sub-mousedown');
        });

        $('.casestudy-button').hover(function(){
            $(this).removeClass('casestudy-button-gradient');
        }, function(){
            $(this).addClass('casestudy-button-gradient');
        });
        $('.casestudy-button').mousedown(function(){
            $(this).addClass('casestudy-button-mousedown');
        });
        
        
        // ************************** //
        // ----- Footer Buttons ----- //
        // __________________________ //

        $('.footer-buttons-container').show();

        // Show Site Map
        $('#sitemap-button').click(function(e){
            e.preventDefault();
            // if($('.contactus-container').is(":visible")){
            //     $('.contactus-container').fadeOut(100);
            // }
            $('.sitemap-container').fadeToggle();
        });

        // Show Contact Us
        // $('#contactus-button').click(function(e){
        //     e.preventDefault();
        //     if($('.sitemap-container').is(":visible")){
        //         $('.sitemap-container').fadeOut(100);
        //     }
        //     $('.contactus-container').slideToggle();
        // });

        // Click Through Contact Us Content to Map
        // $('.contactus-content').click(function(){
        //     $(this).fadeOut(200);
        //     $('.contactus-content-button').fadeIn(200);
        // });

        // Show Contact Us Content Again on Button Click
        // $('.contactus-content-button'). click(function(e){
        //     e.preventDefault();
        //     $(this).fadeOut(200);
        //     $('.contactus-content').fadeIn(200);
        // });

    });

})(window.jQuery);