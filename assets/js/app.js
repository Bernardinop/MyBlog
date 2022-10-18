$(document).ready(function(){
    $(".carousel").carousel({
        interval: 8000
    });
});

$(function(){
    $('#btn-input').click(function(){
        $('input').addClass('selector');
    });
});