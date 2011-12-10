$(function(){
    /**
	*   make element middle align
	**/
    var NavWidth=$("#header #nav").width();
    $("#header #nav").css("margin-left",-NavWidth/2+"px");
	
    var footerNavWidth=$("#footer ul").width();
    $("#footer ul").css("margin-left",-footerNavWidth/2+"px");
	
    $(".shareSection textarea,.categoryArea .responseBox textarea").css('overflow-y','auto');
	
    $('.checkBoxForm,.jsFormElement').jqTransform();
	
    /**
	*  login box
	**/
    $(".breadLogin .login a").click(function(){
        $(this).parent(".login").addClass("hide");
        $(".breadLogin .closeLogin").removeClass("hide");
        $("#loginBox").css("display","block");
    });
    $(".breadLogin .closeLogin a").click(function(){
        $(this).parent(".closeLogin").addClass("hide");
        $(".breadLogin .login").removeClass("hide");
        $("#loginBox").css("display","none");
    });
    $(".breadLogin a.loginBtn").click(function(){
        $(".breadLogin .loginUser").removeClass("hide");
        $(".breadLogin .closeLogin").addClass("hide");
        $("#loginBox").css("display","none");
		
    });
    $(".breadLogin a.logout").click(function(){
        $(".breadLogin .loginUser").addClass("hide");
        $(".breadLogin .login").removeClass("hide");
    });
}); 