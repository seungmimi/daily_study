/* 문제 1
사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 
나이가 18세 이상이면 "안녕하세요!"를 출력하고, 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 출력하며, 10세 미만이면 “부럽다…” 를 출력합니다.
*/

let answer = prompt("나이를 입력해 주세요");
if(answer >= 18){
    console.log("안녕하세요!");
}else if(answer >= 10){
    console.log("안녕! 반가워 꼬마친구!");
}else{
    console.log("부럽다...");
}

/* 문제 2
사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요. 
성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.
*/

let score = Number(prompt("점수를 입력 해 주세요"));
//프롬포트로 받는 데이터 형 = 문자열
//숫자형으로 바꾸는방법
// 1. parseInt() : 숫자형으로 변환 & 소수점 이하 생략
// 2. Number() : 숫자형으로 변환

//if문으로 표현
if(score >= 90){
    console.log("A");
}else if(score >= 80){
    console.log("B");
}else if(score >= 70){
    console.log("C");
}else if(score >= 60){
    console.log("D");
}else{
    console.log("강해져서 돌아와라");
}

//삼항연산자로 표현
score = score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : (score >= 60 ? "D" : "강해져서 돌아와라")));
console.log(score);

