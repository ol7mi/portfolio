/* main */

$(document).ready(function(){
    //윈도우 시작하면 화면 맨위로 이동
    $("body,html").stop().animate({"serollTop":0},1500,"swing");

    //브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    console.log(ht);
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("#container > div").height(ht);
    });

    // 새로고침하면 보이기
    var start = setTimeout(function(){
        $("#content1 > section").addClass("on");
    },500);

    $(window).scroll(function(){ //현재 scroll
        var scroll = $(this).scrollTop();
        var ht = $(window).height();

        //content1
        if(scroll>= 0*ht && scroll < 1*ht){
            //내용물 움직임 시작
            $("#content1 > section").addClass("on");
        }else{//범위가 넘어가면
            //움직임 취소
            $("#content1 > section").removeClass("on");
        }

        //content2
        if(scroll>= 1*ht && scroll < 2*ht){
            $("#content2 > section").addClass("on");
        }else{
            $("#content2 > section").removeClass("on");
        }

        //content3
        if(scroll>= 2*ht && scroll < 3*ht){
            $("#content3 > section").addClass("on");
        }else{
            $("#content3 > section").removeClass("on");
        }

        //content4
        if(scroll>= 3*ht && scroll < 4*ht){
            $("#content4 > section").addClass("on");
        }else{
            $("#content4 > section").removeClass("on");
        }

        //content5
        if(scroll>= 4*ht && scroll < 5*ht){
            $("#content5 > section").addClass("on");
        }else{
            $("#content5 > section").removeClass("on");
        }

        //content6
        if(scroll>= 5*ht && scroll < 6*ht){
            $("#content6 > section").addClass("on");
        }else{
            $("#content6 > section").removeClass("on");
        }

        //content7
        if(scroll>= 6*ht && scroll < 7*ht){
            $("#content7 > section").addClass("on");
        }else{
            $("#content7 > section").removeClass("on");
        }

        //content8
        if(scroll>= 7*ht && scroll < 8*ht){
            $("#content8 > section").addClass("on");
        }else{
            $("#content8 > section").removeClass("on");
        }

        //content9
        if(scroll>= 8*ht && scroll < 9*ht){
            $("#content9 > section").addClass("on");
        }else{
            $("#content9 > section").removeClass("on");
        }

        //content10
        if(scroll>= 9*ht && scroll < 10*ht){
            $("#content10 > section").addClass("on");
        }else{
            $("#content10 > section").removeClass("on");
        }

        //content11
        if(scroll>= 10*ht && scroll < 11*ht){
            $("#content11 > section").addClass("on");
        }else{
            $("#content11 > section").removeClass("on");
        }

        //content12
        if(scroll>= 11*ht && scroll < 12*ht){
            $("#content12 > section").addClass("on");
        }else{
            $("#content12 > section").removeClass("on");
        }

        //content13
        if(scroll>= 12*ht && scroll < 13*ht){
            $("#content13 >section").addClass("on");
        }else{
            $("#content13 >section").removeClass("on");
        }









        //한페이지씩 이동
        $("#container > div").on('mousewheel', function(event,delta){
            if(delta > 0){ //마우스 휠을 올렸을때
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop":prev},1400,"linear"); //easeOutBounce
            }else if (delta < 0){ //마우스 휠을 내렸을때}
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":next},1400,"linear");
            }
        });
    });

});