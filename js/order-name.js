/*global $,jQuery*/
$(document).ready(function () {
    'use strict';
    $(".btn-open-list").on("click", function () {
        $(this).parent().next().toggleClass("hidden");
        if (!$('.content-order-name-description-list').hasClass("hidden")) {
            $(this).empty();
            $(this).html("Скрыть");
        } else {
            $(this).empty();
            $(this).html("Подробнее");
        }
    });
    $(".btn-message").on("click", function () {
        $(this).parent().next().toggleClass("active");
    });
    $(".more").on("click", function () {
        $(this).parent().parent().toggleClass("active");
        if ($('.content-order-name-offers-list-item-author-info-bottom-panel-info').hasClass("active")) {
            $(this).html("Свернуть");
        } else {
            $(this).html("Подробнее");
        }
    });
    $(".checkbox-dynamic").on("click", function () {
        $(this).toggleClass("checked");
    });
});