import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './cart.module.css'
import CartProdList from '../../component/prodList/CartProdList'
import CartSum from './CartSum'
import BasicBtn from '../../component/Button'

const Cart = () => {
  const navigate = useNavigate();
  const goOrder = () => {;
    navigate('/order');
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
