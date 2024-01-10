import React from 'react'
import styles from './main.module.css'

const ProdDetail = () => {
  return (
    <div>
      <section className={styles['basicInfo-area']}>
        <div className={styles['prod-img']}>
          <img src={process.env.PUBLIC_URL + '/image/Logo-hodu.png'} alt='' />
        </div>
        <div className={styles['prod-buy']}>
          <div className={styles['prod-text']}>
            <span>백엔드 글로벌</span>
            <p>딥러닝 개발자 무릎 담요</p>
            <strong>17,500<span>원</span></strong>
          </div>
          <div className={styles['prod-method']}>
            <span>택배배송 / 무료배송</span>
          </div>
          <div className={styles['prod-counter']}>
            <span>택배배송 / 무료배송</span>
          </div>
        </div>
      </section>
      <section className={styles['detailInfo-area']}>
        상품 상세 정보 / 리뷰 / q&a / 반품 교환
      </section>
    </div>
  )
}

export default ProdDetail
