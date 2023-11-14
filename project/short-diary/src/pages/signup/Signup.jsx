import InfoForm from '../../component/InfoForm'
import SubmitBtn from '../../component/SubmitBtn'
import styles from '../login/Login.module.css'

import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
  // 때문에 다른 변수명을 사용하지 말아주세요. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
  const [displayName, setDisplayName] = useState('');

  const { error, isPending, signup } = useSignup();

  const handleData = (event) => {
      if (event.target.type === "email") {
          setEmail(event.target.value);
      } else if (event.target.type === "password") {
          setPassword(event.target.value);
      } else if (event.target.type === "text") {
          setDisplayName(event.target.value);
      }
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email, password, displayName);
      signup(email, password, displayName);
  }
  return (
    <div className="page-wrap">
      <img className={styles['bg-deco']} alt='bg' src={process.env.PUBLIC_URL + 'image/bg-obj-1.svg'} />
      <img className={styles['bg-deco']} alt='bg' src={process.env.PUBLIC_URL + 'image/bg-obj-2.svg'} />
      <img className={styles['bg-deco']} alt='bg' src={process.env.PUBLIC_URL + 'image/bg-obj-3.png'} />
      <div className='content-area'>
        <div className={styles['content-box']}>
          <section className={styles['title-area']}>
            <h2 className={styles.title}>
              <p className={styles['sub-title']}>Short Diary Of My Long Day</p>
              짧은 일기
            </h2>
          </section>
          <section className={styles['login-area']}>
            <h2>길게 적지 않아도 괜찮아요<br />나의 하루를 짧고 간단하게 기록해봅시다</h2>
            <InfoForm onSubmit={handleSubmit}>
              <h3>회원가입</h3>
              <label>
                이메일
                <input type='email' placeholder='이메일을 입력해주세요' required onChange={handleData} value={email}/>
              </label>
              <label>
                비밀번호
                <input type='password' placeholder='비밀번호를 입력해 주세요' required onChange={handleData} value={password} autoComplete='currnet-password' />
              </label>
              <label>
                닉네임
                <input type='text' placeholder='닉네임을 입력해 주세요' required onChange={handleData} value={displayName}/>
              </label>
              <SubmitBtn type='submit'>회원가입</SubmitBtn>
            </InfoForm>
            <Link to="/login" className={styles.movePage}>이미 회원이신가요? | 로그인 하러 가기</Link>
          </section> 
        </div>
      </div>
    </div>
  )
}

export default Signup
