$(Document).ready(function(){
    
    $(function() {
        $("#gototopseller").click(function () {
                $('html,body').animate({
                    scrollTop:1680
                }, 1000);
            }
        );
    }); 
    $(function() {
        $("#M_gototop").click(function () {
                $('html,body').animate({
                    scrollTop:300
                }, 1000);
            }
        );
    }); 
    $(function(){
        $('#BackTop').click(function(){ 
            $('html,body').animate({scrollTop:0}, 333);
        });
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 1024 ){
                $('#BackTop').fadeIn(222);
            } else {
                $('#BackTop').stop().fadeOut(222);
            }
        }).scroll();
    });
});  //document結束
    
    