// push: 배열 뒤에 값을 추가
[10, 20, 30].push(40)
// pop: 배열 뒤에 값을 꺼내고, 리턴
[10, 20, 30].pop()

// unshift: 배열 앞에 값을 추가
[10, 20, 30].unshift(40)
// shift: 배열 앞에 값을 꺼내고, 리턴
[10, 20, 30].shift()

// splice: (시작할 지점, 삭제할 개수, 삽입할 아이템)
[10, 20, 30].splice(1, 0, 40)

// sort: 정렬 처리
[10, 20, 30].sort()
[10, 20, 30].sort((a, b) => a - b) // 오름차순
[10, 20, 30].sort((a, b) => b - a) // 내림차순

// map: 배열의 각요소를 순회하면서 함수를 실행(새로운 배열을 리턴)
[10, 20, 30].map((v, i) => v ** 2)

// forEach : 배열의 각요소를 순회하면서 함수를 실행(원본 변경 X)
[10, 20, 30].forEach((v, i) => console.log(v))

// filter
[10, 20, 30].filter((v, i) => v > 15)

// reduce
[10, 20, 30].reduce((a, c) => a + c, 0)

// includes(String에도 있습니다!)
[10, 20, 30].includes(20)

// join
[10, 20, 30].join('!')

// reverse
[10, 20, 30].reverse()