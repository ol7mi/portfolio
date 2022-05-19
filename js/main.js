// popup div 개체 가져오기
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");
const popup5 = document.getElementById("popup5");

// 위에서 가져온 개체를 배열로 만들기
const popArr = [
    popup1,
    popup2,
    popup3,
    popup4,
    popup5
];

// popup 리스트 가져오기
const popups = document.getElementById("popups").children;

// 카카오톡 이미지 넘기기
let idx = 1;
let fileName = "";
let intervalId = null;
const kakaoImg = document.getElementsByClassName('kakao_content')[0];

function kakaoImgMove()
{
    fileName = 'images/' + 'iPhone_img' + idx + '.png';
    idx++;
    if (idx > 7) idx = 1;
    kakaoImg.src = fileName;
}

// 윈도우 로드 됐을 때
window.onload = function () {
    // popup 리스트 요소마다 클릭 이벤트 넣어주기
    for (let i = 1; i < popups.length; i++) {
        popups[i].addEventListener('click', function(){
            // 모든 popup 개체에 on 클래스 제거
            popArr[0].classList.remove('start');
            popArr[1].classList.remove('start');
            popArr[2].classList.remove('start');
            popArr[3].classList.remove('start');
            popArr[4].classList.remove('start');

            // 클릭된 popup 개체에 on 클래스 추가
            popArr[i-1].classList.add('start');

            if (popArr[i-1].id == 'popup5') {
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
                intervalId = setInterval(kakaoImgMove, 1500);
            }
        });
    }

    
}