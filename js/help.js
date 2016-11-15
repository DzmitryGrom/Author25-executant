/*global $*/
$(document).ready(function () {
    'use strict';
    $(".btn-more").on("click", function(){
        $(this).parent().next().toggleClass("show");
        if ($('.content-description-item-inner-more-info').hasClass("show")){
            $(this).empty().html("<i class='fa fa-angle-down'></i>");
        } else {
             $(this).empty().html("<i class='fa fa-angle-right'></i>");
        }
    })
});