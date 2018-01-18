$(function(){
    $('#acMenu dt').on('click', function() {
        $(this).next().slideToggle();
    });
});
