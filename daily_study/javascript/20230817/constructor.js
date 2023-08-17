let book = {
    책이름: '알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라',
    책가격: 0,
    저자: ['구나영', '김경림'],
    출판일: '2022.08.12'
}
// 책이 100권이라면?


function Book(책이름, 책가격, 저자, 출판일){
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
}
let book1 = new Book('JS', 0, ['이호준'], '2099.10.30')
let book2 = new Book('Python', 100000, ['이호준'], '2099.11.30')
let book3 = new Book('React', 1000000, ['이호준'], '2099.12.30')