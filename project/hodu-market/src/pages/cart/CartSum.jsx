import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
import { cartProdListInfo } from '../../atom/CartProd'
import { useRecoilValue } from 'recoil'

const CartSum = () => {
  const cartProd = useRecoilValue(cartProdListInfo);
  
  const [prodPrice, setProdPrice] = useState(0);
  const [prodFee, setProdFee] = useState(0);

  useEffect(() => {
    let priceSum = 0;
    let prodFeeSum = 0;

    cartProd.forEach(e => {
      priceSum += (e.price * e.quantity);
      prodFeeSum += e.shipping_fee;
    });
    setProdPrice(priceSum);
    setProdFee(prodFeeSum)
  }, [cartProd]);
  
  return (
    <div className={styles['cart-sum-box']}>
      <div className={styles['sum-obj']}>
        <span className={styles['sum-title']}>총 상품 금액</span>
        <p className={styles['sum-price']}><strong>{prodPrice.toLocaleString()}</strong>원</p>
      </div>
      <div className={styles['icon-box']}>
        <i className='icon icon-minus-line'></i>
      </div>
      <div className={styles['sum-obj']}>
        <span className={styles['sum-title']}>상품 할인</span>
        <p className={styles['sum-price']}><strong>0</strong>원</p>
      </div>
      <div className={styles['icon-box']}>
        <i className='icon icon-plus-line'></i>
      </div>
      <div className={styles['sum-obj']}>
        <span className={styles['sum-title']}>배송비</span>
        <p className={styles['sum-price']}><strong>{prodFee.toLocaleString()}</strong>원</p>
      </div>
      <div className={`${styles['sum-obj']} ${styles.total}`}>
        <span className={styles['sum-title']}>결제예정 금액</span>
        <p className={styles['sum-price']}><strong>{(prodPrice + prodFee).toLocaleString()}</strong>원</p>
      </div>
    </div>
  )
}

export default CartSum
