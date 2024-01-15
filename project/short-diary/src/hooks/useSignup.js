import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const {dispatch} = useAuthContext();

    const signup = (email, password, displayName) => {
        //회원가입 처리 함수
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if(!user){
                    throw new Error('회원정보를 불러올 수 없습니다.')
                }
                //회원정보 업데이트 함수
                updateProfile(appAuth.currentUser, {displayName})
                .then(()=>{
                    //회원정보를 context에 업데이트
                    dispatch({type: 'login', payload: user})
                    setError(null);
                    setIsPending(false);
                }).catch((err)=>{
                    setError(err.message);
                    setIsPending(false);
                    console.error(error);
                })
            })
            .catch((err) => {
                setError('이미 사용중인 이메일 입니다! 다른 이메일로 시도해주세요');
                setIsPending(false);
                console.error('회원가입 실패:' + err);
            });
    }
    return {error, isPending, signup}
}