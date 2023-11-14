import React, { useState } from 'react'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore'


export default function DiaryList({ diaries }) {
    const { deleteDocument, editDocument} = useFirestore('diary');

    //수정 여부 처리
    const [isEdit, setEdit] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editText, setEditText] = useState('');

    return (
        <>
            {
                diaries.map((item) => {
                    const toggleEdit = () => {
                        //이전 상태값사용
                        setEdit((prevTheme)=>{
                            return prevTheme = !isEdit
                        });
                        setEditTitle(item.title);
                        setEditText(item.text);

                        item.isEdit = !isEdit;

                    }

                    const handleData = (event) => {
                        if (event.target.id === 'diary-title-edit') {
                            setEditTitle(event.target.value);
                            event.target.value = editTitle;
                        } else if (event.target.id === "diary-content-edit") {
                            setEditText(event.target.value);
                            event.target.value = editText;
                        }
                    }

                    const handleEdit = () => {
                        editDocument(item.id, {editTitle, editText, isEdit});
                        toggleEdit();
                    }

                    return (
                        <li key={item.id}>
                            {!item.isEdit ? 
                            <>
                                <article className={styles["diary-article"]}>
                                    <header>
                                        <div className={styles["article-title-box"]}>
                                            <h3 className={styles["article-title"]}>{item.title}</h3>
                                            <time className={styles["article-time"]} dateTime={item.createdTime.toDate()}>{item.createdTime.toDate().toString().replace(/GMT.*$/, "")}</time>
                                        </div>
                                        <div className={styles["btn-group"]}>
                                            <button type="button" onClick={toggleEdit} className={styles["btn-edit"]} disabled={isEdit}>
                                                <i className='icon icon-edit' /> 수정
                                            </button>
                                            <span></span>
                                            <button type="button" onClick={() => {deleteDocument(item.id)}} disabled={isEdit}>
                                                <i className='icon icon-delete' /> 삭제
                                            </button>
                                        </div>
                                    </header>
                                    <p className={styles["article-content"]}>{item.text}</p>
                                </article>
                            </>
                            :
                            <>
                                <article className={styles["diary-article"]}>
                                    {/* 수정할 제목 */}
                                    <header>
                                        <div className={styles["article-title-box"]}>
                                            <input className={styles["article-title"]} id="diary-title-edit" value={editTitle} onChange={handleData}/>
                                            <time className={styles["article-time"]} dateTime={item.createdTime.toDate()}>{item.createdTime.toDate().toString().replace(/GMT.*$/, "")}</time>
                                        </div>
                                        <div className={styles["btn-group"]}>
                                            <button type="button" onClick={toggleEdit}>
                                                취소
                                            </button>
                                            <span></span>
                                            <button onClick={handleEdit}>저장</button>
                                        </div>
                                    </header>
                                    {/* 수정할 내용 */}
                                    <textarea className={styles["article-content"]} id="diary-content-edit" value={editText} onChange={handleData}/>

                                </article>
                            </>
                            }
                        </li>
                    )
                })
            }
        </>
    )
}