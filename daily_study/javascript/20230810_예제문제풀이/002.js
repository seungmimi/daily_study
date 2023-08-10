//문제
const student = [
    {
        id: 1, product: '연필', stock: 10
    },
    {
        id: 2, product: '지우개', stock: 33
    },
    {
        id: 3, product: '체육복', stock: 2
    },
    {
        id: 4, product: '만연필', stock: 5
    },
    {
        id: 5, product: '책받침', stock: 100
    }
];
//위 배열에서 product의 이름으로 오름차순 정렬하기
console.log(student.sort(function(a,b){
    return a.product < b.product ? -1 : a.product > b.product ? 1 : 0;
})
);


//문제
//다음 배열에서 name 의 값들을 forEach 문을 이용해 콘솔에 출력
const studentList = [
    {
        id: 1, name: '원범', score: 'great'
    },
    {
        id: 2, name: '김진', score: 'so cute'
    },
    {
        id: 3, name: '혜원', score: 'good good'
    },
    {
        id: 4, name: '재현', score: 'too cool for school'
    }
]
//위 배열에서 name 의 값들을 forEach 문을 이용해 콘솔에 출력
studentList.forEach(function(v,i){
    console.log(v.name);
});

//위 배열에서 score 의 값들만 모아 새로운 배열로 반환해봅시다! 이때 score 값에 하트💖를 추가
let scoreList = studentList.map((v) => v.score + "💖");
console.log(scoreList);