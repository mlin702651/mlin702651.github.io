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
$('.boximg').hover(
  function(){
      $(this).fadeTo(300,0.5);
  },
  function(){
      $(this).fadeTo(0,1);
  },
  );
  // $(".btn1").click(function(){
   
  //   // $("html,body").scrollTop('20vw');
  //     $('html,body').animate({
  //        scrollTop: 500
  //      }, 1000);
              
  // });
  
  // $(window).scroll(function() {
  //   var top = $(document).scrollTop();
  //   if (top == 100) alert(top);
  //   });
   
});  //document結束
    
    
    