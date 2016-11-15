/*global $,jQuery*/
$(document).ready(function () {
    'use strict';
    $(".btn-open").on("click", function(){
        $(this).parent().parent().parent().next().next().next().addClass("show");
    })
    $(".more").on("click", function(){
        $(this).parent().parent().parent().removeClass("show");
    })
});