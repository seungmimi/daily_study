import { useReducer } from "react"
import { appFirestore, timestamp } from "../firebase/config"
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore"

const initState = {
    // document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환합니다. 
    // isPending: 통신중인지 아닌지 상태
    // success : 요청에 대한 응답의 성공 유무
    document : null,
    isPending : false,
    error: null,
    success: false
}

const storeReducer = (state, action) => {
    switch (action.type){
        case 'addDoc':
            return{
                isPending: false,
                document: action.payload,
                success: true,
                error: null
            }
        case 'error':
            return{
                isPending: false,
                document: null,
                success: false,
                error: action.payload,
            }
        case 'isPending':
            return{
                isPending: true,
                document: null,
                success: false,
                error: null,
            }
        case 'deledteDoc':
            return{
                isPending: false,
                document: null,
                success: true,
                error: null,
            }
        default: return state
    }
}
//transaction: 컬렉션(폴더)의 이름을 받아올 파라미터
export const useFirestore = (transaction) => { 
    const [response, dispatch] = useReducer(storeReducer, initState);
    // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬렉션을 만들지는 않았지만, 
    // 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성해줍니다. 
    const colRef = collection(appFirestore, transaction);

    // 컬렉션에 문서를 추가합니다.
    const addDocument = async(doc) => {
        try {
            const createdTime = timestamp.fromDate(new Date());
            //addDoc(컬렉션의 참조값, 데이터) -> 문서의 참조값을 반환
            const docRef = await addDoc(colRef, {...doc, createdTime});
            dispatch({type: 'addDoc', payload: docRef})
        }catch(error){
            dispatch({type: 'error', payload: error.message})
        }
    }

    // 컬렉션에서 문서를 제거합니다.
    const deleteDocument = async(id) => {
        dispatch({type: 'isPending'});
        try{
            //deleteDoc: 지정된 문서를 삭제
            const docRef = await deleteDoc(doc(colRef, id));
            dispatch({type: 'deledteDoc', payload: docRef});
            console.log(doc(colRef, id));
            console.log(colRef);
        }catch(error){
            dispatch({type: 'error', payload: error.message});
            console.error(error);
        }

    }

    return { addDocument, deleteDocument, response }
}