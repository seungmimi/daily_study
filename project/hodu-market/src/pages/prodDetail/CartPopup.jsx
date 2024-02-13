import React, { useEffect } from 'react'
import styles from './prodDetail.module.css'

const CartPopup = (props) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <div className={styles['pop-bg']}>
      <div className={styles['pop-box']}>
        <div className={styles['pop-content']}>
          <button className={styles['pop-close-btn']}>
            <i className='icon icon-delete'></i>
          </button>
          <h4>{props.title}</h4>
          <p>{props.subtext}</p>
          <div className={styles['pop-btn-box']}>
            <button type='button'>아니오</button>
            <button type='button'>예</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPopup
