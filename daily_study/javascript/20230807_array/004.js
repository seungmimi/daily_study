// map
// forEach와 차이점
// 1. forEach는 return이 없습니다.
// 2. map은 원본을 수정하여 새로운 배열을 만들고, forEach는 원본 배열을 변경하지 않습니다.

Array(100).fill(0).map((v,i) => i);

let data = [1, 2, 3, 4];
data.map(v => 'hello' + v);
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map(v => 'hello world');
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map(v => 'hello' + v);
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => 'hello' + (i + 1));
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v, i) => 'hello' + i);
// ['hello1', 'hello2', 'hello3', 'hello4']

// 같은 코드 1(******)
[1, 2, 3, 4].map(v => 'hello' + v)

// 같은 코드 2
function 함수(v) {
    return 'hello' + v
}
[1, 2, 3, 4].map(함수)

// 같은 코드 3
[1, 2, 3, 4].map(function (v) {
    return 'hello' + v
})

// 같은 코드 4(******)
[1, 2, 3, 4].map((v) => {
    return 'hello' + v
})