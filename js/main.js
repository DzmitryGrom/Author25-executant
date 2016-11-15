/*global $*/
$(document).ready(function () {
    'use strict';
    /*calendar*/
    
    /*pop-up notification*/
    $(".navbar-info-item__notifications").on("click", function(){
        $('.pop-up-notification__info').toggleClass("show");
        $(this).find(".pop-up_tr").toggleClass("show");
    });
    $(".navbar-info-item__message").on("click", function(){
        $('.pop-up-notification__message').toggleClass("show");
        $(this).find(".pop-up_tr").toggleClass("show");
    });
    $(".navbar-info-item__user").on("click", function(){
        $('.pop-up__user').addClass("show");
        $(this).find(".pop-up_tr__user").addClass("show");
    });
    $(".btn-pop-up__user-exit").on("click", function(){
        $('.pop-up__user').removeClass("show");
        $('.pop-up_tr__user').removeClass("show");
    });
    $(".link-more").on("click", function() {
        $(this).parent().prev().toggleClass("hidden");
    });
    $(".link-more-next").on("click", function() {
        $(this).parent().next().toggleClass("hidden");
    });
    $(document).mouseup(function (e) {
        var toggleMenu = $(".pop-up-notification");
        if (!toggleMenu.is(e.target) && toggleMenu.has(e.target).length === 0) {
            toggleMenu.removeClass("show");
            $(".pop-up_tr").removeClass("show");
        }
    });
    if($(".pop-up-info").hasClass("show")) {
        $(".pop-up__shadow").addClass("show");
    } else {
        $(".pop-up__shadow").removeClass("show");
    }
    
});