import { atom } from "recoil";

//유저 정보 관리
// const baseUrl = "https://openmarket.weniv.co.kr/"

export const userState = atom({
  key: "userState",
  default: {username: localStorage.getItem("username") || '',
            login_type: localStorage.getItem("login_type") || ''},
});

//로그인 여부 관리
export const isLoginState = atom({
  key: "isLoginState",
  default: localStorage.getItem("token") ? true : false
});
