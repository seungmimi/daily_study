import React, { useEffect, useState } from 'react'
import styled, {css} from "styled-components"
import BasicBtn from '../Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import CartInfoPopup from '../../pages/cart/CartInfoPopup';

const ProdObj = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  >div{
    width: 50%;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    >img{
      width: 70px;
      height: 70px;
      aspect-ratio: 1/1;
      flex-shrink: 0;
      border-radius: 100%;
      overflow: hidden;
      object-fit: cover;
      border: 1px solid #c4c4c4;
    }
  }
`
const ProdText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  >span{
    font-size: 14px;
    color: #767676;
  }
`
export const ProdNull = styled.div`
  width: 100%;
  margin-top: 160px;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #767676;
  >strong {
    font-size: 16px;
    color: #000;
    font-family: 'Spoqa Han Sans Neo-Bold';
  }
  /*dark: 어두운 버튼*/
  ${(props) =>
    props.$show &&
    css`
      display: flex;
    `
  }

`

const SellerProdList = (props) => {
  const baseUrl = "https://openmarket.weniv.co.kr/";
  const [sellerProd, setSellerProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  //셀러 상품 불러오기
  useEffect(() => {
    setIsLoading(true);
    axios.get(baseUrl + `/seller/`,{
      headers: {
        Authorization : `JWT ${token}`,
      }
    })
    .then(function(res){
      setSellerProd(res.data.results);
      props.setStoreProdCount(res.data.results.length);
      setIsLoading(false);
    })
    .catch(function(error){
      console.log(error);
    })
  },[])

  //상품 상세페이지로 이동
  const navigate = useNavigate();
  const detailProd = (prodNum) => {
    navigate(`/prod/${prodNum}`);
  }

  //상품 수정
  const editProd = (prodNum) => {
    navigate(`/sellercenter/editprod/${prodNum}`);
  }

  //상품 삭제
  const [delPopOpen, setdelPopOpen] = useState(false);
  const [delProdCode, setDelProdCode] = useState();
  const delProdPop = (prodId) => {
      setDelProdCode(prodId);
      setdelPopOpen(true);
  }
  const delProdFn = (prodId) => {
    axios.delete(baseUrl + `/products/${prodId}`,{
      headers: {
        Authorization : `JWT ${token}`,
      }
    })
    .then(function(){
      setdelPopOpen(false);
      window.location.reload();
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <>
    {isLoading ? '로딩중' : 
    <>
      {delPopOpen ? <CartInfoPopup prodCode={delProdCode} isOpen={setdelPopOpen} actionFn={delProdFn}/> : ''}
      {sellerProd.map((e,i) => {
        return(
          <ProdObj key={i}>
          <div onClick={() => {detailProd(e.product_id)}}>
            <img src={e.image} alt={e.product_name} />
            <ProdText>
              <strong>{e.product_name}</strong>
              <span>재고: {e.stock.toLocaleString()}개</span>
            </ProdText>
          </div>
          <strong onClick={() => {detailProd(e.product_id)}}>{e.price.toLocaleString()}원</strong>
          <BasicBtn $textS $paddingS onClick={(event) => editProd(e.product_id)}>수정</BasicBtn>
          <BasicBtn $textS $white $paddingS onClick={(event) => delProdPop(e.product_id)}>삭제</BasicBtn>
        </ProdObj>
        )
      })}
      <ProdNull $show={sellerProd.length !== 0 ? false : true}>
        <strong>판매중인 상품이 없습니다.</strong>
        <p>상품을 등록하고 판매를 시작해보세요!</p>
      </ProdNull>
    </>
    }
    </>
  )
}

export default SellerProdList
