import { atom } from "recoil";
import axios from "axios"

//유저 정보 관리
// const baseUrl = "https://openmarket.weniv.co.kr/"

export const userState = atom({
  key: "userState",
  default: {username: "", login_type: ""}
});

//로그인 여부 관리
export const isLoginState = atom({
  key: "isLoginState",
  default: localStorage.getItem("token") ? true : false
});


//로그아웃 기능