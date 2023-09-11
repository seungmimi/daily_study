import React, {useState} from "react";
function Resume(props){

    let [like, setLike] = useState("");

    function clickLike(){
        like === "" ? setLike('Like'):setLike("");        
    }
    return(
    <div style = {{border: '1px solid #000'}}>
        <h2>{props.name} 자기소개서</h2>
        <h2>{props.hello}</h2>
        <h3>취미 : <strong>{props.hobby}</strong></h3>
        <h3>좋아하는 음식 : <strong>{props.food}</strong></h3>
        <h3>좋아하는 색 : <strong style = {{'color':props.color}}>{props.color}</strong></h3>
        <button onClick={clickLike}>like </button><span>{like}</span>
    </div>
    )
}
export default Resume;