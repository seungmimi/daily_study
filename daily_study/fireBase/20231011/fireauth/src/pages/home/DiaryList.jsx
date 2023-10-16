import React, { useState } from 'react'
import styles from './Home.module.css'
import iconEdit from '../../images/icon/icon-edit.svg'
import iconDelete from '../../images/icon/icon-delete.svg'
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
                diaries.map((item, i) => {
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

                    // console.log(item.createdTime.toDate());
                    return (
                        <li key={item.id}>
                            {!item.isEdit ? 
                            <>
                                <article className={styles["diary_article"]}>
                                    <header>
                                        <h3 className={styles["article_title"]}>{item.title}</h3>
                                        <time className={styles["article_time"]} dateTime="2023-03-15">2023.02.24.THU</time>
                                    </header>
                                    <p className={styles["article_content"]}>{item.text}</p>
                                    <div className={styles["btn_group"]}>
                                        <button type="button" onClick={toggleEdit} className={styles["btn_edit"]} disabled={isEdit}>
                                            <img src={iconEdit} alt="수정" />
                                        </button>
                                        <span></span>
                                        <button type="button" onClick={() => {deleteDocument(item.id)}} disabled={isEdit}>
                                            <img src={iconDelete} alt="삭제" />
                                        </button>
                                    </div>
                                </article>
                            </>
                            :
                            <>
                                <article className={styles["diary_article"]}>
                                    {/* 수정할 제목 */}
                                    <header>
                                        <input className={styles["article_title"]} id="diary-title-edit" value={editTitle} onChange={handleData}/>
                                        <time className={styles["article_time"]} dateTime="2023-03-15">2023.02.24.THU</time>
                                    </header>
                                    {/* 수정할 내용 */}
                                    <textarea className={styles["article_content"]} id="diary-content-edit" value={editText} onChange={handleData}/>
                                    <div className={styles["btn_group"]}>
                                        <button type="button" onClick={toggleEdit}>
                                            취소
                                        </button>
                                        <span></span>
                                        <button onClick={handleEdit}>저장</button>
                                    </div>
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