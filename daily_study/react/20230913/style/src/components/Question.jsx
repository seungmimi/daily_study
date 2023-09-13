import React from "react";
import style from "./Question.module.css"

const Question = () => {
    return (
        <div className={style.box}>
        <h2 className={style.text}>Q&A</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
            corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
            aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
            Nemo, ullam.
        </p>
        </div>
    );
};

export default Question;