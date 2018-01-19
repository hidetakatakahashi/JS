$(function() {
  var index;
	$('.accordion').hover(function() {
    //.index()を使いクリックされたタブが何番目かを調べ、
    //indexという変数に代入します。
    index = $('.accordion').index(this);

    //コンテンツを一度すべて非表示にし、
    $('.megamenu-body').css('display','none');
    $('.megamenu-body ul li').css('display','none');

    //マウスが乗ったタブと同じ順番のコンテンツを表示します。
    $('.megamenu-body').css('display','block');
    // $('.megamenu-body').slideDown("fast");

    $('.megamenu-body ul li').eq(index).css('display','block');

    //マウスが乗ったタブのみにクラスselectをつけます。
    $(this).addClass('select');

  }, function() {
    //色指定を空欄にすれば元の色に戻る
    $('.accordion').removeClass('select');
    $('.megamenu-body').css('display','none');
    $('.megamenu-body ul li').css('display','none');
  });


  $('.megamenu-body').hover(function() {

    //コンテンツを一度すべて非表示にし、
    $('.megamenu-body').css('display','none');
    $('.megamenu-body ul li').css('display','none');

    //マウスが乗ったタブと同じ順番のコンテンツを表示します。
    $('.megamenu-body').css('display','block');

    $('.megamenu-body ul li').eq(index).css('display','block');

    //マウスが乗ったタブのみにクラスselectをつけます。
    $('.accordion').removeClass('select');
    $('.accordion').eq(index).addClass('select');

  }, function() {

    //色指定を空欄にすれば元の色に戻る
    $('.accordion').removeClass('select');
    $('.megamenu-body').css('display','none');
    $('.megamenu-body ul li').css('display','none');
  });

});
