import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subtractNumber } from '../modules/goodsCounter';

export default function GoodsCounter() {
    //useSelector: store의 state에 접근
    const { stock, goods } = useSelector((state)=>{
        return{
            stock : state.goodsReducer.stock,
            goods : state.goodsReducer.goods
        }
    });

    const dispatch = useDispatch();

    const onSubtracNumber = () => {dispatch(subtractNumber())};
    const onAddNumber = () => {dispatch(addNumber())};

    return (
        <>
            <h1>Product Detail</h1>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div id="counter-box">
                <button type="button" id="minus" onClick={onSubtracNumber} disabled={goods > 0 ? false : true}>MINUS</button>
                <span id="number">{goods}</span>
                <button type="button" id="plus" onClick={onAddNumber} disabled={stock > 0 ? false : true}>PLUS</button>
            </div>
            <div>총 수량 <strong id="quantity">{goods}</strong></div>
            <div><strong id="total">{goods * 17500}</strong>원</div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </>
    );
}
