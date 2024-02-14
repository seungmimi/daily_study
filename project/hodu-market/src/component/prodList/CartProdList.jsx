import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Counter from '../../component/Counter';
import BasicBtn from '../Button';


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
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  padding: 16px 18px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
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

const CartProdList = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/";
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [cartPordList, setCartPordList] = useState([]);

  const getAddCartInfo = async(cartPordList) => {
    setIsLoading(true);
    cartPordList.map(e => {
      return(
      axios.get(baseUrl + `/products/${e.product_id}/`)
        .then(function (res) {
          setCartPordList(cartPordList.push(Object.assign(e, res.data)));
        })
        .catch(function (error) {
          console.log(error);
        })
      )
    })
    setIsLoading(false);
    console.log(cartPordList);
  }

  const getCartList = async() => {
    setIsLoading(true);
    axios.get(baseUrl + '/cart/',{
      headers: {
        Authorization : `JWT ${token}`,
      }
    }).then(function(res){
      setCartPordList(res.data.results);
      getAddCartInfo(cartPordList);
    })        
    .catch(function(error){
      console.log(error);
    })
  }
  
  useEffect(() => {
    getCartList();
  },[]);

  const [counterValue, setCounterValue] = useState(1);
  const getCounterValue = (num) => {
    setCounterValue(num);
  }
  return (
    <CartItemList>
      {isLoading ? '로딩중' : cartPordList.map((e,i) => {
        return(
          <CartItemListObj key={i}>
          <label>
            <input type='checkbox' className='hodu-check' />
            <span className='hodu-check-img'></span>
          </label>
          <ProdInfo>
            <img src={e.image} alt={e.product_name} />
            <div>
              <span>{e.store_name}</span>
              <strong>{e.product_name}</strong>
              <p>{e.price}원</p>
              <span>{e.shipping_method === 'PARCEL' ? '소포배송' : '택배배송'} / 배송비: {e.shipping_fee}</span>
            </div>
          </ProdInfo>
          <Counter getCounterValue={() => getCounterValue(e.quantity)}/>
          <ProdSumBuy>
            <strong>{(counterValue * e.price)}원</strong>
            <BasicBtn $fullwidth $textMs>주문하기</BasicBtn>
          </ProdSumBuy>
        </CartItemListObj>
        )
      })
      }
    </CartItemList>
  )
}

export default CartProdList
