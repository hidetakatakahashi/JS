$(function(){
    $('#hamburger-open').on('click', function() {
        $('.hamburger-menu').animate({width:'toggle'},'slow');
        $('.fadeLayer2').fadeIn();
    });
    $('.fadeLayer2').on('click', function() {
        $('.fadeLayer2').fadeOut();
        $('.hamburger-menu').animate({width:'toggle'},'slow');
    });
});
