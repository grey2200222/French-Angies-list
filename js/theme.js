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

	
    //Click "Anuuler" button
    $(".grayBtn").click(function(){
        $(document.getElementById("hide_title")).find(".showIcon").css("display","block");
        $(document.getElementById("hide_title")).find(".hideIcon").css("display","none");
        $(document.getElementById("hide_title")).siblings(".searchform").addClass("hide");
        $(document.getElementById("hide_title")).parents("#profilePage .article").css("padding-bottom","18px");
    });
	
    //Click "Recherche" button
    $(".greenBtn").click(function(){
        if ($(document.getElementById("searchresult")).hasClass("hide")){
            $(document.getElementById("searchresult")).removeClass("hide");
        }
    });

    /* button want a new look - Show widget */
    $('#skinSwitchSection p.wantNewLookBtn a').click(function() {
        $(this).hide();
        $('#widget').fadeIn();
        $("#skinSwitchWrapper").css("padding-top","25px");
    });
    /*
*	THESE ARE FUNCTIONS OF WIDGET
*/
    /* get total themes in widget */
    var totalThemes = $('#widget .theme').get().length;
	
    /* update pagination label */
    $('#widget .pagination .totalThemes').html(totalThemes);
	
    /* set current pages */
    var ini = 1;
    var end = 5;
	
    if(totalThemes < 6) {
        end = totalThemes;
        $('#widget .moveLeft').hide();
        $('#widget .moveRight').hide();
        $('#widget .mask').css('margin-left', 30);
    }
	
    updateDisplaying = function() {
        $('#widget .pagination .displaying').html(ini+'-'+end);
    };
    updateDisplaying();
	
    /* this function is called when close widget */
    closeWidget = function() {
        $('#widget').fadeOut();
        $("#skinSwitchWrapper").css("padding-top","0");
    };
	
    $('#widget .buttonImDone').live('click', function() {
        $('#widget .previewTheme').hide();
        $("#skinSwitchSection p.wantNewLookBtn a").show();
        closeWidget();
    });
	
    /* THEME THUMBNAIL SIZE (168 WIDTH + 15 MARGIN RIGHT) */
    var themeThumbnailSize = 183;
	
    /* move carousel to right */
    $('#widget .moveRight').live('click', function() {
        var first;
		
        if(end == totalThemes) {
            $('#widget .themesArea').animate({
                'left': $('#widget .themesArea').position().left-themeThumbnailSize*5
            }, {
                duration: 1000,
                complete: function() {
                    for (i = 0; i < 5; i++) {
                        first = $('#widget .theme').first();
                        $('#widget .theme').first().remove();
                        $('#widget .themesArea').css('left', 0);
                        $('#widget .themesArea').append(first);
                    }
                }
            });
            ini = 1;
            end = 5;
        } else {
            $('#widget .themesArea').animate({
                'left': $('#widget .themesArea').position().left-themeThumbnailSize
            }, {
                duration: 100,
                complete: function() {
                    first = $('#widget .theme').first();
                    $('#widget .theme').first().remove();
                    $('#widget .themesArea').css('left', 0);
                    $('#widget .themesArea').append(first);
                }
            });
            ini++;
            end++;
        }
		
        $('#widget .previewTheme').hide();
        updateDisplaying();
    });
	
    /* move carousel to left */
    $('#widget .moveLeft').live('click', function() {
        var last;
		
        if(ini == 1) {
            for (i = 0; i < 5; i++) {
                last = $('#widget .theme').last();
                $('#widget .theme').last().remove();
                $('#widget .themesArea').prepend(last);
                $('#widget .themesArea').css('left', $('#widget .themesArea').position().left-themeThumbnailSize);
            }
		
            $('#widget .themesArea').animate({
                'left': 0
            }, 1000);
            ini = totalThemes-4;
            end = 15;
        } else {
            last = $('#widget .theme').last();
            $('#widget .theme').last().remove();
            $('#widget .themesArea').prepend(last);
            $('#widget .themesArea').css('left', -themeThumbnailSize);
			
            $('#widget .themesArea').animate({
                'left': $('#widget .themesArea').position().left+themeThumbnailSize
                }, 100);
            ini--;
            end--;
        }
		
        /* Close PREVIEW THEME WINDOW */
        $('#widget .previewTheme').hide();
		
        /* UPDATE PAGINATION */
        updateDisplaying();
    });
	
    /* show preview window */
    $('#widget .theme a').live('hover', function() {
        $('#widget .previewTheme').show();
        //$('#widget .previewTheme .themeName').html($(this).parent().children('.themeName').html());
        $('#widget .previewTheme img').attr('src', $(this).parent().children('.previewImageURL').html());
        //$('#widget .previewTheme .buttonApply A').attr('href', $(this).parent().children('.themePage').html());
		
		
        /* POSITION OF THE THEME IN HOVER (this position is the theme inside of themeArea and no them in page */
        var thisPosition = $(this).position().left;
		
        /* POSITION OF THE COURSEL (need to calculate position of the theme in page thisPosition+themesAreaPosition */
        var themesAreaPosition = $('#widget .themesArea').position().left;
		
        /* AJUST TO CENTER "PREVIEW WINDOW" WITH THEME IN HOVER
		 * 269 half width PREVIEW WINDOWS - 15 margin left of coursel - 84 half width of THEME THUMBNAIL
		 * 
		 * So, 269 - 15 - 84 = 170
		 */
        var ajust = 180;
		
        /* FIX POSITION TO FF */
        if($.browser.mozilla)
            ajust = 350;
		
        $('#widget .previewTheme').css('left', (thisPosition+themesAreaPosition)-ajust);
    });
	
    /* APPLY theme and CLOSE preview theme window */
    $('#widget .previewTheme .buttonApply').live('click', function() {
        /* close preview theme window */
        $('#widget .previewTheme').hide();
    });
    var URLParams = new Array();
    var aParams = document.location.search.substr(1).split('&');
    for (i=0; i < aParams.length ; i++){
        var aParam = aParams[i].split('=');
        URLParams[aParam[0]] = aParam[1];
    }
    showSuccess=URLParams["showSuccess"];
	
    if (showSuccess == "apply"){
        $("#skinSwitchSection p.wantNewLookBtn a").addClass("hide");
        $("#widget").removeClass("hide");
        $("#skinSwitchWrapper").css("padding-top","25px");
    }
	
	
    $(".myComment textarea,.categoryArea .responseBox textarea").css('overflow-y','auto');
	
	
    //fix browsers
    // IE 6
    if($.browser.msie && $.browser.version == 6.0){
        if($("#skinSwitchWrapper").height()<25){
            $("#skinSwitchWrapper").height(25);
        }
        $(".contentWrapper .sideBar .leaderBSection,.responseBox ol").css("zoom","1");
    }

    // IE 7
    if($.browser.msie && $.browser.version == 7.0){
        $("#header,.responseBox ol,.shareSection ul h5").css("zoom","1");
    }

    // IE 8
    if($.browser.msie && $.browser.version == 8.0){

} 
}); 