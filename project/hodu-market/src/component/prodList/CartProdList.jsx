import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Counter from '../../component/Counter';
import BasicBtn from '../Button';
import CartInfoPopup from '../../pages/cart/CartInfoPopup';


//스타일
const CartItemList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    padding: 0 10px;
  }
`
const CartItemListObj = styled.li`
  display: flex;
  position: relative;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  padding: 26px 46px 26px 10px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`
const CloseBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 10px;
`

const ProdInfo = styled.div`
  width: 460px;
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
      color: #767676;
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
const ProdSumBuy = styled.div`
width: 120px;
text-align: center;
  strong{
    font-family: 'Spoqa Han Sans Neo-Bold';
    margin-bottom: 12px;
    display: block;
    font-size: 18px;
    color: #EB5757;
  }
`
const Notice = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  padding: 16px 36px;
  border-radius: 50px;
  background-color: rgba(0,0,0,0.3);
  box-shadow: 1px 1px 6px rgba(0,0,0,0.25);
  p {
    font-family: 'Spoqa Han Sans Neo-Bold';
  }
`

const CartProdList = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/";
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [cartPordList, setCartPordList] = useState([]);

  //장바구니 정보 API
  const getCartList = async() => {
    await axios.get(baseUrl + '/cart/',{
      headers: {
        Authorization : `JWT ${token}`,
      }
    }).then(function(res){
      getAddCartInfo(res.data.results);
    })        
    .catch(function(error){
      console.log(error);
    })
  }
  //상품 정보 API
  const getAddCartInfo = async(cartPordList) => {
    await cartPordList.map(async (e,i) => {
      axios.get(baseUrl + `products/${e.product_id}`)
        .then(function(res){
          setCartPordList(prevCart => [...prevCart, Object.assign(e,res.data)]);
          setIsLoading(false);
        })
        .catch(function(error){
          console.log(error);
        })
    })
  }  
  useEffect(() => {
    getCartList();
  },[]);

  //장바구니 상품 삭제 API
  const [isPopOpen, setIsPopOpen] = useState(false);
  const delProd = (prodId) => {
    axios.delete(baseUrl + `/cart/${prodId}/`)
    .then(function(res){
      setIsPopOpen(true);
    }).catch(function(error){
      console.error(error);
    })
  }
  const [counterValue, setCounterValue] = useState(1);
  const getCounterValue = (num) => {
    setCounterValue(num);
  }
  return (
    <>
      
      <CartItemList>
        {isLoading ? '로딩중' : cartPordList.map((e,i) => {
          return(
          <CartItemListObj key={i}>
            <CloseBtn onClick={() => {setIsPopOpen(true)}}>
              <i className='icon icon-delete'></i>
            </CloseBtn>
            <label>
              <input type='checkbox' className='hodu-check' checked/>
              <span className='hodu-check-img'></span>
            </label>
            <ProdInfo>
              <img src={e.image} alt={e.product_name} />
              <div>
                <span>{e.store_name}</span>
                <strong>{e.product_name}</strong>
                <p>{e.price}원</p>
                <span>{e.shipping_method === 'PARCEL' ? '소포배송' : '택배배송'} / 배송비: {e.shipping_fee.toLocaleString()}원</span>
              </div>
            </ProdInfo>
            <Counter getCounterValue={() => getCounterValue()} value={e.quantity}/>
            <ProdSumBuy>
              <strong>{(e.quantity * e.price).toLocaleString()}원</strong>
              <BasicBtn $fullwidth $textMs>주문하기</BasicBtn>
            </ProdSumBuy>
          </CartItemListObj>
          )
        })
        }
        {/* {delAlert ? 
        <Notice>
          <p>장바구니의 상품이 삭제되었습니다.</p>
        </Notice>
        :
        ''
        } */}
      </CartItemList>
    </>
  )
}

export default CartProdList
