/*global $*/
$(document).ready(function () {
    'use strict';
    $(".btn-open").on("click", function() {
        if ($('.filter-item-slider-panel').hasClass("hidden")) {
            $(this).html("<i class='fa fa-angle-up'></i>Дополнительно");
        } else {
            $(this).html("<i class='fa fa-angle-down'></i>Дополнительно"); 
        }
        $(this).next().toggleClass("hidden");
    });
});