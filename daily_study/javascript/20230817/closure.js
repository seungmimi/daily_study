const outer = function(){
    let a = 1;
    const inner = function(){
        let b = 5;
        let c = 6;
        a = a + b + c;
        console.log(a);
    }
    return inner;
}
const newInner = outer();
newInner();

const person = function(){
    let age = 15;
    return{
        name: 'jeahyun',
        getAge(){
            return age;
        },
        setAge(val){
            age = val;
        }

    }
}
const man = person();