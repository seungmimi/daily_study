import ModeList from "./Components/ModeList";
import './Components/common.css';

function App() {
  return (
    <main className="wrap">
      <h1>오늘의 기분을 선택해주세요 ☺️</h1>
      <div className="contentArea">
        <ModeList />
      </div>

    </main>

  );
}
export default App;
