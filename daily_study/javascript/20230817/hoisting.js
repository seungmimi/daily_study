console.log(x); //undefined 반환
console.log(y); //"초기화전에 y에 접근할 수 없음" 에러 -> can not find 오류가 뜨지 않음
console.log(z); //"초기화전에 y에 접근할 수 없음" 에러

var x = 1;
let y = 2;
const z = 3;

/*
x가 undefined반환 되는 이유: 호이스팅으로 인해 선언문이 최상단으로 끌어올려져서
y,z의 경우 let, const로 선언되었기 때문에 TDZ에 할당 되어 호이스팅이 안된것 처럼 보여지는 것
*/