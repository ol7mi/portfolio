// main2.js
var devWidth;
var limitsize=768; 

window.addEventListener('load', function(){
    devWidth = document.querySelector("body").offsetWidth;
    console.log(devWidth);

    window.addEventListener('resize', function(){
        devWidth = document.querySelector("body").offsetWidth;
        console.log(devWidth);
    });
});

//햄버거 버튼 클릭
var mobBtn = document.querySelector("div.mobBtn");
var mob = document.querySelector("div.mob");
var mobClose = document.querySelector("div.mobBtn_close");
var body = document.querySelector("body")
var bg = document.querySelector("div.bg");

mobBtn.addEventListener('click',function(){
    mob.classList.add("on");
    mobClose.classList.add("on");
    body.classList.add("on");
	bg.classList.add("on");
	mobBtn.style.display = "none";
});
//햄버거 버튼 클릭 닫기
mobClose.addEventListener('click',function(){
    mob.classList.remove("on");
    mobClose.classList.remove("on");
    body.classList.remove("on");
	bg.classList.remove("on");
	mobBtn.style.display = "block";
});

//주메뉴
var gnbMenu = document.querySelectorAll(".gnb > ul > li"); 
var headerWrap = document.querySelector(".header_wrap");
var formSrch = document.querySelector("form.srch");
var srchOpen = document.querySelector(".srch_open");
var topMenuDD = document.querySelectorAll("dl.topMenu > dd");
var subMenu = document.querySelectorAll(".gnb > ul > li > ul");


for (var i = 0; i < gnbMenu.length; i++) {
    gnbMenu[i].addEventListener('mouseover', function(){
        if (devWidth < limitsize) return false; //여기서 끝내라

        if (formSrch.offsetWidth > 0 && formSrch.offsetHeight > 0) {
            formSrch.classList.remove("on");
            srchOpen.classList.remove("on");
        }

        if (topMenuDD[4].classList.contains('on'));{
            topMenuDD[4].classList.remove("on");
        }

        headerWrap.classList.add("on");

        subMenu.forEach(function(item) {
            item.classList.add("on");
        })
    })  //mouseover
    gnbMenu[i].addEventListener('mouseout', function(){
        if (devWidth < limitsize) return false;
    
        headerWrap.classList.remove("on");
    
        subMenu.forEach(function(item) {
            item.classList.remove("on");
        })
    })//mouseout
    
}//for



//로그인 이미지
var appear="";
for(var i=0; i<57; i++){
    if(i < 10){ 
        appear += "<img src='images/appear/appear_0000" + i + ".png' alt='로그인버튼" + i + "'/>";
    }else{
        appear += "<img src='images/appear/appear_000" + i + ".png' alt='로그인버튼" + i + "'/>";
    }
}

document.querySelector("a.appear").innerHTML = appear; //.html(appear); > .innerHTML

var loop="";
for(var i=0; i<82; i++){
    if(i < 10){
        loop += "<img src='images/loop/loop_0000" + i + ".png' alt='로그인버튼" + i + "'/>";
    }else{
        loop += "<img src='images/loop/loop_000" + i + ".png'  alt='로그인버튼" + i + "'/>";
    }
}

document.querySelector("a.loop").innerHTML = loop; 

// 로그인 애니메이션
var apperImg = document.querySelectorAll(".appear > img");
for(var k=0; k<57; k++){
    apperImg[k].style.animation = "ani 2.85s linear " +(k*0.05)+"s 1 normal";
}

var loopImg = document.querySelectorAll(".loop>img");
for(var j=0; j<82; j++){
    loopImg[j].style.animation = "ani 4.1s linear "+(2.85+0.05*j)+"s infinite normal";
}



//퀵메뉴 이미지
var quick1="";
for(var i=0;i<20;i++){
    if(i<10){
        quick1 += "<img src='images/quick01/quick01_0000"+i+".png' />";
    }else{
        quick1 += "<img src='images/quick01/quick01_000"+i+".png' />";
    }
   
}
document.querySelector("span.quick1").innerHTML = quick1;

var quick2="";
for(var i=0;i<20;i++){
    if(i<10){
        quick2 += "<img src='images/quick02/quick02_0000"+i+".png' />";
    }else{
        quick2 += "<img src='images/quick02/quick02_000"+i+".png' />";
    }
    
}
document.querySelector("span.quick2").innerHTML = quick2;

var quick3="";
for(var i=0;i<20;i++){
    if(i<10){
        quick3 += "<img src='images/quick03/quick03_0000"+i+".png' />";
    }else{
        quick3 += "<img src='images/quick03/quick03_000"+i+".png' />";
    }
    
}
document.querySelector("span.quick3").innerHTML = quick3;


var quick4="";
for(var i=0;i<20;i++){
    if(i<10){
        quick4 += "<img src='images/quick04/quick04_0000"+i+".png' />";
    }else{
        quick4 += "<img src='images/quick04/quick04_000"+i+".png' />";
    }
    
}
document.querySelector("span.quick4").innerHTML = quick4;



//마우스 올렸을 때
var content1Li = document.querySelectorAll(".content1 ul li");

content1Li.forEach(function(item){
    item.addEventListener("mouseover",function(){
        for(var k = 0; k < 20; k++){
            var imgLi = this.children[0].children[0].children; //img
            imgLi[k].style.animation = "ani 1s linear "+0.05*k+"s 1 normal";
        }
    });
});
//마우스 뎃을때
content1Li.forEach(function(item){
    item.addEventListener("mouseout",function(){
        for(var k = 0; k < 20; k++){
            var imgLi = this.children[0].children[0].children; //img
            imgLi[k].style.animation = "none";
        }
    });
});







	// 검색열기
    srchOpen.addEventListener('click',function(){
        this.classList.toggle('on');
        formSrch.classList.toggle('on');

        if(this.classList.contains("on")){ //열고닫기
			this.children[0].setAttribute("title","검색입력서식 닫기");
		}else{
			this.children[0].setAttribute("title","검색입력서식 열기");
		}
    });


    // 고객센터
    topMenuDD[4].addEventListener("click", function(){
        this.classList.toggle("on");
        if (this.classList.contains("on")) {
            this.children[0].setAttribute("title", "고객센터 닫기");
        } else {
            this.children[0].setAttribute("title", "고객센터 열기");
        }
    })
    // 모바일 고객센터
    var mobTopMenu = document.querySelectorAll(".mob_topMenu > dd");
    mobTopMenu[4].addEventListener('click', function(){
        this.classList.toggle("on");
        if (this.classList.contains("on")) {
            this.children[0].setAttribute("title", "고객센터 닫기");
        } else {
            this.children[0].setAttribute("title", "고객센터 열기");
        }
    })

    
    /* 모바일 주메뉴 2단 */
    var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li");
    for (i = 0; i < mobGnbLi.length; i++) {
        mobGnbLi[i].addEventListener("click", function () {
        //siblings()
        mobGnbLi.forEach(function(item){
            item.classList.remove("on");  
        });
        this.classList.toggle("on");
    });
    }



// 배너 다음 이전
    var bnnNum = 0;
    var lastNum = document.querySelectorAll('.banner_frame > section').length - 1;
    var banner_W = document.querySelector('body>section').offsetWidth;

    window.addEventListener('resize',function(){
        banner_W = document.querySelector('body>section').offsetWidth;
    });

    var next = document.querySelector('.next');
    var bannFrame = document.querySelector(".banner_frame");

    var bannSection = document.querySelectorAll('.banner_frame > section');
    var arrowA = document.querySelectorAll('.arrow a');
    var rollingA = document.querySelectorAll('.rolling a');
    var banner_rollA = document.querySelectorAll('.banner_roll a');
    var prev = document.querySelector('.prev');


    //배너-다음
    next.addEventListener('click',function(){
        bnnNum++;
        if(bnnNum > lastNum) bnnNum = 0;
        bannFrame.style.left = bnnNum * -banner_W + "px";

        if(bannSection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });

    //배너-다음
    prev.addEventListener('click',function(){
        bnnNum--;
        if(bnnNum < 0) bnnNum = lastNum;
        // bannFrame.classList.add('on')
        bannFrame.style.left = bnnNum * (-banner_W) + "px";

        if(bannSection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });

    


// 오토배너
//오토배너
function autoBanner(){
    bnnNum++;
        if(bnnNum > lastNum) bnnNum = 0;
        // bannFrame.classList.add('on')
        bannFrame.style.left = bnnNum * (-banner_W) + "px";

        if(bannSection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
}
var autoBann = setInterval(autoBanner,5000);



//재생 멈춤
var flag = true;
var play = document.querySelector('a.play');
play.addEventListener('click',function(){
    if(flag){
        clearInterval(autoBann);
        this.classList.add('pause');
        flag = false;
    }else{
        autoBann = setInterval(autoBanner,5000);
        this.classList.remove('pause');
        flag = true;
    }
});



//롤링 클릭 ??
var banner_roll = document.querySelectorAll(".banner_roll li")
banner_roll.forEach(function(item){
    item.addEventListener('click', rollAtion);     
});

function rollAtion(item){
    curRoll = item.currentTarget; // 클릭 이벤트가 전달된 엘리먼트
    parentRoll = curRoll.parentElement; //연결된 엘리먼트의 부모 ul
    childRoll = parentRoll.children; //부모 엘리먼트의 자식 엘리먼트 li
    bnnNum = Array.from(childRoll).indexOf(curRoll); //연결된 엘리먼트의 인덱스 번호 알아냄

    bannFrame.style.left = bnnNum * (-banner_W) + "px";

        if(bannSection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');

}




//content3
//마우스 올렸을때
var all = document.querySelectorAll('.content3_inner > div > ul > li');

all.forEach(function(item){
    item.addEventListener('mouseover',function(){
        this.classList.add('on');
    });
    item.addEventListener('mouseout',function(){
    this.classList.remove('on');
    });
});


//대분류
var group = document.querySelectorAll(".content3_inner > ul > li > a");

var all = document.querySelectorAll(".content3_inner > div > ul > li");
var ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
var shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
var diner = document.querySelectorAll(".content3_inner > div > ul > li.diner");
var box = document.querySelectorAll(".content3_inner > div > ul > li.box");

for(var k=0; k<group.length;k++){
    group[k].addEventListener('click', function(event){
        event.preventDefault();//점핑방지

        group.forEach(function(idx){
            idx.classList.remove('on');
        });
        this.classList.add('on');

        var className = this.parentElement.getAttribute("class");
        console.log(className);

        all.forEach(function(item){ //모든 li들을 안보이게
            item.style.display = "none";
        });
        switch (className) {
            case "all" :
                all.forEach(function(item){
                    item.style.display = "block";
                });
                break;
            case "ent" :
                ent.forEach(function(item){
                    item.style.display = "block";
                }); 
                break;
            case "shop" :
                shop.forEach(function(item){
                    item.style.display = "block";
                });  
                break; 
            case "diner" :
                diner.forEach(function(item){
                    item.style.display = "block";
                });   
                break;
            case "box" :
                box.forEach(function(item){
                    item.style.display = "block";
                }); 
                break;
            default:
                break;
        };
    });//click

};

    

//family_site 바로가기 열고 닫기
var family = document.querySelector(".family_site");

    family.addEventListener('click', function(e){
		e.preventDefault();
        this.classList.toggle("on");
		
		if(this.classList.contains("on")){ //title 열고닫기 알림말
		    this.children[0].setAttribute("title","닫기");
		}else{
			this.children[0].setAttribute("title","열기");
		}
	});






//스크롤 이벤트
var btntop = document.querySelector("div.top");

window.addEventListener('scroll', function(){
    var scroll= this.document.querySelector('html').scrollTop;

    // top버튼
    if(scroll <= 0){
        btntop.classList.remove("on","ab");
    }else if(scroll > 0 && scroll < 2700){
        btntop.classList.remove("ab");
        btntop.classList.add("on");
    }else{
        btntop.classList.add("ab"); //top 에 앱솔루트 붙어서 움직여라
    }

    //도넛
    var Left_L = this.document.querySelector('.doughnut_Left_L') 
    var Left_s = this.document.querySelector('.doughnut_Left_s') 
    var Left = this.document.querySelector('.combine_Left') 
    var Center_M = this.document.querySelector('.doughnut_Center_M') 
    var Center_s = this.document.querySelector('.doughnut_Center_s') 
    var right_M = this.document.querySelector('.doughnut_right_M') 
    var right_s = this.document.querySelector('.doughnut_right_s')
    var right = this.document.querySelector('.combine_right')  
    
    Left_L.style.top = 71 + scroll * 0.5 + 'px';
    Left_s.style.top = 796 + scroll * 1.1 + 'px';
    Left.style.top = 1726 + scroll * 0.1 + 'px';

    Center_M.style.top = 722 + scroll * 0.1 + 'px';
    Center_s.style.top = 991 + scroll * 1.1 + 'px';

    right_M.style.top = 365 + scroll * 0.5 + 'px';
    right_s.style.top = 947 + scroll * 0.1 + 'px';
    right.style.top = -300 + scroll *0.7 + 'px';


    
    btntop.addEventListener('click',function(e){
        e.preventDefault();

        window.scroll({
            top:0,
            left:0,
            behavior:'smooth'
        });
    });
});



