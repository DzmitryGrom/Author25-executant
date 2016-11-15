/*global $*/
$(document).ready(function () {
    'use strict';
    $(".read-more").on("click", function(){
        $(this).prev().prev().removeClass("text-hidden");
        $(this).addClass("hidden");
    })
});