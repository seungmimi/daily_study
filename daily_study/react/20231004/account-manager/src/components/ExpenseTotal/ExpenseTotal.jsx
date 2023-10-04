import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ExpenseTotal() {
    //모든 지출 내역 불러오기
    const expenseList = useSelector((store) => store.expense.expenseList);
    const income = useSelector((store) => store.expense.income);

    const totalExpense = expenseList.reduce((acc, curr) => {
        return(acc + curr.price);
    },0);
    const balance = income - totalExpense;

    const dispatch = useDispatch();
    return (
        <>
            <div>
                <span>총 지출 : </span>
                <span>₩ {totalExpense}</span>
            </div>
            <div>
                <span>잔액 : </span>
                <span>₩ {balance}</span>
            </div>

        </>

    );
}

export default ExpenseTotal;