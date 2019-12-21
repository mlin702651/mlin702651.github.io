$(Document).ready(function(){

    $(function() {
        $(".lable_singin").click(
            function () {
                $(".welcomeback").html("Hello, Friend!");
                $(".logaccount").html("create your account");
                $(".login").val("singup");
                $(".lable_singin").css("background-color","#FFD655");
                $(".lable_login").css("background-color","#FFEAA8");
            }
        );
        $(".lable_login").click(
            function () {
                $(".welcomeback").html("Welcome Back");
                $(".logaccount").html("login your account");
                $(".login").val("login");
                $(".lable_singin").css("background-color","#FFEAA8");
                $(".lable_login").css("background-color","#FFD655");
            }
        );
    }); 
});  //document結束
    