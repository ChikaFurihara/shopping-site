//　category内カルーセル
$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
    {
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      autoplay: false,
      navigation : false,
      navigationText : ["BACK","NEXT"],
      
    }
  );
});

//　ハンバーガーメニュー
$(document).ready(function(){
  $("#menu_js").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});


//　category内スライドショー
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
