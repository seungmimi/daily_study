import React, { useState, useRef } from "react";

const App3 = () => {
    const [emailValue, setEmailValue] = useState(""); // email state 값
    const [pwValue, setPwValue] = useState(""); // pw state 값

    const emailInput = useRef(null);
    const pwiInput = useRef(null);

const inputCheck = (e) => {
    e.preventDefault();

    if(emailInput.current.value === ""){
        alert('이메일을 입력해 주세요!');
        emailInput.current.focus();
        return;
    } else if(pwiInput.current.value === ""){
        alert('비밀번호를 입력해 주세요!');
        pwiInput.current.focus();
        return;
    }

    // console.log(document.querySelectorAll('input'));
    // setEmailValue(document.querySelectorAll('input')[0].value);
    // setPwValue(document.querySelectorAll('input')[1].value);
    setEmailValue(emailInput.current.value);
    setPwValue(pwiInput.current.value);
    };
    return (
        <form onSubmit={inputCheck} style={{ display: "flex", flexDirection: "column" }}>
        <label>
            이메일 : <input type="email" ref={emailInput} />
        </label>
        <label>
            비밀번호 : <input type="password" ref={pwiInput}/>
        </label>

        <button type="submit" style={{ width: "100px" }}>
            로그인
        </button>
        <span>입력한 이메일 : {emailValue}</span>
        <span>입력한 비밀번호 : {pwValue}</span>
        </form>
    );
};

export default App3;