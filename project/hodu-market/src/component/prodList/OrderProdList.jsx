import React from 'react'
import styles from '../../pages/order/order.module.css'

const OrderProdList = () => {
  return (
    <div className={styles['order-item-box']}>
      <div className={styles['order-item-title']}>
        <span className={styles['order-prodName']}>상품 정보</span>
        <span>수량</span>
        <span>할인</span>
        <span>배송비</span>
        <span>주문금액</span>
      </div>
    </div>

  )
}

export default OrderProdList
