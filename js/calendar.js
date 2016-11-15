/*global $*/
$(document).ready(function () {
    'use strict';
    /*calendar*/
    var Dlast, D, DNlast, DNfirst, calendar, month;
    function Calendar(id, year, month) {
        Dlast = new Date(year, month + 1, 0).getDate();
        D = new Date(year, month, Dlast);
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay();
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay();
        calendar = '<tr>';
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        if (DNfirst !== 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
          for(var  i = 0; i < 6; i++) calendar += '<td>';
        }
        for(var  i = 1; i <= Dlast; i++) {
          if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today today_info">' + i;
          } else {
            calendar += '<td>' + i;
          }
          if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
            calendar += '<tr>';
          }
        }
        document.querySelector('#'+id+' tbody').innerHTML = calendar;
        document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
        document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
        document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
        if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница,             добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
            document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
            $('.today_info').hover(function(){
                $(this).append("<div class='today-info-block'><div class='today-info-block_tr'></div><div class='today-info-block-value'><span id='block_value'>15 июня 20016</span></div><div class='today-info-block-content'><p class='today-info-block-content-number'>12345</p><p class='today-info-block-content-name'>Автор</p><p class='today-info-block-content-theme'>Автоматизация технологических процессов</p></div</div>");
            },
            function(){
                $(this).children().remove();
            });
        }
    }
    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
    }
    // переключатель плюс месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
        Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
    };
    // ховер на дату
    $('.today_info').hover(function(){
        $(this).append("<div class='today-info-block'><div class='today-info-block_tr'></div><div class='today-info-block-value'><span id='block_value'>15 июня 20016</span></div><div class='today-info-block-content'><p class='today-info-block-content-number'>12345</p><p class='today-info-block-content-name'>Автор</p><p class='today-info-block-content-theme'>Автоматизация технологических процессов</p></div</div>");
    },
    function(){
        $(this).children().remove();
    });
    /*скрытие календаря*/
    $('.btn-toggle-calendar').on("click", function(){
        $('#calendar').toggleClass("calendar-open");
        
        if($('#calendar').hasClass("calendar-open")) {
            setTimeout(function(){
                $(".content-sitebar-calendar").toggleClass("no-overwlow");
            }, 200);
            $(this).empty();
            $(this).html("<i class='fa fa-angle-up'></i>");
        } else {
            $(".content-sitebar-calendar").removeClass("no-overwlow");
            $(this).empty();
            $(this).html("<i class='fa fa-angle-down'></i>");
        }
    });
});