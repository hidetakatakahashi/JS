$(function(){
    $('#modal-window').on('click', function() {
        $('.fadeLayer').fadeIn();
        $('.login-menu').fadeIn();
    });
    $('.fadeLayer').on('click', function() {
        $('.fadeLayer').fadeOut();
        $('.login-menu').fadeOut();
    });
});
