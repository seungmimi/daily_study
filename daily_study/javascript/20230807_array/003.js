// forEach(콜백함수)
let arr = [10, 20, 30, 40, 50]
arr.forEach((value, index, array) => {
    console.log(value, index, array)
})

// 문제1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성
let arr1 = [10, 20, 30, 40, 50,]
let sum = 0;
arr.forEach(v => {
    sum += v
})
console.log(sum);

//문제2. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성
let arr2 = [10, '20', 30, '40', 50,]
let sum2 = 0;
arr.forEach(v => {
    sum2 += parseInt(v);
})
console.log(sum2);

//문제3. forEach를 사용해서 짝수 인덱스의 값을 모두 더하세오
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum3 = 0;
arr3.forEach((v,i) => {
    if(i % 2 === 0){
        sum3 += v
    }
})
console.log(sum3);

//문제4. https://school.programmers.co.kr/learn/courses/30/lessons/120835
let userInput = [3, 76, 24]
let sortValue = [...userInput].sort((a,b) => b - a)
userInput.forEach((v, i) => {
    userInput[i] = sortValue.indexOf(v) + 1;
})

//문제5. 1부터 100까지의 숫자 중 3의 배수만 더해주세요
let sum4 = 0;
Array(100).fill(0).forEach((v, i) => {
    if(i % 3 === 0){
        sum4 += i+1
    }
})

//문제6. 아래와 같이 출력되게 해주세요.
//input = ['hojun','dongjun','dongwook']
//output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']

let input = ['hojun','dongjun','dongwook']
let output = []
input.forEach(v =>{
    output.push(`${4} is good`)
})

// 문제7. 010-5044-2903번호가 있었을 때 아래와 같이 출력되게 해주세요. 뒤에 2자리를 x로 바꿔주세요.
// input = '010-5044-2903'
// output = '0xx-50xx-29xx'
'010-5044-2903'.split('-').forEach((v, i) => {
    console.log(v)
})

'010-5044-2903'.split('-').forEach((v, i) => {
    console.log(v.replace(v.slice(-2), 'xx'))
})

'010-4444-2903'.split('-').forEach((v, i) => {
    console.log(v.replace(v.slice(-2), 'xx'))
})

'hello world hello'.replace('hello', 'hojun')

/////////////////////////////

'010-4444-2903'.split('-').forEach((v, i) => {
    if (v.length === 4) {
        console.log(v[0] + v[1] + 'xx')
    }
    else {
        console.log('0xx')
    }
})

'010-4444-2903'.split('-').forEach((v, i) => {
    v.length === 4 ? console.log(v[0] + v[1] + 'xx') : console.log('0xx')
})

'010-4444-2903'.split('-').forEach((v, i) => {
    v.length === 4 ? console.log(v.slice(0, 2) + 'xx') : console.log('0xx')
})

/////////////////////////////





// 주의사항
// forEach는 return을 사용할 수 없습니다.
// forEach는 break, continue를 사용할 수 없습니다.
// ElemetnNodeList는 forEach를 사용할 수 없습니다.