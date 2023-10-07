import LoginPage from "./component/LoginPage";
import JoinPage from "./component/JoinPage";
import { createElement, useState } from "react";
function App() {
  const [page, setPage] = useState(true);
  const [myInfo, setMyInfo] = useState('');
  const handlePage = () => {
    setPage(prevPage => !prevPage);
  }
  const getMyinfo = async () => {
    const token = localStorage.getItem("token");
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user/myinfo'
    const res = await fetch(reqUrl,{
      method: "GET",
      headers:{
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      }
    });
    const json = await res.json();
    setMyInfo(JSON.stringify(json));
  }
  return (
    <div>
      <button type="button" onClick={getMyinfo}>내 정보 불러오기</button>
      <p>{myInfo}</p>
      {page?<LoginPage handlePage={handlePage}/>:<JoinPage handlePage={handlePage}/>}
    </div>
  );
}
export default App;
