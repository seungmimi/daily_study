import React from 'react'
import styled from "styled-components";
import { cartProdListInfo } from '../../atom/CartProd';
import { useRecoilValue } from 'recoil';

import styles from '../../pages/order/order.module.css'

//스타일
const CartItemList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const CartItemListObj = styled.li`
  display: flex;
  position: relative;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  padding: 16px 36px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`
const ProdInfo = styled.div`
  width: 300px;
  display: flex;
  gap: 16px;
  img {
    width: 120px;
    border-radius: 10px;
    aspect-ratio: 1/1;
    border: 1px solid #c4c4c4;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      color: #4c4747;
      font-size: 14px;
      align-content: space-between
    }
    span:last-child {
      margin-top: auto;
    }
    strong {
      font-size: 18px;
    }
    p {
      font-family: 'Spoqa Han Sans Neo-Bold';
    }
  }
`
const ShippingFee = styled.p`
  color: #767676;
`

const ProdSumBuy = styled.div`
text-align: end;
  strong{
    font-family: 'Spoqa Han Sans Neo-Bold';
    display: block;
    font-size: 18px;
  }
`

const OrderProdList = () => {
  const payProd = useRecoilValue(cartProdListInfo);
  return (
    <div className={styles['order-item-box']}>
      <div className={styles['order-item-title']}>
        <span className={styles['order-prodName']}>상품 정보</span>
        <span>할인</span>
        <span>배송비</span>
        <span>주문금액</span>
      </div>
      <CartItemList>
      {payProd.map((e,i) => {
        return(
          <CartItemListObj key={i}>
            <ProdInfo>
              <img src={e.image} alt={e.product_name} />
              <div>
                <span>{e.store_name}</span>
                <strong>{e.product_name}</strong>
                <span>수량: {e.quantity}개</span>
              </div>
            </ProdInfo>
            <div>
              -
            </div>
            <ShippingFee>
              {e.shipping_fee !== 0 ? e.shipping_fee.toLocaleString() : '무료배송'}
            </ShippingFee>
            <ProdSumBuy>
              <strong>{(e.price * e.quantity).toLocaleString()} 원</strong>
            </ProdSumBuy>
          </CartItemListObj>
        )
      })}

      </CartItemList>
    </div>

  )
}

export default OrderProdList
