$(document).ready(function(){










    //윈도우 시작하면 화면 swing 속도로 맨위로 이동
    $("body,html").stop().animate({"serollTop":0},1500,"swing");

    //브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    console.log('height1: ' + ht);
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("#container > div").height(ht);
    });

    // 처음 화면 즉 새로고침하면 바로 보여라
    var start = setTimeout(function(){
        $(".content1 > div").addClass("on");
    },500);

    $(window).scroll(function(){ 
        var scroll = $(this).scrollTop() + 10; //현재 scroll위치값
        var ht = $(window).height();

        console.log('scroll: ' + scroll);
        console.log('height: ' + ht);

        //content1
        if(scroll>= 0*ht && scroll < 1*ht){
            //내용물 움직임 시작
            $(".content1 > section").addClass("on");
        }else{//범위가 넘어가면
            //움직임 취소
            $(".content1 > section").removeClass("on");
        }

        //content2
        if(scroll>= 1*ht && scroll < 2*ht){
            //내용물 움직임 시작
            $(".content2 > section").addClass("on");
        }else{//범위가 넘어가면
            //움직임 취소
            $(".content2 > section").removeClass("on");
        }

        //content3
        if(scroll>= 2*ht && scroll < 3*ht){
            //내용물 움직임 시작
            $(".content3 > section").addClass("on");
        }else{//범위가 넘어가면
            //움직임 취소
            $(".content3 > section").removeClass("on");
        }

        //content4
        if(scroll>= 3*ht && scroll < 4*ht){
            //내용물 움직임 시작
            $(".content4 > section").addClass("on");
        }else{//범위가 넘어가면
            //움직임 취소
            $(".content4 > section").removeClass("on");
        }
        //content5
        if(scroll>= 4*ht && scroll < 5*ht){
            //내용물 움직임 시작
            $(".content5 > section").addClass("on");
        }else{//범위가 넘어가면
            //움직임 취소
            $(".content5 > section").removeClass("on");
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

