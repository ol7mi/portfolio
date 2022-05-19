// main.js
window.onload = function(){
	var $devWidth; //모바일일때는
var $limitsize=768; 

var $bnnNum;
var $banner_w6;
var $short;

$(document).ready(function(){
	$devWidth = $('body').width();
	$short = $("#short").width();
	$banner_w6 = $(".banner6 li").width();

	$(window).resize(function(){
		if ($(window).width() > 1023) $short = 280;
		else $short = 250;
		$devWidth = $('body').width();
		$space = ($(window).width() - $(".banner6 li").width())/2;
		document.getElementById('short').style.width = $short + $bnnNum * $short + 'px';
		$banner_w6 = $(".banner6 li").width();
		//content6 ul 가운데 정렬
		
	});


	//모바일
	$('.mob_gnb > ul > li > a').click(function(){
		$(this).parent().siblings().removeClass("on");
		$(this).parent().toggleClass("on");
	 });
	 $('.mob_gnb > ul > li > div > ul > li > a').click(function(){
		$(this).parent().siblings().removeClass("on");
		$(this).parent().toggleClass("on");
	 });

	// 햄버거버튼 클릭
	$('div.mobBtn').click(function(){
		$('div.mob').addClass("on");
		$('div.mobBtn_close').addClass("on");
		$('body').addClass("on");
		$('div.bg').addClass("on");
		$(".mob_btn_srch").addClass("on")
		$(this).hide();
	})
	// 햄버거 닫기버튼 클릭
	$('div.mobBtn_close').click(function(){
		$('div.mob').removeClass("on");
		$('div.mobBtn_close').removeClass("on");
		$('body').removeClass("on");
		$('div.bg').removeClass("on");
		$(".mob_btn_srch").removeClass("on")
		$('div.mobBtn').show();
	})

	// 검색버튼 클릭
	$('.mob_btn_srch').click(function(){
		$('.mob_srch_inner').addClass("on");
		$('.mob_btn_close').addClass("on");
		$('div.mobBtn').addClass("on");
		$('body').addClass("on");
		$('div.bg').addClass("on");
		$(this).hide();
	})
	// 검색 닫기버튼 클릭
	$('.mob_btn_close').click(function(){
		$('.mob_srch_inner').removeClass("on");
		$('.mob_btn_close').removeClass("on");
		$('div.mobBtn').removeClass("on");
		$('body').removeClass("on");
		$('div.bg').removeClass("on");
		$('.mob_btn_srch').show();
	})


	// footer sitemap
	$('.sitemap > ul > li').click(function(e){
		e.preventDefault();

		var $check = false;

		if ($(this).hasClass('on')) $check = true

		$('.sitemap > ul > li').removeClass('on');

		if(!$check) $(this).addClass("on");
	});

	// 패밀리사이트맵
	$('dl.family_button > dd > a').click(function(e){
		e.preventDefault();

		$(this).toggleClass("on");
	});

	// address_txt
	$('.address_txt').click(function(e){
		e.preventDefault();

		$(this).toggleClass("on");
	});







	//주메뉴
	$(".gnb > ul > li > a").bind("mouseover focus",function(){
		if($devWidth<$limitsize) return false;//함수 실행 정지

		if( $(".topMenu > li ").hasClass("on")){ //주메뉴 창과 고객센터 안겹치게 
            $(".topMenu > li ").removeClass("on");
        }
		
		var ht = $(this).next().height();

		$(".header_wrap").stop().animate({"height":100+ht},100,"linear");

		$("nav > ul > li > div").css("display","none");
		$(this).next().css({"display":"block"});
		$("nav > ul > li > div").css({"padding":"20px"});
	});

	$(".gnb").bind("mouseleave blur",function(){
		if($devWidth<$limitsize) return false;//함수 실행 정지
		$(".header_wrap").stop().animate({"height":"63px"},300,"linear");
		$(".gnb > ul > li > div").css({"display":"none"});
	});

	//  //돋보기 검색창
	$(".btn_srch > a").click(function(){
        $("div.srch_wrap").css("display","block");
    });

    $(".srch_wrap > a.btu_srch").click(function(){
        $("div.srch_wrap").css("display","none");
    });

	//family_site
	$(".family_button > dd").click(function(e){
		e.preventDefault();
		$(this).toggleClass("on");
	});

	//top 버튼
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        if(scroll > 0 && scroll < 2700){
            $(".btn_top").removeClass("on");
            $(".btn_top").addClass("on");
        }

		
    });

    $(".btn_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1400,"swing")
    });

	// 락앤락몰 버튼
	$(window).scroll(function(){
        var scroll = $(this).scrollTop();

		if ($(window).width() <= 767) $(".btn_locknlock").css("bottom", $(document).height() - ($(window).height() * 1.09) - scroll)
        else $(".btn_locknlock").css("bottom", $(document).height() - ($(window).height() * 1) - scroll)
    });
	var scroll = $(this).scrollTop();
    $(".btn_locknlock").css("bottom", $(document).height() - ($(window).height() * 1) - scroll)

	// KOR 클릭했을 때, 헤더 고정
	$('.lang').click(function(){
		console.log('test');
		if($('.header_wrap').hasClass('on')) $('.header_wrap').removeClass('on')
		else $('.header_wrap').addClass('on')

		$('.topMenu > li').toggleClass("on");

		if ($('.topMenu > li').hasClass('on')) {
			
			$('.topMenu > li').eq(1).css("background", "url(../images/foot_arr_up.png) no-repeat 90% 60%");
		}
		else $('.topMenu > li').eq(1).css("background", "url(../images/header_arr_down_w.png) no-repeat 90% 40%");
	});

	//메인비주얼
	var $banner_w = $(".main_visual").width();
	var $banner = $(".banner_scroll a").click(function(){
		$bnnNum = $banner.index(this);
		
		$(".slide_wrap").stop().animate({"left":$bnnNum*-$banner_w},300,"linear",function(){
			$(".banner_scroll li").removeClass("on");
			$(".banner_scroll li").eq($bnnNum).addClass("on");
			$(".slide_wrap li").removeClass("active");
			$(".slide_wrap li").eq($bnnNum).addClass("active");
		});
	});

	// 6번배너
	var $debug = $(".banner6").width();
	var $firstNum = 0;
    var $lastNum = $(".content6 li div").size()-1;
    $bnnNum = 0;
	

	// 6번 배너 - 이전, 다음
	$(".btn_prev").click(function(e){
		e.preventDefault();

		if ($bnnNum > $firstNum)
		{
			$bnnNum--;

			var $sum = ($bnnNum*-$banner_w6) + ($bnnNum*-50);
			$(".banner6").stop().animate({"left":$sum},200,"linear",function(){
				console.log("bnnNum: " + $bnnNum);
				console.log("banner: " + $banner_w6);
				console.log("test: " + $sum);
				if($(".banner6 > li").eq($bnnNum).hasClass("white")){
					$(".slide > .arrow > .btn_prev").addClass("white");
				}else{
					$(".slide > .arrow > .btn_prev").removeClass("white");
				}
			});

			$(".content6 > .l-content > .arr > .arrow > span").text(($bnnNum + 1) + '/3');
			document.getElementById('short').style.width = $short + $bnnNum * $short + 'px';
			
		}
	})

	$(".btn_next").click(function(e){
		e.preventDefault();

		console.log("pics: " + $banner_w6);

		if ($bnnNum < $lastNum) 
		{
			$bnnNum++;

			var $sum = ($bnnNum*-$banner_w6) + ($bnnNum*-50);
			$(".banner6").stop().animate({"left":$sum},200,"linear",function(){
				if($(".banner6 > li").eq($bnnNum).hasClass("white")){
					$(".slide > .arrow > .btn_prev").addClass("white");
				}else{
					$(".slide > .arrow > .btn_prev").removeClass("white");
				}
			});

			$(".content6 > .l-content > .arr > .arrow > span").text(($bnnNum + 1) + '/3');
			document.getElementById('short').style.width = $short + $bnnNum * $short + 'px';
		}
	})
});
}