import React, { useState } from 'react'

export default function LoginForm(prop){

    const [id, setId] = useState("");
    const [pw, setpw] = useState("");

    const handleLoginInput = (event) => {
        setId(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setpw(event.target.value);
    }
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if(id === prop.infouser.idUser && pw === prop.infouser.pwUser.toString()){
            prop.setLogin(true);
            prop.userIdSet(id);
        }else{
            alert("아이디 또는 비밀번호를 확인해 주세요 🫠");
        }
    }
    return (
        <main className='login-main'>
                <div className='login-wrap'>
                <h1>✨ Hello World! ✨</h1>
                <form onSubmit={handleLoginSubmit} className='login-form'>
                    <label>
                        아이디
                        <input type="text" onChange={handleLoginInput} />
                    </label>
                    <label>
                        비밀번호
                        <input type="password" onChange={handlePasswordInput} />
                    </label>
                    <button type="submit">로그인</button>
                </form>
            </div>
        </main>

    );
}