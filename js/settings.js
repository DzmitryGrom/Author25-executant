/*global $*/
$(document).ready(function () {
    'use strict';
    $(".btn-blue").on("click", function(){
        event.preventDefault();
        $(this).removeClass("btn-blue");
        $(this).addClass("btn-gray");
        $(this).next().css("display", "inline-block");
    })
});