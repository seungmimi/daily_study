import React, { useState } from 'react'


export default function App3() {

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
        if(id === ''){
            alert("아이디를 입력하지 않았습니다 🫠");
        }

        if(pw === ''){
            alert("패스워드를 입력하지 않았습니다 🫠");
        }
    }
    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 :
                <input type="text" onChange={handleLoginInput} />
            </label>
            <br />
            <label>
                비밀번호 :
                <input type="password" onChange={handlePasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}