Math.random(); // 0 ~ 0.999999..... 사이의 실수
//더하면 시작 위치 지정
//ex. Math.random() + 2 -> 2 ~ 2.999999.....
//곱하면 범위 지정
//ex. Math.random() * 10 -> 0 ~ 9.999999.....

//1 ~ 45 중복없이 6개
const lotto = [];
let number = 0;
function numSelecter(){
    while(lotto.length < 6){
        number = parseInt(Math.random() * 45 + 1);
        if(!lotto.includes(number)){
            lotto.push(number);
        }
    }
}
numSelecter();
console.log(lotto);