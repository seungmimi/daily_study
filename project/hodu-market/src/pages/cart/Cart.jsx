import React from 'react'
import styles from './cart.module.css'
import CartProdList from '../../component/prodList/CartProdList'

const Cart = () => {
  return (
    <div className='pageWrap'>
      <div className='content-area header-top'>
        <h2 className={styles['cart-title']}>
          장바구니
        </h2>
        <div className={styles['cart-item-box']}>
          <div className={styles['cart-item-title']}>
            <input type='checkbox'></input>
            <span>상품 정보</span>
            <span>수량</span>
            <span>상품 금액</span>
          </div>
          <CartProdList />
        </div>
      </div>
    </div>
  )
}

export default Cart
