/* 문제 1
사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요. 
성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.
*/

let score = parseInt(prompt("점수를 입력해 주세요"));
switch(true){
    case score >= 90: 
        console.log("A");
        break;
    case score >= 80: 
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    default:
        console.log("강해져서 돌아와라");
        break;
}