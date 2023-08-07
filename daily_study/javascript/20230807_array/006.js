// filter
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr.filter(v => v % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = arr.filter(v => {
    return true
})
result2

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr.filter(v => {
    return false
})
result3

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = arr.filter(v => {
    return v > 5
})
result4

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result5 = arr.filter(v => {
    return v % 2 !== 0
})
result5

// reduce
[1, 5, 3, 4, 5].reduce((a,c) => a + c, 0);

//join(****)
let arr6 = ['hello', 'world', 'hojun']
arr6.join('!') // hello!world!hojun

let arr7 = ['hello', 'world', 'hojun']
arr7.join(' ') // hello world hojun

let arr8 = ['hello', 'world', 'hojun']
arr8.join('-') // hello-world-hojun

// 문제1. https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 문제 : 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
    return Array(n).fill(0).map((_,i) => i + 1).filter(v => v % 2 === 0).reduce((a,c) => a + c, 0);
}

// 문제2. https://school.programmers.co.kr/learn/courses/30/lessons/120585
// 문제 : 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

function solution(array, height) {
    let answer = 0;
    array.forEach(v => {
        v > height ? answer++ : null; 
    });
    return answer;

    //이렇게 짧게 할수도!
    //return array.filter(v => v > height).length
}

// 문제3. https://school.programmers.co.kr/learn/courses/30/lessons/120849
// 문제 : 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    let 모음 = ['a', 'e', 'i', 'o', 'u'];
    my_string.split('').filter(v => !모음.includes(v)).join();
}

//문제4. 1부터 100까지의 숫자 중 3의 배수만 더한 값을 출력(map/filter/reduce를 사용해서)
Array(100).fill(0).map((_, i) => i+1).filter(v => v % 3 === 0).reduce((a,c) => a+c,0);

//문제5. 1부터 100까지의 숫자 중 1이라는 숫자가 들어간 숫자는 모두 더해서 출력
Array(100).fill(0).map((_, i) => i+1).filter(v => v.toString().includes(1)).reduce((a,c) => a+c,0);