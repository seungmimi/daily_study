//무결한 코드
//data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)));

const data = ['a', 'z', 'b', 'e'];
data.sort();

//숫자 정렬
//data.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0)));

let test1 = [13, 9, 10];
test1.sort((a, b) => (a - b)); //오름차순
test1.sort((a, b) => (b - a)); //내림차순
// (a, b) => (a - b)가 콜백함수입니다.
// a - b 값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// a - b 값이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
// a - b 값이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. 즉, b가 먼저옵니다.

// 원리
let test2 = [13, 9, 10, 2];
test2.sort((a, b) => {
    console.log(a, b)
})
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// 9 13
// 10 9
// 2 10

let test3 = [13, 9, 10, 2];
test3.sort((a, b) => {
    console.log(a, b)
    console.log(a - b) // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
});

let test4 = [13, 9, 10, 2];
test4.sort((a, b) => {
    return a - b;
})
 // 작은 값이 앞으로 간다 => 오름차순