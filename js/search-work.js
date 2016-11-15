/*global $*/
$(document).ready(function () {
    'use strict';
    $(".btn-open").on("click", function() {
        $(this).next().toggleClass("hidden");
        if (!$('.content-search-list-item__filter-slider-panel').hasClass("hidden")) {
            $(this).empty();
            $(this).html("<i class='fa fa-angle-up'></i>Дополнительно");
        } else {
            $(this).empty();
            $(this).html("<i class='fa fa-angle-down'></i>Дополнительно"); 
        }
    });
});