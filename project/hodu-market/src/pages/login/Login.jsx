import React, { useState } from 'react'
import axios from "axios"
import { useSetRecoilState } from "recoil"
import { userState, isLoginState } from "../../atom/LoginState"
import { Link, useNavigate } from 'react-router-dom'
import BasicBtn from '../../component/Button'
import { BasicInput } from '../../component/Input'
import styles from './login.module.css'


const Login = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/"
  const navigation = useNavigate();
  const [loginType, setLoginType] = useState('BUYER');
  const handelLoginType = (type) => {
    setLoginType(type);
  }

  //아이디 입력
  const [id, setId] = useState("");
  const handelSetId = (e) => {
    setId(e.target.value);
  }
  //비밀번호 입력
  const [pw, setPw] = useState("");
  const handelSetPw = (e) => {
    setPw(e.target.value);
  }
  //에러 메시지
  const [alert, setAlert] = useState("");

  //로그인 정보(로그인 상태관리 atom사용)
  const setUserInfo = useSetRecoilState(userState);
  const setIsLogin = useSetRecoilState(isLoginState);

  //로그인 기능
  const loginFn = async (username, password, loginType) => {
    axios.post(baseUrl + '/accounts/login/', {
      username: username,
      password: password,
      login_type: loginType
    })
    .then(function(res){
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", username);
      localStorage.setItem("login_type", loginType);
      //로그인 상태관리 atom사용
      setUserInfo({username: username, login_type: loginType});
      setIsLogin(true);
      navigation('/');
    })
    .catch(function(error){
      setUserInfo({username: '', login_type: ''});
      setIsLogin(false);
      if(error.response.request.status === 401) {
        setAlert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
      if(error.response.request.status === 400 && username === ""){
        setAlert("아이디를 입력해 주세요");
      }
      if(error.response.request.status === 400 && username !== "" && password === ""){
        setAlert("비밀번호를 입력해 주세요");
      }
    });
  } 

  const handelLogin = (e) => {
    e.preventDefault();
    loginFn(id, pw, loginType);
  }

  return (
    <div className={styles['page-wrap']}>
      <div className={styles['content-area']}>
        <h1 className={styles['page-title']}>
          <img src={process.env.PUBLIC_URL + '/image/Logo-hodu.png'} alt='hodu market'/>
        </h1>
        <section className={styles['form-area']}>
          <h2 className='a11y-hidden'>로그인 폼</h2>
          <div className={styles['tab-btn']}>
            <button className={loginType === 'SELLER' ? styles['dis-btn'] : ''} type='button' onClick={() => {handelLoginType('BUYER')}}>
              구매회원 로그인
            </button>
            <button className={loginType === 'BUYER' ? styles['dis-btn'] : ''} type='button' onClick={() => {handelLoginType('SELLER')}}>
              판매회원 로그인
            </button>
          </div>
          <form className={styles['input-area']} onSubmit={handelLogin}>
            <div className={styles['input-box']}>
              <BasicInput $fullwidth type='text' placeholder='아이디' autoComplete="current-username"  onChange={(e) => handelSetId(e)}  value={id}/>
              <BasicInput $fullwidth type='password' autoComplete="current-password" placeholder='비밀번호' onChange={(e) => handelSetPw(e)} value={pw}/>
            </div>
            <p className={styles['warning-text']}>{alert}</p>
            <BasicBtn $fullwidth type='submit'>
              로그인
            </BasicBtn>
          </form>
        </section>
        <div className={styles['ect-btn']}>
          <Link to={'/join'}>회원 가입</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
