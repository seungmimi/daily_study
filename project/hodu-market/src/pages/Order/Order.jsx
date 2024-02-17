import React from 'react'
import styles from './order.module.css'
import BasicBtn from '../../component/Button'

import OrderProdList from '../../component/prodList/OrderProdList'


function Order() {
  return (
    <div className='pageWrap'>
      <div className='content-area header-top'>
        <h2 className={styles['order-title']}>
          주문/결제하기
        </h2>
        <OrderProdList />
        <form className={styles['order-info']}>
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
                    <BasicBtn $textS>우편번호 조회</BasicBtn>
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
          <div className={styles['sumprice-info']}>
            <div className={styles['order-info-title']}>
              <h3>최종결제 정보</h3>
            </div>
            <div className={styles['sumprice-box']}>
              <div className={styles['sum-obj-box']}>
                <div className={styles['sum-obj']}>
                  <span>- 상품금액</span>
                  <p><strong>46000</strong>원</p>
                </div>
                <div className={styles['sum-obj']}>
                  <span>- 할인금액</span>
                  <p><strong>0</strong>원</p>
                </div>
                <div className={styles['sum-obj']}>
                  <span>- 배송비</span>
                  <p><strong>1000</strong>원</p>
                </div>
                <div className={`${styles['sum-obj']} ${styles['last-obj']}`}>
                  <span>- 결제금액</span>
                  <p><strong>1000</strong>원</p>
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
        </div>
      </div>

    </div>
  )
}

export default Order
