$(function(){
    /**
    *   public profile title clicking functionality
    **/
    $(".title").click(function(){
        $('.mainColumn').toggleClass('advSearch');
    });
	//Click "Anuuler" button
    $(".grayBtn").click(function(){
        $('.mainColumn').toggleClass('advSearch');
	});		
    //Click "Recherche" button
    $(".greenBtn").click(function(){
        if ($(document.getElementById("searchresult")).hasClass("hide")){
            $(document.getElementById("searchresult")).removeClass("hide");
        }
    });
});