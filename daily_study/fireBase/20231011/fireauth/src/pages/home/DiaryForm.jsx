import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore';

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
        console.log(title, text);
    }


    return (
        <form onSubmit={handleSubmit} className={styles["input_form"]} >
            <div>
                <label className="a11y-hidden" htmlFor="diary-title">일기 제목</label>
                <input className="input_style" id="diary-title" type="text" placeholder="제목" required onChange={handleData} value={title} />
            </div>
            <div>
                <label className="a11y-hidden" htmlFor="diary-content">일기 내용</label>
                <textarea className={styles["diary_textarea"]} id="diary-content" placeholder="오늘의 비밀은 무엇인가요?" onChange={handleData} value={text}></textarea>
            </div>
            <button className={styles["enabled_btn"]} type="submit">작성하기</button>
        </form>
    )
}