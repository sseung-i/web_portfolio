$(function() {


    $(".prev").hide();

    $(".next").stop().mouseover(function() {
        $(this).animate({right:"-100px"},300);
    });

    $(".prev").stop().mouseover(function() {
        $(this).animate({left:"-100px"},300);
    });

    $(".next").stop().mouseout(function() {
        $(this).animate({right:"-50px"},300);
    });

    $(".prev").stop().mouseout(function() {
        $(this).animate({left:"-50px"},300);
    });


    var imgNum = $(".img>ul>li").length-1;
    var now = 0;

    $(".next").click(function() {
        
        if(now==imgNum) return;
        else {
            now+=1;
            $(".img>ul").animate({left:(-492*now)+"px"},300);
        }
        if(now>=1) {
            $(".prev").show();
        };
        if(now==imgNum) {
            $(".next").hide();
        };
    });

    $(".prev").click(function() {
        
        if(now==0) return;
        else {
            now-=1;
            $(".img>ul").animate({left:(-492*now)+"px"},300);
        }
        if(now<=imgNum) {
            $(".next").show();
        };
        if(now==0) {
            $(".prev").hide();
        };
    });



});