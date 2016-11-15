/*global $*/
$(document).ready(function () {
    'use strict';
    $('.datepicker').datepicker({
        format: 'mm.dd.yyyy',
        startDate: '-3d',
        language: 'ru'
    });
});