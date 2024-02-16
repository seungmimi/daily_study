import React, { useEffect } from 'react'

const CartInfoPopup = (props) => {
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

  //상품 삭제
  const delProdFn = () => {
    props.actionFn(props.prodCode);
  }
  return (
    <div className='pop-bg'>
      <div className='pop-box'>
        <div className='pop-content'>
          <button className='pop-close-btn' onClick={closePopup}>
            <i className='icon icon-delete'></i>
          </button>
          <h4>상품을 삭제하시겠습니까?</h4>
          <div className='pop-btn-box'>
            <button type='button' onClick={closePopup}>아니오</button>
            <button type='button' onClick={delProdFn}>예</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartInfoPopup
