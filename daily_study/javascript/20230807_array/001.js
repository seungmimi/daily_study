//push - 배열 뒤에 값을 추가(반환값: 배열의 길이)
//pop - 배열 뒤에서 값을 꺼내고, 반환
//unshift - 배열 앞에 값을 추가ㅡ 추가(반환값: 배열의 길이)
//shift - 앞에서 값을 꺼내고, 반환

//문제
//입력값: [10,20,30,40]
//출력값: [10,100,20,30,50]
let array = [10, 20, 30, 40];
array.pop()
array.shift();
array.push(50);
array.unshift(10,100);
console.log(array);

// 1. splice(start, deleteCount, item1, item2, ...)
let arr = [10, 20, 30];
arr.splice(1, 0, 100) //1번째에, 0개를 지우고, 100을 넣어라

let arr1 = [10, 20, 30];
arr1.splice(1, 2, 100, 200) //1번째 부터, 2개를 지우고, 100과 200을 넣어라
console.group(arr1);

//문제
let arr2 = [10, 20, 30, 40];
let x = [1, 2, 3];
//만들고 싶은 값: [10, 1, 2, 3, 20, 30, 40, 1, ,2 ,3 100]

arr2.splice(1, 0, ...x);
arr2.splice(7, 0, ...x);
arr2.push(100);
//...x - 전개구문: 배열의 []를 제거

// .splice에서 인자값을 한개만 넣으면, 그 인덱스부터 부터 끝까지 다 지운다
let arr3 = [10, 20, 30, 40];
arr3.splice(1) //첫번째 부터 다 지워라
arr3.splice(1,2) //1번째 부터 2개를 지워라(삽입값은 X)


// 2. slice(start, end)
// 주의! 원본은 수정되지 않음 / splice는 원본을 수정
let arr4 = [10, 20, 30, 40]
arr.slice(1,3); // 1번째부터 3번째 전까지 자른다