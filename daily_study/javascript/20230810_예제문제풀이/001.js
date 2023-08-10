//문제1
//전달받은 객체의 키와 벨류값을 모두 출력하는 for문을 만들어보세요.
const person = {
    name: '재현',
    age: 20,
    gender: 'male'
};

for(let i in person){
    console.log(`${i} : ${person[i]}`);
}

//문제 2
//사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다.
//만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.
const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];

while(true){
    let order = parseInt(prompt('메뉴 번호를 입력해 주세요: 아메리카노(1), 카페라떼(2), 카페모카(3), 핫초코(4), 과일 주스(5),(종료번호: 99)'));
    console.log(`메뉴명: ${menu[order].name} | 메뉴명: ${menu[order].price}`);
}