import React, { useState } from 'react'
import BasicBtn from '../../component/Button'
import { BasicInput, LabelInput } from '../../component/Input'
import styles from './join.module.css'

const Join = () => {
  const baseUrl = "https://openmarket.weniv.co.kr/"

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
    //비밀번호 입력
    const [pw, setPw] = useState("");
    const handelSetPw = (e) => {
      setPw(e.target.value);
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
          <form className={styles['input-area']}>
            <div className={styles['input-box']}>
              <LabelInput>
                아이디
                <BasicInput $fullwidth type='text' placeholder='아이디' autoComplete="current-username"  onChange={(e) => handelSetId(e)}  value={id}/>
              </LabelInput>
              <LabelInput>
                비밀번호
                <BasicInput $fullwidth type='password' placeholder='비밀번호' autoComplete="current-password"  onChange={(e) => handelSetPw(e)}  value={pw}/>
              </LabelInput>
              <LabelInput>
                비밀번호 확인
                <BasicInput $fullwidth type='password' />
              </LabelInput>

              <LabelInput>
                이름
                <BasicInput $fullwidth type='text' />
              </LabelInput>
              <LabelInput>
                휴대폰 번호
                <BasicInput type='text' />
                <BasicInput type='text' />
                <BasicInput type='text' />
              </LabelInput>
            </div>
            <label>
              <input type='checkbox' />
            호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.
            </label>
            <BasicBtn $fullwidth type='submit'>
              로그인
            </BasicBtn>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Join
