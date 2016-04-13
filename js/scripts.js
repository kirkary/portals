$(document).ready(function(){
    $('.screenshot img').hover(function() {
        $(this).addClass('transition');
    
    }, function() {
        $(this).removeClass('transition');
    });
});