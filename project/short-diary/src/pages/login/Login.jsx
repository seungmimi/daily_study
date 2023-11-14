import styles from './Login.module.css'
import InfoForm from '../../component/InfoForm'
import SubmitBtn from '../../component/SubmitBtn'

import { useLogin } from '../../hooks/useLogin';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, isPending, login} = useLogin();

  const handleData = (event) => {
      if (event.target.type === "email") {
          setEmail(event.target.value);
      } else if (event.target.type === "password") {
          setPassword(event.target.value);
      }
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email, password);
      login(email, password);
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
            <h2>길었던 나의 하루를 짧은 일기장에 기록해 보세요</h2>
            <InfoForm onSubmit={handleSubmit}>
              <h3>LOGIN</h3>
              <label>
                이메일
                <input type='email' placeholder='이메일을 입력해주세요' required onChange={handleData} value={email} />
              </label>
              <label>
                비밀번호
                <input type='password' placeholder='비밀번호를 입력해 주세요' required onChange={handleData} value={password} autoComplete='currnet-password'/>
              </label>
              {isPending && <strong>로그인진행 중 입니다.</strong>}
              {!isPending && <SubmitBtn type='submit'>하루 기록하러 가기</SubmitBtn>}
              {error && <strong>{error}</strong>}
            </InfoForm>
            <Link to="/signup" className={styles.movePage}>아직 계정이 없으신가요? | 회원 가입 하러 가기</Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login
