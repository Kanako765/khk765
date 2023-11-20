$(function () {
    // ーーーーーーフェードインーーーーーー
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('active');
            }
        });
    });

    // ーーーーーースムーススクロールーーーーーー
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        // urlが変化しないようにfalseを返す
        return false;
    });

    // ーーーーーースクロール時にスケジュール表に回転アニメーションを適用ーーーーーー
    $(window).scroll(function () {
        $('.rotateY').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('rotateY-active');
            }
        });
    });


    // ーーーーーースクロール時に入園案内の表にスライドインーーーーーー
    $(window).scroll(function () {
        $('.slide-left').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('slide-left-active');
            }
        });
    });
    

    $(function () {
        $('.hamburger').click(function () {
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $('.nav-menu').addClass('active');
            } else {
                $('.nav-menu').removeClass('active');
            }

        });
    });
    //メニュー内を閉じておく
    $(function () {
        $('.nav-menu a[href]').click(function () {
            $('.nav-menu').removeClass('active');
            $('.hamburger').removeClass('active');

        });
    });

});





