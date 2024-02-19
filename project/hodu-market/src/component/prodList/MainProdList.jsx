import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import axios from 'axios';

// 스타일
const ProdList = styled.ul`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, auto));
gap: 70px 78px;
`;
const ProdObj = styled.li`
  width: 100%;
  cursor: pointer;
`;
const ProdImg = styled.div`
  margin-bottom: 16px;
  height: 280px;
  border-radius: 10px;
  border: 1px solid #C4C4C4;
  overflow: hidden;
  img{
    width:100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
    &:hover {
      scale: 120%;
    }
  }
`;
const ProdText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    color: #767676;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  p {
    font-size: 18px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  strong {
    font-family: 'Spoqa Han Sans Neo-Bold';
    font-size: 24px;
    span {
      font-family: 'Spoqa Han Sans Neo-Regular';
      font-size: 16px;
    }
  }
`;
const MainProdList = () => {
  // 상품 리스트 불러오기
  const [prodList, setProdList] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = "https://openmarket.weniv.co.kr/";

  useEffect(()=>{
    const getProdList = async() => {
      setIsLoading(true);
      await axios.get(baseUrl + '/products/')
      .then(function(res){
        setProdList(res.data.results);
        setIsLoading(false);
      })
      .catch(function(error){
        console.log(error);
      })
    }
    getProdList();
  },[]);

  //상품 상세페이지로 이동 + 클릭 된 상품 정보 전달
  const navigate = useNavigate();
  const getProdDetail = async(prodId) => {
    axios.get(baseUrl + `/products/${prodId}/`)
    .then(function(res){
      navigate(`/prod/${prodId}`,{state: {
        product_id: `${res.data.product_id}`,
      }});
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <ProdList>
      {isLoading ? '로딩중' : prodList.map((e) => {
        return(
          <ProdObj key={e.product_id} onClick={()=> {getProdDetail(e.product_id)}}>
            <ProdImg>
              <img src={e.image} alt='' />
            </ProdImg>
            <ProdText>
              <span>{e.store_name}</span>
              <p>{e.product_name}</p>
              <strong>{e.price}<span>원</span></strong>
            </ProdText>
          </ProdObj>
        )
        })
      }
    </ProdList>
  )
}

export default MainProdList;
