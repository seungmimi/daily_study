import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore';
import SubmitBtn from '../../component/SubmitBtn'

export default function DiaryForm({uid}) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const isEdit = false;
    const {addDocument, response} = useFirestore('diary');

    const handleData = (event) => {
        if (event.target.id === 'diary-title') {
            setTitle(event.target.value);
        } else if (event.target.id === "diary-content") {
            setText(event.target.value);
        }
    }
    //response.success의 상태값이 변할 때, 작성 텍스트 리셋
    useEffect(()=>{
        if(response.success){
            setTitle('');
            setText('');
            response.success = false;
        }

    }, [response.success])

    const handleSubmit = (event) => {
        event.preventDefault();
        addDocument({uid, title, text, isEdit});
    }


    return (
        <form onSubmit={handleSubmit} className={styles["input-form"]} >
            <div>
                <label className="a11y-hidden" htmlFor="diary-title">일기 제목</label>
                <input className="input-style" id="diary-title" type="text" placeholder="제목을 입력해 주세요" required onChange={handleData} value={title} />
            </div>
            <div>
                <label className="a11y-hidden" htmlFor="diary-content">일기 내용</label>
                <textarea className={styles["diary-textarea"]} id="diary-content" placeholder="오늘은 어떤 하루를 보냈나요?" onChange={handleData} value={text}></textarea>
            </div>
            <SubmitBtn type='submit'>작성하기</SubmitBtn>
        </form>
    )
}