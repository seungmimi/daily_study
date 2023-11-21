import React from 'react'
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['contnent-area']}>
        <div className={styles['left-contnet']}>
          <h1 className={styles['logo-area']}>
            <img src={process.env.PUBLIC_URL + '/image/Logo-hodu.png'} alt='hodu martet'/>
          </h1> 
          <div className={styles['search-box']}>
            <input className={styles['search-bar']} type='text' placeholder='상품을 검색해보세요!'/>
            <button type='button' className={styles['search-btn']}>
              <i className='icon icon-search' />
            </button>
          </div>
          
        </div>
        <div className={styles['right-contnet']}>
          <a href='#' className={styles['icon-btn']}>
            <i className='icon icon-cart'></i>
            <span className={styles['btn-title']}>장바구니</span>
          </a>
          <a href='#' className={styles['icon-btn']}>
            <i className='icon icon-user'></i>
            <span className={styles['btn-title']}>마이페이지</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
