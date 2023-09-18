import React from 'react';
import licatImg from '../../img/licat.png'
import './Modal.css'

function Modal() {
    return (
        <article id="modal">
            <div class="modal-wrap">
                <h2>화이팅!! &#9829;&#9829;&#9829;</h2>
                <h3>당신의 꿈을 응원합니다!</h3>
                <img src={licatImg} alt="라이켓의 응원" />
                <button type="button" class="btn-close">종료하고 진짜 훈련하러 가기 GO!GO!</button>
            </div>
        </article>
    );
}

export default Modal;