import { useState, useMemo, useRef } from 'react'

function App2() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    const inputName = useRef(null);
    const inputId = useRef(null);

    function handleInputName(event){
        setName(event.target.value);
        console.log('렌더링 - 1');
    }
    function handleInputId(event){
        setId(event.target.value);
        console.log('렌더링 - 2');
    }

    function handleSubmit(event){
        event.preventDefault();
        inputName.current.value = '';
        inputId.current.value = '';
        inputName.current.focus();

        console.log(name, id);

        const newInfo = [...userInfo,{name, id}];
        setUserInfo(newInfo);

        console.log('렌더링 - 3');
    }

    function getNum(list){
        console.log('렌더링!');
        return list.length
    }

    const itemLength = useMemo(()=>{
        return getNum(userInfo);
    },[userInfo])

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='이름을 입력해 주세요' onChange={handleInputName} ref={inputName}></input>
                <input type='text' placeholder='아이디를 입력해 주세요' onChange={handleInputId} ref={inputId}></input>
                <button>회원명부 작성</button>
            </form>
            <ul>
                {
                    userInfo.map((value, index)=>{
                        return(
                            <li key={index}>
                                <h3>이름: {value.name}</h3>
                                <strong>아이디: {value.id}</strong>
                            </li>
                        )
                    })
                }
            </ul>
            <span>{itemLength}</span>
        </>
    )
}
export default App2;