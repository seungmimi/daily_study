import React, { useEffect, useState } from 'react'
import styles from './order.module.css'
import BasicBtn from '../../component/Button'
import { cartProdListInfo } from '../../atom/CartProd'
import { useRecoilValue } from 'recoil'


const OrderSum = () => {
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
    <div className={styles['sumprice-info']}>
      <div className={styles['order-info-title']}>
        <h3>최종결제 정보</h3>
      </div>
      <div className={styles['sumprice-box']}>
        <div className={styles['sum-obj-box']}>
          <div className={styles['sum-obj']}>
            <span>- 상품금액</span>
            <p><strong>{prodPrice.toLocaleString()}</strong>원</p>
          </div>
          <div className={styles['sum-obj']}>
            <span>- 할인금액</span>
            <p><strong>0</strong>원</p>
          </div>
          <div className={styles['sum-obj']}>
            <span>- 배송비</span>
            <p><strong>{prodFee.toLocaleString()}</strong>원</p>
          </div>
          <div className={`${styles['sum-obj']} ${styles['last-obj']}`}>
            <span>- 결제금액</span>
            <p><strong>{(prodPrice + prodFee).toLocaleString()}</strong>원</p>
          </div>
        </div>
        <div className={styles['go-pay']}>
          <label className={styles['agree-check']}>
            <input type='checkbox' className='hodu-check' />
            <span className='hodu-check-img'></span>
            <p className={styles['info-text']}>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
          </label>
          <BasicBtn>결제하기</BasicBtn>
        </div>
      </div>
    </div>
  )
}

export default OrderSum
