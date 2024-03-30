import React, { useRef, useState } from 'react'

const useRefEx = () => {
  const idInput = useRef(null);
  const pwInput = useRef(null);

  const [idvalue, setIdvalue] = useState("");
  const [pwvalue, setPwvalue] = useState("");

  const inputEvent = (e) => {
    e.preventDefault();
    if(idInput.current.value === ""){
      idInput.current.focus();
      alert('아이디를 입력해 주세요');
      return;
    }else if(pwInput.current.value === ""){
      pwInput.current.focus();
      alert('바밀번호를 입력해 주세요');
      return;
    }
    setIdvalue(idInput.current.value);
    setPwvalue(pwInput.current.value);
  }

  return (
    <>
        <form onSubmit={inputEvent} style={{ display: "flex", flexDirection: "column" }}>
        <label>
          아이디 : <input type='text' ref={idInput}/>
        </label>
        <label>
          비밀번호 : <input type='text' ref={pwInput}/>
        </label>
        <button type='submit' style={{ width: "100px" }}>로그인</button>
      </form>
      <span>입력한 아이디: {idvalue}</span>
      <span>입력한 비밀번호: {pwvalue}</span>
    </>

  )
}

export default useRefEx
