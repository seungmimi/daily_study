//css
import styles from './css/Main.module.css'

function Input(){
    return(
        <section className={styles.insertDataWrap}>
            <div className={styles.insertData}>
                <p>나는 <input type='text' placeholder='예)프로그래밍' className={styles.basicInput}></input> 전문가가 될 것이다.</p>
                <p>그래서 앞으로 매일 하루에 <input type='number' placeholder='예)5시간' className={styles.basicInput}></input> 시간씩 훈련할 것이다.</p>
            </div>
            <button className={styles.basicBtn_y}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </section>
    )
}
function Result(){
    return(
        <section className={styles.resultDataWrap}>
            <div className={styles.resultData}>
                <p>당신은 <strong>프로그래밍</strong>전문가가 되기 위해서</p>
                <p>대략 <strong>5110</strong>일 이상 훈련하셔야 합니다! :)</p>
            </div>
            <div>
                <button className={styles.basicBtn_y}>훈련하러 가기 GO! GO!</button>
                <button className={styles.basicBtn_w}>공유하기</button>
            </div>
        </section>
    )
}

function Main() {
    return (
    <main>
        <Input />
        <Result />
    </main>
    );
}

export default Main;