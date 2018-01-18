$(function(){
    setInterval(function(){
        if($('.banner1').css('display')=='inline'){
          $('.banner1').hide();
          $('.banner2').fadeIn(1000);
        }else if($('.banner2').css('display')=='inline'){
          $('.banner2').hide();
          $('.banner3').fadeIn(1000);
        }else if($('.banner3').css('display')=='inline'){
          $('.banner3').hide();
          $('.banner1').fadeIn(1000);
        }
    },3000);
});
