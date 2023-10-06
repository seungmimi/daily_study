import React from 'react';

function LoginPage() {
    return (
    <>
        <h1>로그인</h1>
        <section>
            <h2>이메일, 비밀번호 입력</h2>
            <form>
                <input type='text' placeholder='이메일'></input>
                <input type='text' placeholder='비밀번호'></input>
                <button type='submit'>로그인</button>
            </form>
        </section>
    </>
    );
}

export default LoginPage;