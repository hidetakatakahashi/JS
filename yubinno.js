$(function () {
    //検索ボタンをクリックされたときに実行
    $("#search_btn").click(function () {
        //入力値をセット
        var param = {zipcode: $('#zipcode').val()}
        //zipcloudのAPIのURL
        var send_url = "http://zipcloud.ibsnet.co.jp/api/search";
        $.ajax({
            type: "GET",
            cache: false,
            data: param,
            url: send_url,
            dataType: "jsonp",
            success: function (res) {
                //結果によって処理を振り分ける
                if (res.status == 200) {
                    //処理が成功したとき
                    //該当する住所を表示
                    var html = '';
                    for (var i = 0; i < res.results.length; i++) {
                        var result = res.results[i];
                        console.log(res.results);
                        html += '<h2>住所' + (i + 1) + '</h2>';
                        html += '<div>都道府県コード：' + result.prefcode + '</div>';
                        html += '<div>都道府県：' + result.address1 + '</div>';
                        html += '<div>市区町村：' + result.address2 + '</div>';
                        html += '<div>町域：' + result.address3 + '</div>';
                        html += '<div>都道府県(カナ)：' + result.kana1 + '</div>';
                        html += '<div>市区町村(カナ)：' + result.kana1 + '</div>';
                        html += '<div>町域(カナ)：' + result.kana1 + '</div>';
                    }
                    $('#zip_result').html(html);
                } else {
                    //エラーだった時
                    //エラー内容を表示
                    $('#zip_result').html(res.message);

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest);
            }
        });
    });
});
