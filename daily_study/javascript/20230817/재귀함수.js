//1. 펙토리얼 함수
function factorial(n){
    if(n <= 1){
        return n
    }
    return n * factorial(n-1)
}
/*
동작 순서 (n이 5일 경우)
1. 5 * factorial(4) 리턴 -> factorial(4) 실행
2. 5 * 4 * factorial(3) 리턴 -> factorial(3) 실행
.
.
n이 1이 될때 까지 반복
*/

//2. 시그마 함수
function sigma(n){
    if(n <= 1){
        return n
    }
    return n + sigma(n-1);
}
/*
동작 순서 (n이 5일 경우)
1. 5 + sigma(4) 리턴 -> sigma(4) 실행
2. 5 + 4 + sigma(3) 리턴 -> sigma(3) 실행
.
.
n이 1이 될때 까지 반복
*/

//3. 문자열 뒤집기
function reverse(text){
    if(text.length <= 1){
        return text
    }
    return reverse(text.slice(1)) + text[0];
}

//문제 풀이
//재귀 함수를 사용하여 숫자를 원소로하는 배열의 모든 요소를 합하는 함수를 만들어 보세요!
//ex. 입력 : [1,2,3] -> 리턴 : 6
function arrSum(arr){
    if(arr.length <= 1){
        return arr[0];
    }
    return arr.shift() + arrSum(arr);
    //slice()를 사용해서 배열 자르기도 가능!
}