import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { cartProdListInfo } from '../../atom/CartProd';

import styled from "styled-components";
import styles from '../../pages/cart/cart.module.css'
import CartInfoPopup from '../../pages/cart/CartInfoPopup';
import CartEditPopup from '../../pages/cart/CartEditPopup';
import { useNavigate } from 'react-router-dom';

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
      color: #4c4747;
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
const NullInfo = styled.p`
  width: 100%;
  padding: 20px 30px;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo-Bold';
  font-size: 18px;
  p{
    padding-top: 20px;
    font-size: 14px;
    color: #767676;
  }
`

const CartProdList = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/";
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [isNull, setIsNull] = useState(false);
  const [cartPordList, setCartPordList] = useState([]);


  // 전체 체크 클릭 시
  const [checkedList, setCheckedLists] = useState([]);
  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        cartPordList.forEach((e) => checkedListArray.push(e));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [cartPordList]
  );

  // 개별 체크 클릭 시
  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !== list));
      }
    },
    [checkedList]
  );

  //장바구니 정보 API
  const getCartList = async() => {
    await axios.get(baseUrl + '/cart/',{
      headers: {
        Authorization : `JWT ${token}`,
      }
    }).then(function(res){
      if(res.data.count !== 0){
        getAddCartInfo(res.data.results);
      }else{
        setIsNull(true);
        setIsLoading(false);
      }
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
          setCheckedLists(prevCart => [...prevCart, Object.assign(e,res.data)]);
          setIsLoading(false);
        })
        .catch(function(error){
          console.log(error);
        })
    })
  }  

  //장바구니 상품 삭제 API
  const [delPopOpen, setdelPopOpen] = useState(false);
  const [delProdCode, setDelProdCode] = useState();
  const delProdPop = (prodId) => {
      setDelProdCode(prodId);
      setdelPopOpen(true);
  }
  const delProdFn = (prodId) => {
    axios.delete(baseUrl + `/cart/${prodId}`,{
      headers: {
        Authorization : `JWT ${token}`,
      }
    })
    .then(function(res){
      setdelPopOpen(false);
      window.location.reload();;
    })
    .catch(function(error){
      console.log(error);
    })
  }

  //장바구니 상품 수량 수정 API
  const [editPopOpen, setEditPopOpen] = useState(false);
  const [editProdCode, setEditProdCode] = useState();
  const [editQuantity, setEditProdQuantity] = useState();
  const [editProdId, setEditProdId] = useState();

  const editProdPop = (prodId, quantity, prodCode) => {
    setEditProdCode(prodId);
    setEditProdQuantity(quantity);
    setEditProdId(prodCode)
    setEditPopOpen(true);
  }

  //주문상품(선택 상품)상태 관리
  const setCartOrder = useSetRecoilState(cartProdListInfo);
  useEffect(() => {
    setCartOrder(checkedList);
  },[checkedList]);
  
  useEffect(() => {
    getCartList();
  },[]);

  return (
    <>
      <div className={styles['cart-item-title']}>
        <label>
          <input type='checkbox' className='hodu-check'
          onChange={(e) => onCheckedAll(e.target.checked)}
          checked={
            checkedList.length === 0
              ? false
              : checkedList.length === cartPordList.length
              ? true
              : false
          }/>
          <span className='hodu-check-img'></span>
        </label>
        <span className={styles['title-prodName']}>상품 정보</span>
        <span>수량</span>
        <span>상품 금액</span>
      </div>
      {delPopOpen ? <CartInfoPopup prodCode={delProdCode} isOpen={setdelPopOpen} actionFn={delProdFn}/> : ''}
      {editPopOpen ? <CartEditPopup prodCode={editProdCode} prodId={editProdId} count={editQuantity} isOpen={setEditPopOpen} /> : ''}
      <CartItemList>
        {isLoading ? '로딩중' : isNull ? 
        <NullInfo>
          장바구니에 담긴 상품이 없습니다.
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </NullInfo>
        :
        cartPordList.map((e,i) => {
          return(
          <CartItemListObj key={i}>
            <CloseBtn onClick={() => delProdPop(e.cart_item_id)}>
              <i className='icon icon-delete'></i>
            </CloseBtn>
            <label>
              <input key={i} type='checkbox' className='hodu-check'
              onChange={(event) => onCheckedElement(event.target.checked, e)}
              checked={checkedList.includes(e) ? true : false} />
              <span className='hodu-check-img'></span>
            </label>
            <ProdInfo>
              <img src={e.image} alt={e.product_name} />
              <div>
                <span>{e.store_name}</span>
                <strong>{e.product_name}</strong>
                <p>{e.price.toLocaleString()}원</p>
                <span>{e.shipping_method === 'PARCEL' ? '소포배송' : '택배배송'} / 배송비: {e.shipping_fee.toLocaleString()}원</span>
              </div>
            </ProdInfo>
            <div className='counter-box' onClick={() => {editProdPop(e.cart_item_id, e.quantity, e.product_id)}}>
              <button className='counter-btn'>-</button>
              <input type='number' value={e.quantity} readOnly/>
              <button className='counter-btn'>+</button>
            </div>
            <ProdSumBuy>
              <strong>{(e.quantity * e.price).toLocaleString()}원</strong>
            </ProdSumBuy>
          </CartItemListObj>
          )
        })
        }
      </CartItemList>
    </>
  )
}

export default CartProdList
