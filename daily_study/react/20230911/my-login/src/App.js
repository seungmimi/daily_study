import LoginForm from "./Component/Login";
import HomePage from "./Component/Hompage";
import { useState } from "react";
import "../src/Component/common.css"

function App() {
  const user = {
    idUser: 'test.com',
    pwUser: 1234
  }
  //로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);

  //로그인 계정을 담는 state
  const [userId, userIdSet] = useState('');

  return (
        login ? <HomePage setLogin = {setLogin} userId = {userId}/> : <LoginForm infouser = {user} setLogin = {setLogin} userIdSet={userIdSet}/>
  );
}
export default App;
