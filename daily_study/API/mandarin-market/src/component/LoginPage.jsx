import React, { useState } from 'react';

function LoginPage({handlePage}) {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    //API에 요청 보내기
    const loginFn = async (email, pw)=>{
        const baseUrl = 'https://api.mandarin.weniv.co.kr';
        const reqPath = '/user/login';
        const reqUrl = baseUrl+reqPath

        //1. API에 보낼 로그인 정보 셋팅
        const loginData = {
            "user": {
                "email": email,
                "password": pw
            }
        };
        //2. API에 로그인 정보를 기반으로 로그인 요청하기
        // -> try,catch: 로그인에 실패하여 토큰정보가 없을 경우 등 에러를 감지
        try{
        const res = await fetch(reqUrl,{
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(loginData)
        });

        //3. 로그인 토큰 꺼내기
        const json = await res.json();
        console.log(json);
        const token = json.user.token;

        //4. 로컬 스토리지에 토큰 저장 -> 로그인 상태 유지
        localStorage.setItem('token',token);
        }catch (error){
            console.log('에러가 발생')
        }   
    }

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputPw = (e) => {
        setPw(e.target.value);
    }
    const submitLogin = (e) => {
        e.preventDefault();
        loginFn(email, pw);
    }
    return (
    <>
        <h1>로그인</h1>
        <section>
            <h2>이메일, 비밀번호 입력</h2>
            <form onSubmit={submitLogin}>
                <input type='text' placeholder='이메일' value={email} onChange={inputEmail}></input>
                <input type='text' placeholder='비밀번호' value={pw} onChange={inputPw}></input>
                <button type='submit'>로그인</button>
                <button type='button' onClick={handlePage}>회원가입</button>
            </form>
        </section>
    </>
    );
}

export default LoginPage;