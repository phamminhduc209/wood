;(function($) {
    "use strict";     
    
    function revolutionSliderActiver () {
        if ($('.bannercontainer #rev_slider').length ) {
            $("#rev_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                navigation: {
                    arrows:{enable:true} 
                }, 
                gridwidth:1170,
                gridheight:740
            })
        }
    }
    
    
})(jQuery)