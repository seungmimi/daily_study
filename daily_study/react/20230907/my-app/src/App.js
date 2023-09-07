import './App.css';
function App() {
  const dateInfo = new Date();
  //getFullYear: 년도 반환
  let dateYear = dateInfo.getFullYear();
  let dateMonth = dateInfo.getMonth()+1;
  let dateDay = dateInfo.getDate();
  let dateHours = dateInfo.getHours();
  let dateMinutes = dateInfo.getMinutes();
  let dateSeconds = dateInfo.getSeconds();
  return (
    <div className="App">
      <h1 style={{"backgroundColor":"blue"}}>안녕 라이켓!🦁</h1>
      <h1>안녕 라이켓!</h1>
      <p className='newClass'></p>
      <div style={{"backgroundColor":"#CDECFA"}}>
        <h2>🗓️ 날짜와 시간</h2>
        <h2 style={{"color":"royalblue"}}>년 : {dateYear}</h2>
        <h2>월/일 : {dateMonth}/{dateDay}</h2>
        <h2>시간 : {dateHours}시 {dateMinutes}분 {dateSeconds}초</h2>
      </div>
    </div>
  );
}

export default App;
