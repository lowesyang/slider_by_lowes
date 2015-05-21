/**
 * Created by asus-pc on 2015/5/20.
 */
var i= 0;
var num=4;

$(document).ready(function(){
    var pic_width=$(".pic").eq(0).width();
    var pic_height=$(".pic_box").eq(0).height();
    var scr_width=document.body.clientWidth || document.documentElement.clientWidth;
    $(".pic").css({
        width:scr_width
    });
    $(".pic_box").css({
        width:4*pic_width
    });
    $(".circle_box").css({
        top:0.95*pic_height,
        left:0.45*pic_width
    });
    $(".circle_box ul li").eq(0).css({
        background:"#ef9d92"
    });
    change_pic();
    focus_change();

})



function change_pic(){
    var pic_width=$(".pic").eq(0).width();
    setInterval(function(){
        var pic=$(".pic");
        if(i<3){
            var circle=$(".circle_box ul li").eq(i+1);
            $(".circle_box ul li").not(circle).css({
                background:"#999999"
            });
            circle.css({
                background:"#ef9d92"
            })
            for (var n=0;n<num;n++) {
                pic.eq(n).animate({left: -(i+1) * pic_width}, 800);
            }
            i++;
        }
        else
        {
            var circle=$(".circle_box ul li").eq(0);
            $(".circle_box ul li").not(circle).css({
                background:"#999999"
            });
            circle.css({
                background:"#ef9d92"
            });
            for (var n=0;n<num;n++) {
                pic.eq(n).animate({left: n*pic_width}, 1200);
            }
            i = 0;
        }
    },4500);
}


function focus_change(){
    $(".pic_box").mouseenter(function() {
        $(".left_change").stop();
        $(".right_change").stop();

        $(".left_change").animate({width: '50px', opacity: 'show'}, function () {
            $(".left_change").show(10);
        });

        $(".right_change").animate({width: '50px', opacity: 'show'}, function () {
        $(".right_change").show(10);});
    });

    $(".pic_box").mouseleave(function() {
        $(".left_change").stop();
        $(".right_change").stop();

        $(".left_change").animate({width: '50px', opacity: 'hide'}, function () {
            $(".left_change").hide(10);
        });

        $(".right_change").animate({width: '50px', opacity: 'hide'}, function () {
            $(".right_change").hide(10);
        });
    });
}

function right_move(){
    var pic_width=$(".pic").eq(0).width();
    if(i<num-1){
        var circle=$(".circle_box ul li").eq(i+1);
        $(".circle_box ul li").not(circle).css({
            background:"#999999"
        });
        circle.css({
            background:"#ef9d92"
        });
        for (var n=0;n<num;n++) {
            $('.pic').eq(n).animate({left: -(i+1) * pic_width}, 800);
        }
        i++;
    }
    event.stopPropagation();
    return;
}


function left_move(){
    var pic_width=$(".pic").eq(0).width();
    if(i>0){
        var circle=$(".circle_box ul li").eq(i-1);
        $(".circle_box ul li").not(circle).css({
            background:"#999999"
        });
        circle.css({
            background:"#ef9d92"
        });
        for (var n=0;n<num;n++) {
            $('.pic').eq(n).animate({left: -(i-1) * pic_width}, 800);
        }
        i--;
    }
    event.stopPropagation();
    return;
}

function click_circle(j){
    var pic_width=$(".pic").eq(0).width();
    var circle=$(".circle_box ul li").eq(j);
    $(".circle_box ul li").not(circle).css({
        background:"#999999"
    });
    circle.css({
        background:"#ef9d92"
    });
    $(".pic").stop();
    for (var n=0;n<num;n++){
        $('.pic').eq(n).animate({left: -j * pic_width}, 800);
    }
}



