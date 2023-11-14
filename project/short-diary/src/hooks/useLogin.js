import { useState } from "react"
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const {dispatch} = useAuthContext();

    const login = (email, password) => {
        setIsPending(true);
        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                dispatch({type: 'login' , payload: user });
                setIsPending(false);
                if(!user){
                    throw new Error('회원정보가 일치하지 않습니다.')
                }
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.error(error);
            });
    }
    return {error, isPending, login}
}