import React, { useState } from 'react'
import styles from './header.module.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { userState, isLoginState } from '../../atom/LoginState';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';

const Header = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/"
  const navigate = useNavigate();
  const handleHomeLink = () => {
    navigate('/');
  }
  const [loginType, setLoginType] = useRecoilState(userState);
  const [islogin, setIslogin] = useRecoilState(isLoginState);

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

  const [showMenu, setShowMenu] = useState(false);
  const moreMenuFn = () => {
    setShowMenu(!showMenu);
  }



  return (
    <header className={styles.header}>
      <div className={styles['contnent-area']}>
        <div className={styles['left-contnet']}>
          <h1 className={styles['logo-area']} onClick={handleHomeLink}>
            <img src={process.env.PUBLIC_URL + '/image/Logo-hodu.png'} alt='hodu martet'/>
          </h1> 
          <div className={styles['search-box']}>
            <input className={styles['search-bar']} type='text' placeholder='상품을 검색해보세요!'/>
            <button type='button' className={styles['search-btn']}>
              <i className='icon icon-search' />
            </button>
          </div>
        </div>
        {islogin && loginType.login_type !== '' ? 
        //로그인 했을 경우
        //구매 회원일 경우
        loginType.login_type === 'BUYER' ?
        <div className={styles['right-contnet']}>
          <a href='#' className={styles['icon-btn']}>
            <i className='icon icon-cart'></i>
            <span className={styles['btn-title']}>장바구니</span>
          </a>
          <button className={styles['icon-btn']} onClick={moreMenuFn}>
            <i className='icon icon-user'></i>
            <span className={styles['btn-title']}>마이페이지</span>
          </button>
          {showMenu ? 
          <div className={styles['my-more-menu']}>
            <ul className={styles['more-menu-list']}>
              <li>마이페이지</li>
              <li onClick={logOutFn}>로그아웃</li>
            </ul>
          </div> : ''}

        </div>
        :
        //판매자 회원일 경우
        <div className={styles['right-contnet']}>
          <button>판매자 센터</button>
          <button className={styles['icon-btn']} onClick={moreMenuFn}>
            <i className='icon icon-user'></i>
            <span className={styles['btn-title']}>마이페이지</span>
          </button>
          {showMenu ? 
          <div className={styles['my-more-menu']}>
            <ul className={styles['more-menu-list']}>
              <li>마이페이지</li>
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
