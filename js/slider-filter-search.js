/*global $,jQuery*/
$(document).ready(function () {
    'use strict';

    var sliderTwo, sliderSecond;
    
    
    /// filter
 
    sliderTwo = jQuery("#Slider4").slider({
        from: 0,
        to: 100000,
        scale: ['0', '500', '1000', '', '', '', '', '', '', '', '', '', '', '100000'],
        limits: false,
        step: 1,
        skin: "round_plastic"
    });
    

    sliderSecond = sliderTwo.slider();
    

});