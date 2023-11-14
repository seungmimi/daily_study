import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();
const authReducer = (state, action) => {
    switch(action.type){
        case 'login' :
            return {...state, user: action.payload}
        case 'logout' :
            return {...state, user: null}
        case 'authIsReady' : 
            return {...state, user: action.payload, isAuthReady: true}
        default: 
            return state
    }
}
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {user: null, isAuthReady: false});

    useEffect(() => {
        //1. onAuthStateChanged의 반환값은 unsubscribe(구독 취소)를 반환 -> unsubscribe변수에 반환값을 담음
        const unsubscribe = appAuth.onAuthStateChanged(function(user){
            dispatch({type: 'authIsReady', payload: user});
        });
        return () => {
            unsubscribe();
        }

    },[])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }
