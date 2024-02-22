import React, { useState } from 'react'
import styles from './order.module.css'
import BasicBtn from '../../component/Button'

import OrderProdList from '../../component/prodList/OrderProdList'
import OrderSum from './OrderSum'
import CartPopup from '../prodDetail/CartPopup'


function Order() {
  const [isOpen, setIsOpen] = useState(false);
  const payAlert = () => {
    setIsOpen(true);
  }
  return (
    <div className='pageWrap'>
      <div className='content-area header-top'>
        <h2 className={styles['order-title']}>
          주문/결제하기
        </h2>
        <OrderProdList />
        <form className={styles['order-info']} onClick={payAlert}>
          <div className={styles['order-info-title']}>
            <h3>배송정보</h3>
          </div>
          <div className={styles['order-info-obj']}>
            <strong className={styles['obj-title']}>
              주문자 정보
            </strong>
            <div className={styles['obj-input']}>
              <label className={styles['input-box']}>
                <span>이름</span>
                <input type='text' />
              </label>
              <label className={styles['input-box']}>
                <span>휴대폰</span>
                <div className={styles['phone-input']}>
                  <input type='text' />
                  -
                  <input type='text' />
                  -
                  <input type='text' />
                </div>
              </label>
              <label className={styles['input-box']}>
                <span>이메일</span>
                <input type='text' />
              </label>
            </div>
          </div>
          <div className={styles['order-info-obj']}>
            <strong className={styles['obj-title']}>
              배송지 정보
            </strong>
            <div className={styles['obj-input']}>
              <label className={styles['input-box']}>
                <span>수령인</span>
                <input type='text' />
              </label>
              <label className={styles['input-box']}>
                <span>휴대폰</span>
                <div className={styles['phone-input']}>
                  <input type='text' />
                  -
                  <input type='text' />
                  -
                  <input type='text' />
                </div>
              </label>
              <label className={styles['input-box']}>
                <span>이메일</span>
                <input type='text' />
              </label>
              <label className={styles['input-box']}>
                <span>배송주소</span>
                <div className={styles['add-input']}>
                  <label>
                    <input type="text" />
                    <BasicBtn $textS onClick={(e) => e.preventDefault()}>우편번호 조회</BasicBtn>
                  </label>
                  <input type="text" className={styles['wid-full']}/>
                  <input type="text" className={styles['wid-full']}/>
                </div>
                
              </label>
              <label className={styles['input-box']}>
                <span>배송 메시지</span>
                <input type='text' className={styles['wid-full']}/>
              </label>
            </div>
          </div>
        </form>

        <div className={styles['pay-info']}>
          <div className={styles['payment-info']}>
            <div className={styles['order-info-title']}>
              <h3>결제 수단</h3>
            </div>
            <fieldset className={styles['payment-box']}>
              <label>
                <input type='radio' name='payment' />
                신용/체크카드
              </label>
              <label>
                <input type='radio' name='payment' />
                무통장 입금
              </label>
              <label>
                <input type='radio' name='payment' />
                휴대폰 결제
              </label>
            </fieldset>
          </div>
          <OrderSum />
        </div>
      </div>
      {isOpen ?
      <CartPopup title="결제기능은 아직 준비중 입니다." subtext="장바구니로 돌아가시겠습니까?" link="/cart" isOpen={setIsOpen} />
      :
      ''
      }
      </div>
  )
}

export default Order
