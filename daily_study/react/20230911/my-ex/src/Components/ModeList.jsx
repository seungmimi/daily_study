import React, {useState} from "react";
import ModeWindow from "./ModeWindow";
import ModeListItem from "./ModeListItem";

function ModeList(){
    const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];

    //useState
    let [mode, modeSet] = useState("아직 선택되지 않았어요!");
    function clickMode(e){
        modeSet('기분이 ' + e.target.childNodes[1].textContent);
    }

    return(
        <>
        <ul className='modeList'>
            {menus.map((modeEl, index) => {
                return <ModeListItem key={index} mode={modeEl} onClickFn = {clickMode}/>
            })}
        </ul>
        <ModeWindow mode={mode}/>
        </>
    )
}
export default ModeList;