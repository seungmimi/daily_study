//Math.random() ->  0~1 사이의 랜덤의 실수
//parseInt() -> 소수점을 버릭 정수형으로 변환
var lotto = [];
while(lotto.length < 6){
    var num = parseInt(Math.random() * 45 + 1);
    //indexOf() 배열안에 동일한 값이 있는지 확인(없으면 -1 출력)
    if(lotto.indexOf(num) == -1){
        lotto.push(num)
    };
}
lotto.sort((a,b)=>a-b);
// document.write(lotto);
function counter(){
    var content = document.getElementById('jasoseol').value;
    if(content.length > 200){
        //substring()문자열 구간 자르기
        content = content.substring(0,200);
        document.getElementById('jasoseol').value = content;
    }
    document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}
counter();

