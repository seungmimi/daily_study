import React from 'react'
import { useNavigate } from 'react-router-dom';
import { cartProdListInfo } from '../../atom/CartProd';

import styles from './cart.module.css'
import CartProdList from '../../component/prodList/CartProdList'
import CartSum from './CartSum'
import BasicBtn from '../../component/Button'
import { useRecoilValue } from 'recoil';

const Cart = () => {
  const navigate = useNavigate();
  const goOrderProd = useRecoilValue(cartProdListInfo);
  console.log(goOrderProd);
  const goOrder = () => {
    if(goOrderProd.length === 0){
      alert('구매할 상품을 선택해 주세요');
    }else{
      navigate('/order');
    }
    
    
  }
  return (
    <div className='pageWrap'>
      <div className='content-area header-top'>
        <h2 className={styles['cart-title']}>
          장바구니
        </h2>
        <div className={styles['cart-item-box']}>
          <CartProdList />
        </div>
        <CartSum />
        <BasicBtn className={styles['cart-order-btn']} onClick={goOrder}>주문하기</BasicBtn>
      </div>
    </div>
  )
}

export default Cart
