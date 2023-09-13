import React from "react";
import Question from "./components/Question";
import style from "./App.module.css"

const App = () => {
  return (
    <>
      <nav className={style.box}>
        <ul>
          <li id="detail" className={style.text}>
            상세정보
          </li>
          <li id="qa" className={style.text}>
            Q&A
          </li>
          <li id="review" className={style.text}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;