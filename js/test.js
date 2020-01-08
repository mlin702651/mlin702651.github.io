$(Document).ready(function(){

  
  $(function() {
      var rellax = new Rellax('.rellax');
  }); 

  $(function() {
    $("#gototopseller").click(function () {
            $('html,body').animate({
                scrollTop:2070
            }, 1000);
        }
    );
}); 
$(function(){
    $('#M_BackTop').click(function(){ 
        $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 700 ){
            $('#M_BackTop').fadeIn(222);
        } else {
            $('#M_BackTop').stop().fadeOut(222);
        }
    }).scroll();
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 230 ){
            $('.M_bar').fadeIn(100);
        } else {
            $('.M_bar').stop().fadeOut(100);
        }
    }).scroll();
});
$('.boximg').hover(
  function(){
      $(this).fadeTo(300,0.5);
  },
  function(){
      $(this).fadeTo(0,1);
  },
  );
  $('.mask1').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,0);
    },
    );
$('.mask2').hover(
    function(){
        $(this).fadeTo(300,0.5);
    },
    function(){
        $(this).fadeTo(0,0);
    },
    );
    $('.mask3').hover(
        function(){
            $(this).fadeTo(300,0.5);
        },
        function(){
            $(this).fadeTo(0,0);
        },
        );

});  //document結束
    
    
    