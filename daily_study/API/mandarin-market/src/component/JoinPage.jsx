import { useState } from "react"

const JoinPage = ({handlePage})=>{
    const joinFn = async (joinData) => {
        const reqUrl = 'https://api.mandarin.weniv.co.kr/user';
        const res = await fetch(reqUrl,{
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(joinData)
        });
        const json = await res.json();
        console.log(json);
    }

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setUserPw] = useState('');
    const [accountname, setUseraccountname] = useState('');
    const [imgSrc, setImgSrc] = useState('https://api.mandarin.weniv.co.kr/Ellipse.png');
    const [info, setInfo] = useState('');
    const inputUserName = (e) => {
        setUserName(e.target.value);
    }
    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputUserPw = (e) => {
        setUserPw(e.target.value);
    }
    const inputAccountname = (e) => {
        setUseraccountname(e.target.value);
    }
    const inputinfo = (e) => {
        setInfo(e.target.value);
    }

    const uploadImage = async(imgFile) => {
        //이미지 전송 코드
        const baseUrl = 'https://api.mandarin.weniv.co.kr/'
        const reqUrl = baseUrl+'image/uploadfile'

        //폼데이터 만들기
        const form = new FormData();
        //폼데이터.append('키',값)
        form.append("image",imgFile);

        const res = await fetch(reqUrl,{
            method: "POST",
            body: form

        });
        const json = await res.json();
        const imgUrl = baseUrl+json.filename;
        setImgSrc(imgUrl);
    }

    const onChangeImg = (e) => {
        const imgFile = e.target.files[0];
        uploadImage(imgFile);
    }

    const submitJoin = () => {
        const joindata = {
            user: {
                username: userName,
                email: email,
                password: pw,
                accountname: accountname,
                intro: info,
                image:imgSrc
            }
        }
        joinFn(joindata);
    }

    return(
        <>
        <section >
            <h2 >이메일로 회원가입</h2>
            <div >
                <label htmlFor="emailInput">이메일</label>
                <input type="email" id="emailInput" name="email" placeholder="이메일 주소를 알려주세요." vlaue = {email} onChange={inputEmail}/>
            </div>
            <div>
                <label htmlFor="passwordInput">비밀번호</label>
                <input type="password" name="password" id="passwordInput" placeholder="비밀번호를 설정해 주세요." vlaue = {pw} onChange={inputUserPw}/>
            </div>
            <button type="button" >다음</button>
        </section>

        <section>
            <h2 >프로필 설정</h2>
            <p>나중에 언제든지 변경할 수 있습니다.</p>
            <label htmlFor="profileImg">
                <img src={imgSrc} alt="" id="imagePre"/>
            </label>
            <input type="file" id="profileImg" name="image" accept="image/*" onChange={onChangeImg}/>
            <div >
                <label htmlFor="userNameInput">사용자 이름</label>
                <input type="text" id="userNameInput" name="username" placeholder="2~10자 이내여야 합니다." vlaue = {userName} onChange={inputUserName}/>
            </div>
            <div >
                <label htmlFor="userIdInput">계정 ID</label>
                <input type="text" id="userIdInput" name="accountname" placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다." vlaue = {accountname} onChange={inputAccountname}/>
            </div>
            <div>
                <label htmlFor="userIntroInput">소개</label>
                <input type="text" id="userIntroInput" name="intro" placeholder="자신과 판매할 상품에 대해 소개해 주세요." vlaue={info} onChange={inputinfo}/>
            </div>
            <button type="button" onClick={submitJoin}>감귤마켓 시작하기</button>
        </section>
        <button type="button" onClick={handlePage}>로그인 하러가기</button>
        </>
    )
}

export default JoinPage