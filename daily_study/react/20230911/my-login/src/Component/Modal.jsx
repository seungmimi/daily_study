export default function Modal({modalshow}){

    return(
        <div className="modal-backdrop">
            <div className="modal">
                <h2 className="title">회원이 되신것을 환영 합니다!</h2>
                <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam, totam</p>
                <button className="close-btn" onClick={()=>{modalshow(false)}}>닫기</button>
            </div>
        </div>
        
    )
}