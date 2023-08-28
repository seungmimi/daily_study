//svg 이미지 요소
const path = document.querySelector('#path');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = `${pathLength} ${pathLength}`;
path.style.strokeDashoffset = pathLength;

//버튼 요소
const btnOpen = document.querySelector('.btn_open');


window.addEventListener('scroll',scrollHandler);

function scrollHandler(){
    //현재 스크롤 위치
    const scrollTop = document.documentElement.scrollTop;
    //전체 스크롤 길이
    const scrollHeight = document.documentElement.scrollHeight;
    //뷰포트 높이
    const clientHight = document.documentElement.clientHeight;

    //스크롤의 위치 => %
    const scrollPercentage = scrollTop / (scrollHeight - clientHight);

    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;


    //버튼 요소 조절
    btnOpen.style.opacity = scrollPercentage;
    if(scrollPercentage > 0.8){
        btnOpen.disabled = false;
    }else{
        btnOpen.disabled = true;
    }
}
