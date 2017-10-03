//　カルーセル
$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
        }
    );
});

//　ハンバーガーメニュー
$(document).ready(function(){
  $("#menu_js").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});


//　スクロール
$(function(){
    $('a[href^=#]').click(function(){
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

// $('.cr_btn').click(function(){
//   var id = $(this).attr('href');
//   var position = $(id).offset().top;
//   $('html,body').animate({
//     'scrollTop':position
//   },1000);
// });
