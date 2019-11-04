
$(function(){
        $(window).scroll(function() {
         if($(this).scrollTop() > 900){
          $('.choco').stop().animate({left:"0px"});
         }
         else{
          $('.choco').stop().animate({left:"900px"});
         }
        }).scroll();
});
$(function(){
    $(window).scroll(function() {
     if($(this).scrollTop() > 450){
      $('.mar').stop().animate({ left:"0px"});
     }
     else{
      $('.mar').stop().animate({left:"-1500px"});
     }
    }).scroll();
});
$(function(){
    $(window).scroll(function() {
     if($(this).scrollTop() > 1350){
      $('.cookie').stop().animate({left:"0px"});
     }
     else{
      $('.cookie').stop().animate({left:"-1500px"});
     }
    }).scroll();
});

//candybox pic
$(function() {
    $('#c1').hover(function() {
      $('#c1p').css('opacity', '1');
    }, function() {
      // on mouseout, reset the background colour
      $('#c1p').css('opacity', '');
    });
  });
  $(function() {
    $('#c2').hover(function() {
      $('#c2p').css('opacity', '1');
    }, function() {
      // on mouseout, reset the background colour
      $('#c2p').css('opacity', '');
    });
  });
  $(function() {
    $('#c3').hover(function() {
      $('#c3p').css('opacity', '1');
    }, function() {
      // on mouseout, reset the background colour
      $('#c3p').css('opacity', '');
    });
  });

