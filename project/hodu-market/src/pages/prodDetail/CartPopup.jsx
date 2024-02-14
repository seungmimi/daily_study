import React, { useEffect } from 'react'
import styles from './prodDetail.module.css'
import { useNavigate } from 'react-router-dom';

const CartPopup = (props) => {
  //팝업 오픈 시 윈도우 스크롤 막기
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
  //팝업 닫기
  const closePopup = () => {
    props.isOpen(false);
  }
  //페이지 이동(props.link)
  const navigate = useNavigate();
  const moveUrl = () => {
    navigate(props.link);
  }
  return (
    <div className={styles['pop-bg']}>
      <div className={styles['pop-box']}>
        <div className={styles['pop-content']}>
          <button className={styles['pop-close-btn']} onClick={closePopup}>
            <i className='icon icon-delete'></i>
          </button>
          <h4>{props.title}</h4>
          <p>{props.subtext}</p>
          <div className={styles['pop-btn-box']}>
            <button type='button' onClick={closePopup}>아니오</button>
            <button type='button' onClick={moveUrl}>예</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPopup
