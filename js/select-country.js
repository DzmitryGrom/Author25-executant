/*global $*/
$(document).ready(function () {
    'use strict';
    function formatState (state) {
        if (!state.id) { 
            return state.text; 
        }
        var $state = $(
            '<span><img src="img/interface/country' + state.element.value + '.png" class="img-flag" /> ' + state.text +    '</span>'
        );
        return $state;
    };

    $(".js-example-templating").select2({
        templateResult: formatState,
        templateSelection : formatState
    });
});