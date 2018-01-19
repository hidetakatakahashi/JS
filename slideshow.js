$(function(){
    var timer = 0;
    // オート系
    timer = setInterval(function(){
        $('.change-banner img').removeClass('select-banner');
        if($('.banner1').css('display')=='inline'){
          $('.banner1').hide();
          $('.banner2').fadeIn(1000);
          $('.change-banner img').eq(1).addClass('select-banner');
        }else if($('.banner2').css('display')=='inline'){
          $('.banner2').hide();
          $('.banner3').fadeIn(1000);
          $('.change-banner img').eq(2).addClass('select-banner');
        }else if($('.banner3').css('display')=='inline'){
          $('.banner3').hide();
          $('.banner1').fadeIn(1000);
          $('.change-banner img').eq(0).addClass('select-banner');
        }
    },4000);
    // ライトボタン
    $('#next-banner').on('click', function() {
      $('.change-banner img').removeClass('select-banner');
      if($('.banner1').css('display')=='inline'){
        $('.banner1').hide();
        $('.banner2').fadeIn(1000);
        $('.change-banner img').eq(1).addClass('select-banner');
      }else if($('.banner2').css('display')=='inline'){
        $('.banner2').hide();
        $('.banner3').fadeIn(1000);
        $('.change-banner img').eq(2).addClass('select-banner');
      }else if($('.banner3').css('display')=='inline'){
        $('.banner3').hide();
        $('.banner1').fadeIn(1000);
        $('.change-banner img').eq(0).addClass('select-banner');
      }
      // clearInterval(timer);
    });
    $('#back-banner').on('click', function() {
      $('.change-banner img').removeClass('select-banner');
      if($('.banner1').css('display')=='inline'){
        $('.banner1').hide();
        $('.banner3').fadeIn(1000);
        $('.change-banner img').eq(2).addClass('select-banner');
      }else if($('.banner2').css('display')=='inline'){
        $('.banner2').hide();
        $('.banner1').fadeIn(1000);
        $('.change-banner img').eq(0).addClass('select-banner');
      }else if($('.banner3').css('display')=='inline'){
        $('.banner3').hide();
        $('.banner2').fadeIn(1000);
        $('.change-banner img').eq(1).addClass('select-banner');
      }
      // clearInterval(timer);
    });
});
