$(function(){
    $("#submitBtn").click(function(){
        $("#submitBtn").text("Submitting...");
        setTimeout(function(){
            $("#submitBtn").replaceWith('Submitted. Profile will soon be updated.');
        }, 1000);
    });
});