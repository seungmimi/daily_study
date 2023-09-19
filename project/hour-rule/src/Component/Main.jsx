import React, { useState } from 'react'
import styles from './css/Main.module.css';
import { useRef } from 'react';

//계산 -> 화면 표시 함수
function OpenResult(props){
    return(
        <section className={styles.resultDataWrap}>
            <div className={styles.resultData}>
                <p>당신은 <strong>{props.goal}</strong>전문가가 되기 위해서</p>
                <p>대략 <strong>{props.time}</strong>일 이상 훈련하셔야 합니다! :)</p>
            </div>
            <div>
                <button className={styles.basicBtn} onClick={() => props.setModalShow(true)}>훈련하러 가기 GO! GO!</button>
                <button className={`${styles.basicBtn} ${styles.white}`}>공유하기</button>
            </div>
        </section>
    )
}

function Main({setModalShow}) {
    //목표,시간 입력
    const [goal, setGoal] = useState("");
    const goalValue = useRef(null);

    const [time, setTime] = useState("");
    const timeValue = useRef(null);

    const [result, setInput] = useState(false);

    const submitGaol = (e) => {
        e.preventDefault();
        if(goalValue.current.value === ""){
            alert('어떤전문가가 되고싶은지 입력해 주세요!');
            goalValue.current.focus();
            return;
        }else if(timeValue.current.value === ""){
            alert('하루 훈련시간을 입력해 주세요!');
            timeValue.current.focus();
            return;
        }
        setInput(true);
        setGoal(goalValue.current.value);
        setTime( parseInt(10000 / parseInt(timeValue.current.value)));
        console.log(goal, time);
    }

    //결과 화면 UI 표시 함수
    return (
    <main>
        <section className={styles.insertDataWrap}>
            <form onSubmit={submitGaol}>
                <div className={styles.insertData}>
                    <p>나는 <input type='text' placeholder='예)프로그래밍' className={styles.basicInput}  ref={goalValue}></input> 전문가가 될 것이다.</p>
                    <p>그래서 앞으로 매일 하루에 <input type='number' placeholder='예)5시간' className={styles.basicInput} ref={timeValue}></input> 시간씩 훈련할 것이다.</p>
                </div>
                <button className={styles.basicBtn} type='submit'>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            </form>
        </section>
        {result ? <OpenResult goal={goal} time={time} setModalShow ={setModalShow}/> : null}
    </main>
    );
}

export default Main;