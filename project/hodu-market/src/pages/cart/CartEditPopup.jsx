import React, { useEffect, useState } from 'react'
import Counter from '../../component/Counter'
import axios from 'axios';

const CartEditPopup = (props) => {
  const baseUrl = "https://openmarket.weniv.co.kr/";
  const token = localStorage.getItem("token");
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
  const editProdFn = () => {
    axios.put(baseUrl + `/cart/${props.prodCode}/`,
      {
        "product_id": props.prodId,
        "quantity": counterValue,
        "is_active": false,
      },
      {
      headers: {
        Authorization : `JWT ${token}`,
      }
    })
    .then(function(){
      window.location.reload();
    })
    .catch(function(error){
      console.log(error);
    })
  }
  //카운터기능 구현
  const [counterValue, setCounterValue] = useState(props.count);
  const getCounterValue = (num) => {
      setCounterValue(num);
  }
  return (
    <div className='pop-bg'>
      <div className='pop-box'>
        <div className='pop-content'>
          <button className='pop-close-btn' onClick={closePopup}>
            <i className='icon icon-delete'></i>
          </button>
          <Counter getCounterValue={getCounterValue} value={props.count}/>
          <div className='pop-btn-box'>
            <button type='button' onClick={closePopup}>닫기</button>
            <button type='button' onClick={editProdFn}>수정</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartEditPopup
