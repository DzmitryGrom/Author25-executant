/*global $*/
$(document).ready(function () {
    'use strict';
    $(".js-example-basic-single").select2();
    
    $(".checkbox-dynamic").on("click", function(){
        $(this).toggleClass("checked");
    })
    $(".fa-question-circle").on("click", function(){
        $(this).next().toggleClass("hidden");
    })
    $(".open-content").on("click", function(){
        $(".content-form-orders-list-item_select-inner-list-item_hidden-content").addClass("show");
        $(this).parent().addClass("hidden");
    })
    $(".content-form-orders-special-offer-inner-question").on("click", function(){
        $(".content-form-orders-special-offer-inner-bottom-list").toggleClass("show");
        if ($('.content-form-orders-special-offer-inner-bottom-list').hasClass("show")){
            $(this).empty();
            $(this).html("Всё понятно");
        } else {
            $(this).empty();
            $(this).html("Что это такое?");
        }
    })

});