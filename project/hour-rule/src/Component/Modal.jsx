import React from 'react';
import styles from './css/Modal.module.css'
import ModalImg from './img/licat.png'

function Modal({setModalShow}) {
    return (
    <article className={styles.modal}>
        <div className={styles.modal_wrap}>
            <h2 className={styles.modal_title}>화이팅!!&#9829;&#9829;&#9829;</h2>
            <h3 className={styles.modal_sub_title}>당신의 꿈을 응원합니다!</h3>
            <img src={ModalImg} />
            <button className={styles.basicBtn} type='button' onClick={()=>{setModalShow(false)}}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
        </div>
    </article>
    );
}

export default Modal;