import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BasicBtn from '../../component/Button'
import { BasicInput, LabelIconInput, LabelInput } from '../../component/Input'
import styles from './join.module.css'
import axios from 'axios'

const Join = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/"
  const navigation = useNavigate();

  //회원가입 타입
  const [loginType, setLoginType] = useState('BUYER');
  const handelLoginType = (type) => {
    setLoginType(type);
  }
  //아이디 입력
  const [id, setId] = useState("");
  const handelSetId = (e) => {
    setId(e.target.value);
  }
  //아이디 검증 메세지
  const [idAlert, setIdAlert] = useState("");
  //아이디 검증 메세지
  const [idCheck, setIdCheck] = useState(false);
  useEffect(() =>{
    setIdCheck(false);
    setIdAlert("");
  },[id]);
  //아이디 검증 API
  const idCheckFn = async(username) => {
    axios.post(baseUrl + '/accounts/signup/valid/username/', {
      username: username
    })
    .then(function(res){
      setIdAlert(res.data.Success);
      setIdCheck(true);
    })
    .catch(function(error){
      setIdAlert(error.response.data.FAIL_Message);
      setIdCheck(false);
    })
  }

  //비밀번호 입력
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  //비밀번호 검증
  const [pwValueCheck, setPwValueCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  //비밀번호 검증 메세지
  const [pwAlert, setPwAlert] = useState("");
  const handelSetPw = (e) => { 
    setPw(e.target.value);
    if(e.target.value.length > 7 && /[a-z]/.test(e.target.value)) {
      setPwValueCheck(true);
    }else{
      setPwValueCheck(false);
    }
  }
  const handelSetPw2 = (e) => { 
    setPw2(e.target.value);
  }
  const pwSame = (e) => {
    if(e.target.value === pw){
      setPwCheck(true);
      setPwAlert("");
    }
    if(pwValueCheck === false){
      setPwCheck(false);
      setPwAlert("");
    }
    if(e.target.value !== pw){
      setPwCheck(false);
      setPwAlert("비밀번호가 일치하지 않습니다.")
    }
  }

  //이름 검증
  const [name, setName] = useState("");
  const [nameCheck, setNameCheck] = useState(false);
  const handleSetName = (e) => {
    setName(e.target.value);
    if(e.target.value !== ""){
      setNameCheck(true);
    }else{
      setNameCheck(false);
    }
  }

  //휴대폰 번호 검증
  const [phone, setPhone] = useState("");
  //휴대폰 번호 검증 메세지
  const [phoneAlert, setPhoneAlert] = useState("");
  const [phoneCheck, setPhoneCheck] = useState(false);
  const handleSetPhone = (e) => {
    setPhone(e.target.value);
  }
  const handleChecktPhone = (e) => {
    if(/^01([0-9]{9,10})$/.test(e.target.value)){
      setPhoneCheck(true);
      setPhoneAlert("");
    }else{
      setPhoneCheck(false);
      setPhoneAlert("휴대폰번호 형식을 확인해 주세요");
    }
  }

  //사업자 번호 검증 API
  const [companyNum, setCompanyNum] = useState("");
  const [companyNumAlert, setCompanyNumAlert] = useState("");
  const [companyNumCheck, setCompanyNumCheck] = useState(false);
  const handelCompanyNum = (e) => {
    setCompanyNum(e.target.value);
  }
  const companyNumCheckFn = async(companyNum) => {
    axios.post(baseUrl + '/accounts/signup/valid/company_registration_number/', {
      company_registration_number: companyNum
    })
    .then(function(res){
      setCompanyNumCheck(true);
      setCompanyNumAlert(res.data.Success);
    })
    .catch(function(error){
      setCompanyNumCheck(false);
      setCompanyNumAlert(error.response.data.FAIL_Message);
    })
  }

  //스토어 이름 검증
  const [storeName, setStoreName] = useState("");
  const [storeNameAlert, setStoreNameAlert] = useState("");
  const [storeNameCheck, setStoreNameCheck] = useState(false);
  const handleStoreName = (e) => {
    setStoreName(e.target.value);
    if(e.target.value !== ""){
      setStoreNameCheck(true);
    }else{
      setStoreNameCheck(false);
    }
  }

  //약관 동의 검증
  const [agreeOk, setAgreeOk] = useState(false);
  const agree = (e) => {
    e.target.checked ? setAgreeOk(true) : setAgreeOk(false);
  }

  //회원가입 버튼 활성화
  const joinBtnActiveFn = () => {
    if(loginType === 'BUYER'){
      return idCheck && pwCheck && nameCheck && phoneCheck && agreeOk ? false : true;
    }else {
      return idCheck && pwCheck && nameCheck && phoneCheck && companyNumCheck && storeNameCheck && agreeOk ? false : true;
    }
  }

  //회원가입
  const joinFn = async(e,loginType) => {
    e.preventDefault();
    if(loginType === 'BUYER') {
      axios.post(baseUrl + '/accounts/signup/', {
        "username": id, // 아이디
        "password": pw,
        "password2": pw2,
        "phone_number": phone, // 전화번호는 010으로 시작하는 10~11자리 숫자
        "name": name, // 이름
      })
      .then(function(res){
        navigation('/login');
      })
      .catch(function(error){
        console.log(error);
        const errorMes = Object.entries(JSON.parse(error.request.response));
        errorMes.map(e => {
          if(e[0] === 'username'){
            setIdCheck(false);
            setIdAlert(e[1]);
          }else if(e[0] === 'password'){
            setPwAlert(e[1]);
          }else if(e[0] === 'phone_number'){
            setPhoneAlert(e[1]);
          }
        });
      })
    }else{
      axios.post(baseUrl + '/accounts/signup_seller/', {
        "username": id, // 아이디
        "password": pw,
        "password2": pw2,
        "phone_number": phone, // 전화번호는 010으로 시작하는 10~11자리 숫자
        "name": name, // 이름
        "company_registration_number": companyNum,
        "store_name": storeName,
    
      })
      .then(function(res){
        navigation('/login');
      })
      .catch(function(error){
        console.log(error);
        const errorMes = Object.entries(JSON.parse(error.request.response));
        errorMes.map(e => {
          if(e[0] === 'username'){
            setIdCheck(false);
            setIdAlert(e[1]);
          }else if(e[0] === 'password'){
            setPwAlert(e[1]);
          }else if(e[0] === 'phone_number'){
            setPhoneAlert(e[1]);
          }else if(e[0] === 'store_name'){
            setStoreNameAlert(e[1]);
          }
        });
      })
    }
  }

  return (
    <div className={styles['page-wrap']}>
      <div className={styles['content-area']}>
        <Link to={'/'}>
          <h1 className={styles['page-title']}>
            <img src={process.env.PUBLIC_URL + '/image/main-logo.png'} alt='hodu market'/>
          </h1>
        </Link>
        <section className={styles['form-area']}>
          <h2 className='a11y-hidden'>회원 가입 폼</h2>
          <div className={styles['tab-btn']}>
            <button className={loginType === 'SELLER' ? styles['dis-btn'] : ''} type='button' onClick={() => {handelLoginType('BUYER')}}>
              구매회원 가입
            </button>
            <button className={loginType === 'BUYER' ? styles['dis-btn'] : ''} type='button' onClick={() => {handelLoginType('SELLER')}}>
              판매회원 가입
            </button>
          </div>
          <form className={styles['input-area']}>
            <div className={styles['input-box']}>
            <h3 className={loginType === 'SELLER' ? `${styles['form-title']} ${styles.seller}` : styles['form-title']}>
                {loginType === 'SELLER' ? '판매회원 가입 화면입니다.' : '구매회원 가입 화면입니다.'}
                {loginType === 'SELLER' ? 
                <p><strong>구매회원</strong>가입을 원하실 경우 상단 탭에서<strong>'구매회원 가입'</strong>을 선택해 주세요</p>
                :
                <p><strong>판매회원</strong>가입을 원하실 경우 상단 탭에서<strong>'판매회원 가입'</strong>을 선택해 주세요</p>
                }
              </h3>
              <LabelInput>
                아이디
                <div className={styles['input-btn-box']}>
                  <BasicInput $fullwidth type='text' autoComplete="current-username" onChange={(e) => handelSetId(e)} value={id}/>
                  <BasicBtn $textMs $fullwidth type='button' onClick={()=>{idCheckFn(id)}} >중복 확인</BasicBtn>
                </div>
                <p className={idCheck ? styles['alert-mes-ok'] : styles['alert-mes']}>{idAlert}</p>
              </LabelInput>
              <LabelIconInput>
                비밀번호
                <BasicInput $fullwidth type='password' autoComplete="current-password" onChange={(e) => handelSetPw(e)} value={pw}/>
                <div className={styles['input-icon-box']}>
                {pwValueCheck ? <i className='icon icon-check-on' /> : <i className='icon icon-check-off' />}
                </div>
              </LabelIconInput>
              <LabelIconInput className={styles['margin-area']}>
                비밀번호 확인
                <BasicInput $fullwidth type='password' autoComplete="current-password" onChange={(e) => handelSetPw2(e)} onBlur={(e) => {pwSame(e)}} value={pw2}/>
                <div className={styles['input-icon-box']}>
                  {pwCheck ? <i className='icon icon-check-on' /> : <i className='icon icon-check-off' />}
                </div>
                <p className={styles['alert-mes']}>{pwAlert}</p>
              </LabelIconInput>

              <LabelInput>
                이름
                <BasicInput $fullwidth type='text' onChange={(e) => handleSetName(e)} value={name}/>
              </LabelInput>
              <LabelInput>
                휴대폰 번호 &#40;-는 제외하고 작성해 주세요&#41;
                <BasicInput $fullwidth type='tel' onChange={(e) => handleSetPhone(e)} value={phone} onBlur={(e) => {handleChecktPhone(e)}}/>
                <p className={styles['alert-mes']}>{phoneAlert}</p>
              </LabelInput>

              {loginType === 'SELLER' ? 
              <>
                <LabelInput>
                  사업자 등록 번호
                  <div className={styles['input-btn-box']}>
                    <BasicInput $fullwidth type='number' onChange={(e) => handelCompanyNum(e)} value={companyNum}/>
                    <BasicBtn $textMs $fullwidth type='button' onClick={() => {companyNumCheckFn(companyNum)}}>인증</BasicBtn>
                  </div>
                  <p className={companyNumCheck ? styles['alert-mes-ok'] : styles['alert-mes']}>{companyNumAlert}</p>
                </LabelInput>
                <LabelInput>
                  스토어 이름
                  <BasicInput $fullwidth type='text' onChange={(e)=>{handleStoreName(e)}} value={storeName}/>
                  <p className={styles['alert-mes']}>{storeNameAlert}</p>
                </LabelInput>
              </>
              :
              ""}
            </div>
            <label className={styles['agree-check']}>
              <input type='checkbox' className='hodu-check'  onClick={(e) => {agree(e)}}/>
              <span className='hodu-check-img'></span>
              <p className={styles['info-text']}>호두샵의 <strong>이용약관</strong> 및 <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동의합니다.</p>
            </label>
            <BasicBtn $fullwidth type='submit' disabled = {joinBtnActiveFn()} onClick={(e) => {joinFn(e,loginType)}}>
              회원 가입
            </BasicBtn>
            <div className={styles['ect-btn']}>
              <Link to={'/login'}>로그인</Link>
              <Link to={'/'}>홈으로 돌아가기</Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Join
