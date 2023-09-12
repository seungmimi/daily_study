import { useState } from "react";
import Counter from "./counter";
function App2(){
    const [data, setData] = useState([
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
        },
        {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
        },
        {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
        },
        {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
        },
    ]);

    // const [remove, setRemove] = useState(false);
    // function removeBtn(e){
    //     if(remove){
    //         setRemove(true);
    //     }else{
    //         e.target.parentNode.remove();
    //     }
    // }

    //이러한 방식을 "함수형 업데이트"라고 합니다
    //장점: 콜백함수의 인자에 이전의 상태가 들어가는것을 리액트가 보장  
    function del(id){
        setData((prevData) => {
            return prevData.filter((item)=>{
                return item.id !== id;
            })
        }
        )
        
    }

    return(
        <>
            <ul>
                {data.map((i) => {
                    return(<li key={i.id}>
                        <h2>{i.title}</h2>
                        <strong>{i.price}</strong>
                        <button onClick={() => del(i.id)}>삭제</button>
                    </li>)
                })}
            </ul>
            <Counter />
        </>
    )
}
export default App2;
