class VendingMachineFunc {
    constructor() {
        // section 1 요소 선택
        const vMachine = document.querySelector('.section1');
        this.balance = vMachine.querySelector(".bg-box p");
        this.itemList = vMachine.querySelector('.cola-list');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.get-list');

        // section 2 요소 선택
        const myInfo = document.querySelector('.section2');
        this.myMoney = myInfo.querySelector('.bg-box p');

        // section3 요소 선택
        const getInfo = document.querySelector('.section3');
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    setup(){
        this.bindEvents();
    }

    //장바구니에 선택한 콜라 목록을 생성
    stagedItemGenerator(target){
        const stagedItem = document.createElement('li');
        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.img = target.dataset.img;
        stagedItem.dataset.price = target.dataset.price;
        stagedItem.innerHTML = 
        `<img src="./img/${target.dataset.img}" alt="">
        ${target.dataset.item}
        <strong>
            1
            <span class="a11y-hidden">개</span>
        </strong>
        `
        this.stagedList.append(stagedItem);
    }

    //이벤트를 붙입니다
    bindEvents(){
        //1. 입금버튼 이벤트
        this.btnPut.addEventListener('click',() => {
            //사용자 입력 값
            const inputCost = parseInt(this.inputCostEl.value);
            //현재 사용자의 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
            //현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
            if(inputCost && inputCost > 0){
                if(inputCost <= myMoneyVal){
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal?balanceVal:0)+ inputCost) + '원';
                }else{
                    alert('소지금이 부족합니다.');
                }
                this.inputCostEl.value = null;
            }
        });

        //2. 반환버튼 이벤트
        this.btnReturn.addEventListener('click',() => {
            //현재 사용자의 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
            //현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
            if(balanceVal){
                this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal + balanceVal) + ' 원';
                this.balance.textContent = null;
            }
        });

        //3. 자판기 메뉴를 눌렀을때
        const ColaBtns = this.itemList.querySelectorAll('button');
        ColaBtns.forEach((colaBtn) => {
            colaBtn.addEventListener('click',(event) => {
                //현제 잔액
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
                const targetElPrice =  parseInt(colaBtn.dataset.price);
                let isStaged = false;
                const stagedListItem = this.stagedList.querySelectorAll('li');
                if(balanceVal >= targetElPrice){
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + ' 원';

                    for (const item of stagedListItem){
                        if(item.dataset.item === colaBtn.dataset.item){
                            const itemTxt = item.querySelector('strong');
                            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
                            isStaged = true;
                            break;
                        }
                    }
                    if(!isStaged){
                        this.stagedItemGenerator(colaBtn);
                    }

                    colaBtn.dataset.count--;
                    if(parseInt(colaBtn.dataset.count) === 0){
                        colaBtn.disabled = true;
                        colaBtn.insertAdjacentHTML('afterbegin','<strong class="soldout">품절</strong>')
                    }
                    

                }else{
                    alert('잔액이 부족합니다. 돈을 더 입금해 주세요💸')
                }
            });
        });

        //4. 흭득 버튼을 눌렀을 때
        this.btnGet.addEventListener('click',() => {
            const itemStagedList = this.stagedList.querySelectorAll('li');
            const itemGetList = this.getList.querySelectorAll('li');
            let totalPrice = 0;

            for(const itemStaged of itemStagedList){
                let isStaged = false;
                for(const itemGet of itemGetList){
                    if(itemStaged.dataset.item === itemGet.dataset.item){
                        const itemTxt = itemGet.querySelector('strong');
                        const stagedTxt = itemStaged.querySelector('strong');
                        itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + parseInt(stagedTxt.firstChild.textContent);
                        isStaged = true;
                        break;
                    }
                }
                if(!isStaged){
                    this.getList.append(itemStaged);
                }
            }
            this.stagedList.innerHTML = null;

            this.getList.querySelectorAll('li').forEach((itemGet) => {
                totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector('strong').firstChild.textContent);
            });
            this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(totalPrice)} 원`;
        });
    }
}

export default VendingMachineFunc;