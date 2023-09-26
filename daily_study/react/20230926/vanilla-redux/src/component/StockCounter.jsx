import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sale, soldOut } from '../modules/stockCounter';

function StockCounter() {
    const { message } = useSelector((state)=>{
        return{
            message : state.stockRrducer.message,
        }
    });
    const { stock } = useSelector((state)=>{
        return{
            stock : state.goodsReducer.stock
        }
    });

    const dispatch = useDispatch();
    useEffect(() => {
        if(stock <= 0){
            dispatch(soldOut());
        }else{
            dispatch(sale());
        }
    },[stock])

    return(
        <div>
            <strong>{message}</strong>
        </div>
    )

}

export default StockCounter;