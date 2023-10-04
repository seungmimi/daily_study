import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpenseAction, setAllpay } from '../../store/expense/expense-slice';

function ExpenseInput() {

    const dispatch = useDispatch();
    //지출 이름을 관리
    const [name, setName] = useState('');

    //지출 금액을 관리
    const [price, setPrice] = useState(0);

    function submit(event){
        event.preventDefault();
        //페이로드 전달 시 프로퍼티랑 값이 같을 경우 이름 생략 가능(name: name -> name)
        dispatch(addExpenseAction({name, price}));
    }

    return (
    <form onSubmit={submit}>
        <div>
            <label>
                지출 상품 명 :
                <input type='text' placeholder='예: 사과' onChange={(event) => {
                    setName(event.target.value);
                }} />
            </label>
        </div>
        <div>
            <label>
                지출 상품 금액 :
                <input type='number' placeholder='예: 5000' onChange={(event) => {
                    setPrice(parseInt(event.target.value));
                }} />
            </label>
        </div>
        <button type='submit'>추가</button>
    </form>
    );
}

export default ExpenseInput;