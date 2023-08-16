let obj = {one: 1, two: 2};
let {one: myNum} = obj;
document.write(myNum);

const foodList = {food1: '과일',food2: '채소', food3: '육류'};
const {food1, food2, food3} = foodList;
console.log(food1, food2, food3);

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

function myFunc([a, b]){
    console.log(a);
    console.log(b);
}

const arr2 = [4, 5];
myFunc(arr2);