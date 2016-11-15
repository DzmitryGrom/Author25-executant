/*global $,jQuery*/
$(document).ready(function () {
    'use strict';

    var sliderTwo, sliderThree, sliderSecond;
    
    
    /// filter
 
    sliderTwo = jQuery("#Slider4").slider({
        from: 0,
        to: 100000,
        scale: ['0', '500', '1000', '', '5000', '', '', '10000', '', '25000', '', '50000', '', '&#8734'],
        limits: false,
        step: 1,
        skin: "round_plastic"
    });
    

    sliderSecond = sliderTwo.slider();
    
    sliderThree = jQuery("#Slider3").slider({
        from: 0,
        to: 35,
        scale: ['0', '', '', '', '', '', '', '7', '', '', '', '10', '', '', '',  '14', '', '', '', '', '', '', '21', '', '', '', '', '', '', '28', '', '', '31', '&#8734'],
        limits: false,
        step: 1,
        skin: "round_plastic"
    });
    

    sliderSecond = sliderThree.slider();
    

});