/*
1. 입금을 하면 tost에 클레스 active 추가 -> 3초뒤에 클레스 삭제
2. 반환을 하면 tost에 클레스 active 추가 -> 3초뒤에 클레스 삭제
*/
let tostMessage = document.getElementById('tost_message');
function tostOn(){
    tostMessage.classList.add('active');
    setTimeout(function(){
        tostMessage.classList.remove('active');
    },1000);
}

/*
1. 입금을 하면 잔액에 + 
2. 거스름돈 반환을 하면 잔액 -> 0
*/

let insertCoinBtn = document.getElementById('insert_coin_btn');
let changeBtn = document.getElementById('change_btn');
let changeForm = document.getElementById('change');
let insertCoin = 0
let change = 0;

insertCoinBtn.addEventListener('click',function(){
    if(document.getElementById('input_m').value == 0){
        alert('입금하실 금액을 입력해 주세요!');
    }else{
        let insertCoin = document.getElementById('input_m').value;
        change = Number(insertCoin) + Number(change);
        changeForm.innerHTML = change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '<span class="unit">원</span>';
        tostMessage.innerHTML = insertCoin + '원이 입금 되었습니다!'
        document.getElementById('input_m').value = null;
        tostOn();
    }

});
changeBtn.addEventListener('click',function(){
    change = 0;
    changeForm.innerHTML = change + '<span class="unit">원</span>';
});

