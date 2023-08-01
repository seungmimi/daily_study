document.getElementById('clickBtn_3').onclick = function(){
    window.alert('안녕하세요!!!')
}
function typeCheck(value) {
    const return_value = Object.prototype.toString.call(value);
    const type = return_value.substring(
        return_value.indexOf(" ") + 1,
        return_value.indexOf("]")
    );
    return type.toLowerCase();
}
let x1 = 1;
let x2 = "안녕";
let x3 = [1,2,3];

console.log(typeCheck(x1));
console.log(typeCheck(x2));
console.log(typeCheck(x3));