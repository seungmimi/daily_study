import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Header from '../../component/header/Header'
import styles from './prodDetail.module.css'
import BasicBtn from '../../component/Button'
import Counter from '../../component/Counter';

const ProdDetail = () => {
  const location = useLocation();
  const prodID = location.state.product_id;
  
  const baseUrl = "https://openmarket.weniv.co.kr/";
  const [prodInfo, setProdInfo] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  //상품 정보 불러오기
  useEffect(()=>{
    const getProdInfo = async() => {
      setIsLoading(true);
      await axios.get(baseUrl + `products/${prodID}`)
      .then(function(res){
        setProdInfo(res.data);
        setIsLoading(false);
      })
      .catch(function(error){
        console.log(error);
      })
    }
    getProdInfo()
  },[prodID]);

  //상품 상세 tab메뉴 구현
  const prodTabData = [
    {title: "상품 상세 정보", content: <><p className={styles['content-info']}>{prodInfo.product_info}</p><img src={prodInfo.image} alt='' /></>},
    {title: "리뷰", content: <p className={styles['content-null']}>등록된 리뷰가 없습니다.</p>},
    {title: "Q&A", content: <p className={styles['content-null']}>등록된 Q&A가 없습니다.</p>},
    {title: "반품/교환 정보", content: <p className={styles['content-null']}>등록된 반품/교환 정보가 없습니다.</p>},
  ];
  const [activeTab, setActiveTab] = useState(0);

  //카운터기능 구현
  const [counterValue, setCounterValue] = useState(1);
  const getCounterValue = (num) => {
    setCounterValue(num);
  }

  return (
    <>
      <Header />
      <div className='pageWrap'>
        <div className='content-area header-top'>
          {isLoading ? '로딩중' : 
          <>
          <section className={styles['basicInfo-area']}>
            <div className={styles['prod-img']}>
              <img src={prodInfo.image} alt='' />
            </div>
            <div className={styles['prod-info']}>
              <div className={styles['prod-text']}>
                <span>{prodInfo.store_name}</span>
                <p>{prodInfo.product_name}</p>
                <span><strong className={styles['prod-price']}>{prodInfo.price.toLocaleString()}</strong>원</span>
              </div>
              <div className={styles['prod-buy']}>
                <div className={styles['prod-method']}>
                  <span>{prodInfo.shipping_method === 'PARCEL' ? '소포배송' : '택배배송'} / 배송비: {prodInfo.shipping_fee.toLocaleString()}</span>
                </div>
                <div className={styles['prod-counter']}>
                  <Counter getCounterValue={getCounterValue}/>
                </div>
                <div className={styles['prod-sum']}>
                  <span>총 상품 금액</span>
                  <div className={styles['sum-info']}>
                    <p className={styles['sum-label']}>총 수량 <span className={styles['sum-count']}>{counterValue}</span>개</p>
                    <p><strong className={styles['sum-price']}>{(counterValue * prodInfo.price).toLocaleString()}</strong>원</p>
                  </div>
                </div>
                <div className={styles['prod-btn']}>
                  <BasicBtn $textMs>바로 구매</BasicBtn>
                  <BasicBtn $textMs $dark>장바구니</BasicBtn>
                </div>
              </div>
            </div>
          </section>
          <section className={styles['detailInfo-area']}>
            <ul className={styles['tab-list']}>
              {prodTabData.map((e,i) => {
                return <li
                  className={activeTab === i ? `${styles['tab-btn']} ${styles['tab-active']}` : styles['tab-btn']}
                  key={i}
                  onClick={() => setActiveTab(i)}>
                  {e.title}</li>
              })}
            </ul>
            <div className={styles['tab-content-box']}>
              <div className={styles['tab-content']}>
                {prodTabData[activeTab].content}
              </div>
            </div>
          </section>
          </>
          }
        </div>
      </div>
    </>
  )
}

export default ProdDetail
