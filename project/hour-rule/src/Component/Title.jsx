//css
import styles from './css/Title.module.css'

//img
import logo from './img/title.png'
import quotes from './img/quotes.png'


function Title() {
    
    return (
    <header>
        <div className={styles.logoBox}>
            <img src={logo} alt='1만 시간의 법칙'/>
        </div>
        <h1 className={styles.title}>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</h1>
        <div className={styles.textBox}>
            <p><strong>1만 시간의 법칙</strong>은</p>
            <p>
                여러 분야의 전문가가 되기 위해서는 <br />
            최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </p>
        </div>
    </header>
    );
}

export default Title;