import { useState } from "react"
import Modal from "./Modal";

function HomePage(prop){
    //모달 노출 여부 체크
    const [show, showFn] = useState(true);
    function modalshow(){
        showFn(false);
    }

    const handleLogout = (event) => {
        prop.setLogin(false);
    }
    return(
        <div className="hompage-main">
            {show ? <Modal modalshow = {modalshow}/> : null}
            <header>
                <h1>✨Hello World!✨</h1>
                <div className="user-info">
                    <strong className="home-title">환영합니다 <span>{prop.userId}</span> 님!</strong>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            </header>
            <main>
                <section className="test-area">
                    <strong className="test-title">Oops..!🫠</strong>
                    <h3>준비중 페이지 입니다.</h3>
                    <strong>현재 로그인 계정 {prop.userId}</strong>
                </section>
            </main>
        </div>
    )
}
export default HomePage;