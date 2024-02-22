import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { userState, isLoginState } from '../../atom/LoginState';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import BasicBtn from '../Button'
import styles from './header.module.css';

const Header = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/"
  const [loginType, setLoginType] = useRecoilState(userState);
  const [islogin, setIslogin] = useRecoilState(isLoginState);

  //링크
  const navigate = useNavigate();
  const handleHomeLink = () => {
    navigate('/');
  }
  const handleSellerCenter = () => {
    navigate('/sellercenter');
  }

  //로그아웃 기능
  const logOutFn = async() => {
    setShowMenu(false);
    axios.post(baseUrl + '/accounts/logout/')
    .then(function(res){
      window.localStorage.clear();
      setIslogin(false);
      setLoginType('');
      navigate('/');
    }).catch(function(error){
      console.log(error);
    })
  }

  //상품 검색 기능
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [searchResultOpen, setSearchResultOpen] = useState(false);
  
  useEffect(() => {
    const handleSearchText = async() => {
      //encodeURIComponent: 검색어가 한글일 경우 인코딩
      await axios.get(baseUrl + `/products/?search=${encodeURIComponent(searchText)}`)
      .then(function(res){
        setSearchResult(res.data.results);
        if(searchText.length !== 0){
          setSearchResultOpen(true);
        }else{
          setSearchResultOpen(false);
        }
      })
      .catch(function(error){
        console.log(error);
      })
    }
    handleSearchText();
  },[searchText]);

  const getProdDetail = async(prodId) => {
    await axios.get(baseUrl + `/products/${prodId}/`)
    .then(function(res){
      setSearchResultOpen(false);
      navigate(`/prod/${prodId}`,{state: {
        product_id: `${res.data.product_id}`,
      }});
    })
    .catch(function(error){
      console.log(error);
    })
  }

  //마이페이지 메뉴 기능
  const [showMenu, setShowMenu] = useState(false);
  const moreMenuFn = () => {
    setShowMenu(!showMenu);
  }

  //header노출 페이지 구분
  if (window.location.pathname === '/login' || window.location.pathname === '/join') return null;

  return (
    <header className={styles.header}>
      <div className={styles['contnent-area']}>
        <div className={styles['left-contnet']}>
          <h1 className={styles['logo-area']} onClick={handleHomeLink}>
            <img src={process.env.PUBLIC_URL + '/image/main-logo.png'} alt='hodu martet'/>
          </h1> 
          <div className={styles['search-box']}>
            <input className={styles['search-bar']} type='text' placeholder='상품을 검색해보세요!' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}  onFocus={() => {searchText.length !== 0 ? setSearchResultOpen(true) : setSearchResultOpen(false)}} onBlur={() => {setSearchResultOpen(false)}}/>
            <button type='button' className={styles['search-btn']}>
              <i className='icon icon-search' />
            </button>
            {searchResultOpen ?
            <div className={styles['search-result-box']}>
              <strong className={styles.title}>검색결과</strong>
              <div className={styles['result-list']}>
                {searchResult?.length !== 0 ?
                <ul className={styles['result-obj']} onMouseDown={(event) => event.preventDefault()}>
                  {searchResult?.map((e,i) => {
                  return(
                    <li key={i} onClick={() => {getProdDetail(e.product_id)}}>
                      <div>
                        <span>{e.store_name}</span>
                        <strong>{e.product_name}</strong>
                      </div>
                      <button>
                        <i className='icon icon-rigth-arrow'></i>
                      </button>
                    </li>
                  )
                  })}

                </ul>
                :
                <div className={styles['result-none']}>
                  <strong>검색 결과가 없습니다</strong>
                  <p>정확한 검색어를 입력해 주세요</p>
                </div>
                }
              </div>
            </div>
            :
            ''
            }
          </div>
        </div>
        {islogin && loginType.login_type !== '' ? 
        //로그인 했을 경우
        //구매 회원일 경우
        loginType.login_type === 'BUYER' ?
        <div className={styles['right-contnet']}>
          <Link to='/cart' className={styles['icon-btn']}>
            <i className='icon icon-cart'></i>
            <span className={styles['btn-title']}>장바구니</span>
          </Link>
          <button className={styles['icon-btn']} onClick={moreMenuFn} onBlur={() => {setShowMenu(false)}}>
            <i className='icon icon-user'></i>
            <span className={styles['btn-title']}>마이페이지</span>
          </button>
          {showMenu ? 
          <div className={styles['my-more-menu']} onMouseDown={(event) => event.preventDefault()}>
            <ul className={styles['more-menu-list']}>
              <li onClick={logOutFn}>로그아웃</li>
            </ul>
          </div> : ''}

        </div>
        :
        //판매자 회원일 경우
        <div className={styles['right-contnet']}>
          <BasicBtn $green $textMs $paddingS onClick={handleSellerCenter}>판매자 센터</BasicBtn>
          <button className={styles['icon-btn']} onClick={moreMenuFn} onBlur={() => {setShowMenu(false)}}>
            <i className='icon icon-user'></i>
            <span className={styles['btn-title']}>마이페이지</span>
          </button>
          {showMenu ? 
          <div className={styles['my-more-menu']} onMouseDown={(event) => event.preventDefault()}>
            <ul className={styles['more-menu-list']}>
              <li onClick={logOutFn}>로그아웃</li>
            </ul>
          </div> : ''}
        </div>
        :
        //로그인 안했을 경우
        <div className={styles['right-contnet']}>
          <Link to='/login' className={styles['icon-btn']}>
            <i className='icon icon-user'></i>
            <span className={styles['btn-title']}>로그인</span>
          </Link>
        </div>
        }
      </div>
    </header>
  )
}

export default Header
