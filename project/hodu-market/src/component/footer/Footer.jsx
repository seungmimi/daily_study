import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='pageWrap'>
        <div className='content-area'>
          <div className={styles['footer-box']}>
            <div className={styles['top-area']}>
              <ul>
                <li>호두샵 소개</li>
                <li>이용약관</li>
                <li className={styles['bold-menu']}>개인정보 처리방침</li>
                <li>전자금융거래약관</li>
                <li>청소년보호정책</li>
                <li>제휴문의</li>
              </ul>
              <div className={styles['icon-box']}>
                <i className='icon icon-insta'></i>
                <i className='icon icon-fb'></i>
                <i className='icon icon-yt'></i>
              </div>
            </div>
            <div className={styles['bottom-area']}>
              <strong>&#40;주&#41;HODU SHOP</strong>
              <p>
                제주특별자치도 제주시 동광고 137 제주코딩베이스캠프<br />
                사업자 번호 : 000-0000-0000 | 통신판매업<br />
                대표 : 김호두
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
