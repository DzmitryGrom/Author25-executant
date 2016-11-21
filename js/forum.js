/*global $*/
$(document).ready(function () {
    'use strict';
    
    $(".btn-add-list").on("click", function(){
        $(this).parent().next().removeClass("hidden");
        $(this).parent().addClass("hidden");
    })
    $(".btn-close-more").on("click", function(){
        $(this).parent().parent().parent().addClass("hidden");
        $(".btn-add-list").parent().removeClass("hidden");
    })
    
});