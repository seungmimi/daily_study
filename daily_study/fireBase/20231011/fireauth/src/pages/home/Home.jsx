import React from 'react'
import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';


export default function Home() {

    const { user } = useAuthContext();
    const {documents, err} = useCollection('diary', ["uid", "==", user.uid]);
    const getDate = new Date();
    const todayDate = getDate.toLocaleDateString()

    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <h2 className="heart">{todayDate}의 비밀일기</h2>
                <DiaryForm uid = {user.uid}></DiaryForm>
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    {err && <strong>{err}</strong>}
                    {documents && <DiaryList diaries = {documents}></DiaryList>}
                </ul>
            </section>
        </div>
    )
}