import React, { useState } from 'react'
import styles from './css/Main.module.css';

//계산 -> 화면 표시 함수
function OpenResult(props){
    return(
        <section className={styles.resultDataWrap}>
            <div className={styles.resultData}>
                <p>당신은 <strong>{props.goal}</strong>전문가가 되기 위해서</p>
                <p>대략 <strong>{props.time}</strong>일 이상 훈련하셔야 합니다! :)</p>
            </div>
            <div>
                <button className={styles.basicBtn}>훈련하러 가기 GO! GO!</button>
                <button className={`${styles.basicBtn} ${styles.white}`}>공유하기</button>
            </div>
        </section>
    )
}

function Input(){
    //목표 입력값 저장 함수
    const [goal, setGoal] = useState("");
    const goalInput = (event)=>{
        setGoal(event.target.value);
        console.log(goal);
    }
    //훈련시간 입력값 저장 함수
    const [time, setTime] = useState("");
    const timeInput = (event)=>{
        setTime( parseInt(10000 / parseInt(event.target.value)));
        console.log(time);
    }

    //결과 화면 UI 표시 함수
    const [result, setInput] = useState(false);
    function showResult(event){
        event.preventDefault();
        setInput(true);
        console.log(result);
        console.log(goal,time);
    }
    return(
        <>
            <section className={styles.insertDataWrap}>
                <div className={styles.insertData}>
                    <p>나는 <input type='text' placeholder='예)프로그래밍' className={styles.basicInput} onChange={goalInput}></input> 전문가가 될 것이다.</p>

                    <p>그래서 앞으로 매일 하루에 <input type='number' placeholder='예)5시간' className={styles.basicInput} onChange={timeInput}></input> 시간씩 훈련할 것이다.</p>
                </div>
                    <button className={styles.basicBtn} onClick={showResult}type='submit'>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            </section>
            {result ? <OpenResult goal={goal} time={time}/> : null}
        </>

    );
}

function Main() {
    return (
    <main>
        <Input />
    </main>
    );
}

export default Main;