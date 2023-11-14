import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { appFirestore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {
    //문서들의 데이터를 관리
    const [documents, setDocuments] = useState(null);
    //에러 상태를 관리
    const [err, setErr] = useState(null);

    useEffect(()=>{
        //사용자의 uid와 동일한데이터만 불러올 수 있도록 쿼리문 사용
        let q;
        if(myQuery){
            q = query(collection(appFirestore, transaction),where(...myQuery), orderBy("createdTime", "desc"));
        }

        //onSnapshot컬렉션의 참조값이 필요 -> collection함수 사용
        const unsubscribe = onSnapshot(myQuery ? q : collection(appFirestore, transaction),
        //snapshot: 참조한 컬렉션의 데이터가 다 담겨있음
            (snapshot)=>{
                let result = [];
                snapshot.docs.forEach((doc)=>{
                    //.data(): 데이터를 뽑아오기위한 함수
                    result.push({...doc.data(), id: doc.id});
                });
                setDocuments(result);
            },(error) => {
                setErr(error);
            }
        )
        return () => {
            unsubscribe();
        }
    },[]);
    return{documents, err}
}