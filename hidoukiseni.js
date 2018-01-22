//Barba.js用トランジション設定
var FadeTransition = Barba.BaseTransition.extend({
start: function() {
//この関数は、遷移が開始されるとすぐに自動的に呼び出されます。

//読み込みが終了し、古いページがフェードアウトするとすぐに、新しいページがフェードインします。
Promise
.all([this.newContainerLoading, this.fadeOut()])
.then(this.fadeIn.bind(this));
},

fadeOut: function() {
//this.oldContainerは古いコンテナのHTMLElementです。この場合はアニメーションでフェードアウトさせている。
return $(this.oldContainer).animate({ opacity: 0 }).promise();
},

fadeIn: function() {
var _this = this;
//this.newContainerは、新しいコンテナのHTMLElementです。
//この段階では、newContainerはDOM上にあります（barba-container内にあり、visibility：hiddenで囲まれています）。
var $el = $(this.newContainer);

//古いコンテナをdisplay:none;にした後、新しいコンテナに初期値を設定。
$(this.oldContainer).hide();
$el.css({
visibility : 'visible',
opacity : 0
});

$el.animate({ opacity: 1 }, 400, function() {
//.done（）の記述で古いコンテナを自動的にDOMから削除。
_this.done();
});
}

});
// returnに作ったトランジションを設定。
Barba.Pjax.getTransition = function() {
return FadeTransition;
};

Barba.Pjax.start();
