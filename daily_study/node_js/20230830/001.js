//비구조화 할당(디스트럭쳐링)
const obj = {a:1, b:2}

//변수 명과 동일한 키값의 값이 할당
const {a,b} = obj;
// const a = obj.a;
// const b = obj.b;
console.log(a);
console.log(b);

const arr = [1,2];
const [one, two] = arr;
console.log(one);
console.log(two);

function sayHello(){
    return new Promise((resolve, reject) => {
        //resolve : 성공했을때, reject : 실패했을때
        resolve('hello')
        // reject(new Error());
    })
}

async function test(){
    const hello1 = await sayHello();
    console.log(hello1)
}
test();

