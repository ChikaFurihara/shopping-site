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
