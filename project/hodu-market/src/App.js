import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Join from "./pages/join/Join";
import ProdDetail from "./pages/prodDetail/ProdDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/prod" element={<ProdDetail />} />
    </Routes>
  );
}
export default App;
