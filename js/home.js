$(function(){
    //slide
    var t;
    function autoChange(i){
        if(t) clearTimeout(t);
        if(i==4) i=0;
        $('#adsBanner #adsBannerContent .navC').eq(i).removeClass("hide")
        .siblings().addClass('hide');
        $('#adsBanner ul li').eq(i).addClass('current')
        .siblings().removeClass("current");
        i++;
        t=setTimeout(function(){
            autoChange(i)
        },6000);
    }
    $('#adsBanner ul li').click(function(){
        if($(this).hasClass('current')) return;
        else{
            autoChange($(this).index());
            return false;
        }
    });
    autoChange(0);
});