import React, { useState } from 'react'
import { userState } from '../../atom/LoginState'

import BasicBtn from '../../component/Button'
import styles from './seller.module.css'
import SellerProdList, { ProdNull } from '../../component/prodList/SellerProdList'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'


const SellerCenter = () => {
  //유저이름
  const userName = useRecoilValue(userState);

  //등록 상품 count
  const [storeProdCount, setStoreProdCount] = useState();
  
  //탭 메뉴 생성 & 탭 기능
  const tabMenuList = [
    {title: `판매중인 상품`, counter: `${storeProdCount}`},
    {title: '주문/배송', counter: 0},
    {title: '문의/리뷰', counter: 0},
    {title: '통계', counter: null},
  ]
  const [activeTab, setActiveTab] = useState(0);
  const tabFn = (tabNum) => {
    setActiveTab(tabNum);
  }

  //페이지 이동
  const navigate = useNavigate();
  const handleAddProd = () => {
    navigate('/sellercenter/addprod');
  }

  return (
    <div className='pageWrap'>
      <div className='header-top'>
        <div className={styles['title-box']}>
          <h3>대시보드 <strong>{userName.username}</strong></h3>
          <BasicBtn $green $textS $paddingS onClick={handleAddProd}>
            <i className='icon icon icon-plus'></i>
            상품 업로드
          </BasicBtn>
        </div>
        <article className={styles['content-box']}>
          <ul className={styles['tab-box']}>
            {tabMenuList.map((e,i) => {
              return(
                <li className={activeTab === i ? `${styles['tab-obj']} ${styles.active}` : styles['tab-obj']} key={i} onClick={() => {tabFn(i)}}>
                  <strong>{e.title}</strong>
                  {e.counter !== null ? <span>{e.counter}</span> : ''}
                </li>
              )
            })}
          </ul>
          <div className={styles['tab-content-box']}>
            {activeTab === 0 && 
            <ul className={styles['seller-prod-box']}>
              <li className={styles['prod-title']}>
                <span>상품정보</span>
                <span>판매가격</span>
                <span>수정</span>
                <span>삭제</span>
              </li>
              <SellerProdList setStoreProdCount={setStoreProdCount}/>
            </ul>
            }
            {activeTab === 1 && 
            <ul className={styles['seller-prod-box']}>
              <li className={styles['prod-title']}>
                <span>주문내역</span>
                <span>처리상태</span>
                <span>주문고객</span>
                <span>주문일자</span>
              </li>
              <ProdNull $show>
                <strong>주문/배송 내역이 없습니다</strong>
              </ProdNull>
            </ul>
            }
            {activeTab === 2 && 
            <ul className={styles['seller-prod-box']}>
              <li className={styles['prod-title']}>
                <span>내용</span>
                <span>구분</span>
                <span>작성자</span>
                <span>작성일자</span>
              </li>
              <ProdNull $show>
                <strong>접수된 문의 및 리뷰 내역이 없습니다</strong>
              </ProdNull>
            </ul>
            }
            {activeTab === 3 && 
            <ProdNull $show>
              <i className='icon icon-cart'></i>
              <strong>서비스 준비중 입니다.</strong>
              <p>곧 새로운 기능으로 찾아뵙겠습니다!</p>
            </ProdNull>
            }
          </div>
        </article>
      </div>
    </div>
  )
}

export default SellerCenter
