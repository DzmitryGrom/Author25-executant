/*global $,jQuery*/
$(document).ready(function () {
    'use strict';

    var sliderOne, sliderFirst;
    
    
    /// filter
 
    sliderOne = jQuery("#Slider3").slider({
        from: 10,
        to: 60,
        scale: ['10', '20', '30', '40', '50', '60'],
        limits: false,
        step: 1,
        skin: "round_plastic"
    });
    

    sliderFirst = sliderOne.slider();
    

});